import type { CaseStudyPreviewItem } from "@/components/sections/services-case-studies-section";
import type { EvaluationFrameworkContent } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import type { IndustriesServedContent } from "@/components/sections/shopify-plus-agency/industries-served-section";
import type { ShopifyHorizontalProcessContent } from "@/components/sections/shopify-horizontal-process-section";
import type { ShopifyMobileAppExperienceContent } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-experience-section";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

export const shopifyB2bHero = {
  eyebrow: "Shopify Platinum Partner • Shopify B2B",
  eyebrowSpans: ["Shopify Platinum Partner", "Shopify B2B"] as const,
  title: "Shopify B2B & Wholesale Development for Complex Buying Workflows",
  paragraphs: [
    "Dynamic Dreamz helps manufacturers, wholesalers, distributors and established brands plan, build and improve B2B commerce on Shopify. We work across native Shopify B2B, Shopify Plus, custom storefronts, our SmartB2B public app, custom Shopify apps and ERP/CRM/PIM integrations.",
  ],
  cta: "Discuss Your B2B Project",
  ctaHref: "/request-quote",
  secondaryCta: {
    label: "Explore B2B Services",
    href: "#shopping_eperience",
  },
  video: "/assets/home/why-dynamic-dreamz.mp4",
  badges: [
    {
      label: "Shopify Platinum Partner",
      icon: "/assets/proof/shopify-platinum-partner.svg",
      alt: "Dynamic Dreamz - Shopify Platinum Partner",
      href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
      width: 136,
      height: 44,
    },
    {
      label: "Clutch 130+ Reviews",
      icon: "/assets/proof/clutch-rating.svg",
      alt: "Dynamic Dreamz on Clutch — 4.9 rating",
      href: "https://clutch.co/profile/dynamic-dreamz",
      width: 111,
      height: 44,
    },
    {
      label: "Trustpilot 4.9",
      icon: "/assets/proof/trustpilot-rating.svg",
      alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
      href: "https://www.trustpilot.com/review/dynamicdreamz.com",
      width: 148,
      height: 50,
    },
    {
      label: "Upwork Top Rated Plus",
      icon: "/assets/proof/upwork-top-rated-plus.svg",
      alt: "Dynamic Dreamz — Upwork Top Rated Plus",
      href: "https://www.upwork.com/ag/dynamicdreamz/",
      width: 126,
      height: 54,
    },
  ],
} as const;

export const shopifyB2bBrands = {
  slug: "shopify-b2b",
  heading: ["Trusted by", "Leading Brands"] as const,
  ariaLabel: "Trusted by Leading Brands",
} as const;

export const shopifyB2bBehind: EvaluationFrameworkContent = {
  eyebrow: "Behind Shopify B2B",
  heading: "B2B commerce needs more than a wholesale price list.",
  description:
    "Business buyers expect self-service purchasing, account-specific experiences and fast repeat ordering. Your team needs those buyer workflows to stay connected to pricing, inventory, fulfilment and finance.",
  items: [
    {
      title: "Complex Pricing",
      description:
        "Different buyer tiers, custom price lists, volume discounts, customer-specific catalogs and negotiated terms require structured pricing logic rather than manual overrides.",
    },
    {
      title: "Manual Ordering",
      description:
        "Phone, email and spreadsheet orders create administrative drag, slow down fulfillment and prevent business customers from ordering when they need to.",
    },
    {
      title: "Disconnected Systems",
      description:
        "When Shopify doesn't talk cleanly to your ERP, CRM, inventory or accounting systems, order processing slows down and data gets out of sync.",
    },
    {
      title: "Buyer-Specific Workflows",
      description:
        "Business buyers need company accounts, multiple purchasing locations, order approvals, purchase orders, saved carts and payment terms like Net 30 or Net 60.",
    },
  ],
};

