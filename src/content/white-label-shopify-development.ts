import type {
  WhiteLabelCapability,
  WhiteLabelCard,
  WhiteLabelFaq,
  WhiteLabelHero,
  WhiteLabelPlan,
  WhiteLabelService,
  WhiteLabelStat,
  WhiteLabelTool,
} from "@/types/white-label-service";
import type { PricingEngagementContent } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import type { PortfolioShowcaseSectionProps } from "@/components/sections/portfolio-showcase-section";

export const whiteLabelShopifySectionCopy = {
  toolsAriaLabel: "Shopify technologies and tools",
  pricingTitle: "Choose the Right Shopify Engagement for Your Agency",
  pricingDescription:
    "See the commercial model early. Start with one project, add flexible Shopify capacity, or build a dedicated delivery setup around your ongoing pipeline.",
  pricingCtaLabel: "LET'S DISCUSS YOUR PROJECT!",
  processTitle: "How Our White Label Shopify Partnership Works",
  processEyebrow: "Simple Agency Onboarding",
  processNote:
    "We maintain strict confidentiality, guaranteeing that all work stays under your brand.",
  whyTitle: "Why Partner with Dynamic Dreamz for White Label Shopify Development?",
  servicesTitle: "Comprehensive White Label Shopify Development Services",
  toolsTitle: "Shopify Technologies & Tools We Work With",
  toolsEyebrow: "Technical Ecosystem",
  toolsDescription: "At Dynamic Dreamz, we are skilled in:",
  faqEyebrow: "Agency Due Diligence",
  faqTitle: "White Label Shopify <br/> Development FAQ",
  faqDescription:
    "Clear answers to the questions agencies commonly ask before choosing a white label Shopify development agency or Shopify technology partner.",
  testimonialsEyebrow: "Client Stories",
  engagementModelLabel: "ENGAGEMENT MODEL",
  bestForLabel: "BEST FOR",
} as const;

export const whiteLabelShopifyHero = {
  title: "White label Shopify Development for Digital Agencies",
  titleAccent: "for Digital Agencies",
  lead: "Your Shopify Technology Partner. An Extension of Your Team.",
  paragraphs: [
    "Dynamic Dreamz provides white label Shopify development services for agencies that need additional capacity or specialist Shopify expertise. From Shopify and Shopify Plus to B2B, migrations, custom apps, iOS & Android mobile apps, integrations, CRO, automation and ongoing development, our team works behind your agency while you stay in control of the client relationship.",
  ],
  cta: "book an agency intro",
  ctaHref: "/book-a-discovery-call",
  secondaryCta: {
    label: "see pricing",
    href: "#our_white_label_pricing",
  },
  illustration: "/assets/white-label-shopify/hero/white-label-shopify-development-agencies.svg",
  illustrationAlt: "White label Shopify development for digital agencies",
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
      label: "Clutch 4.9",
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
      width: 111,
      height: 44,
    },
    {
      label: "Upwork Top Rated Plus",
      icon: "/assets/proof/upwork-top-rated-plus.svg",
      alt: "Dynamic Dreamz on Upwork — Top Rated Plus",
      href: "https://www.upwork.com/ag/dynamicdreamz/",
      width: 111,
      height: 44,
    },
  ],
} as const satisfies WhiteLabelHero & {
  titleAccent: string;
  ctaHref: string;
  video: string;
  badges: readonly {
    label: string;
    icon: string;
    alt: string;
    href: string;
    width: number;
    height: number;
  }[];
};

export const whiteLabelShopifyCounters = [
  {
    value: "50+ Agencies",
    label: "Supported Worldwide",
  },
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
] as const;

export const whiteLabelShopifyStats: readonly WhiteLabelStat[] = [
  {
    value: "50+ Agencies",
    label: "Supported Worldwide",
    icon: "/assets/proof/years-of-experience.svg",
  },
  {
    value: "Platinum Partner",
    label: "Shopify-focused delivery",
    icon: "/assets/proof/skilled-developers.svg",
  },
  {
    value: "20+ Years",
    label: "Web & Ecommerce Experience",
    icon: "/assets/proof/client-reviews.svg",
  },
  {
    value: "150+ Experts",
    label: "Commerce & Technology",
    icon: "/assets/proof/sites-delivered.svg",
  },
];

