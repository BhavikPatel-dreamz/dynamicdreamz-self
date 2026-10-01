import { industryBrandLogos } from "@/content/industries";
import type {
  RoyalElementorKitBenefitIconName,
  RoyalElementorKitFeatureIconName,
  RoyalElementorKitServiceIconName,
} from "@/components/sections/royal-elementor-kit-theme-customization/royal-elementor-kit-icons";

export type RoyalElementorKitFeatureItem = {
  iconName: RoyalElementorKitFeatureIconName;
  title: string;
  description: string;
};

export type RoyalElementorKitServiceItem = {
  iconName: RoyalElementorKitServiceIconName;
  title: string;
  description: string;
};

export type RoyalElementorKitBenefitItem = {
  iconName: RoyalElementorKitBenefitIconName;
  title: string;
  description: string;
};

export type RoyalElementorKitPortfolioItem = {
  name: string;
  category: string;
  href: string;
  image: string;
  imageAlt: string;
};

export type RoyalElementorKitFaqItem = {
  question: string;
  answer: string;
};

export const royalElementorKitThemeCustomizationContent = {
  "hero": {
    "eyebrow": ["Wordpress Agency", "Theme Customization"] as const,
    "title": "Royal Elementor Kit Theme Customization Service",
    "description": "The Royal Elementor Kit theme is a feature-rich, Elementor-compatible WordPress theme made for businesses, agencies, and creatives. It provides attractive pre-built design templates, advanced customization options, and smooth WooCommerce integration. Our Royal Elementor Kit Theme Customization Services help you customize your website to meet your brand’s unique style, ensuring a professional and engaging user experience.",
    "ctaText": "Request a Quote",
    "ctaHref": "/request-quote",
    "ctaAriaLabel": "Request a Quote",
    "image": {
      "src": "/assets/royal-elementor-kit-theme-customization/hero/royal-elementor-theme-customization-service-img.webp",
      "alt": "royal-elementor-theme",
      "width": 1202,
      "height": 948
    }
  },
  "brands": {
    "title": "Trusted by \nLeading Brands",
    "heading": "Trusted by \nLeading Brands",
    "slug": "royal-elementor-kit-theme-customization",
    "items": industryBrandLogos
  },
  "features": {
    "eyebrow": "Features",
    "heading": "Features of Royal Elementor Kit Theme",
    "description": "The Royal Elementor Kit theme offers powerful features to create a highly customizable and visually attractive WordPress website.",
    "items": [
      {
        "iconName": "elementor-integration",
        "title": "Elementor Integration",
        "description": "Use Elementor's drag-and-drop page builder for easy design customization."
      },
      {
        "iconName": "pre-designed-templates",
        "title": "Pre-Designed Templates",
        "description": "This theme offers ready-made layouts to launch your website quickly."
      },
      {
        "iconName": "fully-responsive",
        "title": "Fully Responsive",
        "description": "With its responsive design ensures smooth display across all devices."
      },
      {
        "iconName": "woocommerce-ready",
        "title": "WooCommerce Ready",
        "description": "The best feature of the theme is the built-in WooCommerce facility so that you can create an online store effortlessly."
      },
      {
        "iconName": "seo-optimized",
        "title": "SEO-Optimized",
        "description": "Royal Elementor Kit is built with best practices for higher search rankings."
      },
      {
        "iconName": "fast-performance",
        "title": "Fast Performance",
        "description": "Lightweight and optimized for speed just because of the straightforward structure."
      },
      {
        "iconName": "advanced-customization",
        "title": "Advanced Customization",
        "description": "With the help of advanced customization, you can modify layouts, colors, fonts, and more."
      },
      {
        "iconName": "cross-browser-compatibility",
        "title": "Cross-Browser Compatibility",
        "description": "Works smoothly across all major browsers with cross-browser compatibility."
      }
    ]
  },
  "services": {
    "eyebrow": "Services",
    "heading": "Our Royal Elementor Kit Theme \n Customization Services",
    "description": "",
    "items": [
      {
        "iconName": "theme-installation",
        "title": "Theme Installation",
        "description": "We install and set up the Royal Elementor Kit theme for you."
      },
      {
        "iconName": "custom-design-and-branding",
        "title": "Custom Design and Branding",
        "description": "Customize the look and feel of your website to match your brand."
      },
      {
        "iconName": "responsive-design",
        "title": "Responsive Design",
        "description": "We ensure that during customization your website adapts perfectly to all screen sizes."
      },
      {
        "iconName": "advanced-features-integration",
        "title": "Advanced Features Integration",
        "description": "We can add advanced features such as animations, sliders, pop-ups, and more, as per your requirements."
      },
      {
        "iconName": "performance-optimization",
        "title": "Performance Optimization",
        "description": "We can help you improve your website speed and SEO rankings."
      },
      {
        "iconName": "ongoing-support-and-maintenance",
        "title": "Ongoing Support and Maintenance",
        "description": "We provide ongoing support and maintenance to keep your website updated and running smoothly."
      }
    ]
  },
  "benefits": {
    "eyebrow": "Benefits",
    "heading": "Benefits of Royal Elementor Kit Theme Customization",
    "description": "Customizing the Royal Elementor Kit theme can offer you many amazing benefits. You can create a unique and high-performing WordPress website that fulfills your business goals. Checkout the list of benefits of our Royal Elementor Kit theme customization services:",
    "items": [
      {
        "iconName": "fully-customizable-store",
        "title": "Fully Customizable Store",
        "description": "You can customize your eCommerce store as per your business needs that aligns with your brand identity."
      },
      {
        "iconName": "unique-brand-identity",
        "title": "Unique Brand Identity",
        "description": "You can create your unique brand identity by customizing fonts, colors, and layouts."
      },
      {
        "iconName": "improved-user-experience",
        "title": "Improved User Experience",
        "description": "By enhancing the navigation and layout structure of the website, you can improve use experience."
      },
      {
        "iconName": "multiple-third-party-plugins",
        "title": "Multiple Third-party Plugins",
        "description": "We can help you add additional functionalities like forms, analytics, and chatbots with the various third-party plugins."
      },
      {
        "iconName": "higher-conversion-rates",
        "title": "Higher Conversion Rates",
        "description": "With optimized design and content, we can boost sales and lead generation of your website."
      },
      {
        "iconName": "safe-and-secure-payments",
        "title": "Safe and Secure Payments",
        "description": "We only integrate safe payment gateways to secure transactions of customers."
      },
      {
        "iconName": "minimal-maintenance-cost",
        "title": "Minimal Maintenance Cost",
        "description": "With our theme customization, you can get a well-optimized website that reduces future maintenance costs."
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
  "testimonials": {
    "eyebrow": "Client Stories",
    "heading": "Don't Just Take Our Word For It",
    "description": "Hear directly from the clients who have worked with Dynamic Dreamz across Shopify, ecommerce and long-term development engagements."
  },
  "faqs": [
    {
      "question": "What is the cost of the Royal Elementor Kit theme customization service?",
      "answer": "The costs of the Royal Elementor Kit theme customization service are not fixed; it depends on the complexity and level of customization and expertise of the WordPress developer who works on your project."
    },
    {
      "question": "How long does it take to customize the Royal Elementor Kit theme?",
      "answer": "The timeline varies depending on the complexity of your customization requirements. Simple changes take a few days, while more customizations may take longer."
    },
    {
      "question": "Can I use Elementor Pro with the Royal Elementor Kit theme?",
      "answer": "Yes, the theme is fully compatible with both the free and Pro versions of Elementor."
    },
    {
      "question": "Will my customized website be mobile-friendly?",
      "answer": "Absolutely! During theme customization, we ensure that your website is fully responsive and provides a smooth user experience across all devices."
    },
    {
      "question": "Can I update the theme after customization?",
      "answer": "Yes, we ensure that our theme customizations follow WordPress best practices so future updates won’t break your website."
    },
    {
      "question": "Do you provide post-launch support?",
      "answer": "Yes, we offer ongoing support and maintenance services to keep your website running smoothly. After a few revisions, we can start a new fixed price or hourly contract."
    }
  ]
} as const;
