import { clientLogos, proofLogos } from "@/content/home";

export const upgradeShopifyPlusHero = {
  title: "Did you know Shopify Plus brands often see 25–30% increase in conversion rate?",
  titleAccent: "see 25–30% increase in conversion rate?",
  paragraphs: [
    "Want to know how? Book your Free eCommerce Growth consultation call now!",
  ],
  cta: "Book your consultation call",
  ctaHref: "/book-a-discovery-call",
  video: "/assets/home/why-dynamic-dreamz.mp4",
  badges: proofLogos.map((badge) => ({
    label: badge.alt,
    icon: badge.src,
    alt: badge.alt,
    href: badge.href,
    width: badge.width,
    height: badge.height,
  })),
} as const;

export const upgradeShopifyPlusCounters = [
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

export const upgradeShopifyPlusBrands = {
  heading: "Partnering with Ambitious Brands",
  description:
    "Selected brands our teams have supported across Shopify, Shopify Plus and digital commerce.",
  items: clientLogos,
} as const;

export const upgradeShopifyPlusWhyUpgrade = {
  eyebrow: "Why Upgrade",
  heading: "Why Upgrading to Shopify Plus",
  description:
    "Shopify Plus brands often see 25–30% increase in conversion rate by using advance features",
  items: [
    {
      value: "34%",
      label: "Increase in revenue growth",
    },
    {
      value: "2784%",
      label: "year-over-year increase in US customers",
    },
    {
      value: "15%",
      label: "Increase in average order value",
    },
    {
      value: "100%",
      label: "Growth in international markets MoM",
    },
  ],
} as const;

export const upgradeShopifyPlusExclusiveTools = {
  eyebrow: "Exclusive Tools",
  heading:
    "Access to all the power you need to scale, with exclusive tools, and competitive transaction fees",
  cards: [
    {
      title: "9 Global Stores",
      description:
        "Run up to 9 stores with local currencies, languages, content.",
    },
    {
      title: "Lower Your Transaction Fees",
      description:
        "Shopify Plus cuts processing costs to boost your profits.",
    },
    {
      title: "B2B on Shopify",
      description: "Sell B2B and DTC from one place",
    },
    {
      title: "ShopifyQL Notebooks",
      description: "Back your decisions with better data",
    },
    {
      title: "Launchpad",
      description: "Break sales records, not your site",
    },
    {
      title: "International expansion",
      description: "Manage complexity across markets",
    },
    {
      title: "Customise with Shopify Functions",
      description: "Stand out with unique commerce experiences",
    },
    {
      title: "Priority support and partners",
      description: "World-class support and partners you can count on",
    },
  ],
} as const;

export const upgradeShopifyPlusPortfolio = {
  eyebrow: "Portfolio",
  heading: "Explore Our Work",
  description:
    "For 20 years, we’ve worked on challenging and impactful projects for startups and leading global brands. Every website we create is designed around our clients’ goals.",
  items: [
    {
      name: "Ranavat",
      category: "Shopify / Shopify Plus",
      href: "https://www.ranavat.com/",
      image: "/assets/beauty-cosmetics/portfolio/ranavat-skincare.webp",
      imageAlt: "Ranavat Image",
    },
    {
      name: "Atolea Jewelry",
      category: "Shopify / Shopify Plus",
      href: "https://atoleajewelry.com/",
      image: "/assets/our-work/projects/atolea-jewelry.webp",
      imageAlt: "Atolea Jewelry Image",
    },
    {
      name: "Naakbar",
      category: "Shopify / Shopify Plus",
      href: "https://www.naak.com/",
      image: "/assets/healthcare/portfolio/naakbar-energy-products.webp",
      imageAlt: "Naakbar Image",
    },
    {
      name: "Tropicfeel",
      category: "Shopify / Shopify Plus",
      href: "https://shop.tropicfeel.com/",
      image: "/assets/fashion/portfolio/tropicfeel-fashion.webp",
      imageAlt: "Tropicfeel Image",
    },
    {
      name: "Sculpt Neon",
      category: "Shopify / Shopify Plus",
      href: "https://sculptneonsigns.com/",
      image: "/assets/our-work/projects/sculpt-neon.webp",
      imageAlt: "Sculpt Neon Image",
    },
    {
      name: "Headsets",
      category: "Shopify / Shopify Plus",
      href: "https://www.headsets.com/",
      image: "/assets/our-work/projects/headsets.webp",
      imageAlt: "Headsets Image",
    },
    {
      name: "Bella Vita",
      category: "Shopify / Shopify Plus",
      href: "https://bellavitaorganic.com/",
      image: "/assets/our-work/projects/bella-vita.webp",
      imageAlt: "Bella Vita Image",
    },
    {
      name: "Renee",
      category: "Shopify / Shopify Plus",
      href: "https://www.reneecosmetics.in/",
      image: "/assets/our-work/projects/renee.webp",
      imageAlt: "Renee Image",
    },
  ],
} as const;

export const upgradeShopifyPlusProcess = {
  eyebrow: "How We Work",
  heading: "Our Development Process",
  description:
    "At Dynamic Dreamz, we create solutions that hold customers’ attention, win their hearts and build an enduring relation.",
  steps: [
    {
      step: "Step 01",
      title: "Analyze",
      description:
        "It starts with analyzing the client’s business and the expected outcome. We create a set of processes that shows what the finished software will do.",
    },
    {
      step: "Step 02",
      title: "Design",
      description:
        "We believe good design generates good business. As an eCommerce solution provider, we keep things simple and use space.",
    },
    {
      step: "Step 03",
      title: "Build",
      description:
        "Based on the design, we craft the website using the platform best suited as per your needs.",
    },
    {
      step: "Step 04",
      title: "Test",
      description:
        "Before going Live, we conduct rigorous testing of website to make it fully secured and bug free.",
    },
  ],
} as const;

export const upgradeShopifyPlusWhyChoose = {
  eyebrow: "Why Dynamic Dreamz",
  heading: "Why Choose Dynamic Dreamz",
  description:
    "With our Shopify experience, practical delivery approach and long-term support capability, we help businesses build ecommerce experiences designed for performance, scalability and continuous improvement.",
  items: [
    {
      title: "Expertise in Custom Development",
      description:
        "Our Shopify experts handle complex migrations and custom requirements, delivering a Shopify store tailored to your business needs.",
      icon: "/assets/services/upgrade-to-shopify-plus/why-choose/expertise-in-custom-development.svg",
      iconAlt: "Expertise in Custom Development",
    },
    {
      title: "Focus on Security",
      description:
        "We protect your store and customer data throughout migration with secure data transfer, careful testing, and reliable migration practices.",
      icon: "/assets/services/upgrade-to-shopify-plus/why-choose/focus-on-security.svg",
      iconAlt: "Focus on Security",
    },
    {
      title: "Commitment to Quality",
      description:
        "From data accuracy to design and functionality, we thoroughly test every aspect of your migrated store for a seamless shopping experience.",
      icon: "/assets/services/upgrade-to-shopify-plus/why-choose/commitment-to-quality.svg",
      iconAlt: "Commitment to Quality",
    },
    {
      title: "Timely Delivery",
      description:
        "Our structured migration process keeps your project on track and minimizes downtime, helping you get your Shopify store live without unnecessary delays.",
      icon: "/assets/services/upgrade-to-shopify-plus/why-choose/timely-delivery.svg",
      iconAlt: "Timely Delivery",
    },
    {
      title: "Transparent Communication",
      description:
        "Stay informed at every stage with clear communication, regular updates, and a dedicated team available to address your questions and requirements.",
      icon: "/assets/services/upgrade-to-shopify-plus/why-choose/transparent-communication.svg",
      iconAlt: "Transparent Communication",
    },
    {
      title: "Ongoing Support and Maintenance",
      description:
        "Our support doesn’t stop after launch. We help with post-migration fixes, theme updates, app integrations, performance optimization, and ongoing improvements.",
      icon: "/assets/services/upgrade-to-shopify-plus/why-choose/ongoing-support-and-maintenance.svg",
      iconAlt: "Ongoing Support and Maintenance",
    },
  ],
} as const;

export const upgradeShopifyPlusFaqs = [
  {
    question: "What is a Shopify Plus agency?",
    answer:
      "Using Shopify Plus to design, develop, and scale eCommerce stores is the expertise of a Shopify Plus agency. These agencies have in-depth knowledge of the platform’s advanced features and help enterprise-level brands create high-performing online experiences.",
  },
  {
    question:
      "Why should I hire a Shopify Plus agency instead of a regular Shopify expert?",
    answer:
      "More services, more in-depth knowledge, and scalable solutions designed for growing brands are delivered by a Shopify Plus agency. Unlike freelance developers or general Shopify experts, an agency has a dedicated team with experience in high-volume sales, B2B features, automation, and advanced customization.",
  },
  {
    question: "How much does it cost to work with a Shopify Plus agency?",
    answer:
      "The size, complexity, and specific service requirements of the project all affect the cost. The initial cost of simple projects could be a few thousand dollars. At the same time, custom development, large-scale migrations, or long-term support plans may require a higher investment. We offer flexible pricing to fit different budgets. Check out our pricing section.",
  },
  {
    question: "Can a Shopify Plus agency help with store migration?",
    answer:
      "Absolutely. A Shopify Plus agency ensures a smooth migration from platforms like Magento,WooCommerce, or BigCommerce. It includes secure data transfer, theme rebuilding, app setup, and preserving your SEO and performance throughout the process.",
  },
  {
    question: "Can a Shopify Plus agency optimize my existing store?",
    answer:
      "Yes. A Shopify Plus agency can analyze your current setup and improve performance, user experience, and conversion rates. From theme enhancements and checkout optimization to faster load times and better mobile experiences, we help you get the most from your store.",
  },
] as const;
