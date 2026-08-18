import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

export const shopifyPlusAgencyHero = {
  title: "Shopify Plus Agency",
  description:
    "Our Shopify Plus Agency provides a robust, scalable eCommerce platform designed for high-growth businesses. It offers advanced customization, checkout extensibility, automation, B2B functionality, and reliable support, enabling companies to drive significant growth. We also provide advanced theme customization for B2B, providing enterprises with the tools to manage wholesale operations efficiently.",
  ctaLabel: "request a quote",
  ctaHref: "/request-quote",
} as const;

export type ReviewPlatform = {
  name: string;
  backgroundColor: string;
  wordmark: string;
  wordmarkAlt: string;
  wordmarkWidth: number;
  wordmarkHeight: number;
  starPaths: "red" | "blue";
  starFill: string;
  rating: string;
  pillLabel: string;
  pillHref: string;
  pillColor: string;
  pillBorderWidth: number;
};

export const shopifyPlusAgencyReviews: readonly ReviewPlatform[] = [
  {
    name: "Clutch",
    backgroundColor: "#F8DDD7",
    wordmark: "/assets/shopify-plus-agency/reviews/clutch-wordmark.svg",
    wordmarkAlt: "Clutch",
    wordmarkWidth: 205,
    wordmarkHeight: 57,
    starPaths: "red",
    starFill: "#FF0000",
    rating: "5.0 RATINGS",
    pillLabel: "132 REVIEWS",
    pillHref: "https://clutch.co/profile/dynamic-dreamz",
    pillColor: "#FF0000",
    pillBorderWidth: 1.577,
  },
  {
    name: "Upwork",
    backgroundColor: "rgba(227, 241, 213, 1)",
    wordmark: "/assets/shopify-plus-agency/reviews/upwork-wordmark.svg",
    wordmarkAlt: "Upwork",
    wordmarkWidth: 205,
    wordmarkHeight: 70,
    starPaths: "red",
    starFill: "#6FDA44",
    rating: "5.0 RATINGS",
    pillLabel: "2000+ REVIEWS",
    pillHref: "https://www.upwork.com/agencies/dynamicdreamz/",
    pillColor: "#6FDA44",
    pillBorderWidth: 1.3,
  },
  {
    name: "GoodFirms",
    backgroundColor: "rgba(216, 229, 255, 1)",
    wordmark: "/assets/shopify-plus-agency/reviews/goodfirms-wordmark.svg",
    wordmarkAlt: "GoodFirms",
    wordmarkWidth: 223,
    wordmarkHeight: 41,
    starPaths: "blue",
    starFill: "#3A7AF3",
    rating: "5.0 RATINGS",
    pillLabel: "72 REVIEWS",
    pillHref: "https://www.goodfirms.co/company/dynamic-dreamz",
    pillColor: "#3A7AF3",
    pillBorderWidth: 1.3,
  },
] as const;

