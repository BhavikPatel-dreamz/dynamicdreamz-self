import type { ShopifyTeamBoxesContent } from "@/components/sections/shopify-team-boxes-section";
import type { ThemeCustomizationServicesContent } from "@/components/sections/theme-customization-services-section";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import { getClientLogo, type ImageItem } from "@/content/home";

export type ShopifyHoursPackage = {
  hours: number;
  rate: number;
  previousRate: number;
  cost: number;
  previousCost: number;
  purchaseHref: string;
};

export const shopifyHoursSectionCopy = {
  brandsHeading: "Partnering with Ambitious Brands",
  brandsDescription:
    "Selected brands our teams have supported across Shopify, Shopify Plus and digital commerce.",
  pricing: {
    hours: "Hours",
    bulkHours: "Bulk hours",
    rate: "Rate",
    cost: "Cost",
    durationMinutes: ":00",
    perHour: "/hour",
    packageLabel: "Select a Shopify development hours package",
    hoursSuffix: "HRS",
    purchasePrefix: "BUY SHOPIFY HOURS - $",
  },
} as const;

export const shopifyHoursPackages = [
  {
    hours: 10,
    rate: 40,
    previousRate: 50,
    cost: 400,
    previousCost: 500,
    purchaseHref: "https://rzp.io/rzp/dynamicdreamz-10hourspackage",
  },
  {
    hours: 25,
    rate: 35,
    previousRate: 40,
    cost: 875,
    previousCost: 1000,
    purchaseHref: "https://rzp.io/rzp/dynamicdreamz-25hourspackage",
  },
  {
    hours: 50,
    rate: 30,
    previousRate: 35,
    cost: 1500,
    previousCost: 1750,
    purchaseHref: "https://rzp.io/rzp/dynamicdreamz-50hourspackage",
  },
  {
    hours: 100,
    rate: 25,
    previousRate: 30,
    cost: 2500,
    previousCost: 3000,
    purchaseHref: "https://rzp.io/rzp/dynamicdreamz-100hourspackage",
  },
] as const satisfies readonly ShopifyHoursPackage[];

export const shopifyHoursHero = {
  eyebrows: ["Established in 2006", "Shopify Platinum Partner"] as const,
  title: "Hire Shopify Developer with Flexible Hours",
  emphasizedTitle: "Flexible Hours",
  description:
    "Get expert Shopify designers and developers when you need them. Prepaid hours that can be used anytime for ongoing design, development, and store improvements.",
  highlightsHeading: "Key Highlights",
  highlights: [
    "Flexible usage, no fixed monthly commitment",
    "Works across multiple Shopify stores",
    "Priority execution by an experienced Shopify team",
    "Transparent time tracking and reporting",
  ],
  pricingHeading: {
    prefix: "Starting from",
    accent: "$25/hour",
    suffix: "with bulk package",
  },
  quoteLabel: "Request a Custom Quote",
  quoteHref: "/request-quote",
} as const;

export const shopifyHoursCommitments: ThemeCustomizationServicesContent = {
  eyebrow: "Why Bulk Hours",
  heading: "Designed for Flexibility, Speed, and Control",
  description:
    "Get reliable Shopify development support without long-term commitments. Use your hours when needed, work with an experienced team, and maintain clear control over priorities, usage, and delivery.",
  boxes: [
    {
      number: "01",
      title: "Flexibility Without Commitment",
      description:
        "Use hours only when needed. No long-term retainers or fixed monthly obligations.",
    },
    {
      number: "02",
      title: "Expert Shopify Team",
      description:
        "Access an experienced Shopify and Shopify Plus team instead of a single developer.",
    },
    {
      number: "03",
      title: "Priority Execution",
      description:
        "Bulk hour tasks are handled with higher priority compared to ad-hoc requests.",
    },
    {
      number: "04",
      title: "Multi-Store Usage",
      description:
        "Use hours across multiple Shopify stores owned by the same brand or company.",
    },
    {
      number: "05",
      title: "Complete Transparency",
      description:
        "Tasks is tracked, documented, and reported with clear visibility of hours remaining.",
    },
  ],
};

