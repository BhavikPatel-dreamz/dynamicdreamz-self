import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import type { CaseStudyPreviewItem } from "@/components/sections/services-case-studies-section";
import type { ThemeCustomizationServicesContent } from "@/components/sections/theme-customization-services-section";
import type { IndustryCustomDevelopmentContent } from "@/components/sections/industry/industry-custom-development-section";
import type { WhiteLabelTool } from "@/types/white-label-service";
import type { PortfolioShowcaseItem } from "@/components/sections/portfolio-showcase-section";
import type { WhyChooseMigrationContent } from "@/components/sections/why-choose-shopify-migration-section";

// 1. Hero
export const healthNutritionHero: ServiceHeroVideoContent = {
  eyebrowSpans: ["Industry Solutions", "Health & Nutrition"],
  title: "Ecommerce Solutions for Health, Nutrition & Supplement Brands",
  paragraphs: [
    "We help supplement, wellness and nutrition brands build trusted ecommerce experiences—from Shopify storefronts to subscriptions, goal-based discovery, mobile apps and custom integrations.",
  ],
  cta: "Discuss Your Project",
  ctaHref: "/request-quote",
  secondaryCta: {
    label: "See Relevant Work",
    href: "#our_work",
  },
  video: "/assets/home/why-dynamic-dreamz.mp4",
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
};

// 2. Brands
export const healthNutritionBrandsConfig = {
  slug: "health-nutrition",
  brands: {
    ariaLabel: "Health & Nutrition brands supported by Dynamic Dreamz",
  },
};

export const healthNutritionBrandsHeading = "Trusted by Leading Brands";

export const healthNutritionBrands: readonly ClientLogoSliderItem[] = [
  {
    src: "/assets/clients/supertails.svg",
    href: "https://supertails.com/",
    alt: "Supertails",
    width: 144,
    height: 44,
  },
  {
    src: "/assets/clients/eleven-eleven.svg",
    href: "https://11-11.in/",
    alt: "Eleven Eleven",
    width: 145,
    height: 20,
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
    alt: "Popclub",
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
    height: 26,
  },
  {
    src: "/assets/clients/renee.svg",
    href: "https://www.reneecosmetics.in/",
    alt: "Renee",
    width: 143,
    height: 31,
  },
  {
    src: "/assets/clients/royce-chocolate.svg",
    href: "https://www.royceindia.com/",
    alt: "Royce Chocolate Logo",
    width: 135,
    height: 24,
  },
  {
    src: "/assets/clients/tego.svg",
    href: "https://tego.fit/",
    alt: "Tego Logo",
    width: 82,
    height: 27,
  },
  {
    src: "/assets/clients/nekter-colored.svg",
    href: "https://www.nekterjuicebar.com/",
    alt: "nekter-colored",
    width: 66,
    height: 64,
  },
  {
    src: "/assets/clients/rare-rabbit.svg",
    href: "https://thehouseofrare.com/",
    alt: "Rare Rabbit",
    width: 120,
    height: 34,
  },
];

// 3. Case Studies
export const healthNutritionCaseStudies = {
  eyebrow: "CASE STUDIES",
  heading: "Proof from Real Ecommerce and Technology Work",
  description:
    "Selected projects that show how our team combines storefront development, custom functionality, integrations, mobile and full-stack engineering when the requirement demands it.",
  items: [
    {
      title:
        "GNC India: Conversion-Focused Shopify Redesign with Goal-Based Navigation & Trust Signals",
      href: "/case-studies/gnc-india",
      image: "/assets/case-studies/gnc-india.webp",
      imageAlt:
        "GNC India: Conversion-Focused Shopify Redesign with Goal-Based Navigation & Trust Signals",
      technology: "Shopify / Shopify Plus",
      industry: "Health & Nutrition",
    },
    {
      title:
        "Rooted Human: Custom Shopify Dawn Theme Store for Women’s Wellness Supplements",
      href: "/case-studies/rooted-human",
      image: "/assets/case-studies/rooted-human.webp",
      imageAlt:
        "Rooted Human: Custom Shopify Dawn Theme Store for Women’s Wellness Supplements",
      technology: "Shopify / Shopify Plus",
      industry: "Health & Nutrition",
    },
    {
      title:
        "Essential Whitening: Custom Shopify 2.0 Store with B2B Pricing Tiers for Dental Professionals",
      href: "/case-studies/essential-whitening",
      image: "/assets/case-studies/essential-whitening.webp",
      imageAlt:
        "Essential Whitening: Custom Shopify 2.0 Store with B2B Pricing Tiers for Dental Professionals",
      technology: "Shopify Custom Apps & Integrations",
      industry: "Health & Nutrition",
    },
  ] as const satisfies readonly CaseStudyPreviewItem[],
};

