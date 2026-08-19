import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export const androidAppDevelopmentHero = {
  title: "Top Notch Custom Android App Development Services",
  description:
    "Dynamic Dreamz is India’s top Android App development company. We create innovative and user friendly apps that help your business grow. Whether you’re a Digital Agency, a Web Design Company, or an individual looking to develop an impactful app, our skilled Android App developers are ready to assist you.",
  ctaLabel: "REQUEST A QUOTE",
  ctaHref: "/request-quote",
} as const;

export const androidAppDevelopmentBrands: readonly ClientLogoSliderItem[] = [
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

export const androidAppDevelopmentServices = {
  heading: "What We Provide",
  description:
    "Check out our Android App development services that turn your ideas into robust mobile applications. Hire us and get started!",
  items: [
    {
      icon: "/assets/services/android-app-development/app-mockup-icon.svg",
      iconAlt: "app mockup icon",
      title: "Prototyping, Wireframes & Mockups",
      description:
        "We can design detailed prototypes, wireframes, and mockups based on your app requirements. It helps visualize the app’s flow and design before development begins, ensuring everything looks perfect.",
    },
    {
      icon: "/assets/services/android-app-development/native-android-app-icon.svg",
      iconAlt: "Native android app icon",
      title: "Native Android App Development",
      description:
        "Our developers specialize in creating native iOS apps that perform smoothly on iPhone, iPad, and Apple Watch. Our expert developers leverage programming languages like Objective C, Swift, and SwiftUI and follow industry best practices to ensure your app stands out in the competitive market.",
    },
    {
      icon: "/assets/services/android-app-development/material-design-icon.svg",
      iconAlt: "Material design icon",
      title: "Material Design Implementation",
      description:
        "We follow Google’s Material Design guidelines to create beautiful and intuitive app interfaces. Our designs focus on providing a great user experience, making your app easy to use and visually attractive.",
    },
    {
      icon: "/assets/services/android-app-development/app-testing-icon.svg",
      iconAlt: "App Testing and Quality Assurance Icon",
      title: "App Testing and Quality Assurance",
      description:
        "Before launching, we thoroughly test your app to ensure it is error free. Our quality assurance team checks for bugs, performance problems, and other issues, providing a smooth user experience.",
    },
    {
      icon: "/assets/services/android-app-development/google-play-store-icon.svg",
      iconAlt: "Google play store icon",
      title: "Google Play Store Deployment",
      description:
        "We handle the entire process of publishing your app on the Google Play Store. From creating the store listing to uploading the app, we ensure your app reaches your target audience.",
    },
    {
      icon: "/assets/shopify-theme-customization/services/theme-selection-and-installation.svg",
      iconAlt: "Maintenance and Support Icon",
      title: "App Maintenance and Support",
      description:
        "Our job doesn’t end with the app launch. We offer continuous maintenance and support to keep your app up to date and functional. We are here to help you should you encounter any difficulties.",
    },
    {
      icon: "/assets/services/android-app-development/existing-app-icon.svg",
      iconAlt: "Mobile App Icon",
      title: "Existing App Customization",
      description:
        "Do you own an existing Android app that needs some customization? We specialize in customizing and enhancing your current app to meet your evolving business needs. Whether adding new features, improving the user interface, or optimizing performance, we can do all!",
    },
    {
      icon: "/assets/hire-shopify-developers/icons/shopify-store-setup.svg",
      iconAlt: "Shopify App Icon",
      title: "Shopify App Development",
      description:
        "Are you looking to expand your Shopify store’s reach with a mobile app? Our team is best at developing custom Android apps for Shopify stores. We create apps that provide a smooth shopping experience, complete with all the functionalities of your online store.",
    },
    {
      icon: "/assets/services/android-app-development/hybrid-icon.svg",
      iconAlt: "hybrid icon",
      title: "Hybrid Android App Development",
      description:
        "Want to build an app that works on Android and other platforms? Our Hybrid Android App Development service is perfect for you. We use cutting edge programming languages like React Native and Flutter to create apps. This approach saves time and cost, allowing you to reach a broader audience with a single codebase.",
    },
  ],
  cta: {
    label: "LET ME GIVE YOU A HAND TO HELP YOU",
    href: "/request-quote",
    ariaLabel: "Dynamic Dreamz - LET ME GIVE YOU A HAND TO HELP YOU",
  },
} as const;

export const androidAppDevelopmentPortfolio = {
  heading: "Glimpses of Our Android App Developments",
  description:
    "Dynamic Dreamz isn't just about talk; we're about results. Explore a carefully curated <br> selection of our successful Android app projects.",
  category: "ANDROID APP DEVELOPMENT",
  platformMark: {
    src: "/assets/our-work/platforms/android-icon.svg",
    width: 39,
    height: 39,
  },
  items: [
    {
      name: "Llama – An App By CWRB",
      image: "/assets/our-work/projects/llama-an-app-by-cwrb.webp",
      imageAlt: "Llama – An App By CWRB",
      href: "https://play.google.com/store/apps/details?id=com.cwrb.app&hl=en&gl=US",
    },
    {
      name: "Bombay Shirt Company",
      image: "/assets/our-work/projects/bombay-shirt-company-app.webp",
      imageAlt: "Bombay Shirt Company",
      href: "https://play.google.com/store/apps/details?id=com.coffye.ndufju",
    },
    {
      name: "Bellavita Organic",
      image: "/assets/our-work/projects/bellavita-organic-app.webp",
      imageAlt: "Bellavita Organic",
      href: "https://play.google.com/store/apps/details?id=com.bellavita.shopifyapps",
    },
    {
      name: "Supertails",
      image: "/assets/our-work/projects/supertails-app.webp",
      imageAlt: "Supertails",
      href: "https://play.google.com/store/apps/details?id=com.coffye.dqiabm",
    },
  ],
} as const;

export const androidAppDevelopmentTestimonials = {
  heading: "Don't Just Take Our Word For It",
  description:
    "Discover how our Android app development services have made a difference for our clients and their businesses.",
  items: shopifyPlusAgencyTestimonials.items,
} as const;

export const androidAppDevelopmentFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What is Android app development?",
    answer:
      "Developing apps for Android powered devices is known as Android app development. It involves creating, testing, coding, and launching the application.",
  },
  {
    question: "Why choose Dynamic Dreamz for Android App development?",
    answer:
      "We offer unmatched expertise, extensive resources, and tailored solutions that drive growth for your business. Our team is passionate about creating powerful and user friendly apps.",
  },
  {
    question: "Can you develop apps for all Android devices?",
    answer:
      "Yes, we develop apps that work seamlessly on all Android devices, ensuring a consistent user experience.",
  },
  {
    question: "How much time does it take to create an Android application?",
    answer:
      "The development time depends on the complexity of the app. We’ll give you a detailed timeline during our first meeting.",
  },
  {
    question: "Will my app be secure?",
    answer:
      "Absolutely! We follow best practices to ensure your app is secure and protects user data.",
  },
  {
    question: "What is the cost of hiring an Android App developer from Dynamic Dreamz?",
    answer:
      "The cost of hiring a dedicated Android App developer from Dynamic Dreamz can depend on your project requirements and the experience and expertise of a developer.",
  },
];

export const androidAppDevelopmentCtaBanner = {
  heading: "Want us to help you with your online store?",
  ctaLabel: "REQUEST A QUOTE",
  ctaHref: "/request-quote",
} as const;
