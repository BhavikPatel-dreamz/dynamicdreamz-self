import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import { getClientLogo, type ImageItem } from "@/content/home";
import type { WhiteLabelFinalCta } from "@/types/white-label-service";

export type ShopifyHoursPackage = {
  hours: number;
  rate: number;
  previousRate: number;
  cost: number;
  previousCost: number;
  purchaseHref: string;
};

export const shopifyHoursSectionCopy = {
  brandsHeading: "Brands That Trust Us",
  pricing: {
    hours: "Hours",
    bulkHours: "Bulk hours",
    rate: "Rate",
    cost: "Cost",
    durationMinutes: ":00",
    perHour: "/hour",
    packageLabel: "Select a Shopify development hours package",
    hoursSuffix: "HRS",
    purchasePrefix: "Buy Shopify Hours - $",
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
  quoteLabel: "Request a custom quote",
  quoteHref: "/request-quote",
} as const;

export const shopifyHoursCommitments = {
  heading: "Designed for Flexibility, Speed, and Control",
  items: [
    {
      title: "Flexibility Without Commitment",
      description:
        "Use hours only when needed. No long-term retainers or fixed monthly obligations.",
    },
    {
      title: "Expert Shopify Team",
      description:
        "Access an experienced Shopify and Shopify Plus team instead of a single developer.",
    },
    {
      title: "Priority Execution",
      description:
        "Bulk hour tasks are handled with higher priority compared to ad-hoc requests.",
    },
    {
      title: "Multi-Store Usage",
      description:
        "Use hours across multiple Shopify stores owned by the same brand or company.",
    },
    {
      title: "Complete Transparency",
      description:
        "Tasks is tracked, documented, and reported with clear visibility of hours remaining.",
    },
  ],
} as const;

export const shopifyHoursAudiences = {
  heading: ["Who Should", "Buy Bulk", "Shopify Hours?"],
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
} as const;

export const shopifyHoursComparison = {
  heading: "Bulk Shopify Hours vs Full-Time Resource",
  eyebrow: "Choosing the Right Engagement Mode",
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
  heading: "How the Engagement Works",
  eyebrow: "Simple, Transparent Process",
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
  logo("ranavat"),
  logo("kvaser"),
  logo("prolash"),
  logo("tropicfeel"),
  logo("perfect-locks"),
  logo("bella-vita"),
  logo("bombay-shirt-company"),
  logo("nelter", "Nékter Juice Bar logo"),
  logo("royce-chocolate"),
  logo("tego"),
  logo("popclub"),
  logo("sleepy-cat"),
  logo("sim-direct"),
  logo("supertails"),
  logo("renee"),
  logo("sri-sri-tattva"),
  logo("eleven-eleven"),
  logo("kalki"),
  logo("jacadi-paris"),
  logo("rare-rabbit"),
] as const;

export const shopifyHoursMobileLogoRows = [
  shopifyHoursClientLogos.slice(0, 6),
  shopifyHoursClientLogos.slice(6, 13),
  [
    shopifyHoursClientLogos[13],
    shopifyHoursClientLogos[15],
    shopifyHoursClientLogos[16],
    shopifyHoursClientLogos[17],
    shopifyHoursClientLogos[18],
    shopifyHoursClientLogos[19],
    shopifyHoursClientLogos[14],
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

export const shopifyHoursFinalCta = {
  title: "Need Flexible Shopify Design & Development Support?",
  description:
    "Choose bulk hours for flexibility or talk to us about a dedicated Shopify resource.",
  label: "Request a Custom Quote",
} as const satisfies WhiteLabelFinalCta;
