import type { IndustryPageContent } from "@/types/industry";

export const fashionIndustryPage = {
  slug: "fashion",
  hero: {
    eyebrow: "industries",
    title: "Fashion & Apparel",
    descriptionBeforeBreak:
      "Display your fashion statement with style. Let Dynamic Dreamz help you in exhibiting your",
    descriptionAfterBreak:
      "apparels in the most appealing manner to your customers.",
    image: {
      src: "/assets/fashion/fashion-storefront-collage.webp",
      alt: "Collage of fashion, sportswear, footwear and jewellery ecommerce storefronts",
      width: 840,
      height: 434,
    },
  },
  brands: {
    ariaLabel: "Leading brands supported by Dynamic Dreamz",
  },
  solutions: {
    mobileOrder: "content-first",
    title: "IT Solutions for Fashion & Apparel Industry",
    subtitle: "Let us assist you in bringing your clothing brand to the next level",
    description:
      "The fashion industry is dynamic, fast paced, and trend driven, characterized by constant innovation and seasonal changes. Our Shopify and Shopify Plus based holistic IT solutions enable you to offer your customers the latest fashion clothing with hassle free configuration of your online store.",
    image: {
      src: "/assets/fashion/fashion-industry-model.webp",
      alt: "Fashion model in an oversized white blazer carrying a black handbag",
      width: 516,
      height: 434,
    },
  },
  deliverables: {
    title: "What We Deliver",
    description:
      "UI/UX play a pivotal role in web design & development for the fashion industry. We deliver customized IT solutions coupled with dazzling UI/UX that increases customer retention and sales growth.",
    ariaLabel: "Fashion and apparel deliverables",
    items: [
      {
        title: "Website design tailored for fashion",
        description:
          "Our fashion-led web design service equips customers to see a magnified or zoomed-in version of the image. This helps users examine details more closely, such as textures, patterns, or small print, enhancing their shopping or viewing experience",
        icon: "/assets/industry-solutions/tailored-website-development.svg",
        iconAlt: "Website Design Tailored Icon",
        width: 68,
        height: 68,
      },
      {
        title: "Responsive Layouts",
        description:
          "Ensuring that the website looks great and functions seamlessly across all devices, including desktops, tablets, and mobile phones.",
        icon: "/assets/industry-solutions/responsive-layouts.svg",
        iconAlt: "Responsive Layouts Icon",
        width: 68,
        height: 68,
      },
      {
        title: "Leverage of technology",
        description:
          "When it comes to fashion, effective display of products is crucial. Our proven IT service for the fashion industry has helped our clients to efficiently manage supply chains, enhance customer engagement and to make insights into powerful data analytics and trend forecasting.",
        icon: "/assets/industry-solutions/fashion-technology.svg",
        iconAlt: "Leverage of technology Icon",
        width: 64,
        height: 64,
      },
      {
        title: "Engaging Features",
        description:
          "We add customer engaging features, responsive designs, product galleries and catalogs, customer reviews and ratings, lookbooks and many more to make your online store a perfect one!",
        icon: "/assets/industry-solutions/interactive-features.svg",
        iconAlt: "Interactive Features Icon",
        width: 62,
        height: 62,
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
    title: "Our Fashion & Apparel Portfolio",
    description:
      "Our Fashion and Apparel Portfolio is a reflection of our clients vision and their customers perception of fashion!",
    items: [
      {
        name: "SomewhereCo",
        category: "shopify",
        href: "https://thesomewhereco.com/",
        image: "/assets/fashion/portfolio/somewhereco-fashion.webp",
        imageAlt: "SomewhereCo model holding a green gingham cooler bag",
        width: 370,
        height: 422,
        platformLogo: "/assets/platforms/shopify-plus-white.svg",
        platformAlt: "Shopify Plus",
        platformWidth: 89,
        platformHeight: 26,
      },
      {
        name: "Donj Jewellery",
        category: "WordPress + Wocommerce",
        href: "https://donjjewellery.com/",
        image: "/assets/fashion/portfolio/donj-jewellery.webp",
        imageAlt: "Donj Jewellery model wearing a chain and wristwatch",
        width: 370,
        height: 422,
        platformLogo: "/assets/platforms/wordpress-woocommerce-white.svg",
        platformAlt: "WordPress and WooCommerce",
        platformWidth: 113,
        platformHeight: 29,
      },
      {
        name: "Bombay Shirt Company",
        category: "shopify",
        href: "https://www.bombayshirts.com/",
        image: "/assets/fashion/portfolio/bombay-shirt-company-fashion.webp",
        imageAlt: "Bombay Shirt Company model wearing a white shirt on a leather sofa",
        width: 370,
        height: 422,
        platformLogo: "/assets/platforms/shopify-white.svg",
        platformAlt: "Shopify",
        platformWidth: 89,
        platformHeight: 26,
      },
      {
        name: "Tropicfeel",
        category: "shopifyplus",
        href: "https://shop.tropicfeel.com/",
        image: "/assets/fashion/portfolio/tropicfeel-fashion.webp",
        imageAlt: "Tropicfeel traveller wearing a backpack among red torii gates",
        width: 370,
        height: 422,
        platformLogo: "/assets/platforms/shopify-plus-white.svg",
        platformAlt: "Shopify Plus",
        platformWidth: 89,
        platformHeight: 26,
      },
      {
        name: "Raen",
        category: "shopifyplus",
        href: "https://raen.com/",
        image: "/assets/fashion/portfolio/raen-eyewear-fashion.webp",
        imageAlt: "Raen eyewear model in an orange top and scarf riding a scooter",
        width: 370,
        height: 422,
        platformLogo: "/assets/platforms/shopify-plus-white.svg",
        platformAlt: "Shopify Plus",
        platformWidth: 89,
        platformHeight: 26,
      },
      {
        name: "TEGO Fit",
        category: "shopify",
        href: "https://tego.fit/",
        image: "/assets/fashion/portfolio/tego-fit-activewear.webp",
        imageAlt: "TEGO Fit runner wearing a black performance vest",
        width: 370,
        height: 422,
        platformLogo: "/assets/platforms/shopify-white.svg",
        platformAlt: "Shopify",
        platformWidth: 89,
        platformHeight: 26,
      },
    ],
  },
} as const satisfies IndustryPageContent;
