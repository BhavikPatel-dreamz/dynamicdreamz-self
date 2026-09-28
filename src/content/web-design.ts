import type { CityPageHeroContent } from "@/components/sections/city-page-hero-section";
import type { AgencyServicesContent } from "@/components/sections/agency-services-section";
import type { PricingEngagementContent } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import type { PortfolioShowcaseItem } from "@/components/sections/portfolio-showcase-section";
import type { HappyClientTestimonialItem } from "@/components/sections/shopify-plus-agency/happy-client-section";
import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

export const webDesignHero: CityPageHeroContent = {
  eyebrows: ["ESTABLISHED IN 2006", "WEB DESIGN AGENCY"],
  title: "UI/UX Design Services",
  description:
    "Dynamic Dreamz provides UI/UX and web design services for websites, ecommerce experiences and mobile apps. Our designers work across user journeys, wireframes, prototypes and polished interfaces to create clear, usable digital experiences aligned with your brand and business goals.",
  primaryCta: {
    label: "Request a Quote",
    href: "/request-quote",
  },
  badges: [
    {
      src: "/assets/proof/shopify-platinum-partner.svg",
      alt: "Dynamic Dreamz - Shopify Platinum Partner",
      width: 136,
      height: 44,
      href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
    },
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
      href: "https://www.upwork.com/ag/dynamicdreamz/",
    },
  ],
  tabletSlider: {
    bgShapeSrc: "/assets/services/shopify-development-in-bangalore/hero/slide-bg-shape.svg",
    slides: [
      {
        src: "/assets/services/wordpress-development-in-ahmedabad/hero/slide-green-future-energy.webp",
        alt: "greenfutureenergy",
        width: 1600,
        height: 2380,
      },
      {
        src: "/assets/services/shopify-development-in-bangalore/hero/slide-bellavita.webp",
        alt: "bellavita",
        width: 1600,
        height: 2380,
      },
      {
        src: "/assets/services/wordpress-development-in-ahmedabad/hero/slide-the-huddle-sports-grill.webp",
        alt: "thehuddlesportsgrill",
        width: 1600,
        height: 2380,
      },
      {
        src: "/assets/services/shopify-development-in-bangalore/hero/slide-kalki.webp",
        alt: "kalki",
        width: 1600,
        height: 2380,
      },
    ],
    topBadge: {
      src: "/assets/services/web-design/hero/figma-logo.webp",
      alt: "figma_rectangle_logo",
      width: 173,
      height: 106,
    },
    bottomBadge: {
      src: "/assets/services/web-design/hero/xd-logo.webp",
      alt: "XD_quare_logo",
      width: 130,
      height: 126,
    },
  },
};

export const webDesignBrands: readonly ClientLogoSliderItem[] = [
  {
    src: "/assets/clients/ranavat.svg",
    alt: "Ranavat Logo",
    width: 174,
    height: 19,
    href: "https://www.ranavat.com/",
  },
  {
    src: "/assets/clients/prolash.svg",
    alt: "prolash_black",
    width: 204,
    height: 22,
    href: "https://prolash.com/",
  },
  {
    src: "/assets/clients/tropicfeel.svg",
    alt: "Tropicfeel Logo",
    width: 150,
    height: 32,
    href: "https://shop.tropicfeel.com/",
  },
  {
    src: "/assets/clients/perfect-locks.svg",
    alt: "perfect_locks_color_logo",
    width: 175,
    height: 32,
    href: "https://www.perfectlocks.com/",
  },
  {
    src: "/assets/clients/bombay-shirt-company.svg",
    alt: "Bombay Shirt Company Logo",
    width: 204,
    height: 26,
    href: "https://www.bombayshirts.com/",
  },
  {
    src: "/assets/clients/kayfi.svg",
    alt: "kayfi-colored",
    width: 90,
    height: 49,
    href: "https://kayfi.com/",
  },
  {
    src: "/assets/clients/simsdirect.svg",
    alt: "simdirect_logo_color",
    width: 143,
    height: 49,
    href: "https://simsdirect.com.au/",
  },
  {
    src: "/assets/clients/kvaser.svg",
    alt: "Kvaser Logo",
    width: 135,
    height: 25,
    href: "https://www.kvaser.com/",
  },
  {
    src: "/assets/clients/nekter-colored.svg",
    alt: "nekter-colored",
    width: 66,
    height: 64,
    href: "https://www.nekterjuicebar.com/",
  },
  {
    src: "/assets/clients/circuit-city.svg",
    alt: "Circuit City Logo",
    width: 64,
    height: 64,
    href: "https://circuitcity.com/",
  },
];

