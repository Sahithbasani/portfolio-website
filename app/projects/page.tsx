import type { Metadata } from "next";
import { ProjectCard } from "@/components/cards";
import { PageHero } from "@/components/site-shell";
import { projects } from "@/lib/site-data";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected engineering case studies and public knowledge projects.",
};
export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work explained through decisions, constraints, and operating models."
        intro="These profiles separate supported experience, inspected public code, and preferred engineering practice."
      />
      <section className="shell section">
        <div className="cards">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
