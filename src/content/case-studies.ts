import caseStudiesItemsJson from "@/content/case-studies-items.json";
import type { CaseStudyItem } from "@/types/case-study";
import { globalBrandLogos } from "@/content/brands";

export type { CaseStudyItem } from "@/types/case-study";

export const caseStudiesBrandLogos = globalBrandLogos;

export const caseStudiesBrandSection = {
  slug: "case-studies",
  heading: "Trusted by Leading Brands",
  brands: {},
} as const;

export const caseStudiesContent = {
  hero: {
    eyebrow: "CLIENT CASE STUDIES",
    title: "Shopify, Web & Mobile App Case Studies",
    description:
      "Explore selected Shopify and Shopify Plus projects, web development, custom mobile apps, Shopify mobile apps and full-stack solutions delivered for brands and businesses across different industries.",
    primaryCta: {
      label: "explore case studies",
      href: "#explore_case_studies",
    },
    secondaryCta: {
      label: "view our work",
      href: "/our-work",
    },
  },
  sectionTitle: {
    eyebrow: "Case Studies",
    heading: "Explore Our Client Case Studies",
    description:
      "Browse real projects across Shopify, Shopify Plus, web development, mobile apps and custom digital platforms. Each case study highlights the client requirement, technology and solution delivered.",
  },
  filter: {
    technologies: [
      "Full-Stack Development",
      "Mobile Apps",
      "Shopify / Shopify Plus",
      "Shopify Custom Apps & Integrations",
      "Shopify Migration",
      "Shopify Mobile App Development",
      "WordPress",
    ],
    industries: [
      "Beauty & Cosmetics",
      "Fashion & Apparel",
      "Food & Beverages",
      "Health & Nutrition",
      "Home & Living",
      "Jewellery & Accessories",
      "Other Industries",
    ],
  },
  items: caseStudiesItemsJson as readonly CaseStudyItem[],
} as const;