export const shopifyB2bServices: ShopifyMobileAppExperienceContent = {
  eyebrow: "Our Shopify B2B Services",
  heading: "Implementation, customization, integration and ongoing B2B development.",
  description:
    "We start with the commercial workflow, then decide whether native Shopify B2B, Shopify Plus, SmartB2B, selected apps or custom development is the right solution.",
  moments: [
    {
      step: "01 · B2B Strategy & Implementation",
      title: "Plan the right B2B architecture",
      description:
        "Map the buyers, catalogs, pricing, payment terms, D2C overlap and operations before choosing the Shopify plan and implementation model.",
    },
    {
      step: "02 · Storefront Development",
      title: "Build a self-service experience for business buyers",
      description:
        "Customize Shopify themes and customer accounts around repeat purchasing, technical product information and wholesale workflows.",
    },
    {
      step: "03 · Catalogs & Pricing",
      title: "Show the right assortment and price to each buyer",
      description:
        "Configure catalogs, company-level pricing where supported, volume pricing, quantity rules and product availability.",
    },
    {
      step: "04 · Ordering & Payments",
      title: "Reduce friction for high-frequency B2B orders",
      description:
        "Support quick ordering, repeat ordering, payment terms, credit workflows and custom validations around business purchasing.",
    },
    {
      step: "05 · Systems Integration",
      title: "Connect the storefront to your operational stack",
      description:
        "Build custom APIs and middleware connections between Shopify and your ERP, CRM, PIM, WMS or accounting software.",
    },
    {
      step: "06 · Custom B2B Development",
      title: "Extend Shopify where standard workflows stop",
      description:
        "Develop custom Shopify apps, Shopify Functions, buyer portals, quote-request journeys and specialized logic for your business.",
    },
    {
      step: "07 · B2B Migration",
      title: "Move wholesale operations to Shopify without losing business logic",
      description:
        "Migrate buyer accounts, historical data, price lists, volume tiers and integrations from legacy platforms cleanly.",
    },
    {
      step: "08 · Optimization & Support",
      title: "Improve B2B adoption after launch",
      description:
        "Track order completion, buyer onboarding and checkout drop-off, with dedicated developer support for continuous improvement.",
    },
    {
      step: "09 · Shopify Plus B2B",
      title: "Enterprise B2B for more complex requirements",
      description:
        "Deploy company locations, direct catalogs, custom checkout rules and advanced B2B capabilities with Shopify Plus.",
    },
  ],
};

export const shopifyB2bApproach = {
  eyebrow: "Shopify B2B & Shopify Plus",
  heading: "Shopify B2B for growing businesses. Shopify Plus for advanced B2B operations.",
  description:
    "Shopify now supports B2B across Basic, Grow, Advanced and Plus. For larger or more complex B2B operations, Shopify Plus provides the strongest level of catalog flexibility, payment control and enterprise capability within Shopify.",
  approaches: [
    {
      badge: "Basic · Grow · Advanced",
      title: "Native Shopify B2B",
      description:
        "A strong foundation for businesses that need company accounts, B2B catalogs, wholesale pricing, quantity rules, payment terms and self-service ordering within Shopify.",
      points: [
        "Companies and company locations",
        "B2B catalogs and buyer-specific pricing",
        "Quantity rules and volume pricing",
        "Net payment terms and self-service ordering",
        "Advanced adds more contextual storefront flexibility through Markets",
      ],
      isHighlighted: true,
    },
    {
      badge: "Advanced & Enterprise B2B",
      title: "Shopify Plus",
      description:
        "Shopify Plus is the strongest fit for brands, manufacturers and distributors with more complex B2B catalogs, payment requirements, company structures, integrations and long-term scale.",
      points: [
        "Unlimited B2B market catalogs",
        "Direct catalogs for specific companies and locations",
        "Deposit and partial-payment capabilities",
        "Payment requests per fulfilment",
        "Greater flexibility for complex B2B operations and enterprise integrations",
      ],
      isHighlighted: false,
    },
  ],
  proofs: [
    {
      title: "Shopify Plus B2B",
      description: "For complex catalogs, payments and enterprise workflows",
    },
    {
      title: "Custom Integrations",
      description: "ERP, CRM, PIM, WMS and business systems",
    },
    {
      title: "Custom Shopify Apps",
      description: "Extend B2B workflows beyond standard functionality",
    },
    {
      title: "Ongoing B2B Development",
      description: "Optimization, new features and long-term support",
    },
  ],
} as const;

