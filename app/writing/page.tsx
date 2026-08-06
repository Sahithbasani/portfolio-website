import type { Metadata } from "next";
import { ArticleCard } from "@/components/cards";
import { PageHero } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "Writing",
  description: "Long-form engineering articles by Sahith Basani.",
};
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Writing"
        title="Engineering ideas made operational."
        intro="Web-native articles restructured from the supplied source material, with concise diagrams, callouts, case studies, and claim boundaries."
      />
      <section className="shell section">
        <div className="cards">
          <ArticleCard
            href="/writing/15-principles-after-crud"
            type="API engineering"
            title="15 Principles That Matter After CRUD"
            summary="Production API design through contracts, concurrency, idempotency, evolution, and operations."
            time="12 min"
          />
          <ArticleCard
            href="/writing/tfvc-to-github"
            type="Modernization"
            title="From TFVC to GitHub"
            summary="A migration blueprint for history, collaboration, build validation, and delivery governance."
            time="9 min"
          />
        </div>
      </section>
    </>
  );
}
