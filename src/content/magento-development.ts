import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export const magentoDevelopmentHero = {
  title: "Your Go-To Partner for <br> Magento Development",
  description:
    "Dynamic Dreamz is a top-notch Magento development company in India. We specialize in building tailored, scalable, and fast Magento stores for businesses of all sizes.",
  ctaLabel: "Request a Quote",
  ctaHref: "/request-quote",
} as const;

export const magentoDevelopmentBrands: readonly ClientLogoSliderItem[] = [
  {
    src: "/assets/clients/supertails.svg",
    href: "https://supertails.com/",
    alt: "Supper Tails Logo",
    width: 164,
    height: 41,
  },
  {
    src: "/assets/clients/eleven-eleven.svg",
    href: "https://11-11.in/",
    alt: "Eleven Eleven",
    width: 145,
    height: 20,
  },
  {
    src: "/assets/clients/bella-vita.svg",
    href: "https://bellavitaorganic.com/",
    alt: "bellavita logo",
    width: 166,
    height: 24,
  },
  {
    src: "/assets/clients/bombay-shirt-company.svg",
    href: "https://www.bombayshirts.com/",
    alt: "Bombay Shirt Company",
    width: 204,
    height: 26,
  },
  {
    src: "/assets/clients/popclub.svg",
    href: "https://popclub.co/",
    alt: "Popclub",
    width: 65,
    height: 41,
  },
  {
    src: "/assets/clients/sri-sri-tattva.svg",
    href: "https://www.srisritattva.com/",
    alt: "SriSri Tattva Logo",
    width: 106,
    height: 40,
  },
  {
    src: "/assets/clients/tropicfeel.svg",
    href: "https://shop.tropicfeel.com/",
    alt: "tropicfeel logo",
    width: 150,
    height: 32,
  },
  {
    src: "/assets/clients/renee.svg",
    href: "https://www.reneecosmetics.in/",
    alt: "Renee logo",
    width: 93,
    height: 30,
  },
  {
    src: "/assets/clients/royce-chocolate.svg",
    href: "https://royceindia.com/",
    alt: "Royce chocolate logo",
    width: 132,
    height: 38,
  },
  {
    src: "/assets/clients/tego.svg",
    href: "https://tego.fit/",
    alt: "tego logo",
    width: 101,
    height: 40,
  },
  {
    src: "/assets/clients/nelter.svg",
    href: "https://www.nekterjuicebar.com/",
    alt: "nekter-colored",
    width: 66,
    height: 64,
  },
  {
    src: "/assets/clients/rare-rabbit.svg",
    href: "https://thehouseofrare.com/",
    alt: "Rare Rabbit Logo",
    width: 122,
    height: 84,
  },
];

export const magentoDevelopmentServices = {
  heading: "What We Provide",
  description:
    "Explore our range of Magento development services. From custom store creation to ongoing support, we’ve got you covered.",
  items: [
    {
      icon: "/assets/services/magento-development/custom-store-icon.svg",
      iconAlt: "Cart Icon",
      title: "Custom Store Solutions",
      description:
        "Dynamic Dremaz helps you create Magento stores that are just right for your business. We provide solutions tailored to your needs, from establishing your online store to including unique features.",
    },
    {
      icon: "/assets/hire-shopify-developers/icons/shopify-migration.svg",
      iconAlt: "Migration Icon",
      title: "Easy Migration",
      description:
        "Want to transfer your store from another platform to Magento? We make the transition easy and worry free, ensuring all your data and products move smoothly.",
    },
    {
      icon: "/assets/services/magento-development/speed-optimization-icon.svg",
      iconAlt: "speed optimisation icon",
      title: "Speed Optimization",
      description:
        "We focus on making your Magento store faster. Faster load times improve user experience and increase your chances of turning visitors into customers.",
    },
    {
      icon: "/assets/shopify-theme-customization/services/responsive-design.svg",
      iconAlt: "custom themes icon",
      title: "Custom Themes Development",
      description:
        "Stand out with a custom designed Magento theme. We create themes that match your brand and make your store look stunning.",
    },
    {
      icon: "/assets/services/magento-development/module-icon.svg",
      iconAlt: "Module Development Icon",
      title: "Custom Modules",
      description:
        "Need extra functionalities? We develop custom Magento modules to enhance your store’s performance and user experience.",
    },
    {
      icon: "/assets/services/magento-development/ongoing-support-icon.svg",
      iconAlt: "Ongoing Support Icon",
      title: "Ongoing Support",
      description:
        "Our work and support don’t stop at the store launch. We offer continuous maintenance and support to keep your Magento store running smoothly and address any issues.",
    },
  ],
  cta: {
    label: "Let me give you a hand to help you",
    href: "/request-quote",
    ariaLabel: "Dynamic Dreamz - Let me give you a hand to help you",
  },
} as const;

