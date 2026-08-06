import type { Metadata } from "next";
import { ArticleCard } from "@/components/cards";
import { PageHero } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "Research",
  description:
    "Research profile focused on explainable NLP and trustworthy AI decision support.",
};
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Research profile"
        title="Trustworthy AI needs explanations people can interrogate."
        intro="A professional research section based on the supplied manuscript, presented without claims about publication, peer review, acceptance, or citation impact."
      />
      <section className="shell section">
        <div className="cards">
          <ArticleCard
            href="/research/explainable-nlp"
            type="Research summary"
            title="Explainable Natural Language Processing for Trustworthy AI Decision Making"
            summary="Motivation, techniques, high-stakes applications, LLM challenges, fairness, governance, and future research."
            time="11 min"
          />
        </div>
      </section>
    </>
  );
}
