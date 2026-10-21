import type { CityPageHeroContent } from "@/components/sections/city-page-hero-section";
import type { OurDevelopmentProcessContent } from "@/components/sections/our-development-process-section";
import type { ShopifyStageServicesContent } from "@/components/sections/shopify-stage-services-section";
import type { ShopifyTeamBoxesContent } from "@/components/sections/shopify-team-boxes-section";
import type { CounterItem } from "@/components/sections/white-label-shopify/white-label-counter-section";
import type {
  WhiteLabelCard,
  WhiteLabelFaq,
  WhiteLabelService,
} from "@/types/white-label-service";

export const whiteLabelWebsiteDesignHero: CityPageHeroContent = {
  title: "White Label Website Design",
  subtitle:
    "Looking to expand your agency's service offerings without building a larger in-house team?",
  description:
    "Our white label website design services help digital, creative and marketing agencies deliver custom websites under their own brand.",
  secondaryDescription:
    "Our designers and developers work behind the scenes on website design, ecommerce, development and ongoing project support while your agency keeps the client relationship.",
  primaryCta: {
    label: "request a Quote",
    href: "/request-quote",
  },
  badges: [
    {
      src: "/assets/proof/shopify-platinum-partner.svg",
      alt: "Dynamic Dreamz - Shopify Platinum Partner",
      width: 136,
      height: 44,
      href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
    },
    {
      src: "/assets/proof/clutch-rating.svg",
      alt: "Dynamic Dreamz on Clutch — 4.9 rating",
      width: 111,
      height: 44,
      href: "https://clutch.co/profile/dynamic-dreamz",
    },
    {
      src: "/assets/proof/trustpilot-rating.svg",
      alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
      width: 148,
      height: 50,
      href: "https://www.trustpilot.com/review/dynamicdreamz.com",
    },
    {
      src: "/assets/proof/upwork-top-rated-plus.svg",
      alt: "Dynamic Dreamz — Upwork Top Rated Plus",
      width: 126,
      height: 54,
      href: "https://www.upwork.com/agencies/dynamicdreamz/",
    },
  ],
  tabletSlider: {
    bgShapeSrc:
      "/assets/services/shopify-development-in-bangalore/hero/slide-bg-shape.svg",
    topBadge: {
      src: "/assets/white-label-website-design/hero/css-badge.png",
      alt: "CSS",
      width: 346,
      height: 212,
    },
    bottomBadge: {
      src: "/assets/white-label-website-design/hero/html-badge.png",
      alt: "HTML",
      width: 260,
      height: 252,
    },
    slides: [
      {
        src: "/assets/services/wordpress-development-in-ahmedabad/hero/slide-green-future-energy.webp",
        alt: "greenfutureenergy",
        width: 1600,
        height: 2380,
      },
      {
        src: "/assets/services/shopify-development-in-bangalore/hero/slide-bellavita.webp",
        alt: "bellavita",
        width: 1600,
        height: 2380,
      },
      {
        src: "/assets/services/wordpress-development-in-ahmedabad/hero/slide-the-huddle-sports-grill.webp",
        alt: "thehuddlesportsgrill",
        width: 1600,
        height: 2380,
      },
      {
        src: "/assets/services/shopify-development-in-bangalore/hero/slide-kalki.webp",
        alt: "kalki",
        width: 1600,
        height: 2380,
      },
    ],
  },
};

export const whiteLabelWebsiteDesignCounters: readonly CounterItem[] = [
  { value: "50+ Agencies", label: "Supported Worldwide" },
  { value: "20+ Years", label: "Web & Ecommerce Experience" },
  { value: "150+ Experts", label: "Commerce & Technology" },
  { value: "5000+", label: "Projects Delivered" },
];

export const whiteLabelWebsiteDesignWhyCopy = {
  title: "Why Choose White Label Website Design?",
  description:
    "White label website design entrusts agencies with expanding their services, delivering high quality websites, and saving costs while maintaining their brand identity. It’s the perfect solution for scaling your business without adding complexity.",
} as const;

