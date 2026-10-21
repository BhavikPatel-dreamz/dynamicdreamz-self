import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import type { ThemeCustomizationServicesContent } from "@/components/sections/theme-customization-services-section";
import type { IndustryCustomDevelopmentContent } from "@/components/sections/industry/industry-custom-development-section";
import type { WhiteLabelTool } from "@/types/white-label-service";
import type { HappyClientTestimonialItem } from "@/components/sections/happy-client-section";
import type { WhyChooseMigrationContent } from "@/components/sections/why-choose-shopify-migration-section";
import { industryBrandLogos } from "@/content/industries";
import { shopifyPlusAgencyPageTestimonials } from "@/content/shopify-plus-agency";

// 1. Hero
export const petIndustryHero: ServiceHeroVideoContent = {
  eyebrowSpans: ["Industry Solutions", "Pet Industry"],
  title: "Ecommerce Solutions for Pet Brands",
  paragraphs: [
    "We help pet food, wellness, accessories and lifestyle brands create easier product discovery, repeat-purchase journeys, mobile apps and custom digital experiences for pet owners.",
  ],
  cta: "Discuss Your Project",
  ctaHref: "/request-quote",
  secondaryCta: {
    label: "See Relevant Work",
    href: "#our_work",
  },
  video: "/assets/home/why-dynamic-dreamz.mp4",
  badges: [
    {
      src: "/assets/proof/shopify-platinum-partner.svg",
      alt: "Dynamic Dreamz - Shopify Platinum Partner",
      href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
      width: 136,
      height: 44,
    },
    {
      src: "/assets/proof/clutch-rating.svg",
      alt: "Dynamic Dreamz on Clutch — 4.9 rating",
      href: "https://clutch.co/profile/dynamic-dreamz",
      width: 111,
      height: 44,
    },
    {
      src: "/assets/proof/trustpilot-rating.svg",
      alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
      href: "https://www.trustpilot.com/review/dynamicdreamz.com",
      width: 148,
      height: 50,
    },
    {
      src: "/assets/proof/upwork-top-rated-plus.svg",
      alt: "Dynamic Dreamz — Upwork Top Rated Plus",
      href: "https://www.upwork.com/ag/dynamicdreamz/",
      width: 124,
      height: 44,
    },
  ],
};

// 2. Brand Logos
export const petIndustryBrandsConfig = {
  slug: "pet-industry",
  brands: {
    ariaLabel: "Pet industry brand logos supported by Dynamic Dreamz",
  },
};

export const petIndustryBrandsHeading = "Trusted by Leading Brands";
export const petIndustryBrands: readonly ClientLogoSliderItem[] = industryBrandLogos;

// 3. Challenges (Transparent)
export const petIndustryChallenges: ThemeCustomizationServicesContent = {
  eyebrow: "Industry Challenges",
  heading: "Built around the Pet Profile and the Reorder Cycle",
  description:
    "We design around how customers research, compare and buy in this category—and around the operational workflows that sit behind that experience.",
  boxes: [
    {
      number: "01",
      title: "The Category naturally runs on Reorder Cycles",
      description:
        "Food, treats and care products are purchased repeatedly, making frictionless reorder and subscription management important.",
    },
    {
      number: "02",
      title: "Every Pet is Different",
      description:
        "Breed, age, size, weight and dietary needs can all influence the right product or feeding recommendation.",
    },
    {
      number: "03",
      title: "One Customer may Manage Several Pets",
      description:
        "Separate profiles, preferences and schedules can make a standard customer account too limited.",
    },
    {
      number: "04",
      title: "Bulky Products can Destroy Margin",
      description:
        "Large food bags, crates and litter need weight and dimension-based shipping logic rather than a simple flat rate.",
    },
    {
      number: "05",
      title: "Advice-led Buying needs Strong Content",
      description:
        "Owners read ingredients, feeding guidance and wellness information before changing products.",
    },
    {
      number: "06",
      title: "Repeat Buyers Value Convenience",
      description:
        "Saved profiles, fast reorder, reminders, loyalty and push notifications can make mobile especially effective.",
    },
  ],
};

