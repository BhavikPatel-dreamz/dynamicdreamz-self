import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

export const wordpressDevelopmentHero = {
  eyebrows: ["Established in 2006", "Wordpress Development Agency"],
  title: "WordPress Web Development Services",
  description:
    "Transform your online presence with our expert WordPress development services. We craft custom sites and refine themes to match your unique requirements perfectly. Our focus is on creating a website that showcases your brand identity and fulfills your objectives. Let’s bring your digital dreams to life together.",
  secondaryDescription:
    "Our white label WordPress services offer custom development and design, enabling you to deliver top tier websites under your brand.",
  primaryCta: {
    label: "REQUEST A QUOTE",
    href: "/request-quote",
  },
  secondaryCta: {
    label: "See Our Work",
    href: "#our_work",
  },
  badges: [
    {
      src: "/assets/proof/shopify-platinum-partner.svg",
      alt: "Dynamic Dreamz - Shopify Platinum Partner",
      width: 136,
      height: 44,
      href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
    },
    {
      src: "/assets/proof/clutch-rating.svg",
      alt: "Dynamic Dreamz on Clutch — 4.9 rating",
      width: 111,
      height: 44,
      href: "https://clutch.co/profile/dynamic-dreamz",
    },
    {
      src: "/assets/proof/trustpilot-rating.svg",
      alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
      width: 148,
      height: 50,
      href: "https://www.trustpilot.com/review/dynamicdreamz.com",
    },
    {
      src: "/assets/proof/upwork-top-rated-plus.svg",
      alt: "Dynamic Dreamz — Upwork Top Rated Plus",
      width: 126,
      height: 54,
      href: "https://www.upwork.com/agencies/dynamicdreamz/",
    },
  ],
  tabletSlider: {
    bgShapeSrc:
      "/assets/services/shopify-development-in-bangalore/hero/slide-bg-shape.svg",
    topBadge: {
      src: "/assets/services/wordpress-development-in-ahmedabad/hero/woocommerce-agency-partner.png",
      alt: "WooCommerce Agency Partner",
      width: 173,
      height: 106,
    },
    bottomBadge: {
      src: "/assets/services/wordpress-development-in-ahmedabad/hero/wordpress-logo.png",
      alt: "WordPress Logo",
      width: 130,
      height: 126,
    },
    slides: [
      {
        src: "/assets/services/wordpress-development-in-ahmedabad/hero/slide-green-future-energy.webp",
        alt: "Green Future Energy WordPress Website built by Dynamic Dreamz",
        width: 1600,
        height: 2380,
      },
      {
        src: "/assets/services/wordpress-development-in-ahmedabad/hero/slide-avm.webp",
        alt: "AVM Global WordPress Website built by Dynamic Dreamz",
        width: 1600,
        height: 2380,
      },
      {
        src: "/assets/services/wordpress-development-in-ahmedabad/hero/slide-homepage-revised.webp",
        alt: "Custom WordPress Homepage Design by Dynamic Dreamz",
        width: 1600,
        height: 2380,
      },
      {
        src: "/assets/services/wordpress-development-in-ahmedabad/hero/slide-lipari-design.webp",
        alt: "Lipari Design WordPress Website built by Dynamic Dreamz",
        width: 1600,
        height: 2380,
      },
      {
        src: "/assets/services/wordpress-development-in-ahmedabad/hero/slide-ornago.webp",
        alt: "Ornago Custom WordPress Website by Dynamic Dreamz",
        width: 1600,
        height: 2380,
      },
      {
        src: "/assets/services/wordpress-development-in-ahmedabad/hero/slide-syrene.webp",
        alt: "Syrene Skincare Custom Website built by Dynamic Dreamz",
        width: 1600,
        height: 2380,
      },
      {
        src: "/assets/services/wordpress-development-in-ahmedabad/hero/slide-the-huddle-sports-grill.webp",
        alt: "The Huddle Sports Grill WordPress Website by Dynamic Dreamz",
        width: 1600,
        height: 2380,
      },
    ],
  },
} as const;

