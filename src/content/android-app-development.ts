import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MobileAppHeroContent } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-hero-section";
import type { AiEmpoweredDeliveryContent } from "@/components/sections/ai-empowered-delivery-section";
import type { ThemeCustomizationBox } from "@/components/sections/theme-customization-services-section";
import type { NumberedGridItem } from "@/components/sections/shopify-migration/shopify-migration-numbered-grid-section";
import type { MobileAppWorkContent } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-work-section";
import type { PricingEngagementContent } from "@/components/sections/shopify-plus-agency/pricing-table-section";

// 1. Hero
export const androidAppDevelopmentHero: MobileAppHeroContent = {
  eyebrows: ["Established in 2006"],
  title: "Custom Android App Development",
  titleAccent: "Services",
  description:
    "Dynamic Dreamz develops custom Android applications for businesses, startups and digital products. We build utility apps, internal tools, consumer products, booking and service applications, marketplaces and ecommerce experiences—with UI/UX, backend integrations, QA, Google Play release and ongoing development supported by one team.",
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
  // Live markup ships a Shopify Platinum badge first, but the hero carries the
  // `hide-logo` class, which hides that first item and leaves these three visible.
  // The `hide-logo` rules also put the three survivors in a single equal-width
  // row on mobile, separated by vertical rules.
  mobileBadgeLayout: "row",
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
export const androidAppDevelopmentBrands: readonly ClientLogoSliderItem[] = [
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
    width: 66,
    height: 64,
  },
  {
    src: "/assets/clients/rare-rabbit.svg",
    href: "https://thehouseofrare.com/",
    alt: "Rare Rabbit Logo",
    width: 122,
    height: 84,
  },
];

export const androidAppDevelopmentBrandsCopy = {
  heading: "Trusted by\nLeading Brands",
  ariaLabel: "Trusted Brands",
};

// 3. Custom Android Development (AiEmpoweredDeliverySection)
export const androidAppDevelopmentWorkflowDelivery: AiEmpoweredDeliveryContent =
  {
    eyebrow: "Custom Android Development",
    heading: "Build an Android App Around the Job Users Need to Complete.",
    description:
      "Our Android capability extends well beyond shopping apps. We can develop custom utility software, business applications, customer products, connected service experiences and ecommerce apps, using native Kotlin development or a suitable cross-platform architecture when the roadmap includes iOS as well.",
    cta: {
      label: "Discuss Your App Requirement",
      href: "/request-quote",
    },
    tools: [
      {
        name: "New Android Product",
        description:
          "Discovery, UI/UX, architecture and development for a new Android application.",
      },
      {
        name: "Business Utility App",
        description:
          "Custom Android workflows for teams, customers, operations, field staff or service delivery.",
      },
      {
        name: "Existing Android Upgrade",
        description:
          "Add features, modernize UI, improve performance and update an existing application.",
      },
      {
        name: "Shopify / Ecommerce App",
        description:
          "Build a custom Android shopping experience connected to Shopify or another commerce platform.",
      },
    ],
  };

// 4. What We Build (ThemeCustomizationServicesSection yellow)
export const androidAppDevelopmentWhatWeBuildCopy = {
  eyebrow: "What We Build",
  heading: "Android Apps for Business Workflows and Customer Experiences.",
  description:
    "We design around user journeys, device requirements and backend systems—not around a single ecommerce template.",
};

export const androidAppDevelopmentWhatWeBuildBoxes: readonly Omit<
  ThemeCustomizationBox,
  "icon"
>[] = [
  {
    title: "Business & Utility Apps",
    description:
      "Operational tools, internal apps, calculators, dashboards and task-based Android products.",
  },
  {
    title: "Consumer Applications",
    description:
      "Lifestyle, content, community, membership and other customer-facing digital experiences.",
  },
  {
    title: "Booking & Service Apps",
    description:
      "Appointments, service requests, account management, reminders and location-driven flows.",
  },
  {
    title: "Marketplace & Platform Apps",
    description:
      "Multi-role Android products for customers, providers, vendors or other user groups.",
  },
  {
    title: "Ecommerce Apps",
    description:
      "Shopping applications with product discovery, account, cart, checkout, loyalty and retention integrations.",
  },
  {
    title: "Shopify Android Apps",
    description:
      "Custom Android shopping apps connected to Shopify and supported business systems.",
  },
];

