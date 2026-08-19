import type { AgencyServicesContent } from "@/components/sections/agency-services-section";
import type { PortfolioShowcaseItem } from "@/components/sections/portfolio-showcase-section";
import type { ServiceHeroContent } from "@/components/sections/service-hero-section";
import type { HappyClientTestimonialItem } from "@/components/sections/shopify-plus-agency/happy-client-section";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export const webDesignHero: ServiceHeroContent = {
  title: "UI/UX Design Services",
  description:
    "We provide top tier UI/UX services, including website design, mobile app design, wireframing, UI/UX strategy development, and consulting services. We create intuitive, visually appealing interfaces and enhance user experiences through iterative prototyping, wireframing, and detailed user journey mapping. Optimize your website with our expert UI/UX design services for seamless user engagement.",
  ctaLabel: "Request a Quote",
  ctaHref: "/request-quote",
};

export const webDesignBrands = [
  {
    name: "Ranavat",
    src: "/assets/clients/ranavat.svg",
    alt: "Ranavat Logo",
    width: 174,
    height: 19,
    href: "https://www.ranavat.com/",
  },
  {
    name: "Prolash",
    src: "/assets/clients/prolash.svg",
    alt: "prolash_black",
    width: 204,
    height: 22,
    href: "https://prolash.com/",
  },
  {
    name: "Tropicfeel",
    src: "/assets/clients/tropicfeel.svg",
    alt: "Tropicfeel Logo",
    width: 150,
    height: 32,
    href: "https://shop.tropicfeel.com/",
  },
  {
    name: "Perfect Locks",
    src: "/assets/clients/perfect-locks.svg",
    alt: "perfect_locks_color_logo",
    width: 175,
    height: 32,
    href: "https://www.perfectlocks.com/",
  },
  {
    name: "Bombay Shirt Company",
    src: "/assets/clients/bombay-shirt-company.svg",
    alt: "Bombay Shirt Company Logo",
    width: 204,
    height: 26,
    href: "https://www.bombayshirts.com/",
  },
  {
    name: "Kayfi",
    src: "/assets/clients/kayfi.svg",
    alt: "kayfi-colored",
    width: 90,
    height: 49,
    href: "https://kayfi.com/",
  },
  {
    name: "SimsDirect",
    src: "/assets/clients/simsdirect.svg",
    alt: "simdirect_logo_color",
    width: 143,
    height: 49,
    href: "https://simsdirect.com.au/",
  },
  {
    name: "Kvaser",
    src: "/assets/clients/kvaser.svg",
    alt: "Kvaser Logo",
    width: 135,
    height: 25,
    href: "https://www.kvaser.com/",
  },
  {
    name: "Nekter",
    src: "/assets/clients/nekter.svg",
    alt: "nekter-colored",
    width: 66,
    height: 64,
    href: "https://www.nekterjuicebar.com/",
  },
  {
    name: "Circuit City",
    src: "/assets/clients/circuit-city.svg",
    alt: "Circuit City Logo",
    width: 64,
    height: 64,
    href: "https://circuitcity.com/",
  },
] as const;

