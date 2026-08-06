import Link from "next/link";
import { ArrowUpRight, Github, Mail } from "lucide-react";
import { nav, site } from "@/lib/site-data";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="site-header">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="shell nav">
        <Link className="brand" href="/">
          SB<span>.</span>
        </Link>
        <nav aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <Link className="button small" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <Link className="brand" href="/">
            SB<span>.</span>
          </Link>
          <p>{site.summary}</p>
        </div>
        <div>
          <strong>Explore</strong>
          <Link href="/projects">Projects</Link>
          <Link href="/writing">Writing</Link>
          <Link href="/research">Research</Link>
        </div>
        <div>
          <strong>Connect</strong>
          <a href={site.github} target="_blank" rel="noreferrer">
            <Github size={16} />
            GitHub
          </a>
          <a href={`mailto:${site.email}`}>
            <Mail size={16} />
            Email
          </a>
        </div>
      </div>
      <div className="shell fineprint">
        © {new Date().getFullYear()} Sahith Basani. Built for clarity,
        reliability, and the open web.
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  meta,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  meta?: string;
}) {
  return (
    <section className="page-hero shell">
      <div className="eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      <p className="lead">{intro}</p>
      {meta && <div className="meta">{meta}</div>}
    </section>
  );
}

export function SectionHeading({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="section-heading">
      <div className="eyebrow">{label}</div>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

export function ContactCTA() {
  return (
    <section className="shell cta">
      <div>
        <div className="eyebrow">Start a conversation</div>
        <h2>Connect architecture, delivery, and operations.</h2>
      </div>
      <Link className="button" href="/contact">
        Contact Sahith <ArrowUpRight size={17} />
      </Link>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: Array<[string, string?]> }) {
  return (
    <nav className="breadcrumbs shell" aria-label="Breadcrumb">
      {items.map(([label, href], i) => (
        <span key={label}>
          {i > 0 && " / "}
          {href ? <Link href={href}>{label}</Link> : label}
        </span>
      ))}
    </nav>
  );
}

export function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="flow" role="img" aria-label={steps.join(" then ")}>
      {steps.map((step, i) => (
        <div className="flow-step" key={step}>
          <span>{String(i + 1).padStart(2, "0")}</span>
          <strong>{step}</strong>
        </div>
      ))}
    </div>
  );
}
