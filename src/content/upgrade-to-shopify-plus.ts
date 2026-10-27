import { proofLogos } from "@/content/home";
import type { AiEmpoweredDeliveryContent } from "@/components/sections/ai-empowered-delivery-section";
import type { WhyChooseMigrationContent } from "@/components/sections/why-choose-shopify-migration-section";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

export const upgradeShopifyPlusHero = {
  eyebrows: ["Established in 2006", "Shopify Platinum Partner"] as const,
  title: "Upgrade to Shopify Plus with Confidence",
  titleAccent: "with Confidence",
  paragraphs: [
    "Already running on Shopify and considering Plus? Dynamic Dreamz helps you assess whether the upgrade makes sense, then implements the Plus capabilities your business actually needs—from checkout and B2B to integrations, expansion stores and ongoing development.",
  ],
  cta: "EXPLORE SHOPIFY PLUS",
  ctaHref: "/request-quote",
  secondaryCta: {
    label: "IS PLUS RIGHT FOR YOU?",
    href: "#plus-fit",
  },
  video: "/assets/home/why-dynamic-dreamz.mp4",
  badges: proofLogos.map((badge) => ({
    label: badge.alt,
    icon: badge.src,
    alt: badge.alt,
    href: badge.href,
    width: badge.width,
    height: badge.height,
  })),
} as const;

import { globalBrandLogos } from "@/content/brands";

export const upgradeShopifyPlusBrands = {
  heading: "Trusted by Leading Brands",
  description:
    "Selected brands our teams have supported across Shopify, Shopify Plus and digital commerce.",
  items: globalBrandLogos,
} as const;

export const upgradeShopifyPlusKeepWhatWorks: AiEmpoweredDeliveryContent = {
  eyebrow: "Already on Shopify?",
  heading: "Keep what works. Upgrade the capabilities that matter.",
  description:
    "Your existing Shopify storefront does not need to be rebuilt just because you move to Plus. We review what is already working, identify where Plus creates real customer or operational value, and implement the capabilities your business actually needs.",
  cta: {
    label: "Discuss Your Plus Upgrade",
    href: "/request-quote",
  },
  tools: [
    {
      name: "Keep Your Store",
      description: "Your existing Shopify storefront can remain in place.",
    },
    {
      name: "Keep Your Data",
      description: "Products, customers and orders stay in Shopify.",
    },
    {
      name: "Keep Your URLs",
      description: "No forced URL migration simply because you upgrade.",
    },
    {
      name: "Add Plus Capability",
      description: "Activate and build the features that justify the plan.",
    },
  ],
};

export const upgradeShopifyPlusWhenPlusMakesSense = {
  eyebrow: "When Shopify Plus Makes Sense",
  heading:
    "Upgrade because the business needs it—not because you crossed a random revenue number.",
  description:
    "Shopify Plus should solve a real commercial or operational constraint. These are the situations where we most often see a clear reason to evaluate the upgrade.",
  boxes: [
    {
      title: "More Checkout Control",
      description:
        "You need supported checkout extensions, branding, validation, content or other advanced checkout experiences.",
    },
    {
      title: "Advanced B2B Requirements",
      description:
        "You need Plus-level B2B controls such as unlimited catalogs, direct company catalog assignment, deposits or partial payments.",
    },
    {
      title: "Multiple Storefronts",
      description:
        "You need eligible expansion stores for international, B2B, employee or other approved multi-store use cases.",
    },
    {
      title: "Complex Integrations",
      description:
        "Your ERP, PIM, OMS, WMS or custom middleware needs higher platform and API capacity.",
    },
    {
      title: "High-Demand Events",
      description:
        "Product drops and flash sales need stronger event tooling, automation and bot protection.",
    },
    {
      title: "Enterprise Operations",
      description:
        "Priority support, organization management, staff controls and staging matter more as your operation grows.",
    },
  ],
};

