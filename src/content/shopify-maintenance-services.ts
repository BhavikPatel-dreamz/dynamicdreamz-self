import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export const shopifyMaintenancePricing = {
  heading: "Flexible Shopify Maintenance Plans",
  description:
    "Choose ad hoc support for occasional fixes or ongoing maintenance when your store needs regular development capacity.",
  items: [
    {
      label: "Project-Based",
      badge: "Have One Project?",
      price: "Custom Quote",
      description:
        "For complete Shopify Plus builds, migrations, redesigns, B2B requirements, custom apps, integrations and technically complex ecommerce projects.",
      ctaLabel: "Send Brief — Get a Quote in 24 Hours",
      ctaHref: "/request-quote",
    },
    {
      label: "Flexible Hourly Support",
      badge: "Need Extra Shopify Capacity?",
      price: "$25/hour",
      description:
        "For ongoing maintenance, enhancements, troubleshooting, performance improvements and changing Shopify Plus development requirements.",
      ctaLabel: "Buy Shopify Development Hours",
      ctaHref: "/buy-shopify-development-hours",
    },
    {
      label: "Dedicated Developer / Team",
      badge: "Need Ongoing Capacity?",
      price: "From $2,000/month",
      description:
        "For brands with a steady Shopify roadmap, multiple storefronts or a need for a dedicated developer or wider delivery team.",
      ctaLabel: "Discuss a Dedicated Team",
      ctaHref: "/book-a-discovery-call",
    },
  ],
} as const;