// 4. Industry Challenges (transparent variant)
export const healthNutritionChallenges: ThemeCustomizationServicesContent = {
  eyebrow: "Industry Challenges",
  heading: "Built for Trust, Education and the Repeat-purchase Cycle",
  description:
    "We design around how customers research, compare and buy in this category—and around the operational workflows that sit behind that experience.",
  boxes: [
    {
      number: "01",
      title: "Revenue Depends on the Reorder Cycle",
      description:
        "Supplements run out on a schedule. Subscription, replenishment and easy reorder journeys influence whether a first order becomes a long-term customer.",
    },
    {
      number: "02",
      title: "Customers Shop by Goal, not Always by SKU",
      description:
        "Sleep, energy, recovery, gut health and immunity often make more sense as navigation paths than a long product catalogue.",
    },
    {
      number: "03",
      title: "Education Drives Conversion",
      description:
        "Dosage, sourcing, certifications, ingredients and usage guidance need structured product experiences that are easy to understand.",
    },
    {
      number: "04",
      title: "Rigid Subscriptions Create Churn",
      description:
        "Customers need clear control over frequency, skips, pauses and product changes when a recurring plan is part of the business model.",
    },
    {
      number: "05",
      title: "Regimens are More Complex than Single Products",
      description:
        "Stacks, routines and starter kits need clear product combinations, pricing and fulfillment logic.",
    },
    {
      number: "06",
      title: "Different Buyer Types Create Different Workflows",
      description:
        "Consumer, practitioner and business purchasing can require different content, pricing, account and ordering logic.",
    },
  ],
};

// 5. Solutions We Build (green variant)
export const healthNutritionSolutions: ThemeCustomizationServicesContent = {
  eyebrow: "Solutions We Build",
  heading: "Commerce Solutions for Health & Nutrition Brands",
  description:
    "Shopify is a major part of our ecommerce work, but the solution can also include mobile apps, integrations, other commerce platforms and custom full-stack development when the requirement needs it.",
  boxes: [
    {
      number: "01",
      title: "Goal-Based Product Discovery",
      description:
        "Shop by goal, ingredient or routine with filters, finders and recommendation journeys.",
    },
    {
      number: "02",
      title: "Subscriptions & Replenishment",
      description:
        "Recurring purchase, subscription integrations, replenishment reminders and account experiences.",
    },
    {
      number: "03",
      title: "Bundles & Regimen Builders",
      description:
        "Starter kits, routines and configurable combinations designed around customer goals.",
    },
    {
      number: "04",
      title: "Structured Product Education",
      description:
        "Ingredient, dosage, certification, comparison and usage content built into reusable product templates.",
    },
    {
      number: "05",
      title: "Shopify & Shopify Plus Development",
      description:
        "Custom themes, redesigns, migrations, performance, CRO, subscriptions and ongoing ecommerce support.",
    },
    {
      number: "06",
      title: "Custom Platforms & Integrations",
      description:
        "ERP, CRM, subscription platforms, APIs, mobile apps and full-stack workflows for more complex requirements.",
    },
  ],
};

// 6. Custom Development
export const healthNutritionCustomDev: IndustryCustomDevelopmentContent = {
  eyebrow: "Custom Development",
  heading: "Custom Health Commerce where Standard Apps Stop",
  description:
    "We can build product-selection logic, complex bundles, subscription workflows, account-based experiences and connected mobile or backend systems when the requirement does not fit a standard plugin or app.",
  items: [
    "Custom ecommerce functionality when standard platform features or apps are not enough.",
    "Full-stack development for product logic, pricing, portals and connected workflows.",
    "API integrations connecting storefronts, mobile apps and business systems.",
    "Ongoing QA, performance and development support after launch.",
  ],
};

