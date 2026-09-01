import { industryBrandLogos } from "@/content/industries";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { MigrationProcessContent } from "@/components/sections/migration-process-section";
import type { AgencyServicesContent } from "@/components/sections/agency-services-section";

export const foodBeverageHero = {
  title: "Food & Beverage Shopify Plus Agency",
  description:
    "Hire a Food and Beverage Shopify Plus Agency to run an online food and beverage business to skyrocket your sales. You just do not need a good product; you also need an eCommerce store that is scalable, user-friendly, and performs well. Shopify Plus is the best option for food and beverage businesses trying to grow and reach a wider audience. We specialize in creating and optimizing Shopify Plus stores customized to food and beverage businesses' unique requirements. Whether you are launching a new store, migrating from another platform, or looking to optimize your existing Shopify Plus store, we have the Shopify experts to make it happen.",
  image: {
    src: "/assets/food-beverage-shopify-plus-agency/hero/food-and-beverage-shopify-plus-agency.webp",
    alt: "food-and-beverage-shopify-plus-agency-img",
    width: 854,
    height: 529,
  },
} as const;

export const foodBeverageBrands = {
  heading: "Trusted by <br>Leading Brands",
  slug: "food-beverage-shopify-plus-agency",
  items: industryBrandLogos,
} as const;

export const foodBeverageWhyChoose = {
  heading: "Why Choose a Food & Beverage  Shopify Plus Agency  for your Brands?",
  description:
    "The food and beverage industry is very competitive, and having a well-optimized and visually attractive eCommerce store can make all the difference. Shopify Plus offers powerful features like scalable infrastructure, automated workflows, and advanced marketing tools, making it the ideal option for growing food & beverage brands. Our agency guarantees that your Shopify Plus store is created to sweeten customer experience, boost conversions, and scale effortlessly. With our expertise in Shopify Plus, we create smooth shopping experiences that turn visitors into loyal customers.",
  image: {
    src: "/assets/food-beverage-shopify-plus-agency/why-choose/why-choose-food-beverage-shopify-plus.webp",
    alt: "Why Choose a Food & Beverage Shopify Plus Agency Image",
    width: 469,
    height: 500,
  },
} as const;

export const foodBeverageServices: AgencyServicesContent = {
  heading: "Shopify Plus Services for Food and Beverage Brands",
  description:
    "We provide Shopify Plus services specifically customized for food and beverage businesses. These include:",
  items: [
    {
      title: "Shopify Plus Store Setup",
      description:
        "Our team helps you set up your Shopify Plus store from scratch, ensuring smooth functionality and an improved user-friendly experience.",
      icon: "/assets/food-beverage-shopify-plus-agency/services/store-setup-icon.svg",
      iconAlt: "Store Setup Icon",
    },
    {
      title: "Shopify Plus Consulting Service",
      description:
        "Our consulting service offers guidance on the best Shopify Plus strategies for developing your food and beverage business.",
      icon: "/assets/food-beverage-shopify-plus-agency/services/app-maintenance-icon.svg",
      iconAlt: "Maintenance and Support Icon",
    },
    {
      title: "Shopify Plus Migration Service",
      description:
        "Smoothly migrate your existing eCommerce store to Shopify Plus without losing data with minimal downtime.",
      icon: "/assets/food-beverage-shopify-plus-agency/services/migration-upload-icon.svg",
      iconAlt: "migration-upload-icon",
    },
    {
      title: "Shopify Plus Theme Customization Service",
      description:
        "Our expert developers customize themes to match your brand identity and improve user experience.",
      icon: "/assets/food-beverage-shopify-plus-agency/services/custom-theme-icon.svg",
      iconAlt: "custom-theme-icon",
    },
    {
      title: "Shopify Plus Custom Theme Development Service",
      description:
        "Our team designs and develops fully customized themes tailored to your unique business requirements.",
      icon: "/assets/food-beverage-shopify-plus-agency/services/custom-theme-icon.svg",
      iconAlt: "custom-theme-icon",
    },
    {
      title: "Shopify Plus White Label Service",
      description:
        "We provide white-label Shopify Plus services to agencies under their brand name. So they can expand their services without hiring an in-house team.",
      icon: "/assets/food-beverage-shopify-plus-agency/services/white-label-icon.svg",
      iconAlt: "white-label-icon",
    },
    {
      title: "Shopify Plus Maintenance Service",
      description:
        "We ensure your store runs smoothly with ongoing maintenance, updates, and performance optimization.",
      icon: "/assets/food-beverage-shopify-plus-agency/services/app-maintenance-icon.svg",
      iconAlt: "Support and Maintenance Service Icon",
    },
  ],
  cta: {
    label: "get a quote",
    href: "/request-quote",
    ariaLabel: "Get a quote for Food and Beverage Shopify Plus services",
  },
};

