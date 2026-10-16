import type { CityPageCounterContent } from "@/components/sections/city-page-counter-section";
import type { CityPageHeroContent } from "@/components/sections/city-page-hero-section";
import type { ShopifyStageServicesContent } from "@/components/sections/shopify-stage-services-section";
import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import { bigCommerceDevelopmentBrands } from "@/content/bigcommerce-development";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

const assets = "/assets/services/webflow-development";

export const webflowDevelopmentHero: CityPageHeroContent = {
  eyebrows: ["ESTABLISHED IN 2006", "Webflow Development Agency"],
  title: "Webflow Development Company for Scalable Websites",
  description:
    "Dynamic Dreamz is a Webflow development company helping brands build fast, flexible and conversion-focused websites. From custom Webflow development and Figma-to-Webflow builds to CMS, migrations, integrations and ongoing support, our team creates responsive Webflow sites that are easy to manage and ready to scale.",
  secondaryDescription:
    "We design, develop, and scale Webflow sites that grow with your business.",
  primaryCta: {
    label: "Request a Quote",
    href: "/request-quote",
  },
  secondaryCta: {
    label: "View Our Work",
    href: "#our_work",
  },
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
        src: `${assets}/hero/the-gate.webp`,
        alt: "The Gate",
        width: 800,
        height: 1190,
      },
      {
        src: `${assets}/hero/supportninja.webp`,
        alt: "Supportninja",
        width: 800,
        height: 1190,
      },
      {
        src: `${assets}/hero/noble.webp`,
        alt: "Noble",
        width: 800,
        height: 1190,
      },
      {
        src: `${assets}/hero/maui-sheep-milk.webp`,
        alt: "Maui Sheep Milk",
        width: 800,
        height: 1190,
      },
      {
        src: `${assets}/hero/kensite.webp`,
        alt: "Kensite",
        width: 800,
        height: 1190,
      },
      {
        src: `${assets}/hero/hader-institute.webp`,
        alt: "Hader Institute",
        width: 800,
        height: 1190,
      },
    ],
    topBadge: {
      src: `${assets}/hero/webflow-icon.png`,
      alt: "webflow-icon",
      width: 130,
      height: 126,
    },
    bottomBadge: {
      src: `${assets}/hero/webflow-logo.png`,
      alt: "webflow_logo",
      width: 173,
      height: 106,
    },
  },
};

export const webflowDevelopmentBrands: readonly ClientLogoSliderItem[] =
  bigCommerceDevelopmentBrands;

export const webflowDevelopmentServices: ShopifyStageServicesContent = {
  eyebrow: "Our Services",
  heading: "Our Webflow Development Services",
  description:
    "At Dynamic Dreamz, we offer the best Webflow development services designed for growing brands, startups, and enterprises that need more than just a good-looking website. Our webflow development experts focus on performance, scalability, and ease of management — so your site works as hard as your business does.",
  items: [
    {
      tag: "CUSTOM DEVELOPMENT",
      title: "Custom Webflow Website Development",
      description:
        "We build fully custom Webflow websites tailored to your brand, goals, and users. No bloated templates — just clean structure, responsive layouts, and scalable components.",
      cta: {
        label: "DISCUSS A CUSTOM BUILD",
        href: "/request-quote",
      },
    },
    {
      tag: "FIGMA TO WEBFLOW",
      title: "Figma to Webflow Development",
      description:
        "Already have designs? Our Webflow developers convert Figma files into pixel-perfect, production-ready Webflow sites with smooth interactions and optimized performance.",
      cta: {
        label: "BOOK A CONSULTATION",
        href: "/book-a-discovery-call",
      },
    },
    {
      tag: "WEBFLOW CMS",
      title: "Webflow CMS Development",
      description:
        "From blogs to complex content systems, we create flexible Webflow CMS setups that are easy to manage, update, and scale as your content grows.",
      cta: {
        label: "EXPLORE CMS DEVELOPMENT",
        href: "/request-quote",
      },
    },
    {
      tag: "MIGRATION & REBUILD",
      title: "Webflow Migration & Rebuilds",
      description:
        "We migrate websites from WordPress or other platforms to Webflow without losing content, SEO, or performance.",
      cta: {
        label: "EXPLORE MIGRATION & REBUILDS",
        href: "/request-quote",
      },
    },
    {
      tag: "INTEGRATIONS & AUTOMATIONS",
      title: "Webflow Integrations & Automations",
      description:
        "We integrate Webflow with CRMs, marketing tools, analytics, and third-party services to streamline workflows and improve conversions.",
      cta: {
        label: "EXPLORE INTEGRATIONS",
        href: "/request-quote",
      },
    },
    {
      tag: "ONGOING SUPPORT",
      title: "Ongoing Webflow Support & Maintenance",
      description:
        "Need a reliable Webflow partner? We provide continuous support, updates, optimizations, and improvements post-launch.",
      cta: {
        label: "GET SUPPORT",
        href: "/request-quote",
      },
    },
    {
      tag: "SEO & PERFORMANCE",
      title: "Webflow SEO & Performance Optimization",
      description:
        "Optimize your Webflow website for better search visibility, faster load times, and a smoother user experience. We improve technical SEO, site structure, Core Web Vitals, and on-page performance.",
      cta: {
        label: "OPTIMIZE YOUR WEBFLOW SITE",
        href: "/request-quote",
      },
    },
  ],
};

