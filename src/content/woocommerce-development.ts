import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";
import { globalBrandLogos } from "@/content/brands";

export const woocommerceDevelopmentHero = {
  eyebrows: ["Established in 2006", "WooCommerce Agency"],
  title: "Your Trusted Partner for WooCommerce Development",
  description:
    "Dynamic Dreamz is India’s top most WooCommerce development company. No matter if you’re a web design company looking for a perfect partner or a WooCommerce store owner who wants to enhance their brand identity, our skilled WooCommerce developers and designers are always ready to help you.",
  primaryCta: {
    label: "REQUEST A QUOTE",
    href: "/request-quote",
  },
  badges: [
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

export const woocommerceDevelopmentBrands = {
  title: "Trusted by Leading Brands",
  items: globalBrandLogos,
} as const;

export const woocommerceDevelopmentServices = {
  heading: "What We Provide",
  description:
    "Check out our WooCommerce services that convert your store into a lead machine and boost your revenue. Hire us now!",
  items: [
    {
      iconKey: "store-design-development",
      title: "Store Design and Development",
      description:
        "We’ll help you build your WooCommerce store from scratch and integrate it with your website and branding for a cohesive experience. Our WooCommerce developers and designers are the best for your store development and to fulfill your end goals.",
    },
    {
      iconKey: "figma-to-woocommerce-conversion",
      title: "Figma to WooCommerce Conversion",
      description:
        "Have a Figma design ready for your WooCommerce store but can’t find designers and developers to convert your design into a functional store? Hire us now to help you.",
    },
    {
      iconKey: "theme-development-customization",
      title: "Theme Development & Customization",
      description:
        "Need to redesign your store theme or want customization in the existing theme? Our professional designers can make it easy for you and create a visually stunning and user friendly storefront that reflects your brand identity.",
    },
    {
      iconKey: "api-development",
      title: "API Development",
      description:
        "Unlock the power of trending headless architecture for your store. We’ll develop custom APIs to connect your WooCommerce store with your preferred Headless CMS or media devices for ultimate flexibility.",
    },
    {
      iconKey: "plugin-development",
      title: "Plugin Development",
      description:
        "Want to take your store functionality beyond the ordinary store? Because it’s not just about selling but catering an experience. Our developers can develop custom WooCommerce plugins or integrate third party solutions seamlessly.",
    },
    {
      iconKey: "payment-shipping-integration",
      title: "Payment and Shipping Method Integration",
      description:
        "Simplify your checkout process with the help of our WooCommerce developers. We’ll integrate popular payment gateways and multiple shipping options for a smooth customer experience.",
    },
    {
      iconKey: "product-migration",
      title: "Product Migration",
      description:
        "Are you moving from your current eCommerce platform to WooCommerce and need migration experts? We’ll handle your product migration effortlessly, ensuring a smooth transition between Shopify and WooCommerce.",
    },
    {
      iconKey: "support-maintenance",
      title: "WooCommerce Support & Maintenance",
      description:
        "With our trustworthy maintenance and support services, you can maintain your store operating efficiently. Our developers can address any issues and ensure your store stays optimized.",
    },
    {
      iconKey: "facebook-store-sync",
      title: "Facebook Store Support and Sync",
      description:
        "Expand your reach using social media integration. We’ll set up and synchronize your Facebook store with your WooCommerce store for effortless sales growth.",
    },
  ],
} as const;

export const woocommerceDevelopmentPortfolio = {
  heading: "Glimpses of Our Woocommerce Development Services",
  description:
    [
    "Dynamic Dreamz isn't just about talk; we're about results. Explore a carefully curated selection of our successful WooCommerce projects."
  ],
  eyebrow: "Portfolio",
  category: "Woocommerce",
  platformMark: {
    src: "/assets/our-work/platforms/woocommerce-img.svg",
    width: 89,
    height: 26,
  },
  ctaLabel: "View our work",
  ctaHref: "/our-work",
  items: [
    {
      name: "Temple Day Spa",
      category: "Woocommerce",
      image: "/assets/woocommerce-development/portfolio/temple-day-spa.webp",
      imageAlt: "Temple Day Spa Relaxation & Wellness WooCommerce Website by Dynamic Dreamz",
      href: "https://templedayspa.com.au/",
    },
    {
      name: "Ziniosa",
      category: "Woocommerce",
      image: "/assets/woocommerce-development/portfolio/ziniosa.webp",
      imageAlt: "Ziniosa Luxury Handbag Rental WooCommerce Website by Dynamic Dreamz",
      href: "https://www.ziniosa.com/",
    },
    {
      name: "Square Foot Homes",
      category: "Woocommerce",
      image: "/assets/woocommerce-development/portfolio/square-foot-homes.webp",
      imageAlt: "Square Foot Homes Residential Construction WooCommerce Website by Dynamic Dreamz",
      href: "https://www.squarefoothomes.com/",
    },
    {
      name: "The Pole Room",
      category: "Woocommerce",
      image: "/assets/woocommerce-development/portfolio/the-pole-room.webp",
      imageAlt: "The Pole Room Dance Studio WooCommerce Website by Dynamic Dreamz",
      href: "https://www.thepoleroom.com.au/",
    },
  ],
} as const;

export const woocommerceDevelopmentTestimonials = {
  heading: "Don't Just Take Our Word For It",
  description:
    [
      "We have faith in our work, but what truly matters is the outcomes we serve our clients. Happy clients make happy stories. Check out how our services empower them to evolve."
    ],
  items: shopifyPlusAgencyTestimonials.items,
} as const;

export const woocommerceDevelopmentFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What is WooCommerce?",
    answer:
      "WooCommerce is a free and open source WordPress plugin to transform your existing WordPress site into a full fledged online store. With WooCommerce, you can:",
    listItems: [
      { text: "Sell Physical or Digital Products" },
      { text: "Manage Inventory" },
      { text: "Secure Payment Processing" },
      { text: "Flexible Shipping Options" },
      { text: "User Friendly Interface" },
      { text: "Extensive Customization Options" },
      { text: "Scalability" },
      { text: "Large Community and Resources" },
    ],
  },
  {
    question: "Do I need to know coding to use WooCommerce?",
    answer:
      "No, you don’t need coding and technical skills, but you can hire a WooCommerce developer for complex functionalities and changes.",
  },
  {
    question: "Why choose Dynamic Dreamz for WooCommerce development?",
    answer:
      "We offer unmatched expertise, extensive resources, and a commitment to tailored solutions that drive growth for your store.",
    listItems: [
      {
        label: "Unmatched Expertise:",
        text: "Our team contains the most skilled WooCommerce developers. Who are passionate about crafting powerful and user friendly online stores.",
      },
      {
        label: "Extensive Resources:",
        text: "We boast the highest number of WooCommerce resources in India, ensuring we have the tools and knowledge to tackle any project, big or small.",
      },
      {
        label: "Custom Crafted Solutions:",
        text: "We don’t believe in a one size fits all approach. We work closely with you to understand your unique needs and develop a tailored solution to achieve your goals.",
      },
      {
        label: "Focus on Growth:",
        text: "Our development goes beyond just functionality. We prioritize building stores that convert visitors into customers and drive long term growth for your business.",
      },
    ],
  },
  {
    question: "Can you convert any Figma design to WooCommerce?",
    answer:
      "Yes, of course! Our skilled designers can handle most Figma files and translate them into a functional and visually appealing WooCommerce store.",
  },
  {
    question: "What are the benefits of a custom theme?",
    answer:
      "A custom theme offers complete control over design, branding, and functionality, creating a unique online experience for your customers.",
  },
  {
    question: "What is Headless CMS?",
    answer:
      "A Headless CMS allows you to manage your store’s content separately from the frontend presentation. We can develop custom APIs to connect your WooCommerce store with your preferred Headless CMS for ultimate flexibility.",
  },
  {
    question: "How long does product migration take?",
    answer:
      "The migration timeframe depends on the size and complexity of your store. We’ll provide a transparent estimate during the consultation.",
  },
  {
    question: "Will my product data be safe during migration?",
    answer:
      "Absolutely! We use secure methods to ensure a smooth and risk free migration of your product data.",
  },
  {
    question: "How does Facebook store integration benefit my business?",
    answer:
      "It simplifies store management and expands your reach. You can manage both stores from one platform and leverage Facebook’s powerful marketing tools to reach new customers.",
  },
  {
    question: "What is the cost of hiring a dedicated WooCommerce developer from Dynamic Dreamz?",
    answer:
      "The cost of hiring a dedicated WooCommerce developer from Dynamic Dreamz can depend on your project requirements and the experience and expertise of a developer.",
  },
];