// 4. Solutions (Green)
export const petIndustrySolutions: ThemeCustomizationServicesContent = {
  eyebrow: "Solutions We Build",
  heading: "What We Build for Pet Brands",
  description:
    "From high-performing Shopify storefronts to autoship, custom recommendation flows and dedicated mobile apps.",
  boxes: [
    {
      number: "01",
      title: "Pet Profiles & Personalized Discovery",
      description:
        "Pet profiles, breed/age/size-based navigation, quizzes and recommendation journeys.",
    },
    {
      number: "02",
      title: "Subscriptions & Replenishment",
      description:
        "Recurring food, supplements and care products with easy management and reminders.",
    },
    {
      number: "03",
      title: "Product Education & Trust",
      description:
        "Feeding guides, ingredients, health goals, comparison, reviews and educational content.",
    },
    {
      number: "04",
      title: "Loyalty, Accounts & Mobile Apps",
      description:
        "Saved pets, reorder, loyalty, push notifications and cross-platform mobile shopping.",
    },
    {
      number: "05",
      title: "Shopify & Ecommerce Development",
      description:
        "Custom Shopify storefronts, theme work, integrations, performance and ongoing development.",
    },
    {
      number: "06",
      title: "Custom Platforms & Integrations",
      description:
        "Recommendation logic, CRM, fulfillment, APIs and full-stack development for more complex workflows.",
    },
  ],
};

// 5. Custom Development
export const petIndustryCustomDev: IndustryCustomDevelopmentContent = {
  eyebrow: "Custom Development",
  heading: "Build around the Pet Profile, not Just the Product Catalogue",
  description:
    "When product suitability depends on the pet, standard category navigation may not be enough. We can build saved profiles, recommendation logic, repeat-purchase journeys and connected mobile experiences.",
  items: [
    "Custom ecommerce functionality when standard platform features or apps are not enough.",
    "Full-stack development for product logic, pricing, portals and connected workflows.",
    "API integrations connecting storefronts, mobile apps and business systems.",
    "Ongoing QA, performance and development support after launch.",
  ],
};

// 6. Technologies Marquee
export const petIndustryTechnologies = {
  title: "Platforms, Frameworks & Mobile Capabilities",
  description:
    "We select technology around the customer experience, existing systems and long-term roadmap. The same team can support managed ecommerce, custom full-stack development, mobile apps and connected integrations.",
  rows: [
    [
      {
        name: "Shopify Development",
        image: "/assets/technologies/shopify-development.webp",
      },
      {
        name: "Shopify Plus Development",
        image: "/assets/technologies/shopify-plus-development.webp",
      },
      {
        name: "Full Stack Development",
        image: "/assets/technologies/full-stack-development.webp",
      },
      {
        name: "React Development",
        image: "/assets/technologies/react-development.webp",
      },
      {
        name: "Next.js Development",
        image: "/assets/technologies/next-js-development.webp",
      },
      {
        name: "Node.js Development",
        image: "/assets/technologies/node-js-development.webp",
      },
      {
        name: "React Native Development",
        image: "/assets/technologies/react-native-development.webp",
      },
      {
        name: "iOS Development",
        image: "/assets/technologies/ios-development.webp",
      },
      {
        name: "Android Development",
        image: "/assets/technologies/android-development.webp",
      },
      {
        name: "Figma Design",
        image: "/assets/technologies/figma-design.webp",
      },
    ],
    [
      {
        name: "Magento Development",
        image: "/assets/technologies/magento-development.webp",
      },
      {
        name: "WooCommerce Development",
        image: "/assets/technologies/woo-development.webp",
      },
      {
        name: "BigCommerce Development",
        image: "/assets/technologies/bigcommerce-development.webp",
      },
      {
        name: "WordPress Development",
        image: "/assets/technologies/wordpress-development.webp",
      },
      {
        name: "Webflow Development",
        image: "/assets/technologies/webflow-development.webp",
      },
      {
        name: "PHP Development",
        image: "/assets/technologies/php-development.webp",
      },
      {
        name: "Medusa Development",
        image: "/assets/technologies/medusa-development.webp",
      },
      {
        name: "GraphQL Development",
        image: "/assets/technologies/graphql-development.webp",
      },
    ],
  ] as const satisfies readonly (readonly WhiteLabelTool[])[],
};

// 7. Portfolio Showcase (6 Cards)
export const petIndustryPortfolio = {
  eyebrow: "Portfolio",
  heading: "Selected Pet Industry Experience",
  items: [
    {
      name: "Supertails",
      category: "Mobile Apps",
      image: "/assets/pet-industry/portfolio/supertails-dog.webp",
      imageAlt: "Supertails Image",
      href: "",
    },
    {
      name: "Paw Labs",
      category: "Shopify / Shopify Plus",
      image: "/assets/pet-industry/portfolio/paw-labs-pets.webp",
      imageAlt: "Paw Labs Image",
      href: "https://pawlabs.co/",
    },
    {
      name: "Neater Pets",
      category: "Shopify / Shopify Plus",
      image: "/assets/pet-industry/portfolio/neater-pets-dog.webp",
      imageAlt: "Neater Pets Image",
      href: "https://neaterpets.com/",
    },
    {
      name: "My Pet Frame",
      category: "Shopify / Shopify Plus",
      image: "/assets/pet-industry/portfolio/my-pet-frame-dogs.webp",
      imageAlt: "My Pet Frame Image",
      href: "https://mypetframe.co.uk/",
    },
    {
      name: "Kentaur Australia",
      category: "Shopify / Shopify Plus",
      image: "/assets/pet-industry/portfolio/kentaur-australia-equestrian.webp",
      imageAlt: "Kentaur Australia Image",
      href: "https://kentauraustralia.com/",
    },
    {
      name: "brilliantpetcare",
      category: "WordPress",
      image: "/assets/our-work/projects/brilliantpetcare.webp",
      imageAlt: "brilliantpetcare Image",
      href: "https://brilliantpetcare.com/",
    },
  ],
};