export const webDesignServices: AgencyServicesContent = {
  heading: "What We Provide",
  description:
    "Our UI/UX service enhances satisfaction and engagement among users. It reduces the bounce rate and seamless navigation across websites, all tailored to meet the needs and preferences of your target audience.",
  items: [
    {
      icon: "/assets/services/web-design/consulting-icon.svg",
      iconAlt: "Consulting Icon",
      title: "Consulting Services",
      description:
        "Pick your path to triumph in UI UX design. We offer professional direction to evaluate your requirements and user paths and build a victorious design strategy.",
    },
    {
      icon: "/assets/services/web-design/prototyping-icon.svg",
      iconAlt: "Prototyping Icon",
      title: "Prototyping",
      description:
        "Make your idea live with the help of our experts. We develop reciprocal prototypes that let you test and filter your UI/UX design before development initiates.",
    },
    {
      icon: "/assets/services/web-design/web-design-icon.svg",
      iconAlt: "Web Design Icon",
      title: "Web Design",
      description:
        "Make a stunning online presence with our excellent web design services. We design gorgeous & user friendly websites that attract more users, propel conversions, and enhance your brand.",
    },
    {
      icon: "/assets/services/android-app-development/existing-app-icon.svg",
      iconAlt: "Mobile App Icon",
      title: "Mobile App Design",
      description:
        "Give the power to your users' hands. We are experts in building reflexive and fascinating mobile app ventures that smoothly integrate with your brand.",
    },
    {
      icon: "/assets/services/web-design/wireframing-icon.svg",
      iconAlt: "Wireframing Icon",
      title: "Wireframing",
      description:
        "Create the groundwork for a successful brand. We build low fidelity wireframes to evaluate your app or website structure, user experience, and fundamental features.",
    },
    {
      icon: "/assets/services/web-design/ui-design-icon.svg",
      iconAlt: "UI Design Icon",
      title: "UI Design Services",
      description:
        "Our specialists make it attractive and usable. We produce intuitive, aesthetically tempting user interfaces that precisely capture your brand's essence.",
    },
    {
      icon: "/assets/services/web-design/strategy-icon.svg",
      iconAlt: "Strategy Icon",
      title: "UI/UX Strategy development",
      description:
        "It involves defining the overall vision and goals for the user experience and aligning them with business objectives. We conduct thorough research, define user personas, and map user journeys. Through iterative prototyping and usability testing, we ensure optimal interface design and navigation, aiming for seamless and engaging interactions across websites.",
    },
    {
      icon: "/assets/services/web-design/animation-icon.svg",
      iconAlt: "Animation Icon",
      title: "User Interface Animation",
      description:
        "It involves adding motion graphics and animations to enhance the user experience and make the product feel more engaging. We integrate animations strategically to guide user interactions, improve usability, and create engaging visual feedback. Through meticulous design and implementation, we ensure animations complement UI elements, elevating overall user satisfaction and interaction quality.",
    },
  ],
  cta: {
    label: "Let me give you a hand to help you",
    href: "/request-quote",
    ariaLabel: "Dynamic Dreamz - Let me give you a hand to help you",
  },
};

export const webDesignPortfolio = {
  heading: "Glimpses of Our UI UX Design Outcomes",
  description:
    "Our expert UI/UX service has enhanced user satisfaction, improved usability, and higher retention rates for our clients. Through intuitive design, seamless navigation, and optimized interactions, our happy clients have achieved better conversion rates, positive brand perception, and overall success in their digital endeavors.",
  category: "Ui/UX Design",
  platformMark: {
    src: "/assets/services/web-design/ui-ux-badge.svg",
    width: 44,
    height: 44,
  },
  items: [
    {
      name: "Brilliant Pet",
      href: "https://brilliantpetcare.com/",
      image: "/assets/services/web-design/portfolio/brilliant-pet.webp",
      imageAlt: "Brilliant Pet UI/UX Design Project",
      category: "Ui/UX Design",
      platformMark: {
        src: "/assets/services/web-design/ui-ux-badge.svg",
        width: 44,
        height: 44,
      },
    },
    {
      name: "Joburg Meats",
      href: "https://joburgmeats.com/",
      image: "/assets/food-beverages/portfolio/joburg-meats.webp",
      imageAlt: "Joburg Meats UI/UX Design Project",
      category: "Ui/UX Design",
      platformMark: {
        src: "/assets/services/web-design/ui-ux-badge.svg",
        width: 44,
        height: 44,
      },
    },
    {
      name: "Go Float",
      href: "https://www.gofloat.io/en/",
      image: "/assets/services/web-design/portfolio/go-float.webp",
      imageAlt: "Go Float UI/UX Design Project",
      category: "Ui/UX Design",
      platformMark: {
        src: "/assets/services/web-design/ui-ux-badge.svg",
        width: 44,
        height: 44,
      },
    },
    {
      name: "Lana’s Holistic Centre",
      href: "https://lhc-ipswich.com/",
      image: "/assets/services/web-design/portfolio/lanas-holistic-centre.webp",
      imageAlt: "Lana’s Holistic Centre UI/UX Design Project",
      category: "Ui/UX Design",
      platformMark: {
        src: "/assets/services/web-design/ui-ux-badge.svg",
        width: 44,
        height: 44,
      },
    },
    {
      name: "Rocksolid Fitness",
      href: "https://rocksolidfitness.ca/",
      image: "/assets/services/web-design/portfolio/rocksolid-fitness.webp",
      imageAlt: "Rocksolid Fitness UI/UX Design Project",
      category: "Ui/UX Design",
      platformMark: {
        src: "/assets/services/web-design/ui-ux-badge.svg",
        width: 44,
        height: 44,
      },
    },
    {
      name: "Bright Cuties",
      href: "https://brightcuties.com/",
      image: "/assets/services/web-design/portfolio/bright-cuties.webp",
      imageAlt: "Bright Cuties UI/UX Design Project",
      category: "Ui/UX Design",
      platformMark: {
        src: "/assets/services/web-design/ui-ux-badge.svg",
        width: 44,
        height: 44,
      },
    },
  ] satisfies readonly PortfolioShowcaseItem[],
};

