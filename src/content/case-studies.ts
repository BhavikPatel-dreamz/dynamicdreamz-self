import { caseStudyDetails } from "@/content/case-study-details";
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

const currentArchive: Record<string, Pick<CaseStudyItem, "title" | "technology" | "industry" | "excerpt" | "tags">> = {
  evrgreen: { title: "Decor That Shows Up, Does Its Job, and Disappears- Evrgreen", technology: "Shopify / Shopify Plus", industry: "Home & Living", excerpt: "Migrating an entire eCommerce store to a new platform is a tough task- and it gets even tougher if it’s about the brand having thousands of SKUs throughout the prescription eyewear, sunglasses & designer collections.", tags: ["Large Catalog / SKU Management", "Platform Migration"] },
  tipii: { title: "Your Moments, Beautifully Built- Tipii’", technology: "Shopify / Shopify Plus", industry: "Other Industries", excerpt: "Some brands sell products. Tipii sells memories carefully printed, thoughtfully personalised, and delivered with the kind of care that turns a photograph into something you’ll keep forever.", tags: ["Custom Storefront Design", "Personalization / Photo Printing"] },
  "daniel-walters": { title: "Daniel Walters Eyewear: BigCommerce to Shopify Migration & Custom Dawn Theme Redesign", technology: "Shopify Migration", industry: "Jewellery & Accessories", excerpt: "A complete platform migration and store redesign for Daniel Walters Eyewear, one of America’s leading online prescription eyewear and sunglasses retailers, moving the entire store from BigCommerce to Shopify and rebuilding it from scratch on a fully customised Dawn theme.", tags: ["Eyewear", "Jewellery & Accessories"] },
  aetrex: { title: "Aetrex: Shopify Version Upgrade, Product Variants & UI Optimisation for Orthotic Footwear", technology: "Shopify / Shopify Plus", industry: "Health & Nutrition", excerpt: "A series of targeted Shopify upgrades for Aetrex, a nearly 80-year-old global leader in orthotic footwear and foot-scanning technology, covering a full Shopify version upgrade, product variant and filter reconfiguration, product card hover functionality, product groupings, and site-wide UI improvements.", tags: ["Footwear", "Version Upgrade"] },
  rootedhuman: { title: "Rooted Human: Custom Shopify Dawn Theme Store for Women’s Wellness Supplements", technology: "Shopify / Shopify Plus", industry: "Health & Nutrition", excerpt: "A fully custom Shopify store built on the Dawn theme for Rooted Human, a UK-based women’s wellness supplement brand, featuring a clean responsive design, product bundle functionality, and optimised product displays for discovery.", tags: ["Subscription & Bundles", "Women’s Wellness"] },
  "eczema-milk": { title: "Eczema Milk: Figma-to-Shopify Dawn Theme Build with Judge.me Reviews Integration", technology: "Shopify / Shopify Plus", industry: "Beauty & Cosmetics", excerpt: "A pixel-perfect Figma-to-Shopify conversion for Eczema Milk, a sensitive-skin eczema relief skincare brand, delivering a fully custom Dawn theme store with Judge.me reviews integration and full responsive design.", tags: ["Figma to Shopify", "Judge.me Integration"] },
  yhus: { title: "YHUS: Custom Shopify Minimalista Theme Store with m² Calculator & Cart Upsell", technology: "Shopify Custom Apps & Integrations", industry: "Home & Living", excerpt: "A fully custom Shopify store on the Minimalista theme for YHUS, a French composite wood fencing and decking brand, featuring a custom m² quantity calculator, colour-variant media galleries, sample cart limits, cart drawer upsell, and a free delivery progress bar.", tags: ["Cart Upsell", "Custom Calculator Tool"] },
  "nandi-medical": { title: "Nandi Medical: Custom Shopify Dawn Theme Store with Individually Structured PDPs for HRT Clinics", technology: "Shopify / Shopify Plus", industry: "Health & Nutrition", excerpt: "A fully customised Shopify Dawn theme store for Nandi Medical, a US-based B2B supplier of sterile trocar procedure kits for HRT clinics, featuring individually structured product detail pages tailored to each kit’s material and clinical use case.", tags: ["B2B Ecommerce", "Custom Product Pages"] },
  factsandsupps: { title: "Facts and Supps: End-to-End Shopify Redesign with Custom Animations & Subscription Engine", technology: "Shopify / Shopify Plus", industry: "Health & Nutrition", excerpt: "A complete end-to-end Shopify store redesign for FACTS (Facts and Supps), a German science-led daily health supplement brand, featuring custom-coded animations, a seamless subscription engine, and a full mobile-first overhaul.", tags: ["Custom Animations", "Subscription Engine"] },
  zedmed: { title: "Zedmed: Custom Shopify Dawn Theme Store for UK B2B Medical & NHS Supplies", technology: "Shopify / Shopify Plus", industry: "Health & Nutrition", excerpt: "A fully customised Shopify Dawn theme store for Zedmed, a UK B2B medical supplies distributor serving NHS hospitals, GP surgeries, and veterinary practices, featuring nested breadcrumb navigation, a desktop product image slider, and a recently viewed products section.", tags: ["B2B Ecommerce", "Medical Supplies"] },
};

const currentOrder = [
  "evrgreen",
  "tipii",
  "daniel-walters",
  "aetrex",
  "rootedhuman",
  "eczema-milk",
  "yhus",
  "nandi-medical",
  "factsandsupps",
  "zedmed",
];

const items: CaseStudyItem[] = caseStudyDetails.map((entry) => ({
  slug: entry.slug,
  ...(currentArchive[entry.slug] ?? { title: entry.archive.title, technology: entry.archive.technology, industry: entry.archive.industry, excerpt: entry.archive.excerpt, tags: [] }),
  image: entry.hero.image.src,
  alt: entry.hero.image.alt || `${entry.clientName} case study project preview`,
  href: `/case-studies/${entry.slug}`,
})).sort((a, b) => {
  const aIndex = currentOrder.indexOf(a.slug);
  const bIndex = currentOrder.indexOf(b.slug);
  if (aIndex === -1 && bIndex === -1) return 0;
  if (aIndex === -1) return 1;
  if (bIndex === -1) return -1;
  return aIndex - bIndex;
});

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
    description: "Browse real projects across Shopify, Shopify Plus, web development, mobile apps and custom digital platforms. Each case study highlights the client requirement, technology and solution delivered.",
  },
  filter: {
    technologies: ["Full-Stack Development", "Shopify / Shopify Plus", "Shopify Custom Apps & Integrations", "Shopify Migration", "WordPress"],
    industries: ["Beauty & Cosmetics", "Fashion & Apparel", "Food & Beverages", "Health & Nutrition", "Home & Living", "Jewellery & Accessories", "Other Industries"],
  },
  items,
} as const;
