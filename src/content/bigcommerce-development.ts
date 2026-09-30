import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { BigCommerceIconName } from "@/components/sections/bigcommerce/bigcommerce-icons";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export const bigCommerceDevelopmentHero = {
  eyebrows: ["ESTABLISHED IN 2006"],
  title: "BigCommerce Development Company",
  description:
    "Dynamic Dreamz is the best BigCommerce development company, focusing on creating high performing eCommerce stores. Our skilled development team offers custom BigCommerce stores to meet your business requirements. These stores ensure your clients get a smooth online buying experience and help you profitably achieve your eCommerce store objectives.",
  ctaLabel: "REQUEST A QUOTE",
  ctaHref: "/request-quote",
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
    slides: [
      {
        src: "/assets/services/bigcommerce-development/hero/slide-knobs.webp",
        alt: "Knobs website screenshot",
        width: 800,
        height: 1190,
      },
      {
        src: "/assets/services/bigcommerce-development/hero/slide-maple-syrup.webp",
        alt: "Maple Syrup website screenshot",
        width: 800,
        height: 1190,
      },
      {
        src: "/assets/services/bigcommerce-development/hero/slide-milestones.webp",
        alt: "Milestones Company website screenshot",
        width: 800,
        height: 1190,
      },
      {
        src: "/assets/services/bigcommerce-development/hero/slide-gotcha.webp",
        alt: "Gotcha Covered website screenshot",
        width: 800,
        height: 1190,
      },
    ],
    topBadge: {
      src: "/assets/services/bigcommerce-development/hero/bigcommerce-rectangle-logo.webp",
      alt: "BigCommerce Logo",
      width: 173,
      height: 69,
    },
    bottomBadge: {
      src: "/assets/services/bigcommerce-development/hero/bigcommerce-square-logo.webp",
      alt: "BigCommerce Icon",
      width: 130,
      height: 130,
    },
  },
} as const;

export const bigCommerceDevelopmentBrandsHeading = "Trusted by Leading Brands";

export const bigCommerceDevelopmentBrands: readonly ClientLogoSliderItem[] = [
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
    alt: "Popclub Logo",
    width: 145,
    height: 35,
  },
  {
    src: "/assets/clients/sri-sri-tattva.svg",
    href: "https://www.srisritattva.com/",
    alt: "SriSri Tattva Logo",
    width: 140,
    height: 41,
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
    width: 130,
    height: 35,
  },
  {
    src: "/assets/clients/royce-chocolate.svg",
    href: "https://royceindia.com/",
    alt: "Royce chocolate logo",
    width: 140,
    height: 30,
  },
  {
    src: "/assets/clients/tego.svg",
    href: "https://tego.fit/",
    alt: "tego logo",
    width: 110,
    height: 28,
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
    width: 140,
    height: 30,
  },
];

export const bigCommerceDevelopmentIntro = {
  heading: "Start Your eCommerce Business with <br> BigCommerce Development Company",
  paragraphs: [
    "Launching your eCommerce business with a reliable BigCommerce development company like Dynamic Dreamz can set you on the path to success. We help you to own user friendly, engaging, and fully functional online stores with BigCommerce solutions based on your business requirements.",
    "Our expert team handles everything to ensure your store performs and sells better. With the help of Dynamic Dreamz, you can have time to focus on expanding your business. At the same time, we manage technical factors, offering you a hassle free experience and continuous support to maintain your BigCommerce store running smoothly.",
  ],
} as const;

export type BigCommerceServiceItem = {
  iconKey: BigCommerceIconName;
  title: string;
  description: string;
};

export const bigCommerceDevelopmentServices = {
  eyebrow: "Our Services",
  heading: "Our BigCommerce Development Services",
  description:
    "As a BigCommerce Development Company, We offer end to end solutions for your eCommerce needs, including custom development, theme customization, seamless integrations, and performance optimization.",
  items: [
    {
      iconKey: "theme-customization",
      title: "BigCommerce Theme Customization Service",
      description:
        "We provide comprehensive BigCommerce theme customization. Our expert BigCommerce developers customize your theme, such as CornerStone, Stencil, etc., per your requirements and convert your store into a unique, brand aligned shopping destination. We seamlessly configure checkout and payment customization based on the region and currency.",
    },
    {
      iconKey: "app-configuration",
      title: "BigCommerce App Configuration Service",
      description:
        "We expertly set up and integrate apps to enhance functionality, improve user experience, and streamline operations. Trust our expert BigCommerce developers to optimize your store with the right apps, driving efficiency and growth.",
    },
    {
      iconKey: "private-app",
      title: "Private App Creation",
      description:
        "Our BigCommerce private app creation service delivers bespoke solutions tailored to your precise business requirements. We design and develop secure, high performance private apps that integrate seamlessly with your store, enhancing its capabilities.",
    },
    {
      iconKey: "figma-to-bigcommerce",
      title: "Figma to BigCommerce Conversion Service",
      description:
        "Our Figma to BigCommerce conversion service converts your design visions into reality. Our BigCommerce expert designers transform your Figma designs into fully functional, responsive BigCommerce themes, ensuring pixel perfect accuracy and seamless performance. Enhance your online store with our expert conversion service, delivering a visually stunning and user friendly eCommerce experience.",
    },
    {
      iconKey: "maintenance",
      title: "BigCommerce Maintenance Service",
      description:
        "Our BigCommerce maintenance service ensures your online store runs smoothly and efficiently. We provide regular updates, performance optimization, and troubleshooting support to keep your eCommerce platform in peak condition. Trust us to handle all technical aspects, allowing you to focus on growing your business without downtime or issues.",
    },
  ] as const satisfies readonly BigCommerceServiceItem[],
} as const;

