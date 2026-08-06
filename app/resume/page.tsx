import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/site-shell";
import { experience, site, skillGroups } from "@/lib/site-data";
export const metadata: Metadata = {
  title: "Resume",
  description: "Web resume for Sahith Basani, Senior Software Engineer.",
};
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Resume"
        title="Senior Software Engineer"
        intro="Application modernization, backend systems, cloud platforms, delivery automation, and operational reliability."
        meta={`${site.location} · ${site.email} · github.com/Sahithbasani`}
      />
      <section className="shell section">
        <SectionHeading
          label="Summary"
          title="Reliable software delivery across code and cloud."
        />
        <p className="lead">
          Senior Software Engineer with experience designing, developing,
          modernizing, and supporting enterprise applications across cloud and
          platform environments. Skilled in .NET development, source-control
          migration, CI/CD automation, YAML pipelines, unit testing, and
          production support across AWS and Azure.
        </p>
      </section>
      <section className="shell section">
        <SectionHeading label="Skills" title="Core capabilities." />
        <div className="skills">
          {skillGroups.map((g) => (
            <article className="card" key={g.title}>
              <div className="metric-label">{g.title}</div>
              <h3>{g.items.join(" · ")}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="shell section">
        <SectionHeading label="Experience" title="Professional timeline." />
        <div className="timeline">
          {experience.map((i) => (
            <article key={`${i.company}-${i.dates}`}>
              <small>{i.dates}</small>
              <div>
                <h3>{i.role}</h3>
                <strong>{i.company}</strong>
                <p>{i.focus.join(" · ")}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="shell section">
        <SectionHeading label="Education" title="Academic background." />
        <div className="cards">
          <article className="card">
            <h3>MS, Information Technology</h3>
            <p>Wilmington University · 2023</p>
          </article>
          <article className="card">
            <h3>B.Tech, Electrical & Electronics Engineering</h3>
            <p>Guru Nanak Institute of Technology · 2019</p>
          </article>
        </div>
        <p className="meta">
          A PDF download is intentionally omitted because the provided source
          resume contains a private phone number.
        </p>
      </section>
    </>
  );
}
