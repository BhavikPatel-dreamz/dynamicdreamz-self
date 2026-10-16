import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MobileAppHeroContent } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-hero-section";
import type { AiEmpoweredDeliveryContent } from "@/components/sections/ai-empowered-delivery-section";
import type { ThemeCustomizationBox } from "@/components/sections/theme-customization-services-section";
import type { NumberedGridItem } from "@/components/sections/shopify-migration/shopify-migration-numbered-grid-section";
import type { MobileAppWorkContent } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-work-section";
import type { PricingEngagementContent } from "@/components/sections/shopify-plus-agency/pricing-table-section";

// 1. Hero
export const crossPlatformAppDevelopmentHero: MobileAppHeroContent = {
  eyebrows: ["Established in 2006"],
  title: "Custom Cross-Platform App Development",
  titleAccent: "Services",
  description:
    "Dynamic Dreamz builds custom cross-platform applications for iOS and Android using React Native and Flutter when a shared application foundation is the right fit. We develop business utilities, consumer products, service apps, marketplaces and ecommerce experiences, adding platform-specific code or native modules where deeper iOS or Android functionality is required.",
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
export const crossPlatformAppDevelopmentBrands: readonly ClientLogoSliderItem[] = [
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

export const crossPlatformAppDevelopmentBrandsCopy = {
  heading: "Trusted by\nLeading Brands",
  ariaLabel:
    "Brands that trust Dynamic Dreamz for cross-platform app development",
};

// 3. One Product · Two Mobile Platforms (AiEmpoweredDeliverySection)
export const crossPlatformAppDevelopmentWorkflowDelivery: AiEmpoweredDeliveryContent =
  {
    eyebrow: "One Product · Two Mobile Platforms",
    heading:
      "Share the Foundation Without Forcing Both Platforms to Behave Identically.",
    description:
      "Cross-platform development can reduce duplicated work across iOS and Android, but strong implementation still respects each platform. We reuse common application logic where it makes sense and introduce platform-specific components, permissions or native modules when the product requires them.",
    cta: {
      label: "Discuss Your App Requirement",
      href: "/request-quote",
    },
    tools: [
      {
        name: "React Native Apps",
        description:
          "Build native-rendered iOS and Android experiences with a shared React-based application foundation.",
      },
      {
        name: "Flutter Apps",
        description:
          "Create responsive multi-platform interfaces with Flutter when its architecture fits the product.",
      },
      {
        name: "Native Integrations",
        description:
          "Add platform-specific modules for device APIs, SDKs or functionality that cannot remain fully shared.",
      },
      {
        name: "Existing App Modernization",
        description:
          "Extend, refactor or modernize an existing mobile product toward a maintainable cross-platform architecture.",
      },
    ],
  };

// 4. What We Build (ThemeCustomizationServicesSection yellow)
export const crossPlatformAppDevelopmentWhatWeBuildCopy = {
  eyebrow: "What We Build",
  heading: "Cross-Platform Does Not Mean Ecommerce-Only.",
  description:
    "React Native and Flutter can support a broad range of products, from business utilities and mobile services to customer apps and connected commerce.",
};

export const crossPlatformAppDevelopmentWhatWeBuildBoxes: readonly Omit<
  ThemeCustomizationBox,
  "icon"
>[] = [
  {
    title: "Business & Utility Apps",
    description:
      "Operational tools, staff apps, calculators, dashboards, service workflows and task-driven products.",
  },
  {
    title: "Consumer Products",
    description:
      "Lifestyle, content, wellness, community, membership and customer-facing applications.",
  },
  {
    title: "Booking & On-Demand Apps",
    description:
      "Appointments, service requests, location-aware flows, notifications and account experiences.",
  },
  {
    title: "Marketplace Apps",
    description:
      "Multi-user products for customers, vendors, providers or other participant groups.",
  },
  {
    title: "Ecommerce Apps",
    description:
      "Mobile shopping experiences with catalog, customer, cart, checkout and retention integrations.",
  },
  {
    title: "Shopify Mobile Apps",
    description:
      "React Native or Flutter applications connected to Shopify when custom commerce journeys are required.",
  },
];

// 5. End-to-End Services for the Mobile Product Lifecycle (ThemeCustomizationServicesSection green)
export const crossPlatformAppDevelopmentLifecycleServicesCopy = {
  eyebrow: "Cross-Platform App Development Services",
  heading: "End-to-End Services for the Mobile Product Lifecycle.",
  description:
    "From product definition through development, integrations, QA and ongoing updates, our team can support the complete mobile product lifecycle or join at the stage where you need additional capability.",
};

export const crossPlatformAppDevelopmentLifecycleServicesBoxes: readonly Omit<
  ThemeCustomizationBox,
  "icon"
>[] = [
  {
    title: "React Native App Development",
    description:
      "Build iOS and Android applications with a shared React Native foundation and platform-specific code where needed.",
  },
  {
    title: "Flutter App Development",
    description:
      "Develop cross-platform applications using Flutter for responsive, maintainable multi-platform UI.",
  },
  {
    title: "Prototyping, Wireframes & UI/UX",
    description:
      "Define journeys, interfaces and interactive prototypes before full application development.",
  },
  {
    title: "Backend & API Development",
    description:
      "Build or connect authentication, data services, payments, notifications, analytics and business-system integrations.",
  },
  {
    title: "Native Module & SDK Integration",
    description:
      "Connect platform-specific SDKs and device capabilities such as maps, camera, location, biometrics or notifications.",
  },
  {
    title: "QA, Maintenance & App Updates",
    description:
      "Test across iOS and Android devices, support releases and continue with upgrades, fixes and roadmap development.",
  },
];

// 6. Architecture & Technology (AiEmpoweredDeliverySection)
export const crossPlatformAppDevelopmentTechStack: AiEmpoweredDeliveryContent = {
  eyebrow: "Architecture & Technology",
  heading: "React Native or Flutter? The Framework Follows the Requirement.",
  description:
    "React Native supports platform-specific code where needed, while Flutter provides a multi-platform application framework from a single codebase. We select the approach after reviewing product experience, existing codebase, native SDK needs and long-term ownership.",
  tools: [
    {
      name: "React Native",
      description: "React-based mobile application framework",
    },
    {
      name: "Flutter",
      description: "Multi-platform application framework",
    },
    {
      name: "Native Modules",
      description: "iOS / Android-specific features",
    },
    {
      name: "Backend APIs",
      description: "Data, authentication & integrations",
    },
  ],
};

// 7. Our App Development Process (ShopifyMigrationNumberedGridSection)
export const crossPlatformAppDevelopmentProcessCopy = {
  eyebrow: "Our App Development Process",
  heading: "From Product Definition to Release and Ongoing Iteration.",
  description:
    "A clear delivery process keeps product, design, engineering and QA aligned as the application moves toward production.",
};

export const crossPlatformAppDevelopmentProcessSteps: readonly NumberedGridItem[] = [
  {
    number: "01",
    title: "Discover",
    description: "Users, goals, workflows, integrations and requirements.",
  },
  {
    number: "02",
    title: "Architect",
    description: "Platform strategy, data, APIs and technical approach.",
  },
  {
    number: "03",
    title: "Design",
    description: "Flows, wireframes, UI system and prototypes.",
  },
  {
    number: "04",
    title: "Develop",
    description: "Mobile frontend, backend services and business logic.",
  },
  {
    number: "05",
    title: "QA & Release",
    description: "Device testing, integrations and store readiness.",
  },
  {
    number: "06",
    title: "Improve",
    description: "Maintenance, OS updates and roadmap work.",
  },
];

// 8. Portfolio (ShopifyMobileAppWorkSection)
export const crossPlatformAppDevelopmentPortfolio: MobileAppWorkContent = {
  eyebrow: "Portfolio",
  heading:
    "Applications Delivered Across iOS, Android and Mobile Commerce.",
  description:
    "Selected mobile applications delivered by our team across consumer, service and ecommerce experiences. Explore our portfolio for more project examples and platform details.",
  items: [
    {
      id: "bombay-shirt-company",
      name: "Bombay Shirt Comapny",
      image: "/assets/our-work/projects/bombay-shirt-company-app.webp",
      imageAlt: "Bombay Shirt Comapny Image",
      href: "https://play.google.com/store/apps/details?id=com.coffye.ndufju",
    },
    {
      id: "llama-an-app-by-cwrb",
      name: "Llama – An App by CWRB",
      image: "/assets/our-work/projects/llama-an-app-by-cwrb.webp",
      imageAlt: "Llama – An App by CWRB Image",
      href: "https://play.google.com/store/apps/details?id=com.cwrb.app&hl=en&gl=US",
    },
    {
      id: "renee-cosmetics",
      name: "Renee Cosmetics",
      image: "/assets/our-work/projects/renee-cosmetics-app.webp",
      imageAlt: "Renee Cosmetics Image",
      href: "https://apps.apple.com/in/app/renee-cosmetics/id6449245534",
    },
    {
      id: "supertails",
      name: "Supertails",
      image: "/assets/our-work/projects/supertails-app.webp",
      imageAlt: "Supertails Image",
      href: "https://play.google.com/store/apps/details?id=com.coffye.dqiabm",
    },
  ],
  ctaLabel: "View our work",
  ctaHref: "/our-work",
  ctaAriaLabel: "Dynamic Dreamz - View our work",
  secondaryCta: {
    label: "View Pricing",
    href: "#our_white_label_pricing",
    ariaLabel: "Dynamic Dreamz - View Pricing",
  },
};

// 9. Engagement & Pricing (PricingTableSection)
export const crossPlatformAppDevelopmentPricing: PricingEngagementContent = {
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
export const crossPlatformAppDevelopmentWhyChooseCopy = {
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
export const crossPlatformAppDevelopmentTestimonialsCopy = {
  eyebrow: "Client Stories",
  heading: "Don't Just Take Our Word For It",
  description:
    "Our client's satisfaction is the real test of our success. Discover how our specialized app development services have enabled companies to grow in the digital economy.",
};

// 12. FAQ Section
export const crossPlatformAppDevelopmentFaqCopy = {
  eyebrow: "Cross-Platform App Development Services FAQ",
  heading: "Frequently Asked Questions",
  description:
    "Direct answers about technology, custom utility apps, ecommerce, integrations, release and ongoing development.",
};

export const crossPlatformAppDevelopmentFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What is cross-platform app development?",
    answer:
      "Cross-platform app development creates applications for more than one mobile operating system from a largely shared codebase. Dynamic Dreamz works with React Native and Flutter for iOS and Android, adding platform-specific code where required.",
  },
  {
    question:
      "When should I choose cross-platform instead of separate native apps?",
    answer:
      "Cross-platform development can be a strong fit when iOS and Android share most product flows and you want to reduce duplicated development and maintenance. Separate native development can be preferable when the product relies heavily on platform-specific experiences, advanced device capabilities or independent native roadmaps.",
  },
  {
    question: "Do you develop both React Native and Flutter apps?",
    answer:
      "Yes. Our cross-platform services include React Native and Flutter. We choose the framework according to application requirements, existing codebase, native integration needs and the long-term product roadmap.",
  },
  {
    question: "Can a cross-platform app use native iOS or Android features?",
    answer:
      "Yes. React Native and Flutter can integrate with platform-specific code and native APIs. We can add native components or modules when device or SDK requirements cannot remain fully shared.",
  },
  {
    question:
      "Can you build custom utility or business apps with React Native or Flutter?",
    answer:
      "Yes. Cross-platform development is suitable for many business utilities, internal tools, service apps, booking flows, consumer products and marketplaces—not only ecommerce applications.",
  },
  {
    question:
      "Can you build a Shopify mobile app using React Native or Flutter?",
    answer:
      "Yes. Where appropriate, we can build a custom mobile app connected to Shopify products, customer journeys, cart, checkout and supported third-party systems. Shopify mobile commerce is one cross-platform use case, not the only one.",
  },
  {
    question: "Can you take over or upgrade an existing cross-platform app?",
    answer:
      "Yes. We can review an existing React Native or Flutter application, assess its architecture and dependencies, then scope upgrades, refactoring, feature additions or platform-version updates.",
  },
  {
    question: "Do you provide app-store launch and ongoing maintenance?",
    answer:
      "Yes. We support iOS and Android testing, release preparation, store submissions, updates, bug fixes and ongoing feature development.",
  },
];

// Clean questions for schema (without the trailing toggle "+")
export const crossPlatformAppDevelopmentSchemaFaqs: readonly FaqAccordionItem[] =
  crossPlatformAppDevelopmentFaqs.map((item) => ({
    question: (typeof item.question === "string" ? item.question : item.question.join(" ")).replace(/\s*\+\s*$/, ""),
    answer: item.answer,
  }));

// Schema offer catalog (lifecycle service capabilities)
export const crossPlatformAppDevelopmentSchemaOffers = [
  ...crossPlatformAppDevelopmentWhatWeBuildBoxes.map((box) => ({
    title: box.title,
    description: box.description ?? "",
  })),
  ...crossPlatformAppDevelopmentLifecycleServicesBoxes.map((box) => ({
    title: box.title,
    description: box.description ?? "",
  })),
];
