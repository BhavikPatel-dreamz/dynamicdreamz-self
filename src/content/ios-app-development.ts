import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MobileAppHeroContent } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-hero-section";
import type { AiEmpoweredDeliveryContent } from "@/components/sections/ai-empowered-delivery-section";
import type { ThemeCustomizationBox } from "@/components/sections/theme-customization-services-section";
import type { NumberedGridItem } from "@/components/sections/shopify-migration/shopify-migration-numbered-grid-section";
import type { MobileAppWorkContent } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-work-section";
import type { PricingEngagementContent } from "@/components/sections/shopify-plus-agency/pricing-table-section";

// 1. Hero
export const iosAppDevelopmentHero: MobileAppHeroContent = {
  eyebrows: ["Established in 2006"],
  title: "Custom iOS App Development",
  titleAccent: "Services",
  description:
    "Dynamic Dreamz develops custom iOS applications for businesses, startups and digital products. We build utility apps, customer-facing products, booking and service applications, marketplaces and ecommerce experiences, with UI/UX, backend integrations, QA, App Store release and ongoing development supported by one team.",
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
      height: 326,
    },
    {
      src: "/assets/services/shopify-mobile-app-development/hero/slide-kalki.webp",
      alt: "Kalki",
      width: 150,
      height: 326,
    },
  ],
  frameImage: {
    src: "/assets/services/shopify-mobile-app-development/hero/phone-frame.png",
    alt: "",
    width: 220,
    height: 466,
  },
};

// 2. Client Brands Strip
export const iosAppDevelopmentBrandsCopy = {
  heading: "Trusted by\nLeading Brands",
  ariaLabel: "Trusted by Leading Brands",
};

export const iosAppDevelopmentBrands: readonly ClientLogoSliderItem[] = [
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
    src: "/assets/clients/nekter-colored.svg",
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
];

// 3. Custom iOS Development (Workflow Delivery)
export const iosAppDevelopmentWorkflowDelivery: AiEmpoweredDeliveryContent = {
  eyebrow: "Custom iOS Development",
  heading: "Build for the Apple Experience Your Product Actually Needs.",
  description:
    "Our iOS work is not limited to shopping applications. We can design and develop standalone utility apps, business tools, customer portals, service experiences and commerce apps, using native Apple technologies or an appropriate cross-platform architecture when the wider roadmap also includes Android.",
  cta: {
    label: "Discuss Your App Requirement",
    href: "/request-quote",
  },
  tools: [
    {
      name: "New Native iOS App",
      description:
        "Product discovery, UI/UX and development for new iPhone and iPad applications.",
    },
    {
      name: "Business Utility App",
      description:
        "Task-driven iOS products for teams, customers, operations or field workflows.",
    },
    {
      name: "Existing iOS App Upgrade",
      description:
        "Modernize interfaces, add features, improve performance and update dependencies.",
    },
    {
      name: "Shopify / Ecommerce App",
      description:
        "Build an iOS shopping experience connected to an existing commerce platform.",
    },
  ],
};

// 4. What We Build
export const iosAppDevelopmentWhatWeBuildCopy = {
  eyebrow: "What We Build",
  heading: "iOS Apps for Commerce, Services and Everyday Utility.",
  description:
    "The right iOS experience depends on what users need to accomplish. We structure the application around those journeys rather than around a predefined ecommerce template.",
};

export const iosAppDevelopmentWhatWeBuildBoxes: readonly ThemeCustomizationBox[] =
  [
    {
      title: "Business & Utility Apps",
      description:
        "Operational tools, calculators, internal apps, dashboards and workflow-focused iOS products.",
    },
    {
      title: "Consumer Applications",
      description:
        "Lifestyle, content, community, membership, wellness and customer-facing mobile applications.",
    },
    {
      title: "Booking & Service Apps",
      description:
        "Appointments, account management, service requests, reminders and customer communication.",
    },
    {
      title: "Marketplace & Platform Apps",
      description:
        "Buyer/seller interactions, listings, multi-role access, profiles and search experiences.",
    },
    {
      title: "Ecommerce Apps",
      description:
        "Product discovery, search, accounts, checkout, push notifications and customer loyalty on iOS.",
    },
    {
      title: "Shopify iOS Apps",
      description:
        "Turn Shopify stores into dedicated iOS apps with native UI and API integrations.",
    },
  ];

