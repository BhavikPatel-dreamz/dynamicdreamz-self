import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";
import { isSearchIndexingEnabled } from "@/lib/search-indexing";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  if (!isSearchIndexingEnabled()) {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
      host: siteConfig.url,
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/api/*",
          "/thank-you-*",
        ],
      },
      {
        userAgent: ["OAI-SearchBot", "PerplexityBot", "ChatGPT-User", "Google-Extended"],
        allow: "/",
        disallow: ["/admin/*", "/api/*"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
