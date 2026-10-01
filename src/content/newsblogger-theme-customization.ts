import type {
  NewsbloggerBenefitIconName,
  NewsbloggerFeatureIconName,
  NewsbloggerServiceIconName,
} from "@/components/sections/newsblogger-theme-customization/newsblogger-icons";

export type NewsbloggerFeatureItem = {
  iconName: NewsbloggerFeatureIconName;
  title: string;
  description: string;
};

export type NewsbloggerServiceItem = {
  iconName: NewsbloggerServiceIconName;
  title: string;
  description: string;
};

export type NewsbloggerBenefitItem = {
  iconName: NewsbloggerBenefitIconName;
  title: string;
  description: string;
};

export type NewsbloggerPortfolioItem = {
  name: string;
  category: string;
  href: string;
  image: string;
  imageAlt: string;
};

export type NewsbloggerFaqItem = {
  question: string;
  answer: string;
};

export const newsbloggerThemeCustomizationContent = {
  hero: {
    eyebrow: ["Wordpress Agency", "Theme Customization"] as const,
    title: "NewsBlogger Theme Customization Service",
    description:
      "The NewsBlogger theme is ideal for online magazines, bloggers, and news websites. It offers an easy navigation menu, a clean layout, and support for multiple post formats. At Dynamic Dreamz, we provide NewsBlogger theme customization services to help you design a WordPress website that matches your brand, keeps readers engaged, and works perfectly across all devices.",
    ctaText: "request a quote",
    ctaHref: "/request-quote",
    ctaAriaLabel: "request a quote",
    image: {
      src: "/assets/newsblogger-theme-customization/hero/newsblogger-theme-customization-service-img.webp",
      alt: "NewsBlogger Theme Customization Service Image",
      width: 1202,
      height: 948,
    },
  },
  brands: {
    title: "Trusted by \nLeading Brands",
    heading: "Trusted by \nLeading Brands",
    slug: "newsblogger-theme-customization",
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
    heading: "Features of NewsBlogger Theme",
    description:
      "NewsBlogger theme is packed with essential features for bloggers and publishers.",
    items: [
      {
        iconName: "clean-and-modern-design",
        title: "Clean and Modern Design",
        description: "It offers a clean, distraction-free reading experience.",
      },
      {
        iconName: "multiple-layout-options",
        title: "Multiple Layout Options",
        description: "You have a choice of different post and homepage styles.",
      },
      {
        iconName: "sidebar-and-widget-support",
        title: "Sidebar and Widget Support",
        description: "You can add custom sidebars with popular widgets.",
      },
      {
        iconName: "featured-posts-section",
        title: "Featured Posts Section",
        description: "Highlight your trending or latest blog easily.",
      },
      {
        iconName: "custom-header-and-footer",
        title: "Custom Header and Footer",
        description:
          "You can easily customize the header and footer to add unique branding elements.",
      },
      {
        iconName: "fast-loading",
        title: "Fast Loading",
        description:
          "With a good theme structure, this theme is optimized for speed and smooth browsing.",
      },
      {
        iconName: "gutenberg-ready",
        title: "Gutenberg Ready",
        description: "This theme is compatible with the popular WordPress block editor.",
      },
      {
        iconName: "translation-ready",
        title: "Translation Ready",
        description: "You can attract global audiences with support in multiple languages.",
      },
    ] as const,
  },
  services: {
    eyebrow: "Services",
    heading: "Our WordPress Theme <br> Customization Services",
    description:
      "We provide tailored NewsBlogger theme customization services to suit your unique blogging or news publishing goals. Our services:",
    items: [
      {
        iconName: "theme-installation",
        title: "Theme Installation",
        description: "We install and activate NewsBlogger properly to a quick start.",
      },
      {
        iconName: "custom-design-and-branding",
        title: "Custom Design and Branding",
        description:
          "We can help you personalize colors, logos, and typography to create custom design and branding.",
      },
      {
        iconName: "responsive-design",
        title: "Responsive Design",
        description:
          "During theme customization, we make your website mobile-friendly and fast.",
      },
      {
        iconName: "advanced-features-integration",
        title: "Advanced Features Integration",
        description:
          "We can add sliders, newsletter signups, or social media tools as per your requirements.",
      },
      {
        iconName: "performance-optimization",
        title: "Performance Optimization",
        description:
          "Improve loading speed and SEO performance to boost your conversion and get more sales.",
      },
      {
        iconName: "ongoing-support-and-maintenance",
        title: "Ongoing Support and Maintenance",
        description:
          "We can provide ongoing support and maintenance to keep your website running.",
      },
    ] as const,
  },
  benefits: {
    eyebrow: "Benefits",
    heading: "Benefits of NewsBlogger <br> Theme Customization",
    description:
      "Customizing the NewsBlogger theme brings so many benefits; it makes your blog or news website more engaging and efficient.",
    items: [
      {
        iconName: "fully-customizable-store",
        title: "Fully Customizable Store",
        description: "You can modify colors, layouts, and elements to match your style.",
      },
      {
        iconName: "unique-brand-identity",
        title: "Unique Brand Identity",
        description:
          "With our custom design, you can create a unique brand identity and make your blog memorable.",
      },
      {
        iconName: "improved-user-experience",
        title: "Improved User Experience",
        description:
          "Simple navigation and boosted readability can improve user experience.",
      },
      {
        iconName: "multiple-third-party-plugins",
        title: "Multiple Third-party Plugins",
        description:
          "Effortlessly add SEO, newsletter, or social plugins for your custom requirements.",
      },
      {
        iconName: "higher-conversion-rates",
        title: "Higher Conversion Rates",
        description:
          "A well-customized theme can turn visitors into subscribers or buyers with innovative layout changes.",
      },
      {
        iconName: "mobile-optimization",
        title: "Mobile Optimization",
        description:
          "Using a responsive design boosts performance and speed on mobile devices.",
      },
      {
        iconName: "safe-and-secure-payments",
        title: "Safe and Secure Payments",
        description:
          "We ensure a smooth checkout and buying experience with safer and secure payment gateways.",
      },
      {
        iconName: "minimal-maintenance-cost",
        title: "Minimal Maintenance Cost",
        description:
          "After the theme customization, your theme maintenance cost will be reduced.",
      },
    ] as const,
  },
  whyChoose: {
    eyebrow: "Why Dynamic Dreamz",
    heading: "Why Choose Dynamic Dreamz",
    description:
      "We are a trusted WordPress development team committed to delivering quality results.",
    items: [
      {
        title: "Expert Team",
        description: "We have skilled professionals in WordPress and theme customization.",
      },
      {
        title: "Proven Process",
        description: "We follow a step-by-step workflow for smooth and timely delivery.",
      },
      {
        title: "Ongoing Support",
        description:
          "We provide ongoing support and maintenance to ensure your website works smoothly.",
      },
      {
        title: "Client-Focused Approach",
        description: "We always listen to your ideas and deliver what you expect.",
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
      question: "Can I change the layout of blog posts of the NewsBlogger theme?",
      answer:
        "Yes, we can fully customize your blog post layouts to match your preferred style—whether you want a grid, list, or classic format.",
    },
    {
      question: "Will my site stay fast after customization?",
      answer:
        "Absolutely. We optimize the website during customization for speed using best practices like image compression and caching.",
    },
    {
      question: "Can I add social media integration to my NewsBlogger theme?",
      answer:
        "Yes, we can add social sharing buttons, follow icons, and auto-post features using trusted WordPress plugins.",
    },
    {
      question: "How do I highlight featured articles or breaking news?",
      answer:
        "We can customize the theme to include a “Featured Posts” slider or ticker for breaking news or urgent updates.",
    },
    {
      question: "Will the customization affect theme updates in the future?",
      answer:
        "No. We use child themes and safe coding practices to ensure future updates don’t overwrite your customizations.",
    },
    {
      question: "Can I include a signup form for an email newsletter?",
      answer:
        "Yes, we can add and style newsletter signup forms using tools like Mailchimp or ConvertKit.",
    },
    {
      question: "Do you offer ongoing support after customization?",
      answer:
        "Yes, we offer ongoing support and maintenance to keep your site running smoothly. After a few days, we can start a new contract based on an hourly rate or fixed price.",
    },
    {
      question: "Can you redesign my homepage to match the NewsBlogger theme?",
      answer:
        "Of course. We can fully customize just your homepage layout while keeping other pages as they are.",
    },
  ],
} as const;
