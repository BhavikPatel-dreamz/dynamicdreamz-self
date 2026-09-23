import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";
import { siteConfig } from "@/data/site";
import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
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

export const shopifyMigrationBrands = {
  slug: "shopify-migration",
  heading: "Trusted by\nLeading Brands",
  items: [
    {
      href: "https://supertails.com/",
      src: "/assets/clients/supertails.svg",
      alt: "Supper Tails Logo",
      width: 164,
      height: 41,
    },
    {
      href: "https://11-11.us/",
      src: "/assets/clients/eleven-eleven.svg",
      alt: "Eleven Eleven",
      width: 145,
      height: 20,
    },
    {
      href: "https://bellavitaorganic.com/",
      src: "/assets/clients/bellavita.svg",
      alt: "bellavita logo",
      width: 166,
      height: 24,
    },
    {
      href: "https://www.bombayshirts.com/",
      src: "/assets/clients/bombay-shirt-company.svg",
      alt: "Bombay Shirt Company",
      width: 204,
      height: 26,
    },
    {
      href: "https://popclub.co/",
      src: "/assets/clients/popclub_co.svg",
      alt: "popclub logo",
      width: 65,
      height: 41,
    },
    {
      href: "https://www.srisritattva.com/",
      src: "/assets/clients/sri-sri-tattva.svg",
      alt: "SriSri Tattva Logo",
      width: 106,
      height: 40,
    },
    {
      href: "https://shop.tropicfeel.com/",
      src: "/assets/clients/tropicfeel.svg",
      alt: "tropicfeel logo",
      width: 150,
      height: 32,
    },
    {
      href: "https://www.reneecosmetics.in/",
      src: "/assets/clients/renee.svg",
      alt: "Renee logo",
      width: 93,
      height: 30,
    },
    {
      href: "https://royceindia.com/",
      src: "/assets/clients/royce-chocolate.svg",
      alt: "Royce chocolate logo",
      width: 132,
      height: 38,
    },
    {
      href: "https://tego.fit/",
      src: "/assets/clients/tego.svg",
      alt: "tego logo",
      width: 101,
      height: 40,
    },
    {
      href: "https://www.nekterjuicebar.com/",
      src: "/assets/clients/nekter-colored.svg",
      alt: "nekter-colored",
      width: 66,
      height: 64,
    },
    {
      href: "https://thehouseofrare.com/",
      src: "/assets/clients/rare-rabbit.svg",
      alt: "Rare Rabbit Logo",
      width: 122,
      height: 84,
    },
  ] satisfies readonly ClientLogoSliderItem[],
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
      imageAlt: "shopify-theme-migration-img",
      href: "/migrating-a-theme-to-online-store-2-0",
      ctaLabel: "Explore theme migration",
    },
    {
      title: "Magento to Shopify Plus Migration",
      description:
        "Replatform complex Magento stores to Shopify Plus with data, custom functionality, integrations, SEO and launch planning.",
      image: "/assets/shopify-migration/services/magento-to-shopify-plus-migration.svg",
      imageAlt: "magento-to-shopify-plus-migration",
      href: "/magento-to-shopify-plus-migration",
      ctaLabel: "Magento Plus migration",
    },
    {
      title: "Magento to Shopify Migration",
      description:
        "Move Magento products, customers, orders and storefront functionality to Shopify with SEO and integration planning.",
      image: "/assets/shopify-migration/services/magento-to-shopify-migration.svg",
      imageAlt: "magento-to-shopify-img",
      href: "/magento-to-shopify-migration",
      ctaLabel: "Magento migration",
    },
    {
      title: "WooCommerce to Shopify Migration",
      description:
        "Migrate WooCommerce data, content and functionality to Shopify while planning redirects and SEO continuity.",
      image: "/assets/shopify-migration/services/woocommerce-to-shopify-migration.svg",
      imageAlt: "woocommerce-to-shopify-img",
      href: "/woocommerce-to-shopify-migration",
      ctaLabel: "WooCommerce migration",
    },
    {
      title: "BigCommerce to Shopify Migration",
      description:
        "Replatform BigCommerce stores to Shopify with data migration, storefront rebuilding, integrations and launch support.",
      image: "/assets/shopify-migration/services/bigcommerce-to-shopify-migration.svg",
      imageAlt: "bigcommerce-to-shopify-img",
      href: "/bigcommerce-to-shopify-migration",
      ctaLabel: "BigCommerce migration",
    },
    {
      title: "Salesforce Commerce Cloud to Shopify Migration",
      description:
        "Plan an enterprise migration from Salesforce Commerce Cloud with careful architecture, integration and data mapping.",
      image: "/assets/shopify-migration/services/salesforce-to-shopify-migration.svg",
      imageAlt: "salesforce-to-shopify-img",
      href: "/salesforce-to-shopify-migration",
      ctaLabel: "Salesforce migration",
    },
    {
      title: "PrestaShop to Shopify Migration",
      description:
        "Move catalog and customer data, replace modules and rebuild the storefront around Shopify's platform structure.",
      image: "/assets/shopify-migration/services/prestashop-to-shopify-migration.svg",
      imageAlt: "prestashop-to-shopify-img",
      href: "/prestashop-to-shopify-migration",
      ctaLabel: "PrestaShop migration",
    },
    {
      title: "Squarespace to Shopify Migration",
      description:
        "Move products and content to Shopify while rebuilding the storefront around stronger ecommerce operations and merchandising.",
      image: "/assets/shopify-migration/services/squarespace-to-shopify-migration.svg",
      imageAlt: "squarespace-to-shopify-img",
      href: "/squarespace-to-shopify-migration",
      ctaLabel: "Squarespace migration",
    },
    {
      title: "Wix to Shopify Migration",
      description:
        "Move your Wix ecommerce store to Shopify with catalog migration, storefront setup, redirects and launch validation.",
      image: "/assets/shopify-migration/services/wix-to-shopify-migration.svg",
      imageAlt: "wix-to-shopify-img",
      href: "/wix-to-shopify-migration",
      ctaLabel: "Wix Migration",
    },
    {
      title: "Ecwid to Shopify Migration",
      description:
        "Replatform an Ecwid catalog to Shopify with data transfer, storefront rebuilding and post-migration checks.",
      image: "/assets/shopify-migration/services/ecwid-to-shopify-migration.svg",
      imageAlt: "ecwid-to-shopify-img",
      href: "/ecwid-to-shopify-migration",
      ctaLabel: "Ecwid Migration",
    },
    {
      title: "Square to Shopify Migration",
      description:
        "Move from Square Online to Shopify with catalog migration, payment and operational planning, storefront setup and QA.",
      image: "/assets/shopify-migration/services/square-to-shopify-migration.svg",
      imageAlt: "squarespace-to-shopify-img",
      href: "/square-to-shopify-migration",
      ctaLabel: "Square Migration",
    },
    {
      title: "Etsy to Shopify Migration",
      description:
        "Build an independent Shopify storefront around your Etsy catalog, products and brand with a practical migration plan.",
      image: "/assets/shopify-migration/services/etsy-to-shopify-migration.svg",
      imageAlt: "etsy-to-shopify-img",
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
      title: "05 QA & SEO Validation",
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
      icon: "certified",
      title: "Shopify Platinum Partner",
      description:
        "Shopify is a core ecommerce capability with dedicated experience across Shopify and Shopify Plus delivery.",
    },
    {
      icon: "expertise",
      title: "Shopify-Certified Expertise",
      description:
        "Credential-led Shopify development capability for projects that need architectural and technical certainty.",
    },
    {
      icon: "team",
      title: "Cross-Functional Team",
      description:
        "Design, Shopify, QA, mobile and full-stack resources can support you beyond the initial theme build.",
    },
    {
      icon: "support",
      title: "Ongoing Shopify Support",
      description:
        "Continue after launch with new features, CRO, integrations, theme upgrades and technical support.",
    },
  ],
  partnerLogo: "/assets/proof/shopify-platinum-partner.svg",
  partnerLogoAlt: "Dynamic Dreamz - Shopify Platinum Partner",
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
      imageAlt: "Capri Bikes Image",
      category: "shopify",
    },
    {
      name: "Atolea Jewelry",
      href: "https://atoleajewelry.com/",
      image: "/assets/our-work/projects/atolea-jewelry.webp",
      imageAlt: "Atolea Jewelry Image",
      category: "shopify plus",
    },
    {
      name: "Blackopalbeauty",
      href: "https://blackopalbeauty.com/",
      image: "/assets/our-work/projects/blackopalbeauty.webp",
      imageAlt: "Blackopalbeauty Image",
      category: "shopify",
    },
    {
      name: "Nested Naturals",
      href: "https://nestednaturals.com/",
      image: "/assets/our-work/projects/nested-naturals.webp",
      imageAlt: "Nested Naturals Image",
      category: "shopify",
    },
    {
      name: "Mygeeni",
      href: "https://mygeeni.com/",
      image: "/assets/our-work/projects/mygeeni.webp",
      imageAlt: "Mygeeni Image",
      category: "shopify",
    },
    {
      name: "Raen",
      href: "https://raen.com/",
      image: "/assets/fashion/portfolio/raen-eyewear-fashion.webp",
      imageAlt: "Raen Image",
      category: "shopify plus",
    },
    {
      name: "Try Nokt",
      href: "https://trynokt.com/",
      image: "/assets/our-work/projects/try-nokt.webp",
      imageAlt: "Try Nokt Image",
      category: "shopify",
    },
    {
      name: "Cool Flags",
      href: "https://coolflags.com/",
      image: "/assets/our-work/projects/cool-flags.webp",
      imageAlt: "Cool Flags Image",
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
      imageAlt: "first-aid-distributions-img",
      technology: "Shopify Migration",
      industry: "Health & Nutrition",
      description:
        "See how Dynamic Dreamz migrated First Aid Distributions from Adobe Commerce to Shopify while preserving key ecommerce data and functionality.",
    },
    {
      title:
        "Daniel Walters Eyewear: BigCommerce to Shopify Migration & Custom Dawn Theme Redesign",
      href: "/case-studies/daniel-walters",
      image: "/assets/case-studies/daniel-walters.webp",
      imageAlt:
        "daniel-walters-eyewear-big-commerce-to-shopify-migration-dawn-theme-redesign-img",
      technology: "Shopify Migration",
      industry: "Jewellery & Accessories",
      description:
        "Discover how Dynamic Dreamz helped Daniel Walters Eyewear migrate from BigCommerce to Shopify with a tailored Dawn theme.",
    },
    {
      title:
        "Sleepycat: WooCommerce to Shopify Plus Migration with Custom Bundle Builder, SKU-Splitting & WhatsApp Automation",
      href: "/case-studies/sleepycat",
      image: "/assets/case-studies/sleepycat.webp",
      imageAlt:
        "sleepycat-woocommerce-to-shopify-plus-migration-with-custom-bundle-builder-SKU-splitting-img",
      technology: "Shopify Migration",
      industry: "Home & Living",
      description:
        "Explore how Dynamic Dreamz migrated Sleepycat to Shopify Plus while implementing custom merchandising and automation features.",
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
