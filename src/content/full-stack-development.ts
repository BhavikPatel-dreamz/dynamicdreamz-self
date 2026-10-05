import type { CityPageHeroContent } from "@/components/sections/city-page-hero-section";
import type { ThemeCustomizationServicesContent } from "@/components/sections/theme-customization-services-section";
import type { ShopifyStageServicesContent } from "@/components/sections/shopify-stage-services-section";
import type { TechnologiesWorkWithContent } from "@/components/sections/technologies-work-with-section";
import type { RecentArchitecturePatternsContent } from "@/components/sections/recent-architecture-patterns-section";
import type { CaseStudyPreviewItem } from "@/components/sections/services-case-studies-section";
import type { EvaluationFrameworkContent } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import type { CityWhyChooseBoxesContent } from "@/components/sections/city-why-choose-boxes-section";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

export const fullStackDevelopmentHeroContent: CityPageHeroContent = {
  eyebrows: ["Full Stack Development Services"],
  title: "Full Stack Development for Custom Web Apps, Ecommerce & Digital Products",
  subtitle:
    "From the interface your users see to the backend systems that make everything work.",
  description:
    "Dynamic Dreamz builds complete web applications for businesses, ecommerce brands and digital agencies. Our team works across frontend, backend, APIs, databases, ecommerce platforms, headless CMS and cloud deployment — so you can build a new product, extend an existing system or connect multiple platforms without managing separate development teams.",
  primaryCta: {
    label: "Discuss Your Project",
    href: "/request-quote",
  },
  secondaryCta: {
    label: "Explore Services",
    href: "#our_services",
  },
  badges: [
    {
      src: "/assets/proof/clutch-rating.svg",
      href: "https://clutch.co/profile/dynamic-dreamz",
      alt: "Dynamic Dreamz on Clutch — 4.9 rating",
      width: 111,
      height: 44,
    },
    {
      src: "/assets/proof/trustpilot-rating.svg",
      href: "https://www.trustpilot.com/review/dynamicdreamz.com",
      alt: "Dynamic Dreamz on Trustpilot — 4.9 rating",
      width: 124,
      height: 44,
    },
    {
      src: "/assets/proof/upwork-top-rated-plus.svg",
      href: "https://www.upwork.com/ag/dynamicdreamz/",
      alt: "Dynamic Dreamz — Top Rated Plus on Upwork",
      width: 134,
      height: 44,
    },
  ],
  tabletSlider: {
    slides: [
      {
        src: "/assets/services/full-stack-development/donjjewellery.webp",
        alt: "Don J Jewellery custom application showcase",
        width: 800,
        height: 1190,
      },
      {
        src: "/assets/services/full-stack-development/homeopathway.webp",
        alt: "Homeopathway custom platform showcase",
        width: 800,
        height: 1190,
      },
      {
        src: "/assets/services/full-stack-development/paramountextrusions.webp",
        alt: "Paramount Extrusions custom web application showcase",
        width: 800,
        height: 1190,
      },
    ],
    topBadge: {
      src: "/assets/services/full-stack-development/node-js-development-badge.webp",
      alt: "Node.js development by Dynamic Dreamz",
      width: 346,
      height: 212,
    },
    bottomBadge: {
      src: "/assets/services/full-stack-development/next-js-development-badge.webp",
      alt: "Next.js development by Dynamic Dreamz",
      width: 260,
      height: 252,
    },
  },
};

export const fullStackDevelopmentBrandsContent = {
  slug: "full-stack-development",
  heading: "Trusted by\nLeading Brands",
  ariaLabel: "Trusted by leading brands",
};

export const fullStackDevelopmentWhatWeBuildContent: ThemeCustomizationServicesContent = {
  eyebrow: "What we Build",
  heading: "Complete Digital Products, not just Isolated Development Tasks",
  description:
    "Full stack projects can range from a custom business portal to a headless ecommerce storefront. We focus on the user experience, the business logic behind it and the integrations needed to make the product useful.",
  boxes: [
    {
      number: "01",
      title: "Custom Web Applications",
      description:
        "Customer portals, internal systems, dashboards, SaaS products and business applications with custom frontend and backend requirements.",
    },
    {
      number: "02",
      title: "Shopify Custom Apps",
      description:
        "Custom Shopify apps for store-specific workflows, integrations, data synchronization, admin tools and functionality that goes beyond standard theme capabilities.",
    },
    {
      number: "03",
      title: "Headless Ecommerce",
      description:
        "Flexible ecommerce frontends using Shopify, Medusa.js or WooCommerce with modern frameworks such as Next.js or Hydrogen.",
    },
    {
      number: "04",
      title: "Corporate & Content Platforms",
      description:
        "Modern websites using Next.js and headless CMS platforms such as Strapi for flexible content management and reusable page sections.",
    },
    {
      number: "05",
      title: "API & System Integrations",
      description:
        "Connect ecommerce, CRM, ERP, payment, shipping, marketing or other business platforms through available APIs and custom middleware.",
    },
    {
      number: "06",
      title: "Existing Application Development",
      description:
        "Take over, improve or extend an existing application with new features, bug fixing, integrations, architecture improvements and ongoing support.",
    },
  ],
};