export const upgradeShopifyPlusAdvantage = {
  eyebrow: "Why Upgrade to Shopify Plus?",
  heading: "Use Plus where it creates a meaningful advantage.",
  description:
    "The value is not in the Plus label itself. It comes from using the right capabilities to simplify operations, improve buying journeys and support the next stage of growth.",
  steps: [
    {
      step: "01",
      title: "Stronger Checkout UX",
      description:
        "Extend checkout and customer-account experiences around requirements standard Shopify does not cover.",
    },
    {
      step: "02",
      title: "More Flexible B2B",
      description:
        "Support more complex catalogs, company pricing and advanced wholesale payment workflows.",
    },
    {
      step: "03",
      title: "Multi-Store Control",
      description:
        "Manage eligible regional, B2B or specialized storefronts within a Plus organization.",
    },
    {
      step: "04",
      title: "Integration Headroom",
      description:
        "Give larger ERP, PIM, OMS and custom integration environments more room to operate.",
    },
  ],
};

export const upgradeShopifyPlusWhatWeImplement = {
  eyebrow: "Our Shopify Plus Upgrade Services",
  heading: "What Dynamic Dreamz can implement after the decision to upgrade.",
  description:
    "We can keep the scope focused on one Plus capability or handle a broader program covering checkout, B2B, integrations, international stores and ongoing development.",
  boxes: [
    {
      title: "Plus Readiness Assessment",
      description:
        "Review current constraints, apps, checkout, B2B, integrations and operating needs before recommending Plus.",
    },
    {
      title: "Checkout & Account Extensibility",
      description:
        "Design and build supported checkout, thank-you, order-status and customer-account extensions.",
    },
    {
      title: "Advanced B2B Implementation",
      description:
        "Companies, catalogs, pricing, quantity rules, deposits, payment workflows and connected wholesale experiences.",
    },
    {
      title: "Expansion Stores & Markets",
      description:
        "Plan eligible international, B2B or specialized storefronts and the operations that sit behind them.",
    },
    {
      title: "Apps, APIs & Integrations",
      description:
        "ERP, PIM, CRM, OMS, WMS, 3PL, custom apps, middleware and Shopify Functions where required.",
    },
    {
      title: "Ongoing Plus Development",
      description:
        "Continue with performance, CRO, new features, integration work and long-term Shopify Plus development.",
    },
  ],
};

// Backward-compatible alias for schema generation
export const upgradeShopifyPlusExclusiveTools = {
  cards: upgradeShopifyPlusWhatWeImplement.boxes,
};

export const upgradeShopifyPlusTurnCapabilities: AiEmpoweredDeliveryContent = {
  eyebrow: "Beyond the Plan Upgrade",
  heading: "Turn Plus capabilities into practical workflows.",
  description:
    "Paying for Shopify Plus only creates value when the capabilities are built and adopted properly. We translate native Plus features into working commercial and operational setups.",
  tools: [
    {
      name: "Checkout",
      description: "Extensions, validation & UX",
    },
    {
      name: "B2B",
      description: "Companies, catalogs & payments",
    },
    {
      name: "Expansion Stores",
      description: "International & specialized stores",
    },
    {
      name: "Integrations",
      description: "ERP, PIM, OMS & custom APIs",
    },
  ],
};

