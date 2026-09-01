import type { MetadataRoute } from "next";

import { caseStudyDetails } from "@/content/case-study-details";
import { pageSeoEntries } from "@/data/seo";
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

  const caseStudyPaths = caseStudyDetails.map((caseStudy) => `/case-studies/${caseStudy.slug}`);
  return {
    rules: {
      userAgent: "*",
      allow: [...pageSeoEntries.map((page) => page.path), ...caseStudyPaths],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
