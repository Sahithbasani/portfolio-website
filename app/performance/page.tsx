import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "Performance & Reliability",
  description:
    "Performance and reliability engineering focus areas without unverified benchmark claims.",
};
const groups = [
  {
    title: "Application performance",
    items: [
      "Bounded queries and pagination",
      "Async processing and cancellation",
      "Response shaping and caching",
      "Idempotency and concurrency control",
      "Efficient dependency usage",
    ],
  },
  {
    title: "Platform performance",
    items: [
      "Horizontal scaling and Kubernetes HPA",
      "Load balancing and capacity planning",
      "Rolling, blue/green, and canary strategies",
      "Deployment safety and rollback",
    ],
  },
  {
    title: "Observability",
    items: [
      "Structured logging",
      "Metrics, tracing, and dashboards",
      "Health checks and alerting",
      "Incident response and root-cause analysis",
    ],
  },
  {
    title: "Data performance",
    items: [
      "Indexing awareness and query efficiency",
      "Transaction design",
      "Connection management",
      "Database observability",
    ],
  },
];
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Engineering focus"
        title="Performance and Reliability Engineering Focus"
        intro="A practice-oriented view of how Sahith approaches responsive, scalable, and diagnosable systems. No benchmark or project metric is implied."
      />
      <section className="shell section">
        <SectionHeading
          label="Four layers"
          title="Performance is a system property."
        />
        <div className="architecture-grid">
          {groups.map((g) => (
            <article className="card" key={g.title}>
              <div className="metric-label">Practice area</div>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="prose">
        <h2>Evidence over intuition</h2>
        <p>
          A reliable optimization loop begins with a user-visible or operational
          question, captures a baseline, isolates constraints, changes one
          important variable, and verifies the result under representative load.
          Where measured project data is unavailable, this site describes the
          practice rather than inventing an outcome.
        </p>
      </section>
    </>
  );
}
