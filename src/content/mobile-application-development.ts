import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MobileAppHeroContent } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-hero-section";
import type { AiEmpoweredDeliveryContent } from "@/components/sections/ai-empowered-delivery-section";
import type { ThemeCustomizationBox } from "@/components/sections/theme-customization-services-section";
import type { NumberedGridItem } from "@/components/sections/shopify-migration/shopify-migration-numbered-grid-section";
import type { MobileAppWorkContent } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-work-section";
import type { PricingEngagementContent } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { shopifyMobileAppExploreWork } from "@/content/shopify-mobile-app-development";

// 1. Hero
export const mobileAppHero: MobileAppHeroContent = {
  eyebrows: ["Established in 2006"],
  title: "Custom Mobile App Development",
  titleAccent: "Services",
  description:
    "Dynamic Dreamz designs and develops custom mobile applications for businesses, startups and digital products. We build utility apps, internal business tools, booking and service apps, marketplaces, customer-facing products and ecommerce apps for iOS and Android—with UI/UX, backend APIs, integrations, QA, store release and ongoing development handled by one team.",
  primaryCta: {
    label: "Discuss Your App",
    href: "/request-quote",
    ariaLabel: "Discuss Your App",
  },
  secondaryCta: {
    label: "See Mobile App Work",
    href: "#our_work",
    ariaLabel: "See Mobile App Work",
  },
  badges: [
    {
      src: "/assets/proof/shopify-platinum-partner.svg",
      alt: "Dynamic Dreamz - Shopify Platinum Partner",
      href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
      width: 136,
      height: 44,
    },
    {
      src: "/assets/proof/clutch-rating.svg",
      alt: "Dynamic Dreamz on Clutch — 4.9 rating",
      href: "https://clutch.co/profile/dynamic-dreamz",
      width: 111,
      height: 44,
    },
    {
      src: "/assets/proof/trustpilot-rating.svg",
      alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
      href: "https://www.trustpilot.com/review/dynamicdreamz.com",
      width: 148,
      height: 50,
    },
    {
      src: "/assets/proof/upwork-top-rated-plus.svg",
      alt: "Dynamic Dreamz — Upwork Top Rated Plus",
      href: "https://www.upwork.com/ag/dynamicdreamz/",
      width: 126,
      height: 54,
    },
  ],
  slides: [
    {
      src: "/assets/services/shopify-mobile-app-development/hero/slide-bellavita.webp",
      alt: "Bellavita",
      width: 224,
      height: 487,
    },
    {
      src: "/assets/services/shopify-mobile-app-development/hero/slide-house-of-good-vibes.webp",
      alt: "House of good",
      width: 150,
      height: 325,
    },
    {
      src: "/assets/services/shopify-mobile-app-development/hero/slide-kalki.webp",
      alt: "Kalki",
      width: 147,
      height: 325,
    },
  ],
  frameImage: {
    src: "/assets/services/shopify-mobile-app-development/hero/phone-frame.png",
    alt: "Mobile app frame",
    width: 282,
    height: 574,
  },
};

