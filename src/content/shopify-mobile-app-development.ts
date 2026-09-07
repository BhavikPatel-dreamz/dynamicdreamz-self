import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { PortfolioAppLink } from "@/components/ui/portfolio-project-card";
import type { WhiteLabelProcessStep } from "@/types/white-label-service";

export type HeroBadgeItem = {
  src: string;
  alt: string;
  href: string;
  width: number;
  height: number;
};

export type HeroSlideItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const shopifyMobileAppHero = {
  eyebrows: ["Established in 2006", "Shopify Platinum Partner"] as const,
  title: "Shopify Mobile App Development",
  titleAccent: "for iOS & Android",
  description:
    "Dynamic Dreamz helps Shopify brands build custom iOS and Android mobile apps from their existing Shopify store. We handle design, Shopify integration, third-party connections, launch and ongoing development.",
  primaryCta: {
    label: "Discuss your mobile app",
    href: "/book-a-discovery-call",
    ariaLabel: "Discuss your mobile app",
  },
  secondaryCta: {
    label: "see Mobile app work",
    href: "#our_work",
    ariaLabel: "see Mobile app work",
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
  ] as const satisfies readonly HeroBadgeItem[],
  frameImage: {
    src: "/assets/services/shopify-mobile-app-development/hero/phone-frame.png",
    alt: "Mobile app frame mockup",
    width: 235,
    height: 498,
  },
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
  ] as const satisfies readonly HeroSlideItem[],
} as const;

export const shopifyMobileAppCounters = [
  {
    value: "Platinum Partner",
    label: "Shopify-focused delivery",
  },
  {
    value: "20+ Years",
    label: "Web & Ecommerce Experience",
  },
  {
    value: "150+ Experts",
    label: "Commerce & Technology",
  },
  {
    value: "5000+",
    label: "Projects Delivered",
  },
] as const;

export const shopifyMobileAppDtcBrands = {
  eyebrow: "Why Dynamic Dreamz",
  heading: "Shopify Mobile App Development for DTC Brands",
  paragraphs: [
    "Dynamic Dreamz helps DTC and ecommerce brands build custom iOS and Android mobile apps from their existing Shopify store.",
    "We connect the mobile app with Shopify products, collections, customer accounts, cart, checkout, promotions, loyalty, analytics and other business systems, while designing the experience around your brand and customer journey.",
  ],
  cards: [
    {
      tag: "Shopify + Mobile + Full-Stack",
      title: "One technical partner from Shopify architecture to App Store release.",
      description:
        "We work across mobile UI/UX, Shopify connectivity, custom business logic, third-party systems, QA, release and ongoing product development.",
    },
    {
      tag: "Independent Proof",
      title: "Established delivery reputation.",
      description:
        "Dynamic Dreamz is rated 4.9/5 on Clutch and 4.9 on Trustpilot. These ratings reflect the broader Dynamic Dreamz delivery experience, not only mobile app projects.",
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
      ],
    },
    {
      tag: "Long-Term Flexibility",
      title: "Build beyond the limitations of an app-builder roadmap.",
      description:
        "For brands that need deeper control, custom development can support owned source code, custom UI/UX, business-specific integrations, commerce logic and an independent feature roadmap.",
    },
  ],
} as const;

export const shopifyMobileAppDtcSection = shopifyMobileAppDtcBrands;

export type WorkAppItem = {
  id: string;
  name: string;
  category: string;
  image: string;
  imageAlt: string;
  appLinks: readonly PortfolioAppLink[];
};

