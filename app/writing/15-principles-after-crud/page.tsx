import type { Metadata } from "next";
import { Callout } from "@/components/cards";
import { Breadcrumbs, FlowDiagram, PageHero } from "@/components/site-shell";
import { principles } from "@/lib/site-data";
export const metadata: Metadata = {
  title: "15 Principles That Matter After CRUD",
  description:
    "A web-native guide to production REST API engineering beyond basic CRUD.",
};
export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[["Writing", "/writing"], ["15 principles after CRUD"]]}
      />
      <PageHero
        eyebrow="API engineering"
        title="15 Principles That Matter After CRUD"
        intro="CRUD creates endpoints. Production engineering creates a contract that remains predictable under retries, concurrency, failure, growth, and change."
        meta="12 min read · Restructured from supplied source material and the inspected ASP.NET Core sample"
      />
      <article className="prose">
        <div className="toc">
          <a href="#why">Why CRUD is only the beginning</a>
          <a href="#principles">The 15 principles</a>
          <a href="#case">Case study: create an order</a>
          <a href="#references">References and source boundary</a>
        </div>
        <h2 id="why">Why CRUD is only the beginning</h2>
        <p>
          A useful production API must answer questions a scaffold does not:
          What happens when a client retries? How are conflicting updates
          detected? Can a large collection exhaust the service? What does an
          operator see when a dependency slows down? How does a contract evolve
          without surprising consumers?
        </p>
        <Callout title="Core idea">
          An API is simultaneously a domain boundary, a network contract, and an
          operated product. Good design has to satisfy all three.
        </Callout>
        <h2 id="principles">The 15 principles</h2>
        <div className="principles">
          {principles.map(([title, body], i) => (
            <article key={title}>
              <div className="metric-label">
                Principle {String(i + 1).padStart(2, "0")}
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <h2 id="case">Case study: create an order safely</h2>
        <FlowDiagram
          steps={[
            "Validate",
            "Fingerprint",
            "Reserve key",
            "Commit",
            "Replay or conflict",
          ]}
        />
        <p>
          A client sends an order with an idempotency key. The service validates
          the request, scopes the key, records a fingerprint, and coordinates
          concurrent attempts. Once the business transaction succeeds, the
          service can replay the original result for an equivalent retry. A
          different payload using the same key should fail explicitly.
        </p>
        <pre>
          <code>{`POST /api/v1/orders\nIdempotency-Key: order-2026-0042\nContent-Type: application/json\n\n{ "customerId": 17, "productId": 4, "quantity": 2 }`}</code>
        </pre>
        <Callout title="Sample versus production" tone="amber">
          The public sample uses a process-local dictionary and returns a
          conflict for duplicate keys. That is a teaching implementation.
          Durable storage, expiry, response replay, request fingerprints,
          scoping, and multi-node coordination are production concerns.
        </Callout>
        <h2 id="references">References and source boundary</h2>
        <p>
          This article is a transformed web summary of the supplied “15
          principles” PDF and the repository&apos;s production REST API
          materials. It does not claim measured production outcomes, publication
          status, or completeness of every roadmap item described by the source
          repository.
        </p>
      </article>
    </>
  );
}
