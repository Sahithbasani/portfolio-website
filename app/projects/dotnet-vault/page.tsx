import type { Metadata } from "next";
import { Breadcrumbs, PageHero } from "@/components/site-shell";
export const metadata: Metadata = {
  title: ".NET Vault",
  description:
    "A profile of Sahith Basani's public .NET engineering knowledge base.",
};
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[["Projects", "/projects"], [".NET Vault"]]} />
      <PageHero
        eyebrow="Knowledge project"
        title=".NET Vault"
        intro="A public, evolving knowledge base for organizing .NET, backend architecture, API, cloud, and reliability notes into a navigable engineering reference."
      />
      <article className="prose">
        <h2>Purpose</h2>
        <p>
          Engineering notes become more useful when they preserve context: the
          problem, the trade-off, the failure mode, and the operating
          consequence. .NET Vault is presented as a knowledge-base project
          rather than a production product or a claim of original framework
          authorship.
        </p>
        <h2>Editorial model</h2>
        <div className="principles">
          <article>
            <h3>Concept</h3>
            <p>Explain the underlying mechanism in plain language.</p>
          </article>
          <article>
            <h3>Decision</h3>
            <p>Show when the pattern applies and what it costs.</p>
          </article>
          <article>
            <h3>Practice</h3>
            <p>Connect code examples to testing, delivery, and operation.</p>
          </article>
        </div>
        <p>
          <a
            href="https://github.com/Sahithbasani/dotnet-vault"
            target="_blank"
            rel="noreferrer"
          >
            View the public repository →
          </a>
        </p>
      </article>
    </>
  );
}
