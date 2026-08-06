const focusAreas = [
  ["Architecture", "Enterprise modernization, API design, CI/CD architecture, cloud-native delivery."],
  ["Code", "C#, .NET, ASP.NET Core, TypeScript, automation, infrastructure as code."],
  ["Impact", "Modernized delivery workflows, improved build confidence, and reduced manual integration risk."],
  ["Cloud", "Azure, AWS, Docker, Kubernetes, Terraform, monitoring, and secure delivery."],
  ["Performance", "Caching, observability, scaling, deployment safety, bounded queries, and resilient systems."],
  ["Research", "Explainable NLP, trustworthy AI, transparency, fairness, and human-centered decision systems."]
];

const projects = [
  {
    title: "Legacy .NET Delivery Modernization",
    description: "A case study on moving enterprise repositories from TFVC/TFS to GitHub with pull-request validation, reusable YAML pipelines, testing, analysis, and controlled releases.",
    tags: [".NET", "GitHub", "Azure DevOps", "CI/CD"]
  },
  {
    title: ".NET Vault",
    description: "A growing engineering knowledge base covering backend design, production APIs, architecture, cloud, reliability, and delivery practices.",
    tags: ["C#", ".NET", "Architecture", "Documentation"]
  },
  {
    title: "Production REST API Principles",
    description: "A practical engineering guide to API contracts, idempotency, concurrency, evolution, failure modes, and operating beyond CRUD.",
    tags: ["ASP.NET Core", "REST", "Reliability", "System Design"]
  }
];

const experience = [
  ["2026 — Present", "Senior Software Engineer", "Solera Holdings", "Enterprise modernization, source-control migration, YAML pipelines, unit testing, build validation, and production delivery."],
  ["2026", "Infrastructure Operations Engineer", "Insight Global", "Compute, networking, diagnostics, incident response, firmware lifecycle, and platform readiness."],
  ["2023 — 2025", "Software Engineer", "Ciberlynx", "GitLab CI/CD, Docker, Kubernetes, Terraform, AWS, Azure, automation, and observability."],
  ["2023", "Build & Release Engineer", "AS3K Technologies", "Jenkins pipelines, release automation, rollback strategies, deployment validation, and release coordination."]
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top">SB<span>.</span></a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#writing">Writing</a>
          <a href="mailto:sahithbasani615@gmail.com" className="button small">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero shell">
        <div className="eyebrow">Senior Software Engineer · Dallas–Fort Worth</div>
        <h1>Engineering reliable software that scales with <span>people, products, and platforms.</span></h1>
        <p className="lead">I build backend systems, cloud platforms, and automated delivery workflows with C#, .NET, Azure, AWS, Kubernetes, and infrastructure as code.</p>
        <div className="actions">
          <a className="button" href="#work">Explore my work</a>
          <a className="button ghost" href="https://github.com/Sahithbasani" target="_blank" rel="noreferrer">View GitHub</a>
        </div>
        <div className="signal"><span></span> Available for senior backend, cloud, and platform engineering opportunities</div>
      </section>

      <section className="shell section">
        <div className="sectionLabel">Engineering workspace</div>
        <div className="grid">
          {focusAreas.map(([title, text]) => (
            <article className="card" key={title}>
              <div className="cardTop"><span className="dot"></span><span>{title}</span></div>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="shell section">
        <div className="sectionHead">
          <div><div className="sectionLabel">Selected work</div><h2>Case studies, code, and engineering practice.</h2></div>
          <a href="https://github.com/Sahithbasani" target="_blank" rel="noreferrer">All repositories →</a>
        </div>
        <div className="projectGrid">
          {projects.map((project, index) => (
            <article className="project" key={project.title}>
              <div className="projectNumber">0{index + 1}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="shell section split">
        <div>
          <div className="sectionLabel">Experience</div>
          <h2>Software delivery from code to cloud.</h2>
          <p className="muted">My background combines application engineering, cloud infrastructure, release automation, observability, and operational reliability.</p>
        </div>
        <div className="timeline">
          {experience.map(([date, role, company, description]) => (
            <article className="timelineItem" key={`${role}-${company}`}>
              <div className="date">{date}</div>
              <div><h3>{role}</h3><div className="company">{company}</div><p>{description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="writing" className="shell section">
        <div className="sectionHead">
          <div><div className="sectionLabel">Writing & research</div><h2>Turning engineering work into reusable knowledge.</h2></div>
        </div>
        <div className="writingGrid">
          <article className="writing"><span>Engineering</span><h3>15 Principles That Matter After CRUD</h3><p>Production API design through contracts, idempotency, concurrency, evolution, and operational failure modes.</p></article>
          <article className="writing"><span>Modernization</span><h3>From TFVC to GitHub</h3><p>A practical modernization blueprint for source control, pull requests, CI/CD, build validation, and deployment governance.</p></article>
          <article className="writing"><span>Research</span><h3>Explainable NLP for Trustworthy AI</h3><p>Transparency, interpretability, fairness, accountability, and human-centered decision support in modern NLP systems.</p></article>
        </div>
      </section>

      <section className="shell section callout">
        <div><div className="sectionLabel">Let’s build</div><h2>Need a senior engineer who can connect architecture, delivery, and operations?</h2></div>
        <a className="button" href="mailto:sahithbasani615@gmail.com">Start a conversation</a>
      </section>

      <footer className="shell footer">
        <div><strong>Sahith Basani</strong><br/><span>Senior Software Engineer</span></div>
        <div className="footerLinks"><a href="https://github.com/Sahithbasani">GitHub</a><a href="mailto:sahithbasani615@gmail.com">Email</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
