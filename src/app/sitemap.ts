import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";
import { absoluteUrl, getBuildDate } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: getBuildDate(),
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl("/assets/og/homepage.png")],
    },
  ];
}