export const shopifyMobileAppExploreWork = {
  id: "our_work",
  eyebrow: "Portfolio",
  heading: "Explore Our Work",
  description:
    "For 20 years, we’ve worked on challenging and impactful projects for startups and leading global brands. Every website we create is designed around our clients’ goals.",
  ctaLabel: "View our work",
  ctaHref: "/our-work",
  ctaAriaLabel: "Dynamic Dreamz - View our work",
  items: [
    {
      id: "house-of-rare",
      name: "House of Rare",
      category: "React Native",
      image: "/assets/our-work/projects/house-of-rare.webp",
      imageAlt: "House of Rare Image",
      appLinks: [
        {
          label: "Android App",
          href: "https://play.google.com/store/apps/details?id=rarerabbit.android.app",
          icon: "/assets/our-work/platforms/android-icon.svg",
        },
        {
          label: "IOS App",
          href: "https://apps.apple.com/in/app/house-of-rare/id1563278819",
          icon: "/assets/our-work/platforms/app-store-ios.svg",
        },
      ],
    },
    {
      id: "kalki-fashion",
      name: "Kalki Fashion",
      category: "React Native",
      image: "/assets/our-work/projects/kalki-india.webp",
      imageAlt: "Kalki Fashion Image",
      appLinks: [
        {
          label: "Android App",
          href: "https://play.google.com/store/apps/details?id=com.shopgate.android.kalkifash",
          icon: "/assets/our-work/platforms/android-icon.svg",
        },
        {
          label: "IOS App",
          href: "https://apps.apple.com/in/app/kalki-fashion-online-shopping/id950206786",
          icon: "/assets/our-work/platforms/app-store-ios.svg",
        },
      ],
    },
    {
      id: "renee-cosmetics",
      name: "RENÉE Cosmetics",
      category: "React Native",
      image: "/assets/our-work/projects/renee-cosmetics-app.webp",
      imageAlt: "RENÉE Cosmetics Image",
      appLinks: [
        {
          label: "Android App",
          href: "https://play.google.com/store/apps/details?id=com.coffye.sbzuof",
          icon: "/assets/our-work/platforms/android-icon.svg",
        },
        {
          label: "IOS App",
          href: "https://apps.apple.com/in/app/ren%C3%A9e-cosmetics/id6449245534",
          icon: "/assets/our-work/platforms/app-store-ios.svg",
        },
      ],
    },
    {
      id: "bellavita-organic",
      name: "Bellavita Organic",
      category: "React Native",
      image: "/assets/our-work/projects/bellavita-organic-app.webp",
      imageAlt: "Bellavita Organic Image",
      appLinks: [
        {
          label: "Android App",
          href: "https://play.google.com/store/apps/details?id=com.bellavita.shopifyapps",
          icon: "/assets/our-work/platforms/android-icon.svg",
        },
        {
          label: "IOS App",
          href: "https://apps.apple.com/in/app/bellavita-online-shopping-app/id1588406681",
          icon: "/assets/our-work/platforms/app-store-ios.svg",
        },
      ],
    },
    {
      id: "bombay-shirt-company",
      name: "Bombay Shirt Company",
      category: "React Native",
      image: "/assets/fashion/portfolio/bombay-shirt-company-fashion.webp",
      imageAlt: "Bombay Shirt Company Image",
      appLinks: [
        {
          label: "Android App",
          href: "https://play.google.com/store/apps/details?id=com.coffye.ndufju",
          icon: "/assets/our-work/platforms/android-icon.svg",
        },
        {
          label: "IOS App",
          href: "https://apps.apple.com/in/app/bombay-shirt-company/id6444273632",
          icon: "/assets/our-work/platforms/app-store-ios.svg",
        },
      ],
    },
    {
      id: "supertails",
      name: "Supertails",
      category: "React Native",
      image: "/assets/our-work/projects/supertails-app.webp",
      imageAlt: "Supertails Image",
      appLinks: [
        {
          label: "Android App",
          href: "https://play.google.com/store/apps/details?id=com.coffye.dqiabm",
          icon: "/assets/our-work/platforms/android-icon.svg",
        },
        {
          label: "IOS App",
          href: "https://apps.apple.com/in/app/supertails-online-pet-shop/id1670908360",
          icon: "/assets/our-work/platforms/app-store-ios.svg",
        },
      ],
    },
    {
      id: "gnc-india",
      name: "GNC India",
      category: "React Native",
      image: "/assets/our-work/projects/gnc-india.webp",
      imageAlt: "GNC India Image",
      appLinks: [
        {
          label: "Android App",
          href: "https://play.google.com/store/apps/details?id=in.guardiannewapp",
          icon: "/assets/our-work/platforms/android-icon.svg",
        },
        {
          label: "IOS App",
          href: "https://apps.apple.com/in/app/gnc-india/id6473276654",
          icon: "/assets/our-work/platforms/app-store-ios.svg",
        },
      ],
    },
    {
      id: "house-of-good-vibes",
      name: "House of Good Vibes",
      category: "React Native",
      image: "/assets/our-work/projects/house-of-good-vibes.webp",
      imageAlt: "House of Good Vibes Image",
      appLinks: [
        {
          label: "Android App",
          href: "https://play.google.com/store/apps/details?id=app.houseofgoodvibes",
          icon: "/assets/our-work/platforms/android-icon.svg",
        },
        {
          label: "IOS App",
          href: "https://apps.apple.com/app/house-of-good-vibes/id6794209635",
          icon: "/assets/our-work/platforms/app-store-ios.svg",
        },
      ],
    },
  ] as const satisfies readonly WorkAppItem[],
} as const;

export const shopifyMobileAppWork = shopifyMobileAppExploreWork;

export type ComparisonRow = {
  title: string;
  subtitle: string;
  appBuilder: string;
  custom: string;
};

