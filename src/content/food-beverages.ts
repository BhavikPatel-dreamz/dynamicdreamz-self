import type { IndustryPageContent } from "@/types/industry";

export const foodBeveragesIndustryPage = {
  slug: "food-beverages",
  hero: {
    eyebrow: "industries",
    title: "Food & Beverages",
    descriptionBeforeBreak:
      "Dynamic Dreamz comprehensive IT services are tailored specifically to meet the needs of food",
    descriptionAfterBreak:
      "and beverage businesses, ensuring they stay ahead in an ever evolving landscape.",
    image: {
      src: "/assets/food-beverages/food-beverages-storefront-collage.webp",
      alt: "Industries Food & Beverages Image",
      width: 840,
      height: 434,
    },
  },
  brands: {
    ariaLabel: "Leading brands supported by Dynamic Dreamz",
  },
  solutions: {
    title: "IT Solutions for Food & Beverages Industry",
    subtitle: "We don't serve our clients only, we serve their customers as well.",
    description:
      "Food and beverages industry is one of the most dynamic industries in the world. Dynamic Dreamz' innovative IT solutions help you in overcoming the challenges faced in today's fast paced and competitive market.",
    image: {
      src: "/assets/food-beverages/food-beverages-burger.webp",
      alt: "IT Solutions for Food & Beverages Industry Image",
      width: 516,
      height: 434,
    },
  },
  deliverables: {
    title: "What We Deliver",
    description:
      "We offer IT solutions that best fit your business and demand. Using our extensive domain expertise of the food & beverages industry, we leverage cutting edge ecommerce technology to craft your online store.",
    ariaLabel: "Food and beverages deliverables",
    items: [
      {
        title: "Custom Website Design",
        description:
          "We offer tailored web developments that showcase your unique branding and aesthetics of food & beverages items of your store. For details check out our portfolio.",
        icon: "/assets/industry-solutions/custom-website-branding.svg",
        iconAlt: "Custom Website Design Icon",
        width: 68,
        height: 68,
      },
      {
        title: "Responsive Layouts",
        description:
          "Our UI provides stunning visualization of the texture and color of your food and beverages items. Our responsive layouts give the same experiences to your customers",
        icon: "/assets/industry-solutions/responsive-layouts.svg",
        iconAlt: "Responsive Layouts Icon",
        width: 68,
        height: 68,
      },
      {
        title: "Online Reservation System",
        description:
          "Our user friendly ORS for restaurants, cafes and bars allows hassle free reservation facility to your customers.",
        icon: "/assets/industry-solutions/online-reservation-system.svg",
        iconAlt: "Online Reservation System Icon",
        width: 64,
        height: 64,
      },
      {
        title: "Interactive Features",
        description:
          "We add customer engaging interactive features to your online store that results in increase in customer foot fall, customer retention and growth in business.",
        icon: "/assets/industry-solutions/interactive-features.svg",
        iconAlt: "Interactive Features Icon",
        width: 62,
        height: 62,
      },
      {
        title: "Social Media Integration",
        description:
          "Food & beverages industry requires posting regular updates on social media. Our seamless integration with social media platforms enables clients easy sharing of content, promotions and customers' review.",
        icon: "/assets/industry-solutions/social-media-integration.svg",
        iconAlt: "Social Media Integration Icon",
        width: 62,
        height: 62,
      },
    ],
  },
  portfolio: {
    title: "Our Food & Beverages Portfolio",
    description:
      "Our portfolio reflects how rich and extensive domain knowledge we have gathered over the years.",
    items: [
      {
        name: "nekter juice bar",
        category: "shopify",
        href: "https://www.nekterjuicebar.com/",
        image: "/assets/food-beverages/portfolio/nekter-juice-bar.webp",
        imageAlt: "Woman carrying a turquoise Nekter Juice Bar bag and bottled drink",
        width: 370,
        height: 422,
        platformLogo: "/assets/platforms/shopify-white.svg",
        platformAlt: "Shopify",
        platformWidth: 89,
        platformHeight: 26,
      },
      {
        name: "Chinuki",
        category: "shopify",
        href: "https://www.chinuki.de/",
        image: "/assets/food-beverages/portfolio/chinuki-meals.webp",
        imageAlt: "Two children enjoying Chinuki meals at a table",
        width: 369,
        height: 422,
        platformLogo: "/assets/platforms/shopify-white.svg",
        platformAlt: "Shopify",
        platformWidth: 89,
        platformHeight: 26,
      },
      {
        name: "Wine Moments",
        category: "shopify",
        href: "https://winemoments.com/",
        image: "/assets/food-beverages/portfolio/wine-moments.webp",
        imageAlt: "Wine Moments bottle served with a shared hot pot meal",
        width: 369,
        height: 422,
        platformLogo: "/assets/platforms/shopify-white.svg",
        platformAlt: "Shopify",
        platformWidth: 89,
        platformHeight: 26,
      },
      {
        name: "Deliciou",
        category: "shopify",
        href: "https://www.deliciou.com/",
        image: "/assets/food-beverages/portfolio/deliciou-products.webp",
        imageAlt: "Deliciou garlic seasoning bottles beside toasted bread",
        width: 369,
        height: 422,
        platformLogo: "/assets/platforms/shopify-white.svg",
        platformAlt: "Shopify",
        platformWidth: 89,
        platformHeight: 26,
      },
      {
        name: "Joburg Meats",
        category: "shopify",
        href: "https://joburgmeats.com/",
        image: "/assets/food-beverages/portfolio/joburg-meats.webp",
        imageAlt: "Joburg Meats beef biltong package on a colorful patterned background",
        width: 369,
        height: 422,
        platformLogo: "/assets/platforms/shopify-white.svg",
        platformAlt: "Shopify",
        platformWidth: 89,
        platformHeight: 26,
      },
      {
        name: "Banchharams",
        category: "Magento",
        href: "https://banchharams.com/",
        image: "/assets/food-beverages/portfolio/banchharams-sweets.webp",
        imageAlt: "Banchharams Bengali sweets arranged in a leaf-lined bowl",
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