// 5. End-to-End Services for the Mobile Product Lifecycle
export const iosAppDevelopmentLifecycleServicesCopy = {
  eyebrow: "iOS App Development Services",
  heading: "End-to-End Services for the Mobile Product Lifecycle.",
  description:
    "From product definition through development, integrations, QA and ongoing updates, our team can support the complete mobile product lifecycle or join at the stage where you need additional capability.",
};

export const iosAppDevelopmentLifecycleServicesBoxes: readonly ThemeCustomizationBox[] =
  [
    {
      title: "Prototyping, Wireframes & Mockups",
      description:
        "Visualize application flows and interface direction before committing to development.",
    },
    {
      title: "Native iOS App Development",
      description:
        "Develop iPhone and iPad applications using Swift and SwiftUI with clean architecture.",
    },
    {
      title: "Mobile UI/UX Design",
      description:
        "Design clear, responsive iOS interfaces around product goals and user expectations.",
    },
    {
      title: "Backend & API Development",
      description:
        "Build and integrate the APIs, databases, authentication and admin tools your app requires.",
    },
    {
      title: "App Testing & Quality Assurance",
      description:
        "Structured manual and automated testing across real devices, network states and edge cases.",
    },
    {
      title: "App Maintenance & Support",
      description:
        "Keep dependencies fresh, resolve defects, improve performance and support new iOS updates.",
    },
    {
      title: "Existing App Customization",
      description:
        "Add features, refactor existing codebases, improve UI and resolve legacy technical debt.",
    },
    {
      title: "Shopify & Cross-Platform Extensions",
      description:
        "Connect to Shopify Storefront APIs or extend cross-platform roadmaps where appropriate.",
    },
  ];

// 6. Architecture & Technology
export const iosAppDevelopmentTechStack: AiEmpoweredDeliveryContent = {
  eyebrow: "Architecture & Technology",
  heading: "Modern Apple Development with Swift and SwiftUI.",
  description:
    "Apple positions SwiftUI as its modern declarative framework for building interfaces across Apple platforms. We use Swift, SwiftUI and the Apple toolchain where they fit the application, while keeping compatibility and integration requirements in view.",
  tools: [
    {
      name: "Swift",
      description: "Native Apple development",
    },
    {
      name: "SwiftUI",
      description: "Modern declarative Apple UI",
    },
    {
      name: "Xcode",
      description: "Build, test & release",
    },
    {
      name: "APIs & Backend",
      description: "Authentication, data & integrations",
    },
  ],
};

// 7. Our App Development Process
export const iosAppDevelopmentProcessCopy = {
  eyebrow: "Our App Development Process",
  heading: "From Product Definition to Release and Ongoing Iteration.",
  description:
    "A clear delivery process keeps product, design, engineering and QA aligned as the application moves toward production.",
};

export const iosAppDevelopmentProcessSteps: readonly NumberedGridItem[] = [
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

// 8. Portfolio
export const iosAppDevelopmentPortfolio: MobileAppWorkContent = {
  eyebrow: "Portfolio",
  heading: "Applications Delivered Across iOS, Android and Mobile Commerce.",
  description:
    "Selected mobile applications delivered by our team across consumer, service and ecommerce experiences. Explore our portfolio for more project examples and platform details.",
  ctaLabel: "VIEW OUR WORK",
  ctaHref: "/our-work",
  ctaAriaLabel: "VIEW OUR WORK",
  secondaryCta: {
    label: "View Pricing",
    href: "#our_white_label_pricing",
    ariaLabel: "View Pricing",
  },
  items: [
    {
      name: "BellaVita Organic",
      category: "IOS APP DEVELOPMENT",
      image: "/assets/our-work/projects/bella-vita.webp",
      imageAlt: "BellaVita Organic Image",
      href: "https://apps.apple.com/in/app/bellavita-online-shopping-app/id1588406681",
    },
    {
      name: "Renee Cosmetics",
      category: "IOS APP DEVELOPMENT",
      image: "/assets/our-work/projects/renee-cosmetics-app.webp",
      imageAlt: "Renee Cosmetics Image",
      href: "https://apps.apple.com/in/app/renee-cosmetics/id6449245534",
    },
    {
      name: "Rentastic",
      category: "IOS APP DEVELOPMENT",
      image: "/assets/our-work/projects/rentastic.webp",
      imageAlt: "Rentastic Image",
      href: "https://apps.apple.com/us/app/rentastic/id1510019160",
    },
    {
      name: "Journal X",
      category: "IOS APP DEVELOPMENT",
      image: "/assets/our-work/projects/journal-x-app.webp",
      imageAlt: "Journal X Image",
      href: "https://apps.apple.com/us/app/journal-x-my-diary-with-lock/id1360257373",
    },
  ],
};

// 9. Engagement & Pricing
export const iosAppDevelopmentPricing: PricingEngagementContent = {
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
        "For ongoing feature delivery, product iterations, backend integration or roadmap acceleration.",
      bullets: [
        "Dedicated iOS engineers",
        "Direct collaboration",
        "Sprint-based planning",
        "Full-stack team support",
      ],
      ctaLabel: "Discuss Team Capacity",
      ctaHref: "/request-quote",
    },
    {
      label: "Post-Launch",
      badge: "Maintenance & Enhancements",
      price: "$20/hour",
      description:
        "For released apps needing bug fixes, dependency updates, OS compatibility and small additions.",
      bullets: [
        "OS & dependency updates",
        "Bug fixes & improvements",
        "Performance checks",
        "No long-term lock-in",
      ],
      ctaLabel: "Request Support Hours",
      ctaHref: "/request-quote",
    },
  ],
};