export const shopifyMobileAppComparison = {
  eyebrow: "App Builder vs Custom Development",
  heading: "Why Build a Custom Shopify <br>Mobile App?",
  description:
    "An app builder can work well for a quick launch with standard features. A custom Shopify mobile app is better when you need more ownership, flexibility, integrations and control over the customer experience.",
  tableHeaders: [
    "What Matters",
    "App Builder",
    "Custom Shopify Mobile App",
  ] as const,
  rows: [
    {
      title: "Source Code Ownership",
      subtitle: "Control future development and releases.",
      appBuilder: "Platform controlled",
      custom: "Can be owned by your business within the agreed project scope",
    },
    {
      title: "UI/UX & Customization",
      subtitle: "Layouts, navigation, interactions and branded experiences.",
      appBuilder: "Based on available templates and components",
      custom: "Designed around your brand, products and customer journey",
    },
    {
      title: "Shopify Integration",
      subtitle: "Products, collections, customers, cart, checkout and orders.",
      appBuilder: "Depends on platform-supported flows",
      custom: "Built around your Shopify store and required customer journeys",
    },
    {
      title: "Commerce Features",
      subtitle: "BOGO, free gifts, bundles, loyalty, rewards and custom offers.",
      appBuilder: "Limited to supported features",
      custom: "Custom commerce logic can be developed where technically feasible",
    },
    {
      title: "Search & Product Discovery",
      subtitle: "Search, filters, sorting and recommendations.",
      appBuilder: "Uses available platform options",
      custom: "Can be tailored to your catalog and discovery requirements",
    },
    {
      title: "Push & Customer Engagement",
      subtitle: "Offers, cart reminders, alerts, order updates and deep links.",
      appBuilder: "Uses available campaign features",
      custom: "Can be connected to custom journeys, segments and app experiences",
    },
    {
      title: "Third-Party Integrations",
      subtitle: "ERP, CRM, payments, shipping, loyalty, analytics, AI and search.",
      appBuilder: "Depends on supported integrations",
      custom: "Greater flexibility for custom APIs and business systems",
    },
    {
      title: "Performance & Analytics",
      subtitle: "API calls, caching, images, funnels and custom events.",
      appBuilder: "Depends largely on platform architecture and tracking",
      custom: "Greater code-level control and custom analytics flexibility",
    },
    {
      title: "Future Roadmap",
      subtitle: "New features, personalization, AI and business requirements.",
      appBuilder: "Partly dependent on the app-builder roadmap and subscription",
      custom: "Your business controls what gets built next",
    },
  ] as const,
} as const;

export const shopifyMobileAppExperience = {
  eyebrow: "A Better Mobile Shopping Experience",
  heading: "Design Every Important Shopping Moment for Mobile.",
  description:
    "Dynamic Dreamz designs the app around the customer journey—not around a fixed set of app-builder blocks. As visitors scroll, the phone experience changes while every service capability remains visible in the page HTML.",
  moments: [
    {
      step: "01 · Discover",
      title: "Help customers find the right product faster.",
      description:
        "We can design mobile-first search, collections, filters, sorting, recommendations and navigation around your catalog and how your customers actually shop.",
    },
    {
      step: "02 · Convert",
      title: "Turn product interest into a smoother purchase journey.",
      description:
        "Dynamic Dreamz can connect product pages, custom offers, bundles, BOGO, free gifts, cart logic and Shopify checkout into a mobile experience designed around your business model.",
    },
    {
      step: "03 · Engage",
      title: "Make engagement useful, not noisy.",
      description:
        "Use push notifications, deep links, product alerts, abandoned-cart journeys and campaign messaging to bring customers back to relevant in-app experiences.",
    },
    {
      step: "04 · Retain",
      title: "Give customers reasons to keep using the app.",
      description:
        "Connect loyalty, rewards, subscriptions, customer accounts, personalized experiences and repeat-purchase journeys so the app can keep creating value after the first order.",
    },
  ] as const,
} as const;