export const shopifyHoursAudiences: ShopifyTeamBoxesContent = {
  eyebrow: "Flexible Shopify Hours",
  heading: "Who Should Buy Bulk Shopify Hours?",
  description:
    "Bulk Shopify hours are ideal for businesses that need reliable development support without the cost of a full-time developer. Use dedicated hours for ongoing improvements, new features, campaigns, and store maintenance.",
  items: [
    {
      title: "Growing Brands",
      description:
        "Businesses making frequent design or feature updates without the need for a full-time developer.",
    },
    {
      title: "Shopify Plus Stores",
      description:
        "Stores requiring continuous enhancements, campaigns, and custom functionality.",
    },
    {
      title: "Founders & E‑com Teams",
      description:
        "Teams that want reliable Shopify support without managing developers internally.",
    },
    {
      title: "Agencies",
      description:
        "Agencies looking for dependable white-label Shopify design and development support.",
    },
  ],
};

export const shopifyHoursComparison = {
  eyebrow: "Engagement Options",
  heading: "Bulk Shopify Hours vs Full-Time Resource",
  description: "Choosing the Right Engagement Mode.",
  ribbon: "We offer both — you choose what fits your business.",
  items: [
    {
      title: "Bulk Shopify Hours",
      points: [
        "No long-term commitment",
        "Pay only for actual work needed",
        "Access to a Shopify team",
        "Easy to scale hours up or down",
      ],
      note: "Bulk hours are ideal for flexibility.",
      cta: "get started",
      href: "/request-quote",
    },
    {
      title: "Full-Time Shopify Resource",
      points: [
        "Fixed monthly cost",
        "Dedicated developer assigned",
        "Best for continuous daily workload",
      ],
      note: "Full-time resources are better for constant, ongoing development.",
      cta: "get started",
      href: "/request-quote",
    },
  ],
} as const;

export const shopifyHoursTasks = {
  eyebrow: "Flexible Use Cases",
  heading: "What Can You Use Shopify Hours For?",
  description:
    "Your bulk hours can be used for a wide range of Shopify design and development tasks, including:",
  items: [
    "Shopify Theme Customizations",
    "Custom Sections & Templates",
    "Landing Page Design & Development",
    "Shopify Store Setup & Enhancements",
    "App Installation & Configuration",
    "Feature Enhancements & Custom Logic",
    "Speed & Performance Improvements",
    "Responsive Design Enhancements",
    "Upsell & Cross-sell Setup",
    "Subscription Setup",
    "Bug Fixes & Ongoing Store Support",
  ],
} as const;

export const shopifyHoursProcess = {
  eyebrow: "Engagement Process",
  heading: "How the Engagement Works",
  description:
    "A simple, transparent process that lets you purchase Shopify development hours, share tasks, and track progress without long-term commitments.",
  items: [
    {
      text: "Select hours using the pricing slider",
      lines: ["Select hours using", "the pricing slider"],
    },
    {
      text: "Purchase hours or request a custom quote",
      lines: ["Purchase hours or", "request a custom quote"],
    },
    {
      text: "Hours are added to your account",
      lines: ["Hours are added to", "your account"],
    },
    {
      text: "Share tasks via email or project tool",
      lines: ["Share tasks via email", "or project tool"],
    },
    {
      text: "Receive regular updates and time reports",
      lines: ["Receive regular updates", "and time reports"],
    },
  ],
} as const;

const logo = (src: string, alt?: string): ImageItem => ({
  ...getClientLogo(`/assets/clients/${src}.svg`),
  ...(alt ? { alt } : {}),
});

