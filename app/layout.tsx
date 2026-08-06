import type { Metadata } from "next";
import Script from "next/script";
import { Footer, Header } from "@/components/site-shell";
import { site } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description: site.summary,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | ${site.title}`,
    description: site.summary,
    url: site.url,
    siteName: "sahith.dev",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name}, ${site.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.title}`,
    description: site.summary,
    images: ["/og.png"],
  },
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  url: site.url,
  email: `mailto:${site.email}`,
  sameAs: [site.github],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dallas-Fort Worth",
    addressRegion: "TX",
    addressCountry: "US",
  },
};
const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "sahith.dev",
  url: site.url,
  author: { "@type": "Person", name: site.name },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script
          id="theme"
          strategy="beforeInteractive"
        >{`try{document.documentElement.dataset.theme=localStorage.getItem('theme')||'dark'}catch(e){}`}</Script>
        <a id="top" />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
      </body>
    </html>
  );
}