export const webDesignServices: AgencyServicesContent = {
  eyebrow: "Our Services",
  heading: "What We Provide",
  description:
    "Our UI/UX service enhances satisfaction and engagement among users. It reduces the bounce rate and seamless navigation across websites, all tailored to meet the needs and preferences of your target audience.",
  items: [
    {
      icon: "/assets/services/web-design/consulting-icon.svg",
      iconAlt: "Consulting Services Icon",
      title: "Consulting Services",
      description:
        "Review your business goals, users, existing experience and project requirements to define a practical UI/UX direction before design work begins.",
    },
    {
      icon: "/assets/services/web-design/prototyping-icon.svg",
      iconAlt: "Prototyping Icon",
      title: "Prototyping",
      description:
        "Create interactive prototypes to validate key screens, navigation and user flows before development starts.",
    },
    {
      icon: "/assets/services/web-design/web-design-icon.svg",
      iconAlt: "Web Design Icon",
      title: "Web Design",
      description:
        "Design responsive websites and ecommerce experiences with clear hierarchy, brand consistency and user-friendly interactions.",
    },
    {
      icon: "/assets/services/web-design/mobile-app-icon.svg",
      iconAlt: "Mobile App Design Icon",
      title: "Mobile App Design",
      description:
        "Design mobile app experiences for iOS, Android and cross-platform products with clear navigation and platform-appropriate interaction patterns.",
    },
    {
      icon: "/assets/services/web-design/wireframing-icon.svg",
      iconAlt: "Wireframing Icon",
      title: "Wireframing",
      description:
        "Create low-fidelity wireframes to define page structure, content hierarchy, user flows and key functionality before visual design.",
    },
    {
      icon: "/assets/services/web-design/ui-design-icon.svg",
      iconAlt: "UI Design Services Icon",
      title: "UI Design Services",
      description:
        "Create polished interface designs using typography, colour, spacing, components and visual systems that reflect the brand while keeping usability in focus.",
    },
    {
      icon: "/assets/services/web-design/strategy-icon.svg",
      iconAlt: "UI/UX Strategy Development Icon",
      title: "UI/UX Strategy development",
      description:
        "Define the user-experience direction, information architecture and major user journeys based on business goals, project requirements and available user insights.",
    },
    {
      icon: "/assets/services/web-design/animation-icon.svg",
      iconAlt: "User Interface Animation Icon",
      title: "User Interface Animation",
      description:
        "Use purposeful motion and interaction design to provide feedback, guide attention and improve the feel of key interface interactions without adding unnecessary complexity.",
    },
  ],
};

export const webDesignPricing: PricingEngagementContent = {
  eyebrow: "Flexible Web Design Engagements",
  heading: "Choose the Right Web Design Engagement.",
  description:
    "Start with one Web Design project, use flexible hourly support, or add a dedicated designer / team around your ongoing project.",
  items: [
    {
      label: "Project-Based",
      badge: "Have One Project?",
      price: "Custom Quote",
      description:
        "For complete UI/UX design projects, website and app interfaces, user research, wireframing, prototyping, design systems and user-focused digital experiences.",
      ctaLabel: "Send Brief — Get a Quote in 24 Hours",
      ctaHref: "/request-quote",
    },
    {
      label: "Flexible Hourly Support",
      badge: "Need Extra Design Capacity?",
      price: "$20/hour",
      description:
        "For ongoing UI/UX support, design enhancements, interface improvements, usability refinements, design system updates and evolving digital product requirements.",
      ctaLabel: "Buy Web Design Hours",
      ctaHref: "/request-quote",
    },
    {
      label: "Dedicated Designer / Team",
      badge: "Need Ongoing Capacity?",
      price: "From $2,000/month",
      description:
        "For brands with an evolving design roadmap, multiple digital products or a need for dedicated UI/UX designers or a wider design team.",
      ctaLabel: "Discuss a Dedicated Team",
      ctaHref: "/request-quote",
    },
  ],
};