export const wordpressDevelopmentBrands = {
  slug: "wordpress-development",
  brands: {
    ariaLabel: "Trusted by Leading Brands",
  },
} as const;

export type WordPressServiceItem = {
  title: string;
  icon: string;
  iconAlt: string;
  iconKey?: string;
  description: string;
  href?: string;
};

export const wordpressDevelopmentServices = {
  eyebrow: "Our Services",
  heading: "What We Provide",
  description: "Expertly crafting customized WordPress solutions to ensure digital success.",
  items: [
    {
      icon: "/assets/services/wordpress/wordpress-theme-customization.svg",
      iconAlt: "WordPress Icon",
      iconKey: "wordpress-theme-customization",
      title: "WordPress Theme Customization Service",
      description:
        "Our expert WordPress developers can customize popular WordPress themes such as Gutenberg, Elementer, Divi Builder, Flatsome UX Builder, etc., to cater to your diverse business requirements. Boost your online presence with our custom WordPress website service. We create unique sites tailored to your brand. Our team ensures your website is easy to use and looks great. Let us help you shine online with our simple, effective solutions.",
    },
    {
      icon: "/assets/shopify-theme-customization/services/responsive-design.svg",
      iconAlt: "theme customization icon",
      iconKey: "wordpress-custom-theme-development",
      title: "WordPress Custom Theme Development Service",
      description:
        "Can’t you find any of the WordPress themes appealing? We are here to help you with our WordPress custom theme development service. We will craft a completely novel theme that will distinguish your website from competitors and meet your specific needs. We also create user engaging subscription based Learning Management Systems (LMS) using WordPress.",
    },
    {
      icon: "/assets/services/wordpress/wordpress-plugin-development.svg",
      iconAlt: "Plugin Development Icon",
      iconKey: "wordpress-plugin-development",
      title: "WordPress Plugin Development Service",
      description:
        "Boost your WordPress website with personalized plugins designed to suit your requirements. Our skilled team creates plugins to enrich functionality and ensure smooth integration. Elevate your site’s efficiency and user interaction with our specialized plugin development solutions.",
    },
    {
      icon: "/assets/services/wordpress/wordpress-multi-language-website.svg",
      iconAlt: "Multi-Language Icon",
      iconKey: "wordpress-multi-language-website-development",
      title: "WordPress Multi Language Website Development Service",
      description:
        "Expand your reach with our WordPress multi language website development service. We create sites in English, Spanish, French, German, and many other languages using the WPML plugin for seamless language integration. Enhance the presence of your business by catering to the global audience with a fully translated, user friendly website.",
    },
    {
      icon: "/assets/services/wordpress/woocommerce-development.svg",
      iconAlt: "WooCommerce Icon",
      iconKey: "woocommerce-development",
      title: "WooCommerce Development Service",
      href: "/woocommerce-development",
      description:
        "Our WooCommerce development service tailors robust eCommerce solutions to your business needs. From seamless integration to custom plugin development, we optimize your online store for scalability and performance. With user friendly interfaces and secure payment gateways, we ensure a seamless shopping experience, driving sales and customer satisfaction.",
    },
    {
      icon: "/assets/services/wordpress/wordpress-white-label-development.svg",
      iconAlt: "White Label icon",
      iconKey: "wordpress-white-label-development",
      title: "WordPress White Label Development Service",
      href: "/white-label-wordpress-development-services",
      description:
        "Our white label WordPress development service enables agencies to offer expert solutions under their brand. From custom themes to plugin development, we deliver seamless, rebranded solutions tailored to your clients’ needs. Expand your service offerings without the overhead, and let us be your silent partner in digital success.",
    },
    {
      icon: "/assets/services/wordpress/wordpress-cms-development.svg",
      iconAlt: "WordPress CMS Icon",
      iconKey: "wordpress-cms-development",
      title: "WordPress CMS Development Service",
      description:
        "Experience seamless content management with our Headless WordPress service. Manage your site with WordPress’s powerful admin interface while delivering a dynamic, high performance front end using Next.js. Benefit from a decoupled architecture that enhances speed, flexibility, and scalability. Perfect for developers and content creators seeking modern web development with robust, user friendly content management systems.",
    },
    {
      icon: "/assets/services/wordpress/wordpress-optimization-speed-up.svg",
      iconAlt: "Speed Up Icon",
      iconKey: "wordpress-optimization-and-speed-up",
      title: "WordPress Optimization and Speed up Service",
      description:
        "Boost your WordPress site’s rankings and user experience with our WordPress optimization services. We optimize loading times, streamline code, and improve SEO rankings. From image optimization to caching solutions, we ensure your site operates at peak efficiency, driving increased traffic and conversions. We fine tune every aspect for maximum performance. Let us optimize your site for better visibility and success!",
    },
    {
      icon: "/assets/services/wordpress/wordpress-maintenance.svg",
      iconAlt: "maintenance icon",
      iconKey: "wordpress-maintenance",
      title: "WordPress Maintenance Service",
      description:
        "Keep your WordPress site running around the clock with our maintenance services. We handle core updates, backups, theme updates, security checks, and more, so you can focus on your business. Let us take care of the technical stuff for you!",
    },
  ],
} as const;