// 2. Client Brands
export const mobileAppBrands: readonly ClientLogoSliderItem[] = [
  {
    src: "/assets/clients/supertails.svg",
    href: "https://supertails.com/",
    alt: "Supper Tails Logo",
    width: 164,
    height: 41,
  },
  {
    src: "/assets/clients/eleven-eleven.svg",
    href: "https://11-11.in/",
    alt: "Eleven Eleven",
    width: 145,
    height: 22,
  },
  {
    src: "/assets/clients/bella-vita.svg",
    href: "https://bellavitaorganic.com/",
    alt: "bellavita logo",
    width: 166,
    height: 24,
  },
  {
    src: "/assets/clients/bombay-shirt-company.svg",
    href: "https://www.bombayshirts.com/",
    alt: "Bombay Shirt Company",
    width: 204,
    height: 26,
  },
  {
    src: "/assets/clients/popclub.svg",
    href: "https://popclub.co/",
    alt: "Pop Club Logo",
    width: 65,
    height: 41,
  },
  {
    src: "/assets/clients/sri-sri-tattva.svg",
    href: "https://www.srisritattva.com/",
    alt: "SriSri Tattva Logo",
    width: 106,
    height: 40,
  },
  {
    src: "/assets/clients/tropicfeel.svg",
    href: "https://shop.tropicfeel.com/",
    alt: "tropicfeel logo",
    width: 150,
    height: 32,
  },
  {
    src: "/assets/clients/renee.svg",
    href: "https://www.reneecosmetics.in/",
    alt: "Renee logo",
    width: 93,
    height: 30,
  },
  {
    src: "/assets/clients/royce-chocolate.svg",
    href: "https://royceindia.com/",
    alt: "Royce chocolate logo",
    width: 132,
    height: 38,
  },
  {
    src: "/assets/clients/tego.svg",
    href: "https://tego.fit/",
    alt: "tego logo",
    width: 101,
    height: 40,
  },
  {
    src: "/assets/clients/nelter.svg",
    href: "https://www.nekterjuicebar.com/",
    alt: "nekter-colored",
    width: 109,
    height: 41,
  },
  {
    src: "/assets/clients/rare-rabbit.svg",
    href: "https://thehouseofrare.com/",
    alt: "Rare Rabbit Logo",
    width: 122,
    height: 84,
  },
];

export const mobileAppBrandsCopy = {
  heading: "Trusted by\nLeading Brands",
  ariaLabel: "Brands that trust Dynamic Dreamz for mobile application development",
};

// 3. More Than Ecommerce Apps (AiEmpoweredDeliverySection 1)
export const mobileAppWorkflowDelivery: AiEmpoweredDeliveryContent = {
  eyebrow: "More Than Ecommerce Apps",
  heading: "Build the App Around the Workflow—Not Around a Fixed Template.",
  description:
    "Your mobile product may start with a new idea, an existing business process or a need to reach customers directly on their phones. We build custom applications designed around your workflow, business logic and data requirements.",
  cta: {
    label: "Discuss Your App Requirement",
    href: "/request-quote",
  },
  tools: [
    {
      name: "Utility & Business Apps",
      description:
        "Custom workflows for teams, customers, field operations, dashboards and internal processes.",
    },
    {
      name: "Consumer Apps",
      description:
        "Customer-facing products for services, content, memberships, communities and digital experiences.",
    },
    {
      name: "Existing App Development",
      description:
        "Modernize UI, add features, improve performance or extend an existing mobile application.",
    },
    {
      name: "Website / Shopify to App",
      description:
        "Create a mobile-specific iOS and Android experience connected to your existing website or Shopify store.",
    },
  ],
};

// 4. What Kind of Mobile Apps Can We Build? (ThemeCustomizationServicesSection yellow)
export const mobileAppWhatWeBuildCopy = {
  eyebrow: "What We Build",
  heading: "What Kind of Mobile Apps Can We Build?",
  description:
    "We work across customer experiences, operational tools and connected commerce. The architecture is selected around the product rather than forcing every project into the same framework.",
};

export const mobileAppWhatWeBuildBoxes: readonly Omit<ThemeCustomizationBox, "icon">[] = [
  {
    title: "Utility & Business Apps",
    description:
      "Internal tools, operational workflows, customer portals, tracking, task management and business processes.",
  },
  {
    title: "Consumer Mobile Apps",
    description:
      "Mobile products for services, on-demand experiences, accounts, content, digital membership and customer retention.",
  },
  {
    title: "Booking & Service Apps",
    description:
      "Appointments, service scheduling, location-aware experiences, notifications and real-time interaction.",
  },
  {
    title: "Marketplace & Platform Apps",
    description:
      "Multi-sided workflows connecting users, providers, products, requests, payments and admin visibility.",
  },
  {
    title: "Ecommerce Mobile Apps",
    description:
      "Dedicated iOS and Android shopping apps built for speed, personalized accounts, push marketing and repeat orders.",
  },
  {
    title: "Shopify Store to Mobile App",
    description:
      "Native or cross-platform mobile apps connected with an existing Shopify store, catalog, cart and customer accounts.",
  },
];