export const shopifyB2bSmartB2b = {
  eyebrow: "Public Shopify App · Developed by Dynamic Dreamz",
  heading: "SmartB2B turns Shopify into a self-service wholesale portal.",
  paragraphs: [
    "SmartB2B is our public Shopify app for merchants who want to move wholesale buyer management away from spreadsheets, email and manual order handling. Buyers can register, get approved, access their portal, place quick or repeat orders and manage their own B2B activity.",
    "For the merchant team, SmartB2B brings buyer approval, company management, credit controls, B2B reporting and ordering workflows into one Shopify-based system. If your requirements go beyond the app, Dynamic Dreamz can extend the solution with custom integrations or custom Shopify development.",
  ],
  features: [
    "Custom B2B signup form",
    "One-click buyer approval",
    "Self-service buyer portal",
    "Quick & repeat ordering",
    "Buyer team & locations",
    "Credit limits & usage",
    "Wishlists",
    "B2B sales analytics",
  ],
  buttons: [
    {
      label: "View SmartB2B on Shopify",
      href: "https://apps.shopify.com/smartb2b",
      ariaLabel: "View SmartB2B on Shopify",
    },
    {
      label: "Explore B2B Services",
      href: "https://www.dreamzapps.com/services/smart-b2b/",
      ariaLabel: "Explore B2B Services",
    },
  ],
  meta: [
    "Free plan available",
    "5.0 Shopify App Store rating",
    "Support by Dynamic Dreamz",
    "Works with Checkout + Customer Accounts",
  ],
  image: {
    src: "/assets/shopify-b2b/smart-b2b-image.webp",
    alt: "Public Shopify App",
    width: 1360,
    height: 1480,
  },
} as const;

export const shopifyB2bIndustries: IndustriesServedContent = {
  eyebrow: "Industries that we have served",
  heading: "Shopify Plus Experience Across Leading Industries",
  description:
    "Dynamic Dreamz supports Shopify Plus and high-growth ecommerce brands across eight core industries where merchandising, customer experience, subscriptions, B2B, integrations and operational complexity can directly affect growth.",
  items: [
    {
      image: "/assets/shopify-plus-agency/industries/health-nutrition.webp",
      imageAlt: "Health and nutrition Shopify Plus storefront",
      title: "Health & Nutrition",
      eyebrow: "Shopify Plus Industry",
      description:
        "Shopify Plus experiences for supplement and wellness brands with trust-led UX, subscriptions, education and repeat-purchase journeys.",
      href: "/health-nutrition",
    },
    {
      image: "/assets/shopify-plus-agency/industries/fashion-apparel.webp",
      imageAlt: "Fashion and apparel Shopify Plus storefront",
      title: "Fashion & Apparel",
      eyebrow: "Shopify Plus Industry",
      description:
        "Premium commerce experiences with merchandising depth, variant complexity, product discovery and mobile-first shopping journeys.",
      href: "/fashion",
    },
    {
      image: "/assets/shopify-plus-agency/industries/beauty-cosmetics.webp",
      imageAlt: "Beauty and cosmetics Shopify Plus storefront",
      title: "Beauty & Cosmetics",
      eyebrow: "Shopify Plus Industry",
      description:
        "High-converting storefronts for beauty brands that need visual storytelling, product education, subscriptions and stronger merchandising.",
      href: "/beauty-cosmetics",
    },
    {
      image: "/assets/shopify-plus-agency/industries/food-beverages.webp",
      imageAlt: "Food and beverage Shopify Plus storefront",
      title: "Food & Beverage",
      eyebrow: "Shopify Plus Industry",
      description:
        "Commerce experiences supporting repeat purchase, subscriptions, bundles, promotions and streamlined ordering workflows.",
      href: "/food-beverages",
    },
    {
      image: "/assets/shopify-plus-agency/industries/sports-outdoors.png",
      imageAlt: "Sports and outdoors Shopify Plus storefront",
      title: "Sports & Outdoors",
      eyebrow: "Shopify Plus Industry",
      description:
        "Fast, mobile-led ecommerce experiences for active and outdoor brands with rich product discovery and global commerce requirements.",
      href: "/sports-outdoors",
    },
    {
      image: "/assets/shopify-plus-agency/industries/home-living.png",
      imageAlt: "Home and living Shopify Plus storefront",
      title: "Home & Living",
      eyebrow: "Shopify Plus Industry",
      description:
        "Shopify Plus solutions for home brands with large catalogs, configurable products, visual merchandising and complex product journeys.",
      href: "/home-living",
    },
    {
      image: "/assets/shopify-plus-agency/industries/jewellery-accessories.png",
      imageAlt: "Jewellery and accessories Shopify Plus storefront",
      title: "Jewellery & Accessories",
      eyebrow: "Shopify Plus Industry",
      description:
        "Premium product experiences for jewellery and accessory brands, including rich presentation and sophisticated customization requirements.",
      href: "/jewellery-accessories",
    },
    {
      image: "/assets/shopify-plus-agency/industries/pet-industry.webp",
      imageAlt: "Pet industry Shopify Plus storefront",
      title: "Pet Industry",
      eyebrow: "Shopify Plus Industry",
      description:
        "Conversion-focused Shopify stores with clearer category navigation, trust-building product content and strong repeat-purchase journeys.",
      href: "/pet-industry",
    },
  ],
};

