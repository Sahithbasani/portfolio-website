import type { MetadataRoute } from "next";
const routes = [
  "",
  "/about",
  "/experience",
  "/projects",
  "/projects/legacy-dotnet-modernization",
  "/projects/production-rest-api-principles",
  "/projects/dotnet-vault",
  "/architecture",
  "/performance",
  "/writing",
  "/writing/15-principles-after-crud",
  "/writing/tfvc-to-github",
  "/research",
  "/research/explainable-nlp",
  "/resume",
  "/contact",
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://sahith.dev${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