export const foodBeverageProcess: MigrationProcessContent = {
  heading: "Our Process",
  steps: [
    {
      stepNumber: "01",
      title: "Initial Consultation",
      description:
        "Before starting, we analyze your business requirements, goals, and target audience. This initial consultation gives us an idea of your requirements for creating a development plan that matches your business goals.",
    },
    {
      stepNumber: "02",
      title: "Planning and Strategy",
      description:
        "Then, we will make a roadmap for your project, including features and design components. We create a plan that prioritizes your business goals while considering user experience.",
    },
    {
      stepNumber: "03",
      title: "Development and Implementation",
      description:
        "Our expert developers will develop your Shopify store with all the features and functionalities you want. Your Shopify store design will be responsive, user-friendly, and match your brand identity.",
    },
    {
      stepNumber: "04",
      title: "Testing, Launch, and Support",
      description:
        "Once the development and design are done, we strickly test your store for bugs or issues. After the store launch, we provide ongoing support to keep it running smoothly.",
    },
  ],
};

export const foodBeverageCaseStudies = {
  eyebrow: "CASE STUDIES",
  heading: "Case Studies",
  items: [
    {
      title: "Nekter Juice Bar: Shopify Redesign with Streamlined Ordering & Multi-Location Store Pickup",
      href: "/case-studies/nekter-juice-bar",
      image: "/assets/food-beverage-shopify-plus-agency/case-studies/nekter-juice-bar.webp",
      imageAlt: "Nekter Juice Bar: Shopify Redesign with Streamlined Ordering & Multi-Location Store Pickup",
      technology: "Shopify / Shopify Plus",
      industry: "Food & Beverages",
      description: "",
      tags: ["Multi-Location Store Pickup", "Streamlined Ordering"],
      ctaLabel: "View Case study",
    },
  ],
} as const;

export const foodBeverageShopifyPlusFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What is Shopify Plus, and why should I use it for my food & beverage business?",
    answer:
      "Shopify Plus is an advanced eCommerce platform designed for high-growth brands with higher traffic volume. It is perfect for food and beverage businesses wanting to increase their online presence because it provides strong automation, scalability, and improved customization.",
  },
  {
    question: "Will my store be optimized for search engines (SEO)?",
    answer:
      "Yes! We ensure that your Shopify Plus store is fully optimized for SEO. To boost search engine ranking and generate organic traffic, we optimize product pages, use keyword strategies, and speed up your store.",
  },
  {
    question: "How do I get started with your agency?",
    answer:
      "Getting started is easy! Go to our website and open the contact page. Here, fill out the form with your detailed business requirements. Then, we will schedule a consultation call to discuss your business requirements and goals. From there, we will create a customized strategy for your Shopify Plus store.",
  },
  {
    question: "What are your pricing structures for building a Shopify Plus store?",
    answer:
      "Our pricing depends on the complexity and requirements of your project.\nWe provide flexible pricing plans based on your business’s requirements. Contact us with your detailed requirements for a personalized quote.",
  },
  {
    question: "Can you help with migration from another platform to Shopify?",
    answer:
      "Yes, we provide Shopify Plus migration services. We specialize in smooth migrations from platforms like Magento, WooCommerce, and BigCommerce to Shopify Plus while maintaining your data.",
  },
  {
    question: "How do you make sure project budgets and timeframes are met?",
    answer:
      "We use a structured project management process with clear timelines and milestones. Our team provides regular updates to ensure your project stays on track and within budget.",
  },
];

export const foodBeverageFaqs = {
  heading: "FAQs",
  items: foodBeverageShopifyPlusFaqs,
} as const;

