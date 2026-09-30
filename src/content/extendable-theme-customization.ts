import type {
  ExtendableBenefitIconName,
  ExtendableFeatureIconName,
  ExtendableServiceIconName,
} from "@/components/sections/extendable-theme-customization/extendable-icons";

export type ExtendableFeatureItem = {
  iconName: ExtendableFeatureIconName;
  title: string;
  description: string;
};

export type ExtendableServiceItem = {
  iconName: ExtendableServiceIconName;
  title: string;
  description: string;
};

export type ExtendableBenefitItem = {
  iconName: ExtendableBenefitIconName;
  title: string;
  description: string;
};

export const extendableThemeCustomizationContent = {
  hero: {
    eyebrow: ["Wordpress Agency", "Theme Customization"] as const,
    title: "Extendable Theme Customization Service",
    description:
      "The Extendable theme is a highly flexible and trendy WordPress theme, perfect for business websites, blogging websites, and eCommerce stores. With its light design and advanced customization options, you can build a unique WordPress website that aligns with your brand identity. Our Extendable theme customization services help you customize the theme to meet your specific business requirements, ensuring a professional and smooth user experience.",
    ctaText: "Request a Quote",
    ctaHref: "/request-quote",
    ctaAriaLabel: "Request a Quote",
    image: {
      src: "/assets/extendable-theme-customization/hero/extendable-theme-customization-service-img.webp",
      alt: "extendable-theme",
      width: 1202,
      height: 948,
    },
  },
  brands: {
    title: "Trusted by \nLeading Brands",
    heading: "Trusted by \nLeading Brands",
    slug: "extendable-theme-customization",
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
    heading: "Features of Extendable Theme",
    description:
      "The Extendable theme offers a range of features to help you build a fully customized website.",
    items: [
      {
        iconName: "lightning",
        title: "Lightweight and Fast",
        description:
          "This optimized theme is speedy and lightweight, delivering performance and ensuring a smooth user experience.",
      },
      {
        iconName: "dragAndDrop",
        title: "Drag-and-Drop Builder",
        description:
          "This theme comes with a drag-and-drop builder to easily customize layouts without coding knowledge.",
      },
      {
        iconName: "woocommerce",
        title: "WooCommerce Integration",
        description:
          "Smoothly set up an online store with pre-built and complete eCommerce support.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description:
          "The Extendable theme ensures your website runs flawlessly across all devices.",
      },
      {
        iconName: "seo",
        title: "SEO-Optimized",
        description:
          "Built with SEO-friendly coding and theme structure for better search rankings.",
      },
      {
        iconName: "headerFooterStyles",
        title: "Multiple Header & Footer Styles",
        description:
          "You can choose from various layout options for header & footer styles to match your branding.",
      },
      {
        iconName: "colorTypography",
        title: "Customizable Color & Typography",
        description:
          "Easily modify fonts and colors to suit your brand with an in-built customizer.",
      },
    ] as const satisfies readonly ExtendableFeatureItem[],
  },
  services: {
    eyebrow: "Our Services",
    heading: "Our Extendable Theme \nCustomization Services",
    description:
      "We offer complete customization services to ensure your Extendable theme meets your exact requirements. <br>Here is a list of our Extendable theme customization services:",
    items: [
      {
        iconName: "installation",
        title: "Theme Installation",
        description:
          "We install and set up the Extendable theme on your WordPress website.",
      },
      {
        iconName: "design",
        title: "Custom Design and Branding",
        description:
          "You can change colors, fonts, and layouts to match your brand identity.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description:
          "We can optimize the website for smooth performance across all devices.",
      },
      {
        iconName: "features",
        title: "Advanced Features Integration",
        description:
          "Our WordPress expert can help you add custom elements like sliders, forms, and animations.",
      },
      {
        iconName: "performance",
        title: "Performance Optimization",
        description:
          "Our services improve your website speed and SEO rankings for better visibility.",
      },
      {
        iconName: "support",
        title: "Ongoing Support and Maintenance",
        description: "We offer ongoing updates and troubleshooting assistance.",
      },
    ] as const satisfies readonly ExtendableServiceItem[],
  },
  benefits: {
    eyebrow: "Benefits",
    heading: "Benefits of Extendable \nTheme Customization",
    description:
      "Personalizing your Extendable theme ensures your website stands out and functions optimally.",
    items: [
      {
        iconName: "store",
        title: "Fully Customizable Store",
        description:
          "You can fully customize your store to reflect your brand and attract customers.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description:
          "We make this theme fully responsive so that the website will adapt perfectly to desktops, tablets, and mobile devices.",
      },
      {
        iconName: "brand",
        title: "Unique Brand Identity",
        description:
          "You can have a unique brand identity that stands out with a website that represents your business vision.",
      },
      {
        iconName: "ux",
        title: "Improved User Experience",
        description:
          "We enhance the navigation menu, good readability, and amazing design for better user engagement.",
      },
      {
        iconName: "plugins",
        title: "Multiple Third-party Plugins",
        description:
          "We integrate powerful plugins and advanced features to expand your website's functionality.",
      },
      {
        iconName: "conversions",
        title: "Higher Conversion Rates",
        description:
          "You get a well-optimized website that encourages visitors to take action.",
      },
      {
        iconName: "mobile",
        title: "Mobile Optimization",
        description:
          "We optimize your website to look great and run smoothly on all mobile devices.",
      },
      {
        iconName: "payments",
        title: "Safe and Secure Payments",
        description:
          "We add secure payment gateways that provide a smooth checkout experience.",
      },
      {
        iconName: "maintenance",
        title: "Minimal Maintenance Cost",
        description: "After the optimizations, you can get lower maintenance costs.",
      },
    ] as const satisfies readonly ExtendableBenefitItem[],
  },
  whyChoose: {
    eyebrow: "Why Dynamic Dreamz",
    heading: "Why Choose Dynamic Dreamz",
    description:
      "At Dynamic Dreamz, we specialize in WordPress theme customization and web development,<br />ensuring your website is both visually appealing and functional.",
    items: [
      {
        title: "Expert Team",
        description:
          "We have experienced developers who customize solutions to fit your business needs.",
      },
      {
        title: "Proven Process",
        description:
          "We follow industry best practices to deliver high-quality customization work.",
      },
      {
        title: "Ongoing Support",
        description:
          "We provide post-launch support and maintenance for a hassle-free experience.",
      },
      {
        title: "Client-Focused Approach",
        description:
          "We always give priority to our customer's business requirements.",
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
      question: "What is the cost of the Extendable theme customization?",
      answer:
        "There is no fixed cost for theme customization services. The cost depends on the customization you want, and expertise and experienced WordPress experts will work on your project.",
    },
    {
      question: "How long does it take to customize the Extendable theme?",
      answer:
        "The level of customization that is needed defines the timeline. Basic changes take a few days, while advanced customizations may take longer.",
    },
    {
      question: "Can you integrate third-party plugins with the Extendable theme?",
      answer:
        "Yes, we can integrate various plugins to enhance your WordPress website's functionality, including SEO tools, eCommerce solutions, and contact forms.",
    },
    {
      question: "Will my customized theme be mobile-friendly?",
      answer:
        "Absolutely! We ensure that your customized Extendable theme is fully responsive across all devices.",
    },
    {
      question: "Can I update the theme after customization?",
      answer:
        "Yes, we ensure that all customizations are done following WordPress best practices so future updates won't affect your website.",
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer:
        "Yes, we provide ongoing support, updates, and troubleshooting to keep your website running smoothly.",
    },
  ] as const,
} as const;
