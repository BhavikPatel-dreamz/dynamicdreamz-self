import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { HeroBadge, ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import type { PortfolioShowcaseItem } from "@/components/sections/portfolio-showcase-section";
import type { ProcessStepItem } from "@/components/sections/our-development-process-section";
import type { WhyChooseMigrationContent } from "@/components/sections/why-choose-shopify-migration-section";
import type { ShopifyStageServicesContent } from "@/components/sections/shopify-stage-services-section";
import type { AiEmpoweredDeliveryContent } from "@/components/sections/ai-empowered-delivery-section";
import type { PricingEngagementContent } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";

const icon = (name: string) => `/assets/hire-shopify-developers/icons/${name}.svg`;

export const hireShopifySectionCopy = {
  industriesHeading: "Industries that we have Served",
  industriesDescription:
    [
    "Dynamic Dreamz has massive experience across multiple industries,",
    "helping businesses like yours succeed online. Our expertise spans sectors such as:",
  ],
  portfolioHeading: "Work of our Shopify Developers that show our Expertise",
  portfolioDescription:
    "We are sure you would like to hear to what our clients says about our Shopify development.",
  reasonsHeading: "Why Choose Dynamic Dreamz for Shopify Development",
  reasonsDescription:
    "Our Shopify developers have the ideal balance of expertise in eCommerce business and Shopify technology. For your online business, we can act as a powerful catalyst.",
  advantagesHeading: "Our Advantages of Choosing Dynamic Dreamz as a Shopify Developer",
  advantagesDescription: "Get connected with us, and you will witness the difference from day one!",
  advantagesCtaLabel: "inquire now",
} as const;

export const hireShopifyHeroBadges: readonly HeroBadge[] = [
  {
    name: "Shopify Platinum Partner",
    src: "/assets/proof/shopify-platinum-partner.svg",
    href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
    alt: "Dynamic Dreamz - Shopify Platinum Partner",
    width: 136,
    height: 44,
  },
  {
    name: "Clutch",
    src: "/assets/proof/clutch-rating.svg",
    href: "https://clutch.co/profile/dynamic-dreamz",
    alt: "Dynamic Dreamz on Clutch — 4.9 rating",
    width: 111,
    height: 44,
  },
  {
    name: "Trustpilot",
    src: "/assets/proof/trustpilot-rating.svg",
    href: "https://www.trustpilot.com/review/dynamicdreamz.com",
    alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
    width: 148,
    height: 50,
  },
  {
    name: "Upwork",
    src: "/assets/proof/upwork-top-rated-plus.svg",
    href: "https://www.upwork.com/ag/dynamicdreamz/",
    alt: "Dynamic Dreamz — Upwork Top Rated Plus",
    width: 126,
    height: 54,
  },
] as const;

export const hireShopifyHero = {
  eyebrowSpans: ["Established in 2006", "Shopify Platinum Partner"] as const,
  title: "Hire Shopify Developers",
  paragraphs: [
    "Are you looking to expand your brand fast? Hire Shopify developers from Dynamic Dreamz to create, customize, and optimize your online Shopify store. Our experienced Shopify developers can help you achieve high quality, scalable solutions based on your business requirements. Let us handle the technicalities while you concentrate on developing your brand.",
  ],
  cta: "Hire Shopify Developers",
  ctaHref: "/request-quote",
  secondaryCta: {
    label: "View Pricing",
    href: "#our_white_label_pricing",
  },
  video: "/assets/home/why-dynamic-dreamz.mp4",
  badges: hireShopifyHeroBadges,
} as const satisfies ServiceHeroVideoContent;

export const hireShopifyStats = [
  { value: "50+", label: "Agile enabled Shopify Developers" },
  { value: "5000+", label: "Completed Projects" },
  { value: "20+", label: "Years of Experience" },
  { value: "1000+", label: "Happy & Satisfied Clients" },
  { value: "1000+", label: "Shopify Developments" },
] as const;

export const hireShopifyBrandLogos: readonly ClientLogoSliderItem[] = [
  {
    src: "/assets/clients/supertails.svg",
    href: "https://supertails.com/",
    alt: "Supper Tails Logo",
    width: 151,
    height: 34,
  },
  {
    src: "/assets/clients/eleven-eleven.svg",
    href: "https://11-11.in/",
    alt: "Eleven Eleven",
    width: 57,
    height: 64,
  },
  {
    src: "/assets/clients/bellavita.svg",
    href: "https://bellavitaorganic.com/",
    alt: "bellavita logo",
    width: 112,
    height: 42,
  },
  {
    src: "/assets/clients/bombay-shirt-company.svg",
    href: "https://www.bombayshirts.com/",
    alt: "Bombay Shirt Company",
    width: 204,
    height: 26,
  },
  {
    src: "/assets/clients/popclub_co.svg",
    href: "https://popclub.co/",
    alt: "Popclub",
    width: 170,
    height: 28,
  },
  {
    src: "/assets/clients/sri-sri-tattva.svg",
    href: "https://www.srisritattva.com/",
    alt: "SriSri Tattva Logo",
    width: 168,
    height: 42,
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
    src: "/assets/clients/nekter-colored.svg",
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
] as const;

export const hireShopifyBrands = {
  slug: "hire-shopify-developers",
  heading: "Trusted by Leading Brands",
  ariaLabel: "Brands that trust Dynamic Dreamz for Shopify development",
  items: hireShopifyBrandLogos,
} as const;

export const hireShopifyProcessSteps: readonly ProcessStepItem[] = [
  {
    step: "Step 01",
    title: "Share Requirements",
    description:
      "Post the requirements for your project. Please tell us what you hope to get out of the project.",
  },
  {
    step: "Step 02",
    title: "Expert Talent Selection",
    description:
      "We analyze your requirements and shortlist Shopify developer profiles that best fit your upcoming project work.",
  },
  {
    step: "Step 03",
    title: "Select the Developer",
    description:
      "Choose the best skilled developer that matches your requirements from the shortlisted developers.",
  },
  {
    step: "Step 04",
    title: "Project Initiation",
    description:
      "Communicate with the selected Shopify developer, and you can kickstart your project!",
  },
] as const;

export const hireShopifyProcess = {
  eyebrow: "Hiring Process",
  heading: "Hassle free Hiring Process to Hire Shopify Developers",
  description:
    "Hiring Shopify developers from Dynamic Dreamz is like smooth sailing. With a practical pricing structure, we provide hiring at competitive prices.",
  steps: hireShopifyProcessSteps,
  items: [
    {
      title: "Share Requirements",
      description:
        "Post the requirements for your project. Please tell us what you hope to get out of the project.",
      icon: "/assets/hire-wordpress-developers/icons/share-requirements.svg",
      iconAlt: "Share requirements",
    },
    {
      title: "Expert Talent Selection",
      description:
        "We analyze your requirements and shortlist Shopify developer profiles that best fit your upcoming project work.",
      icon: "/assets/hire-wordpress-developers/icons/expert-talent-selection.svg",
      iconAlt: "Expert talent selection",
    },
    {
      title: "Select the Developer",
      description:
        "Choose the best skilled developer that matches your requirements from the shortlisted developers.",
      icon: "/assets/hire-wordpress-developers/icons/matching-business-talent.svg",
      iconAlt: "Select the Shopify developer",
    },
    {
      title: "Project Initiation",
      description:
        "Communicate with the selected Shopify developer, and you can kickstart your project!",
      icon: "/assets/hire-wordpress-developers/icons/project-kickstart.svg",
      iconAlt: "Project initiation",
    },
  ],
} as const;

export const hireShopifyReasons = [
  {
    iconKey: "experience",
    title: "Experience says it all",
    description:
      "With more than eighteen years of significant experience in Shopify development, we are an established Shopify development agency.",
    icon: icon("experience"),
    iconAlt: "Shopify development experience",
  },
  {
    iconKey: "verticals",
    title: "Extensive Shopify development in different verticals",
    description:
      "We have created Shopify stores in the following categories: Retail, Food & Beverages, Beauty & Cosmetics, Fashion & Apparel, and Pet. We are well knowledgeable about the eCommerce development used in these sectors.",
    icon: icon("industry-experience"),
    iconAlt: "Shopify industry experience",
  },
  {
    iconKey: "talent-pool",
    title: "Talented Pool of Shopify Developer",
    description:
      "Our team contains full time, committed Shopify specialists, including developers, designers, project managers, and quality assurance personnel. To ensure that our clients receive the most of their abilities, we hire them only after a thorough selection process.",
    icon: icon("shopify-team"),
    iconAlt: "Shopify developer team",
  },
] as const;

export const hireShopifyWhyChoose = {
  eyebrow: "Why Dynamic Dreamz",
  heading: "Why Choose Dynamic Dreamz for Shopify Development",
  description:
    "Our Shopify developers have the ideal balance of expertise in eCommerce business and Shopify technology. For your online business, we can act as a powerful catalyst.",
  boxes: hireShopifyReasons,
} as const;

export const hireShopifyAdvantages = [
  {
    iconKey: "fair-hiring",
    title: "The easy and fair hiring process",
    description: "We use a hassle free hiring procedure with no hidden fee.",
    icon: icon("fair-hiring"),
    iconAlt: "Fair hiring process",
  },
  {
    iconKey: "cost-savings",
    title: "Save 50% on your development cost",
    description:
      "Our agency offers competitive prices. Our pricing standards are flexible and convenient for all kinds of customers.",
    icon: icon("development-savings"),
    iconAlt: "Development cost savings",
  },
  {
    iconKey: "integrity",
    title: "Integrity is our core value",
    description:
      "We stick to strict data security guidelines to ensure clients' data stays secure and confidential.",
    icon: icon("integrity"),
    iconAlt: "Data security and integrity",
  },
  {
    iconKey: "hr-needs",
    title: "We handle your HR needs",
    description:
      "We handle paperwork and HR related issues so you may concentrate on your core business.",
    icon: icon("managed-hr"),
    iconAlt: "Managed HR needs",
  },
  {
    iconKey: "timezone",
    title: "We work as per your time zone",
    description:
      "Our Shopify developers can work whenever it suits you or by your time zone.",
    icon: icon("timezone"),
    iconAlt: "Shopify developers working across time zones",
  },
  {
    iconKey: "post-production-support",
    title: "Unmatched post production support",
    description:
      "Our work does not stop when the project is finished, we provide you with continuous support.",
    icon: icon("post-production-support"),
    iconAlt: "Post-production support",
  },
] as const;

export const hireShopifyAdvantagesContent = {
  eyebrow: "Advantages of Dynamic Dreamz",
  heading: "Our Advantages of Choosing Dynamic Dreamz as a Shopify Developer",
  description: "Get connected with us, and you will witness the difference from day one!",
  boxes: hireShopifyAdvantages,
} as const;

export const hireShopifyServices = {
  heading: "Get Started with Shopify Developers for End to End Development Services",
  description:
    "Are you looking for a professional team to help you create and expand your online store? Our Shopify developers offer complete services, from setup to ongoing support. Let us handle the technical side so you can focus on your core business.",
  items: [
    {
      iconKey: "store-setup",
      title: "Shopify Store Setup & Configuration",
      description:
        "We will help you build a fully functional Shopify store from scratch, based on your brand\u2019s requirements. From choosing themes to configuring environments, we ensure a smooth and efficient store launch.",
      icon: icon("shopify-store-setup"),
      iconAlt: "Shopify store setup and configuration",
    },
    {
      iconKey: "app-integration",
      title: "Third party App Integration",
      description:
        "Improve your store\u2019s functionality with custom app integrations. Our team connects your Shopify store with important third party apps for marketing, payments, shipping, and more, all without compromising performance.",
      icon: icon("third-party-app-integration"),
      iconAlt: "Third-party app integration",
    },
    {
      iconKey: "migration",
      title: "Shopify Migration",
      description:
        "Want to switch to Shopify from another platform? We handle data transfer, theme customization, and app integration, ensuring a smooth migration and minimal downtime for your online store.",
      icon: icon("shopify-migration"),
      iconAlt: "Shopify migration",
    },
    {
      iconKey: "maintenance-support",
      title: "Shopify Post launch Maintenance & Support",
      description:
        "We offer ongoing support even after your Shopify store is live. From updates and troubleshooting to performance optimization, our team guarantees your Shopify store runs seamlessly and stays up to date.",
      icon: icon("post-launch-support"),
      iconAlt: "Shopify post-launch maintenance and support",
    },
  ],
} as const;

export const hireShopifyPortfolio: readonly PortfolioShowcaseItem[] = [
  {
    name: "Nufyx",
    category: "SHOPIFY",
    href: "https://nufyx.com/",
    image: "/assets/health-nutrition/portfolio/nufyx-protein-products.webp",
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
] as const;

export const hireShopifyWhyHireExperts = {
  eyebrow: "Why Dynamic Dreamz",
  heading: "Why Hire Shopify Experts from Dynamic Dreamz?",
  description:
    "Get Shopify-certified expertise backed by an experienced in-house team and a verifiable Shopify Platinum Partner relationship.",
  items: [
    {
      icon: "certified",
      title: "Certified Shopify Expertise",
      description:
        "Shopify certifications across development, Liquid storefronts and B2B are combined with hands-on ecommerce delivery experience.",
    },
    {
      icon: "verticals",
      title: "Experience Across Multiple Verticals",
      description:
        "Fashion, beauty, health & nutrition, jewellery, food & beverage, home & living, sports and other product-led categories.",
    },
    {
      icon: "team",
      title: "150+ In-House Experts",
      description:
        "Shopify developers can be supported by UI/UX, QA, integrations, mobile and full-stack specialists when the project needs broader expertise.",
    },
  ],
  partnerLogo: "/assets/proof/shopify-platinum-partner.svg",
  partnerLogoAlt: "Dynamic Dreamz - Shopify Platinum Partner",
  logoHref: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
  partnerHeading: "20+ Years of Ecommerce Delivery",
  partnerDescription:
    "Dynamic Dreamz combines long-term web and ecommerce experience with a broader 150+ expert in-house team and more than 5,000 delivered projects.",
  stats: [
    { value: "20+", label: "Years of Experience" },
    { value: "150+", label: "Experts" },
    { value: "5k+", label: "projects delivered" },
    { value: "2.5k+", label: "Verified 5 star Reviews" },
  ],
  partnerLink: {
    label: "About Dynamic Dreamz",
    href: "/about-us",
  },
} satisfies WhyChooseMigrationContent;

export const hireShopifyCapabilities = {
  eyebrow: "Complete Shopify Capability",
  heading: "Complete Shopify Expertise Under One Roof",
  description:
    "From front-end storefront work to custom apps, integrations and migrations, our Shopify experts can bring in the right technical depth as your requirement grows.",
  items: [
    {
      tag: "Front-End Development",
      title: "Shopify storefronts, themes and customer experience",
      description:
        "Liquid, custom themes, sections, templates, metafields, product pages, collections, navigation, responsive implementation and Figma-to-Shopify development.",
      pills: ["Liquid", "Figma", "PDP", "PLP", "OS 2.0", "Responsive QA"],
    },
    {
      tag: "Back-End & APIs",
      title: "Shopify Integrations",
      description:
        "Admin API, Storefront API, third-party services, ERP, CRM, 3PL and operational integrations.",
    },
    {
      tag: "Custom Apps",
      title: "Shopify App Development",
      description:
        "Custom functionality and private/public app requirements when an off-the-shelf app is not the right fit.",
    },
    {
      tag: "Replatforming & Growth",
      title: "Migration, CRO, Shopify Plus & B2B",
      description:
        "Platform migrations, SEO-aware launch planning, CRO implementation, performance improvements and higher-complexity Shopify Plus or B2B requirements.",
      pills: ["Migration", "CRO", "Performance", "Shopify Plus", "B2B"],
    },
    {
      tag: "Support",
      title: "Ongoing Development",
      description:
        "Fixes, enhancements, releases, app changes and long-term Shopify development capacity after launch.",
    },
    {
      tag: "Mobile App",
      title: "Shopify Plus Mobile App Development",
      description:
        "Build high-performance iOS and Android shopping apps integrated with Shopify Plus, including real-time products, customer accounts, checkout, push notifications and loyalty features.",
      cta: {
        label: "Explore Shopify Mobile Apps",
        href: "/shopify-mobile-app-development",
      },
    },
  ],
} satisfies ShopifyStageServicesContent;

export const hireShopifyAiTools = {
  eyebrow: "AI-Empowered Shopify Delivery",
  heading: "Shopify experts empowered by modern AI development tools.",
  description:
    "Our developers use AI-assisted tools such as Claude and Cursor where they can improve code exploration, debugging, documentation, refactoring and repetitive development work. AI helps accelerate the workflow — but architecture, business logic, security, code quality and production releases remain under the control of experienced developers and our QA process.",
  tools: [
    {
      name: "Claude",
      description: "Code analysis & development assistance",
    },
    {
      name: "Cursor",
      description: "AI-assisted coding & codebase exploration",
    },
    {
      name: "Human Review",
      description: "Architecture, security & maintainability",
    },
    {
      name: "QA",
      description: "Device, browser & ecommerce-flow validation",
    },
  ],
  callout:
    "Modern tools help our developers move faster. Human Shopify expertise remains responsible for the final solution.",
} satisfies AiEmpoweredDeliveryContent;

export const hireShopifyPricing = {
  eyebrow: "Flexible Shopify Engagements",
  heading: "Choose the Right Shopify Expert Engagement",
  description:
    "Use the same flexible engagement model available across our Shopify services — from one defined project to ongoing development capacity.",
  items: [
    {
      label: "Project-Based",
      badge: "Have One Shopify Project?",
      price: "Custom Quote",
      description:
        "For Shopify builds, redesigns, migrations, custom functionality, integrations and other clearly defined requirements.",
      ctaLabel: "Send Brief — Get a Quote",
      ctaHref: "/request-quote",
    },
    {
      label: "Flexible Hourly Support",
      badge: "Need Extra Shopify Capacity?",
      price: "From $25/hour",
      description:
        "For maintenance, enhancements, troubleshooting, CRO implementation and changing Shopify development priorities.",
      ctaLabel: "Buy Shopify Development Hours",
      ctaHref: "/buy-shopify-development-hours",
    },
    {
      label: "Dedicated Developer / Team",
      badge: "Need Ongoing Capacity?",
      price: "From $2,000/month",
      description:
        "For brands or agencies with a steady Shopify roadmap, recurring releases or a need for consistent development continuity.",
      ctaLabel: "Discuss Dedicated Capacity",
      ctaHref: "/book-a-discovery-call",
    },
  ],
} satisfies PricingEngagementContent;

export const hireShopifyWork = {
  eyebrow: "Portfolio",
  heading: "Work of our Shopify Developers that show our Expertise",
  description:
    "We are sure you would like to hear to what our clients says about our Shopify development.",
  ctaLabel: "View our work",
  ctaHref: "/our-work",
  items: hireShopifyPortfolio,
} as const;

export const hireShopifyTestimonials = {
  eyebrow: "Client Stories",
  heading: "Our Customers' Testimonials",
  description:
    "We have faith in our work, but what truly matters is the outcomes we serve our clients.",
} as const;

export const hireShopifyFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What do Shopify developers do?",
    answer:
      "Shopify store development, customization, and maintenance are the responsibilities of Shopify developers. Everything is taken care of by them, including performance optimization, app integration, and design and development.",
  },
  {
    question: "How much does hiring a Shopify developer cost?",
    answer:
      "The cost of hiring a Shopify developer depends on the complexity and size of your project, as well as the developer’s skills and experience. We offer flexible pricing models to suit your budget and needs.",
  },
  {
    question: "Is it worth hiring a Shopify developer?",
    answer:
      "Yes, of course. You may save time and make sure your store is expertly designed, optimized, and tailored to fit your unique business needs by hiring a Shopify developer.",
  },
  {
    question: "What is the process for hiring a Shopify developer from Dynamic Dreamz?",
    answer: "Hiring a Shopify developer from Dynamic Dreamz is simple:",
    listItems: [
      { text: "Reach out to us with your requirements." },
      { text: "Choose your preferred hiring model." },
      { text: "Get started with a dedicated Shopify developer to bring your project to life." },
    ],
  },
  {
    question: "What services do Shopify developers offer?",
    answer: "Shopify developers provide services such as:",
    listItems: [
      { text: "Shopify Store setup" },
      { text: "Shopify Theme customization" },
      { text: "Shopify App development" },
      { text: "Shopify Store Migration" },
      { text: "Shopify SEO Optimization" },
      { text: "Shopify Ongoing support" },
    ],
  },
] as const;

// Legacy export retained for backwards compatibility
export const hireShopifyIndustries = [
  {
    title: "Beauty & Cosmetics",
    image: "/assets/shopify-plus-agency/industries/beauty-cosmetics.webp",
    imageAlt: "Beauty and cosmetics Shopify store",
    description:
      "We create elegant, high converting stores that capture the essence of beauty and cosmetics brands, enhancing customer engagement.",
  },
  {
    title: "Fashion & Apparel",
    image: "/assets/shopify-plus-agency/industries/fashion-apparel.webp",
    imageAlt: "Fashion and apparel Shopify store",
    description:
      "Our solutions for fashion and apparel brands concentrate on artistic taste and functionality, driving organic traffic and boosting sales.",
  },
  {
    title: "Health & Nutrition",
    image: "/assets/shopify-plus-agency/industries/health-nutrition.webp",
    imageAlt: "Health and nutrition Shopify store",
    description:
      "We develop robust Shopify stores for health and nutrition brands, ensuring adherence to industry standards and providing a smooth shopping experience.",
  },
  {
    title: "Food & Beverages",
    image: "/assets/shopify-plus-agency/industries/food-beverages.webp",
    imageAlt: "Food and beverages Shopify store",
    description:
      "Our team designs appealing and easy-to-navigate stores for food and beverage businesses, enhancing customer satisfaction and loyalty.",
  },
  {
    title: "Pet Industry",
    image: "/assets/shopify-plus-agency/industries/pet-industry.webp",
    imageAlt: "Pet industry Shopify store",
    description:
      "We cater to pet brands with tailored Shopify solutions that resonate with pet lovers, making shopping for pet products a satisfying experience.",
  },
] as const;

export const hireShopifyContent = {
  hero: hireShopifyHero,
  brands: hireShopifyBrands,
  whyChoose: hireShopifyWhyChoose,
  process: hireShopifyProcess,
  whyHireExperts: hireShopifyWhyHireExperts,
  capabilities: hireShopifyCapabilities,
  advantages: hireShopifyAdvantagesContent,
  aiTools: hireShopifyAiTools,
  services: hireShopifyServices,
  work: hireShopifyWork,
  pricing: hireShopifyPricing,
  testimonials: hireShopifyTestimonials,
  faqs: {
    heading: "Frequently Asked Questions",
    items: hireShopifyFaqs,
  },
} as const;