export type WhiteLabelScenarioTab = {
  id: string;
  title: string;
  subtitle: string;
  kicker: string;
  heading: string;
  description: string;
  features: readonly string[];
  meta: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

export const whiteLabelShopifyScenarios = {
  eyebrow: "start with your agency",
  heading: "Where Does Your Agency Need Shopify Support?",
  description:
    "Our white label Shopify development services are built around the situations agencies actually face — from extra development capacity and Figma-to-Shopify builds to Shopify Plus, migration, mobile apps, CRO, custom apps, AI and automation.",
  items: [
    {
      id: "capacity",
      title: "Scale Shopify Capacity",
      subtitle: "Our internal team is full or our pipeline changes month to month.",
      kicker: "White Label Shopify Developers",
      heading: "Add Shopify capacity without adding permanent headcount.",
      description:
        "Dynamic Dreamz works as an extension of your team for overflow development, maintenance, enhancements and technically complex Shopify work while your agency remains client-facing.",
      features: [
        "Overflow Development",
        "Dedicated Resources",
        "Maintenance",
        "Theme Enhancements",
        "QA Support",
        "Long-Term Delivery",
      ],
      meta: "Best fit: hourly support, project delivery or a dedicated developer / team.",
      primaryCta: {
        label: "Talk About Capacity",
        href: "/contact-us",
      },
      secondaryCta: {
        label: "View Pricing & Engagement",
        href: "#our_white_label_pricing",
      },
    },
    {
      id: "build",
      title: "Build from Figma",
      subtitle: "We own the creative and need white label Shopify website development.",
      kicker: "White Label Shopify Website Development",
      heading: "Your creative team designs it. Our Shopify team builds it.",
      description:
        "We turn approved Figma designs into responsive, editable Shopify storefronts, themes, custom sections, product pages and collection experiences delivered behind your agency brand.",
      features: [
        "Figma-to-Shopify",
        "Online Store 2.0",
        "Custom Themes",
        "PDP & PLP",
        "Custom Sections",
        "Responsive QA",
      ],
      meta: "Includes white label Shopify design and white label Shopify web development support for agency-led creative projects.",
      primaryCta: {
        label: "Send Your Figma Brief",
        href: "/contact-us",
      },
      secondaryCta: {
        label: "View Engagement Options",
        href: "#our_white_label_pricing",
      },
    },
    {
      id: "plus",
      title: "Launch Shopify Plus / B2B",
      subtitle: "The brief needs deeper enterprise Shopify expertise.",
      kicker: "Shopify Plus & B2B Development",
      heading: "Bring enterprise Shopify expertise into your agency when the brief gets complex.",
      description:
        "Our Shopify development partner team supports Shopify Plus architecture, B2B development services on Shopify, Checkout Extensibility, Shopify Functions, customer-specific catalogs and connected systems.",
      features: [
        "Shopify Plus",
        "B2B & Wholesale",
        "Checkout Extensibility",
        "Shopify Functions",
        "Shopify Markets",
        "ERP / CRM / PIM",
      ],
      meta: "Best fit: scoped Shopify Plus delivery or recurring specialist support.",
      primaryCta: {
        label: "Discuss a Shopify Plus Project",
        href: "/contact-us",
      },
      secondaryCta: {
        label: "View Pricing & Engagement",
        href: "#our_white_label_pricing",
      },
    },
    {
      id: "migration",
      title: "Migrate to Shopify",
      subtitle: "Our client is moving from another ecommerce platform.",
      kicker: "Shopify Migration & Replatforming",
      heading: "Win the migration. Let us handle the technical move to Shopify.",
      description:
        "We support migration from WooCommerce, Magento, BigCommerce, Salesforce Commerce Cloud and custom platforms with data mapping, URL redirects, SEO preservation, integration rebuilding and staged cutover.",
      features: [
        "Data Migration",
        "URL Mapping",
        "301 Redirects",
        "SEO Preservation",
        "Integration Rebuilds",
        "Post-Launch Support",
      ],
      meta: "Magento is referenced here only as a source platform for Shopify migration — not as a separate white-label service.",
      primaryCta: {
        label: "Review a Migration Brief",
        href: "/contact-us",
      },
      secondaryCta: {
        label: "View Engagement Options",
        href: "#our_white_label_pricing",
      },
    },
    {
      id: "apps",
      title: "Integrate & Automate",
      subtitle: "The project goes beyond standard themes and marketplace apps.",
      kicker: "Custom Apps, Integrations, AI & Automation",
      heading: "Extend Shopify when standard apps and themes are not enough.",
      description:
        "Our Shopify and full-stack teams support custom apps, APIs, middleware, Shopify Flow, connected workflows and AI-assisted automation where it improves delivery or solves a real ecommerce problem.",
      features: [
        "Custom Shopify Apps",
        "Admin & Storefront API",
        "Shopify Functions",
        "Middleware",
        "Shopify Flow",
        "AI / Automation",
      ],
      meta: "Supports integration-heavy projects and white-label Shopify automation requirements without making AI the main page story.",
      primaryCta: {
        label: "Discuss the Integration",
        href: "/contact-us",
      },
      secondaryCta: {
        label: "View Pricing & Engagement",
        href: "#our_white_label_pricing",
      },
    },
    {
      id: "mobile",
      title: "Build a Mobile App",
      subtitle: "We need Shopify-connected mobile commerce capability.",
      kicker: "Shopify Mobile App Development",
      heading: "Add iOS and Android shopping apps to your agency offering.",
      description:
        "We build Shopify-connected mobile apps with product and order synchronization, customer accounts, push notifications, loyalty, subscriptions and repeat-purchase experiences.",
      features: [
        "iOS Development",
        "Android Development",
        "Shopify Sync",
        "Push Notifications",
        "Loyalty",
        "Subscriptions",
      ],
      meta: "Best fit when your client's roadmap extends beyond the storefront and your agency wants mobile delivery under the same relationship.",
      primaryCta: {
        label: "Discuss a Mobile App",
        href: "/contact-us",
      },
      secondaryCta: {
        label: "View Engagement Options",
        href: "#our_white_label_pricing",
      },
    },
  ] satisfies readonly WhiteLabelScenarioTab[],
} as const;

export const whiteLabelShopifyPortfolio: PortfolioShowcaseSectionProps["content"] = {
  eyebrow: "Portfolio",
  heading: "Explore Our Work",
  description:
    "For 20 years, we’ve worked on challenging and impactful projects for startups and leading global brands. Every website we create is designed around our clients’ goals.",
  ctaLabel: "View All Work",
  ctaHref: "/our-work",
  secondaryCtaLabel: "View Pricing & Plans",
  secondaryCtaHref: "#our_white_label_pricing",
  items: [
    {
      name: "Nufyx",
      category: "SHOPIFY",
      href: "https://nufyx.com/",
      image: "/assets/healthcare/portfolio/nufyx-protein-products.webp",
      imageAlt: "Nufyx Image",
    },
    {
      name: "Nekter Juice Bar",
      category: "SHOPIFY",
      href: "https://www.nekterjuicebar.com/",
      image: "/assets/food-beverages/portfolio/nekter-juice-bar.webp",
      imageAlt: "Nekter Juice Bar Image",
    },
    {
      name: "Pagerie",
      category: "SHOPIFY",
      href: "https://www.pagerie.com/",
      image: "/assets/pet-industry/portfolio/pagerie-dog-accessories.webp",
      imageAlt: "Pagerie Image",
    },
    {
      name: "Luxxi Nails",
      category: "SHOPIFY",
      href: "https://luxxinails.com/",
      image: "/assets/beauty-cosmetics/portfolio/luxxi-nails.webp",
      imageAlt: "Luxxi Nails Image",
    },
    {
      name: "Eco Soul",
      category: "SHOPIFY",
      href: "https://www.ecosoulhome.com/",
      image: "/assets/our-work/projects/eco-soul.webp",
      imageAlt: "Eco Soul Image",
    },
    {
      name: "AdHOC Atelier",
      category: "SHOPIFY",
      href: "https://adhocatelier.it/",
      image: "/assets/hire-shopify-developers/portfolio/adhoc-atler.webp",
      imageAlt: "AdHOC Atelier Image",
    },
    {
      name: "Bombay Shirt Company",
      category: "SHOPIFY",
      href: "https://bombayshirts.com/",
      image: "/assets/fashion/portfolio/bombay-shirt-company-fashion.webp",
      imageAlt: "Bombay Shirt Company Image",
    },
    {
      name: "Holy Plantz",
      category: "SHOPIFY",
      href: "https://holyplantz.com/",
      image: "/assets/our-work/projects/holy-plantz.webp",
      imageAlt: "Holy Plantz Image",
    },
  ],
};

export const whiteLabelShopifyPricing: PricingEngagementContent = {
  heading: "Choose the Right Shopify Engagement for Your Agency",
  description:
    "See the commercial model early. Start with one project, add flexible Shopify capacity, or build a dedicated delivery setup around your ongoing pipeline.",
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
      badge: "Consistent Shopify Pipeline?",
      price: "From $2,000/month",
      description:
        "For agencies wanting ongoing delivery capacity without hiring in-house. Full-time or dedicated developer setups aligned to your workflow.",
      ctaLabel: "Discuss a Dedicated Setup",
      ctaHref: "/contact-us",
    },
  ],
};

