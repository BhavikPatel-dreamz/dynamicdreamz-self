import type {
  WhiteLabelCard,
  WhiteLabelFaq,
  WhiteLabelFinalCta,
  WhiteLabelHero,
  WhiteLabelPlan,
  WhiteLabelProcessStep,
  WhiteLabelService,
  WhiteLabelStat,
  WhiteLabelTool,
} from "@/types/white-label-service";

export const whiteLabelWordPressHero = {
  title: "White label WordPress Development Services",
  accent: "for Agencies",
  lead: "Expand Your Agency's Capabilities with Expert WordPress Developers",
  paragraphs: [
    "At Dynamic Dreamz, we offer white label WordPress development services, helping agencies scale effortlessly by providing high-quality WordPress websites under their brand.",
    [
      { text: "Our goal is to " },
      { text: "empower your agency with smooth WordPress solutions", strong: true },
      { text: " so that you can " },
      { text: "focus on growing your business.", strong: true },
    ],
  ],
  cta: "get in touch",
  illustration:
    "/assets/white-label-wordpress/hero/white-label-wordpress-development-agencies.svg",
  illustrationAlt: "White label WordPress development services for agencies",
} as const satisfies WhiteLabelHero;

export const whiteLabelWordPressStats: readonly WhiteLabelStat[] = [
  {
    value: "20+",
    label: "Years of experience",
    icon: "/assets/proof/years-of-experience.svg",
  },
  {
    value: "150+",
    label: "Skilled Developers",
    icon: "/assets/proof/skilled-developers.svg",
  },
  {
    value: "2500+",
    label: "Client Reviews",
    icon: "/assets/proof/client-reviews.svg",
  },
  {
    value: "1000+",
    label: "Sites Delivered",
    icon: "/assets/proof/sites-delivered.svg",
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
    name: "Hourly Development",
    price: "$20/hr",
    bestFor: "Small tasks, bug fixes, and quick updates.",
  },
  {
    name: "Dedicated Developer",
    price: "$2,000/month",
    bestFor: "Full-time WordPress developer for your agency.",
  },
  {
    name: "Fixed-Price Projects",
    price: "Custom Quote",
    bestFor: "Well-defined projects with clear deliverables.",
  },
];

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
    tool("Amazon Web Services", "aws"),
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
    question: "Can you work with our preferred themes, plugins, and hosting providers?",
    answer:
      "Yes! We specialize in various WordPress technologies and adapt to your requirements. Our expert WordPress developers are skilled and have expertise in all themes, plugins, and hosting providers.",
    answerParts: [
      { text: "Yes! We specialize in " },
      { text: "various WordPress technologies", strong: true },
      {
        text: " and adapt to your requirements. Our expert WordPress developers are skilled and have expertise in all themes, plugins, and hosting providers.",
      },
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
];

export const whiteLabelWordPressFinalCta = {
  title: "Let's Build WordPress Websites Under Your Brand!",
  description:
    "Are you looking for a trusted white label WordPress partner? Together, let's improve your agency!",
  label: "CONTACT US TODAY",
} as const satisfies WhiteLabelFinalCta;
