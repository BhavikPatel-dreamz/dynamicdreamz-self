import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { WhiteLabelFinalCta, WhiteLabelHero } from "@/types/white-label-service";

export const shopifyCertifiedDevelopersHero = {
  title: "Hire Shopify Certified Developers for work that needs to be done right.",
  lead:
    "Build, customize or improve your Shopify store with developers who hold official Shopify credentials—and work within Dynamic Dreamz, a Shopify Platinum Partner agency with deep ecommerce experience.",
  leadStrong: false,
  paragraphs: [],
  cta: "Discuss your Shopify project",
  ctaHref: "/request-quote",
  secondaryCta: {
    label: "see our certifications",
    href: "#see-our-certifications",
  },
  illustration: "/assets/shopify-certified-developers/hero.webp",
  illustrationAlt: "Hire Shopify Certified Developers",
  illustrationWidth: 535,
  illustrationHeight: 534,
} as const satisfies WhiteLabelHero;

export const verifiedShopifyKnowledge = {
  heading: "Verified Shopify knowledge applied to real business requirements.",
  description:
    "Certifications make expertise visible. They show where a developer has completed Shopify learning and demonstrated knowledge. At Dynamic Dreamz, those credentials are combined with hands-on delivery experience, technical review and structured QA.",
  items: [
    {
      icon: "/assets/process/step-01.svg",
      iconAlt: "",
      title: "Clearer technical decisions",
      description:
        "Recommendations are grounded in Shopify capabilities and platform conventions.",
    },
    {
      icon: "/assets/process/step-02.svg",
      iconAlt: "",
      title: "More maintainable development",
      description:
        "Theme and Liquid work is planned with future updates and store management in mind.",
    },
    {
      icon: "/assets/process/step-03.svg",
      iconAlt: "",
      title: "Relevant specialist knowledge",
      description:
        "You can match the project with developers credentialed in storefront or B2B work.",
    },
  ],
} as const;

export const shopifyCredentialEvidence = {
  heading: "Evidence you can see, not a generic expertise claim.",
  description:
    "Each credential represents a specific capability within the Shopify ecosystem. Showing the credential, its exact name and the number of credentialed developers gives merchants a clearer basis for evaluating the team.",
  items: [
    {
      title: "Shopify Development Fundamentals",
      count: "20 Certified Developers",
      image:
        "/assets/shopify-certified-developers/credentials/shopify-development-fundamentals.webp",
      imageAlt: "Shopify Development Fundamentals verified skill badge",
      href: "https://www.credly.com/badges/53046231-a11e-47f6-ad40-ef47062e1e51",
    },
    {
      title: "Shopify B2B: Foundations, Discovery and Solution Design",
      count: "7 Certified Developers",
      image:
        "/assets/shopify-certified-developers/credentials/shopify-b2b-foundations.webp",
      imageAlt:
        "Shopify B2B Foundations, Discovery and Solution Design verified skill badge",
      href: "https://www.credly.com/badges/a245dc9c-beeb-4156-b144-c5ef9981fb8c",
    },
    {
      title: "Liquid Storefronts for Theme Developers",
      count: "15 Certified Developers",
      image:
        "/assets/shopify-certified-developers/credentials/liquid-storefronts-for-theme-developers.webp",
      imageAlt: "Liquid Storefronts for Theme Developers verified skill badge",
      href: "https://www.credly.com/badges/802e0f14-fa50-4415-be4c-3158ec8f8368",
    },
    {
      title: "B2B on Shopify: Launch and Customization",
      count: "7 Certified Developers",
      image:
        "/assets/shopify-certified-developers/credentials/b2b-launch-and-customization.webp",
      imageAlt: "B2B on Shopify Launch and Customization verified skill badge",
      href: "https://www.credly.com/badges/2387fcc7-4ae5-48b7-85bb-1d6edb721610/",
    },
  ],
  note:
    "Credential counts are shown per certification. One developer may hold more than one Shopify credential.",
} as const;

