import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { EvaluationFrameworkContent } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import type { MigrationServiceCard } from "@/components/sections/shopify-migration/shopify-migration-services-section";
import type { NumberedGridItem } from "@/components/sections/shopify-migration/shopify-migration-numbered-grid-section";
import type { SeoSafeMigrationContent } from "@/components/sections/shopify-migration/seo-safe-migration-section";
import type { ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import type { WhyChooseMigrationContent } from "@/components/sections/why-choose-shopify-migration-section";
import type { PricingEngagementContent } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import type { CaseStudyPreviewItem } from "@/components/sections/services-case-studies-section";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export const plusAgencyHeroContent: ServiceHeroVideoContent = {
  eyebrowSpans: ["Established in 2006", "Shopify Plus Migration Agency"],
  title: "Shopify Plus Migration Services",
  paragraphs: [
    "Migrate to Shopify Plus with a Shopify Platinum Partner. We handle your data, storefront, apps, custom functionality, enterprise integrations, SEO redirects, QA and launch—while keeping the migration aligned with the workflows your business already depends on.",
  ],
  cta: "Plan Your Migration",
  ctaHref: "/contact-us",
  secondaryCta: {
    label: "See What We Migrate",
    href: "#what-we-migrate",
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
  ],
};

export const plusAgencyBrands = {
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
      href: "https://11-11.in/",
      src: "/assets/clients/eleven-eleven.svg",
      alt: "Eleven Eleven",
      width: 145,
      height: 20,
    },
    {
      href: "https://bellavitaorganic.com/",
      src: "/assets/clients/bella-vita.svg",
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
      src: "/assets/clients/popclub.svg",
      alt: "",
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
      href: "https://reneecosmetics.in/",
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
      src: "/assets/clients/nelter.svg",
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

export const plusAgencyServicesContent = {
  eyebrow: "Choose Your Migration Path",
  heading: "Moving to Shopify Plus from another platform?",
  description:
    "Start with the source platform that best matches your current store. Each route has different data, app, SEO and integration considerations.",
  items: [
    {
      title: "Magento / Adobe Commerce to Shopify Plus Migration",
      description:
        "Replatform complex Magento stores to Shopify Plus with data, custom functionality, integrations, SEO and launch planning.",
      image:
        "/assets/shopify-migration/services/magento-to-shopify-plus-migration.svg",
      imageAlt: "magento-to-shopify-plus-migration",
      href: "/magento-to-shopify-plus-migration",
      ctaLabel: "Explore migration",
    },
    {
      title: "WooCommerce to Shopify Plus Migration",
      description:
        "Migrate WooCommerce data, content and functionality to Shopify while planning redirects and SEO continuity.",
      image:
        "/assets/shopify-migration/services/woocommerce-to-shopify-migration.svg",
      imageAlt: "woocommerce-to-shopify-img",
      href: "/woocommerce-to-shopify-migration",
      ctaLabel: "Explore migration",
    },
    {
      title: "BigCommerce to Shopify Plus Migration",
      description:
        "Replatform BigCommerce stores to Shopify with data migration, storefront rebuilding, integrations and launch support.",
      image:
        "/assets/shopify-migration/services/bigcommerce-to-shopify-migration.svg",
      imageAlt: "bigcommerce-to-shopify-img",
      href: "/bigcommerce-to-shopify-migration",
      ctaLabel: "Explore migration",
    },
    {
      title: "Salesforce Commerce Cloud to Shopify Migration",
      description:
        "Plan an enterprise migration from Salesforce Commerce Cloud with careful architecture, integration and data mapping.",
      image:
        "/assets/shopify-migration/services/salesforce-to-shopify-migration.svg",
      imageAlt: "salesforce-to-shopify-img",
      href: "/salesforce-to-shopify-migration",
      ctaLabel: "Explore migration",
    },
    {
      title: "PrestaShop to Shopify Migration",
      description:
        "Move catalog and customer data, replace modules and rebuild the storefront around Shopify's platform structure.",
      image:
        "/assets/shopify-migration/services/prestashop-to-shopify-migration.svg",
      imageAlt: "prestashop-to-shopify-img",
      href: "/prestashop-to-shopify-migration",
      ctaLabel: "Explore migration",
    },
    {
      title: "Custom / Legacy Platform to Shopify Plus",
      description:
        "Migrate your custom or legacy eCommerce platform to Shopify Plus with minimal disruption and a carefully planned data transfer.",
      image:
        "/assets/shopify-migration/services/custom-to-shopify-migration.svg",
      imageAlt: "Custom to Shopify Migration",
      href: "/contact-us",
      ctaLabel: "Explore migration",
    },
  ] satisfies readonly MigrationServiceCard[],
};

export const plusAgencyScopeContent = {
  eyebrow: "What We Migrate",
  heading: "Move the store, the business logic and the customer journey",
  description:
    "A Shopify Plus migration is more than copying products. We identify what can be transferred, what needs to be rebuilt and what should be improved instead of carried forward unchanged.",
  variant: "white" as const,
  items: [
    {
      number: "01",
      title: "Products & Collections",
      description:
        "Products, variants, collections, images, inventory references, metafields and catalogue relationships.",
    },
    {
      number: "02",
      title: "Customers & Orders",
      description:
        "Customer records, historical orders and other supported account data needed for business continuity.",
    },
    {
      number: "03",
      title: "Pages & Content",
      description:
        "Pages, blogs, navigation, files, product content and important editorial or merchandising content.",
    },
    {
      number: "04",
      title: "Storefront Design",
      description:
        "Retain, refine or redesign the storefront and rebuild approved templates as a Shopify Plus experience.",
    },
    {
      number: "05",
      title: "Apps & Retention Tools",
      description:
        "Subscriptions, reviews, loyalty, search, returns, service, email/SMS and other critical app workflows.",
    },
    {
      number: "06",
      title: "Custom Functionality",
      description:
        "Assess existing features and recreate required logic with native Plus features, apps or custom development.",
    },
    {
      number: "07",
      title: "Enterprise Integrations",
      description:
        "ERP, PIM, CRM, OMS, WMS, 3PL, payments, tax, marketplaces and custom APIs.",
    },
    {
      number: "08",
      title: "SEO & Redirects",
      description:
        "URL mapping, 301 redirects, metadata, internal links, canonicals and post-launch crawl validation.",
    },
  ] satisfies readonly NumberedGridItem[],
};

export const plusAgencySeoSafeContent: SeoSafeMigrationContent = {
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
  ],
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
  ],
  checks: [
    "Preserve useful content",
    "Validate redirects",
    "Check canonical signals",
    "Post-launch crawl",
  ],
};

