import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

const iconPath = (name: string) => `/assets/hire-wordpress-developers/icons/${name}.svg`;

export const hireWordPressHero = {
  title: "Hire WordPress Developers",
  description:
    "A typical WordPress development consists of project manager, designer, developer, quality assuror. Generally, it is a tedious task to hire them from different sources and align them for one project. Dynamic Dreamz simply eliminates your worries by providing all resources under one roof.",
  ctaLabel: "hire WordPress developers",
  stats: [
    { value: "50+", label: "Agile enabled WordPress Developers" },
    { value: "5000+", label: "Completed Projects" },
    { value: "20+", label: "Years of Experience" },
    { value: "1000+", label: "Happy & Satisfied Clients" },
    { value: "1000+", label: "WordPress Developments" },
  ],
} as const;

export const hireWordPressProcess = {
  heading: "Easy Hiring Process to Get Started",
  description: "Let Dynamic Dreamz assist you to achive your goals!",
  items: [
    {
      title: "Share Requirements",
      description: "Share Your specific Requirements with us.",
      icon: iconPath("share-requirements"),
      iconAlt: "Share requirements",
    },
    {
      title: "Expert Talent Selection",
      description: "We pick the most suitable talents for you.",
      icon: iconPath("expert-talent-selection"),
      iconAlt: "Expert talent selection",
    },
    {
      title: "Matching Business Talent",
      description: "Select the right talent that fit for your business",
      icon: iconPath("matching-business-talent"),
      iconAlt: "Matching business talent",
    },
    {
      title: "Project Kickstart Phase",
      description: "Get going with your project Development.",
      icon: iconPath("project-kickstart"),
      iconAlt: "Project kickstart phase",
    },
  ],
} as const;

export const hireWordPressReasons = {
  heading: "What makes an excellent choice to hire a dedicated WordPress team?",
  items: [
    {
      description:
        "We don’t just talk. Dynamic Dreamz has a proven track record of WordPress Development. Check our WordPress portfolio.",
      icon: iconPath("proven-wordpress-track-record"),
      iconAlt: "Proven WordPress development track record",
    },
    {
      description: "We are an all under one roof WordPress development agency.",
      icon: iconPath("wordpress-agency"),
      iconAlt: "WordPress development agency",
    },
    {
      description: "We assign dedicated developers for your WordPress store development.",
      icon: iconPath("dedicated-wordpress-developers"),
      iconAlt: "Dedicated WordPress developers",
    },
    {
      description: "We are an end to end turnkey solution provider.",
      icon: iconPath("end-to-end-solution"),
      iconAlt: "End-to-end WordPress solution",
    },
    {
      description:
        "We have extensive domain knowledge of industry verticals like Fashion, Cosmetics, Retail, Healthcare, jewelry.",
      icon: iconPath("industry-domain-experience"),
      iconAlt: "Industry domain experience",
    },
    {
      description:
        "We commit to only those objectives which we can fulfill. We don’t make false promise.",
      icon: iconPath("delivery-commitment"),
      iconAlt: "Delivery commitment",
    },
  ],
} as const;

export const hireWordPressAdvantages = {
  heading: "The Dynamic Dreamz Advantage",
  items: [
    {
      title: "Easy and fair hiring process with no hidden cost",
      icon: "/assets/hire-shopify-developers/icons/fair-hiring.svg",
      iconAlt: "Fair hiring process",
    },
    {
      title: "Save up to 60% on your development cost",
      icon: "/assets/hire-shopify-developers/icons/development-savings.svg",
      iconAlt: "Development cost savings",
    },
    {
      title: "Our developer can work as per local time zone",
      icon: "/assets/hire-shopify-developers/icons/timezone.svg",
      iconAlt: "Local time zone alignment",
    },
    {
      title: "Your strategic data is secure and confidential.",
      icon: iconPath("data-security"),
      iconAlt: "Data security and confidentiality",
    },
    {
      title: "Focus on your business, we'll handle all HR needs",
      icon: "/assets/hire-shopify-developers/icons/managed-hr.svg",
      iconAlt: "Managed HR needs",
    },
    {
      title: "Unmatched post production support",
      icon: "/assets/hire-shopify-developers/icons/post-production-support.svg",
      iconAlt: "Post production support",
    },
  ],
} as const;

