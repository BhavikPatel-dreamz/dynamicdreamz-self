import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";
import { siteConfig } from "@/data/site";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { PortfolioShowcaseItem } from "@/components/sections/portfolio-showcase-section";
import type { CaseStudyPreviewItem } from "@/components/sections/services-case-studies-section";
import type { WhyChooseMigrationContent } from "@/components/sections/why-choose-shopify-migration-section";

export const shopifyMigrationHero = {
  eyebrowSpans: ["Established in 2006", "Shopify Platinum Partner"] as const,
  title: "Shopify Migration Services",
  paragraphs: [
    "Migrate your ecommerce store to Shopify or Shopify Plus with Dynamic Dreamz. We handle data migration, storefront development, apps and integrations, SEO redirects, QA, launch and post-migration support — with a structured plan built around your existing store.",
  ] as const,
  cta: "Request a Migration Assessment",
  ctaHref: siteConfig.quotePath,
  secondaryCta: {
    label: "Explore Migration Options",
    href: "#explore_migration_options",
  },
  video: "/assets/home/why-dynamic-dreamz.mp4",
  badges: [
    {
      alt: "Dynamic Dreamz - Shopify Platinum Partner",
      href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
      icon: "/assets/proof/shopify-platinum-partner.svg",
      height: 44,
      width: 136,
    },
    {
      alt: "Dynamic Dreamz on Clutch — 4.9 rating",
      href: "https://clutch.co/profile/dynamic-dreamz",
      icon: "/assets/proof/clutch-rating.svg",
      height: 44,
      width: 111,
    },
    {
      alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
      href: "https://www.trustpilot.com/review/dynamicdreamz.com",
      icon: "/assets/proof/trustpilot-rating.svg",
      height: 50,
      width: 148,
    },
    {
      alt: "Dynamic Dreamz — Upwork Top Rated Plus",
      href: "https://www.upwork.com/ag/dynamicdreamz/",
      icon: "/assets/proof/upwork-top-rated-plus.svg",
      height: 54,
      width: 126,
    },
  ] as const,
};

import { globalBrandLogos } from "@/content/brands";

export const shopifyMigrationBrands = {
  slug: "shopify-migration",
  heading: "Trusted by\nLeading Brands",
  items: globalBrandLogos,
};

export type MigrationServiceCard = {
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  href: string;
  ctaLabel?: string;
};