export const whiteLabelShopifyDeliveryComparison = {
  eyebrow: "Choose the Right Delivery Model",
  heading: "In-House, Freelancer or a White-Label Shopify Partner?",
  description:
    "Agencies usually compare more than price. The real questions are Shopify depth, available capacity, QA, continuity and whether the delivery model can grow with the pipeline.",
  columns: [
    { label: "What matters", isWinner: false },
    { label: "In-House Hire", isWinner: false },
    { label: "Freelancer", isWinner: false },
    {
      kicker: "RECOMMENDED FOR AGENCIES",
      label: "Dynamic Dreamz Shopify Platinum Partner",
      isWinner: true,
    },
  ],
  rows: [
    {
      feature: "Shopify expertise",
      inHouse: "Depends on the person hired",
      freelancer: "Depends on the individual",
      partner: "Shopify Platinum Partner capability",
    },
    {
      feature: "Technical breadth",
      inHouse: "Usually limited to the hire's skill set",
      freelancer: "Usually one specialist",
      partner: "Plus, B2B, apps, mobile, integrations, CRO & migration",
    },
    {
      feature: "Capacity",
      inHouse: "Fixed to internal headcount",
      freelancer: "Limited by individual availability",
      partner: "Flexible project, hourly or dedicated team capacity",
    },
    {
      feature: "Project management",
      inHouse: "Managed internally",
      freelancer: "Usually agency-managed",
      partner: "Structured PM support available",
    },
    {
      feature: "QA",
      inHouse: "Internal responsibility",
      freelancer: "Varies",
      partner: "Development + QA workflow",
    },
    {
      feature: "White-label / NDA",
      inHouse: "Internal by default",
      freelancer: "Must be arranged individually",
      partner: "Agency-focused white-label delivery model",
    },
    {
      feature: "Scaling",
      inHouse: "Recruit again",
      freelancer: "Find another freelancer",
      partner: "Add resources as project needs grow",
    },
  ],
  ctas: {
    primary: {
      label: "Book An Agency Intro Call",
      href: "/book-a-discovery-call",
    },
    secondary: {
      label: "See Pricing And engagement options",
      href: "#our_white_label_pricing",
    },
  },
} as const;