// 5. Android App Development Services (ThemeCustomizationServicesSection green)
export const androidAppDevelopmentLifecycleServicesCopy = {
  eyebrow: "Android App Development Services",
  heading: "End-to-End Services for the Mobile Product Lifecycle.",
  description:
    "From product definition through development, integrations, QA and ongoing updates, our team can support the complete mobile product lifecycle or join at the stage where you need additional capability.",
};

export const androidAppDevelopmentLifecycleServicesBoxes: readonly Omit<
  ThemeCustomizationBox,
  "icon"
>[] = [
  {
    title: "Prototyping, Wireframes & Mockups",
    description:
      "Define application flows and interface direction before full Android development begins.",
  },
  {
    title: "Native Android App Development",
    description:
      "Build Android applications with Kotlin and Jetpack Compose when native Android is the right architecture.",
  },
  {
    title: "Android UI/UX Design",
    description:
      "Create clear, adaptive interfaces around the product and modern Android interaction patterns.",
  },
  {
    title: "Backend & API Integration",
    description:
      "Connect authentication, payments, maps, CRM, ERP, analytics, notifications and custom business systems.",
  },
  {
    title: "App Testing & Quality Assurance",
    description:
      "Test important workflows across relevant Android devices, screen sizes, OS versions and integrations.",
  },
  {
    title: "Google Play Deployment & Support",
    description:
      "Prepare release builds, support Play Store submission and continue with app updates and maintenance.",
  },
  {
    title: "Existing App Customization",
    description:
      "Upgrade an Android app, add features, improve UI or performance and update dependencies.",
  },
  {
    title: "Shopify & Cross-Platform Development",
    description:
      "Connect Android to Shopify or use React Native / Flutter when a shared iOS and Android roadmap is a better fit.",
  },
];

// 6. Architecture & Technology (AiEmpoweredDeliverySection)
export const androidAppDevelopmentTechStack: AiEmpoweredDeliveryContent = {
  eyebrow: "Architecture & Technology",
  heading: "Modern Android Development with Kotlin and Jetpack Compose.",
  description:
    "Google now describes Android as Compose-first, with Jetpack Compose as its modern declarative UI toolkit. We use Kotlin and modern Android architecture where appropriate, while React Native or Flutter remains available when the wider product benefits from a shared iOS and Android foundation.",
  tools: [
    {
      name: "Kotlin",
      description: "Modern Android development",
    },
    {
      name: "Jetpack Compose",
      description: "Declarative Android UI",
    },
    {
      name: "Android APIs",
      description: "Device & platform capabilities",
    },
    {
      name: "Backend APIs",
      description: "Data, authentication & integrations",
    },
  ],
};

// 7. Our App Development Process (ShopifyMigrationNumberedGridSection)
export const androidAppDevelopmentProcessCopy = {
  eyebrow: "Our App Development Process",
  heading: "From Product Definition to Release and Ongoing Iteration.",
  description:
    "A clear delivery process keeps product, design, engineering and QA aligned as the application moves toward production.",
};

