import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

export type MagentoWebHero = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  polygonBackground: string;
};

export const magentoWebHero: MagentoWebHero = {
  title: "Transform Your Store With A Complete Magento Web Development Guide",
  description:
    "The world we live in today, from a business point of view, is entirely different from how it used to be! Because in this digital world, where people are already talking about AI, everybody just has to know about Magento Web Development!",
  image: {
    src: "/assets/magento-web-development/magento-web-development-hero.webp",
    alt: "Transform Your Store With A Complete Magento Web Development Guide",
    width: 340,
    height: 342,
  },
  polygonBackground: "/assets/magento-web-development/hero-polygon-background.webp",
};

export type MagentoWebTabNavItem = {
  id: string;
  label: string;
};

export const magentoWebTabsNav: readonly MagentoWebTabNavItem[] = [
  {
    id: "content-tab-1",
    label: "Transform Your Store With A Complete Magento Web Development Guide",
  },
  {
    id: "content-tab-2",
    label: "What Is Magento Web Development?",
  },
  {
    id: "content-tab-3",
    label: "Why Choose Magento For Your eCommerce Website?",
  },
  {
    id: "content-tab-4",
    label: "The Detailed Magento Web Development Process- In Stages",
  },
  {
    id: "content-tab-5",
    label: "Key Features Of Magento eCommerce Sites",
  },
  {
    id: "content-tab-6",
    label: "Magento vs Shopify Plus: Which Is Right For Your Business?",
  },
  {
    id: "content-tab-7",
    label: "Magento vs Shopify Plus: A Quick Comparison",
  },
  {
    id: "content-tab-8",
    label: "How to Migrate To Magento From Other Platforms?",
  },
  {
    id: "content-tab-9",
    label: "How DynamicDreamz Helps Businesses Build Better Magento Stores?",
  },
  {
    id: "content-tab-10",
    label: "Conclusion",
  },
] as const;

export type SubBlock = {
  title: string;
  content: string | readonly string[];
};

export type ProcessStage = {
  title: string;
  intro: string;
  subheading?: string;
  items?: readonly string[];
  closing?: string;
};

export type KeyFeature = {
  title: string;
  description: string | readonly string[];
  subheading?: string;
  items?: readonly string[];
  closing?: string;
};

export type ComparisonItem = {
  criterion: string;
  magentoText: string;
  shopifyText: string;
  verdict: string;
};

export type TableRow = {
  criteria: string;
  magento: string;
  shopifyPlus: string;
};