export const whiteLabelWebsiteDesignReasons: readonly WhiteLabelCard[] = [
  {
    title: "Expand Service Offerings",
    description:
      "White label web design allows you to provide a more comprehensive choice of services and attract more customers without creating an in-house team.",
  },
  {
    title: "Focus on Core Competencies",
    description:
      "Allow professionals to manage website design while your company concentrates on customer relations, sales, and marketing.",
  },
  {
    title: "Cost Effective Solution",
    description:
      "When web design is outsourced instead of being developed or designed internally, overhead costs are decreased.",
  },
  {
    title: "Faster Project Turnaround",
    description:
      "Working with professional white label web developers allows you to complete projects faster, which increases productivity and client satisfaction.",
  },
  {
    title: "Brand Control",
    description:
      "All work is delivered under your name, maintaining customer trust and enhancing your reputation in the marketplace.",
  },
];

export const whiteLabelWebsiteDesignBenefitsContent = {
  eyebrow: "Key Benefits",
  heading: "Benefits of White Label Website Design Services ",
  description:
    "White label web design services provide many advantages for agencies aiming to grow. It allows businesses to grow without worrying about managing every technical aspect.",
  boxes: [
    {
      iconName: "scalability",
      title: "Scalability",
      description:
        "Increase your client list without worrying about hiring more people or gaining more experience to grow your company fast.",
    },
    {
      iconName: "access-to-expertise",
      title: "Access to Expertise",
      description:
        "Work with experienced designers and developers to provide high quality services and ensure that professional and modern websites are delivered to your client.",
    },
    {
      iconName: "increase-revenue-streams",
      title: "Increase Revenue Streams",
      description:
        "Add website design services to your list of services to attract more customers and boost your overall income.",
    },
    {
      iconName: "reduced-risk",
      title: "Reduced Risk",
      description:
        "With a white label partner, you can lower the risk of project delays or poor quality work, ensuring your clients are happy with the project work.",
    },
    {
      iconName: "flexible-pricing",
      title: "Flexible Pricing",
      description:
        "By negotiating with the white label partner, you can manage your pricing structure and margins and offer your clients competitive pricing.",
    },
  ],
} as const;

export const whiteLabelWebsiteDesignAiEnginesContent: ShopifyStageServicesContent = {
  eyebrow: "Built for AI",
  heading: "Websites Built for Search, AI Discovery and Modern User Experiences",
  description:
    "Great design is only half the job. We help your clients' websites perform better through AI-powered tools, smarter automation, and the technical foundations that AI search engines need to discover and recommend them.",
  items: [
    {
      title: "AI-assisted content",
      description:
        "Generate high-quality product descriptions, landing page copy, and SEO content fast and at scale.",
      pills: ["OpenAI", "Shopify Magic"],
    },
    {
      title: "Smarter customer support",
      description:
        "Embed AI chat and support tools that reduce ticket volume and keep visitors engaged on-site.",
      pills: ["Tidio", "Tidio"],
    },
    {
      title: "Workflow automation",
      description:
        "Connect your clients' websites to their business tools, removing manual work across marketing, CRM, and fulfilment.",
      pills: ["Zapier", "Make"],
    },
    {
      title: "Email & retention",
      description:
        "Behaviour-based email flows that convert first-time visitors into repeat buyers automatically.",
      pills: ["Klaviyo"],
    },
    {
      title: "Conversion optimisation",
      description:
        "AI-informed UX improvements from page layout to CTAs that move visitors toward action.",
      pills: ["Shopify Sidekick"],
    },
  ],
};

