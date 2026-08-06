import type { Metadata } from "next";
import { Callout } from "@/components/cards";
import { Breadcrumbs, FlowDiagram, PageHero } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "Legacy .NET Delivery Modernization",
  description:
    "A case study in moving legacy .NET source control and delivery from TFVC to GitHub.",
};
export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[["Projects", "/projects"], ["Legacy .NET modernization"]]}
      />
      <PageHero
        eyebrow="Case study"
        title="Modernizing Legacy .NET Delivery from TFVC to GitHub"
        intro="A supported experience profile of repository migration, pull-request validation, reusable Azure DevOps YAML components, testing, static analysis, and controlled delivery."
        meta="Enterprise modernization · Supported by resume experience · No confidential implementation details"
      />
      <article className="prose">
        <div className="toc">
          <a href="#context">Context</a>
          <a href="#approach">Modernization approach</a>
          <a href="#delivery">Delivery model</a>
          <a href="#risk">Risks and lessons</a>
        </div>
        <h2 id="context">Context and constraints</h2>
        <p>
          Centralized source control can accumulate history, build assumptions,
          and release habits that do not transfer automatically into a
          pull-request workflow. The work is therefore more than copying files:
          repository history, solution paths, branch triggers, build templates,
          analysis, tests, and release expectations must keep agreeing.
        </p>
        <Callout title="Claim boundary">
          This page describes the modernization responsibilities confirmed by
          Sahith&apos;s resume. It intentionally omits employer-confidential
          repository names, architecture, pipeline values, and business metrics.
        </Callout>
        <h2 id="approach">Modernization approach</h2>
        <FlowDiagram
          steps={[
            "Inventory",
            "Migrate history",
            "Define branches",
            "Validate builds",
            "Control release",
          ]}
        />
        <h3>Repository and branch strategy</h3>
        <p>
          Preserve relevant history, establish the GitHub repository as the
          collaboration surface, and map feature and master build flows to
          explicit triggers. Pull requests become the place where review,
          automated validation, and repository standards meet.
        </p>
        <h3>Reusable pipeline components</h3>
        <p>
          Replace a monolithic build template with focused components for
          SonarQube configuration, solution analysis, debug and release builds,
          tests, artifact generation, and deployment. Small components make
          parameters and failure ownership easier to reason about.
        </p>
        <h2 id="delivery">A gated delivery model</h2>
        <FlowDiagram
          steps={[
            "Feature branch",
            "Pull request",
            "Static analysis",
            "Build + test",
            "Artifact",
          ]}
        />
        <p>
          Validation should run from a clean checkout and produce a traceable
          artifact. Deployment remains a separate, controlled decision with
          environment configuration and secrets outside source code.
        </p>
        <h2 id="risk">Risks and lessons</h2>
        <ul>
          <li>
            Path and casing assumptions often surface only after the first clean
            build.
          </li>
          <li>
            Branch filters and template parameters need tests as much as
            application code.
          </li>
          <li>
            Static analysis and unit tests are most useful when failures are
            actionable.
          </li>
          <li>
            Migration is complete only when the team can review, build,
            diagnose, and release confidently in the new workflow.
          </li>
        </ul>
        <Callout title="Engineering value">
          The supported outcome language is qualitative: modernized legacy
          source-control workflows, improved build confidence, reduced manual
          integration risk, standardized delivery components, and increased
          deployment consistency.
        </Callout>
      </article>
    </>
  );
}
