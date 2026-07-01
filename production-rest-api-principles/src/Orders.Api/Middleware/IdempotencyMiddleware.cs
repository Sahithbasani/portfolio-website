using System.Collections.Concurrent;
using System.Text.Json;

namespace Orders.Api.Middleware;

public class IdempotencyMiddleware
{
    private readonly RequestDelegate _next;
    private static readonly ConcurrentDictionary<string, string> _keys = new();

    public IdempotencyMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // Only apply to POST /api/v1/orders
        if (HttpMethods.IsPost(context.Request.Method) && context.Request.Path.StartsWithSegments("/api/v1/orders", StringComparison.OrdinalIgnoreCase))
        {
            if (context.Request.Headers.TryGetValue("Idempotency-Key", out var keyHeader))
            {
                var key = keyHeader.FirstOrDefault();
                if (string.IsNullOrWhiteSpace(key))
                {
                    await _next(context);
                    return;
                }

                // If another request is being processed or already completed with this key, reject
                if (!_keys.TryAdd(key, "processing"))
                {
                    context.Response.StatusCode = StatusCodes.Status409Conflict;
                    context.Response.ContentType = "application/json";
                    var payload = new { code = "idempotency_conflict", detail = "Duplicate or in-flight request" };
                    await context.Response.WriteAsync(JsonSerializer.Serialize(payload));
                    return;
                }

                try
                {
                    await _next(context);

                    // Mark completed only on success (2xx)
                    if (context.Response.StatusCode >= 200 && context.Response.StatusCode < 300)
                    {
                        _keys[key] = "completed";
                    }
                    else
                    {
                        // Allow retry on failure
                        _keys.TryRemove(key, out _);
                    }
                }
                catch
                {
                    _keys.TryRemove(key, out _);
                    throw;
                }

                return;
            }
        }

        await _next(context);
    }
}