export const wordpressDevelopmentEngagement = {
  heading: "Flexible WordPress Development Options",
  description:
    "Choose project-based development, flexible hourly support or an ongoing WordPress developer/team based on the amount and type of work you need.",
  items: [
    {
      label: "Project-Based",
      badge: "Have One Project?",
      price: "Custom Quote",
      description:
        "For complete WordPress website builds, custom theme development, website redesigns, plugin development, third-party integrations, WooCommerce solutions and technically complex WordPress projects.",
      ctaLabel: "Send Brief — Get a Quote in 24 Hours",
      ctaHref: "/request-quote",
    },
    {
      label: "Flexible Hourly Support",
      badge: "Need Extra WordPress Capacity?",
      price: "$20/hour",
      description:
        "For ongoing WordPress maintenance, enhancements, troubleshooting, performance improvements, security updates and evolving website development requirements.",
      ctaLabel: "Buy Wordpress Development Hours",
      ctaHref: "/request-quote",
    },
    {
      label: "Dedicated Developer / Team",
      badge: "Need Ongoing Capacity?",
      price: "From $2,000/month",
      description:
        "For brands with an evolving WordPress roadmap, multiple websites or a need for a dedicated developer or wider development team.",
      ctaLabel: "Discuss a Dedicated Team",
      ctaHref: "/book-a-discovery-call",
    },
  ],
} as const;

export const wordpressDevelopmentPortfolio = {
  eyebrow: "Portfolio",
  heading: "A sneak peek into our WordPress Development Expertise",
  description:
    [
      "500+ WordPress websites meticulously crafted and counting. Our expertise accelerates",
      "growth and redefines shopping experiences for clients.",
    ],
  category: "WORDPRESS",
  ctaLabel: "VIEW OUR WORK",
  ctaHref: "/our-work",
  platformMark: {
    src: "/assets/platforms/wordpress-woocommerce-white.svg",
    width: 89,
    height: 26,
  },
  items: [
    {
      name: "Quite Events",
      image: "/assets/our-work/projects/quite-events.webp",
      imageAlt: "Quiet Events Silent Disco WordPress Website by Dynamic Dreamz",
      href: "https://www.quietevents.com/",
    },
    {
      name: "Les Etoiles",
      image: "/assets/our-work/projects/les-etoiles.webp",
      imageAlt: "Les Etoiles WordPress Website built by Dynamic Dreamz",
      href: "https://louer-lesetoiles.ca/",
    },
    {
      name: "Valents",
      image: "/assets/our-work/projects/valents.webp",
      imageAlt: "Valents Custom WordPress Website built by Dynamic Dreamz",
      href: "https://wearvalents.com/",
    },
    {
      name: "Get Sunsights",
      image: "/assets/our-work/projects/get-sunsights.webp",
      imageAlt: "Get Sunsights WordPress Website built by Dynamic Dreamz",
      href: "https://www.getsunsights.com/",
    },
    {
      name: "Lipari Design",
      image: "/assets/our-work/projects/lipari-design.webp",
      imageAlt: "Lipari Design Interior Architecture Website by Dynamic Dreamz",
      href: "https://liparidesign.ca/",
    },
    {
      name: "Nexventur",
      image: "/assets/our-work/projects/nexventur.webp",
      imageAlt: "Nexventur Recruitment & Relocation Website by Dynamic Dreamz",
      href: "https://www.nexventur.com/",
    },
    {
      name: "Awaken Media",
      image: "/assets/our-work/projects/awaken-media.webp",
      imageAlt: "Awaken Media Creative Agency Website by Dynamic Dreamz",
      href: "https://www.awaken.media/",
    },
    {
      name: "Budget Maids",
      image: "/assets/our-work/projects/budget-maids.webp",
      imageAlt: "Budget Maids Cleaning Services Website by Dynamic Dreamz",
      href: "https://www.budget-maids.com/",
    },
  ],
} as const;

