import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import { bigCommerceDevelopmentBrands } from "@/content/bigcommerce-development";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";
import { wordpressDevelopmentPortfolio } from "@/content/wordpress-development";

const serviceAssets = "/assets/services/wordpress-development-company";
const bigCommerceAssets = "/assets/services/bigcommerce-development";

export const wordpressDevelopmentCompanyHero = {
  title: "WordPress Development Company in India",
  description:
    "Transform your online presence with the best WordPress development company in India. We craft custom sites and refine themes to match your unique requirements perfectly. We focus on creating a website that showcases your brand identity and fulfills your objectives.",
  secondaryDescription:
    "Our white-label WordPress services offer custom development and design, enabling you to deliver top-tier websites under your brand. Hire WordPress developers & designers from the best WordPress website development company in India.",
  ctaLabel: "get in touch",
  ctaHref: "/request-quote",
  image: {
    src: `${serviceAssets}/hero/wordpress-development-company.svg`,
    alt: "WordPress website development and customization illustration",
    width: 446,
    height: 393,
  },
  reviews: [
    {
      platform: "Clutch",
      reviewCount: "132 Reviews",
      rating: "5.0",
      logoSrc: "/assets/reviews/clutch-wordmark.svg",
      logoAlt: "Clutch Review Dynamic Dreamz",
      logoWidth: 57,
      logoHeight: 19,
      href: "https://clutch.co/profile/dynamic-dreamz",
    },
    {
      platform: "Upwork",
      reviewCount: "2000+ Reviews",
      rating: "5.0",
      logoSrc: "/assets/reviews/upwork-wordmark.svg",
      logoAlt: "Upwork Review Dynamic Dreamz",
      logoWidth: 64,
      logoHeight: 19,
      href: "https://www.upwork.com/agencies/dynamicdreamz/",
    },
    {
      platform: "GoodFirms",
      reviewCount: "72 Reviews",
      rating: "5.0",
      logoSrc: "/assets/reviews/goodfirms-wordmark.svg",
      logoAlt: "Goodfirms Review Dynamic Dreamz",
      logoWidth: 86,
      logoHeight: 19,
      href: "https://www.goodfirms.co/company/dynamic-dreamz",
    },
  ],
} as const;

export const wordpressDevelopmentCompanyBrands = {
  content: {
    slug: "wordpress-development-company",
    brands: { ariaLabel: "Trusted by Leading Brands" },
  },
  items: bigCommerceDevelopmentBrands,
} as const;