export const whiteLabelShopifyBrandProtection = {
  eyebrow: "Your Brand in Front",
  heading: "Our Shopify Team Behind It.",
  description:
    "You keep the client relationship, strategy and commercial ownership. Dynamic Dreamz acts as the Shopify technology partner behind your agency, providing Shopify engineering, QA and specialist delivery capacity when you need it.",
  cards: [
    {
      title: "NDA & Confidentiality",
      description: "We support NDA-based engagements and agreed confidentiality requirements.",
    },
    {
      title: "White-Label Delivery",
      description: "Work is prepared for your agency to review and deliver under your brand.",
    },
    {
      title: "Your Workflow",
      description: "Slack, Teams, ClickUp, Jira, Asana, Trello, Monday and similar platforms.",
    },
    {
      title: "Your Client, Your Relationship",
      description: "We do not independently approach or solicit agency clients.",
    },
    {
      title: "Private Client Work",
      description: "Agency client work is not used publicly without approval.",
    },
    {
      title: "Clear Delivery Visibility",
      description: "Scope, estimates, responsibilities and review points remain transparent.",
    },
  ],
  ctas: {
    primary: {
      label: "Book An Agency Intro Call",
      href: "/book-a-discovery-call",
    },
    secondary: {
      label: "About Dynamic Dreamz",
      href: "/about-us",
    },
  },
} as const;

