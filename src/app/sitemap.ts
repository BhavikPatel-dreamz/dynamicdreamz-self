import type { MetadataRoute } from "next";

import { pageSeoEntries } from "@/data/seo";
import { absoluteUrl, getBuildDate } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = getBuildDate();

  return pageSeoEntries.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency: page.sitemap.changeFrequency,
    priority: page.sitemap.priority,
    images: [absoluteUrl(page.image.path)],
  }));
}