export const wordpressDevelopmentCompanyServices = {
  heading: "Start Your Business with <br> WordPress Development Services",
  description:
    "Take advantage of the WordPress development services from Dynamic Dreamz, <br> a WordPress Website development company in India. We are expertly <br> crafting customized WordPress solutions to ensure your digital success.",
  items: [
    {
      icon: "/assets/services/wordpress/wordpress-theme-customization.svg",
      iconAlt: "WordPress Icon",
      title: "WordPress Theme Customization Service",
      description:
        "Our expert WordPress developers can customize popular WordPress themes such as Gutenberg, Elementer, Divi Builder, Flatsome UX Builder, etc, to cater to your diverse business requirements. Boost your online presence with our custom WordPress website service. We create unique sites tailored to your brand. Our team ensures your website is easy to use and looks great. Let us help you shine online with our simple, effective solutions.",
    },
    {
      icon: "/assets/services/wordpress/wordpress-custom-theme-development.svg",
      iconAlt: "theme customization icon",
      title: "WordPress Custom Theme Development Service",
      description:
        "Can’t you find any of the WordPress themes appealing? We are here to help you with our WordPress custom theme development service. We will craft an entirely original theme. That will distinguish your website from competitors and meet your needs. We also create user-engaging subscription-based Learning Management Systems (LMS) using WordPress.",
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
      title: "WordPress Multi-Language Website Development Service",
      description:
        "Expand your reach with our WordPress multi-language website development service. We create sites in English, Spanish, French, German, and many other languages using the WPML plugin for seamless language integration. Enhance the presence of your business by catering to the global audience with a fully translated, user-friendly website.",
    },
    {
      icon: "/assets/services/wordpress/woocommerce-development.svg",
      iconAlt: "WooCommerce Icon",
      title: "WooCommerce Development Service",
      description:
        "We customize reliable Ecommerce solutions for your business needs with our WooCommerce development service. From seamless integration to custom plugin development, we optimize your online store for scalability and performance. With user-friendly interfaces and secure payment gateways, we ensure a seamless shopping experience, driving sales and customer satisfaction.",
    },
    {
      icon: "/assets/services/wordpress/wordpress-white-label-development.svg",
      iconAlt: "White Label icon",
      title: "WordPress White-Label Development Service",
      description:
        "Our white-label WordPress development service enables agencies to offer expert solutions under their brand. From custom themes to plugin development, we deliver seamless, rebranded solutions tailored to your clients’ needs. Expand your service offerings without the overhead, and let us be your silent partner in digital success.",
    },
    {
      icon: "/assets/services/wordpress/wordpress-cms-development.svg",
      iconAlt: "WordPress CMS Icon",
      title: "WordPress CMS Development Service",
      description:
        "Experience seamless content management with our Headless WordPress service. Manage your site with WordPress’s powerful admin interface while delivering a dynamic, high-performance front end using Next.js. Benefit from a decoupled architecture that enhances speed, flexibility, and scalability. Perfect for developers and content creators seeking modern web development with robust, user-friendly content management systems.",
    },
    {
      icon: "/assets/services/wordpress/wordpress-optimization-speed-up.svg",
      iconAlt: "Speed Up Icon",
      title: "WordPress Optimization and Speed Up Service",
      description:
        "Boost your WordPress site’s rankings and user experience with our WordPress optimization services. We optimize loading times, streamline code, and improve SEO rankings. From image optimization to caching solutions, we ensure your site operates at peak efficiency, driving increased traffic and conversions. We fine-tune every aspect for maximum performance. Let us optimize your site for better visibility and success!",
    },
    {
      icon: "/assets/services/wordpress/wordpress-maintenance.svg",
      iconAlt: "maintenance icon",
      title: "WordPress Maintenance Service",
      description:
        "Keep your WordPress site running around the clock with our maintenance services. We handle core updates, backups, theme updates, security checks, and more so you can focus on your business. Let us take care of the technical stuff for you!",
    },
  ],
  cta: {
    label: "Let me give you a hand to help you",
    href: "/request-quote",
    ariaLabel: "Dynamic Dreamz - Let me give you a hand to help you",
  },
} as const;

export const wordpressDevelopmentCompanyReasons = {
  heading:
    "Why Choose Dynamic Dreamz as a <br> WordPress Development Company in India",
  description:
    "At Dynamic Dreamz, we are proud of ourselves for providing top-notch WordPress<br> solutions tailored to fulfill your unique business requirements. With years of<br> experience, skills, and dedication to excellence, we ensure your WordPress website<br> is visually attractive, positively functional, secure, and optimized for performance.",
  hideCta: true,
  items: [
    {
      icon: `${bigCommerceAssets}/advantages/expertise-in-custom-development.svg`,
      iconAlt: "Expertise in Custom Development",
      title: "Expertise in Custom Development",
      description:
        "We specialize in developing custom WordPress websites that suit your business goals. Whether it's a custom plugin, custom theme, or complex integration, our WordPress developers have the skills to make your dream come true.",
    },
    {
      icon: `${bigCommerceAssets}/advantages/focus-on-security.svg`,
      iconAlt: "Focus on Security",
      title: "Focus on Security",
      description:
        "Your website's security is our top priority at Dynamic Dreamz. We use robust security standards to safeguard your WordPress website from vulnerabilities and threats, securing your data and website both remain secure.",
    },
    {
      icon: `${bigCommerceAssets}/advantages/commitment-to-quality.svg`,
      iconAlt: "Commitment to Quality",
      title: "Commitment to Quality",
      description:
        "We promise that all of our work has a high standard. Our experts follow the best practices in coding & design and build WordPress solutions that look attractive, reliable, and efficient.",
    },
    {
      icon: `${bigCommerceAssets}/advantages/timely-delivery.svg`,
      iconAlt: "Timely Delivery",
      title: "Timely Delivery",
      description:
        "Our developers are skilled enough to finish the project within the deadlines. Our project management process is built to complete your project on time without sacrificing quality and functionality.",
    },
    {
      icon: `${bigCommerceAssets}/advantages/transparent-communication.svg`,
      iconAlt: "Transparent Communication",
      title: "Transparent Communication",
      description:
        "For any project to be successful, communication must be clear and constant. We ensure that your expectations are satisfied and your feedback is considered by keeping you updated at every stage of the development process.",
    },
    {
      icon: `${serviceAssets}/advantages/ongoing-support-maintenance.svg`,
      iconAlt: "Ongoing Support and Maintenance",
      title: "Ongoing Support and Maintenance",
      description:
        "Our responsibility with your website doesn't end with the launch of the website. We offer support and maintenance services to keep your WordPress website safe, up-to-date, and performing at its peak.",
    },
  ],
} as const;