// 7. Platforms, Frameworks & Mobile Capabilities
export const healthNutritionTechnologies = {
  title: "Platforms, Frameworks & Mobile Capabilities",
  description:
    "We select technology around the customer experience, existing systems and long-term roadmap. The same team can support managed ecommerce, custom full-stack development, mobile apps and connected integrations.",
  rows: [
    [
      {
        name: "Shopify Development",
        image: "/assets/technologies/shopify-development.webp",
      },
      {
        name: "Shopify Plus Development",
        image: "/assets/technologies/shopify-plus-development.webp",
      },
      {
        name: "Full Stack Development",
        image: "/assets/technologies/full-stack-development.webp",
      },
      {
        name: "React Development",
        image: "/assets/technologies/react-development.webp",
      },
      {
        name: "Next.js Development",
        image: "/assets/technologies/next-js-development.webp",
      },
      {
        name: "Node.js Development",
        image: "/assets/technologies/node-js-development.webp",
      },
      {
        name: "React Native Development",
        image: "/assets/technologies/react-native-development.webp",
      },
      {
        name: "iOS Development",
        image: "/assets/technologies/ios-development.webp",
      },
      {
        name: "Android Development",
        image: "/assets/technologies/android-development.webp",
      },
      {
        name: "Figma Design",
        image: "/assets/technologies/figma-design.webp",
      },
    ],
    [
      {
        name: "Magento Development",
        image: "/assets/technologies/magento-development.webp",
      },
      {
        name: "WooCommerce Development",
        image: "/assets/technologies/woo-development.webp",
      },
      {
        name: "BigCommerce Development",
        image: "/assets/technologies/bigcommerce-development.webp",
      },
      {
        name: "WordPress Development",
        image: "/assets/technologies/wordpress-development.webp",
      },
      {
        name: "Webflow Development",
        image: "/assets/technologies/webflow-development.webp",
      },
      {
        name: "PHP Development",
        image: "/assets/technologies/php-development.webp",
      },
      {
        name: "Medusa Development",
        image: "/assets/technologies/medusa-development.webp",
      },
      {
        name: "GraphQL Development",
        image: "/assets/technologies/graphql-development.webp",
      },
    ],
  ] as const satisfies readonly (readonly WhiteLabelTool[])[],
};

// 8. Portfolio
export const healthNutritionPortfolio = {
  heading: "Selected Health & Nutrition Experience",
  items: [
    {
      name: "Naakbar",
      category: "Shopify / Shopify Plus",
      href: "https://www.naak.com/",
      image: "/assets/health-nutrition/portfolio/naakbar-energy-products.webp",
      imageAlt: "Naakbar Image",
    },
    {
      name: "Health co",
      category: "Shopify / Shopify Plus",
      href: "https://www.healthco.com.au/",
      image: "/assets/health-nutrition/portfolio/health-co-protein-powder.webp",
      imageAlt: "Health co Image",
    },
    {
      name: "Nested Naturals",
      category: "Shopify / Shopify Plus",
      href: "https://nestednaturals.com/",
      image: "/assets/our-work/projects/nested-naturals.webp",
      imageAlt: "Nested Naturals Image",
    },
    {
      name: "Sri Sri Tattva",
      category: "Mobile Apps",
      href: null,
      image: "/assets/our-work/projects/sri-sri-tattva.webp",
      imageAlt: "Sri Sri Tattva Image",
    },
    {
      name: "Nordic Nutrition",
      category: "Shopify / Shopify Plus",
      href: "https://nordicnutrition.ae/",
      image: "/assets/health-nutrition/portfolio/nordic-nutrition-supplements.webp",
      imageAlt: "Nordic Nutrition Image",
    },
    {
      name: "Nufyx",
      category: "Shopify / Shopify Plus",
      href: "https://nufyx.com/",
      image: "/assets/health-nutrition/portfolio/nufyx-protein-products.webp",
      imageAlt: "Perfect Locks Image",
    },
    {
      name: "GNC India",
      category: "Mobile Apps",
      href: null,
      image: "/assets/our-work/projects/gnc-india.webp",
      imageAlt: "GNC India Image",
    },
    {
      name: "Holy Plantz",
      category: "Shopify / Shopify Plus",
      href: "https://holyplantz.com/",
      image: "/assets/our-work/projects/holy-plantz.webp",
      imageAlt: "Holy Plantz Image",
    },
  ] as const satisfies readonly PortfolioShowcaseItem[],
};

