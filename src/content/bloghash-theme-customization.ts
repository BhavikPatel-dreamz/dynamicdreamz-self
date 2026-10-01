import { industryBrandLogos } from "@/content/industries";
import type {
  BloghashBenefitIconName,
  BloghashFeatureIconName,
  BloghashServiceIconName,
} from "@/components/sections/bloghash-theme-customization/bloghash-icons";

export type BloghashFeatureItem = {
  iconName: BloghashFeatureIconName;
  title: string;
  description: string;
};

export type BloghashServiceItem = {
  iconName: BloghashServiceIconName;
  title: string;
  description: string;
};

export type BloghashBenefitItem = {
  iconName: BloghashBenefitIconName;
  title: string;
  description: string;
};

export type BloghashPortfolioItem = {
  name: string;
  category: string;
  href: string;
  image: string;
  imageAlt: string;
};

export type BloghashFaqItem = {
  question: string;
  answer: string;
};

export const bloghashThemeCustomizationContent = {
  hero: {
    eyebrow: ["Wordpress Agency", "Theme Customization"] as const,
    title: "BlogHash Theme Customization Service",
    description:
      "The BlogHash theme is a modern and minimal WordPress theme specially created for bloggers, writers, and content creators. With its clean design and customizable layout, it allows users to showcase their content engagingly. Our BlogHash Theme Customization Services ensure that your blog is fully optimized for performance, matches your brand identity, and provides an excellent user experience.",
    ctaText: "Request a Quote",
    ctaHref: "/request-quote",
    ctaAriaLabel: "Request a Quote",
    image: {
      src: "/assets/bloghash-theme-customization/hero/bloghash-theme-customization-service-img.webp",
      alt: "BlogHash Theme Customization Service Image",
      width: 1202,
      height: 948,
    },
  },
  brands: {
    title: "Trusted by \nLeading Brands",
    heading: "Trusted by \nLeading Brands",
    slug: "bloghash-theme-customization",
    items: industryBrandLogos,
  },
  features: {
    eyebrow: "Features",
    heading: "Features of BlogHash Theme",
    description:
      "The BlogHash theme is packed with features that help you build a stunning and professional blog.",
    items: [
      {
        iconName: "minimal-and-clean-design",
        title: "Minimal and Clean Design",
        description:
          "This theme offers you a distraction-free reading experience to your readers.",
      },
      {
        iconName: "fully-customizable-layouts",
        title: "Fully Customizable Layouts",
        description:
          "A drag-and-drop customizer allows you to modify colors, fonts, and layouts easily.",
      },
      {
        iconName: "seo-friendly-structure",
        title: "SEO-Friendly Structure",
        description:
          "An SEO-friendly structure can help improve your website's visibility on search engines.",
      },
      {
        iconName: "responsive-and-mobile-friendly",
        title: "Responsive and Mobile-Friendly",
        description:
          "This theme ensures a smooth front look across all devices.",
      },
      {
        iconName: "fast-loading-speed",
        title: "Fast Loading Speed",
        description:
          "A good theme structure and straightforward coding are optimized for better performance and user engagement.",
      },
      {
        iconName: "multiple-post-formats",
        title: "Multiple Post Formats",
        description:
          "This theme can support multiple post formats text, images, videos, and more.",
      },
      {
        iconName: "social-media-integration",
        title: "Social Media Integration",
        description:
          "You can easily integrate and allow users to share your content.",
      },
      {
        iconName: "gutenberg-compatible",
        title: "Gutenberg Compatible",
        description:
          "It can work smoothly with the latest WordPress Gutenberg block editor.",
      },
    ] as const,
  },
  services: {
    eyebrow: "Our Services",
    heading: "Our WordPress Theme \nCustomization Services",
    description:
      "We offer expert BlogHash theme customization services to help you create a professional and engaging blog.",
    items: [
      {
        iconName: "theme-installation",
        title: "Theme Installation",
        description:
          "We install and configure the BlogHash theme for optimal performance.",
      },
      {
        iconName: "custom-design-and-branding",
        title: "Custom Design and Branding",
        description:
          "We change colors, fonts, and layouts to match your style to create your custom design and branding.",
      },
      {
        iconName: "responsive-design",
        title: "Responsive Design",
        description:
          "We ensure a smooth user experience across all devices during our theme customization.",
      },
      {
        iconName: "advanced-features-integration",
        title: "Advanced Features Integration",
        description:
          "As per your custom requirements, we can add sliders, social media feeds, and other functionalities.",
      },
      {
        iconName: "performance-optimization",
        title: "Performance Optimization",
        description:
          "We improve your website speed and enhance its SEO ranking.",
      },
      {
        iconName: "ongoing-support-and-maintenance",
        title: "Ongoing Support and Maintenance",
        description:
          "We offer regular updates and technical assistance to keep your website working.",
      },
    ] as const,
  },
  benefits: {
    eyebrow: "Benefits",
    heading: "Benefits of BlogHash Theme Customization",
    description:
      "Customizing the BlogHash theme enhances your website’s appeal, functionality, and performance.",
    items: [
      {
        iconName: "fully-customizable-store",
        title: "Fully Customizable Store",
        description:
          "You can personalize every aspect of your website to match your brand.",
      },
      {
        iconName: "unique-brand-identity",
        title: "Unique Brand Identity",
        description:
          "Our theme customization can help you create a custom design tailored to your niche.",
      },
      {
        iconName: "improved-user-experience",
        title: "Improved User Experience",
        description:
          "You can improve your website by working on areas of improvement such as website navigation, design, and readability.",
      },
      {
        iconName: "multiple-third-party-plugins",
        title: "Multiple Third-party Plugins",
        description:
          "Using third-party plugins enhances your blog's functionality and look.",
      },
      {
        iconName: "mobile-optimization",
        title: "Mobile Optimization",
        description:
          "With customization, you can ensure fast loading speeds and smooth browsing on mobile devices.",
      },
      {
        iconName: "minimal-maintenance-cost",
        title: "Minimal Maintenance Cost",
        description:
          "After our theme customization, you can reduce the demand for frequent updates with optimized settings.",
      },
    ] as const,
  },
  whyChoose: {
    eyebrow: "Why Dynamic Dreamz",
    heading: "Why Choose Dynamic Dreamz",
    description:
      "At Dynamic Dreamz, we specialize in WordPress theme customization, ensuring a high-quality, performance-driven website.",
    items: [
      {
        title: "Expert Team",
        description:
          "Dynamic Dreamz has 100+ skilled WordPress developers with years of experience.",
      },
      {
        title: "Proven Process",
        description:
          "We follow a structured approach to ensure quality and timely delivery.",
      },
      {
        title: "Ongoing Support",
        description:
          "We provide continuous updates and maintenance to keep your website running smoothly.",
      },
      {
        title: "Client-Focused Approach",
        description:
          "We always keep your needs our priority to provide you with personalized support.",
      },
    ] as const,
  },
  portfolio: {
    eyebrow: "Portfolio",
    heading: "Snippets of WordPress Theme Customization Portfolio",
    description:
      "Explore our portfolio, which showcases successful WordPress theme customization projects and highlights how we customize, secure, and enhance stores for peak performance.",
    ctaLabel: "View our work",
    ctaHref: "/our-work",
    items: [
      {
        name: "Quite Events",
        category: "WORDPRESS",
        href: "https://www.quietevents.com/",
        image: "/assets/our-work/projects/quite-events.webp",
        imageAlt: "Quite Events WordPress Theme Customization",
      },
      {
        name: "Les Etoiles",
        category: "WORDPRESS",
        href: "https://louer-lesetoiles.ca/",
        image: "/assets/our-work/projects/les-etoiles.webp",
        imageAlt: "Les Etoiles WordPress Theme Customization",
      },
      {
        name: "Valents",
        category: "WORDPRESS",
        href: "https://wearvalents.com/",
        image: "/assets/our-work/projects/valents.webp",
        imageAlt: "Valents WordPress Theme Customization",
      },
      {
        name: "Get Sunsights",
        category: "WORDPRESS",
        href: "https://www.getsunsights.com/",
        image: "/assets/our-work/projects/get-sunsights.webp",
        imageAlt: "Get Sunsights WordPress Theme Customization",
      },
      {
        name: "Lipari Design",
        category: "WORDPRESS",
        href: "https://liparidesign.ca/",
        image: "/assets/our-work/projects/lipari-design.webp",
        imageAlt: "Lipari Design WordPress Theme Customization",
      },
      {
        name: "Nexventur",
        category: "WORDPRESS",
        href: "https://www.nexventur.com/",
        image: "/assets/our-work/projects/nexventur.webp",
        imageAlt: "Nexventur WordPress Theme Customization",
      },
      {
        name: "Awaken Media",
        category: "WORDPRESS",
        href: "https://www.awaken.media/",
        image: "/assets/our-work/projects/awaken-media.webp",
        imageAlt: "Awaken Media WordPress Theme Customization",
      },
      {
        name: "Budget Maids",
        category: "WORDPRESS",
        href: "https://www.budget-maids.com/",
        image: "/assets/our-work/projects/budget-maids.webp",
        imageAlt: "Budget Maids WordPress Theme Customization",
      },
    ] as const,
  },
  faqs: [
    {
      question: "What is the cost of the BlogHash theme customization?",
      answer:
        "The cost depends on the customization you need, its complexity, and the WordPress expert who will work on your project. If you want an exact estimation then please contact us with your detailed requirements.",
    },
    {
      question: "Can I customize the BlogHash theme without coding knowledge?",
      answer:
        "Yes, BlogHash is highly customizable, and with our professional theme customization services, you won’t require any coding knowledge.",
    },
    {
      question: "Is the BlogHash theme good for SEO?",
      answer:
        "Yes, BlogHash is SEO-friendly, and we can also enhance its optimization to improve your search engine rankings.",
    },
    {
      question: "How long does it take to customize the BlogHash theme?",
      answer:
        "The time required for theme customization depends on the complexity of the customization and scope. Basic changes take only a few days, and advanced and complex customization takes a few weeks.",
    },
    {
      question: "Can I integrate social media sharing buttons?",
      answer:
        "Yes, we can integrate any social media icons and sharing buttons to boost engagement.",
    },
    {
      question: "Will my site remain mobile-friendly after customization?",
      answer:
        "Absolutely! Our customization ensures that your blog is fully responsive on all devices. We check all pages in every screen size and ensure they are properly working.",
    },
  ] as const,
} as const;