export const whiteLabelWebsiteDesignAiDiscoveryContent: ShopifyTeamBoxesContent = {
  eyebrow: "AI Search Visibility",
  heading: "Designed to Be Found by AI, Not Just Google",
  description: [
    "Search is shifting. ChatGPT, Gemini, and Perplexity are now recommending businesses directly to users. We structure websites so search engines and AI-powered discovery tools can more clearly understand the business, services and supporting content.",
    "Add AI-enhanced design to your agency's offering We handle the build and the tech. You keep the client relationship.",
  ],
  cta: {
    label: "Learn how we do it",
    href: "/request-quote",
  },
  secondaryCta: {
    label: "Talk to an expert",
    href: "/book-a-discovery-call",
  },
  items: [
    {
      title: "Schema & Structured Data",
      description:
        "FAQPage, Organization, and Product schema so AI engines can read and cite your clients' sites.",
    },
    {
      title: "Content & Internal Linking",
      description:
        "Build clear page hierarchy, descriptive headings and contextual internal links that help users and search systems understand the site.",
    },
    {
      title: "Trust & Entity Signals",
      description:
        "Keep business information, reviews, credentials, authorship and supporting proof clear and consistent.",
    },
    {
      title: "AI & Automation Integrations",
      description:
        "Where required, integrate AI-assisted content tools, customer support, workflow automation and marketing platforms.",
    },
  ],
};

export const whiteLabelWebsiteDesignProcessContent: OurDevelopmentProcessContent = {
  eyebrow: "Our Process",
  heading: "Our White Label Web Development Process",
  description:
    "We use a structured process to ensure that every white label website development project is delivered on time and fulfills your client's expectations.",
  steps: [
    {
      step: "Step 01",
      title: "Analyze",
      description:
        "We start by analyzing your client's requirements and collecting all relevant data to ensure we understand the project's requirements.",
    },
    {
      step: "Step 02",
      title: "Design",
      description:
        "Our design team creates wireframes and visual concepts based on the approved requirements, with a focus on usability, brand consistency and visual appeal.",
    },
    {
      step: "Step 03",
      title: "Build",
      description:
        "After design approval, our development team starts creating the website using the latest technologies, ensuring the website is fast, secure, and responsive.",
    },
    {
      step: "Step 04",
      title: "Test",
      description:
        "Before delivery, we thoroughly test the site to ensure it works perfectly across all devices and browsers.",
    },
  ],
};

export const whiteLabelWebsiteDesignAdvantagesContent = {
  eyebrow: "The Agency Advantage",
  heading: "Advantages of White Label Web Design for Agenciess",
  description:
    "Working with a white label partner allows agencies to offer a full suite of web design services without the hassle of handling development in house.",
  boxes: [
    {
      title: "No Need for an In-House Team",
      description:
        "You can offer web design services without hiring or managing an internal development team.",
    },
    {
      title: "Fast Loading Times",
      description:
        "We focus on efficient front-end implementation, optimized assets and performance best practices to improve loading speed and user experience.",
    },
    {
      title: "Improved Client Satisfaction",
      description:
        "Your clients will appreciate the high quality, professional websites that meet their needs and exceed expectations.",
    },
    {
      title: "Increased Profit Margins",
      description:
        "Outsourcing work at a lower cost can improve profit margins while maintaining competitive pricing for clients.",
    },
    {
      title: "Less Stress on Internal Resources",
      description:
        "With the web design taken care of, your team can focus on their strengths and grow your agency.",
    },
  ],
} as const;

const serviceAsset = (filename: string) =>
  `/assets/white-label-website-design/services/${filename}.svg`;

export const whiteLabelWebsiteDesignServicesContent = {
  eyebrow: "White Label Services",
  title: "Our White Label Web Design Services",
  description:
    "We provide a wide selection of white label website design services customized based on your client's requirements",
} as const;

