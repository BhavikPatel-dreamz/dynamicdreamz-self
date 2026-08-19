import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

export const shopifyCroHero = {
  accent: "Shopify CRO:",
  title: "Increase Revenue Without Increasing Traffic",
  paragraphs: [
    "Most Shopify brands focus on acquiring more traffic.",
    "The reality is that many stores are already losing potential revenue because visitors abandon the buying journey before completing a purchase.",
    "At Dynamic Dreamz, we help Shopify brands identify and remove conversion barriers through data-driven Conversion Rate Optimization (CRO), funnel analysis, user behavior insights, A/B testing, and Shopify implementation.",
    "Instead of spending more on advertising, let’s maximize the value of the traffic you already have.",
  ],
  primaryCta: {
    label: "Get a CRO Assessment",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfOpCSEpli0RqjqrJWRLlNB9AYHH4d8lLAWTRVo1bcCkIyzDg/viewform?pli=1",
    external: true,
  },
  secondaryCta: {
    label: "Request a Quote",
    href: "/request-quote",
  },
  image: "/assets/shopify-cro-agency/hero/shopify-cro-banner.webp",
  imageAlt: "Shopify CRO Services Banner",
} as const;

export const shopifyCroBarriers = {
  heading: "Common Conversion Barriers We Help Identify & Optimize",
  description:
    "Increasing traffic is only one part of growth. If visitors are leaving before purchasing, you're losing revenue every day. Our Shopify CRO services help identify where customers are dropping off and implement improvements that increase conversions, revenue, and overall customer experience.",
  items: [
    {
      title: "Poor Mobile Experience",
      icon: "/assets/shopify-cro-agency/conversion/conversion-icon-1.svg",
      alt: "Poor Mobile Experience",
    },
    {
      title: "Weak Product Pages",
      icon: "/assets/shopify-cro-agency/conversion/conversion-icon-2.svg",
      alt: "Weak Product Pages",
    },
    {
      title: "Missing Trust Signals",
      icon: "/assets/shopify-cro-agency/conversion/conversion-icon-3.svg",
      alt: "Missing Trust Signals",
    },
    {
      title: "Cart Abandonment",
      icon: "/assets/shopify-cro-agency/conversion/conversion-icon-4.svg",
      alt: "Cart Abandonment",
    },
    {
      title: "Confusing Navigation",
      icon: "/assets/shopify-cro-agency/conversion/conversion-icon-5.svg",
      alt: "Confusing Navigation",
    },
    {
      title: "Slow Store Performance",
      icon: "/assets/shopify-cro-agency/conversion/conversion-icon-6.svg",
      alt: "Slow Store Performance",
    },
    {
      title: "Ineffective Calls-to-Action",
      icon: "/assets/shopify-cro-agency/conversion/conversion-icon-7.svg",
      alt: "Ineffective Calls-to-Action",
    },
    {
      title: "Poor Checkout Experience",
      icon: "/assets/shopify-cro-agency/conversion/conversion-icon-8.svg",
      alt: "Poor Checkout Experience",
    },
  ],
} as const;

export const shopifyCroRevenueImpact = {
  heading: "The Revenue Impact of Shopify CRO",
  description: "Small conversion improvements lead to significant revenue growth.",
  before: {
    badge: "Before Optimization",
    metrics: [
      {
        label: "Visitors",
        value: "50,000+",
        icon: "/assets/shopify-cro-agency/impact/visitors.svg",
      },
      {
        label: "Conversion",
        value: "1.0%",
        icon: "/assets/shopify-cro-agency/impact/conversion.svg",
      },
      {
        label: "AOV",
        value: "$100",
        icon: "/assets/shopify-cro-agency/impact/aov.svg",
      },
    ],
    totalLabel: "Revenue",
    totalValue: "$50,000",
  },
  after: {
    badge: "After Optimization",
    metrics: [
      {
        label: "Visitors",
        value: "50,000+",
        icon: "/assets/shopify-cro-agency/impact/visitors.svg",
      },
      {
        label: "Conversion",
        value: "1.5%",
        icon: "/assets/shopify-cro-agency/impact/conversion.svg",
      },
      {
        label: "AOV",
        value: "$100",
        icon: "/assets/shopify-cro-agency/impact/aov.svg",
      },
    ],
    totalLabel: "Revenue",
    totalValue: "$75,000",
  },
  footer: {
    text: "Additional Revenue Potential:",
    highlight: "+$25,000",
    suffix: "Per Month",
  },
} as const;

