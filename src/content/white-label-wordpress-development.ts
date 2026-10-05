import type { PricingEngagementContent } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import type {
  WhiteLabelCard,
  WhiteLabelFaq,
  WhiteLabelFinalCta,
  WhiteLabelPlan,
  WhiteLabelProcessStep,
  WhiteLabelService,
  WhiteLabelStat,
  WhiteLabelTool,
} from "@/types/white-label-service";

export const whiteLabelWordPressSectionCopy = {
  reasonsTitle:
    "Why Agencies Choose Dynamic Dreamz <br>for White Label WordPress Development",
  servicesTitle: "White Label WordPress Development Services",
  servicesCta: "Let me give you a hand to help you",
  pricingTitle: "Choose the Right Wordpress Development Engagement.",
  pricingDescription:
    "Choose project-based development, flexible WordPress support starting from $20/hour, or a dedicated developer/team for ongoing requirements.",
  toolsTitle: "WordPress Technologies We Work With",
  toolsDescription: "At Dynamic Dreamz, we are skilled in:",
  processTitle: "How Our White Label Partnership Works",
  processNote:
    "We value confidentiality and respect our partnership agreements, guaranteeing all work stays under your brand name.",
  faqHeading: "Frequently Asked Questions",
} as const;

export const whiteLabelWordPressHero = {
  title: "White Label WordPress Development Services",
  titleHighlight: "for Agencies",
  subtitle: "Expand Your Agency's Capabilities with Expert WordPress Developers",
  description:
    "Dynamic Dreamz provides white label WordPress development for digital and web agencies that need reliable development capacity behind their brand. Our team handles custom WordPress websites, WooCommerce, themes, plugins, Figma-to-WordPress, performance optimization and ongoing support while working within your agency's process and confidentiality requirements.",
  primaryCta: {
    label: "get in touch",
    href: "/request-quote",
  },
  secondaryCta: {
    label: "See Pricing",
    href: "#our_white_label_pricing",
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
} as const;

export const whiteLabelWordPressStats: readonly WhiteLabelStat[] = [
  {
    value: "50+ Agencies",
    label: "Supported Worldwide",
  },
  {
    value: "20+ Years",
    label: "Web & Ecommerce Experience",
  },
  {
    value: "150+ Experts",
    label: "Commerce & Technology",
  },
  {
    value: "5000+",
    label: "Projects Delivered",
  },
];

export const whiteLabelWordPressReasons: readonly WhiteLabelCard[] = [
  {
    title: "Diverse Tech Stack",
    description:
      "We are experienced in custom themes, plugins, page builders, and hosting solutions.",
  },
  {
    title: "Optimized for SEO & Performance",
    description:
      "We are experienced in custom themes, plugins, page builders, and hosting solutions.",
  },
  {
    title: "Reliable Ongoing Support",
    description:
      "Our services offer maintenance, security updates, and feature enhancements for long-term success.",
  },
  {
    title: "100% White Label Solution",
    description:
      "Your brand, our expertise. We work behind the scenes while you take full credit.",
  },
  {
    title: "Experienced Team",
    description:
      "Dedicated WordPress developers with deep expertise in custom development.",
  },
  {
    title: "Extensive Industry Knowledge",
    description:
      "20+ years of experience across various industries and business models.",
  },
];

export const whiteLabelWordPressServices: readonly WhiteLabelService[] = [
  {
    title: "Custom WordPress Website",
    description: "We provide custom-made, feature-rich WordPress websites.",
    icon: "/assets/white-label-wordpress/services/custom-wordpress-website.svg",
  },
  {
    title: "WooCommerce Development",
    description:
      "Our experts can develop scalable eCommerce solutions with custom functionalities.",
    icon: "/assets/white-label-wordpress/services/woocommerce-development.svg",
  },
  {
    title: "Custom Plugin & Theme Development",
    description:
      "We can integrate custom plugins and themes to extend website abilities.",
    icon: "/assets/white-label-wordpress/services/custom-plugin-theme-development.svg",
  },
  {
    title: "Figma to WordPress",
    description:
      "We can convert your Figma designs into pixel-perfect and responsive WordPress websites.",
    icon: "/assets/services/figma-design-conversion.svg",
  },
  {
    title: "WordPress Performance Optimization",
    description:
      "We help you get faster load times, better rankings, and improved user experience.",
    icon: "/assets/white-label-wordpress/services/wordpress-performance-optimization.svg",
  },
  {
    title: "Page Builder Expertise",
    description:
      "Our expert developers are familiar with page builders such as Elementor, WPBakery, Divi, Gutenberg, and more.",
    icon: "/assets/white-label-wordpress/services/wordpress-page-builders.svg",
  },
];

export const whiteLabelWordPressPlans: readonly WhiteLabelPlan[] = [
  {
    name: "Project-Based",
    price: "Custom Quote",
    bestFor:
      "For complete WordPress website builds, custom theme development, website redesigns, plugin development, third-party integrations, WooCommerce solutions and technically complex WordPress projects.",
  },
  {
    name: "Flexible Hourly Support",
    price: "$20/hour",
    bestFor:
      "For ongoing WordPress maintenance, enhancements, troubleshooting, performance improvements, security updates and evolving website development requirements.",
  },
  {
    name: "Dedicated Developer / Team",
    price: "From $2,000/month",
    bestFor:
      "For brands with an evolving WordPress roadmap, multiple websites or a need for a dedicated developer or wider development team.",
  },
];

export const whiteLabelWordPressPricing: PricingEngagementContent = {
  eyebrow: "Flexible WordPress Engagements",
  heading: "Choose the Right Wordpress Development Engagement.",
  description:
    "Choose project-based development, flexible WordPress support starting from $20/hour, or a dedicated developer/team for ongoing requirements.",
  items: [
    {
      label: "Project-Based",
      badge: "Have One Project?",
      price: "Custom Quote",
      description:
        "For complete WordPress website builds, custom theme development, website redesigns, plugin development, third-party integrations, WooCommerce solutions and technically complex WordPress projects.",
      ctaLabel: "Send Brief — Get a Quote in 24 Hours",
      ctaHref: "/request-quote",
    },
    {
      label: "Flexible Hourly Support",
      badge: "Need Extra Wordpress Capacity?",
      price: "$20/hour",
      description:
        "For ongoing WordPress maintenance, enhancements, troubleshooting, performance improvements, security updates and evolving website development requirements.",
      ctaLabel: "Buy Wordpress Development Hours",
      ctaHref: "/request-quote",
    },
    {
      label: "Dedicated Developer / Team",
      badge: "Need Ongoing Capacity?",
      price: "From $2,000/month",
      description:
        "For brands with an evolving WordPress roadmap, multiple websites or a need for a dedicated developer or wider development team.",
      ctaLabel: "Discuss a Dedicated Team",
      ctaHref: "/book-a-discovery-call",
    },
  ],
};

const tool = (name: string, filename: string): WhiteLabelTool => ({
  name,
  image: `/assets/white-label-wordpress/tools/${filename}.svg`,
});

export const whiteLabelWordPressToolRows: readonly (readonly WhiteLabelTool[])[] = [
  [
    tool("Astra", "astra"),
    tool("Avada", "avada"),
    tool("GeneratePress", "generatepress"),
    tool("Kadence WP", "kadence-wp"),
    tool("OceanWP", "oceanwp"),
    tool("Elementor", "elementor"),
    tool("WPBakery", "wpbakery"),
    tool("Beaver Builder", "beaver-builder"),
    tool("Brizy", "brizy"),
    tool("Oxygen Builder", "oxygen-builder"),
    tool("Advanced Custom Fields", "advanced-custom-fields"),
    tool("WP Rocket", "wp-rocket"),
  ],
  [
    tool("Rank Math", "rank-math"),
    tool("Yoast", "yoast"),
    tool("Gravity Forms", "gravity-forms"),
    tool("WPML", "wpml"),
    tool("Polylang", "polylang"),
    tool("MemberPress", "memberpress"),
    tool("WP Engine", "wp-engine"),
    tool("Kinsta", "kinsta"),
    tool("Cloudways", "cloudways"),
    tool("SiteGround", "siteground"),
    tool("Bluehost", "bluehost"),
  ],
] as const;

export const whiteLabelWordPressProcess: readonly WhiteLabelProcessStep[] = [
  {
    title: "Share Your Requirements",
    description:
      "Tell us about your client's project requirements, and we will examine them and give you a quote.",
  },
  {
    title: "We Develop & Test",
    description: "Our expert team develops and tests your website to be ideal.",
  },
  {
    title: "You Deliver to Your Clients",
    description:
      "When we finish the project successfully, you can hand it over to the client with white label branding.",
  },
  {
    title: "Ongoing Support & Maintenance",
    description:
      "We offer ongoing support after the post-launch. We stay behind the scenes, ensuring smooth operation.",
  },
];

export const whiteLabelWordPressFaqs: readonly WhiteLabelFaq[] = [
  {
    question: "Will my clients know Dynamic Dreamz is involved?",
    answer:
      "No, we provide a 100% white label service, which means your clients will never know Dynamic Dreamz worked on the project.",
    answerParts: [
      { text: "No, we provide a " },
      { text: "100% white label service", strong: true },
      {
        text: ", which means your clients will never know Dynamic Dreamz worked on the project.",
      },
    ],
  },
  {
    question: "Can I hire your team on an ongoing basis?",
    answer:
      "Yes, you can hire our team for your ongoing projects! We can offer fixed-price and hourly based contracts or dedicated developers.",
    answerParts: [
      { text: "Yes, you can hire our team for your ongoing projects! We can offer " },
      {
        text: "fixed-price and hourly based contracts or dedicated developers.",
        strong: true,
      },
    ],
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Absolutely. We prioritize discretion and confidentiality, ensuring all work stays under your brand name.",
    answerParts: [
      { text: "Absolutely. We prioritize " },
      { text: "discretion and confidentiality", strong: true },
      { text: ", ensuring all work stays under your brand name." },
    ],
  },
  {
    question:
      "Can you work with our preferred themes, plugins, and hosting providers?",
    answer:
      "Yes. Our developers work with major WordPress themes, plugins, page builders and hosting environments, and can adapt to your agency's preferred technology stack.",
    answerParts: [
      { text: "Yes. Our developers work with " },
      {
        text: "major WordPress themes, plugins, page builders and hosting environments",
        strong: true,
      },
      { text: ", and can adapt to your agency's preferred technology stack." },
    ],
  },
  {
    question: "What industries have you worked with?",
    answer:
      "We have experience in industries such as eCommerce, real estate, healthcare, finance, cosmetics, apparel, education, and more.",
    answerParts: [
      {
        text: "We have experience in industries such as eCommerce, real estate, healthcare, finance, cosmetics, apparel, education, and more.",
        strong: true,
      },
    ],
  },
  {
    question: "How do you interact with clients and oversee projects?",
    answer:
      "We offer flexible communication options. You can handle client communication yourself, or we can interact with your clients directly under your brand. We use project management tools like Trello, Asana, ClickUp, and Slack to ensure transparency, smooth collaboration, and efficient project execution.",
    answerParts: [
      { text: "We offer " },
      { text: "flexible communication options", strong: true },
      { text: ". You can " },
      { text: "handle client communication yourself", strong: true },
      { text: ", or we can " },
      { text: "interact with your clients directly under your brand", strong: true },
      { text: ". We use " },
      { text: "project management tools like Trello, Asana, ClickUp, and Slack", strong: true },
      { text: " to ensure " },
      {
        text: "transparency, smooth collaboration, and efficient project execution.",
        strong: true,
      },
    ],
  },
  {
    question: "Where are your offices and what are your operating hours?",
    answer:
      "Our main office is in Surat, India, with an additional office in Ahmedabad. We operate Monday to Friday, from 9 AM to 7 PM IST. We are also available for client calls during off-hours when needed to accommodate clients in different time zones.",
    answerParts: [
      { text: "Our main office is in " },
      { text: "Surat, India", strong: true },
      { text: ", with an additional office in " },
      { text: "Ahmedabad", strong: true },
      { text: ". We operate " },
      { text: "Monday to Friday, from 9 AM to 7 PM IST", strong: true },
      { text: ". We are also available for " },
      { text: "client calls during off-hours", strong: true },
      {
        text: " when needed to accommodate clients in different time zones.",
      },
    ],
  },
  {
    question:
      "Can your WordPress developers work as an extension of our agency team?",
    answer:
      "Yes. Our developers can work within your existing workflow, project-management tools and communication process. Depending on your preferred model, we can work entirely behind the scenes or communicate with your clients under your agency's brand.",
    answerParts: [
      { text: "Yes. Our developers can work within your " },
      {
        text: "existing workflow, project-management tools and communication process",
        strong: true,
      },
      { text: ". Depending on your preferred model, we can " },
      { text: "work entirely behind the scenes", strong: true },
      { text: " or " },
      { text: "communicate with your clients under your agency's brand", strong: true },
      { text: "." },
    ],
  },
];

export const whiteLabelWordPressFinalCta = {
  title: "Let's Build WordPress Websites Under Your Brand!",
  description:
    "Are you looking for a trusted white label WordPress partner? Together, let's improve your agency!",
  label: "CONTACT US TODAY",
} as const satisfies WhiteLabelFinalCta;
