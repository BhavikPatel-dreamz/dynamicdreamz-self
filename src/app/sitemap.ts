import type { MetadataRoute } from "next";

import { caseStudyDetails } from "@/content/case-study-details";
import { type PageSeoConfig, pageSeoEntries } from "@/data/seo";
import { isSearchIndexingEnabled } from "@/lib/search-indexing";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isSearchIndexingEnabled()) {
    return [];
  }

  const staticPages = pageSeoEntries
    .filter((page: PageSeoConfig) => {
      if (!page.robots) return true;
      if (typeof page.robots === "object" && "index" in page.robots && page.robots.index === false) {
        return false;
      }
      return true;
    })
    .map((page: PageSeoConfig) => ({
      url: absoluteUrl(page.path),
      lastModified: new Date(page.modifiedTime),
      changeFrequency: page.sitemap.changeFrequency,
      priority: page.sitemap.priority,
      images: [absoluteUrl(page.image.path)],
    }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudyDetails.map((caseStudy) => ({
    url: absoluteUrl(`/case-studies/${caseStudy.slug}`),
    lastModified: new Date(caseStudy.seo.lastModified),
    changeFrequency: "monthly",
    priority: 0.7,
    images: [absoluteUrl(caseStudy.hero.image.src)],
  }));

  return [...staticPages, ...caseStudyPages];
}
