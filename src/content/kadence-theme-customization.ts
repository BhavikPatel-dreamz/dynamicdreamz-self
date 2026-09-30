import { industryBrandLogos } from "@/content/industries";
import type {
  KadenceBenefitIconName,
  KadenceFeatureIconName,
  KadenceServiceIconName,
} from "@/components/sections/kadence-theme-customization/kadence-icons";

export type KadenceFeatureItem = {
  iconName: KadenceFeatureIconName;
  title: string;
  description: string;
};

export type KadenceServiceItem = {
  iconName: KadenceServiceIconName;
  title: string;
  description: string;
};

export type KadenceBenefitItem = {
  iconName: KadenceBenefitIconName;
  title: string;
  description: string;
};

export const kadenceThemeCustomizationContent = {
  hero: {
    eyebrow: ["Wordpress Agency", "Theme Customization"] as const,
    title: "Kadence Theme Customization Service",
    description:
      "Want to customize your Kadence theme for a unique and high-performing WordPress website? Our Kadence Theme Customization Service helps you create a professional, fast, and user-friendly WordPress website that fulfills your brand's requirements. From layout changes to advanced feature integrations, we guarantee a fully optimized, SEO-friendly WordPress website that enhances your online presence.",
    ctaText: "request a quote",
    ctaHref: "/request-quote",
    ctaAriaLabel: "request a quote",
    image: {
      src: "/assets/kadence-theme-customization/hero/kadence-theme-customization-service-img.webp",
      alt: "Kadence Theme Customization Service Image",
      width: 601,
      height: 474,
    },
  },
  brands: {
    title: "Trusted by \nLeading Brands",
    heading: "Trusted by \nLeading Brands",
    slug: "kadence-theme-customization",
    items: industryBrandLogos,
  },
  features: {
    eyebrow: "Features",
    heading: "Features of Kadence Theme",
    description:
      "Kadence is a highly adaptable and lightweight WordPress theme designed for speed, customization, and compatibility with famous WordPress page builders.",
    items: [
      {
        iconName: "lightning",
        title: "Ultra-Lightweight & Fast",
        description: "Optimized for speed with minimal load times.",
      },
      {
        iconName: "seo",
        title: "SEO-Optimized",
        description: "It is built with clean code for better search engine rankings.",
      },
      {
        iconName: "responsive",
        title: "Fully Responsive",
        description:
          "You can relax and sit back. It ensures a smooth user experience on all devices.",
      },
      {
        iconName: "builder",
        title: "Drag-and-Drop Header & Footer Builder",
        description:
          "You can easily customize layouts without coding using a drag-and-drop builder.",
      },
      {
        iconName: "woocommerce",
        title: "WooCommerce Integration",
        description:
          "The Kadence theme is ideal for eCommerce stores with smooth functionality.",
      },
      {
        iconName: "templates",
        title: "Pre-Designed Starter Templates",
        description:
          "It provides a few ready-made starter templates for quick and easy setup.",
      },
    ] as const satisfies readonly KadenceFeatureItem[],
  },
  services: {
    eyebrow: "Our Services",
    heading: "Our Kadence Theme Customization Services",
    description:
      "We offer the best Kadence theme customization services to help you build a fully optimized and feature-rich WordPress website. Check out our WordPress theme customization services:",
    items: [
      {
        iconName: "installation",
        title: "Theme Installation",
        description:
          "We install and configure the Kadence theme to ensure smooth website performance.",
      },
      {
        iconName: "design",
        title: "Custom Design and Branding",
        description:
          "Create a unique and professional website design to represent your brand.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description:
          "Our theme customization will ensure a smooth user experience across all screen sizes.",
      },
      {
        iconName: "features",
        title: "Advanced Features Integration",
        description:
          "We can add custom functionalities like animations, custom post types, and interactive elements.",
      },
      {
        iconName: "performance",
        title: "Performance Optimization",
        description:
          "Improve website speed and responsiveness using our theme customization services for enhanced user experience.",
      },
      {
        iconName: "support",
        title: "Ongoing Support and Maintenance",
        description:
          "We offer continued support to maintain your WordPress website secure and up-to-date.",
      },
    ] as const satisfies readonly KadenceServiceItem[],
  },
  benefits: {
    eyebrow: "Benefits",
    heading: "Benefits of Kadence Theme Customization",
    description:
      "Customizing the Kadence theme allows you to build a visually appealing, high-performing, and feature-rich website. Here are a few benefits you must have to know:",
    items: [
      {
        iconName: "store",
        title: "Fully Customizable Store",
        description:
          "Get a fully modified design, layout, and features to match your brand identity quickly.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description:
          "Its responsiveness ensures optimal viewing and interaction across all devices.",
      },
      {
        iconName: "brand",
        title: "Unique Brand Identity",
        description:
          "You can stand out with a customized design that reflects your business.",
      },
      {
        iconName: "ux",
        title: "Improved User Experience",
        description:
          "Enhance navigation, readability, and functionality to provide a better user experience to your website users.",
      },
      {
        iconName: "plugins",
        title: "Multiple Third-party Plugins",
        description:
          "You can smoothly integrate essential plugins for enhanced capabilities.",
      },
      {
        iconName: "conversions",
        title: "Higher Conversion Rates",
        description:
          "Optimize your website for better engagement and lead generation with our customization.",
      },
      {
        iconName: "mobile",
        title: "Mobile Optimization",
        description:
          "Our customization service can ensure a flawless and fast-loading mobile experience.",
      },
      {
        iconName: "payments",
        title: "Safe and Secure Payments",
        description:
          "Implement secure payment gateways to offer a safe payment environment for users.",
      },
      {
        iconName: "maintenance",
        title: "Minimal Maintenance Cost",
        description:
          "A well-optimized WordPress theme reduces the need for regular maintenance.",
      },
    ] as const satisfies readonly KadenceBenefitItem[],
  },
  whyChoose: {
    eyebrow: "Why Dynamic Dreamz",
    heading: "Why Choose Dynamic Dreamz",
    description:
      "Choosing Dynamic Dreamz for Kadence theme customization ensures high-quality results and dedicated support.",
    items: [
      {
        title: "Expert Team",
        description:
          "We have skilled developers with experience in Kadence theme customization and custom WordPress development.",
      },
      {
        title: "Proven Process",
        description:
          "We follow a systematic approach to delivering customized WordPress website solutions.",
      },
      {
        title: "Ongoing Support",
        description:
          "You can get long-term maintenance and technical assistance for your WordPress website updates.",
      },
      {
        title: "Client-Focused Approach",
        description:
          "Our priority is our clients' needs. We offer custom solutions designed to align with your business goals.",
      },
    ] as const,
  },
  portfolio: {
    eyebrow: "Portfolio",
    heading: "Snippets of WordPress Theme Customization Portfolio",
    description:
      "Explore our portfolio, which showcases successful WordPress theme customization projects and highlights how we customize, secure, and enhance stores for peak performance.",
    ctaLabel: "View our work",
    ctaHref: "/our-work",
    items: [
      {
        name: "Quite Events",
        category: "WORDPRESS",
        href: "https://www.quietevents.com/",
        image: "/assets/our-work/projects/quite-events.webp",
        imageAlt: "Quite Events",
      },
      {
        name: "Les Etoiles",
        category: "WORDPRESS",
        href: "https://louer-lesetoiles.ca/",
        image: "/assets/our-work/projects/les-etoiles.webp",
        imageAlt: "Les Etoiles",
      },
      {
        name: "Valents",
        category: "WORDPRESS",
        href: "https://wearvalents.com/",
        image: "/assets/our-work/projects/valents.webp",
        imageAlt: "Valents",
      },
      {
        name: "Get Sunsights",
        category: "WORDPRESS",
        href: "https://www.getsunsights.com/",
        image: "/assets/our-work/projects/get-sunsights.webp",
        imageAlt: "Get Sunsights",
      },
      {
        name: "Lipari Design",
        category: "WORDPRESS",
        href: "https://liparidesign.ca/",
        image: "/assets/our-work/projects/lipari-design.webp",
        imageAlt: "Lipari Design",
      },
      {
        name: "Nexventur",
        category: "WORDPRESS",
        href: "https://www.nexventur.com/",
        image: "/assets/our-work/projects/nexventur.webp",
        imageAlt: "Nexventur",
      },
      {
        name: "Awaken Media",
        category: "WORDPRESS",
        href: "https://www.awaken.media/",
        image: "/assets/our-work/projects/awaken-media.webp",
        imageAlt: "Awaken Media",
      },
      {
        name: "Budget Maids",
        category: "WORDPRESS",
        href: "https://www.budget-maids.com/",
        image: "/assets/our-work/projects/budget-maids.webp",
        imageAlt: "Budget Maids",
      },
    ] as const,
  },
  testimonials: {
    eyebrow: "Client Stories",
    heading: "Don't Just Take Our Word For It",
    description:
      "Hear directly from the clients who have worked with Dynamic Dreamz across Shopify, ecommerce and long-term development engagements.",
  },
  faqs: [
    {
      question: "Can I customize the Kadence theme without coding knowledge?",
      answer:
        "Yes! Kadence theme offers drag-and-drop customization, making it easy for beginners to modify their websites. You can change color, fonts, layouts, and more.",
    },
    {
      question: "Is the Kadence theme suitable for eCommerce websites?",
      answer:
        "Absolutely! Kadence theme integrates smoothly with WooCommerce, making it an excellent choice for online stores.",
    },
    {
      question: "Will my website remain fast after customization?",
      answer:
        "We focus on performance optimization to ensure your website stays fast and efficient and provides a good user experience.",
    },
    {
      question: "Can I integrate third-party plugins with Kadence?",
      answer:
        "The Kadence theme supports many WordPress and third-party plugins to improve website functionality.",
    },
    {
      question: "Do you provide post-customization support?",
      answer:
        "We provide continuous support and maintenance to keep your website functioning. After a few revisions, we can start a new hourly or fixed-price contract.",
    },
  ] as const,
} as const;
