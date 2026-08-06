import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sahith.dev"),
  title: "Sahith Basani | Senior Software Engineer",
  description: "Senior Software Engineer building reliable backend systems, cloud platforms, and modern delivery pipelines.",
  openGraph: {
    title: "Sahith Basani | Senior Software Engineer",
    description: "Architecture, code, impact, cloud, performance, research, and engineering writing.",
    url: "https://sahith.dev",
    siteName: "sahith.dev",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
