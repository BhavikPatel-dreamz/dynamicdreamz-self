import { industryBrandLogos } from "@/content/industries";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

const whyChooseItems = [
  {
    title: "Expert WordPress Developers",
    description:
      "Our team consists of skilled developers with extensive experience in WordPress development, ensuring high-quality and efficient solutions.",
    icon: "/assets/services/shopify-development-in-bangalore/why-choose-dynamic/expert-developers.svg",
    iconAlt: "Expert WordPress Developers Icon",
  },
  {
    title: "Custom Solutions",
    description:
      "We provide custom WordPress development services, including theme and plugin development, to meet your unique business needs.",
    icon: "/assets/services/shopify-development-in-bangalore/why-choose-dynamic/custom-solutions.svg",
    iconAlt: "Custom Solutions Icon",
  },
  {
    title: "User-Friendly Design",
    description:
      "Our designs focus on providing a user-friendly and engaging user experience, helping you retain and attract customers.",
    icon: "/assets/services/shopify-development-in-bangalore/why-choose-dynamic/intuitive-design.svg",
    iconAlt: "User-Friendly Design Icon",
  },
  {
    title: "SEO Optimization",
    description:
      "We implement best SEO practices to improve your website's visibility and ranking on search engines, driving more organic traffic.",
    icon: "/assets/services/shopify-development-in-bangalore/why-choose-dynamic/seo-expertise.svg",
    iconAlt: "SEO Optimization Icon",
  },
  {
    title: "Comprehensive Services",
    description:
      "From development to maintenance, we offer a full range of services to ensure your website remains up-to-date and performs optimally.",
    icon: "/assets/services/shopify-development-in-bangalore/why-choose-dynamic/comprehensive-services.svg",
    iconAlt: "Comprehensive Services Icon",
  },
  {
    title: "Proven Track Record",
    description:
      "With years of experience and numerous successful projects, we have established ourselves as a trusted WordPress development agency in Noida.",
    icon: "/assets/services/shopify-development-in-bangalore/why-choose-dynamic/proven-track-record.svg",
    iconAlt: "Proven Track Record Icon",
  },
] as const;