export const wordpressDevelopmentTestimonials = {
  eyebrow: "Client Stories",
  heading: "Don't Just Take Our Word For It",
  description:
    [
      "We have faith in our work, but what truly matters is the outcomes we serve our clients.",
      "Happy clients make happy stories. Check out how our services empower them to evolve.",
    ],
} as const;

export const wordpressDevelopmentFaqs: readonly FaqAccordionItem[] = [
  {
    question: "Is WordPress the right choice for my business?",
    answer:
      "WordPress is suitable for many business websites, content-heavy sites, membership platforms and ecommerce projects. The right choice depends on your content, functionality, integrations, editing requirements and long-term roadmap.",
  },
  {
    question: "How much will you charge for my WordPress website?",
    answer:
      "The cost depends on the design, number of templates, custom functionality, content, integrations and overall complexity. We offer project-based development, flexible hourly support and ongoing WordPress development options based on the requirement.",
  },
  {
    question: "How much time is required for WordPress website development?",
    answer:
      "A typical WordPress website may take around 4 to 6 weeks from approved design and scope to launch. More complex WooCommerce, multilingual, plugin or integration-heavy projects can take longer depending on content readiness, approvals and QA.",
  },
  {
    question: "What is your level of experience in WordPress development?",
    answer:
      "Dynamic Dreamz has provided WordPress development services since 2006. Our team works across custom themes, theme customization, plugins, WooCommerce, multilingual websites, integrations, performance improvements and ongoing support.",
  },
  {
    question:
      "Can you convert my WordPress site into a WooCommerce store or add more features later?",
    answer:
      "Yes. We can add WooCommerce, custom functionality, plugins, third-party integrations, membership features, multilingual support and other improvements to an existing WordPress website.",
  },
  {
    question: "Will my WordPress site be built with SEO and conversion in mind?",
    answer:
      "We build responsive WordPress websites with clear heading structure, metadata support, crawl-friendly implementation, performance best practices and usability in mind. Full SEO campaigns, keyword research and ongoing SEO monitoring can be scoped separately when required.",
  },
  {
    question: "Will my WordPress website be responsive and fast?",
    answer:
      "Yes. We build responsive layouts and review images, caching, scripts, themes and plugins to improve loading performance where practical. Final speed depends on hosting, third-party tools, content and the overall site architecture.",
  },
  {
    question: "Do you provide ongoing WordPress maintenance and support?",
    answer:
      "Yes. We provide ongoing WordPress support for updates, backups, fixes, theme and plugin changes, performance work, new features, integrations and continuous development.",
  },
];

export const wordpressDevelopmentCta = {
  heading: "Want us to help you with your online store?",
  ctaLabel: "REQUEST A QUOTE",
  ctaHref: "/request-quote",
} as const;