export type WebflowGrowthBox = {
  iconKey: "performance" | "conversion" | "future-ready";
  title: string;
  description: string;
};

export type WebflowGrowthContent = {
  heading: string;
  description: string;
  boxes: readonly WebflowGrowthBox[];
};

export const webflowDevelopmentGrowth: WebflowGrowthContent = {
  heading: "Webflow Websites Built for Growth",
  description:
    "We don’t just build Webflow websites that look good; we build systems that perform. Every Webflow project at Dynamic Dreamz is designed with speed, conversions, and scalability in mind, so your website actively supports business growth instead of just existing online.",
  boxes: [
    {
      iconKey: "performance",
      title: "Performance-First Development",
      description:
        "Our Webflow development approach prioritizes clean structure, optimized assets, and fast load times. The result? Better Core Web Vitals, improved SEO performance, and smoother user experiences across devices.",
    },
    {
      iconKey: "conversion",
      title: "Conversion-Focused Design",
      description:
        "Our Webflow development approach prioritizes clean structure, optimized assets, and fast load times. The result? Better Core Web Vitals, improved SEO performance, and smoother user experiences across devices.",
    },
    {
      iconKey: "future-ready",
      title: "Future-Ready & Scalable",
      description:
        "We build Webflow sites that are easy to manage, expand, and evolve. Whether it’s adding new pages, scaling content with CMS, or integrating tools, your website stays flexible as your business grows.",
    },
  ],
};

export const webflowDevelopmentPortfolio = {
  eyebrow: "Portfolio",
  heading: "Recent Projects",
  ctaLabel: "View our work",
  ctaHref: "/our-work",
  items: [
    {
      name: "My Rezults",
      href: "https://www.myrezults.com/",
      image: `${assets}/projects/my-rezults.webp`,
      imageAlt: "My Rezults Image",
    },
    {
      name: "Bulletproof",
      href: "https://www.bulletprooflogistics.com/",
      image: `${assets}/projects/bulletproof.webp`,
      imageAlt: "Bulletproof Image",
    },
    {
      name: "Sprint Innovations",
      href: "https://www.sprint-in.com/",
      image: `${assets}/projects/sprint-innovations.webp`,
      imageAlt: "Sprint Innovations Image",
    },
    {
      name: "Hader Institute",
      href: "https://www.haderinstitute.edu.au/",
      image: `${assets}/projects/hader-institute.webp`,
      imageAlt: "Hader Institute Image",
    },
    {
      name: "Support Ninja",
      href: "https://www.supportninja.com",
      image: `${assets}/projects/support-ninja.webp`,
      imageAlt: "Support Ninja Image",
    },
    {
      name: "Maui Milk",
      href: "https://www.mauimilk.co.nz",
      image: `${assets}/projects/maui-sheep-milk.webp`,
      imageAlt: "Maui Milk Image",
    },
    {
      name: "Kensite",
      href: "https://www.kensite.co.uk/",
      image: `${assets}/projects/kensite.webp`,
      imageAlt: "Kensite Image",
    },
    {
      name: "Noble Content",
      href: "https://www.noblecontent.com/",
      image: `${assets}/projects/noble.webp`,
      imageAlt: "Noble Content Image",
    },
  ],
} as const;