export const shopifyPlusAgencyServices = {
  heading: "Shopify Plus Agency Services",
  description: "Shopify experts are here to guide you through every step of your eCommerce journey.",
  items: [
    {
      icon: "/assets/shopify-plus-agency/icons/shopify-plus-icon.svg",

      iconAlt: "shopify plus icon",
      title: "Shopify Plus Store Setup",
      description:
        "Our expert Shopify Plus store setup service involves leveraging advanced tools for customization, automation, and integration. We seamlessly configure checkout extensibility, product launch & flash promotion using Launchpad, Shopify's flash selling tool. It includes designing a tailored storefront, configuring powerful apps, optimizing for performance, and ensuring a seamless user experience.",
    },
    {
      icon: "/assets/shopify-plus-agency/icons/consulting-icon.svg",

      iconAlt: "",
      title: "Shopify Plus Consulting Service",
      description:
        "Our Shopify Plus consulting service aims to resolve all queries raised by the clients related to functionalities, benefits, and security features of Shopify Plus. Our consultation provides specialized support for large-scale eCommerce businesses aiming to leverage the full potential of Shopify Plus. Experts assist with custom integrations, advanced marketing tactics, performance optimization, and seamless migrations.",
    },
    {
      icon: "/assets/hire-shopify-developers/icons/shopify-migration.svg",

      iconAlt: "Migration Icon",
      title: "Shopify Plus Migration Service",
      description:
        "Our agile Shopify Plus migration service ensures a seamless transition from any platform to Shopify Plus. Our expert Shopify Plus developers handle data migration, redesigning the store, integrating apps, and preserving SEO. Our expert team manages the process to minimize downtime and disruptions, ensuring a smooth move that enhances performance and scalability for high-growth businesses.",
    },
    {
      icon: "/assets/shopify-plus-agency/icons/theme_customization_icon.svg",

      iconAlt: "theme customization icon",
      title: "Shopify Plus Theme Customization Service",
      description:
        "Our Shopify Plus theme customization service offers tailored design solutions to create a unique, branded online store. Our expert developers modify themes to enhance user experience, align with brand identity, and optimize performance. These customizations ensure a distinctive, engaging storefront that meets specific business needs and drives higher conversion rates. We tailor the end-to-end experience for each buyer with customized product and pricing publishing, quantity rules, and payment terms.",
    },
    {
      icon: "/assets/shopify-plus-agency/icons/custom-theme-icon.svg",

      iconAlt: "custom theme icon",
      title: "Shopify Plus Custom Theme Development Service",
      description:
        "Dynamic Dreamz Shopify Plus custom theme development service provides bespoke design and functionality for your online store. Our expert Shopify Plus developers create unique themes from scratch, tailored to your brand and business requirements. This service enhances user experience, boosts performance, and offers complete control over aesthetics and features, ensuring a competitive edge in the market.",
    },
    {
      icon: "/assets/shopify-plus-agency/icons/white-label-icon.svg",

      iconAlt: "White Label icon",
      title: "Shopify Plus White Label Service",
      description:
        "Our proven Shopify Plus white label service allows agencies to offer Shopify Plus solutions under their brand. It includes custom store development, theme customization, and migration services. Agencies can expand their service portfolio, leveraging Shopify Plus's robust platform while maintaining their brand identity, thus delivering high-quality eCommerce solutions to their clients.",
    },
    {
      icon: "/assets/shopify-plus-agency/icons/maintenance-icon.svg",

      iconAlt: "maintenance icon",
      title: "Shopify Plus Maintenance Service",
      description:
        "We offer a prompt Shopify Plus maintenance service to ensure your online store operates smoothly and efficiently. It includes regular updates, performance optimization, security monitoring, and troubleshooting. Our Expert team of Shopify Plus handles all technical aspects, allowing you to focus on growth while maintaining a seamless and secure shopping experience for your customers.",
    },
  ],
  cta: {
    label: "Let me give you a hand to help you",
    href: "/request-quote",
    ariaLabel: "Dynamic Dreamz - Let me give you a hand to help you",
  },
} as const;

export const shopifyPlusAgencyWhyChoose = {
  heading: "Why Choose Shopify Plus Agency",
  text: "Selecting a Shopify Plus agency means collaborating with a team that is knowledgeable about advanced eCommerce requirements and high-growth businesses. A specialized agency offers deep platform knowledge, strategic insights, and tried-and-true workflows designed for Shopify Plus, in comparison to regular developers. A Shopify Plus agency helps you in making the most of the platform by helping you scale operations, customize B2B experiences, and optimize performance. With access to advanced features, dedicated support, and a team that stays ahead of the latest updates, you gain a true partner in growth.",
} as const;

export const shopifyPlusAgencyCaseStudies = {
  heading: "Shopify Plus Case Studies",
  description:
    "We have helped several high-growth brands to improve their online visibility, sell more effectively,<br> and scale more quickly. Our Shopify Plus case studies highlight the results of both established enterprises<br> converting to a premium digital experience and startups making their first impression.",
  items: [
    {
      name: "Trendia",
      image: "/assets/case-studies/trendia.png",
      imageAlt: "Trendia Casestudy Image",
      href: "/case-study/trendia",
    },
    {
      name: "Nekter Juice Bar",
      image: "/assets/case-studies/nekter-juice-bar.jpg",
      imageAlt: "Nekter Juice Bar Casestudy Image",
      href: "/case-study/nekter-juice-bar",
    },
    {
      name: "Calmenta",
      image: "/assets/case-studies/calmenta.png",
      imageAlt: "Calmenta Casestudy Image",
      href: "/case-study/calmenta",
    },
    {
      name: "Holy Plantz",
      image: "/assets/case-studies/holy-plantz.png",
      imageAlt: "Holy Plantz Casestudy Image",
      href: "/case-study/holy-plantz",
    },
  ],
} as const;