// 9. Why Dynamic Dreamz
export const healthNutritionWhyChoose: WhyChooseMigrationContent = {
  eyebrow: "Why Dynamic Dreamz",
  heading: "One Team Across Ecommerce, Custom Development and Mobile",
  description:
    "Delivering since 2006, with ecommerce specialists working alongside UI/UX designers, full-stack developers, mobile engineers and QA when a requirement crosses platform boundaries.",
  items: [
    {
      icon: "design",
      title: "Industry-led Solution Design",
      description:
        "Architecture, design and engineering shaped by the nuances of health, nutrition and supplement ecommerce.",
    },
    {
      icon: "expertise",
      title: "Strong Shopify Capability, Broader Technology Depth",
      description:
        "Deep expertise in Shopify and Shopify Plus, complemented by full-stack, mobile and integration engineering.",
    },
    {
      icon: "team",
      title: "Custom-first when Needed",
      description:
        "Willingness and capability to build custom solutions when standard apps or platform features are not enough.",
    },
    {
      icon: "support",
      title: "Long-term Development Support",
      description:
        "Ongoing partnership for feature releases, performance optimization, CRO experiments and technical support.",
    },
  ],
  partnerLogo: "/assets/proof/shopify-platinum-partner.svg",
  partnerLogoAlt: "Dynamic Dreamz - Shopify Platinum Partner",
  logoHref: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
  partnerHeading: "20+ Years of Ecommerce Delivery",
  partnerDescription:
    "We have been building, scaling and maintaining ecommerce platforms since 2006, supporting brands as their requirements grow.",
  stats: [
    { value: "20+", label: "Years of Industry Experience" },
    { value: "150+", label: "In-House Developers & Designers" },
    { value: "5k+", label: "Successful Projects Delivered" },
    { value: "2.5k+", label: "Positive Client Reviews" },
  ],
  partnerLink: {
    label: "About Dynamic Dreamz",
    href: "/about-us",
  },
};

// 10. FAQs
export const healthNutritionFaqs: readonly FaqAccordionItem[] = [
  {
    question:
      "Do you have experience with supplement and nutrition ecommerce?",
    answer:
      "Yes. Our health and nutrition work spans Shopify storefronts, mobile experiences, subscriptions, integrations and ongoing development for supplement, wellness and nutrition brands.",
  },
  {
    question:
      "How do you improve subscription and repeat-purchase journeys?",
    answer:
      "We structure delivery frequency around the product cycle, make skip, swap, pause and reschedule easy for customers, and connect subscription events to retention and replenishment flows.",
  },
  {
    question:
      "Can you build product pages for ingredients, dosage and certifications?",
    answer:
      "Yes. We can structure product templates with separate fields for ingredients, dosage, warnings, certifications and approved claims so teams can publish information consistently. We do not advise on which health claims are legally permitted.",
  },
  {
    question:
      "Can you build goal-based product discovery or supplement quizzes?",
    answer:
      "Yes. We can create goal-based navigation, product finders, quizzes and recommendation journeys using platform features, suitable apps or custom development.",
  },
  {
    question:
      "Can you support practitioner, clinic or wholesale ordering?",
    answer:
      "Yes. Depending on the business model and platform, we can build company accounts, customer-specific pricing, quick ordering, restricted catalogues and connected ordering workflows.",
  },
  {
    question:
      "Can you migrate an existing health store without disrupting subscribers?",
    answer:
      "Yes, where the subscription provider supports migration. We plan products, customers, orders, URLs, redirects and subscriber transfer before cutover, then complete QA and launch monitoring.",
  },
];

export const healthNutritionFaqEyebrow = "Frequently Asked Questions";
export const healthNutritionFaqHeading = "What Health & Nutrition Brands Ask before They Scale";
