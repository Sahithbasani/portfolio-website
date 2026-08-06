import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Braces,
  Cloud,
  Gauge,
  Github,
  Layers3,
  Newspaper,
  Route,
  Workflow,
} from "lucide-react";
import { ArticleCard, ProjectCard } from "@/components/cards";
import { ContactCTA, SectionHeading } from "@/components/site-shell";
import { experience, projects, skillGroups, site } from "@/lib/site-data";

const workspace = [
  [
    "Architecture",
    "Boundaries, delivery flows, and reliability models.",
    Layers3,
  ],
  ["Code", "C#, .NET, ASP.NET Core, TypeScript, and automation.", Braces],
  [
    "Impact",
    "Build confidence, consistency, and operational readiness.",
    Gauge,
  ],
  [
    "Blogs",
    "Practical notes that turn delivery work into reusable knowledge.",
    Newspaper,
  ],
  [
    "Projects",
    "Case studies grounded in public code and supported experience.",
    Boxes,
  ],
  ["Cloud", "Azure, AWS, Kubernetes, Terraform, and observability.", Cloud],
  [
    "Performance",
    "Bounded work, capacity, deployment safety, and diagnosis.",
    Workflow,
  ],
  [
    "Experience",
    "Application, infrastructure, release, and platform engineering.",
    Route,
  ],
];

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow">
            Senior Software Engineer · {site.location}
          </div>
          <h1>
            Engineering reliable software that scales with{" "}
            <span>people, products, and platforms.</span>
          </h1>
          <p className="lead">
            I build backend systems, cloud platforms, and automated delivery
            workflows with C#, .NET, Azure, AWS, Kubernetes, and infrastructure
            as code.
          </p>
          <div className="actions">
            <Link className="button" href="/projects">
              Explore my work <ArrowRight size={17} />
            </Link>
            <a
              className="button ghost"
              href={site.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} /> View GitHub
            </a>
            <Link className="button ghost" href="/contact">
              Contact
            </Link>
          </div>
          <div className="availability">
            <i />
            Open to conversations about senior backend, cloud, and platform
            engineering
          </div>
        </div>
        <figure className="portrait-frame hero-portrait">
          <Image
            src="/sahith-basani.jpg"
            alt="Portrait of Sahith Basani"
            width={1086}
            height={1448}
            sizes="(max-width: 900px) 75vw, 32vw"
            priority
          />
          <figcaption>
            <span>Sahith Basani</span>
            <span>Dallas-Fort Worth</span>
          </figcaption>
        </figure>
      </section>
      <section className="shell section">
        <SectionHeading
          label="Engineering workspace"
          title="A connected view of software delivery."
          intro="Senior engineering lives between the code, the platform, and the decisions that keep both dependable."
        />
        <div className="bento">
          {workspace.map(([title, text, Icon]) => {
            const IconComponent = Icon as typeof Layers3;
            return (
              <article key={String(title)}>
                <IconComponent size={20} />
                <h3>{String(title)}</h3>
                <p>{String(text)}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="shell section">
        <SectionHeading
          label="Selected work"
          title="Case studies grounded in code and practice."
        />
        <div className="cards">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <section className="shell section">
        <SectionHeading
          label="Experience"
          title="Software delivery from code to cloud."
        />
        <div className="timeline">
          {experience.slice(0, 3).map((item) => (
            <article key={item.company}>
              <div>
                <small>{item.dates}</small>
              </div>
              <div>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
                <p>{item.focus.slice(0, 2).join(" · ")}</p>
              </div>
            </article>
          ))}
        </div>
        <Link className="button ghost" href="/experience">
          View full timeline
        </Link>
      </section>
      <section className="shell section">
        <SectionHeading
          label="Technology"
          title="Tools grouped by the job they do."
        />
        <div className="skills">
          {skillGroups.map((group) => (
            <article className="card" key={group.title}>
              <div className="metric-label">{group.title}</div>
              <h3>{group.items.join(" · ")}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="shell section">
        <SectionHeading
          label="Writing & research"
          title="Engineering knowledge, structured for the web."
        />
        <div className="cards">
          <ArticleCard
            href="/writing/15-principles-after-crud"
            type="Engineering"
            title="15 Principles That Matter After CRUD"
            summary="A production-minded guide to API contracts, concurrency, idempotency, evolution, and operations."
            time="12 min"
          />
          <ArticleCard
            href="/writing/tfvc-to-github"
            type="Modernization"
            title="From TFVC to GitHub"
            summary="A careful migration path from centralized version control to pull requests and reusable delivery automation."
            time="9 min"
          />
          <ArticleCard
            href="/research/explainable-nlp"
            type="Research summary"
            title="Explainable NLP for Trustworthy AI"
            summary="A structured research profile on transparency, faithfulness, fairness, accountability, and human oversight."
            time="11 min"
          />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
