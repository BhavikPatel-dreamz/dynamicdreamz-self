import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export const shopifyDevelopmentAgencyHero = {
  eyebrow: "Established in 2006 • Shopify Platinum Partner",
  eyebrowSpans: ["Established in 2006", "Shopify Platinum Partner"] as const,
  title: "Shopify Development Agency",
  subtitle: "Custom Shopify development for brands that need more than a theme setup.",
  paragraphs: [
    "Dynamic Dreamz designs, develops, migrates and continuously improves Shopify stores for DTC brands, ecommerce businesses and digital agencies. Our Shopify development services cover custom storefronts, Figma implementation, theme customization, integrations, migration, CRO, performance and ongoing technical support.",
  ],
  cta: "Discuss Shopify Project",
  ctaHref: "/book-a-discovery-call",
  secondaryCta: {
    label: "Explore Shopify Services",
    href: "#shopify-services",
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
      alt: "Dynamic Dreamz on Trustpilot — 4.9 rating",
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

export const shopifyDevelopmentAgencyBrands = [
  { src: "/assets/clients/ranavat.svg", href: "https://www.ranavat.com/", alt: "Ranavat Logo", width: 174, height: 19 },
  { src: "/assets/clients/prolash.svg", href: "https://prolash.com/", alt: "prolash_black", width: 204, height: 22 },
  { src: "/assets/clients/tropicfeel.svg", href: "https://shop.tropicfeel.com/", alt: "Tropicfeel Logo", width: 150, height: 32 },
  { src: "/assets/clients/perfect-locks.svg", href: "https://www.perfectlocks.com/", alt: "perfect_locks_color_logo", width: 175, height: 32 },
  { src: "/assets/clients/bombay-shirt-company.svg", href: "https://www.bombayshirts.com/", alt: "Bombay Shirt Company Logo", width: 204, height: 26 },
  { src: "/assets/clients/kayfi.svg", href: "https://kayfi.com/", alt: "kayfi-colored", width: 90, height: 49 },
  { src: "/assets/clients/sim-direct.svg", href: "https://simsdirect.com.au/", alt: "simdirect_logo_color", width: 143, height: 49 },
  { src: "/assets/clients/kvaser.svg", href: "https://www.kvaser.com/", alt: "Kvaser Logo", width: 135, height: 25 },
  { src: "/assets/clients/nelter.svg", href: "https://www.nekterjuicebar.com/", alt: "nekter-colored", width: 66, height: 64 },
  { src: "/assets/clients/circuit-city.svg", href: "https://circuitcity.com/", alt: "Circuit City Logo", width: 64, height: 64 },
] as const;

export const shopifyDevelopmentAgencyBrandsHeading = "Trusted by <br>Leading Brands";

export const shopifyDevelopmentAgencyBrandConfig = {
  slug: "shopify-development-agency",
  brands: {
    ariaLabel: "Brands that trust Dynamic Dreamz",
  },
} as const;

export const shopifyDevelopmentAgencyServices = {
  eyebrow: "Shopify Development Services",
  heading: "Shopify development for every stage",
  description:
    "Dynamic Dreamz is a Shopify Platinum Partner and Shopify development agency helping brands build, redesign, migrate and continuously improve Shopify stores. Our team covers the core development needs behind a modern Shopify storefront without turning this page into a long service catalogue.",
  items: [
    {
      tag: "Core Capability",
      title: "Custom Shopify Store Development",
      description:
        "Build a flexible Shopify storefront around your brand, products and customer journey. We develop reusable sections, tailored PDP and collection experiences, responsive interactions, custom functionality and merchant-friendly theme architecture.",
      pills: [
        "Online Store 2.0",
        "PDP / PLP",
        "Custom Sections",
        "Metafields",
        "Responsive QA",
      ],
      cta: {
        label: "Discuss a custom build",
        href: "/request-quote",
      },
    },
    {
      tag: "Design to Storefront",
      title: "Figma/XD to Shopify Conversion",
      description:
        "Turn approved Figma or XD designs into responsive Shopify storefronts with reusable sections, accurate responsive states and performance-conscious front-end development.",
      pills: [],
      cta: {
        label: "Send your design brief",
        href: "/request-quote",
      },
    },
    {
      tag: "Improve Existing Theme",
      title: "Shopify Theme Customization Service",
      description:
        "Improve Dawn, Prestige, Impulse and other Shopify themes with better UX, new sections, custom functionality and responsive refinements.",
      pills: [],
      cta: {
        label: "Explore theme customization",
        href: "/shopify-theme-customization",
      },
    },
    {
      tag: "Connected Commerce",
      title: "Shopify App Integration Service & Custom Functionality",
      description:
        "Connect subscriptions, reviews, search, loyalty, payments, fulfillment, ERP, CRM and operational tools — or build custom functionality when standard apps do not fit the requirement.",
      pills: [
        "Apps",
        "APIs",
        "ERP / CRM",
        "Automation",
        "Custom Logic",
      ],
      cta: null,
    },
    {
      tag: "Replatforming",
      title: "Shopify Migration Service",
      description:
        "Move products, customers, orders and content to Shopify with URL mapping, 301 redirects, SEO preservation, integration planning and staged launch validation.",
      pills: [],
      cta: {
        label: "Explore migration",
        href: "/shopify-migration",
      },
    },
    {
      tag: "Keep Evolving",
      title: "Shopify Maintenance Service",
      description:
        "Ongoing fixes, features, theme updates, app changes, CRO implementation and performance improvements for live Shopify stores.",
      pills: [],
      cta: {
        label: "View flexible Shopify hours",
        href: "/buy-shopify-development-hours",
      },
    },
    {
      tag: "Modernize",
      title: "Shopify 2.0 Migration Service",
      description:
        "Upgrade legacy themes and older setups to modern Online Store 2.0 architecture with flexible sections, metafields, metaobjects and a cleaner foundation for future development.",
      pills: [],
      cta: null,
    },
    {
      tag: "Agency Delivery",
      title: "Shopify White Label Development Service",
      description:
        "Shopify delivery behind digital and creative agencies, with NDA-friendly collaboration, structured QA and flexible development capacity.",
      pills: [],
      cta: {
        label: "Explore white-label Shopify",
        href: "/white-label-shopify-development-services",
      },
    },
    {
      tag: "Agency Delivery",
      title: "Shopify Plus Mobile App Development.",
      description:
        "Build high-performance iOS and Android shopping apps integrated with Shopify Plus, including real-time products, customer accounts, checkout, push notifications and loyalty features.",
      pills: [],
      cta: {
        label: "Explore Shopify Mobile Apps",
        href: "/shopify-mobile-app-development",
      },
    },
  ],
} as const;

export const shopifyDevelopmentAgencyPortfolio = {
  eyebrow: "Portfolio",
  heading: "Explore Our Work",
  description:
    "We've come across to work on quite a few challenging and critical issues in our professional journey and have come up with outstanding solutions! Whether it's a startup of a Fortune 500 company, every site we have developed has surpassed the client's expectations.",
  category: "SHOPIFY",
  ctaLabel: "View Our Work",
  ctaHref: "/portfolio",
  platformMark: {
    src: "/assets/platforms/shopify-white.svg",
    width: 89,
    height: 26,
  },
  items: [
    {
      name: "Nufyx",
      category: "SHOPIFY",
      image: "/assets/healthcare/portfolio/nufyx-protein-products.webp",
      imageAlt: "Nufyx Image",
      href: "https://nufyx.com/",
    },
    {
      name: "Nekter Juice Bar",
      category: "SHOPIFY PLUS",
      image: "/assets/food-beverages/portfolio/nekter-juice-bar.webp",
      imageAlt: "nekter juice bar Image",
      href: "https://www.nekterjuicebar.com/",
    },
    {
      name: "Pagerie",
      category: "SHOPIFY",
      image: "/assets/pet-industry/portfolio/pagerie-dog-accessories.webp",
      imageAlt: "Pagerie Image",
      href: "https://www.pagerie.com/",
    },
    {
      name: "Luxxi Nails",
      category: "SHOPIFY",
      image: "/assets/beauty-cosmetics/portfolio/luxxi-nails.webp",
      imageAlt: "Luxxi nails Image",
      href: "https://luxxinails.com/",
    },
    {
      name: "Eco Soul",
      category: "SHOPIFY",
      image: "/assets/our-work/projects/eco-soul.webp",
      imageAlt: "Eco Soul Image",
      href: "https://www.ecosoulhome.com/",
    },
    {
      name: "Bombay Shirt Company",
      category: "SHOPIFY",
      image: "/assets/our-work/projects/bombay-shirt-company-model.webp",
      imageAlt: "Bombay Shirt Company Image",
      href: "https://www.bombayshirts.com/",
    },
    {
      name: "Holy Plantz",
      category: "SHOPIFY",
      image: "/assets/our-work/projects/holy-plantz.webp",
      imageAlt: "Holy Plantz Image",
      href: "https://holyplantz.com/",
    },
    {
      name: "Atolea Jewelry",
      category: "SHOPIFY PLUS",
      image: "/assets/our-work/projects/atolea-jewelry.webp",
      imageAlt: "Atolea Jewelry Image",
      href: "https://atoleajewelry.com/",
    },
  ],
} as const;

export const shopifyDevelopmentAgencyTeam = {
  eyebrow: "More Than One Developer",
  heading: "A Shopify team around your project",
  description:
    "Great Shopify work often needs more than development alone. Dynamic Dreamz brings certified Shopify developers, UI/UX designers, QA specialists and technical support into one coordinated team — helping protect design intent, functionality and launch quality without making you manage multiple vendors.",
  items: [
    {
      title: "Certified Shopify Developers",
      description:
        "Custom storefronts, Liquid and theme architecture, Shopify functionality and ongoing development.",
    },
    {
      title: "UI/UX & Figma",
      description:
        "Design interpretation, responsive states, PDP/PLP experiences and implementation detail.",
    },
    {
      title: "QA & Project Coordination",
      description:
        "Functional, device and browser testing with clear milestones, communication and delivery oversight.",
    },
    {
      title: "Integration & Technical Support",
      description:
        "Apps, APIs, ERP/CRM, custom systems and full-stack support when the Shopify project requires it.",
    },
  ],
} as const;

export const shopifyDevelopmentAgencyPricing = {
  eyebrow: "Flexible Shopify Engagements",
  heading: "Choose the Right Shopify Development Engagement.",
  description:
    "Start with one Shopify Plus project, use flexible hourly support, or add a dedicated developer / team around your ongoing ecommerce roadmap.",
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
} as const;

export const shopifyDevelopmentAgencyProcess = {
  eyebrow: "Our Shopify Development Process",
  heading: "Built for quality and launch stability",
  description:
    "We validate the brief, plan the Shopify build, develop in stages, QA across devices and support launch — keeping design intent and technical quality aligned from start to finish.",
  steps: [
    {
      number: "01",
      title: "Assess",
      description: "Goals, current setup, requirements and technical constraints.",
    },
    {
      number: "02",
      title: "Plan",
      description: "Templates, reusable sections, integrations and delivery milestones.",
    },
    {
      number: "03",
      title: "Develop",
      description: "Build in staging with scalable, manageable Shopify components.",
    },
    {
      number: "04",
      title: "QA",
      description: "Functionality, responsive behavior, browsers and launch-readiness checks.",
    },
    {
      number: "05",
      title: "Launch & Improve",
      description: "Go-live support followed by fixes, CRO, performance and ongoing development.",
    },
  ],
} as const;

export const shopifyDevelopmentAgencyTestimonials = {
  eyebrow: "Client Stories",
  heading: "Don't Just Take Our Word For It",
  description:
    "We have faith in our work, but what truly matters is the outcomes we serve our clients. Happy clients make happy stories. Check out how our services empower them to evolve.",
  items: shopifyPlusAgencyTestimonials.items,
} as const;

export const shopifyDevelopmentAgencyFaqs: readonly FaqAccordionItem[] = [
  {
    question: "Is Dynamic Dreamz a Shopify development agency?",
    answer:
      "Yes. Dynamic Dreamz is a <strong>Shopify Platinum Partner and Shopify development agency</strong> established in 2006. We help brands and digital agencies build, redesign, migrate, integrate and continuously improve Shopify stores.",
  },
  {
    question: "What Shopify development services does Dynamic Dreamz provide?",
    answer:
      "We provide custom Shopify store development, Figma/XD to Shopify conversion, theme development and customization, app integrations, migrations, Shopify 2.0 theme upgrades, CRO, performance improvements, maintenance and white-label Shopify development.",
  },
  {
    question: "Why hire a Shopify development agency instead of one developer?",
    answer:
      "A larger Shopify project often needs development, design interpretation, QA, project coordination and integration knowledge.<br />Dynamic Dreamz brings the right mix of specialists around the project instead of expecting one developer to cover every discipline.",
  },
  {
    question: "Can Dynamic Dreamz build a Shopify store from Figma or customize an existing theme?",
    answer:
      "Yes. We implement approved Figma/XD designs in Shopify and customize existing themes with reusable sections, product and collection templates, responsive behavior and custom functionality.",
  },
  {
    question: "Can you migrate Magento, WooCommerce or BigCommerce to Shopify without losing SEO?",
    answer:
      "We plan migrations around data transfer, URL mapping, 301 redirects, metadata, canonical handling, analytics validation and launch QA. No migration can guarantee unchanged rankings, but SEO preservation is treated as a core part of the replatforming process.",
  },
  {
    question: "How much does Shopify development cost with Dynamic Dreamz?",
    answer:
      "Cost depends on scope and engagement model. We offer project-based custom quotes, flexible Shopify development support from $25/hour, and dedicated Shopify developer or team options from $2,000/month.",
  },
  {
    question: "How long does a Shopify development project take?",
    answer:
      "Timeline depends on design readiness, catalog size, custom functionality, migration requirements and integrations. After reviewing the scope, Dynamic Dreamz provides milestones and a realistic delivery plan rather than applying one timeline to every project.",
  },
  {
    question: "Does Dynamic Dreamz provide ongoing Shopify maintenance and support?",
    answer:
      "Yes. We support live Shopify stores with fixes, theme updates, new features, app changes, CRO implementation, performance improvements, integrations and ongoing development capacity.",
  },
  {
    question: "Does Dynamic Dreamz provide Shopify Plus development?",
    answer:
      "Yes. High-growth, B2B and enterprise requirements are supported through our dedicated <a href=\"/shopify-plus-agency\">Shopify Plus Agency</a> capability, including B2B, migrations, integrations, checkout extensibility and ongoing technical support.",
  },
  {
    question: "Where is Dynamic Dreamz based, and do you work with global Shopify clients?",
    answer:
      "Dynamic Dreamz is an India-based Shopify development company serving brands and agencies globally. Project communication and delivery are structured around client requirements and working time zones.",
  },
];

export const shopifyDevelopmentAgencyCtaBanner = {
  heading: "Want us to help you with your online store?",
  ctaLabel: "REQUEST A QUOTE",
  ctaHref: "/request-quote",
} as const;