export const plusAgencyProcessContent: EvaluationFrameworkContent = {
  eyebrow: "Our Migration Process",
  heading: "From discovery to Shopify Plus launch in a controlled sequence",
  description:
    "The level of detail changes with store complexity, but the migration should always be planned, tested and validated before the current store is replaced.",
  items: [
    {
      title: "Audit & discovery",
      description:
        "Store, data, URLs, apps, integrations, analytics and custom workflows.",
    },
    {
      title: "Plan & architecture",
      description:
        "Data mapping, Plus features, apps, custom development and migration rules.",
    },
    {
      title: "Design & development",
      description:
        "Retain, refine or redesign the storefront and build approved templates.",
    },
    {
      title: "Migration & integrations",
      description:
        "Data transfer, validation, APIs, apps and custom functionality.",
    },
    {
      title: "QA & SEO validation",
      description:
        "Storefront, checkout, devices, redirects, analytics and business workflows.",
    },
    {
      title: "Launch & support",
      description:
        "Cutover, final data, go-live checks, monitoring and post-launch improvements.",
    },
  ],
};

export const plusAgencyWhyChooseContent: WhyChooseMigrationContent = {
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
        "Credential-led Shopify development capability for projects that need deeper Liquid, storefront, B2B and platform knowledge.",
    },
    {
      icon: "team",
      title: "Cross-Functional Team",
      description:
        "Design, Shopify, QA, mobile and full-stack resources can support migration requirements beyond theme code.",
    },
    {
      icon: "support",
      title: "Ongoing Shopify Support",
      description:
        "Continue after launch with new features, CRO, integrations, maintenance, performance work and recurring development.",
    },
  ],
  partnerHeading: "20+ Years of Ecommerce Delivery",
  partnerDescription:
    "Dynamic Dreamz combines long-term web and ecommerce experience with a broader 150+ expert in-house team and more than 5,000 delivered projects.",
  partnerLogo: "/assets/proof/shopify-platinum-partner.svg",
  partnerLogoAlt: "Dynamic Dreamz - Shopify Platinum Partner",
  logoHref:
    "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
  stats: [
    {
      value: "20+",
      label: "Years of Experience",
    },
    {
      value: "150+",
      label: "Experts",
    },
    {
      value: "5k+",
      label: "projects delivered",
    },
    {
      value: "2.5k+",
      label: "Verified 5 star Reviews",
    },
  ],
  partnerLink: {
    label: "About Dynamic Dreamz",
    href: "/about-us",
  },
};