export const hireWordPressPortfolio = {
  heading: "Glimpses of Our WordPress Development",
  description:
    "We’ve had the experience of working on some of the challenging projects in our 20 years of professional journey. We have served across various verticals",
  items: [
    {
      name: "Quite Events",
      href: "https://www.quietevents.com/",
      image: "/assets/our-work/projects/quite-events.webp",
      imageAlt: "Quite Events WordPress project preview",
    },
    {
      name: "Les Etoiles",
      href: "https://louer-lesetoiles.ca/",
      image: "/assets/our-work/projects/les-etoiles.webp",
      imageAlt: "Les Etoiles WordPress project preview",
    },
    {
      name: "Valents",
      href: "https://wearvalents.com/",
      image: "/assets/our-work/projects/valents.webp",
      imageAlt: "Valents WordPress project preview",
    },
    {
      name: "Get Sunsights",
      href: "https://www.getsunsights.com/",
      image: "/assets/our-work/projects/get-sunsights.webp",
      imageAlt: "Get Sunsights WordPress project preview",
    },
    {
      name: "Lipari Design",
      href: "https://liparidesign.ca/",
      image: "/assets/our-work/projects/lipari-design.webp",
      imageAlt: "Lipari Design WordPress project preview",
    },
    {
      name: "Nexventur",
      href: "https://www.nexventur.com/",
      image: "/assets/our-work/projects/nexventur.webp",
      imageAlt: "Nexventur WordPress project preview",
    },
  ],
} as const;

export const hireWordPressTestimonials = {
  heading: "Why Clients Love Us",
  description:
    "At Dynamic Dreamz, we pride ourselves on delivering top notch WordPress<br> development services that exceed our clients' expectations.",
} as const;

export const hireWordPressFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What services do you offer for WordPress development?",
    answer:
      "It depends on the size and scope of your project. Dynamic Dreamz can offer you all resources at one place that includes a designer, a developer and a quality assurer. If you want to hire either a designer or developer only, we can provide you with a competent resource.",
  },
  {
    question: "How long does it take to develop a WordPress website?",
    answer:
      "The timeline for developing a WordPress website depends on the project's scope and complexity. A simple website may take a few weeks, while a more complex project can take several months. We work closely with our clients to establish realistic timelines and ensure timely delivery.",
  },
  {
    question: "Can you customize my existing WordPress website?",
    answer:
      "Yes, our developers can customize your existing WordPress website to meet your specific needs. Whether it's adding new features, redesigning the layout, or improving performance, we can help you achieve your goals.",
  },
  {
    question: "What are your pricing models for hiring the WordPress team?",
    answer: "We offer three affordable and convenient models:",
    listItems: [
      {
        label: "Dedicated team model:",
        text: "In this model, you can hire a dedicated team of a WordPress designer, a developer, and a QA. The team will work as per your needs and members will one to one report you.",
      },
      {
        label: "Fixed price model:",
        text: "If you have a small project or an upgrade, you can select this model where price is fixed with predefined budget and scope of the project. You can pay as per the milestone completed.",
      },
      {
        label: "Hourly model:",
        text: "Here you can hire the team which work on hourly basis and you have to pay on the work completed. The billing cycle will be weekly or monthly.",
      },
    ],
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Absolutely. We provide ongoing support and maintenance services to ensure your website remains up to date, secure, and running smoothly. Our support packages can be tailored to your needs, offering peace of mind for your business.",
  },
  {
    question: "How do I get started with hiring a WordPress developer?",
    answer:
      "Getting started is easy. Simply contact us via our contact form, email, or phone to discuss your project. We’ll set up a consultation to understand your needs and provide a customized proposal.",
  },
  {
    question: "What is the average no. of years of experience of your WordPress developer?",
    answer:
      "On an average, our WordPress developers have 4+ years of experience with strong domain knowledge and excellent communication skills.",
  },
  {
    question: "What are the tools through which your developers communicate with?",
    answer:
      "Our WordPress developers are well acquainted with Skype, Slack, Microsoft Teams for communication with the clients.",
  },
  {
    question: "What project management tools (PMS) can your WordPress developers use?",
    answer:
      "Our WordPress developers can efficiently use Trello, Jira, Monday.com, Smartsheet, Basecamp, and other PMS tools.",
  },
  {
    question: "How much does it cost to hire a WordPress developer?",
    answer:
      "The cost of hiring a WordPress developer varies depending on the complexity of your project, the developer’s experience, and the specific services you require. We offer competitive pricing and can provide a detailed quote after discussing your project needs.",
  },
];
