import { industryBrandLogos } from "@/content/industries";
import type {
  HelloElementorBenefitIconName,
  HelloElementorFeatureIconName,
  HelloElementorServiceIconName,
} from "@/components/sections/hello-elementor-theme-customization/hello-elementor-icons";

export type HelloElementorFeatureItem = {
  iconName: HelloElementorFeatureIconName;
  title: string;
  description: string;
};

export type HelloElementorServiceItem = {
  iconName: HelloElementorServiceIconName;
  title: string;
  description: string;
};

export type HelloElementorBenefitItem = {
  iconName: HelloElementorBenefitIconName;
  title: string;
  description: string;
};

export const helloElementorThemeCustomizationContent = {
  hero: {
    eyebrow: ["Wordpress Agency", "Theme Customization"] as const,
    title: "Hello Elementor Theme Customization Service",
    description:
      "Are you looking to customize your Hello Elementor theme for a unique and engaging website? Our professional Hello Elementor Theme Customization Service helps you customize your WordPress theme to match your brand identity while ensuring a smooth user experience. Whether you need design modifications, performance enhancements, or advanced integrations, we deliver a fully optimized website that stands out.",
    ctaText: "request a quote",
    ctaHref: "/request-quote",
    ctaAriaLabel: "request a quote",
    image: {
      src: "/assets/hello-elementor-theme-customization/hero/hello-elementor-theme-customization-service-img.webp",
      alt: "Hello Elementor Theme Customization Service Image",
      width: 601,
      height: 474,
    },
  },
  brands: {
    title: "Trusted by \nLeading Brands",
    heading: "Trusted by \nLeading Brands",
    slug: "hello-elementor-theme-customization",
    items: industryBrandLogos,
  },
  features: {
    eyebrow: "Features",
    heading: "Features of Hello Elementor Theme",
    description:
      "The Hello Elementor theme is a lightweight, fast-loading WordPress theme designed to work smoothly with the Elementor page builder. Its minimalistic design allows for extensive customization and faster loading times, making it perfect for businesses.",
    items: [
      {
        iconName: "lightning",
        title: "Lightning Fast",
        description:
          "The theme is built for speed, ensuring fast page loading times and improved performance.",
      },
      {
        iconName: "seo",
        title: "SEO-Friendly",
        description: "Optimized for search engines to boost website rankings.",
      },
      {
        iconName: "responsive",
        title: "Fully Responsive",
        description:
          "Works perfectly on all devices, including mobile, tablets, and desktops.",
      },
      {
        iconName: "templates",
        title: "Lightweight Structure",
        description:
          "A clean and minimalistic codebase that ensures better performance.",
      },
      {
        iconName: "builder",
        title: "Easy Customization",
        description:
          "Fully compatible with Elementor, allowing for drag-and-drop customization.",
      },
      {
        iconName: "woocommerce",
        title: "WooCommerce Compatible",
        description:
          "Perfect for creating online WooCommerce stores with smooth eCommerce integration.",
      },
    ] as const satisfies readonly HelloElementorFeatureItem[],
  },
  services: {
    eyebrow: "Our Services",
    heading: "Our Hello Elementor Theme Customization Services",
    description:
      "Our expert WordPress developers offer a full range of Hello Elementor theme customization services to improve your WordPress website's design and functionality.",
    items: [
      {
        iconName: "installation",
        title: "Theme Installation",
        description:
          "We set up and installed the Hello Elementor theme, ensuring proper configuration.",
      },
      {
        iconName: "design",
        title: "Custom Design and Branding",
        description:
          "Our team builds a design that aligns with your brand's identity for a professional look.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description:
          "We optimize your website to look perfect on all devices and screen sizes.",
      },
      {
        iconName: "features",
        title: "Advanced Features Integration",
        description:
          "Add custom features, animations, and functionalities to enhance user experience.",
      },
      {
        iconName: "performance",
        title: "Performance Optimization",
        description:
          "We optimize loading speed and performance for a smooth browsing experience.",
      },
      {
        iconName: "support",
        title: "Ongoing Support and Maintenance",
        description:
          "Get continued support with updates, security, and troubleshooting.",
      },
    ] as const satisfies readonly HelloElementorServiceItem[],
  },
  benefits: {
    eyebrow: "Benefits",
    heading: "Benefits of Hello Elementor Theme Customization",
    description:
      "Customizing the Hello Elementor theme offers a range of advantages. Here, you can know some significant benefits:",
    items: [
      {
        iconName: "store",
        title: "Fully Customizable Store",
        description:
          "Modify every aspect of your store to match your brand's look and feel.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description:
          "Ensures your website adapts perfectly to all screen sizes and devices.",
      },
      {
        iconName: "brand",
        title: "Unique Brand Identity",
        description:
          "Stand out from competitors with a visually distinctive website.",
      },
      {
        iconName: "ux",
        title: "Improved User Experience",
        description:
          "Enhance visitor navigation and usability, increasing engagement and conversions.",
      },
      {
        iconName: "plugins",
        title: "Multiple Third-party Plugins",
        description:
          "Seamlessly integrate essential plugins to expand functionality.",
      },
      {
        iconName: "conversions",
        title: "Higher Conversion Rates",
        description:
          "Optimize your site for better lead generation and increased sales.",
      },
      {
        iconName: "mobile",
        title: "Mobile Optimization",
        description:
          "Ensure a flawless mobile experience with a responsive and fast-loading design.",
      },
      {
        iconName: "payments",
        title: "Safe and Secure Payments",
        description:
          "Integrate secure payment gateways to protect user transactions.",
      },
      {
        iconName: "maintenance",
        title: "Minimal Maintenance Cost",
        description:
          "A well-optimized WordPress website reduces the need for frequent maintenance.",
      },
    ] as const satisfies readonly HelloElementorBenefitItem[],
  },
  whyChoose: {
    eyebrow: "Why Dynamic Dreamz",
    heading: "Why Choose Dynamic Dreamz",
    description:
      "Choosing the right customization partner is essential for your business. Dynamic Dreamz is the best choice for Hello Elementor theme customization.",
    items: [
      {
        title: "Expert Team",
        description:
          "Our skilled WordPress developers have vast experience in WordPress and Elementor customization.",
      },
      {
        title: "Proven Process",
        description:
          "We follow a strategic approach to deliver high-quality and efficient results.",
      },
      {
        title: "Ongoing Support",
        description:
          "We provide long-term maintenance and support for any post-launch updates.",
      },
      {
        title: "Client-Focused Approach",
        description:
          "We prioritize your business requirements and create customized solutions for your brand.",
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
      question: "Can I customize the Hello Elementor theme without coding knowledge?",
      answer:
        "Yes! The theme works with Elementor's drag-and-drop builder, making customization easy for beginners. You can easily customize your theme section without needing coding knowledge.",
    },
    {
      question: "Is the Hello Elementor theme suitable for an eCommerce store?",
      answer:
        "Absolutely! It is fully compatible with WooCommerce, allowing you to create and manage an online store effortlessly. It offers pre-built pages for cart, checkout, shop, and product.",
    },
    {
      question: "Will my website remain fast after customization?",
      answer:
        "Our theme customization process ensures your website is performance-optimized and maintains fast loading times. We never let your theme down with our services.",
    },
    {
      question: "Can I integrate third-party WordPress plugins with Hello Elementor?",
      answer:
        "Yes! The Hello Elementor theme supports various WordPress plugins, including SEO tools, security add-ons, and eCommerce extensions.",
    },
    {
      question: "Do you provide post-customization support?",
      answer:
        "Yes, we offer ongoing support and maintenance services to keep your website updated and running smoothly. After a few revisions, we work on a fixed-price or hourly-based rate contract.",
    },
  ] as const,
} as const;
