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
        intro="Each role is presented from the resume source without invented metrics or expanded claims."
      />
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