export const webflowDevelopmentMilestones: CityPageCounterContent = {
  eyebrow: "Why Dynamic Dreamz",
  heading: "Milestones of Excellence",
  description:
    "Our Webflow development journey is defined by results, not promises. From global clients to high-impact projects, these milestones reflect the trust brands place in Dynamic Dreamz and the outcomes we consistently deliver.",
  items: [
    {
      value: "20+ Years",
      label: "Years of Experience",
    },
    {
      value: "150+",
      label: "Experts",
    },
    {
      value: "5,000+",
      label: "Projects Delivered",
    },
    {
      value: "2500+",
      label: "Verified 5 Star Reviews",
    },
  ],
};

export const webflowDevelopmentTestimonials = {
  eyebrow: "Client Stories",
  heading: "Our Valued Clients",
  description:
    "Real feedback from real clients. See how our Webflow development work helps\nbusinesses launch faster, scale smarter, and achieve measurable results.",
  items: shopifyPlusAgencyTestimonials.items,
} as const;

export const webflowDevelopmentFaqHeading = "Frequently Asked Questions";
export const webflowDevelopmentFaqDescription = "Questions about Webflow development.";

export const webflowDevelopmentFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What does a Webflow development company do?",
    answer:
      "A Webflow development company is something that helps you design, build, and optimize websites with the help of Webflow. And Dynamic Dreamz, we work with the elite Webflow development solutions to handle everything from custom Webflow website development and CMS setup to integrations, migrations & ongoing support.",
  },
  {
    question: "Why should I choose Webflow over WordPress or other platforms?",
    answer:
      "Webflow, provided by the best Webflow development agency, tends to offer a next-level design flexibility, much cleaner code output, faster performance & easier content management, and that too without the need for heavy plugins.\n\nAnd for your kind of knowledge, these days it’s quite ideal for businesses that require speed, scalability, and control without constant maintenance overhead.",
  },
  {
    question: "Can you convert my existing design into Webflow?",
    answer:
      "Yes. Our Webflow developers specialize in Figma to Webflow development, so yes, you can be sure of ensuring pixel-perfect accuracy, responsive layouts & optimized performance for yourself.",
  },
  {
    question: "Do you provide Webflow migration services?",
    answer:
      "Absolutely, at Dynamic Dreamz, we do migrate websites from WordPress, Wix, or other platforms to Webflow, and that too while maintaining SEO structure, URLs & content integrity.",
  },
  {
    question: "Can I hire a dedicated Webflow developer from Dynamic Dreamz?",
    answer:
      "Yes. You can hire dedicated Webflow developers for ongoing development, support, enhancements, or long-term projects based on your requirements.",
  },
  {
    question: "How long does Webflow website development take?",
    answer:
      "Timelines depend on project complexity. A standard Webflow website typically takes 2–4 weeks, while larger CMS or custom builds may take longer.",
  },
  {
    question: "Do you offer ongoing Webflow support and maintenance?",
    answer:
      "Yes, at DynamicDreamz We provide ongoing Webflow support, updates, performance optimization, and feature enhancements after launch.",
  },
  {
    question: "Who owns the Webflow website after completion?",
    answer:
      "You do. Although you hire webflow developer for development, once the project is completed and handed over, full ownership of the Webflow website and assets belongs to you.",
  },
];
