import type {
  NeveBenefitIconName,
  NeveFeatureIconName,
  NeveServiceIconName,
} from "@/components/sections/neve-theme-customization/neve-icons";

export type NeveFeatureItem = {
  iconName: NeveFeatureIconName;
  title: string;
  description: string;
};

export type NeveServiceItem = {
  iconName: NeveServiceIconName;
  title: string;
  description: string;
};

export type NeveBenefitItem = {
  iconName: NeveBenefitIconName;
  title: string;
  description: string;
};

export const neveThemeCustomizationContent = {
  hero: {
    eyebrow: ["Wordpress Agency", "Theme Customization"] as const,
    title: "Neve Theme Customization Service",
    description:
      "Are you looking for a theme customization services provider that can fully customize a Neve theme that can match your brand’s identity? Our Neve theme customization service ensures you get a visually attractive, high-performance, and fully responsive WordPress website customized for your business requirements. With our WordPress expert developers, you get a lightweight, fast, and SEO-friendly WordPress theme that sweetens user experience and drives conversions.",
    ctaText: "Request a Quote",
    ctaHref: "/request-quote",
    ctaAriaLabel: "Request a Quote",
    image: {
      src: "/assets/neve-theme-customization/hero/neve-theme-customization-service-img.webp",
      alt: "Neve Theme Customization Service Image",
      width: 601,
      height: 474,
    },
  },
  brands: {
    title: "Trusted by \nLeading Brands",
    heading: "Trusted by \nLeading Brands",
    slug: "neve-theme-customization",
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
    heading: "Features of Neve Theme",
    description:
      "The Neve theme is known for its speed, flexibility, and trendy design. Here you can check out some of Neve theme’s main features:",
    items: [
      {
        iconName: "lightning",
        title: "Lightweight & Fast",
        description: "Built for speed, ensuring fast loading times.",
      },
      {
        iconName: "mobileOptimized",
        title: "Mobile-Optimized",
        description: "The theme is fully responsive and consistent with all devices.",
      },
      {
        iconName: "customizableHeaderFooter",
        title: "Customizable Header & Footer",
        description: "Easily modify the theme header and footer design without coding.",
      },
      {
        iconName: "woocommerce",
        title: "WooCommerce Ready",
        description: "Prebuilt and smooth integration with eCommerce stores.",
      },
      {
        iconName: "pageBuilder",
        title: "Page Builder Compatibility",
        description: "Theme works smoothly with famous page builders such as Elementor, Beaver Builder, and more.",
      },
      {
        iconName: "seo",
        title: "SEO-Friendly",
        description: "This theme is already built with clean code and proper structure to enhance search rankings.",
      },
    ] as const satisfies readonly NeveFeatureItem[],
  },
  services: {
    eyebrow: "Our Services",
    heading: "Our WordPress Theme Customization Services",
    description:
      "We offer a full range of WordPress theme customization services for your Neve theme; it contains:",
    items: [
      {
        iconName: "installation",
        title: "Theme Installation",
        description: "We properly setup and configure the Neve theme into your WordPress theme.",
      },
      {
        iconName: "design",
        title: "Custom Design and Branding",
        description: "We can help you get your unique designs, color schemes, and fonts tailored to your brand.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description: "While customizing your theme, we ensure smooth performance across all screen sizes.",
      },
      {
        iconName: "features",
        title: "Advanced Features Integration",
        description: "We can add custom functionalities and plugins based on your unique requirements.",
      },
      {
        iconName: "performance",
        title: "Performance Optimization",
        description: "Our WordPress experts can improve your website speed and SEO rankings by performance optimization.",
      },
      {
        iconName: "support",
        title: "Ongoing Support and Maintenance",
        description: "We offer ongoing support and maintenance after the project to ensure your website works smoothly.",
      },
    ] as const satisfies readonly NeveServiceItem[],
  },
  benefits: {
    eyebrow: "Benefits",
    heading: "Benefits of Neve Theme Customization",
    description:
      "Improving the Neve theme with custom changes offers you multiple advantages, such as:",
    items: [
      {
        iconName: "store",
        title: "Fully Customizable Store",
        description: "With Neve theme customization, you can change layouts, colors, and fonts to match your brand.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description: "You will get a fully responsive website that looks great on desktops, tablets, and mobiles.",
      },
      {
        iconName: "brand",
        title: "Unique Brand Identity",
        description: "With the help of theme customization you can get a unique online presence with custom designs.",
      },
      {
        iconName: "ux",
        title: "Improved User Experience",
        description: "You can improve user experience with an enhanced navigation menu and custom theme elements.",
      },
      {
        iconName: "plugins",
        title: "Multiple Third-Party Plugins",
        description: "Easily extend functionality with WordPress plugin and third-party plugin integrations.",
      },
      {
        iconName: "conversions",
        title: "Higher Conversion Rates",
        description: "A well-optimized website leads to better user engagement and boosts sales.",
      },
      {
        iconName: "payments",
        title: "Safe and Secure Payments",
        description: "We implement secure payment methods for checkout and transactions for stores.",
      },
      {
        iconName: "maintenance",
        title: "Minimal Maintenance Cost",
        description:
          "After our customization and optimization, your website works efficiently and needs minimum maintenance.",
      },
    ] as const satisfies readonly NeveBenefitItem[],
  },
  whyChoose: {
    eyebrow: "Why Dynamic Dreamz",
    heading: "Why Choose Dynamic Dreamz",
    description:
      "Our WordPress expert team specializes in **customizing themes to get high-quality, sales-optimized** WordPress websites. **Dynamic Dreamz has 100+ WordPress experts** to get started with your WordPress theme customization project. Here’s why clients trust us:",
    items: [
      {
        title: "Expert Team",
        description: "We have experienced WordPress developers skilled in WordPress themes and website customization.",
      },
      {
        title: "Proven Process",
        description: "We utilize a structured workflow that ensures high-quality results.",
      },
      {
        title: "Ongoing Support",
        description: "We offer post-development support to keep your website running smoothly without any errors.",
      },
      {
        title: "Client-Focused Approach",
        description: "We always prioritize our clients’ needs to provide personalized solutions.",
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
      question: "What is the cost of Neve theme customization?",
      answer:
        "The cost of the Neve theme customization depends on what type of changes you want, the complexity of the changes, and the expertise of the WordPress expert who will work on your project. If you want a proper cost estimation, you can contact us with your detailed requirements.",
    },
    {
      question: "What can be customized in the Neve theme?",
      answer:
        "You can modify designs, colors, fonts, and navigation, whatever you want to modify. Also, you can integrate custom functionalities and plugins or add new sections to match your business requirements.",
    },
    {
      question: "Is the Neve theme good for an eCommerce store?",
      answer:
        "Yes! Neve is WooCommerce-compatible, making it a wonderful choice for online stores. We customize it as per your need and optimize it for faster loading and better conversions.",
    },
    {
      question: "How long does Neve theme customization take?",
      answer:
        "There is no fixed time limit for the theme customization work. The time frame depends on the complexity of the changes you want; small changes take a few days, and bigger and complex changes take a few weeks.",
    },
    {
      question: "Will my website be SEO-friendly after customization?",
      answer:
        "Yes! We ensure during customization that nothing is missed and optimize the theme for speed, mobile responsiveness, and SEO best practices to enhance rankings.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we offer ongoing support and maintenance to ensure your website remains updated and serviceable.",
    },
  ] as const,
} as const;
