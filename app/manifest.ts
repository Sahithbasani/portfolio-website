import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sahith Basani · Senior Software Engineer",
    short_name: "sahith.dev",
    description: "Backend systems, cloud platforms, and automated delivery.",
    start_url: "/",
    display: "standalone",
    background_color: "#07090d",
    theme_color: "#07090d",
  };
}
