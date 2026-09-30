import { industryBrandLogos } from "@/content/industries";
import type {
  HelloBizBenefitIconName,
  HelloBizFeatureIconName,
  HelloBizServiceIconName,
} from "@/components/sections/hello-biz-theme-customization/hello-biz-icons";

export type HelloBizFeatureItem = {
  iconName: HelloBizFeatureIconName;
  title: string;
  description: string;
};

export type HelloBizServiceItem = {
  iconName: HelloBizServiceIconName;
  title: string;
  description: string;
};

export type HelloBizBenefitItem = {
  iconName: HelloBizBenefitIconName;
  title: string;
  description: string;
};

export const helloBizThemeCustomizationContent = {
  hero: {
    eyebrow: ["Wordpress Agency", "Theme Customization"] as const,
    title: "Hello Biz Theme Customization Service",
    description:
      "Get Started with Hello Biz Theme Customization Service to enhance your website. Are you looking for a clean, business-focused website design? The Hello Biz WordPress theme provides a perfect base for professional websites. At Dynamic Dreamz, we help you fully customize the Hello Biz theme to match your brand. Whether you’re a startup, small business, or agency, our customization service will give your website a modern look, faster speed, and better user experience.",
    ctaText: "request a quote",
    ctaHref: "/request-quote",
    ctaAriaLabel: "request a quote",
    image: {
      src: "/assets/hello-biz-theme-customization/hero/hello-biz-theme-customization-service-img.webp",
      alt: "Hello Biz Theme Customization Service Image",
      width: 1202,
      height: 948,
    },
  },
  brands: {
    title: "Trusted by \nLeading Brands",
    heading: "Trusted by \nLeading Brands",
    slug: "hello-biz-theme-customization",
    items: industryBrandLogos,
  },
  features: {
    eyebrow: "Features",
    heading: "Features of Hello Biz Theme",
    description:
      "The Hello Biz theme is a lightweight and professional theme built for business websites. It combines speed, simplicity, and flexibility to offer a smooth experience.",
    items: [
      {
        iconName: "cleanLayout",
        title: "Clean Layout",
        description:
          "This theme has a simple and professional design for all business types so that it can focus on primary services.",
      },
      {
        iconName: "fastLoading",
        title: "Fast Loading",
        description:
          "With a good theme structure and minimal code, it will provide you with speedier page load speeds.",
      },
      {
        iconName: "seoReady",
        title: "SEO Ready",
        description:
          "Biz theme made with SEO best practices so it has a good on-page SEO to boost search ranking.",
      },
      {
        iconName: "gutenberg",
        title: "Gutenberg Compatible",
        description:
          "A popular Gutenberg page builder is fully supported for easy content editing.",
      },
      {
        iconName: "mobileResponsive",
        title: "Mobile Responsive",
        description:
          "This theme is fully responsive, so it works smoothly on phones, tablets, and desktops.",
      },
      {
        iconName: "translationReady",
        title: "Translation Ready",
        description:
          "Built-in support for multilingual websites. You can reach the global market very quickly.",
      },
    ] as const satisfies readonly HelloBizFeatureItem[],
  },
  services: {
    eyebrow: "Our Services",
    heading: "Our WordPress Theme Customization Services",
    description:
      "We offer end-to-end Hello Biz theme customization services to help your website stand out and perform better.",
    items: [
      {
        iconName: "installation",
        title: "Theme Installation",
        description: "We help you install the Hello Biz theme and set it up correctly.",
      },
      {
        iconName: "design",
        title: "Custom Design and Branding",
        description:
          "Our custom design and branding can match your website’s design with your brand identity.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description:
          "We ensure your website looks great on all screen sizes. Our customization work also looks great on all devices.",
      },
      {
        iconName: "features",
        title: "Advanced Features Integration",
        description:
          "Our WordPress experts can add sliders, forms, chat, and other features based on your needs.",
      },
      {
        iconName: "performance",
        title: "Performance Optimization",
        description:
          "Improve loading speed and user experience to optimize your performance.",
      },
      {
        iconName: "support",
        title: "Ongoing Support and Maintenance",
        description: "We provide support even after the project ends.",
      },
    ] as const satisfies readonly HelloBizServiceItem[],
  },
  benefits: {
    eyebrow: "Benefits",
    heading: "Benefits of Hello Biz Theme Customization",
    description:
      "Make your website more powerful with custom changes to the Hello Biz theme. Our customized approach boosts design and performance.",
    items: [
      {
        iconName: "store",
        title: "Fully Customizable Store",
        description:
          "You can get a fully customized store, and you can modify your brand's colors, fonts, and layout easily.",
      },
      {
        iconName: "responsive",
        title: "Responsive Design",
        description:
          "Hello Biz theme is already a responsive theme. Our customization is also responsive, and you will enjoy smooth viewing across all devices.",
      },
      {
        iconName: "brand",
        title: "Unique Brand Identity",
        description:
          "We help you customize the design to fit your business branding.",
      },
      {
        iconName: "ux",
        title: "Improved User Experience",
        description:
          "During the theme customization, we work on areas of improvement and sweeten your user experience.",
      },
      {
        iconName: "plugins",
        title: "Multiple Third-party Plugins",
        description:
          "We integrate third-party plugins and tools for SEO, contact forms, and more to improve your website's functionality.",
      },
      {
        iconName: "conversions",
        title: "Higher Conversion Rates",
        description:
          "An optimized and well-designed website can motivate user actions and boost sales.",
      },
      {
        iconName: "payments",
        title: "Safe and Secure Payments",
        description:
          "We only add trusted payment gateways to securely finish your customer's transactions.",
      },
      {
        iconName: "maintenance",
        title: "Minimal Maintenance Cost",
        description:
          "Clean coding means lower issues in the long run and minimal maintenance costs.",
      },
    ] as const satisfies readonly HelloBizBenefitItem[],
  },
  whyChoose: {
    eyebrow: "Why Dynamic Dreamz",
    heading: "Why Choose Dynamic Dreamz",
    description:
      "We have been helping businesses grow online with expert WordPress solutions for years. Here’s why clients trust us:",
    items: [
      {
        title: "Expert Team",
        description:
          "Our expert WordPress developers and designers specialize in theme customization and WordPress development.",
      },
      {
        title: "Proven Process",
        description:
          "We follow a tried-and-tested process to ensure you will get quality work only.",
      },
      {
        title: "Ongoing Support",
        description:
          "We will help you after your theme customization ends and the website goes live.",
      },
      {
        title: "Client-Focused Approach",
        description: "Your goals and needs are our priority.",
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
        imageAlt: "Quite Events",
      },
      {
        name: "Les Etoiles",
        category: "WORDPRESS",
        href: "https://louer-lesetoiles.ca/",
        image: "/assets/our-work/projects/les-etoiles.webp",
        imageAlt: "Les Etoiles",
      },
      {
        name: "Valents",
        category: "WORDPRESS",
        href: "https://wearvalents.com/",
        image: "/assets/our-work/projects/valents.webp",
        imageAlt: "Valents",
      },
      {
        name: "Get Sunsights",
        category: "WORDPRESS",
        href: "https://www.getsunsights.com/",
        image: "/assets/our-work/projects/get-sunsights.webp",
        imageAlt: "Get Sunsights",
      },
      {
        name: "Lipari Design",
        category: "WORDPRESS",
        href: "https://liparidesign.ca/",
        image: "/assets/our-work/projects/lipari-design.webp",
        imageAlt: "Lipari Design",
      },
      {
        name: "Nexventur",
        category: "WORDPRESS",
        href: "https://www.nexventur.com/",
        image: "/assets/our-work/projects/nexventur.webp",
        imageAlt: "Nexventur",
      },
      {
        name: "Awaken Media",
        category: "WORDPRESS",
        href: "https://www.awaken.media/",
        image: "/assets/our-work/projects/awaken-media.webp",
        imageAlt: "Awaken Media",
      },
      {
        name: "Budget Maids",
        category: "WORDPRESS",
        href: "https://www.budget-maids.com/",
        image: "/assets/our-work/projects/budget-maids.webp",
        imageAlt: "Budget Maids",
      },
    ] as const,
  },
  testimonials: {
    eyebrow: "Client Stories",
    heading: "Don't Just Take Our Word For It",
    description:
      "Hear directly from the clients who have worked with Dynamic Dreamz across Shopify, ecommerce and long-term development engagements.",
  },
  faqs: [
    {
      question: "How much do you charge for your Hello Biz theme customization services?",
      answer:
        "The cost of the Hello Biz theme customization depends on the scope of your customization and its complexity. Other factors also affect the price: a WordPress expert who will work on your project because an expert's experience and skills can raise the costs.",
    },
    {
      question: "Can I change the entire layout of the Hello Biz theme?",
      answer:
        "Yes, we can modify the entire layout to fulfill your design goals, including the homepage, header, footer, blog page, and more.",
    },
    {
      question: "Will customization affect the theme's update compatibility?",
      answer:
        "No, it will not be affected; we use a child theme to make changes so your main theme remains update-safe without losing your changes.",
    },
    {
      question: "Can you make the Hello Biz theme work with WooCommerce?",
      answer:
        "We can add WooCommerce to convert your website into an online store, allow eCommerce features to match the Hello Biz theme layout, and improve store performance.",
    },
    {
      question: "How long does it take to complete Hello Biz theme customization?",
      answer:
        "It depends on the customization scope and complexity. Still, most customizations need 5 to 10 business days; some more complex and bigger customizations require a few weeks. We offer quick turnaround with regular updates.",
    },
  ] as const,
} as const;