export const magentoDevelopmentPortfolio = {
  heading: "See Our Magento Work in Action",
  description:
    "We’re proud of what we do. Check out some of our successful Magento projects to see <br> how we’ve helped businesses like yours.",
  category: "Magento",
  platformMark: {
    src: "/assets/platforms/magento-white.svg",
    width: 89,
    height: 26,
  },
  items: [
    {
      name: "Maxi Cosi",
      image: "/assets/our-work/projects/maxi-cosi.webp",
      imageAlt: "Maxi Cosi",
      href: "https://www.maxi-cosi.com.au/",
    },
    {
      name: "Caves Santa Cruz",
      image: "/assets/our-work/projects/caves-santa-cruz.webp",
      imageAlt: "Caves Santa Cruz",
      href: "https://www.cavessantacruz.com.br/",
    },
    {
      name: "City Circuit",
      image: "/assets/our-work/projects/city-circuit.webp",
      imageAlt: "City Circuit",
      href: "https://circuitcity.com/",
    },
    {
      name: "Sambazon",
      image: "/assets/our-work/projects/sambazon.webp",
      imageAlt: "Sambazon",
      href: "https://www.sambazon.com/",
    },
    {
      name: "Chers",
      image: "/assets/our-work/projects/chers.webp",
      imageAlt: "Chers",
      href: "https://chers.com/",
    },
    {
      name: "United Cheer Apparel",
      image: "/assets/our-work/projects/united-cheer-apparel.webp",
      imageAlt: "United Cheer Apparel",
      href: "https://unitedcheerapparel.com/",
    },
  ],
} as const;

export const magentoDevelopmentTestimonials = {
  heading: "Hear from Our Clients",
  description:
    "Don’t just take our word for it. Discover how our Magento development services have <br> made a difference for our clients and their businesses.",
  items: shopifyPlusAgencyTestimonials.items,
} as const;

export const magentoDevelopmentFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What does Magento development involve?",
    answer:
      "Magento development is about creating and managing online stores using the Magento platform. It includes everything from design and customization to optimization.",
  },
  {
    question: "Why should I pick Dynamic Dreamz for my Magento store requirements?",
    answer:
      "We offer expert Magento development services with customized solutions to fit your business perfectly. We focus on delivering a store that performs well and meets your goals.",
  },
  {
    question: "Can you help me move my store to Magento?",
    answer:
      "Yes, of course! We handle all aspects of migrating your existing store to Magento, ensuring a smooth transition without data loss.",
  },
  {
    question: "What are custom themes, and why are they important?",
    answer:
      "Custom themes are unique designs for your Magento store that help it stand out and align with your brand. They improve the look and feel of your online store.",
  },
  {
    question: "Will my Magento store perform well?",
    answer:
      "Yes, we focus on optimizing your store for speed and efficiency, providing a good user experience.",
  },
  {
    question: "Do you offer support after my store is live?",
    answer:
      "Absolutely! We provide ongoing support and maintenance to ensure your store stays updated and runs smoothly.",
  },
  {
    question: "How much will Magento development cost?",
    answer:
      "The cost varies based on your project requirements. We offer competitive rates and will give you a detailed quote once we discuss your needs.",
  },
];

export const magentoDevelopmentCtaBanner = {
  heading: "Want us to help you with your online store?",
  ctaLabel: "request a quote",
  ctaHref: "/request-quote",
} as const;