export const shopifyPlusAgencyHowToChoose = {
  heading: "How to Choose the Right Shopify Plus Agency",
  text: "Selecting the correct Shopify Plus agency starts with understanding your business goals. Find out a development agency that has much experience with Shopify Plus, especially with brands that are similar to yours. Check out their portfolio, client testimonials, custom solutions, and their ability to deliver scalable solutions. Ask about their entire development process, including research, deployment, and support, and make sure they provide full services like performance optimization, app integration, and theme customization. A trustworthy agency should serve as a long-term partner, not just a vendor, guiding you through strategy, execution, and growth.",
} as const;

export const shopifyPlusAgencyPricing = {
  heading: "Pricing",
  description:
    "Our Shopify Plus development pricing is flexible and tailored to your specific business requirements,<br> complexity, and size. Whether you're launching a new store, migrating from another platform, or creating <br> custom B2B features, we deliver competitive pricing packages that reflect our value and expertise.",
  columns: ["Requirements", "Pricing"],
  rows: [
    {
      requirement: "Shopify Plus store from scratch:",
      pricing: "$5000",
    },
    {
      requirement: "Shopify Plus store customization:",
      pricing: "$1500 - $2000",
    },
    {
      requirement: "Shopify to Shopify Plus store migration:",
      pricing: "$3000",
    },
    {
      requirement: "Other eCommerce store to Shopify Plus store migration:",
      pricing: "$5000 - $7000",
    },
    {
      requirement: "Custom Shopify Plus requirements:",
      pricing: "Contact us for estimation",
    },
  ],
} as const;

export const shopifyPlusAgencyIndustries = {
  heading: "Industries that we have served",
  description:
    "Dynamic Dreamz has massive experience across multiple industries,<br> helping businesses like yours succeed online. Our expertise spans sectors such as:",
  items: [
    {
      image: "/assets/shopify-plus-agency/industries/beauty-cosmetics.webp",
      imageAlt: "Beauty and cosmetics Shopify Plus store",
      title: "Beauty & Cosmetics",
      description:
        "The beauty industry requires visually stunning and high-converting Shopify stores. We build Shopify Plus solutions that improve brand appeal and deliver smooth shopping experiences.",
    },
    {
      image: "/assets/shopify-plus-agency/industries/health-nutrition.webp",
      imageAlt: "Health and nutrition Shopify Plus store",
      title: "Health & Nutrition",
      description:
        "Our Shopify Plus solutions for health and nutrition brands guarantee compliance, secure transactions, and a smooth user experience for customers buying supplements and wellness products.",
    },
    {
      image: "/assets/shopify-plus-agency/industries/pet-industry.webp",
      imageAlt: "Pet industry Shopify Plus store",
      title: "Pet Industry",
      description:
        "We design Shopify Plus stores that attract pet lovers, offering everything from pet food to accessories. We ensure easy navigation, secure checkout, and engaging shopping experiences.",
    },
    {
      image: "/assets/shopify-plus-agency/industries/fashion-apparel.webp",
      imageAlt: "Fashion and apparel Shopify Plus store",
      title: "Fashion & Apparel",
      description:
        "Fashion and apparel stores require high-end graphics and smooth functionality. Our Shopify Plus stores offer fast loading speed, customizable designs, and smooth user experiences.",
    },
    {
      image: "/assets/shopify-plus-agency/industries/food-beverages.webp",
      imageAlt: "Food and beverages Shopify Plus store",
      title: "Food & Beverages",
      description:
        "Accurate order management and secure payment processing are necessary for online food and beverage services. We develop Shopify Plus stores optimized for smooth transactions and recurring subscriptions.",
    },
  ],
} as const;

