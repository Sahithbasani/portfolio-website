import type { Metadata } from "next";
import { ContactCTA, PageHero, SectionHeading } from "@/components/site-shell";
import { skillGroups } from "@/lib/site-data";
export const metadata: Metadata = {
  title: "About",
  description:
    "Professional background, engineering philosophy, education, and career focus.",
};
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Engineering across application, platform, and delivery boundaries."
        intro="Sahith Basani is a Senior Software Engineer with experience modernizing enterprise applications, automating software delivery, and supporting cloud and infrastructure environments."
      />
      <section className="shell section architecture-grid">
        <div>
          <SectionHeading
            label="Career focus"
            title="Reliable change, not novelty for its own sake."
          />
          <p className="lead">
            The through-line is operational: make systems easier to change,
            delivery paths easier to trust, and production behavior easier to
            understand.
          </p>
        </div>
        <div className="card">
          <div className="metric-label">Engineering philosophy</div>
          <h3>
            Explicit contracts. Reusable delivery. Observable systems.
            Reversible releases.
          </h3>
          <p>
            Architecture earns its keep when it reduces ambiguity for the people
            building, reviewing, operating, and evolving a system.
          </p>
        </div>
      </section>
      <section className="shell section">
        <SectionHeading
          label="Capabilities"
          title="A practical, full-path toolset."
        />
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
        <SectionHeading label="Education" title="Formal foundations." />
        <div className="cards">
          <article className="card">
            <div className="metric-label">2023</div>
            <h3>Master of Science in Information Technology</h3>
            <p>Wilmington University · Delaware, USA</p>
          </article>
          <article className="card">
            <div className="metric-label">2019</div>
            <h3>
              Bachelor of Technology in Electrical & Electronics Engineering
            </h3>
            <p>Guru Nanak Institute of Technology · India</p>
          </article>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
