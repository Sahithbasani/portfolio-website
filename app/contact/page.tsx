import type { Metadata } from "next";
import { Github, Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/site-shell";
import { site } from "@/lib/site-data";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sahith Basani about senior backend, cloud, and platform engineering work.",
};
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about reliable systems and delivery."
        intro="The simplest way to start is a direct email. There is no fake form, automated success message, or unconfigured backend."
      />
      <section className="shell section contact-grid">
        <article className="contact-card">
          <Mail />
          <h2>Email</h2>
          <p>
            For roles, engineering collaboration, and thoughtful technical
            conversations.
          </p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </article>
        <article className="contact-card">
          <Github />
          <h2>GitHub</h2>
          <p>Public repositories, knowledge projects, and source samples.</p>
          <a href={site.github} target="_blank" rel="noreferrer">
            github.com/Sahithbasani
          </a>
        </article>
        <article className="contact-card">
          <MapPin />
          <h2>Location</h2>
          <p>{site.location}</p>
        </article>
      </section>
    </>
  );
}
