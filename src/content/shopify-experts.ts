import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { HeroBadge, ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import type { OurDevelopmentProcessContent } from "@/components/sections/our-development-process-section";
import type { WhyChooseMigrationContent } from "@/components/sections/why-choose-shopify-migration-section";
import type { ShopifyStageServicesContent } from "@/components/sections/shopify-stage-services-section";
import type { ThemeCustomizationServicesContent } from "@/components/sections/theme-customization-services-section";
import type { AiEmpoweredDeliveryContent } from "@/components/sections/ai-empowered-delivery-section";
import type { PricingEngagementContent } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import type { PortfolioShowcaseItem } from "@/components/sections/portfolio-showcase-section";
import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";

export const shopifyExpertsContent = {
  hero: {
    eyebrowSpans: ["Established in 2006", "Shopify Platinum Partner"] as const,
    title: "Hire Shopify Experts",
    paragraphs: [
      "Hire experienced Shopify experts for store setup, theme customization, custom development, Shopify apps, migrations, CRO and ongoing support. Dynamic Dreamz combines certified Shopify expertise with an in-house ecommerce team, structured QA and modern AI-assisted development workflows.",
    ],
    cta: "Hire Shopify Experts",
    ctaHref: "/request-quote",
    secondaryCta: {
      label: "View Pricing",
      href: "#our_white_label_pricing",
    },
    video: "/assets/home/why-dynamic-dreamz.mp4",
    badges: [
      {
        name: "Shopify Platinum Partner",
        src: "/assets/proof/shopify-platinum-partner.svg",
        href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
        alt: "Dynamic Dreamz - Shopify Platinum Partner",
        width: 136,
        height: 44,
      },
      {
        name: "Clutch",
        src: "/assets/proof/clutch-rating.svg",
        href: "https://clutch.co/profile/dynamic-dreamz",
        alt: "Dynamic Dreamz on Clutch — 4.9 rating",
        width: 111,
        height: 44,
      },
      {
        name: "Trustpilot",
        src: "/assets/proof/trustpilot-rating.svg",
        href: "https://www.trustpilot.com/review/dynamicdreamz.com",
        alt: "Dynamic Dreamz on Trustpilot — 4.9 rating",
        width: 124,
        height: 44,
      },
      {
        name: "Upwork",
        src: "/assets/proof/upwork-top-rated-plus.svg",
        href: "https://www.upwork.com/ag/dynamicdreamz/",
        alt: "Dynamic Dreamz — Top Rated Plus on Upwork",
        width: 134,
        height: 44,
      },
    ] as readonly HeroBadge[],
  } satisfies ServiceHeroVideoContent,

  brands: {
    heading: "Trusted by Leading Brands",
    ariaLabel: "Brands that trust Dynamic Dreamz for Shopify development",
    slug: "shopify-experts",
    items: [
      {
        src: "/assets/clients/ranavat.svg",
        href: "https://www.ranavat.com/",
        alt: "Ranavat Logo",
        width: 174,
        height: 19,
      },
      {
        src: "/assets/clients/prolash.svg",
        href: "https://prolash.com/",
        alt: "prolash_black",
        width: 204,
        height: 22,
      },
      {
        src: "/assets/clients/tropicfeel.svg",
        href: "https://shop.tropicfeel.com/",
        alt: "Tropicfeel Logo",
        width: 150,
        height: 32,
      },
      {
        src: "/assets/clients/perfect-locks.svg",
        href: "https://www.perfectlocks.com/",
        alt: "perfect_locks_color_logo",
        width: 175,
        height: 32,
      },
      {
        src: "/assets/clients/bombay-shirt-company.svg",
        href: "https://www.bombayshirts.com/",
        alt: "Bombay Shirt Company Logo",
        width: 204,
        height: 26,
      },
      {
        src: "/assets/clients/kayfi.svg",
        href: "https://kayfi.com/",
        alt: "kayfi-colored",
        width: 90,
        height: 49,
      },
      {
        src: "/assets/clients/simsdirect.svg",
        href: "https://simsdirect.com.au/",
        alt: "simdirect_logo_color",
        width: 143,
        height: 49,
      },
      {
        src: "/assets/clients/kvaser.svg",
        href: "https://www.kvaser.com/",
        alt: "Kvaser Logo",
        width: 135,
        height: 25,
      },
      {
        src: "/assets/clients/nelter.svg",
        href: "https://www.nekterjuicebar.com/",
        alt: "nekter-colored",
        width: 66,
        height: 64,
      },
      {
        src: "/assets/clients/circuit-city.svg",
        href: "https://circuitcity.com/",
        alt: "Circuit City Logo",
        width: 64,
        height: 64,
      },
    ] as readonly ClientLogoSliderItem[],
  },

  process: {
    eyebrow: "Simple Shopify Hiring",
    heading: "Hassle-Free Hiring Process to Get Started",
    description:
      "Hire Shopify expertise without a lengthy recruitment cycle. Share your requirement, review the recommended fit and start with the engagement model that works for you.",
    steps: [
      {
        step: "Step 01",
        title: "Share Your Requirements",
        description:
          "Send your store URL, task, design, backlog or project brief and tell us what you want to achieve.",
      },
      {
        step: "Step 02",
        title: "We Select the Right Expert",
        description:
          "We assess the work and recommend the Shopify developer or team best matched to the requirement.",
      },
      {
        step: "Step 03",
        title: "Review & Approve",
        description:
          "Review the proposed expertise, clarify the scope and confirm the engagement model you prefer.",
      },
      {
        step: "Step 04",
        title: "Start the Work",
        description:
          "Share the required access, align priorities and move into development with a clear communication process.",
      },
    ],
  } satisfies OurDevelopmentProcessContent,

  whyChoose: {
    eyebrow: "Why Dynamic Dreamz",
    heading: "Why Hire Shopify Experts from Dynamic Dreamz?",
    description:
      "Get Shopify-certified expertise backed by an experienced in-house team and a verifiable Shopify Platinum Partner relationship.",
    items: [
      {
        icon: "certified",
        title: "Certified Shopify Expertise",
        description:
          "Shopify certifications across development, Liquid storefronts and B2B are combined with hands-on ecommerce delivery experience.",
      },
      {
        icon: "verticals",
        title: "Experience Across Multiple Verticals",
        description:
          "Experience Across Multiple Verticals\nFashion, beauty, health & nutrition, jewellery, food & beverage, home & living, sports and other product-led categories.",
      },
      {
        icon: "team",
        title: "150+ In-House Experts",
        description:
          "Shopify developers can be supported by UI/UX, QA, integrations, mobile and full-stack specialists when the project needs broader expertise.",
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
  } satisfies WhyChooseMigrationContent,

  services: {
    eyebrow: "Complete Shopify Capability",
    heading: "Complete Shopify Expertise Under One Roof",
    description:
      "From front-end storefront work to custom apps, integrations and migrations, our Shopify experts can bring in the right technical depth as your requirement grows.",
    items: [
      {
        tag: "Front-End Development",
        title: "Shopify storefronts, themes and customer experience",
        description:
          "Liquid, custom themes, sections, templates, metafields, product pages, collections, navigation, responsive implementation and Figma-to-Shopify development.",
        pills: ["Liquid", "Figma", "PDP", "PLP", "OS 2.0", "Responsive QA"],
      },
      {
        tag: "Back-End & APIs",
        title: "Shopify Integrations",
        description:
          "Admin API, Storefront API, third-party services, ERP, CRM, 3PL and operational integrations.",
      },
      {
        tag: "Custom Apps",
        title: "Shopify App Development",
        description:
          "Custom functionality and private/public app requirements when an off-the-shelf app is not the right fit.",
      },
      {
        tag: "Replatforming & Growth",
        title: "Migration, CRO, Shopify Plus & B2B",
        description:
          "Platform migrations, SEO-aware launch planning, CRO implementation, performance improvements and higher-complexity Shopify Plus or B2B requirements.",
        pills: ["Migration", "CRO", "Performance", "Shopify Plus", "B2B"],
      },
      {
        tag: "Support",
        title: "Ongoing Development",
        description:
          "Fixes, enhancements, releases, app changes and long-term Shopify development capacity after launch.",
      },
      {
        tag: "Mobile App",
        title: "Shopify Plus Mobile App Development",
        description:
          "Build high-performance iOS and Android shopping apps integrated with Shopify Plus, including real-time products, customer accounts, checkout, push notifications and loyalty features.",
        cta: {
          label: "Explore Shopify Mobile Apps",
          href: "/shopify-mobile-app-development",
        },
      },
    ],
  } satisfies ShopifyStageServicesContent,

  whyBrandsChoose: {
    eyebrow: "Why Brands Choose Us",
    heading: "Why Brands Choose Our Shopify Experts",
    description:
      "Flexible hiring, broader technical coverage and reliable delivery make it easier to start small, scale support and keep the same Shopify partner as your store evolves.",
    boxes: [
      {
        number: "01",
        title: "Easy Hiring. No Long-Term Commitment.",
        description:
          "Start with one task, one project, flexible development hours or dedicated monthly capacity. You choose the level of commitment that fits the current requirement.",
      },
      {
        number: "02",
        title: "Lower Cost Than Expanding In-House",
        badge: "Up to 50% lower development cost*",
        description:
          "Access experienced Shopify capacity without the recruitment, employment and infrastructure overhead of expanding an equivalent in-house team.",
      },
      {
        number: "03",
        title: "Complete Shopify Development Knowledge",
        description:
          "Front-end, Liquid, custom themes, Shopify APIs, custom apps, integrations, migrations, CRO, Shopify Plus and B2B expertise can be supported within one organization.",
      },
      {
        number: "04",
        title: "Post-Launch Shopify Support",
        description:
          "Continue with the same team for fixes, enhancements, performance work, CRO implementation, app changes and new ecommerce functionality after launch.",
      },
      {
        number: "05",
        title: "Time-Zone Friendly Delivery",
        description:
          "Our team works with brands and agencies globally and can structure communication, meetings and delivery around agreed project working hours.",
      },
      {
        number: "06",
        title: "Development + QA + Project Oversight",
        description:
          "Important Shopify releases can be supported through project coordination, technical review and device/browser QA rather than relying only on the person writing the code.",
      },
    ],
    bottomNote:
      "*Potential savings depend on geography, role seniority and engagement model when compared with building equivalent in-house capacity.",
  } satisfies ThemeCustomizationServicesContent,

  aiTools: {
    eyebrow: "AI-Empowered Shopify Delivery",
    heading: "Shopify experts empowered by modern AI development tools.",
    description:
      "Our developers use AI-assisted tools such as Claude and Cursor where they can improve code exploration, debugging, documentation, refactoring and repetitive development work. AI helps accelerate the workflow — but architecture, business logic, security, code quality and production releases remain under the control of experienced developers and our QA process.",
    tools: [
      {
        name: "Claude",
        description: "Code analysis & development assistance",
      },
      {
        name: "Cursor",
        description: "AI-assisted coding & codebase exploration",
      },
      {
        name: "Human Review",
        description: "Architecture, security & maintainability",
      },
      {
        name: "QA",
        description: "Device, browser & ecommerce-flow validation",
      },
    ],
    callout:
      "Modern tools help our developers move faster. Human Shopify expertise remains responsible for the final solution.",
  } satisfies AiEmpoweredDeliveryContent,

  work: {
    eyebrow: "Portfolio",
    heading: "Explore Our Shopify Work",
    description:
      "See real Shopify storefronts across different industries, customer journeys and levels of customization.",
    ctaLabel: "Explore More Shopify Work",
    ctaHref: "/our-work",
    secondaryCtaLabel: "View Pricing",
    secondaryCtaHref: "#our_white_label_pricing",
    items: [
      {
        name: "Nufyx",
        href: "https://nufyx.com/",
        image: "/assets/healthcare/portfolio/nufyx-protein-products.webp",
        imageAlt: "Nufyx Image",
        category: "SHOPIFY",
      },
      {
        name: "Nekter Juice Bar",
        href: "https://www.nekterjuicebar.com/",
        image: "/assets/food-beverages/portfolio/nekter-juice-bar.webp",
        imageAlt: "Nekter Juice Bar Image",
        category: "SHOPIFY",
      },
      {
        name: "Pagerie",
        href: "https://www.pagerie.com/",
        image: "/assets/pet-industry/portfolio/pagerie-dog-accessories.webp",
        imageAlt: "Pagerie Image",
        category: "SHOPIFY",
      },
      {
        name: "Luxxi Nails",
        href: "https://luxxinails.com/",
        image: "/assets/beauty-cosmetics/portfolio/luxxi-nails.webp",
        imageAlt: "Luxxi Nails Image",
        category: "SHOPIFY",
      },
      {
        name: "Eco Soul",
        href: "https://www.ecosoulhome.com/",
        image: "/assets/our-work/projects/eco-soul.webp",
        imageAlt: "Eco Soul Image",
        category: "SHOPIFY",
      },
      {
        name: "AdHOC Atelier",
        href: "https://adhocatelier.it/",
        image: "/assets/hire-shopify-developers/portfolio/adhoc-atler.webp",
        imageAlt: "AdHOC Atelier Image",
        category: "SHOPIFY",
      },
      {
        name: "Bombay Shirt Company",
        href: "https://bombayshirts.com/",
        image: "/assets/our-work/projects/bombay-shirt-company-model.webp",
        imageAlt: "Bombay Shirt Company Image",
        category: "SHOPIFY",
      },
      {
        name: "Holy Plantz",
        href: "https://holyplantz.com/",
        image: "/assets/our-work/projects/holy-plantz.webp",
        imageAlt: "Holy Plantz Image",
        category: "SHOPIFY",
      },
    ] as readonly PortfolioShowcaseItem[],
  },

  pricing: {
    eyebrow: "Flexible Shopify Engagements",
    heading: "Choose the Right Shopify Expert Engagement",
    description:
      "Use the same flexible engagement model available across our Shopify services — from one defined project to ongoing development capacity.",
    items: [
      {
        label: "Project-Based",
        badge: "Have One Shopify Project?",
        price: "Custom Quote",
        description:
          "For Shopify builds, redesigns, migrations, custom functionality, integrations and other clearly defined requirements.",
        ctaLabel: "Send Brief — Get a Quote",
        ctaHref: "/request-quote",
      },
      {
        label: "Flexible Hourly Support",
        badge: "Need Extra Shopify Capacity?",
        price: "From $25/hour",
        description:
          "For maintenance, enhancements, troubleshooting, CRO implementation and changing Shopify development priorities.",
        ctaLabel: "Buy Shopify Development Hours",
        ctaHref: "/buy-shopify-development-hours",
      },
      {
        label: "Dedicated Developer / Team",
        badge: "Need Ongoing Capacity?",
        price: "From $2,000/month",
        description:
          "For brands or agencies with a steady Shopify roadmap, recurring releases or a need for consistent development continuity.",
        ctaLabel: "Discuss Dedicated Capacity",
        ctaHref: "/hire-shopify-developers",
      },
    ],
  } satisfies PricingEngagementContent,

  testimonials: {
    eyebrow: "Client Stories",
    heading: "Don't Just Take Our Word For It",
    description:
      "Hear from clients who have worked with Dynamic Dreamz across Shopify, ecommerce and long-term development engagements.",
  },

  faqs: {
    eyebrow: "Shopify Expert FAQ",
    heading: "Questions Buyers Ask Before Hiring Shopify Experts",
    items: [
      {
        question: "Why should I hire Shopify experts from Dynamic Dreamz?",
        answer:
          "Dynamic Dreamz is a Shopify Platinum Partner with Shopify-certified expertise, 20+ years of ecommerce delivery, an in-house cross-functional team and structured QA. That gives merchants access to the right Shopify skills without relying on one person for every requirement.",
      },
      {
        question: "What can your Shopify experts help with?",
        answer:
          "Our Shopify experts can help with store setup and redesign, Figma-to-Shopify development, theme customization, Liquid development, custom functionality, Shopify apps, APIs and integrations, CRO, performance improvements, migrations, Shopify Plus, B2B and ongoing support.",
      },
      {
        question: "How does the Shopify expert hiring process work?",
        answer:
          "Share your store URL, business goal, design or backlog. We review the requirement, identify the expertise needed, recommend the right Shopify profile or team, and then start with the agreed project, hourly or dedicated engagement.",
      },
      {
        question: "How much does it cost to hire Shopify experts?",
        answer:
          "Pricing depends on the scope and engagement model. Defined projects are quoted after reviewing requirements. Flexible Shopify development support is available from $25 per hour through development-hour packages, and dedicated Shopify developer or team options start from $2,000 per month.",
      },
      {
        question: "Can I hire a Shopify expert for a small task?",
        answer:
          "Yes. You can start with a clearly defined task such as a theme change, PDP improvement, bug fix, integration or storefront enhancement before moving into a larger project or ongoing engagement.",
      },
      {
        question: "Do your Shopify experts use AI tools such as Claude and Cursor?",
        answer:
          "Yes. Our team uses AI-assisted development tools such as Claude and Cursor where appropriate for code exploration, debugging, documentation, refactoring and repetitive development work. Architecture, implementation decisions, security, code quality and QA remain developer-controlled.",
      },
      {
        question: "Are your Shopify experts certified?",
        answer:
          "Dynamic Dreamz is a Shopify Platinum Partner and has team members with documented Shopify certifications across development fundamentals, Liquid storefronts and Shopify B2B. We match the relevant expertise to the project rather than treating one certification as proof of every Shopify skill.",
      },
      {
        question: "Do you provide post-launch and ongoing Shopify support?",
        answer:
          "Yes. We support live Shopify stores with bug fixes, theme updates, new features, CRO implementation, performance work, app and integration changes and recurring development through flexible hours or dedicated monthly capacity.",
      },
    ] as readonly FaqAccordionItem[],
  },
} as const;
