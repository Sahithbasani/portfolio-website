import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://sahith.dev/sitemap.xml",
    host: "https://sahith.dev",
  };
}
