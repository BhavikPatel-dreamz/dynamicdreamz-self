import type { MetadataRoute } from "next";

import { pageSeoEntries } from "@/data/seo";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: pageSeoEntries.map((page) => page.path),
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
