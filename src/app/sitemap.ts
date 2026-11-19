import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  const routes = [
    {
      url: siteUrl + "/",
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: siteUrl + "/about",
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
  ];

  const workRoutes = projects
    .filter((project) => project.published)
    .map((project) => ({
      url: siteUrl + "/work/" + project.slug,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...routes, ...workRoutes];
}
