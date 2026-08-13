import type { MetadataRoute } from "next";

import { pageSeoEntries } from "@/data/seo";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return pageSeoEntries.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: new Date(page.modifiedTime),
    changeFrequency: page.sitemap.changeFrequency,
    priority: page.sitemap.priority,
    images: [absoluteUrl(page.image.path)],
  }));
}