export const whiteLabelWebsiteDesignServices: readonly WhiteLabelService[] = [
  {
    title: "Custom Website Design",
    description:
      "We create custom website designs that match your client’s brand identity and help them stay ahead of competitors.",
    icon: serviceAsset("custom-website-design"),
  },
  {
    title: "eCommerce Website Design",
    description:
      "Our designers and developers are experts in designing user friendly, conversion focused eCommerce websites that help your client boost their sales.",
    icon: serviceAsset("ecommerce-website-design"),
  },
  {
    title: "Responsive Website Design",
    description:
      "While designing, we ensure that websites are fully responsive and run properly on all devices, offering a smooth experience to visitors.",
    icon: serviceAsset("responsive-website-design"),
  },
  {
    title: "SEO-Ready Website Development",
    description:
      "While we do not provide full SEO campaigns as part of standard web development, we build websites with technical SEO fundamentals including heading structure, metadata support, responsive implementation, performance and crawl-friendly architecture.",
    icon: serviceAsset("seo-optimized-websites"),
  },
  {
    title: "Theme Customization",
    description:
      "We help your client customize their newly purchased theme or modify their existing one. We can customize the website design to your client’s requirements.",
    icon: serviceAsset("theme-customization"),
  },
  {
    title: "BigCommerce Website Development",
    description:
      "We design and develop scalable BigCommerce websites tailored to your client’s business needs. From custom storefronts to seamless integrations, our BigCommerce solutions are built for performance & long-term growth.",
    icon: serviceAsset("bigcommerce-website-development"),
    href: "/bigcommerce-development",
    linkLabel: "Read More",
  },
];

export const whiteLabelWebsiteDesignFaqCopy = {
  heading: "Frequently Asked Questions",
  description:
    "Get clear answers to common questions about our white label web design process, collaboration, timelines, and services.",
} as const;

export const whiteLabelWebsiteDesignFaqs: readonly WhiteLabelFaq[] = [
  {
    question: "Will you work directly with our clients or contact them at any point?",
    answer:
      "Never. We work exclusively with your agency team. Your clients never know we exist; all files, deliverables, and communication go through you. We sign NDAs as standard, and our team is briefed to maintain full confidentiality throughout every project.",
  },
  {
    question: "How long does a typical white label website design project take?",
    answer:
      "Timelines depend on the project scope. A landing page or single-page design typically takes 5–7 business days. A multi-page custom website ranges from 2 to 4 weeks. An e-commerce website with custom product pages and integrations generally runs 4–6 weeks. We align timelines during the briefing stage so your agency can communicate accurate delivery dates to clients.",
  },
  {
    question: "What do you need from us to start a project?",
    answer:
      "We typically need a project brief covering your client's goals, brand guidelines (logo, colours, fonts), reference websites they like, and any content or assets they've prepared. If content isn't ready, we can work with placeholder copy and flag gaps during the review stage. The more context you share upfront, the fewer revision rounds are needed.",
  },
  {
    question: "How many revision rounds are included, and how is feedback managed?",
    answer:
      "Every project includes a structured review process, design approval at the wireframe stage, staging review before development is finalised, and a pre-launch QA pass. Revision requests are tracked in a shared document so nothing slips through the cracks. If the scope changes significantly during a project, we discuss it transparently before any additional work begins.",
  },
  {
    question: "What platforms and technologies do you design and build on?",
    answer:
      "We work across Shopify, Shopify Plus, WordPress, WooCommerce, BigCommerce, and Figma-to-code builds. For custom projects, we work with HTML/CSS/JS and popular front-end frameworks. If your client is on a specific platform, let us know during the briefing stage, and we'll confirm our fit before the project starts.",
  },
  {
    question: "Can your team work inside our agency's existing workflow?",
    answer:
      "Yes. We can work with your existing project-management and communication process, including tools such as Slack, Asana, Trello, Jira or Monday.com. Our team can operate entirely behind the scenes under your agency's brand and NDA requirements.",
  },
  {
    question: "Do you build websites with SEO and AI discovery in mind?",
    answer:
      "Yes. We follow technical SEO fundamentals and use clear content structure, internal linking and relevant structured data so search engines and AI-powered discovery tools can better understand the website and business.",
  },
  {
    question: "Can you add structured data to the websites you build?",
    answer:
      "Yes. Where appropriate, we can implement structured data such as Organization, Service, Product, FAQ and other relevant schema types based on the website and its content.",
  },
  {
    question: "Can you integrate AI or automation tools into client websites?",
    answer:
      "Yes. Where required, we can integrate suitable AI-assisted tools, customer-support systems, workflow automation and marketing platforms. The exact implementation depends on the platform, API access and project requirements.",
  },
];