export const fullStackDevelopmentServicesContent: ShopifyStageServicesContent = {
  eyebrow: "Full Stack Development Services",
  heading: "One Team across Frontend, Backend and Integrations",
  description:
    "The exact stack depends on the product. We can work end to end or take responsibility for one part of an existing application while coordinating with your internal team.",
  items: [
    {
      tag: "Frontend Development",
      title: "Fast, Responsive User Experiences",
      description:
        "Build modern interfaces for web applications, ecommerce stores and content platforms using reusable components and responsive layouts.",
      pills: ["React", "Next.js", "Angular", "Tailwind CSS", "SCSS"],
    },
    {
      tag: "Backend Development",
      title: "APIs, Business Logic and Application Services",
      description:
        "Develop backend systems that handle application logic, authentication, data, integrations and business workflows.",
      pills: ["Node.js", "NestJS", "TypeScript", "Python"],
    },
    {
      tag: "Shopify Custom App Development",
      title: "Custom Apps for Shopify Workflows and Integrations",
      description:
        "Build Shopify custom apps for store-specific workflows, admin tools, data synchronization, external-system integrations and business logic that should live outside the theme.",
      pills: [
        "Shopify APIs",
        "Webhooks",
        "External APIs",
        "Custom Admin Interfaces",
        "Middleware",
        "Data Synchronization",
      ],
    },
    {
      tag: "Headless Ecommerce Development",
      title: "Separate the Storefront from the Commerce Backend",
      description:
        "Build flexible headless storefronts when a standard theme-based architecture is not enough for the required experience or frontend control.",
      pills: [
        "Shopify + Hydrogen",
        "Shopify + Next.js",
        "Medusa.js + Next.js",
        "WooCommerce + Next.js",
      ],
    },
    {
      tag: "Headless CMS Development",
      title: "Flexible Content Management with a Modern Frontend",
      description:
        "Give content teams an editable CMS while keeping the frontend independent, fast and reusable across different page types.",
      pills: [
        "Next.js + Strapi",
        "Dynamic Content Blocks",
        "SSR/SSG",
        "Webhook Revalidation",
      ],
    },
    {
      tag: "Cloud Deployment & Support",
      title: "Launch and Maintain the Application",
      description:
        "Support deployment, hosting configuration, environment setup and ongoing application improvements based on the project architecture.",
      pills: [
        "AWS",
        "Azure",
        "Vercel",
        "Render",
        "Netlify",
        "Amplify",
        "Strapi Cloud",
      ],
    },
  ],
};

export const fullStackDevelopmentTechnologiesContent: TechnologiesWorkWithContent = {
  eyebrow: "Technologies We Work With",
  heading: "A modern stack selected around the product, not around one framework.",
  description:
    "We choose technologies based on the application requirements, existing systems, team preferences, scalability and long-term maintainability. The stack below reflects the technologies our full stack work commonly uses.",
  categories: [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "Angular", "Tailwind CSS", "SCSS"],
    },
    {
      category: "Backend",
      technologies: [
        "Node.js",
        "NestJS",
        "TypeScript",
        "Python",
        "REST APIs",
        "Webhooks",
      ],
    },
    {
      category: "Commerce & CMS",
      technologies: [
        "Shopify",
        "Hydrogen",
        "Strapi",
        "Medusa.js",
        "WordPress",
        "WooCommerce",
      ],
    },
    {
      category: "Cloud & Deployment",
      technologies: [
        "Vercel",
        "AWS Amplify",
        "Azure",
        "AWS EC2",
        "Render",
        "Strapi Cloud",
      ],
    },
  ],
};