export const plusAgencyPricingContent: PricingEngagementContent = {
  eyebrow: "Engagement & Pricing",
  heading:
    "Choose the engagement model around the migration and what comes after it",
  description:
    "Shopify Plus migrations are normally quoted as a project after discovery. Flexible support and dedicated capacity are available for post-launch or ongoing roadmap work.",
  items: [
    {
      label: "Project-Based",
      badge: "Have One Project?",
      price: "Custom Quote",
      description:
        "For complete Shopify Plus builds, migrations, redesigns, B2B requirements, custom apps, integrations and technically complex ecommerce projects.",
      ctaLabel: "Send Brief — Get a Quote in 24 Hours",
      ctaHref: "/request-quote",
    },
    {
      label: "Flexible Hourly Support",
      badge: "Need Extra Shopify Capacity?",
      price: "$25/hour",
      description:
        "For ongoing maintenance, enhancements, troubleshooting, performance improvements and changing Shopify Plus development requirements.",
      ctaLabel: "Buy Shopify Development Hours",
      ctaHref: "/buy-shopify-development-hours",
    },
    {
      label: "Dedicated Developer / Team",
      badge: "Need Ongoing Capacity?",
      price: "From $2,000/month",
      description:
        "For brands with a steady Shopify roadmap, multiple storefronts or a need for a dedicated developer or wider delivery team.",
      ctaLabel: "Discuss a Dedicated Team",
      ctaHref: "/book-a-discovery-call",
    },
  ],
};

export const plusAgencyTestimonials = {
  eyebrow: "Client Stories",
  heading: "Don't Just Take Our Word For It",
  description:
    "Hear directly from the clients who have worked with Dynamic Dreamz across Shopify, ecommerce and long-term development engagements.",
  items: shopifyPlusAgencyTestimonials.items,
};