export const shopifyMigrationServicesContent = {
  eyebrow: "Platform-Specific Shopify Migration",
  heading: "Migrate to Shopify from\nyour current platform.",
  description:
    "Choose your current platform to explore the right Shopify migration path.",
  items: [
    {
      title: "Shopify 2.0 Theme Migration",
      description:
        "Upgrade an older Shopify theme to Online Store 2.0 with better section flexibility, app compatibility and maintainable theme architecture.",
      image: "/assets/shopify-migration/services/shopify-theme-migration.svg",
      imageAlt: "Shopify Online Store 2.0 Theme Migration",
      href: "/migrating-a-theme-to-online-store-2-0",
      ctaLabel: "Explore theme migration",
    },
    {
      title: "Magento to Shopify Plus Migration",
      description:
        "Replatform complex Magento stores to Shopify Plus with data, custom functionality, integrations, SEO and launch planning.",
      image: "/assets/shopify-migration/services/magento-to-shopify-plus-migration.svg",
      imageAlt: "Magento to Shopify Plus Storefront Migration",
      href: "/magento-to-shopify-plus-migration",
      ctaLabel: "Magento Plus migration",
    },
    {
      title: "Magento to Shopify Migration",
      description:
        "Move Magento products, customers, orders and storefront functionality to Shopify with SEO and integration planning.",
      image: "/assets/shopify-migration/services/magento-to-shopify-migration.svg",
      imageAlt: "Magento to Shopify Storefront Migration",
      href: "/magento-to-shopify-migration",
      ctaLabel: "Magento migration",
    },
    {
      title: "WooCommerce to Shopify Migration",
      description:
        "Migrate WooCommerce data, content and functionality to Shopify while planning redirects and SEO continuity.",
      image: "/assets/shopify-migration/services/woocommerce-to-shopify-migration.svg",
      imageAlt: "WooCommerce to Shopify Storefront Migration",
      href: "/woocommerce-to-shopify-migration",
      ctaLabel: "WooCommerce migration",
    },
    {
      title: "BigCommerce to Shopify Migration",
      description:
        "Replatform BigCommerce stores to Shopify with data migration, storefront rebuilding, integrations and launch support.",
      image: "/assets/shopify-migration/services/bigcommerce-to-shopify-migration.svg",
      imageAlt: "BigCommerce to Shopify Storefront Migration",
      href: "/bigcommerce-to-shopify-migration",
      ctaLabel: "BigCommerce migration",
    },
    {
      title: "Salesforce Commerce Cloud to Shopify Migration",
      description:
        "Plan an enterprise migration from Salesforce Commerce Cloud with careful architecture, integration and data mapping.",
      image: "/assets/shopify-migration/services/salesforce-to-shopify-migration.svg",
      imageAlt: "Salesforce Commerce Cloud to Shopify Migration",
      href: "/salesforce-to-shopify-migration",
      ctaLabel: "Salesforce migration",
    },
    {
      title: "PrestaShop to Shopify Migration",
      description:
        "Move catalog and customer data, replace modules and rebuild the storefront around Shopify's platform structure.",
      image: "/assets/shopify-migration/services/prestashop-to-shopify-migration.svg",
      imageAlt: "PrestaShop to Shopify Storefront Migration",
      href: "/prestashop-to-shopify-migration",
      ctaLabel: "PrestaShop migration",
    },
    {
      title: "Squarespace to Shopify Migration",
      description:
        "Move products and content to Shopify while rebuilding the storefront around stronger ecommerce operations and merchandising.",
      image: "/assets/shopify-migration/services/squarespace-to-shopify-migration.svg",
      imageAlt: "Squarespace to Shopify Storefront Migration",
      href: "/squarespace-to-shopify-migration",
      ctaLabel: "Squarespace migration",
    },
    {
      title: "Wix to Shopify Migration",
      description:
        "Move your Wix ecommerce store to Shopify with catalog migration, storefront setup, redirects and launch validation.",
      image: "/assets/shopify-migration/services/wix-to-shopify-migration.svg",
      imageAlt: "Wix to Shopify Storefront Migration",
      href: "/wix-to-shopify-migration",
      ctaLabel: "Wix Migration",
    },
    {
      title: "Ecwid to Shopify Migration",
      description:
        "Replatform an Ecwid catalog to Shopify with data transfer, storefront rebuilding and post-migration checks.",
      image: "/assets/shopify-migration/services/ecwid-to-shopify-migration.svg",
      imageAlt: "Ecwid to Shopify Storefront Migration",
      href: "/ecwid-to-shopify-migration",
      ctaLabel: "Ecwid Migration",
    },
    {
      title: "Square to Shopify Migration",
      description:
        "Move from Square Online to Shopify with catalog migration, payment and operational planning, storefront setup and QA.",
      image: "/assets/shopify-migration/services/square-to-shopify-migration.svg",
      imageAlt: "Squarespace to Shopify Storefront Migration",
      href: "/square-to-shopify-migration",
      ctaLabel: "Square Migration",
    },
    {
      title: "Etsy to Shopify Migration",
      description:
        "Build an independent Shopify storefront around your Etsy catalog, products and brand with a practical migration plan.",
      image: "/assets/shopify-migration/services/etsy-to-shopify-migration.svg",
      imageAlt: "Etsy to Shopify Storefront Migration",
      href: "/etsy-to-shopify-migration",
      ctaLabel: "Etsy Migration",
    },
  ] satisfies readonly MigrationServiceCard[],
  banner: {
    badge: "Complex / Enterprise Replatforming",
    title: "Planning a larger move to Shopify Plus?",
    description:
      "For complex catalogs, B2B, international stores, custom integrations or heavier replatforming requirements, plan the migration around Shopify Plus architecture from the beginning.",
    ctaLabel: "Shopify Plus Migration",
    ctaHref: "/shopify-plus-migration-agency",
  },
};

export const shopifyMigrationServices = shopifyMigrationServicesContent.items;

export type NumberedGridItem = {
  number: string;
  title: string;
  description: string;
};