export const shopifyCroServices = {
  heading: "Our Shopify CRO Services",
  description:
    "End-to-end CRO services built for Shopify stores from initial audit to ongoing growth.",
  items: [
    {
      title: "Shopify CRO Audit",
      description:
        "A comprehensive review of your Shopify store, analytics, customer journey, and user experience to identify conversion opportunities and prioritize improvements that drive measurable business growth.",
      icon: "/assets/shopify-cro-agency/services/cro-audit.svg",
      alt: "Shopify CRO Audit",
    },
    {
      title: "Conversion Funnel Analysis",
      description:
        "We evaluate every stage of your customer journey to uncover drop-off points, optimize the buying experience, and improve the path from first visit to completed purchase.",
      icon: "/assets/shopify-cro-agency/services/funnel-analysis.svg",
      alt: "Conversion Funnel Analysis",
    },
    {
      title: "User Behavior Analysis",
      description:
        "Using advanced behavior analytics and session insights, we identify how real customers interact with your store and recommend improvements that enhance the experience.",
      icon: "/assets/shopify-cro-agency/services/user-behavior.svg",
      alt: "User Behavior Analysis",
    },
    {
      title: "A/B Testing & Experimentation",
      description:
        "We create, manage, and analyze structured experiments to validate design decisions, optimize user experiences, and continuously improve your store's conversion performance.",
      icon: "/assets/shopify-cro-agency/services/ab-testing.svg",
      alt: "A/B Testing",
    },
    {
      title: "Ongoing CRO Optimization",
      description:
        "Conversion optimization is an ongoing process. We continuously monitor performance, implement data-driven improvements, and refine your Shopify store to maximize long-term growth.",
      icon: "/assets/shopify-cro-agency/services/ongoing-optimization.svg",
      alt: "Ongoing CRO Optimization",
    },
  ],
} as const;

export const shopifyCroAssessment = {
  heading: "Get Your Shopify CRO Assessment",
  description: "Before recommending any CRO strategy, we evaluate:",
  points: [
    "Monthly Revenue",
    "Traffic Volume",
    "Conversion Rate",
    "Average Order Value (AOV)",
    "Analytics Setup",
  ],
  cta: {
    label: "COMPLETE CRO ASSESSMENT",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfOpCSEpli0RqjqrJWRLlNB9AYHH4d8lLAWTRVo1bcCkIyzDg/viewform?pli=1",
    external: true,
  },
} as const;

export const shopifyCroProcess = {
  heading: "Our Shopify CRO Process",
  description:
    "Our proven CRO process combines data, user insights, and continuous experimentation <br> to optimize every customer interaction and maximize Shopify conversions.",
  steps: [
    {
      number: "01",
      title: "Discover",
      description: "Understand your business, customers, goals, and current performance.",
      icon: "/assets/process/step-01.svg",
    },
    {
      number: "02",
      title: "Analyze",
      description: "Review analytics, customer behavior, heatmaps, and session recordings.",
      icon: "/assets/process/step-02.svg",
    },
    {
      number: "03",
      title: "Prioritize",
      description: "Identify conversion opportunities and create a prioritized optimization roadmap.",
      icon: "/assets/process/step-03.svg",
    },
    {
      number: "04",
      title: "Test & Implement",
      description: "Design, test, and implement data-driven improvements to your Shopify store.",
      icon: "/assets/process/step-04.svg",
    },
    {
      number: "05",
      title: "Scale & Optimize",
      description: "Continuously monitor results, optimize conversion performance, and maximize revenue.",
      icon: "/assets/process/step-05.svg",
    },
  ],
} as const;

