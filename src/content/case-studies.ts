import caseStudiesItemsJson from "@/content/case-studies-items.json";
import type { CaseStudyItem } from "@/types/case-study";

export type { CaseStudyItem } from "@/types/case-study";

export const caseStudiesBrandLogos = [
  {
    src: "/assets/case-studies/brands/supertails.svg",
    alt: "SuperTails logo",
    width: 164,
    height: 41,
    href: "https://supertails.com/",
  },
  {
    src: "/assets/clients/eleven-eleven.svg",
    alt: "11.11 logo",
    width: 145,
    height: 22,
    href: "https://11-11.in/",
  },
  {
    src: "/assets/clients/bellavita.svg",
    alt: "Bella Vita logo",
    width: 170,
    height: 25,
    href: "https://bellavitaorganic.com/",
  },
  {
    src: "/assets/clients/bombay-shirt-company.svg",
    alt: "Bombay Shirt Company logo",
    width: 204,
    height: 26,
    href: "https://www.bombayshirts.com/",
  },
  {
    src: "/assets/clients/popclub_co.svg",
    alt: "Pop Club logo",
    width: 65,
    height: 41,
    href: "https://popclub.co/",
  },
  {
    src: "/assets/case-studies/brands/sri-sri-tattva.svg",
    alt: "Sri Sri Tattva logo",
    width: 106,
    height: 40,
    href: "https://www.srisritattva.com/",
  },
  {
    src: "/assets/clients/tropicfeel.svg",
    alt: "Tropicfeel logo",
    width: 150,
    height: 32,
    href: "https://shop.tropicfeel.com/",
  },
  {
    src: "/assets/clients/renee.svg",
    alt: "RENEE Cosmetics logo",
    width: 93,
    height: 30,
    href: "https://www.reneecosmetics.in/",
  },
  {
    src: "/assets/clients/royce-chocolate-black.svg",
    alt: "Royce Chocolate logo",
    width: 132,
    height: 38,
    href: "https://royceindia.com/",
  },
  {
    src: "/assets/clients/tego.svg",
    alt: "Tego logo",
    width: 101,
    height: 40,
    href: "https://tego.fit/",
  },
  {
    src: "/assets/clients/nelter.svg",
    alt: "Nékter Juice Bar logo",
    width: 104,
    height: 41,
    href: "https://www.nekterjuicebar.com/",
  },
  {
    src: "/assets/clients/rare-rabbit.svg",
    alt: "Rare Rabbit logo",
    width: 122,
    height: 84,
    href: "https://thehouseofrare.com/",
  },
] as const;

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
