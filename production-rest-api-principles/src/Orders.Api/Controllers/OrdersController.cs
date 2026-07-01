using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace Orders.Api.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class OrdersController : ControllerBase
{
    private static readonly List<Order> _store = new();

    [HttpGet]
    public ActionResult<IEnumerable<Order>> Get([FromQuery] int page = 1, [FromQuery] int pageSize = 25)
    {
        var items = _store.Skip((page - 1) * pageSize).Take(pageSize);
        return Ok(new { items, page, pageSize, total = _store.Count });
    }

    [HttpGet("{id:int}")]
    public ActionResult<Order> GetById(int id)
    {
        var order = _store.SingleOrDefault(x => x.Id == id);
        if (order == null) return NotFound();
        return Ok(order);
    }

    [HttpPost]
    public ActionResult<Order> Create([FromBody] CreateOrderRequest request)
    {
        if (!ModelState.IsValid)
            return ValidationProblem(ModelState);

        var id = _store.Count == 0 ? 1 : _store.Max(x => x.Id) + 1;
        var order = new Order(id, request.CustomerId, request.ProductId, request.Quantity, request.ShippingAddress, "submitted");
        _store.Add(order);
        return CreatedAtAction(nameof(GetById), new { id = order.Id }, order);
    }

    [HttpPut("{id:int}")]
    public ActionResult Update(int id, [FromBody] CreateOrderRequest request)
    {
        var order = _store.SingleOrDefault(x => x.Id == id);
        if (order == null) return NotFound();
        if (order.Status == "submitted")
        {
            order.ProductId = request.ProductId;
            order.Quantity = request.Quantity;
            order.ShippingAddress = request.ShippingAddress;
            return NoContent();
        }

        return Problem("Order state does not allow updates", statusCode: 409);
    }

    [HttpDelete("{id:int}")]
    [Authorize(Policy = "CanApproveOrders")]
    public ActionResult Delete(int id)
    {
        var order = _store.SingleOrDefault(x => x.Id == id);
        if (order == null) return NotFound();
        _store.Remove(order);
        return NoContent();
    }

    [HttpPost("{id:int}/cancellation")]
    public ActionResult RequestCancellation(int id)
    {
        var order = _store.SingleOrDefault(x => x.Id == id);
        if (order == null) return NotFound();
        if (order.Status == "submitted")
        {
            order.Status = "cancellation_requested";
            return Accepted(new { id = order.Id, status = order.Status });
        }

        return Conflict(new { code = "cannot_cancel", detail = "Order cannot be cancelled in its current state" });
    }
}

public record Order(int Id, int CustomerId, int ProductId, int Quantity, string ShippingAddress, string Status)
{
    public int Id { get; init; } = Id;
    public int CustomerId { get; set; } = CustomerId;
    public int ProductId { get; set; } = ProductId;
    public int Quantity { get; set; } = Quantity;
    public string ShippingAddress { get; set; } = ShippingAddress;
    public string Status { get; set; } = Status;
}

public class CreateOrderRequest
{
    [Required]
    [Range(1, int.MaxValue)]
    public int CustomerId { get; set; }

    [Required]
    [Range(1, int.MaxValue)]
    public int ProductId { get; set; }

    [Required]
    [Range(1, 100)]
    public int Quantity { get; set; }

    [Required]
    [MaxLength(200)]
    public string ShippingAddress { get; set; } = string.Empty;
}