// 8. Why Choose Dynamic Dreamz
export const petIndustryWhyChoose: WhyChooseMigrationContent = {
  eyebrow: "Why Dynamic Dreamz",
  heading: "One Team Across Ecommerce, Custom Development and Mobile",
  description:
    "Delivering since 2006, with ecommerce specialists working alongside UI/UX designers, full-stack developers, mobile engineers and QA when a requirement crosses platform boundaries.",
  items: [
    {
      icon: "certified",
      title: "Industry-led Solution Design",
      description:
        "We start from product discovery, buying behaviour, operational constraints and customer expectations—not only from the chosen platform.",
    },
    {
      icon: "shopify-bag",
      title: "Strong Shopify Capability, Broader Technology Depth",
      description:
        "Shopify and Shopify Plus are core capabilities, supported by mobile, WordPress, Magento and full-stack technologies when required.",
    },
    {
      icon: "custom-build",
      title: "Custom-first when Needed",
      description:
        "Configurators, APIs, middleware, pricing logic and integrations can be developed around the exact business requirement.",
    },
    {
      icon: "long-term-support",
      title: "Long-term Development Support",
      description:
        "After launch, our team can continue with new features, CRO, integrations, performance and ongoing development.",
    },
  ],
  partnerLogo: "/assets/proof/shopify-platinum-partner.svg",
  partnerLogoAlt: "Dynamic Dreamz - Shopify Platinum Partner",
  logoHref: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
  partnerHeading: "20+ Years of Ecommerce Delivery",
  partnerDescription:
    "Dynamic Dreamz combines long-term web and ecommerce experience with a broader 150+ expert in-house team and more than 5,000 delivered projects.",
  stats: [
    {
      value: "20+",
      label: "Years of Experience",
    },
    {
      value: "150+",
      label: "Experts",
    },
    {
      value: "5k+",
      label: "projects delivered",
    },
    {
      value: "2.5k+",
      label: "Verified 5 star Reviews",
    },
  ],
  partnerLink: {
    label: "About Dynamic Dreamz",
    href: "/about-us",
  },
};

// 9. Client Stories
export const petIndustryTestimonials: {
  eyebrow: string;
  heading: string;
  description?: string;
  items: readonly HappyClientTestimonialItem[];
} = {
  eyebrow: "Client Stories",
  heading: "Don't Just Take Our Word For It",
  items: shopifyPlusAgencyPageTestimonials.items,
};

// 10. FAQs
export const petIndustryFaqEyebrow = "Frequently Asked Questions";
export const petIndustryFaqHeading = "What Pet Brands Ask about Autoship, Profiles & Mobile";

export const petIndustryFaqs: readonly FaqAccordionItem[] = [
  {
    question: "Do you have experience with pet ecommerce brands?",
    answer:
      "Yes. Our pet-industry work spans Shopify storefronts, mobile experiences, subscriptions, product discovery, custom functionality and ongoing ecommerce development.",
  },
  {
    question: "Can you build autoship or subscribe-and-save on Shopify?",
    answer:
      "Yes. We can set up recurring purchase journeys with delivery-frequency options, customer self-service, renewal reminders and account experiences designed around repeat orders.",
  },
  {
    question: "Can customers create profiles for different pets?",
    answer:
      "Yes. We can build pet-profile and recommendation experiences around attributes such as breed, age, size, weight or dietary needs when the product data and recommendation rules are available.",
  },
  {
    question: "How do you handle heavy or oversized pet products?",
    answer:
      "We can configure shipping logic around real product weight, dimensions, free-shipping thresholds and carrier rules so bulky products are priced more accurately at checkout.",
  },
  {
    question: "Do you build mobile apps for pet brands?",
    answer:
      "Yes. Our mobile team builds React Native iOS and Android apps that can connect with ecommerce, customer accounts, loyalty, subscriptions and reorder journeys.",
  },
  {
    question: "Can you connect pet ecommerce with CRM, inventory or fulfillment systems?",
    answer:
      "Yes. We build API and middleware integrations between the storefront, mobile apps and business systems when standard integrations are not enough.",
  },
];
