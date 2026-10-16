import type {
  GoBenefitIconName,
  GoFeatureIconName,
  GoServiceIconName,
} from "@/components/sections/go-theme-customization/go-icons";

export type GoFeatureItem = {
  iconName: GoFeatureIconName;
  title: string;
  description: string;
};

export type GoServiceItem = {
  iconName: GoServiceIconName;
  title: string;
  description: string;
};

export type GoBenefitItem = {
  iconName: GoBenefitIconName;
  title: string;
  description: string;
};

export type GoPortfolioItem = {
  name: string;
  category: string;
  href: string;
  image: string;
  imageAlt: string;
};

export type GoFaqItem = {
  question: string;
  answer: string;
};

export const goThemeCustomizationContent = {
  hero: {
    eyebrow: ["Wordpress Agency", "Theme Customization"] as const,
    title: "Go Theme Customization Service",
    description:
      "Choose Go Theme Customization Service to enhance your website.The Go theme is a simple, lightweight, modern WordPress theme designed to work smoothly with the block editor. Go theme is an excellent option for a website that loads fast and looks clean. At Dynamic Dreamz, we customize the Go theme to match your brand, enhance performance, and make your website stand out with a professional touch.",
    ctaText: "request a quote",
    ctaHref: "/request-quote",
    ctaAriaLabel: "request a quote",
    image: {
      src: "/assets/go-theme-customization/hero/go-theme-customization-service-img.webp",
      alt: "Go Theme Customization Service Image",
      width: 1202,
      height: 948,
    },
  },
  brands: {
    title: "Trusted by \nLeading Brands",
    heading: "Trusted by \nLeading Brands",
    slug: "go-theme-customization",
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
        src: "/assets/clients/nekter-colored.svg",
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
    heading: "Features of Go Theme",
    description:
      "Go theme is user-friendly and flexible for blogs, business, and personal websites. Here are a few main features of the Go theme:",
    items: [
      {
        iconName: "block-editor-support",
        title: "Block Editor Support",
        description:
          "This theme is built to work perfectly with the WordPress block editor.",
      },
      {
        iconName: "minimal-and-clean-design",
        title: "Minimal and Clean Design",
        description:
          "With a clean and straightforward design, users can focus on content without distractions.",
      },
      {
        iconName: "custom-header-and-footer",
        title: "Custom Header and Footer",
        description:
          "Easily customize the header and footer to match your branding.",
      },
      {
        iconName: "typography-control",
        title: "Typography Control",
        description:
          "You can change and choose fonts and sizes that improve readability.",
      },
      {
        iconName: "color-and-style-options",
        title: "Color and Style Options",
        description:
          "You can customize backgrounds, buttons, and more to match your brand.",
      },
      {
        iconName: "fast-loading-time",
        title: "Fast Loading Time",
        description:
          "It has the best minimal theme structure optimized for quick page speed.",
      },
      {
        iconName: "woocommerce-compatible",
        title: "WooCommerce Compatible",
        description:
          "Go theme has ready-made WooCommerce facilities for online stores.",
      },
      {
        iconName: "responsive-layout",
        title: "Responsive Layout",
        description:
          "Responsive theme layouts adapt smoothly to all screen sizes.",
      },
    ] as const,
  },
  services: {
    eyebrow: "Our Services",
    heading: "Our WordPress Theme \nCustomization Services",
    description:
      "We provide complete customization services for the Go theme to help you build a professional and efficient WordPress website.",
    items: [
      {
        iconName: "theme-installation",
        title: "Theme Installation",
        description:
          "We can help you install and configure the theme to work smoothly.",
      },
      {
        iconName: "custom-design-and-branding",
        title: "Custom Design and Branding",
        description:
          "With our theme customization service, customize logos, colors, fonts, and layouts and get your custom design and branding.",
      },
      {
        iconName: "responsive-design",
        title: "Responsive Design",
        description:
          "We make sure your website stays mobile and tablet-friendly during our customization.",
      },
      {
        iconName: "advanced-features-integration",
        title: "Advanced Features Integration",
        description:
          "We can help you add sliders, contact forms, galleries, or other custom tools.",
      },
      {
        iconName: "performance-optimization",
        title: "Performance Optimization",
        description:
          "We remove unnecessary code, script, image, and other assets to speed up your website and enhance performance.",
      },
      {
        iconName: "ongoing-support-and-maintenance",
        title: "Ongoing Support and Maintenance",
        description:
          "We provide continuous support and maintenance to keep your website running.",
      },
    ] as const,
  },
  benefits: {
    eyebrow: "Benefits",
    heading: "Benefits of Go Theme Customization",
    description:
      "Customizing the Go theme lets your website do more and look better. It can unlock lots of benefits for you. Here are a few of them:",
    items: [
      {
        iconName: "fully-customizable-store",
        title: "Fully Customizable Store",
        description:
          "You can customize whatever you want, such as the design, layout, and product pages to fit your style.",
      },
      {
        iconName: "unique-brand-identity",
        title: "Unique Brand Identity",
        description:
          "You can personalize your website to match your brand colors and style.",
      },
      {
        iconName: "improved-user-experience",
        title: "Improved User Experience",
        description:
          "You can improve your user experience with clean navigation, simple design, and layout.",
      },
      {
        iconName: "multiple-third-party-plugins",
        title: "Multiple Third-party Plugins",
        description:
          "You can add third-party tools like SEO, forms, or galleries per your website needs.",
      },
      {
        iconName: "higher-conversion-rates",
        title: "Higher Conversion Rates",
        description:
          "Well-designed and innovative website looks can encourage clicks and actions.",
      },
      {
        iconName: "mobile-optimization",
        title: "Mobile Optimization",
        description:
          "We deliver a fast, smooth user experience in this mobile-centric world.",
      },
      {
        iconName: "safe-and-secure-payments",
        title: "Safe and Secure Payments",
        description:
          "Integrate secure WooCommerce payment gateways to protect your customer's transactions.",
      },
      {
        iconName: "minimal-maintenance-cost",
        title: "Minimal Maintenance Cost",
        description:
          "Once customized, it needs very low maintenance.",
      },
    ] as const,
  },
  whyChoose: {
    eyebrow: "Why Dynamic Dreamz",
    heading: "Why Choose Dynamic Dreamz",
    description:
      "We’re dedicated to helping businesses and individuals get the most from their WordPress themes.",
    items: [
      {
        title: "Expert Team",
        description:
          "We have skilled WordPress developers and designers with years of experience in theme customization.",
      },
      {
        title: "Proven Process",
        description:
          "We follow a step-by-step workflow that ensures quality and on-time delivery.",
      },
      {
        title: "Ongoing Support",
        description:
          "We’ll help you keep your store working correctly after the project ends.",
      },
      {
        title: "Client-Focused Approach",
        description:
          "We listen to your needs and turn your ideas into reality.",
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
  faqs: [
    {
      question: "What is the cost of the Go theme customization services?",
      answer:
        "There is no fixed cost for Go theme customization or any other theme customization. It depends on the level of customization you want, the complexity of customization, and the experience and expertise of the WordPress expert who works on your project. Contact us with your detailed customization requirements if you want an exact price.",
    },
    {
      question: "Can the Go theme be customized for an online shop?",
      answer:
        "Yes, of course. We can integrate WooCommerce and customize the product page, cart page, and checkout page to give your store a polished look.",
    },
    {
      question: "Will theme customization slow down my website?",
      answer:
        "No, not a chance. We follow best practices to ensure your WordPress website stays fast, even after customization.",
    },
    {
      question: "Can I request a specific homepage layout in the Go theme?",
      answer:
        "Absolutely! We can build a custom homepage layout that perfectly fits your content and branding. We can change every page to meet your needs.",
    },
    {
      question: "Is the Go theme suitable for bloggers and portfolio sites?",
      answer:
        "Yes, the Go theme is highly versatile. We can customize the theme for personal blogs, portfolios, or business websites with unique layouts. And if you want to add or remove anything, we can do it too.",
    },
    {
      question: "Can you make the header and footer different from the default design?",
      answer:
        "Of course! We can fully customize the header and footer with new menus, contact info, social icons, and more. We can also redesign the whole header and footer design.",
    },
    {
      question: "Is it possible to include popups or announcement bars?",
      answer:
        "We can integrate and customize plugins for popups, banners, and promotional notices as needed. We can also add custom code to meet your needs.",
    },
    {
      question: "How do I keep my customized Go theme updated?",
      answer:
        "We use a child theme, which keeps your changes safe even when the main Go theme updates.",
    },
  ] as const,
} as const;