export const shopifyMaintenanceServicesContent = {
  sectionCopy: {
    faqHeading: "Frequently Asked Questions",
    portfolioEyebrow: "Portfolio",
    portfolioCta: "View our work",
    portfolioPricingCta: "View Pricing",
  },
  hero: {
    title: "Shopify Maintenance Service",
    paragraphs: [
      "Keep your Shopify store stable, fast and up to date with ongoing technical support from Dynamic Dreamz. Our Shopify maintenance services cover bug fixes, theme and app changes, performance improvements, custom development, integrations and day-to-day store updates for both ongoing and ad hoc requirements.",
    ],
    cta: "request a quote",
    ctaHref: "/request-quote",
    secondaryCta: {
      label: "See Our Work",
      href: "#our_work",
    },
    video: "/assets/home/why-dynamic-dreamz.mp4",
    badges: [
      {
        name: "Shopify Platinum Partner",
        src: "/assets/proof/shopify-platinum-partner.svg",
        href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
        alt: "Dynamic Dreamz - Shopify Platinum Partner",
        width: 136,
        height: 44,
      },
      {
        name: "Clutch",
        src: "/assets/proof/clutch-rating.svg",
        href: "https://clutch.co/profile/dynamic-dreamz",
        alt: "Dynamic Dreamz on Clutch — 4.9 rating",
        width: 111,
        height: 44,
      },
      {
        name: "Trustpilot",
        src: "/assets/proof/trustpilot-rating.svg",
        href: "https://www.trustpilot.com/review/dynamicdreamz.com",
        alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
        width: 148,
        height: 50,
      },
      {
        name: "Upwork",
        src: "/assets/proof/upwork-top-rated-plus.svg",
        href: "https://www.upwork.com/ag/dynamicdreamz/",
        alt: "Dynamic Dreamz — Upwork Top Rated Plus",
        width: 126,
        height: 54,
      },
    ],
  },
  brands: {
    title: "Trusted by <br>Leading Brands",
    items: [
      {
        name: "Ranavat",
        href: "https://www.ranavat.com/",
        src: "/assets/clients/ranavat.svg",
        alt: "Ranavat Logo",
        width: 174,
        height: 19,
      },
      {
        name: "Prolash",
        href: "https://prolash.com/",
        src: "/assets/clients/prolash.svg",
        alt: "prolash_black",
        width: 204,
        height: 22,
      },
      {
        name: "Tropicfeel",
        href: "https://shop.tropicfeel.com/",
        src: "/assets/clients/tropicfeel.svg",
        alt: "Tropicfeel Logo",
        width: 150,
        height: 32,
      },
      {
        name: "Perfect Locks",
        href: "https://www.perfectlocks.com/",
        src: "/assets/clients/perfect-locks.svg",
        alt: "perfect_locks_color_logo",
        width: 175,
        height: 32,
      },
      {
        name: "Bombay Shirt Company",
        href: "https://www.bombayshirts.com/",
        src: "/assets/clients/bombay-shirt-company.svg",
        alt: "Bombay Shirt Company Logo",
        width: 204,
        height: 26,
      },
      {
        name: "Kayfi",
        href: "https://kayfi.com/",
        src: "/assets/clients/kayfi.svg",
        alt: "kayfi-colored",
        width: 90,
        height: 49,
      },
      {
        name: "Sims Direct",
        href: "https://simsdirect.com.au/",
        src: "/assets/clients/sim-direct.svg",
        alt: "simdirect_logo_color",
        width: 143,
        height: 49,
      },
      {
        name: "Kvaser",
        href: "https://www.kvaser.com/",
        src: "/assets/clients/kvaser.svg",
        alt: "Kvaser Logo",
        width: 135,
        height: 25,
      },
      {
        name: "Nekter Juice Bar",
        href: "https://www.nekterjuicebar.com/",
        src: "/assets/clients/nekter-colored.svg",
        alt: "nekter-colored",
        width: 66,
        height: 64,
      },
      {
        name: "Circuit City",
        href: "https://circuitcity.com/",
        src: "/assets/clients/circuit-city.svg",
        alt: "Circuit City Logo",
        width: 64,
        height: 64,
      },
    ],
  },
  services: {
    heading: "What Our Shopify Maintenance Services Include",
    description:
      "Our Shopify maintenance support covers routine store updates, troubleshooting, performance work, custom development and ongoing technical improvements.",
    items: [
      {
        title: "Store Updates and Upgrades",
        description:
          "Keep your theme, apps, integrations and custom code aligned with current store requirements.",
        bullets: [
          "Theme updates and customizations",
          "App setup",
          "configuration and compatibility checks",
          "Shopify feature and code updates",
        ],
        icon: "/assets/shopify-maintenance-services/services/store-updates-and-upgrades.svg",
        iconAlt: "Store Updates and Upgrades Icon",
      },
      {
        title: "Performance Optimization",
        description:
          "Improve front-end performance by reviewing theme code, apps, images and other factors that can affect store speed.",
        bullets: [
          "Theme and code optimization",
          "Image optimization",
          "App and script review",
        ],
        icon: "/assets/dawn-theme-customization/services/performance-optimization.svg",
        iconAlt: "Performance Optimization Icon",
      },
      {
        title: "Bug Fixes and Troubleshooting",
        description:
          "Resolve technical issues quickly to keep important storefront and checkout-related journeys working as expected.",
        bullets: [
          "Error resolution",
          "Broken links and storefront issues",
          "Payment or integration troubleshooting",
        ],
        icon: "/assets/shopify-maintenance-services/services/bug-fixes-and-troubleshooting.svg",
        iconAlt: "Bug Fixes and Troubleshooting Icon",
      },
      {
        title: "Store Customization and Development",
        description:
          "Add or refine Shopify functionality as your store requirements change.",
        bullets: [
          "Custom feature development;",
          "Theme customization;",
          "App and API integrations",
        ],
        icon: "/assets/shopify-maintenance-services/services/store-customization-and-development.svg",
        iconAlt: "Store Customization and Development Icon",
      },
      {
        title: "SEO & Store Content Support",
        description:
          "Support ongoing on-page and technical SEO updates that are part of store maintenance.",
        bullets: [
          "Meta title and description updates",
          "On-page content changes",
          "Redirect and technical SEO fixes",
        ],
        icon: "/assets/shopify-maintenance-services/services/seo-and-marketing-support.svg",
        iconAlt: "SEO & Store Content Support Icon",
      },
      {
        title: "Ongoing Support and Maintenance",
        description:
          "Use Dynamic Dreamz as an ongoing Shopify development partner for fixes, improvements and future store changes.",
        bullets: [
          "Responsive technical support",
          "Monthly or ongoing support plans",
          "Development consultation",
        ],
        icon: "/assets/shopify-maintenance-services/services/ongoing-support-and-maintenance.svg",
        iconAlt: "Ongoing Support and Maintenance Icon",
      },
    ],
  },
  portfolio: {
    eyebrow: "Portfolio",
    heading: "Selected Shopify Stores We Have Worked On",
    description:
      "Explore selected Shopify stores our team has worked on across development, customization, fixes, performance improvements and ongoing support.",
    ctaLabel: "View our work",
    ctaHref: "/our-work",
    secondaryCtaLabel: "View Pricing",
    secondaryCtaHref: "#our_white_label_pricing",
    items: [
      {
        name: "Nufyx",
        category: "SHOPIFY",
        href: "https://nufyx.com/",
        image: "/assets/health-nutrition/portfolio/nufyx-protein-products.webp",
        imageAlt: "Nufyx Image",
      },
      {
        name: "Nekter Juice Bar",
        category: "SHOPIFY",
        href: "https://www.nekterjuicebar.com/",
        image: "/assets/food-beverages/portfolio/nekter-juice-bar.webp",
        imageAlt: "Nekter Juice Bar Image",
      },
      {
        name: "Pagerie",
        category: "SHOPIFY",
        href: "https://www.pagerie.com/",
        image: "/assets/pet-industry/portfolio/pagerie-dog-accessories.webp",
        imageAlt: "Pagerie Image",
      },
      {
        name: "Luxxi Nails",
        category: "SHOPIFY",
        href: "https://luxxinails.com/",
        image: "/assets/beauty-cosmetics/portfolio/luxxi-nails.webp",
        imageAlt: "Luxxi Nails Image",
      },
      {
        name: "Eco Soul",
        category: "SHOPIFY",
        href: "https://www.ecosoulhome.com/",
        image: "/assets/our-work/projects/eco-soul.webp",
        imageAlt: "Eco Soul Image",
      },
      {
        name: "AdHOC Atelier",
        category: "SHOPIFY",
        href: "https://adhocatelier.it/",
        image: "/assets/hire-shopify-developers/portfolio/adhoc-atler.webp",
        imageAlt: "AdHOC Atelier Image",
      },
      {
        name: "Bombay Shirt Company",
        category: "SHOPIFY",
        href: "https://bombayshirts.com/",
        image: "/assets/fashion/portfolio/bombay-shirt-company-fashion.webp",
        imageAlt: "Bombay Shirt Company Image",
      },
      {
        name: "Holy Plantz",
        category: "SHOPIFY",
        href: "https://holyplantz.com/",
        image: "/assets/our-work/projects/holy-plantz.webp",
        imageAlt: "Holy Plantz Image",
      },
    ],
  },
  pricing: shopifyMaintenancePricing,
  testimonials: {
    eyebrow: "Client Stories",
    heading: "What Clients Say About Dynamic Dreamz",
    description:
      "Our clients' success speaks for itself. Read testimonials from satisfied clients who have benefited <br> from our Shopify maintenance services and see how we can help you achieve similar results.",
    items: shopifyPlusAgencyTestimonials.items,
  },
  faqs: [
    {
      question: "What does your Shopify maintenance service include?",
      answer:
        "Our Shopify maintenance services can include bug fixes, theme and app changes, performance improvements, custom development, integrations, on-page updates and ongoing technical support. The exact scope depends on your store and support plan.",
    },
    {
      question: "How often do you review or update a Shopify store?",
      answer:
        "The frequency depends on the store and the type of support required. Some clients use us for ad hoc fixes, while others schedule regular monthly development, performance reviews and store improvements.",
    },
    {
      question: "Can you help with custom feature development for my Shopify store?",
      answer:
        "Yes. We can develop custom sections, theme functionality, integrations and other Shopify features based on your store requirements.",
    },
    {
      question: "How do you support Shopify store security?",
      answer:
        "Shopify manages the core hosted platform, SSL and infrastructure security. On the store side, we can review themes, apps, custom code, access and integrations and help address issues that could affect the storefront or customer experience.",
    },
    {
      question: "How do you optimize Shopify performance?",
      answer:
        "We review theme code, images, apps, scripts and front-end implementation to identify performance issues and improve loading speed and user experience where practical.",
    },
    {
      question: "How much do Shopify maintenance services cost?",
      answer:
        "Pricing depends on the amount and type of support required. We offer flexible options for ad hoc development and ongoing maintenance. See the pricing section or contact us for the right support model for your store.",
    },
    {
      question: "Can I use your team only when I have Shopify tasks?",
      answer:
        "Yes. You can use Dynamic Dreamz for occasional fixes and development tasks or choose an ongoing support arrangement when you need regular Shopify capacity.",
    },
    {
      question: "Can your team work on an existing customized Shopify theme?",
      answer:
        "Yes. We can review an existing Shopify theme and work on bug fixes, section changes, app integrations, performance improvements and new functionality while preserving the current store setup where appropriate.",
    },
  ],
} as const;
