import type { Metadata } from "next";
import { PageHero } from "@/components/site-shell";
import { experience } from "@/lib/site-data";
export const metadata: Metadata = {
  title: "Experience",
  description:
    "Sahith Basani's professional software, cloud, infrastructure, and release engineering timeline.",
};
export default function Experience() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="A delivery career spanning software, infrastructure, and operations."
        intro="Each role is presented at a high level from the resume source, without confidential project details, invented metrics, or expanded claims."
      />
      <section className="shell experience-model">
        <div>
          <div className="eyebrow">Engineering across layers</div>
          <h2>
            Application, delivery, platform, and operations move together.
          </h2>
          <p>
            A restrained three-dimensional view of the engineering surfaces
            represented across the timeline. It is conceptual, not an employer
            architecture diagram.
          </p>
        </div>
        <div
          className="layer-scene"
          role="img"
          aria-label="Conceptual stack showing application, delivery, platform, and operations layers"
        >
          <div className="stack-layer layer-application">
            <span>01</span>
            <strong>Application</strong>
          </div>
          <div className="stack-layer layer-delivery">
            <span>02</span>
            <strong>Delivery</strong>
          </div>
          <div className="stack-layer layer-platform">
            <span>03</span>
            <strong>Platform</strong>
          </div>
          <div className="stack-layer layer-operations">
            <span>04</span>
            <strong>Operations</strong>
          </div>
        </div>
      </section>
      <section className="shell section">
        <div className="timeline">
          {experience.map((item) => (
            <article key={`${item.company}-${item.dates}`}>
              <div>
                <small>{item.dates}</small>
                <br />
                <small>{item.place}</small>
              </div>
              <div>
                <h2>{item.role}</h2>
                <strong>{item.company}</strong>
                {"confidential" in item && item.confidential && (
                  <span className="confidential-badge">
                    Employer name withheld for confidentiality
                  </span>
                )}
                <ul>
                  {item.focus.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