export const wordpressDevelopmentNoidaContent = {
  sectionCopy: {
    faqHeading: "Frequently Asked Questions",
    portfolioCta: "View our work",
    portfolioEyebrow: "Portfolio",
    testimonialsEyebrow: "Client Stories",
  },

  hero: {
    eyebrows: ["Wordpress Development", "Noida"],
    title: "#1 Company For WordPress Development in Noida",
    description:
      "Dynamic Dreamz is a leading WordPress development company in Noida dedicated to building custom WordPress websites that match your business goals. Our team of talented developers is an expert in delivering customized solutions, including WordPress theme and plugin development, to ensure your website stands out.",
    primaryCta: {
      label: "Get in Touch",
      href: "/request-quote",
    },
    badges: [
      {
        src: "/assets/awards/shopify-platinum-partner.svg",
        alt: "Dynamic Dreamz - Shopify Platinum Partner",
        width: 136,
        height: 44,
        href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
      },
      {
        src: "/assets/awards/clutch-rating.svg",
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
        src: "/assets/awards/upwork-top-rated-plus.svg",
        alt: "Dynamic Dreamz — Upwork Top Rated Plus",
        width: 126,
        height: 54,
        href: "https://www.upwork.com/ag/dynamicdreamz/",
      },
    ],
    tabletSlider: {
      bgShapeSrc:
        "/assets/services/shopify-development-in-bangalore/hero/slide-bg-shape.svg",
      topBadge: {
        src: "/assets/services/wordpress-development-in-ahmedabad/hero/woocommerce-agency-partner.png",
        alt: "WooCommerce_Apgency_Partner",
        width: 173,
        height: 106,
      },
      bottomBadge: {
        src: "/assets/services/wordpress-development-in-ahmedabad/hero/wordpress-logo.png",
        alt: "WordPress_Logo",
        width: 130,
        height: 126,
      },
      slides: [
        {
          src: "/assets/services/wordpress-development-in-ahmedabad/hero/slide-green-future-energy.webp",
          alt: "greenfutureenergy",
          width: 1600,
          height: 2380,
        },
        {
          src: "/assets/services/wordpress-development-in-ahmedabad/hero/slide-avm.webp",
          alt: "avm",
          width: 1600,
          height: 2380,
        },
        {
          src: "/assets/services/wordpress-development-in-ahmedabad/hero/slide-homepage-revised.webp",
          alt: "HomepageRevised",
          width: 1600,
          height: 2380,
        },
        {
          src: "/assets/services/wordpress-development-in-ahmedabad/hero/slide-lipari-design.webp",
          alt: "liparidesign",
          width: 1600,
          height: 2380,
        },
        {
          src: "/assets/services/wordpress-development-in-ahmedabad/hero/slide-ornago.webp",
          alt: "ornago",
          width: 1600,
          height: 2380,
        },
        {
          src: "/assets/services/wordpress-development-in-ahmedabad/hero/slide-syrene.webp",
          alt: "syrene",
          width: 1600,
          height: 2380,
        },
        {
          src: "/assets/services/wordpress-development-in-ahmedabad/hero/slide-the-huddle-sports-grill.webp",
          alt: "thehuddlesportsgrill",
          width: 1600,
          height: 2380,
        },
      ],
    },
  },

  brands: {
    title: "Trusted by <br>Leading Brands",
    items: industryBrandLogos,
  },

  counter: {
    eyebrow: "Wordpress Development Company in Noida",
    heading:
      "Choose Dynamic Dreamz as the Best WordPress Development Company in Noida",
    description:
      "We understand the unique requirements of businesses in Noida. Our WordPress development services in Noida are developed to provide you with a website that is visually appealing and highly functional. We focus on making user-friendly designs that offer an excellent user experience, helping you engage your audience effectively. Our dedication to quality and attention to detail make us the preferred choice for WordPress development services in Noida.",
    items: [
      {
        value: "20+",
        label: "Years of Experience",
        subLabel: "Established in 2006",
      },
      {
        value: "150+",
        label: "Experts",
        subLabel: "AI empowered. Continuously trained",
      },
      {
        value: "5,000+",
        label: "projects delivered",
        subLabel: "Ecommerce, web and mobile",
      },
      {
        value: "2500+",
        label: "Verified 5 star Reviews",
        subLabel: "From Clutch, Trustpilot & Upwork",
      },
    ],
  },

  process: {
    eyebrow: "How We Work",
    heading: "Our Development Process",
    description:
      "We follow a structured development process to provide the successful delivery of your WordPress website.",
    steps: [
      {
        step: "Step 01",
        title: "Discovery and Planning",
        description:
          "We start by understanding your business purposes and target audience. This phase affects collecting requirements and planning the project to align with your goals.",
      },
      {
        step: "Step 02",
        title: "Design and Development",
        description:
          "Our designers create simple and stunning layouts, while our developers build strong and scalable WordPress websites. We ensure that the design reflects your brand identity and that the development satisfies industry standards.",
      },
      {
        step: "Step 03",
        title: "Testing and Launch",
        description:
          "Before launching, we perform detailed testing to identify and fix any issues. It guarantees that your website functions smoothly across all devices and browsers.",
      },
      {
        step: "Step 04",
        title: "Post Launch Support",
        description:
          "After the launch, we offer ongoing support and maintenance to keep your website updated and secure. Our team is always available to assist with any concerns or updates you may require.",
      },
    ],
  },

  whyDynamicDreamz: {
    eyebrow: "Why Dynamic Dreamz",
    heading: "Why Choose Us for Your WordPress Development Needs?",
    description:
      "Dynamic Dreamz is a trusted WordPress Development agency in Noida that offers vast WordPress development services tailored to your specific requirements.",
    items: whyChooseItems,
  },

  // Backward-compatible alias for existing consumers / schema
  reasons: {
    heading: "Why Choose Us for Your <br> WordPress Development Needs?",
    description:
      "Dynamic Dreamz is a trusted WordPress Development agency in Noida that offers vast WordPress development services tailored to your specific requirements.",
    items: whyChooseItems,
  },

  portfolio: {
    eyebrow: "Portfolio",
    heading: "Our Successful WordPress Projects",
    description:
      "500+ WordPress websites meticulously crafted and counting. Our expertise <br> accelerates growth and redefines shopping experiences for clients, <br> making us the best WordPress development company in India.",
    items: [
      {
        name: "Quite Events",
        href: "https://www.quietevents.com/",
        image: "/assets/our-work/projects/quite-events.webp",
        imageAlt: "Quite Events Image",
        category: "WORDPRESS",
      },
      {
        name: "Les Etoiles",
        href: "https://louer-lesetoiles.ca/",
        image: "/assets/our-work/projects/les-etoiles.webp",
        imageAlt: "Les Etoiles Image",
        category: "WORDPRESS",
      },
      {
        name: "Valents",
        href: "https://wearvalents.com/",
        image: "/assets/our-work/projects/valents.webp",
        imageAlt: "Valents Image",
        category: "WORDPRESS",
      },
      {
        name: "Get Sunsights",
        href: "https://www.getsunsights.com/",
        image: "/assets/our-work/projects/get-sunsights.webp",
        imageAlt: "Get Sunsights Image",
        category: "WORDPRESS",
      },
      {
        name: "Lipari Design",
        href: "https://liparidesign.ca/",
        image: "/assets/our-work/projects/lipari-design.webp",
        imageAlt: "Lipari Design Image",
        category: "WORDPRESS",
      },
      {
        name: "Nexventur",
        href: "https://nexventur.com/",
        image: "/assets/our-work/projects/nexventur.webp",
        imageAlt: "Nexventur Image",
        category: "WORDPRESS",
      },
      {
        name: "Awaken Media",
        href: "https://www.awaken.media/",
        image: "/assets/our-work/projects/awaken-media.webp",
        imageAlt: "Awaken Media Image",
        category: "WORDPRESS",
      },
      {
        name: "Budget Maids",
        href: "https://www.budget-maids.com/",
        image: "/assets/our-work/projects/budget-maids.webp",
        imageAlt: "Budget Maids Image",
        category: "WORDPRESS",
      },
    ],
  },

  testimonials: {
    eyebrow: "Client Stories",
    heading: "Our Customers' Testimonials",
    description:
      "We have faith in our work, but what truly matters is the outcomes we serve our clients. <br> Happy clients make happy stories. Check out how our services empower them to evolve.",
    items: shopifyPlusAgencyTestimonials.items,
  },

  faqs: [
    {
      question: "What services does your WordPress development company offer?",
      answer:
        "We provide a wide range of services, including custom WordPress development, theme and plugin development, website design, and ongoing maintenance and support.",
    },
    {
      question:
        "Why should I choose your company for WordPress development in Noida?",
      answer:
        "Our regional expertise, combined with our dedication to providing high-quality, customized solutions, makes us the best WordPress website design agency in Noida, aka the ideal partner for businesses in Noida seeking professional WordPress development services.",
    },
    {
      question: "Can you customize an existing WordPress theme?",
      answer:
        "Yes, we specialize in customizing existing WordPress themes to align with your brand and meet your specific business requirements.",
    },
    {
      question:
        "What length of time does the development of a WordPress website take?",
      answer:
        "The development timeline varies based on the complexity and specific features required. We collaborate closely with you to set a reasonable deadline and guarantee on-time delivery.",
    },
    {
      question: "Is WordPress secure for my business website?",
      answer:
        "Yes, WordPress is a secure platform. We further enhance security by implementing best practices and regular updates to protect your website from potential threats.",
    },
    {
      question: "Do you offer WordPress website maintenance services?",
      answer:
        "Absolutely, other than WordPress website designing company Noida, we also provide ongoing maintenance services to keep your website updated, secure, and performing at its best.",
    },
    {
      question:
        "How can I start using your services for WordPress development?",
      answer:
        "Whenever you require WordPress development service in Noida or anywhere else, you can contact us through our website to discuss your project requirements. Our team will guide you through the process and provide a tailored solution for your business.",
    },
  ],

  ctaBanner: {
    heading: "Want us to help you with your online store?",
    ctaLabel: "request a quote",
    ctaHref: "/request-quote",
  },
} as const;
