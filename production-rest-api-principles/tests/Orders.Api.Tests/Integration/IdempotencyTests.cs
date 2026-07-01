using System.Net;
using System.Net.Http.Json;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;

namespace Orders.Api.Tests.Integration;

public class IdempotencyTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly WebApplicationFactory<Program> _factory;

    public IdempotencyTests(WebApplicationFactory<Program> factory)
    {
        _factory = factory;
    }

    [Fact]
    public async Task Post_WithSameIdempotencyKey_ReturnsConflictOnSecondRequest()
    {
        var client = _factory.CreateClient();

        var request = new
        {
            CustomerId = 1,
            ProductId = 2,
            Quantity = 1,
            ShippingAddress = "123 Test St"
        };

        var key = "test-key-1";

        var first = await client.PostAsJsonAsync("/api/v1/orders", request, new System.Threading.CancellationToken());
        first.StatusCode.Should().Be(HttpStatusCode.Created);

        // second with same idempotency key should be rejected
        var message = new HttpRequestMessage(HttpMethod.Post, "/api/v1/orders")
        {
            Content = JsonContent.Create(request)
        };
        message.Headers.Add("Idempotency-Key", key);

        // include header on first as well for realism
        var firstMsg = new HttpRequestMessage(HttpMethod.Post, "/api/v1/orders")
        {
            Content = JsonContent.Create(request)
        };
        firstMsg.Headers.Add("Idempotency-Key", key);

        // send first with key
        var first2 = await client.SendAsync(firstMsg);
        first2.StatusCode.Should().Be(HttpStatusCode.Created);

        // send second with same key
        var second = await client.SendAsync(message);
        second.StatusCode.Should().Be(HttpStatusCode.Conflict);
    }
}