export const shopifyPlusAgencyPortfolio = {
  heading: "Quick Looks at our Shopify Plus Development",
  description:
    "We've had the privilege to work on some challenging and impactful work over our 20-year history. Whether it's for a startup or a Fortune 500 company, every website we launch and every website we create is developed with keeping the client's goals in mind.",
  category: "SHOPIFY PLUS",
  platformMark: "/assets/platforms/shopify-plus-white.svg",
  items: [
    {
      name: "Tropic Feel",
      image: "/assets/fashion/portfolio/tropicfeel-fashion.webp",
      imageAlt: "Tropic Feel",
      href: "https://shop.tropicfeel.com/",
    },
    {
      name: "Sculpt Neon",
      image: "/assets/our-work/projects/sculpt-neon.webp",
      imageAlt: "Sculpt Neon",
      href: "https://sculptneonsigns.com/",
    },
    {
      name: "Headsets",
      image: "/assets/our-work/projects/headsets.webp",
      imageAlt: "Headsets",
      href: "https://www.headsets.com/",
    },
    {
      name: "Perfect Locks",
      image: "/assets/shopify-plus-agency/portfolio/perfect-locks.webp",
      imageAlt: "Perfect Locks",
      href: "https://www.perfectlocks.com/",
    },
    {
      name: "Nekter Juice Bar",
      image: "/assets/food-beverages/portfolio/nekter-juice-bar.webp",
      imageAlt: "Nekter Juice Bar",
      href: "https://www.nekterjuicebar.com/",
    },
    {
      name: "The Somewhere Co.",
      image: "/assets/fashion/portfolio/somewhereco-fashion.webp",
      imageAlt: "The Somewhere Co.",
      href: "https://thesomewhereco.com/",
    },
  ],
} as const;

export const shopifyPlusAgencyTestimonials = {
  heading: "Don't Just Take Our Word For It",
  description:
    "We have faith in our work, but what truly matters is the outcomes we serve our clients.<br> Happy clients make happy stories: Check out how our services empower them to evolve.",
  items: [
    {
      name: "Alec Torelli",
      company: "(Conscious Poker)",
      quote:
        "Gaurav at Dynamic Dreamz excels in web design and development, demonstrating flawless communication, reliability, and confident autonomy, streamlining project execution.",
      videoId: "o4JnTGEH-Yk",
      image: "/assets/shopify-plus-agency/testimonials/alec-torelli.webp",
      imageAlt: "Alec Torelli testimonial",
    },
    {
      name: "William Petz",
      company: "(Quite Events)",
      quote:
        "Just 7 days post-launch, our sales surged by 12% owing to its advanced features; their expertise and swift updates impressed us, genuinely recommending their Services!",
      videoId: "B3KnREB4Bro",
      image: "/assets/shopify-plus-agency/testimonials/william-petz.webp",
      imageAlt: "William Petz testimonial",
    },
    {
      name: "William ST Baker",
      company: "Elite Element Electronics",
      quote:
        "In six months, Dynamic Dreamz revamped our website, turning it from error-ridden to seamlessly functional and visually appealing, significantly enhancing our digital presence.",
      videoId: "-IpNUAco1OA",
      image: "/assets/shopify-plus-agency/testimonials/william-st-baker.webp",
      imageAlt: "William ST Baker testimonial",
    },
    {
      name: "Kerri Imrie",
      company: "(teanow.com.au)",
      quote:
        "Dynamic Dreamz and Gaurav's invaluable expertise and support were instrumental in our success, making them a reliable choice for any digital agency needs.",
      videoId: "oNDPBGO83G4",
      image: "/assets/shopify-plus-agency/testimonials/kerri-imrie.webp",
      imageAlt: "Kerri Imrie testimonial",
    },
    {
      name: "Brandon",
      company: "USA",
      quote:
        "Dynamic Dreamz excels in web development with unmatched responsiveness, professionalism, and quality assurance, highly recommended for all projects.",
      videoId: "AoglCZQC0RU",
      image: "/assets/shopify-plus-agency/testimonials/brandon.webp",
      imageAlt: "Brandon testimonial",
    },
    {
      name: "Shari Leidich",
      company: "Max Sweets",
      quote:
        "We have been using dynamic dreams for four, maybe five years now. I can't say anything but the most positive things. They are diligent, professional, competitively priced.",
      videoId: "Vc9FH6ZeoXY",
      image: "/assets/shopify-plus-agency/testimonials/shari-leidich.webp",
      imageAlt: "Shari Leidich testimonial",
    },
    {
      name: "Rebekah Wymer",
      company: "Myla Jane",
      quote:
        "Hi, I'm Rebecca, owner of Myla Jane. I've worked with Dynamic Dreams on several web development projects, and they always do an excellent job.",
      videoId: "_ay_egf5GKw",
      image: "/assets/shopify-plus-agency/testimonials/rebekah-wymer.webp",
      imageAlt: "Rebekah Wymer testimonial",
    },
    {
      name: "Thommas Linnrose",
      company: "Art Copenhagen",
      quote:
        "Their support has allowed us to focus on growing our brand instead of worrying about technical issues and using time on this. Their support has allowed us to focus on growing our brand instead of worrying about technical issues and using time on this.",
      videoId: "_9uT-dRcQvo",
      image: "/assets/testimonials/thommas-linnrose.webp",
      imageAlt: "Thommas Linnrose testimonial",
    },
    {
      name: "Zoe wang",
      company: "Maison Zifan",
      quote:
        "Gaurav always explained to me what truly happens here and how we can improve it in the future. So we are very happy with the results, and we will continue to work with Gaurav and his team in the foreseeable future. So I highly recommend him.",
      videoId: "6Ni9tlZ7HKE",
      image: "/assets/shopify-plus-agency/testimonials/zoe-wang.webp",
      imageAlt: "Zoe wang testimonial",
    },
    {
      name: "Clinton De Vere",
      company: "Clinton De Vere Art",
      quote:
        "In 2025, I hired Gaurav and his team at Dynamic Dreams to upgrade my Shopify art shop, and the experience was seamless from start to finish. Communication was clear and prompt, Gaurav was patient with all my questions, and every issue or request was handled quickly and effectively.",
      videoId: "_rQeMWcz_gA",
      image: "/assets/shopify-plus-agency/testimonials/clinton-de-vere.webp",
      imageAlt: "Clinton De Vere testimonial",
    },
    {
      name: "Fernando Arias",
      company: "LGXNDS",
      quote:
        "Dynamic Dreamz is amazing because they're able to work on Shopify and WordPress platforms, which are essential to my businesses, and being able to scale them. And if you are looking for an amazing website developer on Shopify or WordPress, I recommend Dynamic Dreamz.",
      videoId: "WQWG2niydpE",
      image: "/assets/testimonials/fernando-arias.webp",
      imageAlt: "Fernando Arias testimonial",
    },
  ],
} as const;

