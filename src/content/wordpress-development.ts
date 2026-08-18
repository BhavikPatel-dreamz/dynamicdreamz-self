import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

export const wordpressDevelopmentHero = {
  title: "WordPress Web Development Services",
  description:
    "Transform your online presence with our expert WordPress development services. We craft custom sites and refine themes to match your unique requirements perfectly. Our focus is on creating a website that showcases your brand identity and fulfills your objectives. Let’s bring your digital dreams to life together.",
  secondaryDescription:
    "Our white label WordPress services offer custom development and design, enabling you to deliver top tier websites under your brand.",
  ctaLabel: "Request a Quote",
  ctaHref: "/request-quote",
} as const;

export const wordpressDevelopmentBrands = {
  slug: "wordpress-development",
  brands: {
    ariaLabel: "Trusted by Leading Brands",
  },
} as const;

export type WordPressServiceItem = {
  title: string;
  icon: string;
  iconAlt: string;
  description: string;
  href?: string;
};

export const wordpressDevelopmentServices = {
  heading: "What We Provide",
  description: "Expertly crafting customized WordPress solutions to ensure digital success.",
  items: [
    {
      icon: "/assets/services/wordpress/wordpress-theme-customization.svg",
      iconAlt: "WordPress Icon",
      title: "WordPress Theme Customization Service",
      description:
        "Our expert WordPress developers can customize popular WordPress themes such as Gutenberg, Elementer, Divi Builder, Flatsome UX Builder, etc., to cater to your diverse business requirements. Boost your online presence with our custom WordPress website service. We create unique sites tailored to your brand. Our team ensures your website is easy to use and looks great. Let us help you shine online with our simple, effective solutions.",
    },
    {
      icon: "/assets/services/wordpress/wordpress-custom-theme-development.svg",
      iconAlt: "theme customization icon",
      title: "WordPress Custom Theme Development Service",
      description:
        "Can’t you find any of the WordPress themes appealing? We are here to help you with our WordPress custom theme development service. We will craft a completely novel theme that will distinguish your website from competitors and meet your specific needs. We also create user engaging subscription based Learning Management Systems (LMS) using WordPress.",
    },
    {
      icon: "/assets/services/wordpress/wordpress-plugin-development.svg",
      iconAlt: "Plugin Development Icon",
      title: "WordPress Plugin Development Service",
      description:
        "Boost your WordPress website with personalized plugins designed to suit your requirements. Our skilled team creates plugins to enrich functionality and ensure smooth integration. Elevate your site's efficiency and user interaction with our specialized plugin development solutions.",
    },
    {
      icon: "/assets/services/wordpress/wordpress-multi-language-website.svg",
      iconAlt: "Multi-Language Icon",
      title: "WordPress Multi Language Website Development Service",
      description:
        "Expand your reach with our WordPress multi language website development service. We create sites in English, Spanish, French, German, and many other languages using the WPML plugin for seamless language integration. Enhance the presence of your business by catering to the global audience with a fully translated, user friendly website.",
    },
    {
      icon: "/assets/services/wordpress/woocommerce-development.svg",
      iconAlt: "WooCommerce Icon",
      title: "WooCommerce Development Service",
      href: "/woocommerce-development",
      description:
        "Our WooCommerce development service tailors robust eCommerce solutions to your business needs. From seamless integration to custom plugin development, we optimize your online store for scalability and performance. With user friendly interfaces and secure payment gateways, we ensure a seamless shopping experience, driving sales and customer satisfaction.",
    },
    {
      icon: "/assets/services/wordpress/wordpress-white-label-development.svg",
      iconAlt: "White Label icon",
      title: "WordPress White Label Development Service",
      href: "/white-label-wordpress-development-services",
      description:
        "Our white label WordPress development service enables agencies to offer expert solutions under their brand. From custom themes to plugin development, we deliver seamless, rebranded solutions tailored to your clients' needs. Expand your service offerings without the overhead, and let us be your silent partner in digital success.",
    },
    {
      icon: "/assets/services/wordpress/wordpress-cms-development.svg",
      iconAlt: "WordPress CMS Icon",
      title: "WordPress CMS Development Service",
      description:
        "Experience seamless content management with our Headless WordPress service. Manage your site with WordPress's powerful admin interface while delivering a dynamic, high performance front end using Next.js. Benefit from a decoupled architecture that enhances speed, flexibility, and scalability. Perfect for developers and content creators seeking modern web development with robust, user friendly content management systems.",
    },
    {
      icon: "/assets/services/wordpress/wordpress-optimization-speed-up.svg",
      iconAlt: "Speed Up Icon",
      title: "WordPress Optimization and Speed up Service",
      description:
        "Boost your WordPress site's rankings and user experience with our WordPress optimization services. We optimize loading times, streamline code, and improve SEO rankings. From image optimization to caching solutions, we ensure your site operates at peak efficiency, driving increased traffic and conversions. We fine tune every aspect for maximum performance. Let us optimize your site for better visibility and success!",
    },
    {
      icon: "/assets/services/wordpress/wordpress-maintenance.svg",
      iconAlt: "maintenance icon",
      title: "WordPress Maintenance Service",
      description:
        "Keep your WordPress site running around the clock with our maintenance services. We handle core updates, backups, theme updates, security checks, and more, so you can focus on your business. Let us take care of the technical stuff for you!",
    },
  ],
  cta: {
    label: "Let me give you a hand to help you",
    href: "/request-quote",
    ariaLabel: "Dynamic Dreamz - Let me give you a hand to help you",
  },
} as const;

