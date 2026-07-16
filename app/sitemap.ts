import type { MetadataRoute } from "next";
import { allRoutes, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((route, index) => ({
    url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
    lastModified: "2026-07-16",
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/products") ? 0.8 : 0.7,
  }));
}