export const shopifyCroWhyDynamicDreamz = {
  heading: "Why Dynamic Dreamz",
  paragraphs: [
    "Most CRO agencies provide recommendations and leave implementation to someone else.",
    "Dynamic Dreamz combines CRO strategy, Shopify development, UX improvements, and implementation under one roof.",
    "This means faster execution, fewer delays, and better results.",
  ],
  points: [
    "Shopify Platinum Partner",
    "20+ Years Experience",
    "2,000+ Shopify Projects Delivered",
    "Team of 150+ Professionals",
    "Dedicated Shopify Experts",
    "Strategy + Implementation Together",
  ],
  tagline: "One Partner. One Team. One Growth Strategy",
} as const;

export const shopifyCroEngagements = {
  heading: "Flexible Shopify CRO Engagements",
  items: [
    {
      title: "Shopify CRO Audit",
      description:
        "Ideal for brands looking to identify conversion opportunities and create a clear roadmap.",
      icon: "/assets/shopify-cro-agency/engagement/audit-sprint.svg",
      alt: "Shopify CRO Audit",
      features: [
        "Analytics Review",
        "Funnel Analysis",
        "UX Audit",
        "User Behavior Analysis",
        "Prioritized Recommendations",
        "90-Day CRO Roadmap",
      ],
      cta: {
        label: "REQUEST AUDIT DETAILS",
        href: "/request-quote",
      },
    },
    {
      title: "Shopify CRO Growth Partner",
      description:
        "Ideal for brands seeking ongoing optimization and implementation support.",
      icon: "/assets/shopify-cro-agency/engagement/growth-partner.svg",
      alt: "Growth Partner",
      features: [
        "Complete CRO Audit",
        "Ongoing Optimization",
        "A/B Testing",
        "Monthly Reporting",
        "Shopify Implementation Support",
        "Bi-Weekly Strategy Calls",
      ],
      cta: {
        label: "REQUEST CUSTOM PROPOSAL",
        href: "/request-quote",
      },
    },
  ],
} as const;

export const shopifyCroFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What is Shopify Conversion Rate Optimization (CRO)?",
    answer:
      "Shopify CRO is the process of improving your store so more visitors become customers. It involves analyzing user behavior, identifying conversion barriers, optimizing the shopping journey, and implementing data-driven improvements to increase conversions and revenue.",
  },
  {
    question: "How do I know if my Shopify store needs CRO?",
    answer:
      "If you have high traffic but low sales, high cart abandonment, poor mobile conversions, or rising advertising costs without matching revenue growth, your store will likely benefit from a Shopify CRO audit.",
  },
  {
    question: "What does a Shopify CRO audit include?",
    answer:
      "Our CRO audit includes Shopify & GA4 analytics review, funnel analysis, homepage, collection, product, cart and checkout evaluation, user behavior analysis, competitor benchmarking, and a prioritized optimization roadmap.",
  },
  {
    question: "Do you implement the recommended changes?",
    answer:
      "Yes. Unlike many CRO agencies, Dynamic Dreamz provides both CRO strategy and Shopify implementation. Our in-house Shopify experts can implement approved improvements, UX enhancements, and ongoing optimizations.",
  },
  {
    question: "Do you offer Shopify A/B testing?",
    answer:
      "Yes. For stores with sufficient traffic, we design and manage A/B tests to validate improvements. For lower-traffic stores, we focus on best-practice optimization and user behavior analysis.",
  },
  {
    question: "Why choose Dynamic Dreamz for Shopify CRO?",
    answer:
      "Dynamic Dreamz is a <strong>Shopify Premier Partner</strong> with 20+ years of ecommerce experience and 2,000+ Shopify projects delivered. We combine CRO strategy, Shopify development, UX optimization, and implementation under one roof to help brands maximize revenue from their existing traffic.",
  },
];

export const shopifyCroBottomCta = {
  heading: "Turn Existing Traffic into More Revenue",
  description: "Get more from your existing traffic before investing more in paid ads.",
  primaryCta: {
    label: "Get a CRO Assessment",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfOpCSEpli0RqjqrJWRLlNB9AYHH4d8lLAWTRVo1bcCkIyzDg/viewform?pli=1",
    external: true,
  },
  secondaryCta: {
    label: "Request a Quote",
    href: "/request-quote",
  },
} as const;