export type BigCommerceWhyChooseBox = {
  iconKey: BigCommerceIconName;
  title: string;
  description: string;
};

export const bigCommerceWhyChoosePlatform = {
  eyebrow: "Why BigCommerce",
  heading: "Why Choose BigCommerce for Your Business",
  description:
    "BigCommerce is a robust eCommerce platform that allows companies to set up, manage, and grow their online stores. It offers a fantastic option for anyone who wants to start or grow an eCommerce company. Here are some pointers to choose BigCommerce:",
  boxes: [
    {
      iconKey: "ease-of-use",
      title: "Ease of Use",
      description:
        "BigCommerce is user friendly, making it easy to set up and manage an online store without technical skills.",
    },
    {
      iconKey: "scalable-solutions",
      title: "Scalable Solutions",
      description:
        "As your business expands, BigCommerce rises with you, offering adjustable plans that adapt to your needs without compromising performance.",
    },
    {
      iconKey: "seo-friendly",
      title: "SEO Friendly",
      description:
        "The platform is built with SEO in mind, helping your store rank higher in search results and attract more customers.",
    },
    {
      iconKey: "secure-and-reliable",
      title: "Secure and Reliable",
      description:
        "With built in safety features and reliable hosting, BigCommerce guarantees your store is safe and always available to your customers.",
    },
    {
      iconKey: "customizable-design",
      title: "Customizable Design",
      description:
        "BigCommerce offers a wide range of customizable themes, allowing you to create a unique and professional looking store that matches your brand.",
    },
  ] as const satisfies readonly BigCommerceWhyChooseBox[],
} as const;

export const bigCommerceDevelopmentProcess = {
  eyebrow: "How We Work",
  heading: "Our BigCommerce Development Process",
  description:
    "Dynamic Dreamz , the best BigCommerce development company follows smoothly from start to finish, ensuring the BigCommerce store is ready for success. We follow a structured approach to deliver a high quality online store tailored to your needs.",
  steps: [
    {
      step: "Step 01",
      title: "Initial Consultation",
      description:
        "First, we understand your requirements, goals, and target audience. This talk helps us understand your requirements so we can create a development plan that aligns with your vision.",
    },
    {
      step: "Step 02",
      title: "Planning and Strategy",
      description:
        "We outline the project's roadmap, including timelines, features, and design components. We develop a strategy that concentrates on achieving your business objectives while keeping the user experience in mind.",
    },
    {
      step: "Step 03",
      title: "Development and Implementation",
      description:
        "Our expert developers are developing your BigCommerce store with all the features and functionalities you require. We ensure the design is responsive, user friendly, and aligns with your brand.",
    },
    {
      step: "Step 04",
      title: "Testing, Launch, and Support",
      description:
        "Before going live, we thoroughly test your store for bugs or issues. We check functionality, compatibility, and performance to ensure a smooth launch. Our support doesn't end at launch. We offer maintenance and support to keep your store running smoothly.",
    },
  ],
} as const;

