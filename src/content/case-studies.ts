import { caseStudyDetails } from "@/content/case-study-details";
import type { CaseStudyItem } from "@/types/case-study";

export type { CaseStudyItem } from "@/types/case-study";

const items: CaseStudyItem[] = caseStudyDetails.map((entry) => ({
  slug: entry.slug,
  title: entry.archive.title,
  technology: entry.archive.technology,
  industry: entry.archive.industry,
  excerpt: entry.archive.excerpt,
  image: entry.hero.image.src,
  alt: entry.hero.image.alt,
  href: `/case-studies/${entry.slug}`,
}));

export const caseStudiesContent = {
  hero: {
    title: "Explore our clients’ success stories through case studies",
    description:
      "Discover how we help our clients across the globe with innovative solutions to make their businesses flourish.",
  },
  sectionTitle: {
    heading: "Explore Our Client Case Studies",
    description:
      "Browse real projects across Shopify, Shopify Plus, web development, mobile apps and custom digital platforms. Each case study highlights the client requirement, technology and solution delivered.",
  },
  filter: {
    technologies: [...new Set(items.map((item) => item.technology).filter(Boolean))].sort(),
    industries: [...new Set(items.map((item) => item.industry).filter(Boolean))].sort(),
  },
  items,
} as const;