export const shopifyMobileAppCaseStudies = {
  eyebrow: "CASE STUDIES",
  heading: "Our Shopify Mobile App <br> Case Studies",
  description:
    "See Selected Shopify Mobile app work by Dynamic Dreamz. Add the real app screenshots, features, integrations and store links before launch.",
  items: [
    {
      title:
        "RENÉE Cosmetics: Custom Shopify Mobile App (React Native) for iOS & Android",
      href: "/case-studies/renee-cosmetics",
      image: "/assets/case-studies/renee-cosmetics-mobile-app.webp",
      imageAlt:
        "RENÉE Cosmetics: Custom Shopify Mobile App (React Native) for iOS & Android",
      technology: "Shopify Mobile App Development",
      industry: "Beauty & Cosmetics",
      description:
        "Explore how Dynamic Dreamz developed a custom Shopify-connected React Native mobile app for RENÉE Cosmetics across iOS and Android.",
      tags: ["Mobile Application Development", "React Native Development"],
      ctaLabel: "View Case study",
    },
    {
      title: "KALKI Fashion: Omnichannel Mobile App connected with Shopify Plus",
      href: "/case-studies/kalki-fashion-mobile-app",
      image: "/assets/case-studies/kalki-fashion-mobile-app.webp",
      imageAlt:
        "KALKI Fashion: Omnichannel Mobile App connected with Shopify Plus",
      technology: "Shopify Mobile App Development",
      industry: "Fashion & Apparel",
      description:
        "See how Dynamic Dreamz built an omnichannel React Native mobile shopping experience connected to Shopify Plus for KALKI Fashion.",
      tags: ["Mobile Application Development", "React Native Development"],
      ctaLabel: "View Case study",
    },
    {
      title:
        "House of Good Vibes: React Native Shopify App with Drag-and-Drop CMS Page Builder & Daily Meditation Scheduler",
      href: "/case-studies/house-of-good-vibes",
      image: "/assets/case-studies/house-of-good-vibes.webp",
      imageAlt:
        "House of Good Vibes: React Native Shopify App with Drag-and-Drop CMS Page Builder & Daily Meditation Scheduler",
      technology: "Shopify Mobile App Development",
      industry: "Lifestyle",
      description:
        "See how Dynamic Dreamz built a Shopify-connected React Native app with CMS page building, meditation scheduling and customer engagement features.",
      tags: ["Mobile Application Development", "React Native Development"],
      ctaLabel: "View Case study",
    },
  ] as const,
} as const;

export const shopifyMobileAppProcessSectionCopy = {
  eyebrow: "Our Process",
  title: "Our Shopify Mobile App <br> Development Process",
  description:
    "We support the full journey from requirements and design to Shopify integration, launch and ongoing development.",
  steps: [
    {
      title: "Discover & Architect",
      description:
        "Understand the store, customer journeys, integrations, current apps and technical requirements.",
    },
    {
      title: "Design & Build",
      description:
        "Create the mobile UX and develop the required iOS/Android app experience and integrations.",
    },
    {
      title: "QA & Launch",
      description:
        "Test shopping flows, integrations, analytics, devices and release readiness for the app stores.",
    },
    {
      title: "Improve & Scale",
      description:
        "Continue with maintenance, releases, new features, integrations and performance improvements.",
    },
  ] as const satisfies readonly WhiteLabelProcessStep[],
} as const;

export const shopifyMobileAppProcess = shopifyMobileAppProcessSectionCopy;

export const shopifyMobileAppFaqCopy = {
  eyebrow: "Frequently Asked Questions",
  heading: "Shopify Mobile App <br> Development FAQs",
} as const;

export const shopifyMobileAppDevelopmentFaqs: readonly FaqAccordionItem[] = [
  {
    question:
      "Does Dynamic Dreamz develop custom mobile apps for Shopify stores?",
    answer:
      "Yes. Dynamic Dreamz designs and develops custom Shopify-connected mobile apps for iOS and Android, including mobile UI/UX, Shopify integration, third-party APIs, analytics, QA, launch and ongoing product development",
  },
  {
    question:
      "Why choose Dynamic Dreamz for Shopify mobile app development?",
    answer:
      "Dynamic Dreamz combines Shopify platform experience with mobile and full-stack engineering. That means the same delivery team can consider the Shopify storefront, mobile customer experience, checkout, integrations, business logic and ongoing technical roadmap together rather than treating the app as a separate project.",
  },
  {
    question:
      "Can Dynamic Dreamz build Shopify mobile apps for both iOS and Android?",
    answer:
      "Yes. We can build Shopify-connected applications for both iOS and Android. React Native CLI can be used where a shared application foundation is appropriate, with platform-specific functionality added where required.",
  },
  {
    question:
      "Which Shopify technologies can you use for mobile app development?",
    answer:
      "Depending on the required architecture, Shopify’s Storefront API can support product browsing, search and cart operations, while Checkout Kit can present Shopify checkout in iOS, Android and React Native apps. Other Shopify and third-party integrations are selected according to the project requirements.",
  },
  {
    question:
      "Can you integrate loyalty, ERP, CRM, payments and other APIs?",
    answer:
      "Yes. Where supported by the required systems and APIs, we can integrate loyalty platforms, ERP and CRM systems, payments, shipping, analytics, search, marketing, AI and other third-party services.",
  },
  {
    question: "Do you provide ongoing support after the app launches?",
    answer:
      "Yes. Ongoing support can include maintenance, app updates, new features, integrations, analytics changes, performance work and release support for the Apple App Store and Google Play.",
  },
];

export const shopifyMobileAppDevelopmentCtaBanner = {
  heading: "Want us to help you with your online store?",
  ctaLabel: "request a quote",
  ctaHref: "/request-quote",
} as const;
