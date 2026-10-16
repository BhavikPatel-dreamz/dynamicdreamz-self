export type DiscoveryCallBenefit = {
  icon: string;
  title: string;
  description: string;
};

export type BookDiscoveryCallContent = {
  eyebrow: string;
  title: string;
  description: string;
  host: {
    name: string;
    role: string;
    image: string;
    imageAlt: string;
  };
  benefits: readonly DiscoveryCallBenefit[];
  calendar: {
    heading: string;
    details: string;
    iframeTitle: string;
    src: string;
  };
};

export const bookDiscoveryCallContent: BookDiscoveryCallContent = {
  eyebrow: "30-Minute Discovery Call",
  title: "Talk directly with our CTO.",
  description:
    "Use this call to walk us through what you are planning, where you are currently stuck, or what you want to improve. We’ll help you understand the right technical direction and practical next steps.",
  host: {
    name: "Sanjay Patel",
    role: "Co-Founder & CTO, Dynamic Dreamz",
    image: "/assets/about/team/sanjay-patel.jpg",
    imageAlt: "Sanjay Patel - Co-Founder & CTO",
  },
  benefits: [
    {
      icon: "30",
      title: "Focused 30-minute call",
      description: "Discuss your requirements without a lengthy sales process.",
    },
    {
      icon: "CTO",
      title: "Technical discussion",
      description: "Speak directly about feasibility, approach and implementation.",
    },
    {
      icon: "✓",
      title: "No obligation",
      description: "Understand the best next step before you proceed.",
    },
  ],
  calendar: {
    heading: "Select a date and time",
    details: "30 minutes · Online meeting",
    iframeTitle: "Select a Date & Time - Calendly",
    src: "https://calendly.com/spatel-dynamicdreamz/30min?hide_event_type_details=1&hide_gdpr_banner=1",
  },
};