export const webDesignTestimonials: {
  heading: string;
  description: string;
  items: readonly HappyClientTestimonialItem[];
} = {
  heading: "Don't Just Take Our Word For It",
  description:
    "We have faith in our work, but what truly matters is the outcomes we serve our clients. Happy clients make happy stories. Check out how our services empower them to evolve.",
  items: shopifyPlusAgencyTestimonials.items,
};

export const webDesignFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What's the difference between UI and UX design?",
    listPosition: "before",
    listItems: [
      {
        label: "UI stands for User Interface.",
        text: "It concentrates on the graphical elements of your app or website, like color scheme, layout, button placement, and typography.",
      },
      {
        label: "UX stands for User Experience.",
        text: "It contains the whole user journey, evaluating how visitors interact with your product and how it makes them feel.",
      },
    ],
    answer:
      "We blend UI and UX design principles to develop a smooth and flattering user experience.",
  },
  {
    question: "What can your UI/UX design service do for my business?",
    answer:
      "Our expert UI/UX design service can help you expand and evolve by achieving goals such as growing brand awareness, boosting conversions, sweetening user experience, improving customer satisfaction, and ultimately driving business growth.",
  },
  {
    question: "What does your UI/UX design process typically involve?",
    answer:
      "Our UI UX design approach is cooperative and iterative. We generally follow these steps:",
    listItems: [
      {
        label: "Meeting:",
        text: "We sit with you to understand your business goals, target audience, and brand identity.",
      },
      {
        label: "Research:",
        text: "We conduct research to comprehend user requirements and pain points.",
      },
      {
        label: "Information Architecture:",
        text: "We develop a blueprint to manage and handle your content and guarantee that user flow is transparent and reflexive.",
      },
      {
        label: "Wireframing:",
        text: "To specify the essential functionalities and structure of the website or app, we create low fidelity wireframes.",
      },
      {
        label: "Prototyping:",
        text: "We create interactive prototypes to experiment and distill your website design with users.",
      },
      {
        label: "UI Design:",
        text: "We design the graphical components of your app or website that concentrate on usability and aesthetics.",
      },
      {
        label: "Usability Testing:",
        text: "We perform usability testing to pinpoint usability issues and guarantee the final design is user friendly.",
      },
    ],
  },
  {
    question: "Can you customize your UI/UX design services to fit my business needs?",
    answer:
      "Absolutely! We provide multiple UI/UX design services that can match your exact necessities and budget, whether you need a new design of the website or just customization of the website or app.",
  },
  {
    question: "What are the skills a designer must have?",
    answer:
      "A professional UI/UX designer requires a blend of technical skills, soft skills, and design knowledge. Check the list below:",
    listItems: [
      { text: "User Research and Empathy" },
      { text: "Information Architecture and User Flow" },
      { text: "Wireframing and Prototyping" },
      { text: "Visual Design" },
      { text: "Communication and Collaboration" },
      { text: "Problem solving and Critical Thinking" },
    ],
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in a variety of industries, such as eCommerce, healthcare, education, and more. Our diverse experience allows us to tailor our designs to meet the specific needs of different sectors.",
  },
  {
    question: "How do you involve clients in the design process?",
    answer:
      "We prioritize collaboration and involve clients at every stage of the design process. It includes regular meetings, feedback sessions, and design reviews to ensure the final product aligns with your vision and objectives.",
  },
  {
    question: "How do you ensure your designs are user centric?",
    answer:
      "At Dynamic Dreamz, we conduct extensive user research, including surveys, interviews, and usability testing, to gather insights into user behavior and preferences. Our design decisions are based on user data and feedback from clients to ensure the final product aligns with user needs.",
  },
  {
    question: "What is the typical timeline for a UI/UX project?",
    answer:
      "The timeline varies depending on the project’s scope and complexity. Generally, a standard UI/UX project can take anywhere from 6 to 12 weeks. We provide detailed timelines and regular updates throughout the project to keep clients informed.",
  },
  {
    question: "What is the cost of hiring a dedicated UI/UX designer from Dynamic Dreamz?",
    answer:
      "The cost of hiring a dedicated UI/UX designer from Dynamic Dreamz can depend on your project requirements and the experience and expertise of a designer.",
  },
  {
    question: "Do you offer ongoing support after the project is completed?",
    answer:
      "Yes, we offer ongoing support and maintenance services to ensure your product continues to meet user needs and performs optimally. It includes updates, enhancements, and troubleshooting as needed.",
  },
];