// 5. End-to-End Services for the Mobile Product Lifecycle (ThemeCustomizationServicesSection green)
export const mobileAppLifecycleServicesCopy = {
  eyebrow: "Mobile App Development Services",
  heading: "End-to-End Services for the Mobile Product Lifecycle.",
  description:
    "From product definition through development, integrations, QA and ongoing updates, our team can support the complete mobile product lifecycle or join at the stage where you need additional capability.",
};

export const mobileAppLifecycleServicesBoxes: readonly Omit<ThemeCustomizationBox, "icon">[] = [
  {
    title: "Product Discovery, Wireframes & UI/UX",
    description:
      "User flows, wireframes, interaction design and mobile UI created for clarity, speed and touch interaction.",
  },
  {
    title: "iOS App Development",
    description:
      "Native applications for iPhone and iPad using Swift and SwiftUI, built around Apple platform standards.",
  },
  {
    title: "Android App Development",
    description:
      "Native Android applications using Kotlin and modern Android architecture across phones and tablets.",
  },
  {
    title: "Cross-Platform App Development",
    description:
      "Shared codebases using React Native or Flutter when cross-platform delivery fits the product and roadmap.",
  },
  {
    title: "Backend, APIs & Integrations",
    description:
      "Custom APIs, third-party integrations, authentication, push notifications, payment gateways and database architecture.",
  },
  {
    title: "QA, App Store / Play Store Launch & Support",
    description:
      "Device testing, performance verification, App Store / Google Play release handling and post-launch iteration.",
  },
];

// 6. Architecture & Technology (AiEmpoweredDeliverySection 2)
export const mobileAppTechStack: AiEmpoweredDeliveryContent = {
  eyebrow: "Architecture & Technology",
  heading: "Native or Cross-Platform? We Choose Around the Product.",
  description:
    "Some applications benefit from fully native development; others gain speed and maintainability from a shared cross-platform foundation. We assess device capabilities, performance, integrations, roadmap and budget before selecting the architecture.",
  tools: [
    {
      name: "iOS",
      description: "Swift · SwiftUI",
    },
    {
      name: "Android",
      description: "Kotlin · Jetpack Compose",
    },
    {
      name: "React Native",
      description: "Shared iOS + Android foundation",
    },
    {
      name: "Flutter",
      description: "Multi-platform application framework",
    },
  ],
};

// 7. Our App Development Process (ShopifyMigrationNumberedGridSection)
export const mobileAppProcessCopy = {
  eyebrow: "Our App Development Process",
  heading: "From Product Definition to Release and Ongoing Iteration.",
  description:
    "A clear delivery process keeps product, design, engineering and QA aligned as the application moves toward production.",
};

export const mobileAppProcessSteps: readonly NumberedGridItem[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Users, goals, workflows, integrations and requirements.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Platform strategy, data, APIs and technical approach.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Flows, wireframes, UI system and prototypes.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "Mobile frontend, backend services and business logic.",
  },
  {
    number: "05",
    title: "QA & Release",
    description:
      "Device testing, integrations and store readiness.",
  },
  {
    number: "06",
    title: "Improve",
    description:
      "Maintenance, OS updates and roadmap work.",
  },
];

// 8. Portfolio (ShopifyMobileAppWorkSection)
export const mobileAppPortfolio: MobileAppWorkContent = {
  eyebrow: "Portfolio",
  heading: "Applications Delivered Across iOS, Android and Mobile Commerce.",
  description:
    "Selected mobile applications delivered by our team across consumer, service and ecommerce experiences. Explore our portfolio for more project examples and platform details.",
  items: shopifyMobileAppExploreWork.items,
  ctaLabel: "View our work",
  ctaHref: "/our-work",
  ctaAriaLabel: "Dynamic Dreamz - View our work",
};

