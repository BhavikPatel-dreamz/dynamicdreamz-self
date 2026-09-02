import type { AgencyServicesContent } from "@/components/sections/agency-services-section";
import type { ProofSectionContent } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import type { ServiceHeroContent } from "@/components/sections/service-hero-section";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import { bigCommerceDevelopmentBrands } from "@/content/bigcommerce-development";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

const assets = "/assets/services/webflow-development";

export const webflowDevelopmentHero: ServiceHeroContent = {
  title: "Webflow Development Services That Turn Design Into Scalable Websites",
  description:
    "Dynamic Dreamz is a Webflow development company helping brands build fast, flexible, and conversion-focused websites. From custom Webflow website development to complex CMS builds, our Webflow developers turn ideas into pixel-perfect, performance-ready experiences, and that too without locking you into rigid templates.",
  secondaryDescription: "We design, develop, and scale Webflow sites that grow with your business.",
  ctaLabel: "Get a Free Quote",
  ctaHref: "/request-quote",
  secondaryCta: {
    label: "See Our Work",
    href: "/our-work",
    ariaLabel: "Dynamic Dreamz - See Our Work",
  },
  imageContainerClassName:
    "mx-auto size-[328px] items-center rounded-full bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] max-[767px]:size-[250px]",
  image: {
    src: `${assets}/hero/webflow-img.svg`,
    alt: "Webflow development services illustration",
    width: 213,
    height: 219,
  },
  reviews: [
    {
      platform: "Clutch",
      reviewCount: "132 Reviews",
      rating: "5.0",
      logoSrc: "/assets/reviews/clutch-wordmark.svg",
      logoAlt: "Clutch Review Dynamic Dreamz",
      logoWidth: 57,
      logoHeight: 19,
      href: "https://clutch.co/profile/dynamic-dreamz",
    },
    {
      platform: "Upwork",
      reviewCount: "2000+ Reviews",
      rating: "5.0",
      logoSrc: "/assets/reviews/upwork-wordmark.svg",
      logoAlt: "Upwork Review Dynamic Dreamz",
      logoWidth: 64,
      logoHeight: 19,
      href: "https://www.upwork.com/agencies/dynamicdreamz/",
    },
    {
      platform: "GoodFirms",
      reviewCount: "72 Reviews",
      rating: "5.0",
      logoSrc: "/assets/reviews/goodfirms-wordmark.svg",
      logoAlt: "GoodFirms Review Dynamic Dreamz",
      logoWidth: 86,
      logoHeight: 19,
      href: "https://www.goodfirms.co/company/dynamic-dreamz",
    },
  ],
};

export const webflowDevelopmentBrands: readonly ClientLogoSliderItem[] = bigCommerceDevelopmentBrands;

export const webflowDevelopmentServices: AgencyServicesContent = {
  heading: "Our Webflow Development Services",
  description:
    "At Dynamic Dreamz, we offer the best Webflow development services designed for growing brands, startups, and enterprises that need more than just a good-looking website. Our webflow development experts focus on performance, scalability, and ease of management — so your site works as hard as your business does.",
  items: [
    {
      icon: `${assets}/services/webflow-services.svg`,
      iconAlt: "Custom Webflow website development icon",
      title: "Custom Webflow Website Development",
      description:
        "We build fully custom Webflow websites tailored to your brand, goals, and users. No bloated templates — just clean structure, responsive layouts, and scalable components.",
    },
    {
      icon: `${assets}/services/figma-webflow.svg`,
      iconAlt: "Figma to Webflow development icon",
      title: "Figma to Webflow Development",
      description:
        "Already have designs? Our Webflow developers convert Figma files into pixel-perfect, production-ready Webflow sites with smooth interactions and optimized performance.",
    },
    {
      icon: `${assets}/services/webflow-cms.svg`,
      iconAlt: "Webflow CMS development icon",
      title: "Webflow CMS Development",
      description:
        "From blogs to complex content systems, we create flexible Webflow CMS setups that are easy to manage, update, and scale as your content grows.",
    },
    {
      icon: `${assets}/services/webflow-migration.svg`,
      iconAlt: "Webflow migration and rebuilds icon",
      title: "Webflow Migration & Rebuilds",
      description:
        "We migrate websites from WordPress or other platforms to Webflow without losing content, SEO, or performance.",
    },
    {
      icon: `${assets}/services/webflow-integrations.svg`,
      iconAlt: "Webflow integrations and automations icon",
      title: "Webflow Integrations & Automations",
      description:
        "We integrate Webflow with CRMs, marketing tools, analytics, and third-party services to streamline workflows and improve conversions.",
    },
    {
      icon: `${assets}/services/webflow-support.svg`,
      iconAlt: "Webflow support and maintenance icon",
      title: "Ongoing Webflow Support & Maintenance",
      description:
        "Need a reliable Webflow partner? We provide continuous support, updates, optimizations, and improvements post-launch.",
    },
  ],
  cta: {
    label: "Let me help you",
    href: "/request-quote",
    ariaLabel: "Dynamic Dreamz - Let me help you",
  },
};