export const webDesignPortfolio = {
  eyebrow: "Portfolio",
  heading: "Glimpses of Our UI/UX Design Outcomes",
  description:
    "Explore selected UI/UX and web design work across websites, ecommerce and digital products, including projects where our team supported wireframes, interface design, user-flow improvements and design refinement.",
  category: "Ui/UX Design",
  platformMark: {
    src: "/assets/services/web-design/ui-ux-badge.svg",
    width: 44,
    height: 44,
  },
  ctaLabel: "View our work",
  ctaHref: "/portfolio",
  items: [
    {
      name: "Brilliant Pet",
      href: "https://brilliantpetcare.com/",
      image: "/assets/services/web-design/portfolio/brilliant-pet.webp",
      imageAlt: "Brilliant Pet Image",
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
      imageAlt: "Joburg Meats Image",
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
      imageAlt: "Go Float Image",
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
      imageAlt: "Lana’s Holistic Centre Image",
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
      imageAlt: "Rocksolid Fitness Image",
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
      imageAlt: "Bright Cuties Image",
      category: "Ui/UX Design",
      platformMark: {
        src: "/assets/services/web-design/ui-ux-badge.svg",
        width: 44,
        height: 44,
      },
    },
    {
      name: "Parts Prime",
      href: "https://partsprime.ca/",
      image: "/assets/our-work/projects/parts-prime.webp",
      imageAlt: "Parts Prime Image",
      category: "Ui/UX Design",
      platformMark: {
        src: "/assets/services/web-design/ui-ux-badge.svg",
        width: 44,
        height: 44,
      },
    },
    {
      name: "Daniel Walters",
      href: "https://www.danielwalters.com/",
      image: "/assets/our-work/projects/daniel-walters-eyewear.webp",
      imageAlt: "Daniel Walters Image",
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
    answer:
      "UI, or user interface design, focuses on the visual and interactive elements of a website or app, such as layout, typography, colour, components and states. UX, or user experience design, focuses on how users move through the product, complete tasks and understand the information. Strong digital products usually require both.",
  },
  {
    question: "What UI/UX design services does Dynamic Dreamz provide?",
    answer:
      "We provide UI/UX consulting, wireframing, interactive prototyping, web design, ecommerce design, mobile app design, interface design, UX strategy and interface animation.",
  },
  {
    question: "What does your UI/UX design process involve?",
    answer:
      "We begin by understanding the business goals, users, content and functional requirements. Depending on the project, the process can include research, information architecture, wireframes, prototypes, visual UI design, feedback rounds and preparation of final design files for development.",
  },
  {
    question: "Can you redesign an existing website or app?",
    answer:
      "Yes. We can review an existing digital experience and redesign selected pages, flows or the complete interface while preserving useful brand elements and existing business requirements.",
  },
  {
    question: "How do you involve clients in the design process?",
    answer:
      "We work collaboratively through requirements discussions, design reviews and structured feedback rounds. We typically share design progress in Figma so stakeholders can review screens, comment and approve the direction before development.",
  },
  {
    question: "Do you design for ecommerce as well as business websites?",
    answer:
      "Yes. Our UI/UX team works on ecommerce stores, business and service websites, landing pages, mobile apps and other digital interfaces. For ecommerce, we can also coordinate closely with our Shopify, WooCommerce and development teams.",
  },
  {
    question: "How long does a UI/UX design project take?",
    answer:
      "Timing depends on the number of screens, complexity, content readiness and feedback cycles. A focused landing page or small design task can be completed faster, while a multi-page website, ecommerce redesign or mobile app may require several weeks. We confirm the schedule after reviewing the scope.",
  },
  {
    question: "What do I receive at the end of the design project?",
    answer:
      "Depending on the agreed scope, deliverables can include wireframes, high-fidelity Figma designs, responsive screen variations, interactive prototypes, reusable components and developer-ready design files.",
  },
  {
    question: "Do you provide ongoing UI/UX support?",
    answer:
      "Yes. We can support ongoing design improvements, new pages or screens, ecommerce campaigns, feature design and design-system updates based on the engagement model.",
  },
];
