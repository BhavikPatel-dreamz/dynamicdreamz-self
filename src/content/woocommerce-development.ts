import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export const woocommerceDevelopmentHero = {
  title: "Your Trusted Partner <br> for WooCommerce Development",
  description:
    "Dynamic Dreamz is India’s top most WooCommerce development company. No matter if you’re a web design company looking for a perfect partner or a WooCommerce store owner who wants to enhance their brand identity, our skilled WooCommerce developers and designers are always ready to help you.",
  ctaLabel: "Request a Quote",
  ctaHref: "/request-quote",
} as const;

export const woocommerceDevelopmentServices = {
  heading: "What We Provide",
  description:
    "Check out our WooCommerce services that convert your store into a lead machine and boost your revenue. Hire us now!",
  items: [
    {
      icon: "/assets/services/woocommerce-development/store-design-development.svg",
      iconAlt: "Cart Icon",
      title: "Store Design and Development",
      description:
        "We’ll help you build your WooCommerce store from scratch and integrate it with your website and branding for a cohesive experience. Our WooCommerce developers and designers are the best for your store development and to fulfill your end goals.",
    },
    {
      icon: "/assets/services/shopify-development-agency/figma-conversion-icon.svg",
      iconAlt: "figma conversion icon",
      title: "Figma to WooCommerce Conversion",
      description:
        "Have a Figma design ready for your WooCommerce store but can’t find designers and developers to convert your design into a functional store? Hire us now to help you.",
    },
    {
      icon: "/assets/shopify-theme-customization/services/responsive-design.svg",
      iconAlt: "custom themes icon",
      title: "Theme Development & Customization",
      description:
        "Need to redesign your store theme or want customization in the existing theme? Our professional designers can make it easy for you and create a visually stunning and user friendly storefront that reflects your brand identity.",
    },
    {
      icon: "/assets/services/woocommerce-development/api-development.svg",
      iconAlt: "API Integration Icon",
      title: "API Development",
      description:
        "Unlock the power of trending headless architecture for your store. We’ll develop custom APIs to connect your WooCommerce store with your preferred Headless CMS or media devices for ultimate flexibility.",
    },
    {
      icon: "/assets/services/wordpress/wordpress-plugin-development.svg",
      iconAlt: "Plugin Development Icon",
      title: "Plugin Development",
      description:
        "Want to take your store functionality beyond the ordinary store? Because it’s not just about selling but catering an experience. Our developers can develop custom WooCommerce plugins or integrate third party solutions seamlessly.",
    },
    {
      icon: "/assets/services/woocommerce-development/payment-shipping-integration.svg",
      iconAlt: "Payment Integration Icon",
      title: "Payment and Shipping Method Integration",
      description:
        "Simplify your checkout process with the help of our WooCommerce developers. We’ll integrate popular payment gateways and multiple shipping options for a smooth customer experience.",
    },
    {
      icon: "/assets/hire-shopify-developers/icons/shopify-migration.svg",
      iconAlt: "Migration Icon",
      title: "Product Migration",
      description:
        "Are you moving from your current eCommerce platform to WooCommerce and need migration experts? We’ll handle your product migration effortlessly, ensuring a smooth transition between Shopify and WooCommerce.",
    },
    {
      icon: "/assets/shopify-theme-customization/services/theme-selection-and-installation.svg",
      iconAlt: "Maintenance and Support Icon",
      title: "WooCommerce Support & Maintenance",
      description:
        "With our trustworthy maintenance and support services, you can maintain your store operating efficiently. Our developers can address any issues and ensure your store stays optimized.",
    },
    {
      icon: "/assets/services/woocommerce-development/facebook-store-sync.svg",
      iconAlt: "Facebook Icon",
      title: "Facebook Store Support and Sync",
      description:
        "Expand your reach using social media integration. We’ll set up and synchronize your Facebook store with your WooCommerce store for effortless sales growth.",
    },
  ],
  cta: {
    label: "Let me give you a hand to help you",
    href: "/request-quote",
    ariaLabel: "Dynamic Dreamz - Let me give you a hand to help you",
  },
} as const;

export const woocommerceDevelopmentPortfolio = {
  heading: "Glimpses of Our Woocommerce Development Services",
  description:
    "Dynamic Dreamz isn't just about talk; we're about results. Explore a carefully curated <br> selection of our successful WooCommerce projects.",
  category: "Woocommerce",
  platformMark: {
    src: "/assets/our-work/platforms/woocommerce-img.svg",
    width: 89,
    height: 26,
  },
  items: [
    {
      name: "Temple Day Spa",
      image: "/assets/woocommerce-development/portfolio/temple-day-spa.webp",
      imageAlt: "Temple Day Spa",
      href: "https://templedayspa.com.au/",
    },
    {
      name: "Ziniosa",
      image: "/assets/woocommerce-development/portfolio/ziniosa.webp",
      imageAlt: "Ziniosa",
      href: "https://www.ziniosa.com/",
    },
    {
      name: "Square Foot Homes",
      image: "/assets/woocommerce-development/portfolio/square-foot-homes.webp",
      imageAlt: "Square Foot Homes",
      href: "https://www.squarefoothomes.com/",
    },
    {
      name: "The Pole Room",
      image: "/assets/woocommerce-development/portfolio/the-pole-room.webp",
      imageAlt: "The Pole Room",
      href: "https://www.thepoleroom.com.au/",
    },
    {
      name: "Vessey",
      image: "/assets/woocommerce-development/portfolio/vessey.webp",
      imageAlt: "Vessey",
      href: "https://www.veesey.co.nz/",
    },
    {
      name: "Catalyst",
      image: "/assets/woocommerce-development/portfolio/catalyst.webp",
      imageAlt: "Catalyst",
      href: "https://www.catalysttg.com/",
    },
  ],
} as const;

export const woocommerceDevelopmentTestimonials = {
  heading: "Don't Just Take Our Word For It",
  description:
    "We have faith in our work, but what truly matters is the outcomes we serve our clients.<br> Happy clients make happy stories. Check out how our services empower them to evolve.",
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
