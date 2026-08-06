export const site = {
  name: "Sahith Basani",
  title: "Senior Software Engineer",
  location: "Dallas-Fort Worth, Texas",
  email: "sahithbasani615@gmail.com",
  github: "https://github.com/Sahithbasani",
  url: "https://sahith.dev",
  summary:
    "Senior Software Engineer building reliable backend systems, cloud platforms, and automated software delivery workflows.",
};

export const nav = [
  ["Work", "/projects"],
  ["Architecture", "/architecture"],
  ["Experience", "/experience"],
  ["Writing", "/writing"],
  ["Research", "/research"],
  ["About", "/about"],
] as const;

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Solera Holdings LLC",
    place: "Westlake, Texas",
    dates: "April 2026 - Present",
    focus: [
      "Enterprise application modernization",
      "TFS and Azure DevOps to GitHub Enterprise migration",
      "Reusable Azure DevOps YAML components",
      "SonarQube, unit testing, build troubleshooting, pull requests, and code review",
    ],
  },
  {
    role: "Infrastructure Operations Engineer",
    company: "Insight Global",
    place: "Dallas, Texas",
    dates: "February 2026 - April 2026",
    focus: [
      "Compute, storage, and networking readiness",
      "Infrastructure diagnostics and firmware lifecycle",
      "Incident response, root-cause analysis, and maintenance windows",
      "Monitoring, documentation, and SLA support",
    ],
  },
  {
    role: "Software Engineer",
    company: "VJ Tech Solutions LLC",
    place: "Plano, Texas",
    dates: "October 2025 - January 2026",
    focus: [
      "Compute and network validation",
      "Deployment readiness and lifecycle management",
      "Infrastructure incident troubleshooting",
      "Upgrades, documentation, and capacity expansion",
    ],
  },
  {
    role: "Software Engineer",
    company: "Ciberlynx Inc",
    place: "",
    dates: "December 2023 - August 2025",
    focus: [
      "GitLab CI/CD and YAML pipelines",
      "Docker, Kubernetes, Terraform, AWS, and Azure",
      "Python and Bash automation",
      "CloudWatch monitoring and operational automation",
    ],
  },
  {
    role: "Build & Release Engineer",
    company: "AS3K Technologies Inc",
    place: "",
    dates: "May 2023 - November 2023",
    focus: [
      "Jenkins build and deployment automation",
      "Rollback strategies and release validation",
      "Production release coordination",
      "Post-deployment monitoring",
    ],
  },
  {
    role: "Software Engineer (CPT)",
    company: "Pristen IT Systems Inc",
    place: "",
    dates: "January 2023 - April 2023",
    focus: [
      "Linux and Windows automation",
      "System utilities and networking environments",
      "Architecture documentation",
      "Access control and security configuration",
    ],
  },
];

export const skillGroups = [
  {
    title: "Backend",
    items: ["C#", ".NET", "ASP.NET Core", "REST APIs", "SQL Server"],
  },
  {
    title: "Cloud & platform",
    items: ["Azure", "AWS", "Docker", "Kubernetes", "Terraform", "Helm"],
  },
  {
    title: "Delivery",
    items: [
      "GitHub Actions",
      "Azure DevOps",
      "GitLab CI/CD",
      "Jenkins",
      "YAML",
    ],
  },
  {
    title: "Operations",
    items: [
      "Prometheus",
      "Grafana",
      "CloudWatch",
      "Azure Monitor",
      "ELK",
      "SonarQube",
    ],
  },
  {
    title: "Automation",
    items: ["Python", "Bash", "Git", "Infrastructure as code", "DevSecOps"],
  },
  {
    title: "Practice",
    items: [
      "SRE",
      "Observability",
      "Incident response",
      "Code review",
      "Agile delivery",
    ],
  },
];

export const projects = [
  {
    slug: "legacy-dotnet-modernization",
    title: "Modernizing Legacy .NET Delivery",
    summary:
      "A source-control and delivery modernization case study spanning TFVC history, GitHub pull requests, reusable YAML validation, analysis, tests, and controlled releases.",
    tags: [".NET", "GitHub", "Azure DevOps"],
  },
  {
    slug: "production-rest-api-principles",
    title: "Production REST API Principles",
    summary:
      "An inspected ASP.NET Core sample exploring HTTP contracts, idempotency, authorization, OpenAPI, integration tests, and the line between a teaching sample and production readiness.",
    tags: ["ASP.NET Core", "REST", "Reliability"],
  },
  {
    slug: "dotnet-vault",
    title: ".NET Vault",
    summary:
      "A public engineering knowledge base for organizing practical notes on .NET, backend architecture, APIs, cloud delivery, and reliability.",
    tags: ["C#", ".NET", "Knowledge base"],
  },
];

export const principles = [
  [
    "Model resources, not tables",
    "Let the public contract express business concepts and workflows rather than mirroring persistence.",
  ],
  [
    "Make HTTP semantics deliberate",
    "Status codes, methods, headers, and cache behavior are part of the contract.",
  ],
  [
    "Validate at the boundary",
    "Reject malformed or impossible input early with a consistent, useful error shape.",
  ],
  [
    "Design idempotency as a workflow",
    "Keys need scope, lifetime, concurrency behavior, and a replay policy - not just a dictionary lookup.",
  ],
  [
    "Treat concurrency explicitly",
    "Optimistic tokens and conflict responses prevent silent lost updates.",
  ],
  [
    "Prefer bounded collections",
    "Pagination, stable ordering, filtering, and sensible limits protect both consumers and services.",
  ],
  [
    "Evolve contracts intentionally",
    "Compatibility, deprecation, and versioning require ownership and communication.",
  ],
  [
    "Use problem details consistently",
    "Machine-readable error codes and human-readable context make failures operable.",
  ],
  [
    "Separate authentication and authorization",
    "Identity answers who; policy answers whether the action is permitted.",
  ],
  [
    "Build observability into the request path",
    "Correlated logs, metrics, traces, and health signals are operational features.",
  ],
  [
    "Control expensive work",
    "Timeouts, cancellation, queues, limits, and backpressure keep dependencies from becoming outages.",
  ],
  [
    "Test the real pipeline",
    "Unit tests help, but integration and contract tests expose middleware and serialization behavior.",
  ],
  [
    "Generate and review OpenAPI",
    "A specification is valuable only when it stays aligned with runtime behavior.",
  ],
  [
    "Make deployment reversible",
    "Small releases, validation, rollback paths, and progressive delivery reduce change risk.",
  ],
  [
    "Document the operating model",
    "Runbooks, ownership, failure modes, and recovery steps complete the design.",
  ],
] as const;
