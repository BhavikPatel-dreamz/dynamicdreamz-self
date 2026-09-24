import { industryBrandLogos } from "@/content/industries";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

const whyChooseItems = [
  {
    title: "Expert WordPress Developers",
    description:
      "Our team of experienced WordPress developers offers unique skills for every project, providing high-quality WordPress solutions customized to your business requirements.",
    icon: "/assets/services/shopify-development-in-bangalore/why-choose-dynamic/expert-developers.svg",
    iconAlt: "Expert WordPress Developers Icon",
  },
  {
    title: "Custom Solutions",
    description:
      "We focus on providing personalized WordPress development services, such as theme customization and plugin development, to guarantee your website stands out uniquely.",
    icon: "/assets/services/shopify-development-in-bangalore/why-choose-dynamic/custom-solutions.svg",
    iconAlt: "Custom Solutions Icon",
  },
  {
    title: "User-Friendly Design",
    description:
      "We prioritize simple, user-centered design to create an outstanding experience for your audience, improving engagement and retention.",
    icon: "/assets/services/shopify-development-in-bangalore/why-choose-dynamic/intuitive-design.svg",
    iconAlt: "User-Friendly Design Icon",
  },
  {
    title: "SEO Optimization",
    description:
      "We integrate advanced SEO strategies into each website we develop, improving your search engine visibility and attracting organic traffic to your website.",
    icon: "/assets/services/shopify-development-in-bangalore/why-choose-dynamic/seo-expertise.svg",
    iconAlt: "SEO Optimization Icon",
  },
  {
    title: "Comprehensive Services",
    description:
      "We provide wide WordPress development solutions, guiding you from the initial consultation to post-launch maintenance, ensuring your website operates at extreme performance.",
    icon: "/assets/services/shopify-development-in-bangalore/why-choose-dynamic/comprehensive-services.svg",
    iconAlt: "Comprehensive Services Icon",
  },
  {
    title: "Proven Track Record",
    description:
      "Our portfolio showcases our abilities in WordPress development services. We are a trustworthy WordPress development Agency in Delhi, reinforced by a track record of successful WordPress projects and happy clients.",
    icon: "/assets/services/shopify-development-in-bangalore/why-choose-dynamic/proven-track-record.svg",
    iconAlt: "Proven Track Record Icon",
  },
] as const;

export const wordpressDevelopmentDelhiContent = {
  sectionCopy: {
    faqHeading: "Frequently Asked Questions",
    portfolioCta: "View our work",
    portfolioEyebrow: "Portfolio",
    testimonialsEyebrow: "Client Stories",
  },

  hero: {
    eyebrows: ["Shopify Development", "Delhi"],
    title: "#1 Company For WordPress Development in Delhi",
    description:
      "Dynamic Dreamz is one of the best WordPress development companies in Delhi, specializing in designing custom WordPress websites that exactly match your business goals. Our team of experienced WordPress developers is excellent at custom WordPress solutions, like making WordPress themes and plugins that make your website stand out in today’s digital world.",
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
        alt: "WooCommerce Agency Partner",
        width: 173,
        height: 106,
      },
      bottomBadge: {
        src: "/assets/services/wordpress-development-in-ahmedabad/hero/wordpress-logo.png",
        alt: "WordPress Logo",
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
    title: "Trusted by Leading Brands",
    items: industryBrandLogos,
  },

  counter: {
    eyebrow: "Wordpress Development Company in Delhi",
    heading:
      "Choose Dynamic Dreamz as the Best WordPress Development Company in Delhi",
    description:
      "At Dynamic Dreamz, we put much effort into understanding the unique requirements of Delhi business. Our WordPress development services in Delhi are designed to develop websites that are not only attractive but also effortless for people to use and run quickly. We focus on making smooth designs, increasing user interaction, and following industry standards. Because we are always aiming for excellence, businesses all over Delhi choose us as their first preference for WordPress development services.",
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
      "We take a clear and organized approach to guarantee that each project is completed flawlessly. Here is the overview of how we work.",
    steps: [
      {
        step: "Step 01",
        title: "Discovery and Planning",
        description:
          "During this stage, we focus on understanding your business goals, recognizing your target audience, and defining project requirements. This groundwork guarantees that all segments of your WordPress website are connected to your vision and business goals.",
      },
      {
        step: "Step 02",
        title: "Design and Development",
        description:
          "Our talented WordPress designers and professional WordPress developers work together to develop visually attractive and technically robust websites. From designing custom layouts to integrating advanced features, we guarantee your WordPress website sticks to the utmost standards.",
      },
      {
        step: "Step 03",
        title: "Testing and Launch",
        description:
          "Before launching, our team conducts testing to ensure that your WordPress website performs flawlessly on all devices and browsers. We respond to any concerns quickly to provide a smooth user experience.",
      },
      {
        step: "Step 04",
        title: "Post Launch Support",
        description:
          "Our project collaboration doesn't end with the launch of your WordPress website. We offer ongoing support and maintenance to keep your website updated, secure, and optimized for extreme performance.",
      },
    ],
  },

  whyDynamicDreamz: {
    eyebrow: "Why Dynamic Dreamz",
    heading: "Why Choose Us for Your WordPress Development Needs?",
    description:
      "Dynamic Dreamz is a trusted partner for WordPress development in Delhi, offering a wide range of WordPress services tailored to different business requirements.",
    items: whyChooseItems,
  },

  // Backward-compatible alias for existing consumers / schema
  reasons: {
    heading: "Why Choose Us for Your <br> WordPress Development Needs?",
    description:
      "Dynamic Dreamz is a trusted partner for WordPress development in Delhi, offering a wide range of WordPress services tailored to different business requirements.",
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
        "Our WordPress development service offerings contain custom WordPress development, theme customization, plugin development, website design, and ongoing support to ensure your website remains updated and protected.",
    },
    {
      question:
        "Why should I choose your company for WordPress development in Delhi?",
      answer:
        "With our in-depth experience of the Delhi market and a strong dedication to providing customized, high-quality WordPress solutions, we stand out as the ideal partner for businesses in the region.",
    },
    {
      question: "Can you customize an existing WordPress theme?",
      answer:
        "We can modify and customize existing WordPress themes to match your branding and unique business requirements. We can also design a fully custom WordPress website. Contact us with your detailed requirements.",
    },
    {
      question:
        "Can you tell me how much time is required to develop a WordPress website?",
      answer:
        "The timeline of any WordPress project depends on its complexity and requirements. We'll work with you to define a proper timeline and ensure the project is delivered on time.",
    },
    {
      question: "Is WordPress a secure platform for my business website?",
      answer:
        "Yes, of course. WordPress is a trustworthy CMS; we enhance its security through best practices and consistent updates. We also include some of WordPress's best and top security plugins to make it more secure.",
    },
    {
      question: "Do you offer website maintenance services?",
      answer:
        "We offer complete WordPress maintenance services to ensure your website works efficiently and safely. We work on hourly rates or fixed-rate contracts for WordPress maintenance work.",
    },
    {
      question:
        "How can I start using your WordPress development services to create my WordPress website?",
      answer:
        "Contact us via our website; you can visit our Contact Us page and fill out the contact form, and our team will assist you throughout the entire process, from initial talk to final project delivery.",
    },
  ],

  ctaBanner: {
    heading: "Want us to help you with your online store?",
    ctaLabel: "request a quote",
    ctaHref: "/request-quote",
  },
} as const;
