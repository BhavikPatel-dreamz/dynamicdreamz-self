import type {
  KubioBenefitIconName,
  KubioFeatureIconName,
  KubioServiceIconName,
} from "@/components/sections/kubio-theme-customization/kubio-icons";

export type KubioFeatureItem = {
  iconName: KubioFeatureIconName;
  title: string;
  description: string;
};

export type KubioServiceItem = {
  iconName: KubioServiceIconName;
  title: string;
  description: string;
};

export type KubioBenefitItem = {
  iconName: KubioBenefitIconName;
  title: string;
  description: string;
};

export const kubioThemeCustomizationContent = {
  hero: {
    eyebrow: ["Wordpress Agency", "Theme Customization"] as const,
    title: "Kubio Theme Customization Service",
    description:
      "The Kubio theme is a powerful, block-based WordPress theme designed for trendy websites. It offers in-depth theme customization options, a user-friendly drag-and-drop page builder, and smooth compatibility with various WordPress plugins. Whether you're running a business, blog, or eCommerce store, our Kubio Theme Customization Services help you personalize your WordPress website to match your brand and business goals.",
    ctaText: "Request a Quote",
    ctaHref: "/request-quote",
    ctaAriaLabel: "Request a Quote",
    image: {
      src: "/assets/kubio-theme-customization/hero/kubio-theme-customization-service-img.webp",
      alt: "kubio-theme",
      width: 1219,
      height: 948,
    },
  },
  brands: {
    title: "Trusted by \nLeading Brands",
    heading: "Trusted by \nLeading Brands",
    slug: "kubio-theme-customization",
    items: [
      {
        name: "Ranavat Logo",
        src: "/assets/clients/ranavat.svg",
        href: "https://www.ranavat.com/",
        alt: "Ranavat Logo",
        width: 174,
        height: 19,
      },
      {
        name: "prolash_black",
        src: "/assets/clients/prolash.svg",
        href: "https://prolash.com/",
        alt: "prolash_black",
        width: 204,
        height: 22,
      },
      {
        name: "Tropicfeel Logo",
        src: "/assets/clients/tropicfeel.svg",
        href: "https://shop.tropicfeel.com/",
        alt: "Tropicfeel Logo",
        width: 150,
        height: 32,
      },
      {
        name: "perfect_locks_color_logo",
        src: "/assets/clients/perfect-locks.svg",
        href: "https://www.perfectlocks.com/",
        alt: "perfect_locks_color_logo",
        width: 175,
        height: 32,
      },
      {
        name: "Bombay Shirt Company Logo",
        src: "/assets/clients/bombay-shirt-company.svg",
        href: "https://www.bombayshirts.com/",
        alt: "Bombay Shirt Company Logo",
        width: 204,
        height: 26,
      },
      {
        name: "kayfi-colored",
        src: "/assets/clients/kayfi.svg",
        href: "https://kayfi.com/",
        alt: "kayfi-colored",
        width: 90,
        height: 49,
      },
      {
        name: "simdirect_logo_color",
        src: "/assets/clients/simsdirect.svg",
        href: "https://simsdirect.com.au/",
        alt: "simdirect_logo_color",
        width: 143,
        height: 49,
      },
      {
        name: "Kvaser Logo",
        src: "/assets/clients/kvaser.svg",
        href: "https://www.kvaser.com/",
        alt: "Kvaser Logo",
        width: 135,
        height: 25,
      },
      {
        name: "nekter-colored",
        src: "/assets/clients/nelter.svg",
        href: "https://www.nekterjuicebar.com/",
        alt: "nekter-colored",
        width: 66,
        height: 64,
      },
      {
        name: "Circuit City Logo",
        src: "/assets/clients/circuit-city.svg",
        href: "https://circuitcity.com/",
        alt: "Circuit City Logo",
        width: 64,
        height: 64,
      },
    ],
  },
  features: {
    eyebrow: "Features",
    heading: "Features of Kubio Theme",
    description:
      "The Kubio theme provides a flexible design and advanced theme customization features, making it easy to build a professional website.",
    items: [
      {
        iconName: "dragAndDrop",
        title: "Drag-and-Drop Builder",
        description:
          "Use a simple drag-and-drop page builder to customize pages effortlessly without coding.",
      },
      {
        iconName: "responsive",
        title: "Fully Responsive",
        description:
          "With this fully responsive theme, your website will look great on all devices.",
      },
      {
        iconName: "woocommerce",
        title: "WooCommerce Ready",
        description:
          "In-built WooCommerce integration to easily create an online store with full eCommerce support.",
      },
      {
        iconName: "seo",
        title: "SEO-Optimized",
        description:
          "This theme is made with best practices to help your website rank higher.",
      },
      {
        iconName: "templates",
        title: "Pre-Built Templates",
        description: "Use ready-made layouts to speed up the design process.",
      },
      {
        iconName: "fontsAndColors",
        title: "Custom Fonts & Colors",
        description: "Customize typography and color schemes to match your brand.",
      },
      {
        iconName: "lightning",
        title: "Lightweight & Fast",
        description:
          "The Kubio theme is optimized for high performance and quick loading times.",
      },
    ] as const satisfies readonly KubioFeatureItem[],
  },
  services: {
    eyebrow: "Our Services",
    heading: "Our WordPress Theme \nCustomization Services",
    description:
      "We provide expert Kubio theme customization to ensure your website looks great and functions perfectly.",
    items: [
      {
        iconName: "installation",
        title: "Theme Installation",
        description: "We install and set up the Kubio theme for a seamless start.",
      },
      {
        iconName: "design",
        title: "Custom Design and Branding",
        description: "Tailor colors, fonts, and layouts to reflect your brand identity.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description: "Make your site mobile-friendly and optimized for all screen sizes.",
      },
      {
        iconName: "features",
        title: "Advanced Features Integration",
        description: "Add sliders, forms, animations, and custom elements.",
      },
      {
        iconName: "performance",
        title: "Performance Optimization",
        description: "Improve website speed and enhance SEO rankings.",
      },
      {
        iconName: "support",
        title: "Ongoing Support and Maintenance",
        description: "We provide long-term updates and technical support.",
      },
    ] as const satisfies readonly KubioServiceItem[],
  },
  benefits: {
    eyebrow: "Benefits",
    heading: "Benefits of Kubio \nTheme Customization",
    description:
      "Customizing your Kubio theme ensures a unique and professional website tailored to your needs.",
    items: [
      {
        iconName: "store",
        title: "Fully Customizable Store",
        description: "Design an online shop that aligns with your brand identity.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description:
          "Your website will adapt seamlessly to desktops, tablets, and smartphones.",
      },
      {
        iconName: "brand",
        title: "Unique Brand Identity",
        description: "Create a one-of-a-kind website that stands out.",
      },
      {
        iconName: "ux",
        title: "Improved User Experience",
        description: "Enhance navigation and readability for better engagement.",
      },
      {
        iconName: "plugins",
        title: "Multiple Third-party Plugins",
        description: "Add advanced features for better functionality.",
      },
      {
        iconName: "conversions",
        title: "Higher Conversion Rates",
        description: "A well-optimized design increases leads and sales.",
      },
      {
        iconName: "mobile",
        title: "Mobile Optimization",
        description:
          "Ensure fast loading speeds and smooth performance on mobile devices.",
      },
      {
        iconName: "payments",
        title: "Safe and Secure Payments",
        description: "Protect customer transactions with secure gateways.",
      },
      {
        iconName: "maintenance",
        title: "Minimal Maintenance Cost",
        description:
          "Efficient coding and optimization reduce future maintenance expenses.",
      },
    ] as const satisfies readonly KubioBenefitItem[],
  },
  whyChoose: {
    eyebrow: "Why Dynamic Dreamz",
    heading: "Why Choose Dynamic Dreamz",
    description:
      [
      "At Dynamic Dreamz, we specialize in WordPress customization,",
      "ensuring your website is professional, fast, and user-friendly.",
    ],
    items: [
      {
        title: "Expert Team",
        description: "Skilled developers with extensive WordPress experience.",
      },
      {
        title: "Proven Process",
        description: "We follow industry best practices for seamless customization.",
      },
      {
        title: "Ongoing Support",
        description: "Dedicated assistance for troubleshooting and updates.",
      },
      {
        title: "Client-Focused Approach",
        description: "We prioritize your business goals and requirements.",
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
      question: "How long does Kubio theme customization take?",
      answer:
        "The timeline depends on your customization needs. Basic changes take a few days, while advanced modifications may take longer.",
    },
    {
      question: "Can I use third-party plugins with the Kubio theme?",
      answer:
        "Yes, the Kubio theme is compatible with various third-party plugins for added functionality.",
    },
    {
      question: "Will my customized Kubio theme be mobile-friendly?",
      answer:
        "Absolutely! We ensure your website is fully responsive and performs well on all devices.",
    },
    {
      question: "Can I update the theme after customization?",
      answer:
        "Yes, we implement changes following WordPress best practices so that future updates won't affect your site.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we offer ongoing support and maintenance to keep your site running smoothly.",
    },
  ] as const,
} as const;
