import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: new Date("2026-08-10"),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteConfig.url}/assets/og/homepage.png`],
    },
  ];
}

