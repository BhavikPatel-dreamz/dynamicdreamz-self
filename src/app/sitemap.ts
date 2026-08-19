import type { MetadataRoute } from "next";

import { type PageSeoConfig, pageSeoEntries } from "@/data/seo";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return pageSeoEntries
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
}