export const bigCommerceWhyChooseAgency = {
  eyebrow: "Why Dynamic Dreamz",
  heading: "Why Choose Dynamic Dreamz",
  description:
    "At Dynamic Dreamz, One of the best BigCommerce Development Company, we are proud of ourselves for providing top notch BigCommerce solutions tailored to fulfill your unique business requirements. With years of experience, skills, and dedication to excellence, we ensure your WordPress website is visually attractive, positively functional, secure, and optimized for performance.",
  boxes: [
    {
      iconKey: "expertise-in-custom-development",
      title: "Expertise in Custom Development",
      description:
        "We specialize in developing custom BigCommerce websites that suit your business goals. Whether it's a custom plugin, custom theme, or complex integration, our WordPress developers have the skills to make your dream come true.",
    },
    {
      iconKey: "focus-on-security",
      title: "Focus on Security",
      description:
        "Your website's security is our top priority at Dynamic Dreamz. We use robust security standards to safeguard your BigCommerce  website from vulnerabilities and threats, securing your data and website both remain secure.",
    },
    {
      iconKey: "commitment-to-quality",
      title: "Commitment to Quality",
      description:
        "We promise that all of our work has a high standard. Our experts follow the best practices in coding & design and build BigCommerce  solutions that look attractive, reliable, and efficient.",
    },
    {
      iconKey: "timely-delivery",
      title: "Timely Delivery",
      description:
        "Our developers are skilled enough to finish the project within the deadlines. Our project management process completes your project on time without sacrificing quality and functionality.",
    },
    {
      iconKey: "transparent-communication",
      title: "Transparent Communication",
      description:
        "For any project to be successful, communication must be clear and constant. We ensure that your expectations are satisfied and that we consider the input you provide by keeping you updated at every stage of the development process.",
    },
    {
      iconKey: "ongoing-support-and-maintenance",
      title: "Ongoing Support and Maintenance",
      description:
        "As the best BigCommerce Development Company, our responsibility with your website doesn't end with the launch of the website. We offer support and maintenance services to keep your WordPress website safe, up to date, and performing at its peak.",
    },
  ] as const satisfies readonly BigCommerceWhyChooseBox[],
} as const;

export const bigCommerceDevelopmentPortfolio = {
  eyebrow: "Portfolio",
  heading: "Insights into Our BigCommerce Development",
  description:
    "Delving into our BigCommerce Development, we unveil a tapestry of expertise <br> and innovation. Our meticulous approach crafts customer centric eCommerce <br> solutions, integrating design and functionality.",
  category: "BIGCOMMERCE",
  platformMark: {
    src: "/assets/our-work/platforms/big-commerce-icon.svg",
    width: 89,
    height: 26,
  },
  ctaLabel: "View our work",
  ctaHref: "/our-work",
  items: [
    {
      name: "Kayfi",
      image: "/assets/our-work/projects/kayfi.webp",
      imageAlt: "Kayfi Image",
      href: "https://kayfi.com/",
    },
    {
      name: "Maple Syrup",
      image: "/assets/our-work/projects/maple-syrup.webp",
      imageAlt: "Maple Syrup Image",
      href: "https://www.maplesyrupworld.com/",
    },
    {
      name: "Country & Stable",
      image: "/assets/our-work/projects/country-and-stable.webp",
      imageAlt: "Country & Stable Image",
      href: "https://countryandstable.co.uk/",
    },
    {
      name: "Miles Stones Company",
      image: "/assets/our-work/projects/milestones-company.webp",
      imageAlt: "Miles Stones Company Image",
      href: "https://milestonescompany.com/",
    },
  ],
} as const;

export const bigCommerceDevelopmentTestimonials = {
  eyebrow: "Client Stories",
  heading: "Don't Just Take Our Word For It",
  description:
    "We have faith in our work, but what truly matters is the outcomes we serve our clients. <br> Happy clients make happy stories: Check out how our services empower them to evolve.",
  items: shopifyPlusAgencyTestimonials.items,
} as const;

export const bigCommerceDevelopmentFaqs: readonly FaqAccordionItem[] = [
  {
    question: "Can you transfer my existing store to BigCommerce?",
    answer:
      "Yes, for sure! We can help you to migrate your current store to BigCommerce. Our experts will handle the migration process, which includes moving your products, customer data, and orders. At this time, we ensure that everything runs smoothly without any data loss or downtime.",
  },
  {
    question:
      "How much will it cost to develop a BigCommerce store by a BigCommerce Development Company?",
    answer:
      "The cost of creating a BigCommerce store depends on your requirements and the complexity. If you want a detailed quotation based on your budget, contact us so one of our experts can explain the whole quotation.",
  },
  {
    question: "How do I get started with your BigCommerce development services?",
    answer:
      "You can contact us using our website or give us a call. We can arrange one meeting to discuss your needs and goals. From there, we’ll guide you through the process and create a plan to start your project.",
  },
  {
    question:
      "How long does a BigCommerce development Company take to deliver the live project?",
    answer:
      "The time to build a BigCommerce store depends on the project’s size and complexity. Typically, a standard store can take a few weeks to months. We can provide a more accurate timeline based on your requirements during our initial consultation.",
  },
  {
    question:
      "How will I monitor the progress of my BigCommerce website development project?",
    answer:
      "We keep you updated on every step of the development process. You will receive regular updates, and we can set up meetings to discuss any updates or changes.",
  },
  {
    question: "Does Dynamic Dreamz provide post development support?",
    answer:
      "Yes, Dynamic Dreamz, a BigCommerce development Agency offers post development support to ensure your BigCommerce store continues to run smoothly after launch. We provide ongoing maintenance, updates, and support to help you manage your store and optimize for the best performance.",
  },
];
