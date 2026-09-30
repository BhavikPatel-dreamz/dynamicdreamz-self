import { industryBrandLogos } from "@/content/industries";
import type {
  AstraBenefitIconName,
  AstraFeatureIconName,
  AstraServiceIconName,
} from "@/components/sections/astra-theme-customization/astra-icons";

export type AstraFeatureItem = {
  iconName: AstraFeatureIconName;
  title: string;
  description: string;
};

export type AstraServiceItem = {
  iconName: AstraServiceIconName;
  title: string;
  description: string;
};

export type AstraBenefitItem = {
  iconName: AstraBenefitIconName;
  title: string;
  description: string;
};

export const astraThemeCustomizationContent = {
  hero: {
    eyebrow: ["Wordpress Agency", "Theme Customization"] as const,
    title: "Astra Theme Customization Service",
    description:
      "Are you looking for a customized Astra theme for your WordPress website that perfectly represents your brand? Our Astra Theme Customization Service helps you transform your website with a custom and unique design, enhanced functionality, and a smooth user experience. Whether you need advanced integrations, layout modifications, or speed optimization, our team of WordPress experts ensures your website stands out while maintaining top performance and SEO-friendly features.",
    ctaText: "request a quote",
    ctaHref: "/request-quote",
    ctaAriaLabel: "request a quote",
    image: {
      src: "/assets/astra-theme-customization/hero/astra-theme-customization-service-img.webp",
      alt: "Astra Theme Customization Service Image",
      width: 601,
      height: 474,
    },
  },
  brands: {
    title: "Trusted by \nLeading Brands",
    heading: "Trusted by \nLeading Brands",
    slug: "astra-theme-customization",
    items: industryBrandLogos,
  },
  features: {
    eyebrow: "Features",
    heading: "Features of Astra Theme",
    description:
      "Astra is a lightweight, fast, and highly customizable WordPress theme developed for optimal performance and flexibility. It integrates smoothly with page builders and offers numerous customization options.",
    items: [
      {
        iconName: "lightning",
        title: "Lightning Fast Performance",
        description: "Astra is one of the fastest WordPress themes with minimal load times.",
      },
      {
        iconName: "seo",
        title: "SEO-Optimized",
        description: "It is already built with SEO best practices to improve search rankings.",
      },
      {
        iconName: "responsive",
        title: "Fully Responsive",
        description: "You can relax because this theme offers a smooth experience on all screen sizes.",
      },
      {
        iconName: "customizable",
        title: "Highly Customizable",
        description:
          "The Astra theme is highly customizable, and you can easily modify headers, footers, layouts, and colors.",
      },
      {
        iconName: "woocommerce",
        title: "WooCommerce Ready",
        description: "Perfect for eCommerce websites with smooth online store integration.",
      },
      {
        iconName: "templates",
        title: "Pre-Built Templates",
        description: "You can access a vast library of starter templates for quick design implementation.",
      },
    ] as const satisfies readonly AstraFeatureItem[],
  },
  services: {
    eyebrow: "Our Services",
    heading: "Our Astra Theme Customization Services",
    description:
      "We offer professional Astra theme customization services that are perfect for your business needs.",
    items: [
      {
        iconName: "installation",
        title: "Theme Installation",
        description: "We install and configure Astra for optimal performance.",
      },
      {
        iconName: "design",
        title: "Custom Design and Branding",
        description: "Get a tailored design that aligns with your brand's vision.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description:
          "Ensure flawless display across all devices for a smooth user experience.",
      },
      {
        iconName: "features",
        title: "Advanced Features Integration",
        description:
          "Add custom functionalities such as animations, interactive elements, and advanced navigation.",
      },
      {
        iconName: "performance",
        title: "Performance Optimization",
        description:
          "Enhance loading speed and performance for a better browsing experience.",
      },
      {
        iconName: "support",
        title: "Ongoing Support and Maintenance",
        description:
          "Receive continuous support to keep your site up-to-date and running smoothly.",
      },
    ] as const satisfies readonly AstraServiceItem[],
  },
  benefits: {
    eyebrow: "Benefits",
    heading: "Benefits of Astra Theme Customization",
    description:
      "Customizing the Astra theme allows you to create a unique, high-performing website that matches your business requirements.",
    items: [
      {
        iconName: "store",
        title: "Fully Customizable Store",
        description:
          "Modify every element to create a unique, brand-specific online WooCommerce store.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description:
          "Ensures your website adjusts smoothly to mobile, tablet, and desktop screens.",
      },
      {
        iconName: "brand",
        title: "Unique Brand Identity",
        description:
          "Create a custom look to distinguish your brand from competitors.",
      },
      {
        iconName: "ux",
        title: "Improved User Experience",
        description:
          "Enhance navigation and usability for better engagement and conversions.",
      },
      {
        iconName: "plugins",
        title: "Multiple Third-party Plugins",
        description:
          "Integrate various plugins for additional functionality and features into your website.",
      },
      {
        iconName: "conversions",
        title: "Higher Conversion Rates",
        description:
          "Optimize your website and store for improved lead generation and sales.",
      },
      {
        iconName: "mobile",
        title: "Mobile Optimization",
        description:
          "Ensure fast loading times and smooth interactions on mobile devices.",
      },
      {
        iconName: "payments",
        title: "Safe and Secure Payments",
        description:
          "Integrate secure payment gateways for hassle-free and safe transactions.",
      },
      {
        iconName: "maintenance",
        title: "Minimal Maintenance Cost",
        description:
          "A well-optimized and customized theme lowers the need for frequent maintenance.",
      },
    ] as const satisfies readonly AstraBenefitItem[],
  },
  whyChoose: {
    eyebrow: "Why Dynamic Dreamz",
    heading: "Why Choose Dynamic Dreamz",
    description:
      "Choosing Dynamic Dreamz for Astra theme customization ensures quality results and professional service.",
    items: [
      {
        title: "Expert Team",
        description:
          "We have skilled developers specializing in Astra theme customization and WordPress development.",
      },
      {
        title: "Proven Process",
        description:
          "Our systematic approach delivers high-quality and efficient results.",
      },
      {
        title: "Ongoing Support",
        description:
          "We offer long-term maintenance and assistance for website updates and troubleshooting.",
      },
      {
        title: "Client-Focused Approach",
        description:
          "We prioritize your requirements and offer customized solutions to meet your business requirements.",
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
      question: "Is Astra suitable for an eCommerce store?",
      answer:
        "Yes! Astra is fully compatible with WooCommerce, making it an excellent choice for online stores.",
    },
    {
      question: "Can I customize Astra without coding?",
      answer:
        "Absolutely! Astra works smoothly with page builders like Elementor, allowing easy drag-and-drop customization.",
    },
    {
      question: "Will my website remain fast after customization?",
      answer:
        "Our customization process prioritizes speed optimization, ensuring your website loads quickly.",
    },
    {
      question: "Can I integrate third-party plugins with Astra?",
      answer:
        "Yes, Astra supports various WordPress plugins to extend your website's functionality, including SEO tools and payment gateways.",
    },
    {
      question: "Do you provide post-customization support?",
      answer:
        "We provide continuous support to ensure your website stays up-to-date and performs optimally.",
    },
  ] as const,
} as const;