export const shopifyPlusAgencyFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What is a Shopify Plus agency?",
    answer:
      "Using Shopify Plus to design, develop, and scale eCommerce stores is the expertise of a Shopify Plus agency. These agencies have in-depth knowledge of the platform's advanced features and help enterprise-level brands create high-performing online experiences.",
  },
  {
    question: "Why should I hire a Shopify Plus agency instead of a regular Shopify expert?",
    answer:
      "More services, more in-depth knowledge, and scalable solutions designed for growing brands are delivered by a Shopify Plus agency. Unlike freelance developers or general Shopify experts, an agency has a dedicated team with experience in high-volume sales, B2B features, automation, and advanced customization.",
  },
  {
    question: "How much does it cost to work with a Shopify Plus agency?",
    answer:
      "The size, complexity, and specific service requirements of the project all affect the cost. The initial cost of simple projects could be a few thousand dollars. At the same time, custom development, large-scale migrations, or long-term support plans may require a higher investment. We offer flexible pricing to fit different budgets. Check out our pricing section.",
  },
  {
    question: "Can a Shopify Plus agency help with store migration?",
    answer:
      "Absolutely. A Shopify Plus agency ensures a smooth migration from platforms like Magento, WooCommerce, or BigCommerce. It includes secure data transfer, theme rebuilding, app setup, and preserving your SEO and performance throughout the process.",
  },
  {
    question: "Can a Shopify Plus agency optimize my existing store?",
    answer:
      "Yes. A Shopify Plus agency can analyze your current setup and improve performance, user experience, and conversion rates. From theme enhancements and checkout optimization to faster load times and better mobile experiences, we help you get the most from your store.",
  },
];