export const fullStackDevelopmentArchitectureContent: RecentArchitecturePatternsContent = {
  eyebrow: "Recent Architecture Patterns",
  heading: "Examples of the Type of Full Stack Work We Handle",
  description:
    "These are representative implementation patterns based on recent project work and the types of architecture our team supports.",
  items: [
    {
      label: "Headless Ecommerce",
      title: "Shopify + Next.js / Hydrogen",
      description:
        "Build a custom storefront while Shopify continues to manage core commerce data and operations. Suitable where the frontend experience needs more flexibility than a standard theme.",
      stack: "Shopify · Hydrogen or Next.js · Vercel · APIs",
    },
    {
      label: "Custom Commerce",
      title: "Medusa.js + Next.js",
      description:
        "Use a modular commerce backend with a custom Next.js storefront for projects that require greater control over commerce logic and frontend architecture.",
      stack: "Medusa.js · Next.js · Node.js · Cloud deployment",
    },
    {
      label: "Decoupled WordPress / WooCommerce",
      title: "WooCommerce + Next.js",
      description:
        "Keep WordPress or WooCommerce as the CMS/commerce backend while delivering a separate frontend experience using Next.js.",
      stack: "WordPress · WooCommerce · Next.js · APIs",
    },
    {
      label: "Headless CMS",
      title: "Next.js + Strapi",
      description:
        "Build content-rich corporate websites with reusable content modules, SSR/SSG rendering and webhook-based revalidation so published CMS changes can update the frontend efficiently.",
      stack: "Next js · Strapi · Dynamic Zones · SSR SSG · Webhooks",
    },
  ],
};

export const fullStackDevelopmentCaseStudiesContent = {
  eyebrow: "CASE STUDIES",
  heading: "Real Projects across Headless Commerce, Custom Apps and Integrations",
  description:
    "These projects show how our full stack team works across frontend experiences, backend logic, ecommerce platforms, APIs and external systems to solve different business requirements.",
  items: [
    {
      title:
        "S&F Product Group: Full-Stack SaaS Inventory Management Platform with Real-Time Stock Control",
      href: "/case-studies/sandf-product-group",
      image: "/assets/case-studies/sandf-product-group.webp",
      imageAlt:
        "S&F Product Group: Full Stack SaaS Inventory Management Platform with Real-Time Stock Control",
      technology: "Full-Stack Development",
      industry: "Retail",
      tags: ["Mobile Application Development", "Web Application Development"],
      ctaLabel: "View Case Study",
    },
    {
      title:
        "Beauty Software: Cloud-Based Salon, Spa & Beauty Clinic Management Platform",
      href: "/case-studies/beauty-software",
      image: "/assets/case-studies/beauty-software.webp",
      imageAlt:
        "Beauty Software: Cloud-Based Salon, Spa & Beauty Clinic Management Platform",
      technology: "Full-Stack Development",
      industry: "Beauty & Cosmetics",
      tags: ["Booking & Management System", "Full Stack Development"],
      ctaLabel: "View Case Study",
    },
    {
      title:
        "BluBox Medical: Custom ERP Platform Unifying Customer, Vendor, Pricing & Order Management",
      href: "/case-studies/blubox",
      image: "/assets/case-studies/blubox.webp",
      imageAlt:
        "BluBox Medical: Custom ERP Platform Unifying Customer, Vendor, Pricing & Order Management",
      technology: "Full-Stack Development",
      industry: "Healthcare & Medical",
      tags: ["Custom ERP Platform", "Enterprise Software"],
      ctaLabel: "View Case Study",
    },
  ] as readonly CaseStudyPreviewItem[],
};

export const fullStackDevelopmentHowWeWorkContent: EvaluationFrameworkContent = {
  eyebrow: "How We Work",
  heading: "From Requirements to a Maintainable Production Application",
  description:
    "Full Stack development works best when the architecture, integrations and user experience are planned together before implementation begins.",
  items: [
    {
      title: "Understand the Product",
      description:
        "Review users, workflows, current systems, required features and the business outcome.",
    },
    {
      title: "Define Requirements",
      description:
        "Break down features, integrations, technical requirements and priorities into a clear development scope before implementation begins.",
    },
    {
      title: "Plan the Architecture",
      description:
        "Choose the frontend, backend, CMS or commerce platform, APIs and deployment approach.",
    },
    {
      title: "Design & Build",
      description:
        "Develop the user interface, application logic, APIs and integrations around the approved scope.",
    },
    {
      title: "Develop the Application",
      description:
        "Build the frontend, backend services, APIs, business logic and integrations around the approved architecture and scope.",
    },
    {
      title: "QA & Integration Testing",
      description:
        "Test the main user journeys, integrations, devices, browsers and deployment environment.",
    },
    {
      title: "Launch & Support",
      description:
        "Deploy the application, monitor the release and continue development as the product evolves.",
    },
    {
      title: "Improve & Support",
      description:
        "Continue with feature development, bug fixes, performance improvements, integrations and technical enhancements as the product evolves.",
    },
  ],
};