export const shopifyHoursClientLogos = [
  logo("royce-chocolate", "Royce Chocolate logo"),
  logo("jacadi-paris", "Jacadi Paris logo"),
  logo("rare-rabbit", "Rare Rabbit logo"),
  logo("bella-vita", "Bella Vita logo"),
  logo("sri-sri-tattva", "Sri Sri Tattva logo"),
  logo("renee", "Renee logo"),
  logo("nelter", "Nelter logo"),
  logo("tropicfeel", "Tropicfeel logo"),
  logo("ranavat", "Ranavat logo"),
  logo("perfect-locks", "Perfect Locks logo"),
  logo("bombay-shirt-company", "Bombay Shirt Company logo"),
  logo("kalki", "KALKI logo"),
  logo("kvaser", "Kvaser logo"),
  logo("tego", "Tego logo"),
  logo("sleepy-cat", "Sleepy Cat logo"),
  logo("supertails", "Super Tails logo"),
  logo("sim-direct", "SIM Direct logo"),
  logo("eleven-eleven", "Eleven Eleven logo"),
  logo("popclub", "PopClub logo"),
  logo("prolash", "Prolash logo"),
] as const;

export const shopifyHoursMobileLogoRows = [
  [
    shopifyHoursClientLogos[8],
    shopifyHoursClientLogos[12],
    shopifyHoursClientLogos[19],
    shopifyHoursClientLogos[7],
    shopifyHoursClientLogos[9],
    shopifyHoursClientLogos[3],
  ],
  [
    shopifyHoursClientLogos[0],
    shopifyHoursClientLogos[1],
    shopifyHoursClientLogos[2],
    shopifyHoursClientLogos[4],
    shopifyHoursClientLogos[5],
    shopifyHoursClientLogos[6],
    shopifyHoursClientLogos[10],
  ],
  [
    shopifyHoursClientLogos[11],
    shopifyHoursClientLogos[13],
    shopifyHoursClientLogos[14],
    shopifyHoursClientLogos[15],
    shopifyHoursClientLogos[16],
    shopifyHoursClientLogos[17],
    shopifyHoursClientLogos[18],
  ],
] as const;

export const shopifyHoursFaqs = [
  {
    question: "What are Shopify hours packages?",
    answer:
      "Shopify hours packages are prepaid development hours that can be used for Shopify design, development, enhancements, and ongoing support as needed.",
  },
  {
    question: "Do the purchased hours expire?",
    answer: "No. Purchased Shopify hours do not expire and can be used anytime.",
  },
  {
    question: "What type of work can these hours be used for?",
    answer:
      "Hours can be used for Shopify design and development work such as theme customizations, new sections, feature enhancements, app setup, bug fixes, and ongoing store improvements.",
  },
  {
    question: "How are hours tracked and reported?",
    answer:
      "Hours are tracked based on actual time spent on tasks. Clear updates and summaries are shared for full transparency.",
  },
  {
    question: "Can hours be used across multiple Shopify stores?",
    answer:
      "Yes. Hours can be used across multiple Shopify stores owned by the same business or brand.",
  },
  {
    question: "Is there a minimum task size to use the hours?",
    answer: "No. Hours can be used for small fixes as well as larger development tasks.",
  },
  {
    question: "Are these hours recurring or subscription-based?",
    answer: "No. These are one-time prepaid hours with no recurring charges.",
  },
  {
    question: "How quickly can work start after purchase?",
    answer:
      "Our team will contact you within one business day to confirm onboarding and next steps.",
  },
  {
    question:
      "Can I speak directly with a developer or team lead to explain my requirements?",
    answer:
      "Yes. Based on the task and complexity, we can arrange a call with a developer or team lead to clearly understand your requirements and ensure smooth execution.",
  },
  {
    question: "Can I switch to a full-time Shopify resource later?",
    answer:
      "Yes. You can move from an hours-based model to a dedicated Shopify developer or team at any time.",
  },
] as const satisfies readonly FaqAccordionItem[];