// 9. Engagement & Pricing (PricingTableSection)
export const mobileAppPricing: PricingEngagementContent = {
  eyebrow: "Engagement & Pricing",
  heading: "Choose the Delivery Model Around Your App Roadmap.",
  description:
    "New applications are normally scoped after discovery. Dedicated capacity and post-launch support are available when the product needs continuous development.",
  items: [
    {
      label: "Project-Based",
      badge: "Custom App Development",
      price: "Custom Quote",
      description:
        "For a defined mobile product with agreed design, application features, APIs, QA and release scope.",
      bullets: [
        "Discovery & architecture",
        "UI/UX + development",
        "Backend & integrations",
        "QA & release support",
      ],
      ctaLabel: "Request a Quote",
      ctaHref: "/request-quote",
    },
    {
      label: "Dedicated Developer / Team",
      badge: "Ongoing Product Capacity",
      price: "From $2,000/month",
      description:
        "For businesses that need steady mobile or full-stack development capacity and team continuity.",
      bullets: [
        "Dedicated development capacity",
        "Long-term roadmap delivery",
        "Team continuity",
        "Full-stack support when needed",
      ],
      ctaLabel: "Discuss Dedicated Capacity",
      ctaHref: "/request-quote",
    },
    {
      label: "Post-Launch",
      badge: "Maintenance & Enhancements",
      price: "$20/hour",
      description:
        "For releases, OS updates, fixes, integrations, analytics and feature improvements after launch.",
      bullets: [
        "App updates",
        "New features",
        "Bug fixes & performance",
        "Release support",
      ],
      ctaLabel: "Discuss Support",
      ctaHref: "/request-quote",
    },
  ],
};

// 10. Why Dynamic Dreamz (WhyChooseShopifyMigrationSection)
export const mobileAppWhyChooseCopy = {
  eyebrow: "Why Dynamic Dreamz",
  heading: "Mobile Development Backed by a Broader Technology Team.",
  description:
    "Mobile apps rarely live in isolation. Our in-house teams can support UI/UX, backend APIs, ecommerce, full-stack development, QA and ongoing maintenance around the application.",
  items: [
    {
      description:
        "Designers and developers work together from flows and prototypes through implementation.",
    },
    {
      description:
        "APIs, authentication, databases, business systems and admin tools can stay with the same delivery team.",
    },
    {
      description:
        "Important application journeys are tested across relevant devices, integrations and release conditions.",
    },
    {
      description:
        "Continue with OS changes, releases, new features, integrations and product evolution after launch.",
    },
  ],
  partnerHeading: "20+ Years of Ecommerce Delivery",
  partnerDescription:
    "Dynamic Dreamz combines long-term web and ecommerce experience with a broader 150+ expert in-house team and more than 5,000 delivered projects.",
  partnerLogo: "/assets/proof/shopify-platinum-partner.svg",
  partnerLogoAlt: "Dynamic Dreamz - Shopify Platinum Partner",
  partnerLink: {
    label: "About Dynamic Dreamz",
    href: "/about-us",
  },
  stats: [
    { value: "20+", label: "Years of Experience" },
    { value: "150+", label: "Experts" },
    { value: "5k+", label: "projects delivered" },
    { value: "2.5k+", label: "Verified 5 star Reviews" },
  ],
};

// 11. Client Stories (HappyClientSection)
export const mobileAppTestimonialsCopy = {
  eyebrow: "Client Stories",
  heading: "Don't Just Take Our Word For It",
  description:
    "Hear directly from the clients who have worked with Dynamic Dreamz across Shopify, ecommerce and long-term development engagements.",
};

// 12. FAQ Section
export const mobileAppFaqCopy = {
  eyebrow: "Mobile App Development Services FAQ",
  heading: "Frequently Asked Questions",
  description:
    "Direct answers about technology, custom utility apps, ecommerce, integrations, release and ongoing development.",
};

export const mobileApplicationDevelopmentFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What types of mobile apps does Dynamic Dreamz develop?",
    answer:
      "We develop custom consumer apps, business and utility apps, internal tools, booking and service applications, marketplaces, ecommerce apps and Shopify-connected iOS and Android applications. The scope can include UI/UX, backend APIs, integrations, QA, store release and ongoing development.",
  },
  {
    question: "Do you only build ecommerce and Shopify mobile apps?",
    answer:
      "No. Ecommerce and Shopify mobile apps are one part of our mobile capability. We also build custom utility apps, operational tools, content and membership experiences, service applications, marketplaces and other business-specific mobile software.",
  },
  {
    question: "Can you build apps for both iOS and Android?",
    answer:
      "Yes. We can deliver iOS and Android applications using native development or a shared React Native or Flutter foundation where cross-platform development is appropriate.",
  },
  {
    question:
      "How do you decide between native and cross-platform development?",
    answer:
      "We consider the required device features, performance expectations, interface complexity, integrations, long-term roadmap, release strategy and budget. Native development can be useful for deeper platform-specific requirements, while React Native or Flutter can reduce duplicated work across iOS and Android.",
  },
  {
    question:
      "Can you turn an existing website or Shopify store into a mobile app? +",
    answer:
      "Yes. We can use the existing website or Shopify store as the business and content foundation while designing a mobile-specific experience. For Shopify, products, customer accounts, cart, checkout and supported third-party systems can be connected according to the selected architecture.",
  },
  {
    question:
      "Can you build the backend and APIs as well as the mobile app? +",
    answer:
      "Yes. Our mobile and full-stack teams can build or integrate backend services, APIs, authentication, databases, admin tools and third-party systems required by the application.",
  },
  {
    question: "Do you help with Apple App Store and Google Play release?",
    answer:
      "Yes. We can prepare the mobile application for release, support testing and store-submission requirements, and help with subsequent application updates.",
  },
  {
    question: "Do you provide ongoing mobile app support?",
    answer:
      "Yes. Ongoing support can cover bug fixes, OS compatibility updates, new features, integrations, analytics changes, performance improvements and future app releases.",
  },
];

// Clean questions for schema (without trailing +)
export const mobileApplicationDevelopmentSchemaFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What types of mobile apps does Dynamic Dreamz develop?",
    answer:
      "We develop custom consumer apps, business and utility apps, internal tools, booking and service applications, marketplaces, ecommerce apps and Shopify-connected iOS and Android applications. The scope can include UI/UX, backend APIs, integrations, QA, store release and ongoing development.",
  },
  {
    question: "Do you only build ecommerce and Shopify mobile apps?",
    answer:
      "No. Ecommerce and Shopify mobile apps are one part of our mobile capability. We also build custom utility apps, operational tools, content and membership experiences, service applications, marketplaces and other business-specific mobile software.",
  },
  {
    question: "Can you build apps for both iOS and Android?",
    answer:
      "Yes. We can deliver iOS and Android applications using native development or a shared React Native or Flutter foundation where cross-platform development is appropriate.",
  },
  {
    question:
      "How do you decide between native and cross-platform development?",
    answer:
      "We consider the required device features, performance expectations, interface complexity, integrations, long-term roadmap, release strategy and budget. Native development can be useful for deeper platform-specific requirements, while React Native or Flutter can reduce duplicated work across iOS and Android.",
  },
  {
    question:
      "Can you turn an existing website or Shopify store into a mobile app?",
    answer:
      "Yes. We can use the existing website or Shopify store as the business and content foundation while designing a mobile-specific experience. For Shopify, products, customer accounts, cart, checkout and supported third-party systems can be connected according to the selected architecture.",
  },
  {
    question:
      "Can you build the backend and APIs as well as the mobile app?",
    answer:
      "Yes. Our mobile and full-stack teams can build or integrate backend services, APIs, authentication, databases, admin tools and third-party systems required by the application.",
  },
  {
    question: "Do you help with Apple App Store and Google Play release?",
    answer:
      "Yes. We can prepare the mobile application for release, support testing and store-submission requirements, and help with subsequent application updates.",
  },
  {
    question: "Do you provide ongoing mobile app support?",
    answer:
      "Yes. Ongoing support can cover bug fixes, OS compatibility updates, new features, integrations, analytics changes, performance improvements and future app releases.",
  },
];

// Aliases for backward compatibility if any imports exist
export const mobileApplicationDevelopmentHero = mobileAppHero;
export const mobileApplicationDevelopmentBrands = mobileAppBrands;
export const mobileApplicationDevelopmentOffers = mobileAppLifecycleServicesBoxes;