export const shopifyB2bProcess: ShopifyHorizontalProcessContent = {
  eyebrow: "Our B2B Process",
  heading: "Map the workflow first. Build the commerce system second.",
  description:
    "Successful B2B projects depend on business rules, operational systems and buyer habits as much as the storefront design. We follow a structured delivery model to keep scope clear and risk low.",
  steps: [
    {
      number: "01",
      title: "Discovery & Buyer Journey",
      description:
        "We map out your customer tiers, catalogs, pricing models, payment terms, buyer roles, approval chains, and existing ERP, CRM, and order processes.",
    },
    {
      number: "02",
      title: "Shopify Architecture",
      description:
        "We determine the optimal setup: Native Shopify B2B, Shopify Plus, SmartB2B, blended vs. dedicated B2B store, custom apps, and required integrations.",
    },
    {
      number: "03",
      title: "Build & Integrate",
      description:
        "We design and develop the buyer-facing storefront, configure B2B catalogs and pricing, build custom workflows, and connect third-party business systems.",
    },
    {
      number: "04",
      title: "B2B QA",
      description:
        "We test company accounts, permissions, tier pricing, payment terms, checkout rules, draft orders, and ERP data sync across multiple test buyer profiles.",
    },
    {
      number: "05",
      title: "Launch & Optimize",
      description:
        "We migrate buyer data, deploy the store, train your internal team, and provide ongoing developer support to optimize B2B ordering.",
    },
  ],
};

export const shopifyB2bCaseStudies = {
  eyebrow: "Featured B2B Case Studies",
  heading: "Real B2B work across Shopify, Shopify Plus, wholesale pricing and technical buyer journeys.",
  description:
    "Selected case studies showing how we help B2B and wholesale brands build better purchasing workflows on Shopify.",
  items: [
    {
      technology: "Shopify / Shopify Plus",
      industry: "Manufacturing",
      title: "E2IP Technologies: B2B Shopify Trade Theme Store with Persistent ‘Buy Product’ Header",
      description:
        "See how Dynamic Dreamz created a B2B Shopify storefront for E2IP Technologies with a customized Trade theme and streamlined product purchasing.",
      tags: ["B2B Ecommerce", "Trade Theme Customization"],
      href: "/case-studies/e2ip-technologies",
      image: "/assets/case-studies/e2ip-technologies.webp",
      imageAlt: "E2IP Technologies: B2B Shopify Trade Theme Store with Persistent ‘Buy Product’ Header",
      ctaLabel: "View Case study",
    },
    {
      technology: "Shopify Custom Apps & Integrations",
      industry: "Health & Nutrition",
      title: "Essential Whitening: Custom Shopify 2.0 Store with B2B Pricing Tiers for Dental Professionals",
      description:
        "See how Dynamic Dreamz developed Essential Whitening's Shopify 2.0 store with B2B pricing tiers for dental professionals and custom buyer workflows.",
      tags: ["B2B Pricing Tiers", "Dental Industry"],
      href: "/case-studies/essential-whitening",
      image: "/assets/case-studies/essential-whitening.webp",
      imageAlt: "Essential Whitening: Custom Shopify 2.0 Store with B2B Pricing Tiers for Dental Professionals",
      ctaLabel: "View Case study",
    },
    {
      technology: "Shopify Custom Apps & Integrations",
      industry: "Home & Living",
      title: "Furnified: Shopify Plus B2B Commerce System with Custom ERP Middleware Integration",
      description:
        "See how Dynamic Dreamz developed a Shopify Plus B2B solution for Furnified with custom ERP middleware and connected commerce operations.",
      tags: ["B2B Ecommerce", "Furniture"],
      href: "/case-studies/furnified",
      image: "/assets/case-studies/furnified.webp",
      imageAlt: "Furnified: Shopify Plus B2B Commerce System with Custom ERP Middleware Integration",
      ctaLabel: "View Case study",
    },
  ] satisfies readonly CaseStudyPreviewItem[],
} as const;