export const wordpressDevelopmentCompanyBenefits = {
  heading: "Why Choose WordPress for Web Development",
  description:
    "WordPress is holding its name in the leading platform for web development because of its <br> robust features like flexibility, scalability, and ease of use. WordPress offers tools and <br> facilities for everyone, from small businesses to large enterprises. Let’s Choose Dynamic Dreamz <br> as a WordPress development company in India.",
  items: [
    {
      icon: `${serviceAssets}/benefits/user-friendly-interface.svg`,
      iconAlt: "User-Friendly Interface Icon",
      title: "User Friendly Interface",
      description:
        "WordPress has a simple interface that makes it easy to use for everyone to manage and update their website without any need for technical expertise. You can add new pages, posts, and media rapidly with its dashboard.",
    },
    {
      icon: `${serviceAssets}/benefits/highly-customizable.svg`,
      iconAlt: "Highly Customizable Icon",
      title: "Highly Customizable",
      description:
        "WordPress provides an infinite amount of customization options with its thousands of themes and plugins. Whether you need a simple blog or a complex E-commerce website, you can customize your website to reflect your brand and operational requirements.",
    },
    {
      icon: `${serviceAssets}/benefits/seo-friendly.svg`,
      iconAlt: "SEO-Friendly Icon",
      title: "SEO Friendly",
      description:
        "WordPress is SEO-friendly, with features such as clean code, adjustable URLs, and simple integration with SEO plugins. It guarantees that your website is optimized for search engines, increasing visibility and rating.",
    },
    {
      icon: `${serviceAssets}/benefits/mobile-responsive.svg`,
      iconAlt: "Mobile Responsive Icon",
      title: "Mobile Responsive",
      description:
        "It is necessary to have a mobile responsive WordPress website in today's mobile-first world. Most themes are responsive, adapting fluidly to various screen sizes for the best user experience.",
    },
    {
      icon: `${serviceAssets}/benefits/cost-effective.svg`,
      iconAlt: "Cost-Effective Icon",
      title: "Cost Effective",
      description:
        "WordPress is a cost effective web development platform. Its open-source nature enables you to design and manage a quality website without incurring the excessive costs associated with custom development from the start.",
    },
    {
      icon: `${serviceAssets}/benefits/regular-updates-and-security.svg`,
      iconAlt: "Regular Updates and Security Icon",
      title: "Regular Updates and Security",
      description:
        "WordPress updates itself frequently to improve security and functionality. With a vast community of developers constantly improving the platform, your website is protected against vulnerabilities.",
    },
    {
      icon: `${serviceAssets}/benefits/easy-integration.svg`,
      iconAlt: "Easy Integration Icon",
      title: "Easy Integration",
      description:
        "WordPress integrates with third party tools and services, like payment gateways, email marketing tools, and social media. It ensures your website can grow with your business needs.",
    },
    {
      icon: `${serviceAssets}/benefits/content-management-made-simple.svg`,
      iconAlt: "Content Management Made Simple Icon",
      title: "Content Management Made Simple",
      description:
        "WordPress streamlines content management with its reflexive editor. You can effortlessly create, edit, and organize your content, making it a perfect choice for businesses that continually update their websites.",
    },
  ],
} as const;