export const plusAgencyCaseStudies = {
  eyebrow: "CASE STUDIES",
  heading:
    "Migration experience with custom functionality behind the storefront",
  description:
    "Selected projects showing how replatforming can involve more than moving catalogue data.",
  items: [
    {
      title:
        "Adobe Commerce to Shopify Migration: Zero Data-Loss Replatform for First Aid Distributions",
      href: "/case-studies/first-aid-distributions-migration",
      image:
        "/assets/case-studies/first-aid-distributions-migration.webp",
      imageAlt:
        "Adobe Commerce to Shopify Migration: Zero Data-Loss Replatform for First Aid Distributions",
      technology: "Shopify Migration",
      industry: "Health & Nutrition",
      description:
        "See how Dynamic Dreamz migrated First Aid Distributions from Adobe Commerce to Shopify while preserving key ecommerce data and functionality.",
      tags: ["Data Migration", "Third-Party API Integration"],
    },
    {
      title:
        "Daniel Walters Eyewear: BigCommerce to Shopify Migration & Custom Dawn Theme Redesign",
      href: "/case-studies/daniel-walters",
      image: "/assets/case-studies/daniel-walters.webp",
      imageAlt:
        "Daniel Walters Eyewear: BigCommerce to Shopify Migration & Custom Dawn Theme Redesign",
      technology: "Shopify Migration",
      industry: "Jewellery & Accessories",
      description:
        "See how Dynamic Dreamz migrated Daniel Walters Eyewear from BigCommerce to Shopify and rebuilt the storefront on Dawn.",
      tags: ["Eyewear", "Jewellery & Accessories"],
    },
    {
      title:
        "Sleepycat: WooCommerce to Shopify Plus Migration with Custom Bundle Builder, SKU-Splitting & WhatsApp Automation",
      href: "/case-studies/sleepycat",
      image: "/assets/case-studies/sleepycat.webp",
      imageAlt:
        "Sleepycat: WooCommerce to Shopify Plus Migration with Custom Bundle Builder, SKU-Splitting & WhatsApp Automation",
      technology: "Shopify Migration",
      industry: "Home & Living",
      description:
        "See how Dynamic Dreamz migrated SleepyCat from WooCommerce to Shopify Plus with custom bundles, SKU splitting and WhatsApp workflows.",
      tags: ["Mattress & Sleep", "WooCommerce to Shopify"],
    },
  ] satisfies readonly CaseStudyPreviewItem[],
};

export const plusAgencyFaqsContent = {
  eyebrow: "Shopify Plus Migration FAQs",
  heading: "What businesses ask before moving to Shopify Plus",
  description:
    "Clear answers about migration scope, SEO, custom functionality, apps and pricing.",
  items: [
    {
      question: "What can Dynamic Dreamz migrate to Shopify Plus?",
      answer:
        "We can migrate products, variants, collections, customers, historical orders, pages, blogs, navigation, files, metadata and other supported business data. We also rebuild the storefront, custom functionality, app workflows, integrations, redirects and launch setup rather than treating the project as a simple data import.",
    },
    {
      question: "Which platforms can you migrate to Shopify Plus from?",
      answer:
        "We support Shopify Plus migrations from Magento or Adobe Commerce, WooCommerce, BigCommerce, Salesforce Commerce Cloud, PrestaShop, custom ecommerce platforms and other legacy systems. The migration approach depends on the source data model, integrations and business logic.",
    },
    {
      question: "Will our existing custom functionality be retained?",
      answer:
        "Yes. We review the current custom functionality before development and retain the required business logic in the new Shopify Plus setup. Depending on the requirement, this may use native Shopify Plus features, apps, Shopify Functions, checkout extensions, a custom app or full-stack development.",
    },
    {
      question: "Will migrating to Shopify Plus affect SEO?",
      answer:
        "A migration can affect organic visibility if URLs and technical signals change without a plan. We create a URL inventory, map 301 redirects, retain important metadata and content, review canonicals and internal links, validate indexing directives and monitor crawl issues after launch.",
    },
    {
      question: "Can subscriptions, reviews, loyalty and app data be migrated?",
      answer:
        "Often yes, but the method depends on the existing provider, payment gateway, API access and data portability. We audit each business-critical app and decide whether to migrate its data, reconnect it, replace it or rebuild the required workflow.",
    },
    {
      question: "How much does a Shopify Plus migration cost?",
      answer:
        "The cost depends on catalogue size, data complexity, storefront design, custom functionality, integrations, SEO requirements and launch support. Dynamic Dreamz provides project-based custom quotes, flexible Shopify development from $25 per hour and dedicated developer or team engagements from $2,000 per month.",
    },
  ] satisfies readonly FaqAccordionItem[],
};
