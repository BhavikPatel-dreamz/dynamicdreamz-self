import { industryBrandLogos } from "@/content/industries";
import type {
  OceanwpBenefitIconName,
  OceanwpFeatureIconName,
  OceanwpServiceIconName,
} from "@/components/sections/oceanwp-theme-customization/oceanwp-icons";

export type OceanwpFeatureItem = {
  iconName: OceanwpFeatureIconName;
  title: string;
  description: string;
};

export type OceanwpServiceItem = {
  iconName: OceanwpServiceIconName;
  title: string;
  description: string;
};

export type OceanwpBenefitItem = {
  iconName: OceanwpBenefitIconName;
  title: string;
  description: string;
};

export const oceanwpThemeCustomizationContent = {
  hero: {
    eyebrow: ["Wordpress Agency", "Theme Customization"] as const,
    title: "OceanWP Theme Customization Service",
    description:
      "Do you want to create a high-performing website with the OceanWP theme? Our OceanWP Theme Customization Service ensures that your website is tailored to your brand, fully responsive, and optimized for speed and SEO ranking. Whether you need design changes, feature improvements, or performance optimizations, we help you unlock the full potential of OceanWP, providing a unique and engaging WordPress website that sweetens user experience and increases conversions.",
    ctaText: "request a quote",
    ctaHref: "/request-quote",
    ctaAriaLabel: "request a quote",
    image: {
      src: "/assets/oceanwp-theme-customization/hero/oceanwp-theme-customization-service-img.webp",
      alt: "OceanWP Theme Customization Service Image",
      width: 601,
      height: 474,
    },
  },
  brands: {
    title: "Trusted by \nLeading Brands",
    heading: "Trusted by \nLeading Brands",
    slug: "oceanwp-theme-customization",
    items: industryBrandLogos,
  },
  features: {
    eyebrow: "Features",
    heading: "Features of OceanWP Theme",
    description:
      "OceanWP is a powerful and lightweight WordPress theme designed for flexibility and performance. This theme comes with lots of good features. Here are a few main features:",
    items: [
      {
        iconName: "fastLightweight",
        title: "Fast & Lightweight",
        description: "This theme is optimized for speed and smooth performance.",
      },
      {
        iconName: "fullyResponsive",
        title: "Fully Responsive",
        description: "With good responsiveness, you can ensure a smooth experience on all devices.",
      },
      {
        iconName: "seoOptimized",
        title: "SEO-Optimized",
        description: "Developers build it with clean, structured code for better search rankings.",
      },
      {
        iconName: "wooCommerceReady",
        title: "WooCommerce Ready",
        description: "Perfect for eCommerce websites with built-in shop features.",
      },
      {
        iconName: "highlyCustomizable",
        title: "Highly Customizable",
        description: "A straightforward customizer allows you to modify layouts, colors, typography, and more.",
      },
      {
        iconName: "multipleDemoSites",
        title: "Multiple Demo Sites",
        description: "You can choose from various pre-built options for quick theme setup.",
      },
      {
        iconName: "thirdPartyPlugins",
        title: "Third-Party Plugin Support",
        description: "This theme is compatible with top WordPress plugins; you can also use other third-party plugins.",
      },
    ] as const satisfies readonly OceanwpFeatureItem[],
  },
  services: {
    eyebrow: "Our Services",
    heading: "Our WordPress Theme Customization Services",
    description:
      "We offer professional OceanWP theme customization services to create a website that fits your business needs.",
    items: [
      {
        iconName: "installation",
        title: "Theme Installation",
        description: "We help you set up and configure the OceanWP theme for your WordPress website.",
      },
      {
        iconName: "design",
        title: "Custom Design and Branding",
        description: "Our theme customization can help you get a unique design that matches your brand's identity.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description: "Our expert designers ensure your website adapts smoothly to any screen size.",
      },
      {
        iconName: "features",
        title: "Advanced Features Integration",
        description:
          "We have WordPress experts who can help you add custom features, animations, and interactive elements.",
      },
      {
        iconName: "performance",
        title: "Performance Optimization",
        description:
          "After our theme customization services, you can get boosted speed, SEO, and overall website performance.",
      },
      {
        iconName: "support",
        title: "Ongoing Support and Maintenance",
        description: "We can offer ongoing support to keep your website updated, secure, and running smoothly.",
      },
    ] as const satisfies readonly OceanwpServiceItem[],
  },
  benefits: {
    eyebrow: "Benefits",
    heading: "Benefits of OceanWP Theme Customization",
    description:
      "Customizing the OceanWP theme improves your website’s performance, branding, and user engagement. Here are a few more benefits of OceanWP Theme Customization service:",
    items: [
      {
        iconName: "store",
        title: "Fully Customizable Website",
        description: "You can modify every element of your WordPress website to match your brand.",
      },
      {
        iconName: "brand",
        title: "Unique Brand Identity",
        description: "Stand out with our custom design customization service that can help you grow your business.",
      },
      {
        iconName: "ux",
        title: "Improved User Experience",
        description:
          "We help you customize your theme to enhance usability with smooth navigation and fast loading times.",
      },
      {
        iconName: "plugins",
        title: "Multiple Third-party Plugins",
        description: "You can easily integrate essential multiple WordPress plugins into your website.",
      },
      {
        iconName: "conversions",
        title: "Higher Conversion Rates",
        description: "We can optimize your website to generate more leads and boost sales.",
      },
      {
        iconName: "payments",
        title: "Safe and Secure Payments",
        description: "Our developers help you set up secure payment gateways for smooth transactions.",
      },
      {
        iconName: "maintenance",
        title: "Zero Maintenance Cost",
        description: "A well-optimized website reduces repeated ongoing maintenance efforts.",
      },
    ] as const satisfies readonly OceanwpBenefitItem[],
  },
  whyChoose: {
    eyebrow: "Why Dynamic Dreamz",
    heading: "Why Choose Dynamic Dreamz",
    description:
      "When you choose Dynamic Dreamz, you get expert theme customization services with guaranteed results.",
    items: [
      {
        title: "Expert Team",
        description: "We have skilled WordPress developers with in-depth knowledge of OceanWP theme customization.",
      },
      {
        title: "Proven Process",
        description: "We use a streamlined approach for smooth execution and timely project delivery.",
      },
      {
        title: "Ongoing Support",
        description: "We provide continuous assistance after customization to ensure your website works perfectly.",
      },
      {
        title: "Client-Focused Approach",
        description: "We customize every element to match your business goals.",
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
      question: "Is OceanWP a good theme for an eCommerce website?",
      answer:
        "Yes! OceanWP theme is WooCommerce-compatible, making it an ideal choice for online stores. We can help you integrate WooCommerce into your website. You can contact us with your detailed requirements and get your quote.",
    },
    {
      question: "Can I customize OceanWP without coding knowledge?",
      answer:
        "Absolutely! OceanWP provides an easy-to-use customizer that allows you to modify your website without coding knowledge.",
    },
    {
      question: "Will my website remain fast after customization?",
      answer:
        "We focus on performance optimization to keep your website lightweight and fast. We ensure we never leave extra and unused code, scripts, and images during theme customization.",
    },
    {
      question: "Can OceanWP integrate with third-party plugins?",
      answer:
        "Yes, OceanWP is compatible with many popular WordPress and third-party plugins. We can help you integrate plugins into your website based on your project requirements.",
    },
    {
      question: "Do you provide post-customization support?",
      answer:
        "We offer ongoing maintenance and support to keep your website running smoothly. We can start work on a fixed-price contract or hourly rate contract.",
    },
  ] as const,
} as const;
