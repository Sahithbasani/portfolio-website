import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({
  project,
}: {
  project: { slug: string; title: string; summary: string; tags: string[] };
}) {
  return (
    <article className="card project-card">
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <Link href={`/projects/${project.slug}`}>
        Read case study <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}

export function ArticleCard({
  href,
  type,
  title,
  summary,
  time,
}: {
  href: string;
  type: string;
  title: string;
  summary: string;
  time: string;
}) {
  return (
    <article className="card article-card">
      <div className="card-meta">
        <span>{type}</span>
        <span>{time}</span>
      </div>
      <h3>{title}</h3>
      <p>{summary}</p>
      <Link href={href}>
        Read <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}

export function Callout({
  title,
  children,
  tone = "blue",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "blue" | "amber";
}) {
  return (
    <aside className={`callout ${tone}`}>
      <strong>{title}</strong>
      <div>{children}</div>
    </aside>
  );
}
