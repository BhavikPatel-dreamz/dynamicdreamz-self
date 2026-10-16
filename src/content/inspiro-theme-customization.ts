import type {
  InspiroBenefitIconName,
  InspiroFeatureIconName,
  InspiroServiceIconName,
} from "@/components/sections/inspiro-theme-customization/inspiro-icons";

export type InspiroFeatureItem = {
  iconName: InspiroFeatureIconName;
  title: string;
  description: string;
};

export type InspiroServiceItem = {
  iconName: InspiroServiceIconName;
  title: string;
  description: string;
};

export type InspiroBenefitItem = {
  iconName: InspiroBenefitIconName;
  title: string;
  description: string;
};

export type InspiroPortfolioItem = {
  name: string;
  category: string;
  href: string;
  image: string;
  imageAlt: string;
};

export type InspiroFaqItem = {
  question: string;
  answer: string;
};

export const inspiroThemeCustomizationContent = {
  hero: {
    eyebrow: ["Wordpress Agency", "Theme Customization"] as const,
    title: "Inspiro Theme Customization Service",
    description:
      "The Inspiro theme is a professional, lightweight, stylish WordPress theme created for photographers, videographers, and creative professionals. Its full-screen video backgrounds, gallery options, and stunning designs help users showcase their work effectively. Our Inspiro Theme Customization Services ensure that your WordPress website stands out with a unique design, smooth performance, and optimized user experience tailored to your business or personal brand.",
    ctaText: "request a quote",
    ctaHref: "/request-quote",
    ctaAriaLabel: "request a quote",
    image: {
      src: "/assets/inspiro-theme-customization/hero/inspiro-theme-customization-service-img.webp",
      alt: "Inspiro Theme Customization Service Image",
      width: 1202,
      height: 948,
    },
  },
  brands: {
    title: "Trusted by \nLeading Brands",
    heading: "Trusted by \nLeading Brands",
    slug: "inspiro-theme-customization",
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
    ] as const,
  },
  features: {
    eyebrow: "Features",
    heading: "Features of Inspiro Theme",
    description:
      "The Inspiro theme offers a range of features to enhance your website's functionality and visual appeal. Here are a few:",
    items: [
      {
        iconName: "full-screen-video-backgrounds",
        title: "Full-Screen Video Backgrounds",
        description: "Show high-quality video backgrounds to impress visitors.",
      },
      {
        iconName: "lightweight-and-fast-performance",
        title: "Lightweight & Fast Performance",
        description:
          "With a good theme structure and optimized code, ensure quick loading speed for a smooth experience.",
      },
      {
        iconName: "multiple-gallery-layouts",
        title: "Multiple Gallery Layouts",
        description: "Showcase your graphical work with various gallery and portfolio styles.",
      },
      {
        iconName: "gutenberg-and-elementor-compatibility",
        title: "Gutenberg & Elementor Compatibility",
        description:
          "Easily customize pages with drag-and-drop builders. This theme is compatible with all popular page builders.",
      },
      {
        iconName: "woocommerce-ready",
        title: "WooCommerce Ready",
        description: "It provides ready-made online stores and eCommerce functionality.",
      },
      {
        iconName: "mobile-and-seo-friendly",
        title: "Mobile & SEO Friendly",
        description:
          "With its responsive theme structure optimized for search engine ranking and mobile responsiveness.",
      },
      {
        iconName: "custom-widgets-and-sidebars",
        title: "Custom Widgets & Sidebars",
        description: "Enhance your website's design and functionality with pre-built custom elements.",
      },
      {
        iconName: "one-click-demo-import",
        title: "One-Click Demo Import",
        description: "Quickly set up a website with ready-made templates.",
      },
    ] as const,
  },
  services: {
    heading: "Our WordPress Theme \nCustomization Services",
    description:
      "We provide top-notch Inspiro theme customization services to help you build a visually appealing and high-performing website.",
    items: [
      {
        iconName: "theme-installation",
        title: "Theme Installation",
        description: "We help you install and set up the Inspiro theme on your website.",
      },
      {
        iconName: "custom-design-and-branding",
        title: "Custom Design and Branding",
        description: "We can modify colors, typography, and layout to fit your brand identity.",
      },
      {
        iconName: "responsive-design",
        title: "Responsive Design",
        description:
          "During theme customization, we ensure a flawless user experience across different screen sizes.",
      },
      {
        iconName: "advanced-features-integration",
        title: "Advanced Features Integration",
        description:
          "Our WordPress experts can add custom galleries, sliders, and eCommerce functionalities based on your requirements.",
      },
      {
        iconName: "performance-optimization",
        title: "Performance Optimization",
        description:
          "Our services enhance your website’s speed, security, and SEO for better website rankings.",
      },
      {
        iconName: "ongoing-support-and-maintenance",
        title: "Ongoing Support and Maintenance",
        description:
          "We offer regular updates and technical assistance for your website to run smoothly.",
      },
    ] as const,
  },
  benefits: {
    eyebrow: "Benefits",
    heading: "Benefits of Inspiro Theme Customization",
    description:
      "Customizing the Inspiro theme allows you to enhance your website’s design, performance, and user experience. Explore here:",
    items: [
      {
        iconName: "fully-customizable-store",
        title: "Fully Customizable Store",
        description:
          "You can customize your WordPress website to match your brand identity and business requirements.",
      },
      {
        iconName: "unique-brand-identity",
        title: "Unique Brand Identity",
        description:
          "The Inspiro theme customization provides you with a personalized design that reflects your brand.",
      },
      {
        iconName: "improved-user-experience",
        title: "Improved User Experience",
        description:
          "Optimize navigation, readability, design, and website engagement to improve user experience.",
      },
      {
        iconName: "multiple-third-party-plugins",
        title: "Multiple Third-party Plugins",
        description:
          "Utilize third-party plugins to add necessary tools and functionalities smoothly.",
      },
      {
        iconName: "higher-conversion-rates",
        title: "Higher Conversion Rates",
        description:
          "Enhance call-to-action elements for better sales and engagement.",
      },
      {
        iconName: "safe-and-secure-payments",
        title: "Safe and Secure Payments",
        description:
          "We ensure secure transaction processing for WooCommerce.",
      },
      {
        iconName: "minimal-maintenance-cost",
        title: "Minimal Maintenance Cost",
        description:
          "We optimize theme settings for long-term stability with low maintenance.",
      },
    ] as const,
  },
  whyChoose: {
    eyebrow: "Why Dynamic Dreamz",
    heading: "Why Choose Dynamic Dreamz",
    description:
      "At Dynamic Dreamz, we specialize in crafting unique, high-performance WordPress websites tailored to your needs.",
    items: [
      {
        number: "01",
        title: "Expert Team",
        description:
          "We have experienced developers with in-depth knowledge of WordPress theme customization.",
      },
      {
        number: "02",
        title: "Proven Process",
        description:
          "We follow a streamlined approach for quality assurance and timely delivery of your project.",
      },
      {
        number: "03",
        title: "Ongoing Support",
        description:
          "Continuous assistance to guarantee your website stays updated and secure.",
      },
      {
        number: "04",
        title: "Client-Focused Approach",
        description:
          "We offer personalized solutions that align with your business goals.",
      },
    ] as const,
  },
  portfolio: {
    eyebrow: "Portfolio",
    heading: "Snippets of WordPress Theme Customization Portfolio",
    description:
      "Explore our portfolio, which showcases successful WordPress theme customization projects and highlights how we customize, secure, and enhance stores for peak performance.",
    viewAllText: "View our work",
    viewAllHref: "/our-work",
    viewAllAriaLabel: "Dynamic Dreamz - View our work",
    items: [
      {
        name: "Quite Events",
        category: "WORDPRESS",
        href: "https://www.quietevents.com/",
        image: "/assets/our-work/projects/quite-events.webp",
        imageAlt: "Quite Events Image",
      },
      {
        name: "Les Etoiles",
        category: "WORDPRESS",
        href: "https://louer-lesetoiles.ca/",
        image: "/assets/our-work/projects/les-etoiles.webp",
        imageAlt: "Les Etoiles Image",
      },
      {
        name: "Valents",
        category: "WORDPRESS",
        href: "https://wearvalents.com/",
        image: "/assets/our-work/projects/valents.webp",
        imageAlt: "Valents Image",
      },
      {
        name: "Get Sunsights",
        category: "WORDPRESS",
        href: "https://www.getsunsights.com/",
        image: "/assets/our-work/projects/get-sunsights.webp",
        imageAlt: "Get Sunsights Image",
      },
      {
        name: "Lipari Design",
        category: "WORDPRESS",
        href: "https://liparidesign.ca/",
        image: "/assets/our-work/projects/lipari-design.webp",
        imageAlt: "Lipari Design Image",
      },
      {
        name: "Nexventur",
        category: "WORDPRESS",
        href: "https://www.nexventur.com/",
        image: "/assets/our-work/projects/nexventur.webp",
        imageAlt: "Nexventur Image",
      },
      {
        name: "Awaken Media",
        category: "WORDPRESS",
        href: "https://www.awaken.media/",
        image: "/assets/our-work/projects/awaken-media.webp",
        imageAlt: "Awaken Media Image",
      },
      {
        name: "Budget Maids",
        category: "WORDPRESS",
        href: "https://www.budget-maids.com/",
        image: "/assets/our-work/projects/budget-maids.webp",
        imageAlt: "Budget Maids Image",
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
      question: "What is the cost of your Inspiro theme customization?",
      answer:
        "There are no fixed charges for any theme customization. There are a lot of factors that affect the cost, such as the level of customization, the complexity of changes, and the expertise of developers and designers who will work on your project.",
    },
    {
      question: "Can I use the Inspiro theme for an eCommerce store?",
      answer:
        "Yes, Inspiro theme is WooCommerce-compatible, making it a great choice for online stores. If you want to sell your art and services, then you can easily do it with an Inspiro theme.",
    },
    {
      question: "How much customization can be done to the Inspiro theme?",
      answer:
        "You can customize colors, fonts, and layouts and even add advanced features like video backgrounds and custom galleries. You can add new sections, delete existing ones, or modify them as per your wish.",
    },
    {
      question: "Is the Inspiro theme good for SEO?",
      answer:
        "Yes, the theme is SEO-friendly, and we further optimize it to improve search engine rankings.",
    },
    {
      question: "How long does it take to customize the Inspiro theme?",
      answer:
        "The time depends on the level of customization needed. Simple customization tasks need just a few days, but complex and advanced tasks need a few weeks.",
    },
  ] as const,
} as const;