export const webflowDevelopmentGrowth: ProofSectionContent = {
  heading: "Webflow Websites Built for Growth",
  description:
    "We don’t just build Webflow websites that look good; we build systems that perform. Every Webflow project at Dynamic Dreamz is designed with speed, conversions, and scalability in mind, so your website actively supports business growth instead of just existing online.",
  hideCta: true,
  items: [
    {
      icon: `${assets}/growth/performance-icon.svg`,
      iconAlt: "Performance-First Development icon",
      title: "Performance-First Development",
      description:
        "Our Webflow development approach prioritizes clean structure, optimized assets, and fast load times. The result? Better Core Web Vitals, improved SEO performance, and smoother user experiences across devices.",
    },
    {
      icon: `${assets}/growth/conversion-focused-icon.svg`,
      iconAlt: "Conversion-Focused Design icon",
      title: "Conversion-Focused Design",
      description:
        "Our Webflow development approach prioritizes clean structure, optimized assets, and fast load times. The result? Better Core Web Vitals, improved SEO performance, and smoother user experiences across devices.",
    },
    {
      icon: `${assets}/growth/future-ready-icon.svg`,
      iconAlt: "Future-Ready and Scalable icon",
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
  items: [],
} as const;

export const webflowDevelopmentTestimonials = {
  eyebrow: "Client Stories",
  heading: "Our Valued Clients",
  description:
    "Real feedback from real clients. See how our Webflow development work helps businesses launch faster, scale smarter, and achieve measurable results.",
  items: shopifyPlusAgencyTestimonials.items,
} as const;

export type WebflowMilestone = {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  value: number | string;
  suffix: string;
  countLabel: string;
};

export const webflowDevelopmentMilestones = {
  heading: "Milestones of Excellence",
  description:
    "Our Webflow development journey is defined by results, not promises. From global clients to high-impact projects, these milestones reflect the trust brands place in Dynamic Dreamz and the outcomes we consistently deliver.",
  items: [
    {
      icon: `${assets}/milestones/clients-worldwide.svg`,
      iconAlt: "Clients Worldwide icon",
      title: "Clients Worldwide",
      description:
        "We work with clients across industries and geographies, delivering Webflow websites that support growth at every stage",
      value: 1100,
      suffix: "+",
      countLabel: "Clients Worldwide",
    },
    {
      icon: `${assets}/milestones/projects-completed.svg`,
      iconAlt: "Projects Completed icon",
      title: "Projects Completed",
      description:
        "Our team has successfully delivered a wide range of Webflow development projects — from landing pages to complex CMS-driven websites.",
      value: 4500,
      suffix: "+",
      countLabel: "Projects Completed",
    },
    {
      icon: `${assets}/milestones/revenue-impact.svg`,
      iconAlt: "Revenue Impact icon",
      title: "Revenue Impact",
      description:
        "The Webflow websites we build help businesses convert better, scale faster, and generate measurable revenue impact.",
      value: "1B",
      suffix: "+",
      countLabel: "Revenue Influenced",
    },
  ],
} as const;

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

export const webflowDevelopmentCta = {
  heading: "Want us to help you with your online store?",
  ctaLabel: "REQUEST A QUOTE",
  ctaHref: "/request-quote",
} as const;