export const wordpressDevelopmentCompanyProcess = {
  heading: "Our WordPress Website <br> Development Process",
  description:
    "As the best WordPress development company in India, we develop <br> WordPress websites that hold customers' attention, win their hearts, and <br> build an enduring relationship.",
  steps: [
    {
      number: "01",
      icon: `${bigCommerceAssets}/process/initial-consultation.svg`,
      iconAlt: "Analyze Icon",
      title: "Analyze",
      description:
        "It starts with analyzing the client's business and the expected outcome. We create a set of processes that show what the finished WordPress website will do.",
    },
    {
      number: "02",
      icon: `${bigCommerceAssets}/process/planning-and-strategy.svg`,
      iconAlt: "Design Icon",
      title: "Design",
      description:
        "We believe good design generates good business. As a WordPress solution provider, we keep things simple and use space.",
    },
    {
      number: "03",
      icon: `${bigCommerceAssets}/process/development-and-implementation.svg`,
      iconAlt: "Build Icon",
      title: "Build",
      description:
        "Based on the design, we craft the WordPress website using the best tools and plugins suited to your requirements.",
    },
    {
      number: "04",
      icon: `${bigCommerceAssets}/process/testing-launch-support.svg`,
      iconAlt: "Test Icon",
      title: "Test",
      description:
        "Before going Live, we conduct rigorous testing of the final WordPress website to make it fully secured and bug free.",
    },
  ],
} as const;

export const wordpressDevelopmentCompanyPortfolio = {
  ...wordpressDevelopmentPortfolio,
  heading: "Our Successful WordPress Projects",
  description:
    "500+ WordPress websites meticulously crafted and counting. Our expertise <br> accelerates growth and redefines shopping experiences for clients, <br> making us the best WordPress development company in India.",
  ctaLabel: "View our work",
} as const;

export const wordpressDevelopmentCompanyTestimonials = {
  heading: "Our Customers' Testimonials",
  description:
    "We have faith in our work, but what truly matters is the outcomes we serve our clients. <br> Happy clients make happy stories: Check out how our services empower them to evolve.",
  items: shopifyPlusAgencyTestimonials.items,
} as const;

export const wordpressDevelopmentCompanyFaqs: readonly FaqAccordionItem[] = [
  {
    question: "Which Indian WordPress development company is the best?",
    answer:
      "As the top WordPress development company in India, Dynamic Dreamz is renowned for providing custom, high-quality WordPress solutions. We realize your vision with custom websites that make an impression on the online world, all while keeping an eye on security, innovation, and client satisfaction.",
  },
  {
    question: "How much does a WordPress web development cost in India?",
    answer:
      "The complexity and features of the website determine how much WordPress web development in India costs. Dynamic Dreamz provides competitive pricing that is customized to meet your custom requirements. Get in touch with us for a quote.",
  },
  {
    question: "How much time does it take to create a website using WordPress?",
    answer:
      "The project’s scope and requirements determine how long it will take to build a WordPress website. More complicated websites might take longer to develop than the typical four to six-week timeframe.",
  },
  {
    question: "Do you offer custom WordPress theme development?",
    answer:
      "Of course, creating custom WordPress themes is our expertise. In order to make sure your website stands out from the competition, our team can create a fully responsive theme that matches your specific requirements and reflects your brand.",
  },
  {
    question: "Can you help with website migration to WordPress?",
    answer:
      "Yes, for sure! We provide smooth website migration services to WordPress, guaranteeing the safe transfer of your content, data, and search engine rankings. Our professionals manage the migration process effectively, reducing downtime and ensuring a seamless changeover.",
  },
  {
    question: "Can I alter my website once it has been launched?",
    answer:
      "Yes, WordPress makes it simple to make updates and modifications to your website even after it has launched. We give you the guidance and assistance you need to manage your content, or you can choose our continuous maintenance services for seamless updates.",
  },
  {
    question: "What kind of support do you provide after the website is launched?",
    answer:
      "We provide complete post-launch support at Dynamic Dreamz, which contains routine updates, security audits, performance enhancements, and troubleshooting. Our team is always here to help you with any troubles or improvements your website might need.",
  },
  {
    question: "How can I begin using your services for WordPress development?",
    answer:
      "It’s easy to get started using our WordPress development services. To discuss your project, visit our website, Dynamic Dreamz, the best WordPress development company. You can call at given number or use the contact form on our website.",
  },
];

export const wordpressDevelopmentCompanyCta = {
  heading: "Want us to help you with your online store?",
  ctaLabel: "request a quote",
  ctaHref: "/request-quote",
} as const;