export const whiteLabelShopifyAgencyUseCases = {
  eyebrow: "Agency Use Cases",
  heading: "How Agencies Use Dynamic Dreamz",
  description:
    "Different agencies need different things from a white-label Shopify partner. These examples show where we fit best — without exposing confidential client relationships.",
  cards: [
    {
      tag: "USA AGENCY · Performance Marketing Agency",
      heading: "We become the Shopify delivery team behind growth.",
      description:
        "Your team wins the strategy and CRO work. We give you the development capacity to ship it.",
      pill: "Overflow Development · CRO · Maintenance",
      ctaLabel: "About Dynamic Dreamz",
      ctaHref: "/contact-us",
    },
    {
      tag: "UK / Europe · Branding Agency",
      heading: "Your creative team. Our Shopify engineering.",
      description:
        "You own brand, UX and Figma. We deliver the storefront behind your agency.",
      pill: "Figma-to-Shopify · Shopify Plus · QA",
      ctaLabel: "Send a figma brief",
      ctaHref: "/contact-us",
    },
    {
      tag: "Australia / Canada · Ecommerce Agency",
      heading: "Add specialist capability when the brief gets complex.",
      description:
        "Bring us in for requirements your internal team does not need to carry permanently.",
      pill: "B2B · Integrations · Apps · iOS / Android",
      ctaLabel: "Discuss a complex projects",
      ctaHref: "/contact-us",
    },
  ],
} as const;

export const whiteLabelShopifyPartnershipSteps: readonly WhiteLabelCard[] = [
  {
    title: "Agency Intro Call",
    description: "We understand your agency, workflow and the type of Shopify support you need..",
  },
  {
    title: "NDA & Brief",
    description: "Confidentiality is aligned before sensitive project information is shared.",
  },
  {
    title: "Scope & Estimate",
    description: "We align on approach, effort, timeline, dependencies and responsibilities.",
  },
  {
    title: "Join Your Workflow",
    description: "Our team works within the tools and review process agreed with your agency.",
  },
  {
    title: "Build, QA & Review",
    description: "Development and QA happen before your agency reviews client-facing delivery.",
  },
  {
    title: "Continue or Scale",
    description: "Use the same relationship for support, new projects or additional capacity.",
  },
];

export const whiteLabelShopifyFaqs: readonly WhiteLabelFaq[] = [
  {
    question: "What is white label Shopify development?",
    answer:
      "White label Shopify development is a partnership where a specialist Shopify team builds, migrates, improves or supports Shopify stores on behalf of a digital agency. The agency remains client-facing and delivers the work under its own brand while the development partner works behind the scenes.",
  },
  {
    question: "Is Dynamic Dreamz a white label Shopify agency?",
    answer:
      "Yes. Dynamic Dreamz works as a white label Shopify agency and Shopify development partner for digital, ecommerce, branding and marketing agencies that need Shopify and Shopify Plus delivery behind their agency brand.",
  },
  {
    question: "How is white label Shopify development different from outsourcing?",
    answer:
      "Shopify outsourcing can simply mean assigning work to an external developer. A white-label partnership is structured around your agency’s brand, client relationship, confidentiality, workflow, review process and ongoing delivery requirements.",
  },
  {
    question: "Will Dynamic Dreamz contact our clients?",
    answer:
      "Your agency remains in control of the client relationship. We do not independently approach or solicit agency clients.",
  },
  {
    question: "Do you work under NDA?",
    answer:
      "Yes. We support NDA-based engagements and can follow project-specific confidentiality requirements.",
  },
  {
    question: "Can you work from our Figma designs?",
    answer:
      "Yes. We support white label Shopify website development and Figma-to-Shopify delivery, including responsive themes, custom sections, product pages, collections and storefront experiences.",
  },
  {
    question: "Can your team handle Shopify Plus and B2B?",
    answer:
      "Yes. We support Shopify Plus, B2B and wholesale, Checkout Extensibility, Shopify Functions, Shopify Markets and complex ecommerce integrations.",
  },
  {
    question: "Can you build Shopify-connected iOS and Android mobile apps?",
    answer:
      "Yes. Our mobile app team builds Shopify-connected iOS and Android shopping apps with product and order synchronization, customer accounts, push notifications, loyalty, subscriptions and repeat-purchase experiences.",
  },
  {
    question: "Can we hire a dedicated Shopify developer or team?",
    answer:
      "Yes. Agencies with consistent Shopify requirements can engage a dedicated developer or discuss a wider dedicated team based on the skills, capacity and project mix required.",
  },
  {
    question: "How much does white label Shopify development cost?",
    answer:
      "Our standard Shopify development rate starts at $25 per hour. Project-based work is estimated according to scope, while dedicated developer or team engagements start from $2,000 per month depending on resource level, skills and capacity required.",
  },
  {
    question: "Which markets do you support?",
    answer:
      "We support agencies worldwide, with a strong focus on agency partnerships across the USA, UK, Europe, Canada and Australia.",
  },
];

