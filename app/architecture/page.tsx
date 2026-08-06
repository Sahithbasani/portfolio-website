import type { Metadata } from "next";
import { Callout } from "@/components/cards";
import { FlowDiagram, PageHero, SectionHeading } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "Architecture",
  description:
    "Architecture, modernization, delivery, cloud, and reliability principles.",
};
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Architecture"
        title="Systems designed for change, evidence, and recovery."
        intro="A set of architecture views grounded in supported delivery experience and clearly labeled engineering principles."
      />
      <section className="shell section">
        <SectionHeading
          label="Modernization"
          title="A controlled path from source to release."
        />
        <FlowDiagram
          steps={[
            "GitHub",
            "Pull request",
            "YAML validation",
            "Artifact",
            "Deployment",
          ]}
        />
        <Callout title="Experience boundary">
          GitHub Enterprise migration and Azure DevOps YAML pipeline work are
          supported experience. The diagrams are generalized models, not
          employer architecture.
        </Callout>
      </section>
      <section className="shell section architecture-grid">
        <article className="card">
          <div className="metric-label">Application boundary</div>
          <h3>Contracts before implementation</h3>
          <p>
            Stable interfaces, explicit errors, bounded work, and tests that
            cross the real request pipeline.
          </p>
        </article>
        <article className="card">
          <div className="metric-label">Delivery boundary</div>
          <h3>Build once, promote deliberately</h3>
          <p>
            Reusable validation, immutable artifacts, controlled configuration,
            and a practical rollback path.
          </p>
        </article>
        <article className="card">
          <div className="metric-label">Platform boundary</div>
          <h3>Scale through repeatable infrastructure</h3>
          <p>
            Containers, orchestration, infrastructure as code, health signals,
            and capacity awareness.
          </p>
        </article>
        <article className="card">
          <div className="metric-label">Reliability boundary</div>
          <h3>Observe decisions and dependencies</h3>
          <p>
            Structured events, metrics, traces, dashboards, alerts, and incident
            learning.
          </p>
        </article>
      </section>
    </>
  );
}