export const fullStackDevelopmentWhyChooseContent: CityWhyChooseBoxesContent = {
  eyebrow: "Why Dynamic Dreamz",
  heading: "A Full Stack Team that also Understands Ecommerce and Product Delivery",
  description:
    "Many projects cross multiple disciplines. Our wider team can coordinate full stack development with ecommerce, Shopify, UI/UX, mobile and QA requirements where the project needs them.",
  items: [
    {
      subtitle: "End-to-End Development",
      title: "Frontend to Deployment",
      description:
        "One team can work across the user interface, backend services, integrations and deployment rather than splitting the product across multiple vendors.",
    },
    {
      subtitle: "Ecommerce Experience",
      title: "Strong Commerce Understanding",
      description:
        "Our ecommerce background is especially useful for Shopify custom apps, headless storefronts and integrations involving store operations.",
    },
    {
      subtitle: "Flexible Architecture",
      title: "Use the Right Stack",
      description:
        "We do not force every project into one framework. The stack is selected around the product, existing systems and long-term requirements.",
    },
    {
      subtitle: "Ongoing Support",
      title: "Continue after Launch",
      description:
        "We can support feature development, bug fixing, integrations and technical improvements after the first release.",
    },
  ],
};

export const fullStackDevelopmentTestimonialsContent = {
  eyebrow: "Client Stories",
  heading: "Don't Just Take Our Word For It",
  description:
    "Hear directly from the clients who have worked with Dynamic Dreamz across Shopify, ecommerce and long-term development engagements.",
};

export const fullStackDevelopmentFaqContent = {
  eyebrow: "Full Stack Development FAQ",
  heading: "Questions clients ask before starting a full stack project",
  description:
    "Simple answers about custom applications, Shopify apps, headless development, technology choices, deployment and ongoing support.",
  idPrefix: "full-stack-faq",
  items: [
    {
      question: "What full stack development services does Dynamic Dreamz provide?",
      answer:
        "We build custom web applications, ecommerce platforms, Shopify custom apps, headless websites, API integrations and backend systems. We can work across frontend, backend, databases, CMS platforms, cloud deployment and ongoing support.",
    },
    {
      question: "Can you build a complete application from frontend to backend?",
      answer:
        "Yes. Depending on the project, our team can handle the user interface, frontend application, backend APIs, database integration, authentication, third-party services, deployment and ongoing maintenance.",
    },
    {
      question: "Do you build Shopify custom apps?",
      answer:
        "Yes. We build Shopify custom apps for store-specific workflows, integrations, admin tools, data synchronization and custom functionality. The solution can connect Shopify with external systems, APIs or custom business logic based on the requirement.",
    },
    {
      question: "Do you work with headless ecommerce?",
      answer:
        "Yes. We work with headless architectures such as Shopify with Hydrogen or Next.js, Medusa.js with Next.js, and WooCommerce or WordPress with a decoupled frontend when a headless approach fits the project.",
    },
    {
      question: "Can you build a headless CMS website?",
      answer:
        "Yes. We can build websites using frontend frameworks such as Next.js with a headless CMS such as Strapi, giving content teams an editable CMS while keeping the frontend flexible and performance-focused.",
    },
    {
      question: "Which frontend technologies do you use?",
      answer:
        "Our frontend work commonly includes React, Next.js, Angular, Tailwind CSS and SCSS. The technology is selected based on the project requirements, existing stack and long-term maintainability.",
    },
    {
      question: "Which backend technologies do you use?",
      answer:
        "Our backend work can include Node.js, NestJS, TypeScript and Python, along with APIs, databases, authentication and integrations required by the application.",
    },
    {
      question: "Can you take over an existing full stack application?",
      answer:
        "Yes. We can review an existing codebase, identify the current architecture and dependencies, and support bug fixing, feature development, integrations, performance improvements and ongoing maintenance.",
    },
    {
      question: "How do you deploy full stack applications?",
      answer:
        "Deployment depends on the application architecture. We work with platforms such as AWS, Azure, Vercel, Render, Netlify, Amplify and Strapi Cloud where appropriate.",
    },
    {
      question: "How much does full stack development cost?",
      answer:
        "Cost depends on the application scope, number of screens, backend complexity, integrations, data requirements and deployment setup. We can work on a project basis, hourly support or an ongoing dedicated-development model.",
    },
  ] as readonly FaqAccordionItem[],
};
