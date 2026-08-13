import { getClientLogo } from "@/content/home";

export const beautyHero = {
  eyebrow: "industries",
  title: "Beauty & Cosmetics",
  descriptionBeforeBreak: "Unlock the growth of your beauty & cosmetics business with",
  descriptionAfterBreak: "Dyamic Dreamz",
  image: {
    src: "/assets/beauty-cosmetics/beauty-storefront-collage.webp",
    alt: "Beauty and cosmetics ecommerce storefronts for Perfect Locks, Lilac St. and CocoDRY",
    width: 840,
    height: 434,
  },
} as const;

const brandLinks = [
  { src: "/assets/clients/supertails.svg", href: "https://supertails.com/" },
  { src: "/assets/clients/eleven-eleven.svg", href: "https://11-11.in/" },
  { src: "/assets/clients/bella-vita.svg", href: "https://bellavitaorganic.com/" },
  { src: "/assets/clients/bombay-shirt-company.svg", href: "https://www.bombayshirts.com/" },
  { src: "/assets/clients/popclub.svg", href: "https://popclub.co/" },
  { src: "/assets/clients/sri-sri-tattva.svg", href: "https://www.srisritattva.com/" },
  { src: "/assets/clients/tropicfeel.svg", href: "https://shop.tropicfeel.com/" },
  { src: "/assets/clients/renee.svg", href: "https://www.reneecosmetics.in/" },
  { src: "/assets/clients/royce-chocolate.svg", href: "https://royceindia.com/" },
  { src: "/assets/clients/tego.svg", href: "https://tego.fit/" },
  { src: "/assets/clients/nelter.svg", href: "https://www.nekterjuicebar.com/" },
  { src: "/assets/clients/rare-rabbit.svg", href: "https://thehouseofrare.com/" },
] as const;

export const beautyBrandLogos = brandLinks.map(({ src, href }) => ({
  ...getClientLogo(src),
  ...(src.endsWith("nelter.svg") ? { alt: "Nékter Juice Bar logo" } : {}),
  href,
}));

export const beautyIndustrySolutions = {
  title: "IT Solutions for Beauty & Cosmetics Industry",
  subtitle: "Let us assist you and turn your imagination into reality.",
  description:
    "The beauty and cosmetics industry is a dynamic sector encompassing a wide range of products designed to enhance personal appearance and skincare. Here the outcome of the application of beauty products matters the most. We at Dynamic Dreamz, use Shopify eCommerce platform to showcase ‘Before’ and ‘After’ effects of the beauty products.",
  image: {
    src: "/assets/beauty-cosmetics/makeup-application.webp",
    alt: "Makeup artist applying eye makeup for a beauty ecommerce industry section",
    width: 516,
    height: 434,
  },
} as const;

export const beautyDeliverables = {
  title: "What We Deliver",
  description:
    "Our solutions for the beauty and cosmetics industry are bundled with personalized marketing tools, virtual try ons, and augmented reality experiences to enhance consumer engagement.",
  items: [
    {
      title: "Custom Website Design",
      description:
        "Based on your products, we customize the website. Our tailored layouts precisely reflect the quality of the products that you sell.",
      icon: "/assets/industry-solutions/custom-website-design.svg",
      iconAlt: "Custom Website Design Icon",
      width: 68,
      height: 68,
    },
    {
      title: "Appointment and Booking System",
      description:
        "We develop and configure an appointment booking system that allows customers to book salon and spa appointments online. It can send reminders to reduce no shows.",
      icon: "/assets/industry-solutions/appointment-booking.svg",
      iconAlt: "Online Reservation System Icon",
      width: 64,
      height: 64,
    },
    {
      title: "Interactive Features",
      description:
        "We create feature rich interactive elements that leave lasting impressions on customers. We employ virtual try ons and augmented reality experiences to engage customers.",
      icon: "/assets/industry-solutions/interactive-features.svg",
      iconAlt: "Interactive Features Icon",
      width: 62,
      height: 62,
    },
    {
      title: "Responsive Layouts",
      description:
        "We develop attention grabbing online stores that function seamlessly across all devices, including desktops, tablets and cell phones.",
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
} as const;

export const beautyPortfolio = {
  title: "Our Beauty & Cosmetics Portfolio",
  description:
    "Have a look at our portfolio, how we ‘beautified’ our clients online stores with our seamless IT solutions!",
  items: [
    {
      name: "Ranavat",
      category: "shopifyplus",
      href: "https://www.ranavat.com/",
      image: "/assets/beauty-cosmetics/portfolio/ranavat-skincare.webp",
      imageAlt: "Ranavat skincare model applying brightening saffron serum",
      width: 370,
      height: 422,
      platformLogo: "/assets/platforms/shopify-plus-white.svg",
      platformAlt: "Shopify Plus",
      platformWidth: 89,
      platformHeight: 26,
    },
    {
      name: "Midnight Cosmetics",
      category: "shopify",
      href: "https://midnightcosmetics.co/",
      image: "/assets/beauty-cosmetics/portfolio/midnight-cosmetics-skincare.webp",
      imageAlt: "Midnight Cosmetics skincare model outdoors",
      width: 370,
      height: 422,
      platformLogo: "/assets/platforms/shopify-white.svg",
      platformAlt: "Shopify",
      platformWidth: 89,
      platformHeight: 26,
    },
    {
      name: "Conserving Beauty",
      category: "shopify",
      href: "https://www.conservingbeauty.com/",
      image: "/assets/beauty-cosmetics/portfolio/conserving-beauty-products.webp",
      imageAlt: "Conserving Beauty dissolvable makeup-removal products",
      width: 370,
      height: 422,
      platformLogo: "/assets/platforms/shopify-white.svg",
      platformAlt: "Shopify",
      platformWidth: 89,
      platformHeight: 26,
    },
    {
      name: "Lilac ST.",
      category: "shopifyplus",
      href: "https://lilacst.com/",
      image: "/assets/beauty-cosmetics/portfolio/lilac-st-cosmetics.webp",
      imageAlt: "Lilac St. cosmetics model against a red background",
      width: 369,
      height: 422,
      platformLogo: "/assets/platforms/shopify-plus-white.svg",
      platformAlt: "Shopify Plus",
      platformWidth: 89,
      platformHeight: 26,
    },
    {
      name: "Perfect Locks",
      category: "shopify",
      href: "https://www.perfectlocks.com/",
      image: "/assets/beauty-cosmetics/portfolio/perfect-locks-hair.webp",
      imageAlt: "Perfect Locks model holding a dark hair extension",
      width: 369,
      height: 422,
      platformLogo: "/assets/platforms/shopify-white.svg",
      platformAlt: "Shopify",
      platformWidth: 89,
      platformHeight: 26,
    },
    {
      name: "Luxxi Nails",
      category: "shopify",
      href: "https://luxxinails.com/",
      image: "/assets/beauty-cosmetics/portfolio/luxxi-nails.webp",
      imageAlt: "Luxxi Nails silver manicure against a blue sky",
      width: 369,
      height: 422,
      platformLogo: "/assets/platforms/shopify-white.svg",
      platformAlt: "Shopify",
      platformWidth: 89,
      platformHeight: 26,
    },
  ],
} as const;