export const whiteLabelShopifyReasons: readonly (WhiteLabelCard | null)[] = [
  ...whiteLabelShopifyPartnershipSteps,
  null,
  null,
  null,
];

export const deliveredUnderBrand = {
  title: "Delivered Under Your Brand",
  description:
    "Beyond development, we help your clients automate operations, improve customer experience, and get found by AI-powered search engines. All white label, all under your agency's name.",
  items: [
    {
      title: "AI customer support",
      description: "Deflect repeat tickets, speed up responses, and let your clients' teams focus on real issues.",
      icon: "/assets/white-label-shopify/ai/ai-customer-support.svg",
      tools: ["Gorgias", "Tidio", "ChatGPT"],
    },
    {
      title: "Store automation",
      description: "Automate fulfilment, tagging, notifications, and inventory, no manual grunt work.",
      icon: "/assets/white-label-shopify/ai/store-automation.svg",
      tools: ["Shopify Flow", "Zapier", "Make"],
    },
    {
      title: "AI product content",
      description: "Generate and optimise product descriptions, collection copy, and SEO content at scale.",
      icon: "/assets/white-label-shopify/ai/ai-product-content.svg",
      tools: ["Shopify Magic", "Sidekick", "OpenAI"],
    },
    {
      title: "Email & retention",
      description: "Behaviour-based flows for cart recovery, post-purchase, and win-back campaigns.",
      icon: "/assets/white-label-shopify/ai/email-retention.svg",
      tools: ["Klaviyo"],
    },
  ] satisfies readonly WhiteLabelCapability[],
} as const;

export const aiDrivenShopping = {
  title: "Future-ready for AI-driven shopping",
  description:
    "We prepare your clients' stores to be discovered, cited, and recommended by AI engines not just ranked on Google.",
  items: [
    {
      title: "AI search visibility",
      description: "Optimise pages, FAQs, and schema so ChatGPT, Gemini, and Perplexity can read and cite your store.",
      icon: "/assets/white-label-shopify/ai/ai-search-visibility.svg",
    },
    {
      title: "Structured data",
      description: "Schema markup for products, reviews, FAQs, and pricing the signals AI engines rely on.",
      icon: "/assets/white-label-shopify/ai/structured-data.svg",
    },
    {
      title: "Agentic commerce",
      description: "Ready for Shopify's Universal Commerce Protocol so AI agents can discover products and build carts.",
      icon: "/assets/white-label-shopify/ai/agentic-commerce.svg",
    },
    {
      title: "Trust signals",
      description: "Reviews, internal linking, and product data the full trust layer AI needs to recommend a store.",
      icon: "/assets/white-label-shopify/ai/trust-signals.svg",
    },
  ] satisfies readonly WhiteLabelCapability[],
} as const;

export const whiteLabelShopifyServices: readonly WhiteLabelService[] = [
  {
    title: "Custom Shopify Store Development",
    description: "We can fully customize Shopify stores that match your client's brand identity.",
    icon: "/assets/white-label-shopify/services/custom-shopify-store-development.svg",
  },
  {
    title: "Shopify Theme Customization & Development",
    description: "We help you modify or build custom Shopify themes for a unique storefront.",
    icon: "/assets/white-label-shopify/services/shopify-theme-customization-development.svg",
  },
  {
    title: "Shopify Plus Development",
    description: "Our Shopify Plus Development services include custom checkout extensibility, scripts, and B2B setups.",
    icon: "/assets/white-label-shopify/services/shopify-plus-development.svg",
  },
  {
    title: "Figma to Shopify",
    description: "Our designers can convert your Figma design into fully functional Shopify stores.",
    icon: "/assets/services/figma-design-conversion.svg",
  },
  {
    title: "Shopify App Development",
    description: "We can develop custom apps that expand your store's functionality and improve user experience.",
    icon: "/assets/white-label-shopify/services/shopify-app-development.svg",
  },
  {
    title: "Shopify Migration",
    description: "Our migration services offer smooth platform migration from WooCommerce, Magento, BigCommerce, and others.",
    icon: "/assets/white-label-shopify/services/shopify-migration.svg",
  },
];