export const shopifyCredentialTabs = {
  heading: "Which Shopify credential is most relevant to your project?",
  description:
    "Select your requirement to understand which credentialed knowledge and practical capabilities are most useful.",
  items: [
    {
      id: "storefront",
      label: "Custom storefront",
      eyebrow: "Most relevant credentials",
      title: "Shopify Development Fundamentals + Liquid Storefronts",
      description:
        "Best suited to custom theme builds, Figma-to-Shopify development and storefront features that require reusable sections and well-structured Liquid.",
      details: [
        {
          label: "Credential value",
          value: "Specialist knowledge can be matched with the task at hand",
        },
        {
          label: "Typical work",
          value: "Campaigns, improvements, fixes and development.",
        },
        {
          label: "Business benefit",
          value: "Consistent capacity backed by a broader agency team",
        },
        {
          label: "Ask us about",
          value: "Hourly support or dedicated Shopify developer options",
        },
      ],
    },
    {
      id: "b2b",
      label: "Shopify B2B",
      eyebrow: "Most relevant credentials",
      title: "B2B Foundations, Discovery and Solution Design + Launch and Customization",
      description:
        "Best suited to wholesale and B2B projects requiring company accounts, pricing workflows, permissions, storefront customization and launch planning.",
      details: [
        {
          label: "Credential value",
          value: "B2B requirements are considered before implementation begins",
        },
        {
          label: "Typical work",
          value: "Company accounts, catalogs, pricing and B2B storefront journeys",
        },
        {
          label: "Business benefit",
          value:
            "Better alignment between Shopify configuration and wholesale operations",
        },
        {
          label: "Ask us about",
          value: "Shopify Plus B2B discovery, setup and customization",
        },
      ],
    },
    {
      id: "existing",
      label: "Existing-store work",
      eyebrow: "Most relevant credentials",
      title: "Shopify Development Fundamentals + the specialization matching your store",
      description:
        "Best suited to troubleshooting, theme improvements, custom sections and targeted changes where understanding the existing Shopify setup matters.",
      details: [
        {
          label: "Credential value",
          value: "Changes are approached with an understanding of Shopify architecture",
        },
        {
          label: "Typical work",
          value: "Liquid fixes, theme enhancements, app conflicts and new functionality",
        },
        {
          label: "Business benefit",
          value: "Focused improvements without unnecessary rebuilding",
        },
        {
          label: "Ask us about",
          value: "A technical review and prioritized improvement plan",
        },
      ],
    },
    {
      id: "support",
      label: "Ongoing support",
      eyebrow: "Most relevant credentials",
      title: "Access the right credentialed developer as your roadmap changes",
      description:
        "Best suited to brands and agencies that need dependable Shopify capacity for changing priorities, releases and continuous improvements.",
      details: [
        {
          label: "Credential value",
          value: "Specialist knowledge can be matched with the task at hand",
        },
        {
          label: "Typical work",
          value:
            "Enhancements, campaign launches, troubleshooting and ongoing development",
        },
        {
          label: "Business benefit",
          value: "Consistent capacity backed by a broader agency team",
        },
        {
          label: "Ask us about",
          value: "Hourly support or dedicated Shopify developer options",
        },
      ],
    },
  ],
} as const;

export const certifiedAgencySupport = {
  heading: "Certified developers, supported by an experienced agency system.",
  paragraphs: [
    "Hiring through Dynamic Dreamz gives you more than access to one developer. Your project can also draw on technical review, QA, project coordination and specialist support where the scope requires it.",
    "This is especially useful for complex storefronts, B2B projects and ongoing work where continuity and accountability matter.",
  ],
  items: [
    {
      title: "Official Shopify credentials",
      description:
        "Visible evidence of knowledge across development fundamentals, Liquid storefronts and Shopify B2B.",
    },
    {
      title: "Relevant practical experience",
      description:
        "Certified knowledge is applied to real storefront, integration, migration and ongoing development requirements.",
    },
    {
      title: "Review and quality assurance",
      description:
        "Technical and functional checks can be included before changes are released to the live store.",
    },
    {
      title: "Capacity that can scale",
      description:
        "Access a larger team when a project requires additional design, development, QA or coordination support.",
    },
  ],
} as const;

export const certifiedDeveloperServices = {
  heading: "What our Shopify Certified Developers can help you deliver.",
  description:
    "A focused service summary captures relevant commercial searches without duplicating every Shopify service page on your website.",
  items: [
    {
      eyebrow: "01 / STOREFRONT",
      title: "Custom Shopify theme development",
      description:
        "Figma-to-Shopify implementation, reusable sections, custom templates and responsive storefront development.",
    },
    {
      eyebrow: "02 / LIQUID",
      title: "Liquid development and customization",
      description:
        "Theme logic, custom sections, dynamic content and targeted functionality built within Shopify themes.",
    },
    {
      eyebrow: "03 / B2B",
      title: "Shopify B2B discovery and implementation",
      description:
        "Requirements, company accounts, catalogs, pricing workflows and wholesale storefront customization.",
    },
    {
      eyebrow: "04 / EXISTING STORE",
      title: "Theme enhancements and troubleshooting",
      description:
        "Improve an existing Shopify store through focused fixes, new features and technical cleanup.",
    },
    {
      eyebrow: "05 / INTEGRATION",
      title: "App and API integration support",
      description:
        "Connect storefront requirements with third-party apps, workflows and custom integrations.",
    },
    {
      eyebrow: "06 / ONGOING",
      title: "Ongoing Shopify development",
      description:
        "Flexible support for releases, enhancements, campaigns and changing ecommerce priorities.",
    },
  ],
} as const;