export type BookDemoBlock = {
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export const magentoWebContent = {
  tab1: {
    paragraphs: [
      "Henceforth, today we are placing a detailed Magento web development guide, through which you can understand why it's highly required in the world of E-commerce! Because today, for businesses, it's not about the pamphlets, banners, and even online stores anymore! There are already too many online stores; hence, an online store must have a robust, flexible, and scalable digital store that can adapt to customer expectations and business growth.",
      "And this is where Magento web development stands out.",
      "It's one of the most powerful eCommerce platforms in the world, which offers complete control over your online store's design, functionality, and scalability. So, whether it's a small startup or an enterprise-level brand, through this platform, every kind of business can build customised digital experiences that grow alongside them.",
      "Henceforth, today in this guide, we'll dive into more details about how Magento is a trusted choice for global eCommerce businesses. And with that, you will also learn how it works, and why so many developers worldwide prefer it; moreover, we will also be comparing it with other famous platforms like Shopify Plus, so let's get into the pool of details right away!",
    ],
  },
  tab2: {
    title: "What Is Magento Web Development?",
    intro: [
      "Many carry a query about the Magento ecommerce web development, like what it is and what it does! So, let us clear that out. It's a robust, open-source eCommerce framework that is known throughout the world for its flexibility and scalability. So, when someone wants to build, customise, or even optimise an online store, they use a platform like Magento!",
      "With Magento, developers can easily create highly personalised online shopping experiences, and that too without much sweating. And please don't compare with some plug-and-play platforms, because here you, as a developer, have complete control over a section of your store all the time.",
    ],
    versionsSubheading: "Moreover, there are two main versions of Magento:",
    versions: [
      {
        title: "Magento Open Source",
        content:
          "With Magento, developers can easily create highly personalised online shopping experiences, and that too without much sweating. And please don't compare with some plug-and-play platforms, because here you, as a developer, have complete control over a section of your store all the time.",
      },
      {
        title: "Adobe Commerce (Magento Enterprise)",
        content:
          "This version is paid, which comes with lots of advanced features like AI-powered recommendations, customer segmentation, and enterprise-level scalability.",
      },
    ],
    includesSubheading: "Magento ecommerce website development typically includes:",
    includesItems: [
      "Designing a custom store that reflects your brand identity.",
      "Developing custom modules to extend functionality beyond standard features.",
      "Integrating third-party systems such as CRMs, ERPs, and marketing tools.",
      "Optimising performance and security to ensure fast, reliable operations.",
      "Maintaining and scaling the Site as your business grows.",
    ],
    conclusion:
      "So, in short, Magento is not just about building an online store; rather, it's about creating a digital ecosystem that literally can support all of your business goals, engage your audience & scale effortlessly as you expand.",
  },
  tab3: {
    title: "Why Choose Magento For Your eCommerce Website?",
    paragraphs: [
      "People who choose the right eCommerce platform get the power to make or break an online business, however they like! Because, simply put, all the websites using Magento can be easily managed, no matter how extensive the product inventories are, and that too without disturbing the fast checkouts and personalised user journeys.",
      "So, yes, it's a place where Magento web development literally excels.",
      "Over the years, brands that want complete freedom to customise their platform and scale easily have made Magento their go-to platform! However, let’s not go for the word of mouth only, and see for ourselves why hundreds of thousands of Magento developers and businesses around the world rely on it…",
    ],
    reasons: [
      {
        title: "Open-Source Flexibility",
        content:
          "Unlike many other such platforms, Magento web development gives complete access to its source code to the developers, because of which the developers have the freedom to develop the store as per the requirement!",
      },
      {
        title: "Enterprise-Level Scalability",
        content:
          "Magento is built to scale, because here, you can easily handle hundreds and thousands of orders stress-free! And with the help of its robust architecture and caching capabilities, you can always be assured that your store remains efficient even under heavy traffic!",
      },
      {
        title: "SEO-Optimised Foundation",
        content:
          "Magento comes with SEO-friendly features like custom URLs, sitemaps, meta tags, and schema markup, because all are quite essential for better visibility in search engines.",
      },
      {
        title: "Multi-Store and Global Capabilities",
        content:
          "With Magento, you can easily manage numerous stores, languages, and currencies, right from a single dashboard! For global brands, this kind of simplification streamlines operations and maintains consistency across regions.",
      },
      {
        title: "Advanced Product & Inventory Management",
        content:
          "Magento's product management system is an elite and the most sophisticated in the industry. And the reason we are stating that is because it allows for tier pricing, grouped products, configurable products & custom attributes, which make it an ideal choice for complex catalogues.",
      },
      {
        title: "Strong Security Framework",
        content: [
          "There are multiple security patches, two-factor authentication, and advanced access controls to protect your eCommerce data!",
          "So, in a nutshell, the Magento web development is there to give the ultimate power to the brands, so they can design their custom experiences for their users without any sweat!",
        ],
      },
    ] as readonly SubBlock[],
  },
  tab4: {
    title: "The Detailed Magento Web Development Process- In Stages",
    intro:
      "So, up until now, we have understood what Magento is, what it does, but just so you can understand that it’s way more than just installing a theme and uploading products, let us break down its process in stages, so you can get the complete picture of it!",
    processSubheading:
      "So, here's how a professional Magento web development process typically unfolds:",
    stages: [
      {
        title: "Discovery & Planning",
        intro:
          "A successful Magento project starts with getting to know the brand first, like what the goals are, their target audience, and the technical needs! Henceforth, throughout this first phase, developers and strategists work together to:",
        items: [
          "Define user personas and buyer journeys.",
          "Identify necessary integrations (ERP, CRM, payment gateways, shipping).",
          "Outline the project timeline, technology stack, and design approach.",
        ],
        closing:
          "So, we can say that the first stage is there to set the foundation for a store, which is not only functional but also future-ready.",
      },
      {
        title: "Magento Web Design",
        intro:
          "So, once the strategy is sorted, designers start to shape it into an engaging and user-friendly interface with the help of web design! And with the help of Magento's flexibility, teams get to design fully custom experiences on proven templates, which are tailored to a brand's identity.",
        subheading: "On this second stage, the main focus areas include:",
        items: [
          "Mobile-first design for better performance on all devices.",
          "Intuitive navigation and clear product presentation.",
          "Visual consistency to strengthen brand trust and recognition.",
        ],
        closing:
          "To conclude, a good Magento web design is not just for the visual appeal, but to simplify decision-making & enhance conversion.",
      },
      {
        title: "Development & Customisation",
        intro:
          "Now, it's time for the real magic, because at this stage, Magento developers start building the Site's core features, installing modules & coding custom functionalities that meet unique business needs.",
        subheading: "This phase can include:",
        items: [
          "Setting up the catalogue and product architecture.",
          "Integrating custom payment and shipping workflows.",
          "Adding extensions for marketing automation or analytics.",
          "Developing bespoke modules or APIs for third-party integrations.",
        ],
        closing:
          "Here, the goal is to make and keep your online store seamless and completely aligned with your operations.",
      },
      {
        title: "Testing & Quality Assurance",
        intro:
          "After the development and customisation stage, the entire website undergoes rigorous testing, which includes:",
        items: [
          "Functional testing: Ensuring every feature and workflow operates flawlessly.",
          "Performance testing: Checking speed, caching, and server response.",
          "Cross-device testing: Guaranteeing a smooth experience across mobile, tablet, and desktop.",
          "Security testing: Identifying and patching vulnerabilities.",
        ],
        closing:
          "Such quality assurance is to ensure that your eCommerce Site gets a launch without unwanted surprises.",
      },
      {
        title: "Deployment & Maintenance",
        intro:
          "Once the Site has passed the testing stage, it's time for the deployment to the live environment. However, the Magento web development doesn't just stop there; rather, it's a seamless process of improvement.",
        subheading: "Ongoing maintenance includes:",
        items: [
          "Regular updates and security patches.",
          "Extension upgrades.",
          "Performance monitoring and optimisation.",
          "Feature enhancements based on customer feedback and analytics.",
        ],
        closing:
          "So, a well-maintained Magento store keeps evolving with your business, with which you can always stay ahead of customer expectations.",
      },
    ] as readonly ProcessStage[],
  },
  tab5: {
    title: "Key Features Of Magento eCommerce Sites",
    intro:
      "Magento can not be named just another eCommerce platform; rather, it's an entire ecosystem that is built for growth, flexibility, and performance. Because from product management to checkout optimisation, every feature here will be designed to help brands deliver exceptional shopping experiences.",
    subheading:
      "Here are some of the most powerful features that make Magento eCommerce websites really stand out:",
    features: [
      {
        title: "Customizable Product Catalogue",
        description: [
          "All the store owners should be able to manage extensive product catalogues, and with Magento, you can! You can literally create simple, configurable, grouped, and even bundled products, each with unique pricing, SKUs & attributes.",
          "Because of this kind of flexibility, merchants can easily sell even the most complex product combinations, from Fashion variants to multi-component bundles, and that too without any compromise.",
        ],
      },
      {
        title: "Multi-Store & Multi-Language Management",
        description:
          "You know what's the biggest strength of Magneto? It's the ability to manage multiple stores under a single admin panel. And with it, all the brands can easily manage various storefronts, currencies & languages, which is kind of perfect for global businesses that are aiming for local relevance.",
      },
      {
        title: "SEO-Friendly Architecture",
        description: "Magento's architecture is optimised for visibility.",
        subheading: "It includes built-in tools for:",
        items: [
          "Custom URLs and meta tags",
          "XML sitemaps",
          "Schema markup",
          "Canonical tags",
        ],
        closing:
          "Such kinds of SEO architecture are there to help search engines crawl & rank your website effectively.",
      },
      {
        title: "Advanced Checkout Experience",
        description:
          "Because of such web development services, brands get a streamlined, one-page checkout system that keeps reducing friction & cart abandonment. Moreover, it keeps supporting multiple payment gateways, guest checkouts, saved cards & real-time shipping cost calculation, and that is how they create a faster and more secure buying journey.",
      },
      {
        title: "Powerful Marketing & Promotion Tools",
        description: "With built-in promotional features, store owners can create:",
        items: [
          "Discount rules and coupons",
          "Cross-sell and upsell campaigns",
          "Email and newsletter integrations",
          "Personalised recommendations (in Adobe Commerce)",
        ],
        closing: "These tools make it easier to engage customers and boost conversion rates.",
      },
      {
        title: "Scalability for High-Growth Brands",
        description:
          "The entire module of Magento is to provide you with the needed support for your store, to grow as per your business expansion! So, whether you want to add new categories, integrate marketplaces, or handle massive traffic spikes during sales, Magento's infrastructure is built to scale without breaking performance.",
      },
      {
        title: "Robust Security Framework",
        description: "Security is a top priority in eCommerce, and Magento leads here with:",
        items: [
          "Regular security patches",
          "Two-factor authentication",
          "PCI compliance",
          "Encrypted data and admin access controls",
        ],
        closing: "These measures keep both customer data and business operations secure.",
      },
    ] as readonly KeyFeature[],
    closingSummary:
      "Together, these features make Magento one of the most comprehensive and future-ready platforms for businesses that need flexibility, control, and enterprise-grade performance.",
    bookDemo: {
      heading: "Need help bringing your eCommerce vision to life?",
      description: "Our Magento developers can help.",
      ctaLabel: "Book A DEMO",
      ctaHref: "/request-quote",
    },
  },
  tab6: {
    title: "Magento vs Shopify Plus: Which Is Right For Your Business?",
    intro:
      "Whenever it comes to Shopify Plus vs Magento Enterprise, the question brands have in mind is quite clear: which one is better? So, if you are also finding yourself in confusion between choosing one from these two, then you should know about their differences first, which are;",
    magentoLabel: "Magento:",
    shopifyPlusLabel: "Shopify Plus:",
    verdictLabel: "Verdict:",
    comparisonSections: [
      {
        criterion: "Flexibility and Customisation",
        magentoText:
          "As an open-source platform, Magento is there to offer quite an unmatched flexibility. From checkout flow to the backend logic, you can literally modify everything with it! In no time, it has become an ideal platform for businesses that require custom workflows, integrations, or complex product structures",
        shopifyText:
          "Shopify Plus is a hosted SaaS platform, which means there can be customisation, and you can do that, but there's no open source! Though it's perfect for teams who really do prefer convenience, stability, & ease of use over deep-level control.",
        verdict:
          "Choose Magento if you want complete creative and technical freedom. Go for Shopify Plus if you value simplicity, seamlessness, and minimal maintenance.",
      },
      {
        criterion: "Scalability and Performance",
        magentoText:
          "Magento is designed for scalability because it can handle thousands of SKUs & heavy traffic loads. And with it, you can easily control hosting, so performance can be fine-tuned for peak conditions.",
        shopifyText:
          "Shopify Plus is cloud-hosted, so scaling happens automatically, and you don't need server management for that.",
        verdict:
          "Both scale well — Magento offers more control, while Shopify Plus provides convenience.",
      },
      {
        criterion: "Cost and Maintenance",
        magentoText:
          "Early setup can be higher due to hosting and development needs. However, it offers long-term savings for businesses requiring deep customisation and independence from monthly SaaS fees.",
        shopifyText:
          "It's subscription-based with predictable monthly costs. Maintenance is minimal, but advanced customisations may require costly workarounds.",
        verdict:
          "Shopify Plus has a lower barrier to entry; Magento gives better ROI for enterprise-grade customisation.",
      },
      {
        criterion: "Integration and Ecosystem",
        magentoText:
          "It supports deep integrations with CRMs, ERPs, and marketing tools through APIs or custom modules. The Magento marketplace offers thousands of extensions built for diverse industries.",
        shopifyText:
          "Integrates easily with popular third-party tools and also offers much flexibility in how data flows between systems.",
        verdict: "Both wins for complex integration needs.",
      },
      {
        criterion: "Hosting and Ownership",
        magentoText:
          "You own your hosting, data, and codebase, offering complete ownership. This appeals to brands that prioritise data privacy and custom infrastructure.",
        shopifyText:
          "Shopify manages hosting and security. You trade some control for peace of mind and uptime reliability.",
        verdict: "Magento = ownership; Shopify Plus = simplicity.",
      },
    ],
    closingParagraphs: [
      "So, in the debate of Shopify Plus vs Magento Enterprise, there can be no one-size-fits-all kind of answer. So, if you need a flexible, fully customizable eCommerce system that continues to grow with your business, a fine option would be Magento. While in other cases, when you prefer simplicity, seamlessness, and lower maintenance, Shopify Plus is a strong contender.",
      "At the end of the day, it's your choice that you will make as per your brand's complexity, internal resources & growth strategy.",
    ],
  },
  tab7: {
    title: "Magento vs Shopify Plus: A Quick Comparison",
    tableHeaders: ["Criteria", "Magento (Adobe Commerce)", "Shopify Plus"] as const,
    tableRows: [
      {
        criteria: "Platform Type",
        magento: "Open-source (Self-hosted)",
        shopifyPlus: "SaaS (Fully hosted)",
      },
      {
        criteria: "Ease of Use",
        magento: "Requires technical expertise",
        shopifyPlus: "User-friendly, ideal for non-technical teams",
      },
      {
        criteria: "Scalability",
        magento: "Extremely scalable with the right hosting and setup",
        shopifyPlus: "Scales automatically through Shopify's infrastructure",
      },
      {
        criteria: "Design Flexibility",
        magento: "100% customizable themes and UI/UX",
        shopifyPlus: "Customization within Shopify's framework",
      },
      {
        criteria: "Cost Structure",
        magento: "Variable - depends on hosting, development, and maintenance",
        shopifyPlus: "Fixed subscription + transaction fees",
      },
      {
        criteria: "Hosting & Maintenance",
        magento: "You manage hosting, servers, and updates",
        shopifyPlus: "Shopify manages everything (hosting, security, updates)",
      },
      {
        criteria: "Best For",
        magento:
          "Enterprises needing complete control, custom workflows, and multi-store setups",
        shopifyPlus:
          "Enterprises needing complete control, custom workflows, and multi-store setups",
      },
    ],
  },
  tab8: {
    title: "How to Migrate To Magento From Other Platforms?",
    intro:
      "Switching to Magento web development services from other platforms like Shopify, WooCommerce, or BigCommerce shouldn’t be troublesome. Henceforth, when you have the right plan and an experienced development team, you should have a smooth transition without any complications.",
    subheading: "So, here's a quick look at how the migration process usually works:",
    steps: [
      {
        label: "Audit & Plan:",
        description:
          "Review your existing store, its structure, data & unique features, so you can map out what needs to be migrated.",
      },
      {
        label: "Data Transfer:",
        description:
          "Move crucial information like products, customers & order history securely into Magento's ecosystem.",
      },
      {
        label: "Design & Functionality Setup:",
        description:
          "Recreate or redesign your entire storefront to match your brand's look & feel, while adding Magento's advanced features.",
      },
      {
        label: "Testing & Launch:",
        description:
          "Check everything thoroughly from checkout flows to mobile performance, right before you go live.",
      },
      {
        label: "Post-Launch Support:",
        description:
          "Fine-tune performance, monitor analytics, and roll out updates as your business grows.",
      },
    ],
    closing:
      "Migrating to Magento web development services is not and can never be just a platform change; rather, you should consider it a strategic upgrade! Because from now on, you’re gonna give your business much more freedom, and a big room to innovate!",
  },
  tab9: {
    title: "How DynamicDreamz Helps Businesses Build Better Magento Stores?",
    paragraphs: [
      "At Dynamic Dreamz, Magento web development isn't just one of the services we offer; rather, you can say that it’s a part of what we've mastered over the years of building high-performing eCommerce solutions.",
      "Our team of certified Magento web developers has mastered the art of creating stores that are optimised for growth! From startups or enterprise brands, we've helped all of them to streamline their operations, enhance their performance, and scale confidently on Magento.",
    ],
    subheading: "Here's how we make a difference:",
    points: [
      {
        label: "Custom Magento Development:",
        description:
          "Tailored store architecture built around your unique products and workflows.",
      },
      {
        label: "Magento Web Design:",
        description: "Clean, user-friendly designs focused on conversion & brand experience.",
      },
      {
        label: "Extension & API Integration:",
        description: "Seamless connections with CRMs, ERPs, and third-party tools.",
      },
      {
        label: "Performance & Security Optimisation:",
        description: "Faster load times and secure checkout experiences.",
      },
      {
        label: "Migration & Ongoing Support:",
        description:
          "End-to-end migration from other platforms with continuous maintenance.",
      },
    ],
    closing:
      "With Dynamic Dreamz, which by the way is the only Shopify Platinum Partner, you don't just get a development team; rather, you get a long-term partner focused on turning your Magento store into a scalable, results-driven eCommerce ecosystem.",
  },
  tab10: {
    title: "Conclusion",
    paragraphs: [
      "Hope you have got all the needed information that you were seeking about Magento web development services! So, now it’s up to you, whether you're launching a new store or migrating from another platform, just remember this: investing in Magento web development services means investing in long-term success.",
      "Because it will give you the freedom to create, innovate & evolve, and that too all while offering customers a seamless shopping experience that truly represents your brand.",
      "And it's not about just Magento, at Dynamic Dreamz, you can get all sorts of services, whether it's about Shopify, wordpress, Woocommerce, Magento, Bigcommerce, Android app development, and iOS app development! So, do connect for ultimate digital convenience…",
    ],
  },
} as const;

export const magentoWebFaqs: readonly FaqAccordionItem[] = [
  {
    question:
      "1. What is Magento web development, and how does it differ from using a template-based platform?",
    answer:
      "Through Magento web development, one can build and easily customise their eCommerce Site. And please don't take it as the same as the simple template platforms [where you'll just pick a theme and some code when needed]. Because with Magento, you can do lots of customisation as per your business's requirements, which literally is more than amazing.",
  },
  {
    question:
      "Which version of Magento should I use — Magento Open Source or Adobe Commerce (Magento Enterprise)?",
    answer:
      "We have a skilled team with years of experience in PHP/MySQL development. We provide customized solutions that meet your business requirements and ensure high performance and security.",
  },
  {
    question:
      "What are the key advantages of choosing Magento for my eCommerce store?\nSome of the biggest advantages:",
    answer:
      "Yes, we are developing custom web applications tailored to your specific needs. Our team ensures the applications are secure, scalable, and user friendly.",
  },
  {
    question: "How long does it take to develop a Magento eCommerce website?",
    answer:
      "The well liked PHP framework Laravel is famous for its effectiveness and simplicity. It facilitates the speedy and safe development of web applications.",
  },
  {
    question:
      "What are the common pitfalls in Magento development, and how can I avoid them?",
    answer:
      "The complexity of the project determines how long it will take to develop. Once we have reviewed your requirements, we will send you a complete timeline.",
  },
] as const;

export const magentoWebRequestBanner = {
  heading: "Want us to help you with your online store?",
  ctaLabel: "request a quote",
  ctaHref: "/request-quote",
} as const;