export const shopifyB2bWhyChoose: ShopifyMobileAppExperienceContent = {
  eyebrow: "Why Dynamic Dreamz",
  heading: "One Shopify team across storefront, apps and integrations.",
  description:
    "B2B projects usually require more than design and liquid templating. We bring storefront design, custom Shopify app development, systems integration and ongoing technical support under one roof.",
  moments: [
    {
      step: "Shopify Platinum Partner",
      title: "Shopify-first delivery",
      description:
        "Deep technical knowledge of Shopify APIs, Functions, Plus features, Checkout Extensibility and the Shopify app ecosystem.",
    },
    {
      step: "Native + App + Custom",
      title: "No forced implementation model",
      description:
        "We recommend native B2B, Shopify Plus, SmartB2B, existing apps or custom development based on what genuinely fits your business.",
    },
    {
      step: "Full-Stack Capability",
      title: "Integrate beyond the storefront",
      description:
        "In-house developers build middleware and custom APIs to connect Shopify with your ERP, CRM, PIM, WMS or accounting software.",
    },
    {
      step: "20+ Years · 150+ Experts",
      title: "Long-term delivery capacity",
      description:
        "A 150+ person team capable of delivering initial builds, complex migrations and continuous development as B2B volume grows.",
    },
  ],
};

export const shopifyB2bFaqs: {
  eyebrow: string;
  heading: string;
  description: string;
  items: readonly FaqAccordionItem[];
} = {
  eyebrow: "Shopify B2B FAQ",
  heading: "Questions businesses ask before moving B2B to Shopify.",
  description:
    "Direct answers about plans, Shopify Plus, mixed D2C/B2B stores, integrations, SmartB2B and custom development.",
  items: [
    {
      question: "Is Shopify B2B available without Shopify Plus?",
      answer:
        "Yes. Shopify B2B is available on Basic, Grow, Advanced and Shopify Plus. Most core B2B capabilities — including companies, buyer-specific pricing, B2B catalogs, quantity rules and net payment terms — are supported across these plans. However, catalog flexibility and international market controls expand significantly as you move to Advanced and Shopify Plus.",
    },
    {
      question: "When should a B2B business use Shopify Plus?",
      answer:
        "Shopify Plus is a stronger fit when you need unlimited B2B market catalogs, direct catalog assignment to specific companies and locations, deposit and partial-payment capabilities, payment requests per fulfilment, more advanced checkout customizations, or greater flexibility for high-volume enterprise operations.",
    },
    {
      question: "Can we run B2B and D2C from the same Shopify store?",
      answer:
        "Yes. Shopify supports blended B2B and D2C commerce, or you can run a dedicated B2B store. We help determine whether a blended or separated approach is best based on your catalog structure, currency needs, brand positioning, customer experience and backend fulfillment.",
    },
    {
      question: "Can Dynamic Dreamz integrate Shopify B2B with our ERP, CRM, PIM or warehouse system?",
      answer:
        "Yes. We build API and middleware integrations for product data, company accounts, inventory, pricing, orders, payment terms and fulfillment. We have integrated Shopify with SAP, NetSuite, Microsoft Dynamics, Salesforce, Katana, Brightpearl and custom in-house systems.",
    },
    {
      question: "What is SmartB2B?",
      answer:
        "SmartB2B is a public Shopify app developed by Dynamic Dreamz. It adds B2B buyer onboarding and approval workflows, self-service buyer portals, quick order forms, repeat purchasing, team management, multiple buyer locations, credit limits and B2B sales analytics to Shopify.",
    },
    {
      question: "Can you build custom B2B features beyond Shopify's native functionality or SmartB2B?",
      answer:
        "Yes. We develop custom Shopify apps, Functions, buyer portals, ordering tools, pricing workflows, approval flows, custom quote builders and bespoke integrations for complex B2B business logic that standard tools cannot handle.",
    },
  ],
};
