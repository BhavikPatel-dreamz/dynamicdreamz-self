import type {
  BlocksyBenefitIconName,
  BlocksyFeatureIconName,
  BlocksyServiceIconName,
} from "@/components/sections/blocksy-theme-customization/blocksy-icons";

export type BlocksyFeatureItem = {
  iconName: BlocksyFeatureIconName;
  title: string;
  description: string;
};

export type BlocksyServiceItem = {
  iconName: BlocksyServiceIconName;
  title: string;
  description: string;
};

export type BlocksyBenefitItem = {
  iconName: BlocksyBenefitIconName;
  title: string;
  description: string;
};

export const blocksyThemeCustomizationContent = {
  hero: {
    eyebrow: ["Wordpress Agency", "Theme Customization"] as const,
    title: "Blocksy Theme Customization Service",
    description:
      "The Blocksy theme is a stylish, lightweight, and highly customizable WordPress theme developed for speed and flexibility. Whether you want a blogging website, an eCommerce store, or a business website, you can customize a Blocksy theme that helps you achieve a unique and professional look. At Dynamic Dreamz, we offer Blocksy theme customization services to tailor your website to your exact business requirements, ensuring an optimized, responsive, and feature-rich online presence.",
    ctaText: "Request a Quote",
    ctaHref: "/request-quote",
    ctaAriaLabel: "Request a Quote",
    image: {
      src: "/assets/blocksy-theme-customization/hero/blocksy-theme-customization-service-img.webp",
      alt: "Blocksy Theme Customization Service Image",
      width: 601,
      height: 474,
    },
  },
  brands: {
    title: "Trusted by \nLeading Brands",
    heading: "Trusted by \nLeading Brands",
    slug: "blocksy-theme-customization",
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
    heading: "Features of Blocksy Theme",
    description:
      "Blocksy theme is loaded with powerful features that make your website smooth and efficient. Here are a few",
    items: [
      {
        iconName: "lightning",
        title: "Lightning-Fast Performance",
        description: "Blocksy theme is built with optimized code, which provides fast loading speed.",
      },
      {
        iconName: "customizable",
        title: "Highly Customizable",
        description: "It provides a flexible customization panel to modify colors, font styles, and layouts.",
      },
      {
        iconName: "pageBuilder",
        title: "Gutenberg & Page Builder Compatibility",
        description: "This theme can work smoothly with Gutenberg, Elementor, and other page builders.",
      },
      {
        iconName: "woocommerce",
        title: "WooCommerce Ready",
        description: "It contains built-in support for creating an online store.",
      },
      {
        iconName: "headerFooterBuilder",
        title: "Header & Footer Builder",
        description: "Use drag-and-drop functionality to customize your website’s header and footer design.",
      },
      {
        iconName: "globalColorPalette",
        title: "Global Color Palette",
        description: "It allows straightforward color scheme management across your website.",
      },
      {
        iconName: "seo",
        title: "SEO Optimized",
        description: "Blocksy is designed with SEO best practices to help you improve your website’s search rankings.",
      },
      {
        iconName: "mobileFriendly",
        title: "Mobile-Friendly Design",
        description: "You can get a fully responsive website that runs properly on all devices.",
      },
    ] as const satisfies readonly BlocksyFeatureItem[],
  },
  services: {
    eyebrow: "Our Services",
    heading: "Our WordPress Theme Customization Services",
    description:
      "At <b>Dynamic Dreamz</b>, we offer you professional WordPress theme customization services to improve your Blocksy-powered website:",
    items: [
      {
        iconName: "installation",
        title: "Theme Installation",
        description: "We help you set up the Blocksy theme and configure it to meet your requirements.",
      },
      {
        iconName: "design",
        title: "Custom Design and Branding",
        description: "Modify colors, fonts, and layouts to get custom design and branding for your website.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description: "We can ensure your website looks great and performs well on all devices.",
      },
      {
        iconName: "features",
        title: "Advanced Features Integration",
        description: "To fulfill your custom and unique business needs, we add custom functionalities, animations, and dynamic content.",
      },
      {
        iconName: "performance",
        title: "Performance Optimization",
        description: "We help you improve website speed, SEO, and overall performance.",
      },
      {
        iconName: "support",
        title: "Ongoing Support and Maintenance",
        description: "We provide continuous support and updates to maintain your website working.",
      },
    ] as const satisfies readonly BlocksyServiceItem[],
  },
  benefits: {
    eyebrow: "Benefits",
    heading: "Benefits of Blocksy Theme Customization",
    description:
      "Customizing the Blocksy theme provides several advantages to enhance the look and functionality of your WordPress website:",
    items: [
      {
        iconName: "store",
        title: "Fully Customizable Store",
        description: "You can modify layouts, fonts, and styles to match your brand identity.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description: "With our theme customization service, you can ensure a smooth and responsive experience across all screen sizes.",
      },
      {
        iconName: "brand",
        title: "Unique Brand Identity",
        description: "Our customization services help you create a unique graphical appeal that stands out from competitors.",
      },
      {
        iconName: "ux",
        title: "Improved User Experience",
        description: "Improve user experience with enhanced navigation and simple design.",
      },
      {
        iconName: "plugins",
        title: "Multiple Third-party Plugins",
        description: "You can extend your store functionality with various integrations of third-party plugins.",
      },
      {
        iconName: "conversions",
        title: "Higher Conversion Rates",
        description: "Well-optimized layouts can help enhance user attention and boost conversions.",
      },
      {
        iconName: "mobile",
        title: "Mobile Optimization",
        description: "After our customization, you can ensure a smooth browsing experience on all smartphones and tablets.",
      },
      {
        iconName: "payments",
        title: "Safe and Secure Payments",
        description: "We add secure payment gateways to integrate safe and secure payments for eCommerce websites.",
      },
      {
        iconName: "maintenance",
        title: "Minimal Maintenance Cost",
        description: "With our theme customization service, you can get a website with minimal maintenance, which reduces the need for frequent updates and fixes.",
      },
    ] as const satisfies readonly BlocksyBenefitItem[],
  },
  whyChoose: {
    eyebrow: "Why Dynamic Dreamz",
    heading: "Why Choose Dynamic Dreamz",
    description:
      "When you work with<strong> Dynamic Dreamz</strong> to customize your Blocksy theme, you can be sure of receiving top-notch services supported by industry knowledge:",
    items: [
      {
        title: "Expert Team",
        description: "Our skilled WordPress developers with extensive Blocksy theme customization experience can improve your website.",
      },
      {
        title: "Proven Process",
        description: "We follow a structured workflow to ensure smooth customization and deployment of your project.",
      },
      {
        title: "Ongoing Support",
        description: "Our continuous support services help you keep your website updated and running smoothly.",
      },
      {
        title: "Client-Focused Approach",
        description: "We offer personalized services tailored to your business requirements.",
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
      question: "How much do you charge for my Blocksy theme customization project?",
      answer:
        "Basically, there is not a fixed amount you can estimate for any theme customization service. The cost fully depends on the scope of your customization, its complexity, and the expertise and experience of the WordPress developer and designer working on it. <strong>Contact us</strong> with your project requirements to get your detailed quote.",
    },
    {
      question: "What is included in Blocksy theme customization services?",
      answer:
        "Our customization services contain <strong>branding, theme installation, layout adjustments, integration of advanced features, and performance optimization</strong> to ensure a unique and functional website.",
    },
    {
      question: "Can you make my Blocksy theme completely unique?",
      answer:
        "Yes! We change <strong>colors, typography, layouts, and other design elements</strong> to match your brand identity and business requirements, making your website stand out in the competitive market.",
    },
    {
      question: "Will my customized Blocksy theme be mobile-friendly?",
      answer:
        "Absolutely! Blocksy theme is already a mobile-friendly theme; during theme customization, we ensure that your website remains fully responsive and optimized for smooth browsing on all devices.",
    },
    {
      question: "How long does it take to customize the Blocksy theme?",
      answer:
        "The timeframe depends on the complexity of the customization. Simple modifications can be finished in a few days, while complex and big customizations may take a couple of weeks.",
    },
    {
      question: "Do you provide ongoing support after customization?",
      answer:
        "Yes, we offer ongoing maintenance and support services to keep your WordPress website updated, secure, and operating smoothly. After a few revisions, we can <strong>start a new contract at an hourly rate or fixed price rate.</strong>",
    },
    {
      question: "Can I integrate third-party plugins with my customized Blocksy theme?",
      answer:
        "Yes! Blocksy theme is compatible with different third-party plugins, and we can help you integrate them to extend your website's functionality and usability.",
    },
  ] as const,
} as const;