export const shopifyPartnerDirectoryProof = {
  heading: "Recognized in Shopify’s official Partner Directory.",
  description:
    "Dynamic Dreamz is currently listed as a Shopify Platinum Partner. The directory also shows a 5.0 rating from 80 reviews and a partner relationship dating back to September 2013.",
  href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
  items: [
    {
      kind: "image",
      image: "/assets/proof/shopify-platinum-partner.svg",
      imageAlt: "Dynamic Dreamz - Shopify Platinum Partner",
      imageWidth: 136,
      imageHeight: 44,
      label: "Shopify Partner tier",
    },
    {
      kind: "rating",
      value: "5.0",
      label: "Current directory rating",
    },
    {
      kind: "text",
      value: "80+",
      label: "Shopify directory reviews",
    },
    {
      kind: "text",
      value: "2013",
      label: "Partner since September",
    },
  ],
} as const;

export const shopifyCertifiedDevelopersFaqs = [
  {
    question: "What is a Shopify Certified Developer?",
    answer: "",
    answerParts: [
      { text: "A " },
      { text: "Shopify Certified Developer", strong: true },
      {
        text: " is a professional who has successfully completed Shopify’s official certification programs. These certifications validate expertise in Shopify development, platform capabilities, and recommended best practices, helping developers stay current with Shopify’s evolving ecosystem.",
      },
    ],
  },
  {
    question: "Why should I hire Shopify Certified Developers?",
    answer: "",
    answerParts: [
      { text: "Hiring " },
      { text: "Shopify Certified Developers", strong: true },
      {
        text: " gives you access to professionals who understand Shopify’s latest technologies, development standards, and best practices. Combined with practical experience, certified developers build reliable, scalable, and future-ready ecommerce stores that support long-term business growth.",
      },
    ],
  },
  {
    question: "Does Dynamic Dreamz have Shopify Certified Developers?",
    answer: "",
    answerParts: [
      { text: "Yes. Dynamic Dreamz has a team of " },
      { text: "Shopify Certified Developers", strong: true },
      { text: " and " },
      { text: "Certified Shopify Experts", strong: true },
      {
        text: " who have earned official Shopify certifications across multiple Shopify specializations. Our certified professionals combine platform expertise with years of practical Shopify development experience.",
      },
    ],
  },
  {
    question: "Is Dynamic Dreamz a Shopify Platinum Partner?",
    answer: "",
    answerParts: [
      { text: "Yes. Dynamic Dreamz is proud to be a " },
      { text: "Shopify Platinum Partner", strong: true },
      {
        text: ", reflecting our commitment to delivering high-quality Shopify development services, technical excellence, and long-term success for ecommerce businesses worldwide.",
      },
    ],
  },
  {
    question: "What Shopify certifications does Dynamic Dreamz hold?",
    answer: "",
    answerParts: [
      {
        text: "Our team has earned official Shopify certifications across multiple areas of the Shopify ecosystem, including Shopify Foundations, ",
      },
      { text: "Shopify B2B, Liquid Storefront Development", strong: true },
      {
        text: ", and other Shopify specializations. We continuously invest in learning to stay aligned with Shopify’s latest platform updates and best practices.",
      },
    ],
  },
  {
    question: "Do your Shopify Certified Developers build Shopify Plus stores?",
    answer: "",
    answerParts: [
      { text: "Yes. Our experienced team develops " },
      { text: "Shopify Plus", strong: true },
      {
        text: " stores for growing and enterprise businesses, delivering advanced custom development, integrations, performance optimization, and scalable ecommerce solutions tailored to complex business requirements.",
      },
    ],
  },
  {
    question: "What services do your Shopify Certified Developers provide?",
    answer: "",
    answerParts: [
      { text: "Our " },
      { text: "Shopify Certified Developers", strong: true },
      {
        text: " provide Shopify store development, Shopify Plus development, custom Shopify theme development, Shopify app development, Shopify migrations, API integrations, performance optimization, maintenance, and ongoing technical support.",
      },
    ],
  },
  {
    question: "Why choose Dynamic Dreamz for Shopify development?",
    answer: "",
    answerParts: [
      { text: "Businesses choose Dynamic Dreamz because we combine " },
      { text: "Shopify Platinum Partner", strong: true },
      { text: " recognition, " },
      { text: "Shopify Certified Developers", strong: true },
      {
        text: ", extensive ecommerce expertise, and a customer-first approach. Our focus is on delivering scalable Shopify solutions, long-term technical support, and exceptional ecommerce experiences that help businesses grow with confidence.",
      },
    ],
  },
] as const satisfies readonly FaqAccordionItem[];

export const shopifyCertifiedDevelopersFinalCta = {
  title: "Have a Shopify requirement that needs certified expertise?",
  description:
    "Share your store and project goals with Dynamic Dreamz. We’ll review the requirement and recommend the most relevant Shopify expertise and engagement approach.",
  label: "discuss your shopify project",
} as const satisfies WhiteLabelFinalCta;

export const shopifyCertifiedDeveloperSchemaFaqs =
  shopifyCertifiedDevelopersFaqs.map((faq) => ({
    question: faq.question,
    answer: faq.answerParts.map((part) => part.text).join(""),
  }));
