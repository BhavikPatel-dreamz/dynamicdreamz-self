import { industryBrandLogos } from "@/content/industries";
import type {
  GeneratepressBenefitIconName,
  GeneratepressFeatureIconName,
  GeneratepressServiceIconName,
} from "@/components/sections/generatepress-theme-customization/generatepress-icons";

export type GeneratepressFeatureItem = {
  iconName: GeneratepressFeatureIconName;
  title: string;
  description: string;
};

export type GeneratepressServiceItem = {
  iconName: GeneratepressServiceIconName;
  title: string;
  description: string;
};

export type GeneratepressBenefitItem = {
  iconName: GeneratepressBenefitIconName;
  title: string;
  description: string;
};

export const generatepressThemeCustomizationContent = {
  hero: {
    eyebrow: ["Wordpress Agency", "Theme Customization"] as const,
    title: "GeneratePress Theme Customization Service",
    description:
      "Do you want a highly optimized and fully customized website using the GeneratePress theme? Our GeneratePress Theme Customization Service helps you customize your WordPress website to your brand’s requirements with a lightweight, responsive, and SEO-friendly design. Whether you want layout changes, feature enhancements, or performance optimizations, we ensure a fully functional and fast-loading WordPress website that improves user engagement and conversions.",
    ctaText: "request a quote",
    ctaHref: "/request-quote",
    ctaAriaLabel: "request a quote",
    image: {
      src: "/assets/generatepress-theme-customization/hero/generatepress-theme-customization-service-img.webp",
      alt: "GeneratePress Theme Customization Service Image",
      width: 601,
      height: 474,
    },
  },
  brands: {
    title: "Trusted by \nLeading Brands",
    heading: "Trusted by \nLeading Brands",
    slug: "generatepress-theme-customization",
    items: industryBrandLogos,
  },
  features: {
    eyebrow: "Features",
    heading: "Features of GeneratePress Theme",
    description:
      "GeneratePress is a fast, lightweight, highly customizable WordPress theme designed for performance and flexibility.",
    items: [
      {
        iconName: "lightning",
        title: "Lightning-Fast Performance",
        description: "You will get an optimized theme for speed, ensuring quick load times.",
      },
      {
        iconName: "seo",
        title: "SEO-Friendly Structure",
        description: "This theme is clean and optimized code for better search rankings.",
      },
      {
        iconName: "responsive",
        title: "Mobile Responsive Design",
        description:
          "Ensures a smooth user experience with mobile responsive design across all devices.",
      },
      {
        iconName: "responsive",
        title: "Modular Design",
        description: "You can activate only the needed features, reducing bloat.",
      },
      {
        iconName: "customizable",
        title: "Customizable Layouts",
        description:
          "You can modify headers, footers, sidebars, and more to set the design to your needs.",
      },
      {
        iconName: "woocommerce",
        title: "WooCommerce Compatible",
        description: "This website can quickly adapt WooCommerce store functionality.",
      },
      {
        iconName: "performance",
        title: "Secure & Stable",
        description: "Built with high coding standards for security and reliability.",
      },
    ] as const satisfies readonly GeneratepressFeatureItem[],
  },
  services: {
    eyebrow: "Our Services",
    heading: "Our GeneratePress Theme Customization Services",
    description:
      "We offer professional GeneratePress theme customization services tailored to your specific requirements. Check out our theme customization services:",
    items: [
      {
        iconName: "installation",
        title: "Theme Installation",
        description: "We help you get GeneratePress set up and configured correctly.",
      },
      {
        iconName: "design",
        title: "Custom Design and Branding",
        description:
          "Our expert designer develops a unique look that matches your brand identity.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description:
          "We ensure smooth mobile, tablet, and desktop performance with responsive design.",
      },
      {
        iconName: "features",
        title: "Advanced Features Integration",
        description:
          "Our WordPress experts can add custom functionalities, animations, and interactive elements.",
      },
      {
        iconName: "performance",
        title: "Performance Optimization",
        description:
          "We improve loading speed and overall website performance to optimize your website.",
      },
      {
        iconName: "support",
        title: "Ongoing Support and Maintenance",
        description:
          "We offer continuous support to keep your website up-to-date and running smoothly.",
      },
    ] as const satisfies readonly GeneratepressServiceItem[],
  },
  benefits: {
    eyebrow: "Benefits",
    heading: "Benefits of GeneratePress Theme Customization",
    description:
      "Customizing GeneratePress helps you build a high-performing, fully optimized website that aligns with your business goals.",
    items: [
      {
        iconName: "store",
        title: "Fully Customizable Store",
        description: "Modify every part of your theme to match your brand identity.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description: "Optimized for all screen sizes, ensuring a great user experience.",
      },
      {
        iconName: "brand",
        title: "Unique Brand Identity",
        description:
          "With our theme customization services, you can stand out in a competitive market.",
      },
      {
        iconName: "ux",
        title: "Improved User Experience",
        description:
          "Enhance navigation, readability, and engagement to improve user experience.",
      },
      {
        iconName: "plugins",
        title: "Multiple Third-party Plugins",
        description:
          "You can smoothly integrate essential WordPress and third-party plugins into your WordPress website.",
      },
      {
        iconName: "conversions",
        title: "Higher Conversion Rates",
        description: "You can have an optimized website for lead generation and sales.",
      },
      {
        iconName: "payments",
        title: "Safe and Secure Payments",
        description: "We integrate secure payment gateways for online transactions.",
      },
      {
        iconName: "maintenance",
        title: "Minimal Maintenance Cost",
        description:
          "Minimal maintenance will be required after successfully customizing your theme.",
      },
    ] as const satisfies readonly GeneratepressBenefitItem[],
  },
  whyChoose: {
    eyebrow: "Why Dynamic Dreamz",
    heading: "Why Choose Dynamic Dreamz",
    description:
      "Choosing Dynamic Dreamz ensures expert-level customization and reliable support for your GeneratePress website.",
    items: [
      {
        title: "Expert Team",
        description:
          "Our experienced team of developers is skilled in GeneratePress customization.",
      },
      {
        title: "Proven Process",
        description:
          "Our structured approach is designed to deliver high-quality results.",
      },
      {
        title: "Ongoing Support",
        description:
          "We have not stopped at the end of the customization. We provide continuous maintenance and updates for your website.",
      },
      {
        title: "Client-Focused Approach",
        description:
          "We always prioritize our clients’ needs and offer custom solutions designed to meet their business requirements.",
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
      question: "Is GeneratePress suitable for eCommerce websites?",
      answer:
        "Yes! GeneratePress is fully compatible with WooCommerce, making it an excellent choice for online stores.",
    },
    {
      question: "Can I customize GeneratePress without coding knowledge?",
      answer:
        "Absolutely! GeneratePress provides a user-friendly customizer that allows you to modify your website easily without learning core coding.",
    },
    {
      question: "Will my website stay fast after customization?",
      answer:
        "We focus on performance optimization to maintain your website lightweight and fast loading.",
    },
    {
      question: "Can I integrate third-party plugins with GeneratePress?",
      answer:
        "Yes, GeneratePress works smoothly with a wide range of WordPress plugins. We can help you integrate third-party plugins.",
    },
    {
      question: "Do you offer post-customization support?",
      answer:
        "We offer continuous support and maintenance to keep your website safe and up to date. We can start a new contract if you need more customization. We can begin with a fixed price or hourly rate contract.",
    },
  ] as const,
} as const;