export const androidAppDevelopmentProcessSteps: readonly NumberedGridItem[] = [
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
export const androidAppDevelopmentPortfolio: MobileAppWorkContent = {
  eyebrow: "Portfolio",
  heading: "Applications Delivered Across iOS, Android and Mobile Commerce.",
  description:
    "Selected mobile applications delivered by our team across consumer, service and ecommerce experiences. Explore our portfolio for more project examples and platform details.",
  items: [
    {
      id: "llama-an-app-by-cwrb",
      name: "Llama – An App By CWRB",
      category: "Android App Development",
      image: "/assets/our-work/projects/llama-an-app-by-cwrb.webp",
      imageAlt: "Llama – An App By CWRB Image",
      href: "https://play.google.com/store/apps/details?id=com.cwrb.app&hl=en&gl=US",
    },
    {
      id: "bombay-shirt-company",
      name: "Bombay Shirt Company",
      category: "Android App Development",
      image: "/assets/our-work/projects/bombay-shirt-company-app.webp",
      imageAlt: "Bombay Shirt Company Image",
      href: "https://play.google.com/store/apps/details?id=com.coffye.ndufju",
    },
    {
      id: "bellavita-organic",
      name: "Bellavita Organic",
      category: "Android App Development",
      image: "/assets/our-work/projects/bellavita-organic-app.webp",
      imageAlt: "Bellavita Organic Image",
      href: "https://play.google.com/store/apps/details?id=com.bellavita.shopifyapps",
    },
    {
      id: "supertails",
      name: "Supertails",
      category: "Android App Development",
      image: "/assets/our-work/projects/supertails-app.webp",
      imageAlt: "Supertails Image",
      href: "https://play.google.com/store/apps/details?id=com.coffye.dqiabm",
    },
  ],
  ctaLabel: "VIEW OUR WORK",
  ctaHref: "/our-work",
  ctaAriaLabel: "Dynamic Dreamz - VIEW OUR WORK",
  secondaryCta: {
    label: "View Pricing",
    href: "#our_white_label_pricing",
    ariaLabel: "Dynamic Dreamz - View Pricing",
  },
};

// 9. Engagement & Pricing (PricingTableSection)
export const androidAppDevelopmentPricing: PricingEngagementContent = {
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
export const androidAppDevelopmentWhyChooseCopy = {
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
export const androidAppDevelopmentTestimonialsCopy = {
  eyebrow: "Client Stories",
  heading: "Don't Just Take Our Word For It",
  description:
    "We have faith in our work, but what truly matters is the outcomes we serve our clients. <br> Happy clients make happy stories. Check out how our services empower them to evolve.",
};

// 12. FAQ Section
export const androidAppDevelopmentFaqCopy = {
  eyebrow: "Android App Development Services FAQ",
  heading: "Frequently Asked Questions",
  description:
    "Direct answers about technology, custom utility apps, ecommerce, integrations, release and ongoing development.",
};

export const androidAppDevelopmentFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What types of Android apps does Dynamic Dreamz develop?",
    answer:
      "We develop custom Android utility apps, business tools, consumer applications, booking and service apps, marketplaces, ecommerce apps and Shopify-connected mobile experiences.",
  },
  {
    question: "Do you build native Android apps with Kotlin?",
    answer:
      "Yes. We can develop native Android applications with Kotlin and modern Android UI architecture such as Jetpack Compose where it fits the project requirements.",
  },
  {
    question: "Can you build custom utility or internal Android apps?",
    answer:
      "Yes. We can develop Android applications for internal workflows, field operations, service teams, calculators, dashboards, customer utilities and other business-specific requirements.",
  },
  {
    question: "Can you build Android and iOS from the same codebase?",
    answer:
      "Yes. If a shared application foundation is appropriate, we can use React Native or Flutter for iOS and Android. If the Android product requires deeper platform-specific behavior, native Kotlin development can be the better fit.",
  },
  {
    question:
      "Can you convert a Shopify store or website into an Android app?",
    answer:
      "Yes. We can design a mobile-specific Android experience connected to Shopify or another existing backend, with supported product, account, cart, checkout and third-party integrations.",
  },
  {
    question:
      "Can you integrate Android device features and third-party APIs?",
    answer:
      "Yes. Depending on the application, we can integrate maps, location, camera, notifications, authentication, analytics, payments and other supported Android SDKs and APIs.",
  },
  {
    question: "Do you support Google Play Store submission?",
    answer:
      "Yes. We can prepare release builds and support the Google Play submission process. Final approval remains subject to Google's current Play policies and review.",
  },
  {
    question: "Can you maintain or modernize an existing Android app?",
    answer:
      "Yes. We can assess an existing codebase, update dependencies, add features, improve UI or performance, fix issues and support newer Android versions.",
  },
];

// Clean questions for schema (without the trailing toggle "+")
export const androidAppDevelopmentSchemaFaqs: readonly FaqAccordionItem[] =
  androidAppDevelopmentFaqs.map((item) => ({
    question: item.question.replace(/\s*\+\s*$/, ""),
    answer: item.answer,
  }));

// Schema offer catalog (app development capability boxes)
export const androidAppDevelopmentSchemaOffers = [
  ...androidAppDevelopmentWhatWeBuildBoxes.map((box) => ({
    title: box.title,
    description: box.description ?? "",
  })),
  ...androidAppDevelopmentLifecycleServicesBoxes.map((box) => ({
    title: box.title,
    description: box.description ?? "",
  })),
];
