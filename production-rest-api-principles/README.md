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
