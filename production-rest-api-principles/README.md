# Production-ready REST API Design Principles

Production-ready REST API design principles with ASP.NET Core examples, diagrams, OpenAPI, testing, and CI/CD patterns.

## Why this project exists
This repository demonstrates practical patterns for building production-ready REST APIs with ASP.NET Core: clear contracts, boundary validation, observability, compatibility, and a disciplined delivery path. It includes a minimal sample Orders API and examples for common operational concerns.

## Architecture
- Minimal ASP.NET Core API (Orders.Api) using controllers
- In-memory sample data for demonstration
- Tests project with example unit tests
- OpenAPI (swagger) and sample Postman collection
- CI workflow for build and tests

Folder structure

production-rest-api-principles/
│
├── README.md
├── article/
│   └── production-rest-api-principles.pdf
├── diagrams/
├── src/
│   └── Orders.Api/
├── tests/
│   └── Orders.Api.Tests/
├── postman/
│   └── collection.json
├── openapi/
│   └── openapi.yaml
└── .github/
	└── workflows/

## How to run locally
Prerequisites: .NET SDK (8.0 or later)

1. cd src/Orders.Api
2. dotnet restore
3. dotnet run

The API will be available at https://localhost:5001 (or the port printed by dotnet). Swagger UI is available at /swagger.

## API endpoints

- GET /api/v1/orders
- GET /api/v1/orders/{id}
- POST /api/v1/orders
- PUT /api/v1/orders/{id}
- DELETE /api/v1/orders/{id}
- POST /api/v1/orders/{id}/cancellation

Examples demonstrating validation, ProblemDetails, JWT authentication, policy authorization, pagination, structured logging, and Swagger are included in the sample code.

## Testing
Run tests from the repository root:

dotnet test

## OpenAPI / Swagger
The generated OpenAPI file is in `openapi/openapi.yaml`. The running app exposes Swagger UI at /swagger.

## CI/CD
A basic GitHub Actions workflow builds and runs tests on push and pull request. See `.github/workflows/ci.yml`.

## Author
Sahith Basani

## Practical examples to include before merging
The sample app is intentionally minimal. Before merging to main, consider adding higher-quality, practical examples that demonstrate production concerns end-to-end:

- Idempotency and replay protection (Idempotency-Key header) — show server-side deduplication and tests (tests/integration/IdempotencyTests).
- ProblemDetails and consistent error shapes — centralized exception translation middleware and examples of mapped domain errors (src/Orders.Api/Middleware/ProblemDetailsMapper).
- Integration tests using WebApplicationFactory or TestServer — real pipeline tests for auth, validation, and failure modes (tests/Integration/OrdersApiTests).
- OpenAPI generation and contract tests — ensure generated openapi/openapi.yaml matches runtime behavior; add a contract-test job.
- Pagination and keyset cursor examples — demonstrate cursor tokens and stable ordering in queries.
- JWT authentication examples with sample token issuance (for dev) and policy-based authorization tests.
- Database-backed persistence using EF Core with migrations and an in-memory provider for tests (src/Orders.Api/Data, Migrations/).
- Dockerfile and docker-compose for local environment (Dockerfile, docker-compose.yml) and a sample SQL Server container for integration tests.
- Structured logging and trace propagation (Serilog + Activity) with examples of logs and traces for a sample request.
- Rate limiting and retry handling examples (IAsyncPolicy usage or ASP.NET middleware) and guidance for client behavior.

Each example should include code, configuration, a short README, and automated tests that validate the behavior.

## Roadmap & extension guide — how to add more content
If you (or contributors) want to expand this repository, follow this process to keep changes reviewable and safe:

1. Create a feature branch named `feature/<short-description>` from `main`.
2. Add code under an appropriate folder (e.g., `src/Orders.Api/Features/Idempotency`).
3. Add or update documentation: update `production-rest-api-principles/README.md` and add a focused README inside the feature folder describing the rationale and usage.
4. Add tests: unit tests and integration tests under `tests/` and ensure they run in CI.
5. Update `openapi/openapi.yaml` if request/response contracts change and add a contract test to CI that fails the PR if the generated spec diverges.
6. Add Dockerfile/docker-compose if the feature needs external services for local testing.
7. Run `dotnet test` locally and ensure all tests pass.
8. Open a pull request targeting `main` with a clear description, related issue (if any), and testing notes.

Checklist for PR reviewers
- Does the PR include tests for the new behavior?
- Are public API changes reflected in OpenAPI and documented?
- Does CI build and test the change?
- Are secrets and keys removed from code and moved to configuration or secrets stores?
- Is the change backward compatible, or if breaking, is a migration guide included?

## Contributing
Contributions are welcome. Please open issues to discuss large changes before sending a PR. Use branch names that describe the change, and keep commits small and focused.