export const whiteLabelShopifyPlans: readonly WhiteLabelPlan[] = [
  {
    name: "Hourly Development",
    price: "$25/hr",
    bestFor: "Small updates, bug fixes, and quick enhancements.",
  },
  {
    name: "Fixed-Price Projects",
    price: "Custom Quote",
    bestFor: "Well-defined Shopify store builds or custom features.",
  },
  {
    name: "Dedicated Developer",
    price: "$2,000/month",
    bestFor: "Full-time Shopify expert working exclusively for your agency.",
  },
];

const tool = (name: string, filename: string): WhiteLabelTool => ({
  name,
  image: `/assets/integrations/${filename}.svg`,
});

export const whiteLabelShopifyToolRows = [
  [
    tool("Shopify Dawn", "shopify-dawn"),
    tool("Shopify Horizon", "shopify-horizon"),
    tool("Shopify Empire", "shopify-empire"),
    tool("Shopify Impulse", "shopify-impulse"),
    tool("Shopify Prestige", "shopify-prestige"),
    tool("Shopify Focal", "shopify-focal"),
    tool("Shop Circle", "shop-circle"),
    tool("HulkApps", "hulk-apps"),
    tool("Klaviyo", "klaviyo"),
    tool("Smile.io", "smile-io"),
    tool("Logbase", "logbase"),
    tool("Google", "google"),
    tool("Meta", "meta"),
    tool("Boost Commerce", "boost-commerce"),
    tool("BOLD Commerce", "bold-commerce"),
    tool("Stamped", "stamped"),
    tool("Judge.me", "judge-me"),
    tool("Appstle", "appstle"),
    tool("Recharge", "recharge"),
    tool("Recurpay", "recurpay"),
    tool("Appmaker", "appmaker"),
  ],
  [
    tool("Gorgias", "gorgias"),
    tool("Loop", "loop"),
    tool("Yotpo", "yotpo"),
    tool("Intelligems", "intelligems"),
    tool("Searchanise", "searchanise"),
    tool("Rebuy", "rebuy"),
    tool("BSS Commerce", "bss-commerce"),
    tool("Nector.io", "nector-io"),
    tool("GemPages", "gempages"),
    tool("PageFly", "pagefly"),
    tool("PayPal", "paypal"),
    tool("GoKwik", "gokwik"),
    tool("Shopify Flow", "shopify-flow"),
    tool("Razorpay", "razorpay"),
    tool("ERP", "erp"),
    tool("CRM", "crm"),
    tool("B2B", "b2b"),
    tool("Shogun", "shogun"),
    tool("Shop Pay", "shop-pay"),
    tool("Stripe", "stripe"),
    tool("Loox", "loox"),
  ],
] as const;

export const whiteLabelShopifyProcess = [
  {
    title: "Share Your Project Requirements",
    description: "Provide us with details about your client's Shopify requirements, and we will study them and give you a timeline.",
  },
  {
    title: "We Develop & Test",
    description: "Our Shopify experts will handle development and strict testing after finalizing the timeline.",
  },
  {
    title: "White Label Delivery",
    description: "Once the project is completed and handed over to your client under your agency's branding.",
  },
  {
    title: "Ongoing Support & Enhancements",
    description: "We offer ongoing support after the store launch. We stay in the background, ensuring smooth store operation.",
  },
] as const;

export const whiteLabelShopifyFinalCta = {
  title: "Let’s Build Shopify Stores Under Your Brand!",
  description:
    "Are you looking for a trusted white label Shopify partner? Together, let’s improve your agency! Contact us today and start delivering world-class Shopify solutions under your brand.",
  label: "CONTACT US TODAY",
} as const;