export const shopifyMigrationScope = {
  eyebrow: "Migration Scope",
  heading: "What we migrate to Shopify.",
  description:
    "We define what can be transferred, what needs rebuilding and what should be replaced before development starts.",
  variant: "white" as const,
  items: [
    {
      number: "01",
      title: "Products & Catalog",
      description:
        "Products, variants, SKUs, collections, images, inventory-related data, options, tags and relevant metafields.",
    },
    {
      number: "02",
      title: "Customers & Orders",
      description:
        "Customer records and historical order data where supported by the source platform, exports, APIs and migration method.",
    },
    {
      number: "03",
      title: "Content & Navigation",
      description:
        "Pages, blog posts, navigation structures, images, files and important content that should remain available after the move.",
    },
    {
      number: "04",
      title: "SEO Data & Redirects",
      description:
        "Important URLs, metadata, content signals and old-to-new URL mapping with 301 redirects to protect organic value.",
    },
    {
      number: "05",
      title: "Apps & Functionality",
      description:
        "Audit plugins, extensions and custom features and map them to Shopify native features, apps or custom development.",
    },
    {
      number: "06",
      title: "Storefront & Integrations",
      description:
        "Shopify theme implementation plus required payment, shipping, CRM, ERP, marketing or operational integrations.",
    },
  ] satisfies readonly NumberedGridItem[],
};

export const shopifyMigrationProcess = {
  eyebrow: "Shopify Migration Process",
  heading: "How we migrate your store to Shopify.",
  description:
    "From audit and data migration to development, testing and launch, we manage each step of the move to Shopify.",
  variant: "pista" as const,
  items: [
    {
      number: "01",
      title: "Audit & Planning",
      description:
        "Review the existing store, catalog, apps, integrations, URLs, custom features and data quality before defining scope.",
    },
    {
      number: "02",
      title: "Data Mapping",
      description:
        "Define what moves, how fields map to Shopify and which items require transformation, cleanup or separate handling.",
    },
    {
      number: "03",
      title: "Shopify Store Build",
      description:
        "Implement the approved Shopify theme, navigation, templates, merchandising structure and required storefront functionality.",
    },
    {
      number: "04",
      title: "Apps & Integrations",
      description:
        "Replace legacy extensions with Shopify apps, native features or custom integrations and validate important data flows.",
    },
    {
      number: "05",
      title: "QA & SEO Validation",
      description:
        "Test migrated data, functionality, responsive experience, redirects, analytics, metadata and key technical SEO signals.",
    },
    {
      number: "06",
      title: "Launch & Post-Launch",
      description:
        "Complete final data sync where required, launch the Shopify store and run a structured post-launch validation checklist.",
    },
  ] satisfies readonly NumberedGridItem[],
};

export const shopifyMigrationSeoSafe = {
  eyebrow: "SEO-Safe Shopify Migration",
  heading: "Protect the organic value you have already built.",
  description:
    "We plan URL mapping, redirects and key SEO signals as part of the migration—not after launch.",
  tags: [
    "Existing URL Crawl",
    "URL Mapping",
    "301 Redirects",
    "Metadata",
    "Canonicals",
    "Structured Data",
    "Analytics",
    "Search Console",
  ] as const,
  urlMappings: [
    {
      source: "/category/product-a",
      statusCode: "301",
      target: "/products/product-a",
    },
    {
      source: "/shop/collection-b",
      statusCode: "301",
      target: "/collections/collection-b",
    },
    {
      source: "/blog/post-c",
      statusCode: "301",
      target: "/blogs/news/post-c",
    },
  ] as const,
  checks: [
    "Preserve useful content",
    "Validate redirects",
    "Check canonical signals",
    "Post-launch crawl",
  ] as const,
};