export const wordpressDevelopmentPortfolio = {
  heading: "A sneak peek into our WordPress Development Expertise",
  description:
    "500+ WordPress websites meticulously crafted and counting. Our expertise accelerates growth and redefines shopping experiences for clients.",
  category: "WORDPRESS",
  ctaLabel: "VIEW OUR WORK",
  ctaHref: "/our-work",
  platformMark: {
    src: "/assets/platforms/wordpress-woocommerce-white.svg",
    width: 89,
    height: 26,
  },
  items: [
    {
      name: "Quite Events",
      image: "/assets/our-work/projects/quite-events.webp",
      imageAlt: "Quite Events",
      href: "https://www.quietevents.com/",
    },
    {
      name: "Les Etoiles",
      image: "/assets/our-work/projects/les-etoiles.webp",
      imageAlt: "Les Etoiles",
      href: "https://louer-lesetoiles.ca/",
    },
    {
      name: "Valents",
      image: "/assets/our-work/projects/valents.webp",
      imageAlt: "Valents",
      href: "https://wearvalents.com/",
    },
    {
      name: "Get Sunsights",
      image: "/assets/our-work/projects/get-sunsights.webp",
      imageAlt: "Get Sunsights",
      href: "https://www.getsunsights.com/",
    },
    {
      name: "Lipari Design",
      image: "/assets/our-work/projects/lipari-design.webp",
      imageAlt: "Lipari Design",
      href: "https://liparidesign.ca/",
    },
    {
      name: "Nexventur",
      image: "/assets/our-work/projects/nexventur.webp",
      imageAlt: "Nexventur",
      href: "https://www.nexventur.com/",
    },
  ],
} as const;

export const wordpressDevelopmentTestimonials = {
  heading: "Don't Just Take Our Word For It",
  description:
    "We have faith in our work, but what truly matters is the outcomes we serve our clients.<br> Happy clients make happy stories. Check out how our services empower them to evolve.",
} as const;

export const wordpressDevelopmentFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What is WordPress?",
    answer:
      "WordPress is a popular content management system (CMS) that you can use to power your website on your hosting plan. WordPress makes creating a blog, landing page, online store, forum, or other website possible for users around the world.",
  },
  {
    question: "Is WordPress free?",
    answer:
      "WordPress itself is a free, open source web software, but to use it, you will need to invest in a web hosting plan. You can find hosting for as little as $1 per month on a shared hosting plan, but we recommend spending a bit more on a managed WordPress hosting plan to make setting up and maintaining your website easy.",
  },
  {
    question: "Is WordPress the right choice for my business? Is it safe and secure?",
    answer:
      "WordPress is a good choice for businesses of all sizes and industries, as it is a safe and secure platform and a user friendly content management system that offers a wide range of features. It is regularly updated to address security vulnerabilities, and it provides tools and features to help protect your website from threats.\n\nWordPress will be the right choice if your business is related to marketing or if it requires multiple teammates to work on the backend at a time.",
  },
  {
    question: "How much will you charge as per my requirements for the WordPress Website?",
    answer:
      "The cost of the development mainly depends upon your requirements. The best way to get the best deal for your project is to make a list of your requirements before starting any project.\n\nAt Dynamic Dreamz, our pricing is based on the requirements and complexity of the project. We offer a variety of packages and custom quotes depending on the project’s demand.",
  },
  {
    question: "How much time is required for my WordPress website development?",
    answer:
      "A proper website development using the WordPress content management system typically takes 4-5 weeks from start to finish. It may vary depending on the complexity of the work involved. Make sure to ask for an estimate or convey a deadline.",
  },
  {
    question: "What is your level of experience in WordPress development?",
    answer:
      "Experience matters most. You have to decide the experience level of WordPress developer you need based on your project’s requirements and budget. Dynamic Dreamz has been providing custom WordPress website development services since 2006.",
  },
  {
    question: "Can I convert my WordPress site into a WooCommerce site or add more functionalities/ features to it in the future?",
    answer:
      "Yes, you can switch to a WooCommerce site or add more functionalities/features. Dynamic Dreamz has a team of experts who can assist you with the conversion and customization process to ensure that your site meets your specific requirements.",
  },
  {
    question: "Will my WordPress site be designed and optimized with SEO and conversion rate in mind?",
    answer:
      "Yes, your WordPress site will be designed and implemented with SEO and conversion rate optimization in mind. We constantly read up on and test out the best and latest SEO strategies on your site. It includes on page optimization, keyword research, and implementing conversion focused design elements. We will also monitor and track your site for the expected results.",
  },
  {
    question: "Can you ensure 100% performance of my WordPress website?",
    answer:
      "We can ensure 100% performance of your WordPress website through regular maintenance, updates, testing, and quality assurance measures and implementing performance optimization techniques such as caching and optimizing images and code.\n\nWe also have a team of experienced WordPress developers and experts who can survey and troubleshoot any issues to ensure smooth and consistent performance.",
  },
  {
    question: "Will you build my WordPress site with responsive features? Will it load fast?",
    answer:
      "Yes, we will build your WordPress site with responsive features. We will ensure a fast loading time by optimizing images and utilizing caching plugins. Also, your WordPress site will be both mobile and desktop friendly to reach a wide range of people.",
  },
];

export const wordpressDevelopmentCta = {
  heading: "Want us to help you with your online store?",
  ctaLabel: "REQUEST A QUOTE",
  ctaHref: "/request-quote",
} as const;
