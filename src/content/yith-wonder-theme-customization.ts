import type {
  YithWonderBenefitIconName,
  YithWonderFeatureIconName,
  YithWonderServiceIconName,
} from "@/components/sections/yith-wonder-theme-customization/yith-wonder-icons";

export type YithWonderFeatureItem = {
  iconName: YithWonderFeatureIconName;
  title: string;
  description: string;
};

export type YithWonderServiceItem = {
  iconName: YithWonderServiceIconName;
  title: string;
  description: string;
};

export type YithWonderBenefitItem = {
  iconName: YithWonderBenefitIconName;
  title: string;
  description: string;
};

export type YithWonderPortfolioItem = {
  name: string;
  category: string;
  href: string;
  image: string;
  imageAlt: string;
};

export type YithWonderFaqItem = {
  question: string;
  answer: string;
};

export const yithWonderThemeCustomizationContent = {
  hero: {
    eyebrow: ["Wordpress Agency", "Theme Customization"] as const,
    title: "YITH Wonder Theme Customization Service",
    description:
      "The YITH Wonder theme is a stylish and modern WordPress theme created for online stores, blogging websites, and business websites. It offers smooth WooCommerce integration, a user-friendly design, and extensive customization options. Our YITH Wonder Theme Customization Services help you improve the look, functionality, and performance of your WordPress website, ensuring a unique and professional online presence that drives engagement and sales.",
    ctaText: "Request a quote",
    ctaHref: "/request-quote",
    ctaAriaLabel: "Request a quote",
    image: {
      src: "/assets/yith-wonder-theme-customization/hero/yith-wonder-theme-customization-service-img.webp",
      alt: "YITH Wonder Theme Customization Service Image",
      width: 601,
      height: 474,
    },
  },
  brands: {
    title: "Trusted by \nLeading Brands",
    heading: "Trusted by \nLeading Brands",
    slug: "yith-wonder-theme-customization",
    items: [
      {
        name: "Supper Tails Logo",
        src: "/assets/clients/supertails.svg",
        href: "https://supertails.com/",
        alt: "Supper Tails Logo",
        width: 164,
        height: 41,
      },
      {
        name: "Eleven Eleven",
        src: "/assets/clients/eleven-eleven.svg",
        href: "https://11-11.in/",
        alt: "Eleven Eleven",
        width: 145,
        height: 20,
      },
      {
        name: "bellavita logo",
        src: "/assets/clients/bella-vita.svg",
        href: "https://bellavitaorganic.com/",
        alt: "bellavita logo",
        width: 166,
        height: 24,
      },
      {
        name: "Bombay Shirt Company",
        src: "/assets/clients/bombay-shirt-company.svg",
        href: "https://www.bombayshirts.com/",
        alt: "Bombay Shirt Company",
        width: 204,
        height: 26,
      },
      {
        name: "popclub-co",
        src: "/assets/clients/popclub.svg",
        href: "https://popclub.co/",
        alt: "popclub-co",
        width: 65,
        height: 41,
      },
      {
        name: "SriSri Tattva Logo",
        src: "/assets/clients/sri-sri-tattva.svg",
        href: "https://www.srisritattva.com/",
        alt: "SriSri Tattva Logo",
        width: 106,
        height: 40,
      },
      {
        name: "tropicfeel logo",
        src: "/assets/clients/tropicfeel.svg",
        href: "https://shop.tropicfeel.com/",
        alt: "tropicfeel logo",
        width: 150,
        height: 32,
      },
      {
        name: "Renee logo",
        src: "/assets/clients/renee.svg",
        href: "https://www.reneecosmetics.in/",
        alt: "Renee logo",
        width: 93,
        height: 30,
      },
      {
        name: "Royce chocolate logo",
        src: "/assets/clients/royce-chocolate.svg",
        href: "https://royceindia.com/",
        alt: "Royce chocolate logo",
        width: 132,
        height: 38,
      },
      {
        name: "tego logo",
        src: "/assets/clients/tego.svg",
        href: "https://tego.fit/",
        alt: "tego logo",
        width: 101,
        height: 40,
      },
      {
        name: "nekter-colored",
        src: "/assets/clients/nekter-colored.svg",
        href: "https://www.nekterjuicebar.com/",
        alt: "nekter-colored",
        width: 66,
        height: 64,
      },
      {
        name: "Rare Rabbit Logo",
        src: "/assets/clients/rare-rabbit.svg",
        href: "https://thehouseofrare.com/",
        alt: "Rare Rabbit Logo",
        width: 122,
        height: 84,
      },
    ],
  },
  features: {
    eyebrow: "Features",
    heading: "Features of YITH Wonder Theme",
    description:
      "The YITH Wonder theme is packed with powerful features to help you create a stunning and efficient WordPress website. Let's check:",
    items: [
      {
        iconName: "woocommerce-compatibility",
        title: "WooCommerce Compatibility",
        description:
          "With WooCommerce compatibility, it's perfect for building a fully functional eCommerce store.",
      },
      {
        iconName: "drag-and-drop-customization",
        title: "Drag-and-Drop Customization",
        description:
          "The YITH Wonder theme provides a drag-and-drop customizer that allows users to edit layouts and design elements easily.",
      },
      {
        iconName: "fully-responsive",
        title: "Fully Responsive",
        description:
          "This theme is fully responsive so that you can get a smooth experience on all devices.",
      },
      {
        iconName: "seo-optimized",
        title: "SEO-Optimized",
        description:
          "It's already created with the best SEO practices for higher search rankings.",
      },
      {
        iconName: "fast-loading-speed",
        title: "Fast Loading Speed",
        description:
          "With proper code and theme structure, this theme is optimized for speed and performance.",
      },
      {
        iconName: "multiple-pre-built-templates",
        title: "Multiple Pre-Built Templates",
        description:
          "The YITH Wonder theme offers a variety of stylish pre-built templates.",
      },
      {
        iconName: "cross-browser-compatibility",
        title: "Cross-Browser Compatibility",
        description:
          "This theme works smoothly across all modern browsers.",
      },
      {
        iconName: "custom-widgets-and-elements",
        title: "Custom Widgets & Elements",
        description:
          "Add extra functionalities using the custom widgets & elements feature without coding.",
      },
    ] as const,
  },
  services: {
    eyebrow: "Services",
    heading: "Our WordPress Theme Customization Services",
    description:
      "We offer professional YITH Wonder theme customization services to create a visually attractive and high-performance WordPress website. Check our services:",
    items: [
      {
        iconName: "theme-installation",
        title: "Theme Installation",
        description: "We install and set up the YITH Wonder theme for you.",
      },
      {
        iconName: "custom-design-and-branding",
        title: "Custom Design and Branding",
        description:
          "We can customize your theme design to match your business branding.",
      },
      {
        iconName: "responsive-design",
        title: "Responsive Design",
        description:
          "We ensure your website looks great on desktops, tablets, and mobiles during our theme customization.",
      },
      {
        iconName: "advanced-features-integration",
        title: "Advanced Features Integration",
        description:
          "We can add animations, sliders, and extra functionalities as per your requirements.",
      },
      {
        iconName: "performance-optimization",
        title: "Performance Optimization",
        description:
          "We can help you speed up your website for better user experience and SEO.",
      },
      {
        iconName: "ongoing-support-and-maintenance",
        title: "Ongoing Support and Maintenance",
        description:
          "We offer regular updates, security checks, and troubleshooting with our ongoing support and maintenance service.",
      },
    ] as const,
  },
  benefits: {
    eyebrow: "Benefits",
    heading: "Benefits of YITH Wonder Theme Customization",
    description:
      "Customizing the YITH Wonder theme helps you build a unique and high-performing WordPress website customized to your business requirements. Here are a few:",
    items: [
      {
        iconName: "fully-customizable-store",
        title: "Fully Customizable Store",
        description:
          "You can personalize layouts, colors, and features to reflect your brand identity.",
      },
      {
        iconName: "unique-brand-identity",
        title: "Unique Brand Identity",
        description:
          "Stand out in a competitive market with custom fonts, colors, and visual elements. It will give you a unique brand identity.",
      },
      {
        iconName: "improved-user-experience",
        title: "Improved User Experience",
        description:
          "By enhancing navigation and website structure and layouts, you can improve user experience.",
      },
      {
        iconName: "multiple-third-party-plugins",
        title: "Multiple Third-party Plugins",
        description:
          "You can easily integrate advanced features such as forms, analytics, and social media feeds.",
      },
      {
        iconName: "higher-conversion-rates",
        title: "Higher Conversion Rates",
        description:
          "Well-optimized website design and content can increase your sales and lead generation.",
      },
      {
        iconName: "mobile-optimization",
        title: "Mobile Optimization",
        description:
          "With the theme's responsive design, you can ensure a fast, smooth experience for mobile users.",
      },
      {
        iconName: "safe-and-secure-payments",
        title: "Safe and Secure Payments",
        description:
          "Using secure payment gateways protects your customer transactions.",
      },
      {
        iconName: "minimal-maintenance-cost",
        title: "Minimal Maintenance Cost",
        description:
          "With good theme customization services, you can reduce long-term costs.",
      },
    ] as const,
  },
  whyChoose: {
    eyebrow: "Why Dynamic Dreamz",
    heading: "Why Choose Dynamic Dreamz",
    description:
      "At Dynamic Dreamz, we deliver professional and customized WordPress theme solutions to help businesses grow online.",
    items: [
      {
        title: "Expert Team",
        description:
          "We have expert WordPress developers who have years of experience in WordPress theme customization.",
      },
      {
        title: "Proven Process",
        description:
          "We follow a streamlined approach to ensure high-quality results.",
      },
      {
        title: "Ongoing Support",
        description:
          "We offer continuous support for updates and troubleshooting.",
      },
      {
        title: "Client-Focused Approach",
        description: "We prioritize your business goals and vision.",
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
        imageAlt: "Quite Events WordPress Theme Customization",
      },
      {
        name: "Les Etoiles",
        category: "WORDPRESS",
        href: "https://louer-lesetoiles.ca/",
        image: "/assets/our-work/projects/les-etoiles.webp",
        imageAlt: "Les Etoiles WordPress Theme Customization",
      },
      {
        name: "Valents",
        category: "WORDPRESS",
        href: "https://wearvalents.com/",
        image: "/assets/our-work/projects/valents.webp",
        imageAlt: "Valents WordPress Theme Customization",
      },
      {
        name: "Get Sunsights",
        category: "WORDPRESS",
        href: "https://www.getsunsights.com/",
        image: "/assets/our-work/projects/get-sunsights.webp",
        imageAlt: "Get Sunsights WordPress Theme Customization",
      },
      {
        name: "Lipari Design",
        category: "WORDPRESS",
        href: "https://liparidesign.ca/",
        image: "/assets/our-work/projects/lipari-design.webp",
        imageAlt: "Lipari Design WordPress Theme Customization",
      },
      {
        name: "Nexventur",
        category: "WORDPRESS",
        href: "https://www.nexventur.com/",
        image: "/assets/our-work/projects/nexventur.webp",
        imageAlt: "Nexventur WordPress Theme Customization",
      },
      {
        name: "Awaken Media",
        category: "WORDPRESS",
        href: "https://www.awaken.media/",
        image: "/assets/our-work/projects/awaken-media.webp",
        imageAlt: "Awaken Media WordPress Theme Customization",
      },
      {
        name: "Budget Maids",
        category: "WORDPRESS",
        href: "https://www.budget-maids.com/",
        image: "/assets/our-work/projects/budget-maids.webp",
        imageAlt: "Budget Maids WordPress Theme Customization",
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
      question: "What is the cost of the YITH Wonder theme customization services?",
      answer:
        "The theme customization cost is not the same for all the projects. It depends on the customization scope, its complexity, and the expertise of the WordPress developer who works on it. If you want to know the exact cost, then you can contact us with your detailed theme customization requirements.",
    },
    {
      question: "How long does it take to customize the YITH Wonder theme?",
      answer:
        "Customization time depends on the complexity and level of changes. Basic changes can take a few days, while advanced customizations may take longer.",
    },
    {
      question: "Can I integrate WooCommerce with the customized YITH Wonder theme?",
      answer:
        "Yes, YITH Wonder is fully compatible with WooCommerce, allowing you to create a professional eCommerce store. You can get some pre-built ready pages such as the Shop page, Product page, Cart Page, and Checkout page.",
    },
    {
      question: "Will my website be SEO-friendly after customization?",
      answer:
        "Absolutely! We follow SEO best practices to ensure your website is optimized for search engines. During customization, we ensure we never harm your search engine ranking.",
    },
    {
      question: "Can I request additional features beyond the default theme options?",
      answer:
        "Yes, we can integrate additional functionalities such as custom widgets, animations, and third-party plugins.",
    },
    {
      question: "Do you provide ongoing support after the theme customization is complete?",
      answer:
        "Yes, we offer ongoing support and maintenance to keep your website secure and up to date. After a few initial revisions, we can start a new contract at an hourly rate or fixed price.",
    },
  ],
} as const;