export const upgradeShopifyPlusWhyWorkWithUs: WhyChooseMigrationContent = {
  eyebrow: "Why Dynamic Dreamz",
  heading: "Why work with us on a Shopify Plus upgrade?",
  description:
    "If standard Shopify already covers what you need, we would rather improve the current setup than push an unnecessary Plus upgrade.",
  items: [
    {
      icon: "shopify-bag",
      description:
        "If standard Shopify already covers what you need, we would rather improve the current setup than push an unnecessary Plus upgrade.",
    },
    {
      icon: "certified",
      description:
        "More than 20 developers hold verified Shopify credentials across development fundamentals, storefronts and B2B.",
    },
    {
      icon: "long-term-support",
      description:
        "Continue with new Plus functionality, CRO, performance, integrations and ongoing Shopify development.",
    },
  ],
  partnerLogo:
    "/assets/proof/shopify-platinum-partner.svg",
  partnerLogoAlt: "Dynamic Dreamz - Shopify Platinum Partner",
  logoHref: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
  partnerHeading: "20+ Years of Ecommerce Delivery",
  partnerDescription:
    "Dynamic Dreamz combines long-term web and ecommerce experience with a broader 150+ expert in-house team and more than 5,000 delivered projects.",
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

export const upgradeShopifyPlusCaseStudies = {
  eyebrow: "CASE STUDIES",
  heading: "Selected work where Shopify supports more complex commerce.",
  description:
    "These projects show the kind of storefront, custom functionality and operational work our team delivers around Shopify and Shopify Plus. They are not presented as “upgrade” case studies unless that was the actual project scope.",
  items: [
    {
      title:
        "RENÉE Cosmetics: End-to-End Figma-to-Shopify Dawn Theme Store for a Bold Beauty Brand",
      href: "/case-studies/renee-cosmetics",
      image: "/assets/our-work/projects/renee.webp",
      imageAlt: "RENÉE Cosmetics Case Study",
      technology: "Shopify / Shopify Plus",
      industry: "Beauty & Cosmetics",
    },
    {
      title:
        "Ranavat: 6+ Year Shopify Partnership for a Luxury Ayurvedic Skincare & Haircare Brand",
      href: "/case-studies/ranavat",
      image: "/assets/beauty-cosmetics/portfolio/ranavat-skincare.webp",
      imageAlt: "Ranavat Case Study",
      technology: "Shopify / Shopify Plus",
      industry: "Beauty & Cosmetics",
    },
    {
      title:
        "Sleepycat: WooCommerce to Shopify Plus Migration with Custom Bundle Builder, SKU-Splitting & WhatsApp Automation",
      href: "/case-studies/sleepycat",
      image: "/assets/case-studies/sleepycat/hero.webp",
      imageAlt: "Sleepycat Case Study",
      technology: "Shopify Migration",
      industry: "Home & Living",
    },
  ],
};

export const upgradeShopifyPlusPortfolio = {
  eyebrow: "Portfolio",
  heading: "Selected Shopify Experience",
  description:
    "Explore selected projects across Shopify, WordPress, mobile apps and custom development. See how we help brands and agencies build high-performing digital experiences.",
  items: [
    {
      name: "Ranavat",
      category: "Shopify / Shopify Plus",
      href: "https://www.ranavat.com/",
      image: "/assets/beauty-cosmetics/portfolio/ranavat-skincare.webp",
      imageAlt: "Ranavat Shopify Plus Storefront built by Dynamic Dreamz",
    },
    {
      name: "Atolea Jewelry",
      category: "Shopify / Shopify Plus",
      href: "https://atoleajewelry.com/",
      image: "/assets/our-work/projects/atolea-jewelry.webp",
      imageAlt: "Atolea Jewelry Waterproof Shopify Storefront by Dynamic Dreamz",
    },
    {
      name: "Naakbar",
      category: "Shopify / Shopify Plus",
      href: "https://www.naak.com/",
      image: "/assets/health-nutrition/portfolio/naakbar-energy-products.webp",
      imageAlt: "Naak Energy Bars Shopify Storefront by Dynamic Dreamz",
    },
    {
      name: "Tropicfeel",
      category: "Shopify / Shopify Plus",
      href: "https://shop.tropicfeel.com/",
      image: "/assets/fashion/portfolio/tropicfeel-fashion.webp",
      imageAlt: "Tropicfeel Sustainable Travel Gear Shopify Storefront by Dynamic Dreamz",
    },
  ],
};

export const upgradeShopifyPlusPricing = {
  eyebrow: "Flexible Shopify Engagements",
  heading: "Choose the right way to work with our Shopify Plus team.",
  description:
    "For a defined Plus upgrade or implementation, we scope the project after discovery. If your roadmap continues after launch, you can move into flexible hourly support or dedicated development capacity.",
  items: [
    {
      label: "Project-Based",
      badge: "Defined Scope",
      price: "Custom Quote",
      description:
        "For a defined scope covering readiness assessment, checkout, B2B, integrations, expansion stores, custom development, QA or rollout.",
      ctaLabel: "Send Brief — Get a Quote in 24 Hours",
      ctaHref: "/request-quote",
    },
    {
      label: "Flexible Shopify Support",
      badge: "Shopify Plus Development",
      price: "From $25/hour",
      description:
        "For checkout changes, B2B, integrations, app work, troubleshooting, CRO and ongoing Shopify Plus improvements.",
      ctaLabel: "Buy Shopify Development Hours",
      ctaHref: "/buy-shopify-development-hours",
    },
    {
      label: "Dedicated Capacity",
      badge: "Ongoing Shopify Plus Roadmap",
      price: "From $2,000/month",
      description:
        "For brands or agencies that need consistent Shopify Plus development capacity and long-term team continuity.",
      ctaLabel: "Discuss a Dedicated Team",
      ctaHref: "/book-a-discovery-call",
    },
  ],
};

export const upgradeShopifyPlusFaqCopy = {
  eyebrow: "Shopify Plus Upgrade FAQ",
  heading: "Questions growing Shopify brands ask before moving to Plus.",
} as const;

export const upgradeShopifyPlusFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What changes when I upgrade from Shopify to Shopify Plus?",
    answer:
      "Your existing Shopify store can stay in place. Products, customers, theme, content and URLs do not need to be migrated simply because you move to Plus. The main work is deciding which Plus capabilities you need and implementing them correctly.",
  },
  {
    question: "When should a business consider Shopify Plus?",
    answer:
      "Shopify Plus is worth evaluating when your current setup is constrained by checkout requirements, advanced B2B needs, multi-store operations, high-volume integrations, flash-sale workflows or enterprise-level platform management. We assess those requirements before recommending an upgrade.",
  },
  {
    question: "Do I need to redesign my store when upgrading to Shopify Plus?",
    answer:
      "No. A redesign is optional. If your current storefront is performing well, we can keep it and focus on the Plus capabilities that matter. If the upgrade is part of a broader growth project, we can also redesign or rebuild selected storefront experiences.",
  },
  {
    question: "Can Dynamic Dreamz customize Shopify Plus checkout?",
    answer:
      "Yes. We can design and implement supported checkout extensions, validation, content blocks, upsell experiences and other checkout customizations within Shopify’s current extensibility model.",
  },
  {
    question: "Can Shopify Plus support our B2B or wholesale business?",
    answer:
      "Yes. Shopify Plus adds advanced B2B capabilities such as unlimited catalogs, direct company catalog assignment, deposit requirements, partial payments and payment requests per fulfillment. We can configure these capabilities and connect B2B workflows to your ERP, CRM or other systems.",
  },
  {
    question: "Can you connect Shopify Plus with our ERP, PIM, CRM or OMS?",
    answer:
      "Yes. We build and maintain API and middleware integrations connecting Shopify Plus with ERP, PIM, CRM, OMS, WMS, 3PL and other business systems. The architecture depends on your data flows, operational requirements and existing platforms.",
  },
  {
    question: "How much does Shopify Plus cost?",
    answer:
      "As of September 2026, Shopify lists Shopify Plus starting at USD $2,500 per month on a one-year term or USD $2,300 per month on a three-year term, with variable platform fees for some more complex business structures. Shopify pricing can change, so the current fee should be confirmed directly with Shopify.",
  },
  {
    question: "Do you provide support after the Shopify Plus upgrade?",
    answer:
      "Yes. We can continue with checkout work, B2B, integrations, custom development, performance, CRO, new features and ongoing Shopify Plus support after the initial upgrade is complete.",
  },
];
