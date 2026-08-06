import type { Metadata } from "next";
import { Callout } from "@/components/cards";
import { Breadcrumbs, FlowDiagram, PageHero } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "From TFVC to GitHub",
  description:
    "A practical migration guide for legacy .NET source control and delivery workflows.",
};
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[["Writing", "/writing"], ["TFVC to GitHub"]]} />
      <PageHero
        eyebrow="Modernization"
        title="From TFVC to GitHub: migration as a delivery-system change"
        intro="Moving source is the visible step. The real migration aligns history, branches, review, build validation, artifacts, deployment, and team habits."
        meta="9 min read · Based on supplied migration material and supported resume experience"
      />
      <article className="prose">
        <div className="toc">
          <a href="#frame">Frame the migration</a>
          <a href="#sequence">Migration sequence</a>
          <a href="#pipeline">Rebuild confidence</a>
          <a href="#lessons">Lessons</a>
        </div>
        <h2 id="frame">Frame the migration</h2>
        <p>
          TFVC and Git encourage different collaboration models. A safe program
          inventories repositories and dependencies, decides how much history to
          preserve, maps permissions, defines a branch and pull-request policy,
          and proves the new build before a final cutover.
        </p>
        <Callout title="Not a copy operation">
          Treat the repository, pipeline, and review model as one system. A
          successful import with a broken build is not a successful migration.
        </Callout>
        <h2 id="sequence">A staged sequence</h2>
        <FlowDiagram
          steps={["Discover", "Pilot", "Import", "Validate", "Cut over"]}
        />
        <h3>Discover</h3>
        <p>
          Document repository size, branches, labels, binary assets, service
          connections, solution paths, build definitions, release dependencies,
          and consumers.
        </p>
        <h3>Pilot</h3>
        <p>
          Choose a representative but recoverable application. Rehearse history
          conversion, repository settings, permissions, branch protection, and a
          clean build.
        </p>
        <h3>Import and validate</h3>
        <p>
          Freeze or coordinate source changes, perform the final import, compare
          expected history and content, then run validation from GitHub-hosted
          source.
        </p>
        <h2 id="pipeline">Rebuild confidence in the delivery path</h2>
        <FlowDiagram
          steps={["Checkout", "Restore", "Analyze", "Build + test", "Publish"]}
        />
        <p>
          Reusable YAML components clarify solution discovery, build
          configuration, analysis, tests, and artifact publishing. Feature
          validation should be fast enough to support review; the primary branch
          can add release-grade packaging and controlled deployment gates.
        </p>
        <h2 id="lessons">Risks and lessons</h2>
        <ul>
          <li>History fidelity should be an explicit acceptance criterion.</li>
          <li>
            Large binaries need a deliberate Git LFS or artifact strategy.
          </li>
          <li>
            Build definitions often contain hidden environment assumptions.
          </li>
          <li>
            Permissions and branch protection need rehearsal before cutover.
          </li>
          <li>
            A rollback plan should identify the authoritative source during
            every phase.
          </li>
        </ul>
        <Callout title="Supported outcome language">
          The source material and resume support qualitative statements about
          modernization, build confidence, reduced manual integration risk,
          standardized pipelines, and deployment consistency. No percentages or
          business savings are claimed.
        </Callout>
      </article>
    </>
  );
}