export const shopifyMigrationWhyChoose: WhyChooseMigrationContent = {
  eyebrow: "Why Dynamic Dreamz",
  heading: "Why choose Dynamic Dreamz for Shopify migration?",
  description:
    "Get migration, Shopify development, integrations, QA and post-launch support from one experienced Shopify partner.",
  items: [
    {
      icon: "shopify-bag",
      title: "Shopify Platinum Partner",
      description:
        "Shopify is a core ecommerce capability with dedicated experience across Shopify and Shopify Plus delivery.",
    },
    {
      icon: "certified",
      title: "Shopify-Certified Expertise",
      description:
        "Credential-led Shopify development capability for projects that need deeper Liquid, storefront, B2B and platform knowledge.",
    },
    {
      icon: "custom-build",
      title: "Cross-Functional Team",
      description:
        "Design, Shopify, QA, mobile and full-stack resources can support migration requirements beyond theme code.",
    },
    {
      icon: "long-term-support",
      title: "Ongoing Shopify Support",
      description:
        "Continue after launch with new features, CRO, integrations, maintenance, performance work and recurring development.",
    },
  ],
  partnerLogo: "/assets/proof/shopify-platinum-partner.svg",
  partnerLogoAlt: "Dynamic Dreamz - Shopify Platinum Partner",
  logoHref: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
  partnerHeading: "20+ Years of Ecommerce Delivery",
  partnerDescription:
    "Dynamic Dreamz combines long-term web and ecommerce experience with a broader 150+ expert in-house team and more than 5,000 delivered projects.",
  stats: [
    { value: "20+", label: "Years of Experience" },
    { value: "150+", label: "Experts" },
    { value: "5k+", label: "projects delivered" },
    { value: "2.5k+", label: "Verified 5 star Reviews" },
  ],
  partnerLink: {
    label: "About Dynamic Dreamz",
    href: "/about-us",
  },
};

export const shopifyMigrationPortfolio = {
  eyebrow: "Portfolio",
  heading: "Portfolio of Shopify Migration",
  description:
    "Explore selected projects across Shopify, WordPress, mobile apps and custom development. See how we help brands and agencies build high-performing digital experiences.",
  ctaLabel: "View our work",
  ctaHref: "/our-work",
  category: "shopify",
  items: [
    {
      name: "Capri Bikes",
      href: "https://capribikes.com/",
      image: "/assets/our-work/projects/capri-bikes.webp",
      imageAlt: "Capri Bikes Vintage Bicycles Shopify Storefront by Dynamic Dreamz",
      category: "shopify",
    },
    {
      name: "Atolea Jewelry",
      href: "https://atoleajewelry.com/",
      image: "/assets/our-work/projects/atolea-jewelry.webp",
      imageAlt: "Atolea Jewelry Waterproof Shopify Storefront by Dynamic Dreamz",
      category: "shopify plus",
    },
    {
      name: "Blackopalbeauty",
      href: "https://blackopalbeauty.com/",
      image: "/assets/our-work/projects/blackopalbeauty.webp",
      imageAlt: "Black Opal Beauty Makeup & Skincare Shopify Storefront by Dynamic Dreamz",
      category: "shopify",
    },
    {
      name: "Nested Naturals",
      href: "https://nestednaturals.com/",
      image: "/assets/our-work/projects/nested-naturals.webp",
      imageAlt: "Nested Naturals Wellness Shopify Storefront by Dynamic Dreamz",
      category: "shopify",
    },
    {
      name: "Mygeeni",
      href: "https://mygeeni.com/",
      image: "/assets/our-work/projects/mygeeni.webp",
      imageAlt: "Geeni Smart Home Devices Shopify Storefront by Dynamic Dreamz",
      category: "shopify",
    },
    {
      name: "Raen",
      href: "https://raen.com/",
      image: "/assets/fashion/portfolio/raen-eyewear-fashion.webp",
      imageAlt: "RAEN Handcrafted Eyewear Shopify Storefront by Dynamic Dreamz",
      category: "shopify plus",
    },
    {
      name: "Try Nokt",
      href: "https://trynokt.com/",
      image: "/assets/our-work/projects/try-nokt.webp",
      imageAlt: "Nokt Precision Screwdriver Shopify Storefront by Dynamic Dreamz",
      category: "shopify",
    },
    {
      name: "Cool Flags",
      href: "https://coolflags.com/",
      image: "/assets/our-work/projects/cool-flags.webp",
      imageAlt: "Cool Flags Decorative Banners Shopify Storefront by Dynamic Dreamz",
      category: "shopify",
    },
  ] satisfies readonly PortfolioShowcaseItem[],
};

export const shopifyMigrationTestimonials = {
  eyebrow: "Client Stories",
  heading: "Don't Just Take Our Word For It",
  description:
    "Our client's satisfaction is the real test of our success. Discover how our specialized app\ndevelopment services have enabled companies to grow in the digital economy.",
  items: shopifyPlusAgencyTestimonials.items,
};