// 10. Why Dynamic Dreamz
export const iosAppDevelopmentWhyChooseCopy = {
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

// 11. Client Stories
export const iosAppDevelopmentTestimonialsCopy = {
  eyebrow: "Client Stories",
  heading: "Don't Just Take Our Word For It",
  description:
    "We have faith in our work, but what truly matters is the outcomes we serve our clients.Happy clients make happy stories. Check out how our services empower them to evolve.",
};

// 12. FAQs
export const iosAppDevelopmentFaqCopy = {
  eyebrow: "iOS App Development Services FAQ",
  heading: "Frequently Asked Questions",
  description:
    "Direct answers about technology, custom utility apps, ecommerce, integrations, release and ongoing development.",
};

export const iosAppDevelopmentFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What types of iOS apps does Dynamic Dreamz develop?",
    answer:
      "We develop custom iPhone and iPad applications including utility apps, business tools, consumer products, booking and service apps, marketplaces, ecommerce apps and Shopify-connected mobile experiences.",
  },
  {
    question: "Do you develop native iOS apps with Swift and SwiftUI?",
    answer:
      "Yes. We can build native iOS applications using Swift and SwiftUI when native Apple development is appropriate for the product. We can also use a cross-platform architecture when the roadmap requires both iOS and Android.",
  },
  {
    question: "Can you develop custom utility or internal business apps for iOS?",
    answer:
      "Yes. We can build task-driven utility apps, internal workflows, dashboards, field tools, service applications and other business-specific iOS software, including required APIs and admin systems.",
  },
  {
    question: "Can you convert an existing website or Shopify store into an iOS app?",
    answer:
      "Yes. We can design a mobile-specific iOS experience connected to an existing website, backend or Shopify store. The app does not need to simply copy the website; the mobile journey can be redesigned around the use case.",
  },
  {
    question: "Can you integrate third-party APIs and iOS device capabilities?",
    answer:
      "Yes. Depending on the project, we can integrate external APIs and supported iOS capabilities such as notifications, location, camera, authentication, analytics, payments and other SDKs.",
  },
  {
    question: "Do you help with App Store submission?",
    answer:
      "Yes. We support testing, build preparation and the App Store submission process. Final approval remains subject to Apple review and current App Store requirements.",
  },
  {
    question: "Can you upgrade or maintain an existing iOS application?",
    answer:
      "Yes. We can review the existing codebase, add features, update dependencies, improve UI or performance, resolve bugs and support newer iOS versions.",
  },
  {
    question: "Do you build the backend for iOS apps too?",
    answer:
      "Yes. Our full-stack team can build or integrate APIs, databases, authentication, admin tools and third-party systems required by the iOS application.",
  },
];

// Schema helpers
export const iosAppDevelopmentSchemaOffers =
  iosAppDevelopmentLifecycleServicesBoxes.map((box) => ({
    title: box.title,
    description: box.description ?? "",
  }));

export const iosAppDevelopmentSchemaFaqs = iosAppDevelopmentFaqs.map(
  (item) => ({
    question: item.question,
    answer: item.answer,
  }),
);
