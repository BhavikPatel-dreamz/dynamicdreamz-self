import { industryBrandLogos } from "@/content/industries";
import type {
  PopularfxBenefitIconName,
  PopularfxFeatureIconName,
  PopularfxServiceIconName,
} from "@/components/sections/popularfx-theme-customization/popularfx-icons";

export type PopularfxFeatureItem = {
  iconName: PopularfxFeatureIconName;
  title: string;
  description: string;
};

export type PopularfxServiceItem = {
  iconName: PopularfxServiceIconName;
  title: string;
  description: string;
};

export type PopularfxBenefitItem = {
  iconName: PopularfxBenefitIconName;
  title: string;
  description: string;
};

export type PopularfxPortfolioItem = {
  name: string;
  category: string;
  href: string;
  image: string;
  imageAlt: string;
};

export type PopularfxFaqItem = {
  question: string;
  answer: string;
};

export const popularfxThemeCustomizationContent = {
  "hero": {
    "eyebrow": ["Wordpress Agency", "Theme Customization"] as const,
    "title": "PopularFX Theme Customization Service",
    "description": "The PopularFX theme is a lightweight and highly customizable WordPress theme designed for businesses, blogs, and eCommerce stores. With its simple and easy drag-and-drop page builder and pre-built templates, it allows users to create attractive websites without coding knowledge. Our PopularFX theme customization services help you customize the design, optimize performance, and improve functionality to create a WordPress website that truly defines your brand and boosts user engagement.",
    "ctaText": "Request a Quote",
    "ctaHref": "/request-quote",
    "ctaAriaLabel": "Request a Quote",
    "image": {
      "src": "/assets/popularfx-theme-customization/hero/popularfx-theme-customization-service-img.webp",
      "alt": "PopularFX Theme Customization Service Image",
      "width": 1202,
      "height": 948
    }
  },
  "brands": {
    "title": "Trusted by \nLeading Brands",
    "heading": "Trusted by \nLeading Brands",
    "slug": "popularfx-theme-customization",
    "items": industryBrandLogos
  },
  "features": {
    "eyebrow": "Features",
    "heading": "Features of PopularFX Theme",
    "description": "PopularFX offers a range of powerful features that make website creation easy and efficient.",
    "items": [
      {
        "iconName": "drag-and-drop-page-builder",
        "title": "Drag-and-Drop Page Builder",
        "description": "Use drag-and-drop page builder to customize pages with a simple interface easily."
      },
      {
        "iconName": "pre-built-templates",
        "title": "Pre-Built Templates",
        "description": "You can access a variety of ready-made layouts and templates for quick setup."
      },
      {
        "iconName": "lightweight-and-fast",
        "title": "Lightweight and Fast",
        "description": "This theme is optimized for speed and performance with its proper theme structure."
      },
      {
        "iconName": "mobile-responsive-design",
        "title": "Mobile Responsive Design",
        "description": "With the responsive theme, users get a smooth experience on all devices."
      },
      {
        "iconName": "seo-friendly-structure",
        "title": "SEO-Friendly Structure",
        "description": "PopularFX theme is already built with clean code and optimized for search engines."
      },
      {
        "iconName": "woocommerce-compatibility",
        "title": "WooCommerce Compatibility",
        "description": "This theme is perfect for creating eCommerce stores to earn online."
      },
      {
        "iconName": "custom-widgets-elements",
        "title": "Custom Widgets & Elements",
        "description": "Add additional functionalities, such as custom widgets and elements, without coding."
      },
      {
        "iconName": "cross-browser-compatibility",
        "title": "Cross-Browser Compatibility",
        "description": "This theme can work seamlessly across all major browsers."
      }
    ]
  },
  "services": {
    "eyebrow": "Services",
    "heading": "Our WordPress Theme \n Customization Services",
    "description": "",
    "items": [
      {
        "iconName": "theme-installation",
        "title": "Theme Installation",
        "description": "We help you install and set up the PopularFX theme on your WordPress website."
      },
      {
        "iconName": "custom-design-and-branding",
        "title": "Custom Design and Branding",
        "description": "Personalize the theme to match your brand’s style and get custom design and branding."
      },
      {
        "iconName": "responsive-design",
        "title": "Responsive Design",
        "description": "We confirm that your website adjusts smoothly to various screen sizes."
      },
      {
        "iconName": "advanced-features-integration",
        "title": "Advanced Features Integration",
        "description": "Our developers can add animations, sliders, forms, and other enhancements based on your requirements."
      },
      {
        "iconName": "performance-optimization",
        "title": "Performance Optimization",
        "description": "We improve your loading speed and overall website performance to get more sales."
      },
      {
        "iconName": "ongoing-support-and-maintenance",
        "title": "Ongoing Support and Maintenance",
        "description": "We offer ongoing support and maintenance to updates, security checks, and troubleshooting."
      }
    ]
  },
  "benefits": {
    "eyebrow": "Benefits",
    "heading": "Benefits of PopularFX Theme Customization",
    "description": "Customizing the PopularFX theme enhances your website’s design, performance, and user experience.",
    "items": [
      {
        "iconName": "fully-customizable-store",
        "title": "Fully Customizable Store",
        "description": "You can modify the colors, fonts, and layouts of the website to match your brand identity."
      },
      {
        "iconName": "unique-brand-identity",
        "title": "Unique Brand Identity",
        "description": "With a unique brand identity, stand out with a personalized and visually appealing website."
      },
      {
        "iconName": "improved-user-experience",
        "title": "Improved User Experience",
        "description": "You can optimize the navigation and design of the website for better engagement."
      },
      {
        "iconName": "multiple-third-party-plugins",
        "title": "Multiple Third-party Plugins",
        "description": "Extend website functionality with additional features using various third-party plugins."
      },
      {
        "iconName": "higher-conversion-rates",
        "title": "Higher Conversion Rates",
        "description": "A well-optimized website design can encourage more sales and leads."
      },
      {
        "iconName": "mobile-optimization",
        "title": "Mobile Optimization",
        "description": "In this mobile-first world, enhance performance for mobile users with a fast-loading website."
      },
      {
        "iconName": "safe-and-secure-payments",
        "title": "Safe and Secure Payments",
        "description": "Integrate trustworthy and secure payment gateways to protect your customer's transactions."
      },
      {
        "iconName": "minimal-maintenance-cost",
        "title": "Minimal Maintenance Cost",
        "description": ""
      }
    ]
  },
  "whyChoose": {
    "eyebrow": "Why Dynamic Dreamz",
    "heading": "Why Choose Dynamic Dreamz",
    "description": "At Dynamic Dreamz, we specialize in custom WordPress development, ensuring a professional and user-friendly website for your business.",
    "items": [
      {
        "title": "Expert Team",
        "description": "Dynamic Dreamz has skilled WordPress developers with years of experience in WordPress theme customization."
      },
      {
        "title": "Proven Process",
        "description": "We follow a structrued approach for project development to ensure high-quality results."
      },
      {
        "title": "Ongoing Support",
        "description": "We offer dedicated assistance for troubleshooting and updates."
      },
      {
        "title": "Client-Focused Approach",
        "description": "We prioritize your needs and business objectives."
      }
    ]
  },
  "portfolio": {
    "eyebrow": "Portfolio",
    "heading": "Snippets of WordPress Theme Customization Portfolio",
    "description": "Explore our portfolio, which showcases successful WordPress theme customization projects and highlights how we customize, secure, and enhance stores for peak performance.",
    "ctaLabel": "View our work",
    "ctaHref": "/our-work",
    "items": [
      {
        "name": "Quite Events",
        "category": "WORDPRESS",
        "href": "https://www.quietevents.com/",
        "image": "/assets/our-work/projects/quite-events.webp",
        "imageAlt": "Quite Events WordPress Theme Customization"
      },
      {
        "name": "Les Etoiles",
        "category": "WORDPRESS",
        "href": "https://louer-lesetoiles.ca/",
        "image": "/assets/our-work/projects/les-etoiles.webp",
        "imageAlt": "Les Etoiles WordPress Theme Customization"
      },
      {
        "name": "Valents",
        "category": "WORDPRESS",
        "href": "https://wearvalents.com/",
        "image": "/assets/our-work/projects/valents.webp",
        "imageAlt": "Valents WordPress Theme Customization"
      },
      {
        "name": "Get Sunsights",
        "category": "WORDPRESS",
        "href": "https://www.getsunsights.com/",
        "image": "/assets/our-work/projects/get-sunsights.webp",
        "imageAlt": "Get Sunsights WordPress Theme Customization"
      },
      {
        "name": "Lipari Design",
        "category": "WORDPRESS",
        "href": "https://liparidesign.ca/",
        "image": "/assets/our-work/projects/lipari-design.webp",
        "imageAlt": "Lipari Design WordPress Theme Customization"
      },
      {
        "name": "Nexventur",
        "category": "WORDPRESS",
        "href": "https://www.nexventur.com/",
        "image": "/assets/our-work/projects/nexventur.webp",
        "imageAlt": "Nexventur WordPress Theme Customization"
      },
      {
        "name": "Awaken Media",
        "category": "WORDPRESS",
        "href": "https://www.awaken.media/",
        "image": "/assets/our-work/projects/awaken-media.webp",
        "imageAlt": "Awaken Media WordPress Theme Customization"
      },
      {
        "name": "Budget Maids",
        "category": "WORDPRESS",
        "href": "https://www.budget-maids.com/",
        "image": "/assets/our-work/projects/budget-maids.webp",
        "imageAlt": "Budget Maids WordPress Theme Customization"
      }
    ]
  },
  "faqs": [
    {
      "question": "How much do you charge for your PopularFX theme customization service?",
      "answer": "There is no fixed charge for the theme customization services. It depends on the level and complexity of the customization work. One more factor that affects that is the experience and expertise of the WordPress developer you hire."
    },
    {
      "question": "How long does it take to customize the PopularFX theme?",
      "answer": "The time frame depends on the complexity of customization. Simple modifications take a few days to a week, while more complex customizations require a few weeks or more time."
    },
    {
      "question": "Can I integrate WooCommerce with the PopularFX theme?",
      "answer": "Yes, PopularFX is fully compatible with WooCommerce, allowing you to set up an online store with ease."
    },
    {
      "question": "Will my website remain mobile-friendly after customization?",
      "answer": "Yes, our customization ensures that your website remains fully responsive across all devices."
    },
    {
      "question": "Can you add extra features like contact forms and sliders?",
      "answer": "Absolutely! We can integrate various elements such as forms, sliders, pop-ups, and more."
    },
    {
      "question": "Do you offer support after the customization is done?",
      "answer": "Yes, we offer ongoing support and maintenance services to confirm that your website works smoothly and stays up to date."
    }
  ]
} as const;