export const shopifyMigrationCaseStudies = {
  eyebrow: "CASE STUDIES",
  heading: "Shopify migration case studies",
  description:
    "Selected examples of ecommerce stores migrated to Shopify and Shopify Plus.",
  items: [
    {
      title:
        "Adobe Commerce to Shopify Migration: Zero Data-Loss Replatform for First Aid Distributions",
      href: "/case-studies/first-aid-distributions-migration",
      image: "/assets/case-studies/first-aid-distributions-migration.webp",
      imageAlt: "First Aid Distributions Shopify Storefront Migration",
      technology: "Shopify Migration",
      industry: "Health & Nutrition",
      tags: ["Data Migration", "Third-Party API Integration"],
    },
    {
      title:
        "Daniel Walters Eyewear: BigCommerce to Shopify Migration & Custom Dawn Theme Redesign",
      href: "/case-studies/daniel-walters",
      image: "/assets/case-studies/daniel-walters.webp",
      imageAlt:
        "Daniel Walters Eyewear BigCommerce to Shopify Migration with Dawn Theme Redesign",
      technology: "Shopify Migration",
      industry: "Jewellery & Accessories",
      tags: ["Eyewear", "Jewellery & Accessories"],
    },
    {
      title:
        "Sleepycat: WooCommerce to Shopify Plus Migration with Custom Bundle Builder, SKU-Splitting & WhatsApp Automation",
      href: "/case-studies/sleepycat",
      image: "/assets/case-studies/sleepycat.webp",
      imageAlt:
        "SleepyCat WooCommerce to Shopify Plus Migration with Custom Bundle Builder",
      technology: "Shopify Migration",
      industry: "Home & Living",
      tags: ["Mattress & Sleep", "WooCommerce to Shopify"],
    },
  ] satisfies readonly CaseStudyPreviewItem[],
};

export const shopifyMigrationFaqsContent = {
  eyebrow: "Frequently Asked Questions",
  heading: "Shopify migration FAQs.",
  description: "Answers about data, SEO, functionality, timelines and launch.",
  items: [
    {
      question: "What can Dynamic Dreamz migrate to Shopify?",
      answer:
        "Depending on the source platform and available exports or APIs, migration can include products, variants, collections, customers, order history, pages, blogs, navigation, images, files, metafields, selected reviews and metadata. We confirm the final migration set during the pre-migration audit.",
    },
    {
      question: "Can you migrate Magento, WooCommerce or BigCommerce to Shopify?",
      answer:
        "Yes. We support migrations from Magento, WooCommerce, BigCommerce and other ecommerce platforms to Shopify and Shopify Plus, with platform-specific planning for data, apps, URLs, custom functionality and launch.",
    },
    {
      question: "How do you protect SEO during a Shopify migration?",
      answer:
        "We crawl the current site, identify valuable URLs, map old URLs to the right Shopify destinations, implement 301 redirects, preserve useful metadata and content, validate technical signals and run post-launch checks.",
    },
    {
      question: "Will my existing apps and custom functionality work on Shopify?",
      answer:
        "Not automatically. We audit existing functionality and map it to Shopify native features, suitable apps, custom theme functionality or custom integrations. Anything that cannot be replicated exactly should be identified before launch.",
    },
    {
      question: "Can you migrate us directly to Shopify Plus?",
      answer:
        "Yes. Shopify Plus migration is appropriate for projects with enterprise requirements such as larger catalogs, complex integrations, B2B, international storefronts or advanced operational workflows.",
    },
    {
      question: "How long does a Shopify migration take?",
      answer:
        "The timeline depends on catalog size, design scope, integrations, custom functionality, data quality and SEO requirements. We confirm the delivery plan after reviewing the current store and migration scope.",
    },
    {
      question: "Can you redesign the store while migrating to Shopify?",
      answer:
        "Yes. Migration can be combined with a Shopify redesign or theme implementation. We plan design and data migration as connected but separately testable workstreams before launch.",
    },
    {
      question: "Do you provide post-launch Shopify support?",
      answer:
        "Yes. After launch, we can continue with bug fixes, theme improvements, app and integration changes, CRO, performance work and ongoing Shopify development support.",
    },
  ] satisfies readonly FaqAccordionItem[],
};

export const shopifyMigrationFaqs = shopifyMigrationFaqsContent.items;
