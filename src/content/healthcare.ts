import type { IndustryPageContent } from "@/types/industry";

export const healthcareIndustryPage = {
  slug: "healthcare",
  hero: {
    eyebrow: "industries",
    title: "Health & Nutrition",
    descriptionBeforeBreak:
      "The Health & Nutrition industry can thrust growth across the value chain through our",
    descriptionAfterBreak: "technology supported web solutions.",
    image: {
      src: "/assets/healthcare/health-nutrition-storefront-collage.webp",
      alt: "Health and nutrition ecommerce storefront collage featuring energy and supplement products",
      width: 840,
      height: 434,
    },
  },
  brands: {
    ariaLabel: "Leading brands supported by Dynamic Dreamz",
  },
  solutions: [
    {
      mobileOrder: "image-first",
      title: "IT Solutions for Health & Nutrition Industry",
      subtitle: "At Dynamic Dreamz, we create next gen stores for better customer experience.",
      description:
        "We emphasize on displaying the healthcare products and service description and the target customers. We provide custom solutions that enable unprecedented business growth which will help transform your healthcare business.",
      image: {
        src: "/assets/healthcare/health-nutrition-supplements.webp",
        alt: "Protein powder being added to a health and nutrition drink",
        width: 516,
        height: 434,
      },
    },
    {
      mobileOrder: "image-first",
      title: "Professional Website Solutions for the Dental Industry",
      subtitle: "At Dynamic Dreamz, we develop advanced websites for dental business.",
      description:
        "If you're a dentist looking for a website developer to create a brand-new dental website or a web development company that needs white-label website development services for dental websites for your clients, then Dynamic Dreamz is the best for providing dental website solutions.",
      additionalDescriptions: [
        "Our custom solutions simplify routine management, improve patient engagement, and increase online visibility, allowing remarkable growth and transforming dental services into a modern, tech-driven facility.",
      ],
      image: {
        src: "/assets/healthcare/dental-clinic-treatment.webp",
        alt: "Dentist treating a patient in a modern dental clinic",
        width: 2560,
        height: 1707,
      },
      imagePosition: "start",
      cta: {
        label: "Read More",
        href: "/dental-clinic-website-development-company",
        ariaLabel: "Read more about Dental Clinic Website Development Services",
      },
    },
  ],
  deliverables: {
    title: "What We Deliver",
    description:
      "At Dynamic Dreamz we understand the factors that affect healthcare outcomes, optimized cost along with evolving compliance needs to be addressed to support health & nutrition organizations.",
    ariaLabel: "Health and nutrition deliverables",
    items: [
      {
        title: "Tailored Website Development",
        description:
          "Health & nutrition industry requires precise product display with accurate information readily available on their website for the customers. We at Dynamic Dreamz leverage the latest eCommerce technology to make product and its medicinal information easily accessible.",
        icon: "/assets/industry-solutions/tailored-website-development.svg",
        iconAlt: "Tailored Website Development Icon",
        width: 68,
        height: 68,
      },
      {
        title: "White Label Service",
        description:
          "We provide end to end white label service for digital agencies engaged in the health and nutrition industry. You can leverage our technical expertise and resources to quickly develop outstanding eCommerce websites.",
        icon: "/assets/industry-solutions/white-label-service.svg",
        iconAlt: "White Label Service Icon",
        width: 64,
        height: 64,
      },
      {
        title: "Online Order and Payment Facility",
        description:
          "We create seamless navigation and an easy checkout process so that it guarantees customers satisfaction and delight.",
        icon: "/assets/industry-solutions/online-order-payment.svg",
        iconAlt: "Online Order and Payment Facility Icon",
        width: 68,
        height: 68,
      },
      {
        title: "Responsive Layouts",
        description:
          "We develop eye catching online stores that function seamlessly across all devices, including desktops, tablets and cell phones.",
        icon: "/assets/industry-solutions/responsive-layouts.svg",
        iconAlt: "Responsive Layouts Icon",
        width: 68,
        height: 68,
      },
      {
        title: "Social Media Integration",
        description:
          "Seamless integration with social media platforms to enable easy sharing of content, promotions, and customer reviews.",
        icon: "/assets/industry-solutions/social-media-integration.svg",
        iconAlt: "Social Media Integration Icon",
        width: 62,
        height: 62,
      },
    ],
  },
  portfolio: {
    title: "Our Health & Nutrition Portfolio",
    description:
      "We've provided Services to several clients to help them in their Food sector businesses.",
    items: [
      {
        name: "Naakbar",
        category: "shopify",
        href: "https://www.naak.com/",
        image: "/assets/healthcare/portfolio/naakbar-energy-products.webp",
        imageAlt: "Hands holding Naak energy products beside a rocky trail",
        width: 370,
        height: 422,
        platformLogo: "/assets/platforms/shopify-white.svg",
        platformAlt: "Shopify",
        platformWidth: 89,
        platformHeight: 26,
      },
      {
        name: "Nordic Nutrition",
        category: "shopify",
        href: "https://nordicnutrition.ae/",
        image: "/assets/healthcare/portfolio/nordic-nutrition-supplements.webp",
        imageAlt: "Athlete holding a Nordic Nutrition supplement container",
        width: 369,
        height: 422,
        platformLogo: "/assets/platforms/shopify-white.svg",
        platformAlt: "Shopify",
        platformWidth: 89,
        platformHeight: 26,
      },
      {
        name: "Elavate",
        category: "shopify",
        href: "https://elavate.com/",
        image: "/assets/healthcare/portfolio/elavate-collagen-supplement.webp",
        imageAlt: "Smiling woman holding an Elavate Multi Collagen Peptides pouch",
        width: 369,
        height: 422,
        platformLogo: "/assets/platforms/shopify-white.svg",
        platformAlt: "Shopify",
        platformWidth: 89,
        platformHeight: 26,
      },
      {
        name: "Nufyx",
        category: "shopify",
        href: "https://nufyx.com/",
        image: "/assets/healthcare/portfolio/nufyx-protein-products.webp",
        imageAlt: "Nufyx protein shaker and product sachets arranged on grass",
        width: 369,
        height: 422,
        platformLogo: "/assets/platforms/shopify-white.svg",
        platformAlt: "Shopify",
        platformWidth: 89,
        platformHeight: 26,
      },
      {
        name: "Turmeric Vitality",
        category: "shopify",
        href: "https://turmericvitality.co.uk/",
        image: "/assets/healthcare/portfolio/turmeric-vitality-supplement.webp",
        imageAlt: "Hand holding a Turmeric Vitality supplement bottle above turmeric powder",
        width: 369,
        height: 422,
        platformLogo: "/assets/platforms/shopify-white.svg",
        platformAlt: "Shopify",
        platformWidth: 89,
        platformHeight: 26,
      },
      {
        name: "Health Co",
        category: "shopify",
        href: "https://www.healthco.com.au/",
        image: "/assets/healthcare/portfolio/health-co-protein-powder.webp",
        imageAlt: "Scoop of Health Co protein powder",
        width: 369,
        height: 422,
        platformLogo: "/assets/platforms/magento-white.svg",
        platformAlt: "Magento",
        platformWidth: 105,
        platformHeight: 30,
      },
    ],
  },
} as const satisfies IndustryPageContent;
