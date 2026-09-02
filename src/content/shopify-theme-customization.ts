export type ShopifyThemeCustomizationStat = {
  value: string;
  label: string;
};

export type ShopifyThemeCustomizationServiceItem = {
  title: string;
  description: string;
  icon: string;
};

export type ShopifyThemeCustomizationWhyNeedItem = {
  title: string;
  description: string;
  icon: string;
};

export type ShopifyThemeCustomizationBenefitItem = {
  title: string;
  description: string;
  icon: string;
};

export type ShopifyThemeCustomizationProcessStep = {
  title: string;
  description: string;
  icon: string;
};

export type ShopifyThemeCustomizationTechItem = {
  title: string;
  icon: string;
};

export type ShopifyThemeCustomizationThemeItem = {
  title: string;
  description: string;
  image: string;
  tag: string;
  href?: string;
};

export type ShopifyThemeCustomizationWhyChooseItem = {
  title: string;
  description: string;
  icon: string;
};

export type ShopifyThemeCustomizationWorkItem = {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
};

export const shopifyThemeCustomizationContent = {
  sectionCopy: {
    portfolioEyebrow: "Portfolio",
    testimonialsHeading: "Don't Just Take Our Word For It",
    testimonialsDescription:
      "Our clients' success speaks for itself. Read testimonials from satisfied clients who have benefited from our Shopify maintenance services and see how we can help you achieve similar results.",
    ctaLabel: "request a quote",
  },
  hero: {
    eyebrows: ["Established in 2006", "Shopify Platinum Partner"],
    title: "Shopify Theme <br> Customization Services",
    description:
      "At Dynamic Dreamz, we specialize in Shopify theme customization Services, creating unique, visually appealing, and functional designs tailored to your brand’s identity. Our Shopify experts work closely with you to bring your vision to life, ensuring your online store stands out in the competitive eCommerce market. Whether starting from scratch or improving an existing theme, we ensure your store is unique and optimized for success.",
    ctaText: "request a quote",
    ctaHref: "/request-quote",
    videoSrc: "/assets/home/why-dynamic-dreamz.mp4",
    badges: [
      {
        name: "Shopify Platinum Partner",
        src: "/assets/proof/shopify-platinum-partner.svg",
        href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
        alt: "Dynamic Dreamz - Shopify Platinum Partner",
        width: 136,
        height: 44,
      },
      {
        name: "Clutch 4.9 Rating",
        src: "/assets/reviews/clutch-4-9-rating.svg",
        href: "https://clutch.co/profile/dynamic-dreamz",
        alt: "Dynamic Dreamz on Clutch — 4.9 rating",
        width: 111,
        height: 44,
      },
      {
        name: "Trustpilot 4.9 TrustScore",
        src: "/assets/reviews/trustpilot-4-9-trustscore.svg",
        href: "https://www.trustpilot.com/review/dynamicdreamz.com",
        alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
        width: 148,
        height: 50,
      },
      {
        name: "Upwork Top Rated Plus",
        src: "/assets/reviews/upwork-top-rated-plus.svg",
        href: "https://www.upwork.com/ag/dynamicdreamz/",
        alt: "Dynamic Dreamz — Upwork Top Rated Plus",
        width: 126,
        height: 54,
      },
    ],
    stats: [
      {
        value: "5000+",
        label: "Projects Completed",
      },
      {
        value: "150+",
        label: "In-House Experts",
      },
      {
        value: "1100+",
        label: "Happy Clients",
      },
      {
        value: "1B+",
        label: "Revenue Generated",
      },
      {
        value: "4500+",
        label: "Shopify Stores Built",
      },
    ],
  },
  brands: {
    title: "Trusted by Leading Brands",
    ariaLabel: "Brands that trust Dynamic Dreamz for Shopify theme customization",
    items: [
      {
        name: "Ranavat",
        src: "/assets/clients/ranavat.svg",
        href: "https://www.ranavat.com/",
        alt: "Ranavat Logo",
        width: 174,
        height: 19,
      },
      {
        name: "Prolash",
        src: "/assets/clients/prolash.svg",
        href: "https://prolash.com/",
        alt: "prolash_black",
        width: 204,
        height: 22,
      },
      {
        name: "Tropicfeel",
        src: "/assets/clients/tropicfeel.svg",
        href: "https://shop.tropicfeel.com/",
        alt: "Tropicfeel Logo",
        width: 150,
        height: 32,
      },
      {
        name: "Perfect Locks",
        src: "/assets/clients/perfect-locks.svg",
        href: "https://www.perfectlocks.com/",
        alt: "perfect_locks_color_logo",
        width: 175,
        height: 32,
      },
      {
        name: "Bombay Shirt Company",
        src: "/assets/clients/bombay-shirt-company.svg",
        href: "https://www.bombayshirts.com/",
        alt: "Bombay Shirt Company Logo",
        width: 204,
        height: 26,
      },
      {
        name: "Kayfi",
        src: "/assets/clients/kayfi.svg",
        href: "https://kayfi.com/",
        alt: "kayfi-colored",
        width: 90,
        height: 49,
      },
      {
        name: "Simdirect",
        src: "/assets/clients/simsdirect.svg",
        href: "https://simsdirect.com.au/",
        alt: "simdirect_logo_color",
        width: 143,
        height: 49,
      },
      {
        name: "Kvaser",
        src: "/assets/clients/kvaser.svg",
        href: "https://www.kvaser.com/",
        alt: "Kvaser Logo",
        width: 135,
        height: 25,
      },
      {
        name: "Nekter Juice Bar",
        src: "/assets/clients/nelter.svg",
        href: "https://www.nekterjuicebar.com/",
        alt: "nekter-colored",
        width: 66,
        height: 64,
      },
      {
        name: "Circuit City",
        src: "/assets/clients/circuit-city.svg",
        href: "https://circuitcity.com/",
        alt: "Circuit City Logo",
        width: 64,
        height: 64,
      },
    ],
  },
  services: {
    title: "Our Shopify Customization Services",
    subtitle:
      "We provide a range of Shopify theme customization services to make your online store stand out:",
    items: [
      {
        title: "Theme Selection and Installation",
        description:
          "We help you choose the perfect theme for your store and handle the installation process.",
        icon: "/assets/shopify-theme-customization/services/theme-selection-and-installation.svg",
      },
      {
        title: "Custom Design and Branding",
        description:
          "Our designers create a custom look that aligns with your brand’s identity and appeals to your target audience.",
        icon: "/assets/services/wordpress/wordpress-plugin-development.svg",
      },
      {
        title: "Responsive Design",
        description:
          "Ensure your mobile friendly store looks great on any device.",
        icon: "/assets/shopify-theme-customization/services/responsive-design.svg",
      },
      {
        title: "Advanced Features Integration",
        description:
          "We integrate advanced features such as custom sliders, popups, product filters, and more to enhance functionality.",
        icon: "/assets/shopify-theme-customization/services/advanced-features-integration.svg",
      },
      {
        title: "Performance Optimization",
        description:
          "Optimize your theme for faster load times and better performance.",
        icon: "/assets/shopify-theme-customization/services/performance-optimization.svg",
      },
      {
        title: "Ongoing Support and Maintenance",
        description:
          "We provide continuing support to ensure your store remains updated and runs smoothly.",
        icon: "/assets/shopify-theme-customization/services/ongoing-support-and-maintenance.svg",
      },
    ],
  },
  whyNeed: {
    title: "Why do you need Shopify <br> Theme customization services?",
    subtitle:
      "A typical Shopify theme might not fully meet your business requirements and reflect brand identity.<br /> With our Shopify theme customization services, you get a store designed to deliver the best user<br /> experience, making it easier for customers to navigate and shop. A customized store also enhances<br /> SEO, user engagement, and conversion rates, giving your business a competitive edge in eCommerce.<br /><br /><strong>Here are some key points why you need Shopify theme customization services:</strong>",
    items: [
      {
        title: "Need Extra Functionality",
        description:
          "It’s not necessary that a pre built theme can fulfill your business needs. To add advanced features like custom filters, product sliders, and dynamic popups, consider theme customization services.",
        icon: "/assets/shopify-theme-customization/services/theme-selection-and-installation.svg",
      },
      {
        title: "New Theme Migration",
        description:
          "A new theme arrived in the Shopify theme store; you previewed it and liked it. You find an opportunity to improve user experience. Then, we can help you migrate your current theme to a new one.",
        icon: "/assets/shopify-theme-customization/why-need/new-theme-migration.svg",
      },
      {
        title: "Want to Match With Branding",
        description:
          "A pre built theme can not match your branding. You need to customize your theme to match imagery, color, logo, typography, tone of voice, and messaging.",
        icon: "/assets/shopify-theme-customization/why-need/want-to-match-with-branding.svg",
      },
      {
        title: "Need Improved Performance",
        description:
          "If your current theme can’t perform as per your expectations, then you can customize your theme or get a new one and customize it to your satisfaction to get improved performance.",
        icon: "/assets/shopify-theme-customization/why-need/need-improved-performance.svg",
      },
    ],
  },
  benefits: {
    title: "Benefits of the Shopify <br> Theme Customization Service",
    subtitle: "",
    items: [
      {
        title: "Fully Customizable Store",
        description:
          "Tailor every aspect of your store to suit your brand and business needs.",
        icon: "/assets/shopify-theme-customization/benefits/fully-customizable-store.svg",
      },
      {
        title: "Responsive Design",
        description: "Ensure your store works seamlessly on all devices",
        icon: "/assets/shopify-theme-customization/benefits/responsive-design.svg",
      },
      {
        title: "Unique Brand Identity",
        description:
          "Stand out with a design that reflects your brand's personality.",
        icon: "/assets/shopify-theme-customization/benefits/unique-brand-identity.svg",
      },
      {
        title: "Improved User Experience",
        description:
          "Enhance navigation and usability to keep customers engaged.",
        icon: "/assets/shopify-theme-customization/benefits/improved-user-experience.svg",
      },
      {
        title: "Multiple Third party Apps",
        description:
          "Easily integrate third party apps to enhance functionality.",
        icon: "/assets/shopify-theme-customization/benefits/multiple-third-party-apps.svg",
      },
      {
        title: "Higher Conversion Rates",
        description:
          "Tailored designs can increase customer engagement and sales.",
        icon: "/assets/shopify-theme-customization/benefits/higher-conversion-rates.svg",
      },
      {
        title: "Mobile Optimization",
        description:
          "Make sure that every device can view and use your business with ease.",
        icon: "/assets/shopify-theme-customization/benefits/mobile-optimization.svg",
      },
      {
        title: "SEO Friendly",
        description:
          "Custom themes are optimized for search engines, helping improve your online visibility.",
        icon: "/assets/shopify-theme-customization/benefits/seo-friendly.svg",
      },
      {
        title: "Safe and Secure Payments",
        description:
          "Implement secure payment gateways to protect customer transactions.",
        icon: "/assets/shopify-theme-customization/benefits/safe-and-secure-payments.svg",
      },
      {
        title: "Zero Maintenance Cost",
        description:
          "Enjoy a low maintenance store with a custom built theme.",
        icon: "/assets/shopify-theme-customization/benefits/zero-maintenance-cost.svg",
      },
      {
        title: "Scalability and Flexibility",
        description:
          "Your store grows with your business, adapting to changes smoothly.",
        icon: "/assets/shopify-theme-customization/benefits/scalability-and-flexibility.svg",
      },
    ],
  },
  process: {
    title: "Process of Shopify Theme Customization Services",
    subtitle: "",
    centerIllustration:
      "/assets/shopify-theme-customization/process/process-illustration.svg",
    steps: [
      {
        title: "Consultation",
        description:
          "We start with a detailed consultation to understand your needs and vision.",
        icon: "/assets/shopify-theme-customization/process/consultation.svg",
      },
      {
        title: "Design Mockups",
        description:
          "Our designers create mockups for your review and feedback.",
        icon: "/assets/shopify-theme-customization/process/design-mockups.svg",
      },
      {
        title: "Development",
        description:
          "Once approved, we begin the development process, bringing the design to life.",
        icon: "/assets/shopify-theme-customization/process/development.svg",
      },
      {
        title: "Testing",
        description:
          "We thoroughly test the custom theme to ensure it functions perfectly on all devices and browsers.",
        icon: "/assets/shopify-theme-customization/process/testing.svg",
      },
      {
        title: "Launch",
        description:
          "We assist with launching the new theme and ensure everything runs smoothly.",
        icon: "/assets/shopify-theme-customization/process/launch.svg",
      },
      {
        title: "Post Launch Support",
        description:
          "Our team is available for any post launch support or maintenance needed.",
        icon: "/assets/hire-shopify-developers/icons/post-launch-support.svg",
      },
    ],
  },
  technologies: {
    title: "Technology & Frameworks We Use",
    subtitle:
      "We utilize the latest technologies and frameworks to create fast, reliable, scalable Shopify themes. Our <br> expertise includes Liquid, HTML5, CSS3, JavaScript, jQuery, and AJAX. We also work with various <br> Shopify apps and APIs to integrate advanced features into your store.",
    items: [
      {
        title: "Liquid",
        icon: "/assets/shopify-theme-customization/tech/liquid.svg",
      },
      {
        title: "HTML5",
        icon: "/assets/shopify-theme-customization/tech/html5.svg",
      },
      {
        title: "CSS3",
        icon: "/assets/shopify-theme-customization/tech/css3.svg",
      },
      {
        title: "Javascript",
        icon: "/assets/shopify-theme-customization/tech/javascript.svg",
      },
      {
        title: "jQuery",
        icon: "/assets/shopify-theme-customization/tech/jquery.svg",
      },
      {
        title: "Ajax",
        icon: "/assets/shopify-theme-customization/tech/ajax.svg",
      },
    ],
  },
  themes: {
    title: "Shopify Themes We Customize",
    subtitle:
      "At Dynamic Dreamz, we provide expert customization services for a wide range of Shopify themes. Whether you're using a free or premium theme, we tailor it to fit your brand and business requirements. Below are some of the popular Shopify themes we specialize in customizing:",
    items: [
      {
        title: "Prestige Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/prestige-theme.webp",
        tag: "Shopify Theme",
        href: "/prestige-theme-customization",
      },
      {
        title: "Impulse Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/impulse-theme.webp",
        tag: "Shopify Theme",
        href: "/impulse-theme-customization",
      },
      {
        title: "Expanse Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/expanse-theme.webp",
        tag: "Shopify Theme",
        href: "/request-quote",
      },
      {
        title: "Sense Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/sense-theme.webp",
        tag: "Shopify Theme",
        href: "/sense-theme-customization",
      },
      {
        title: "Be Yours Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/be-yours-theme.webp",
        tag: "Shopify Theme",
        href: "/be-yours-theme-customization",
      },
      {
        title: "Fabric Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/fabric-theme.webp",
        tag: "Shopify Theme",
        href: "/fabric-theme-customization",
      },
      {
        title: "Savor Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/savor-theme.png",
        tag: "Shopify Theme",
        href: "/savor-theme-customization",
      },
      {
        title: "Vessel Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/vessel-theme.png",
        tag: "Shopify Theme",
        href: "/request-quote",
      },
      {
        title: "Dwell Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/dwell-theme.png",
        tag: "Shopify Theme",
        href: "/dwell-theme-customization",
      },
      {
        title: "Tinker Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/tinker-theme.png",
        tag: "Shopify Theme",
        href: "/tinker-theme-customization",
      },
      {
        title: "Pitch Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/pitch-theme.png",
        tag: "Shopify Theme",
        href: "/pitch-theme-customization",
      },
      {
        title: "Atelier Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/atelier-theme.png",
        tag: "Shopify Theme",
        href: "/atelier-theme-customization",
      },
      {
        title: "Heritage Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/heritage-theme.png",
        tag: "Shopify Theme",
        href: "/heritage-theme-customization",
      },
      {
        title: "Ritual Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/ritual-theme.png",
        tag: "Shopify Theme",
        href: "/ritual-theme-customization",
      },
      {
        title: "Dawn Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/dawn-theme.png",
        tag: "Shopify Theme",
        href: "/dawn-theme-customization",
      },
      {
        title: "Studio Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/studio-theme.png",
        tag: "Shopify Theme",
        href: "/studio-theme-customization",
      },
      {
        title: "Origin Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/origin-theme.png",
        tag: "Shopify Theme",
        href: "/origin-theme-customization",
      },
      {
        title: "Publisher Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/publisher-theme.png",
        tag: "Shopify Theme",
        href: "/publisher-theme-customization",
      },
      {
        title: "Trade Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/trade-theme.png",
        tag: "Shopify Theme",
        href: "/trade-theme-customization",
      },
      {
        title: "Spotlight Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/spotlight-theme.png",
        tag: "Shopify Theme",
        href: "/spotlight-theme-customization",
      },
      {
        title: "Refresh Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/refresh-theme.png",
        tag: "Shopify Theme",
        href: "/refresh-theme-customization",
      },
      {
        title: "Woodstock Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/woodstock-theme.png",
        tag: "Shopify Theme",
        href: "/woodstock-theme-customization",
      },
      {
        title: "Stiletto Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/stiletto-theme.png",
        tag: "Shopify Theme",
        href: "/stiletto-theme-customization",
      },
      {
        title: "Colorblock Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/colorblock-theme.png",
        tag: "Shopify Theme",
        href: "/colorblock-theme-customization",
      },
      {
        title: "Pipeline Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/pipeline-theme.png",
        tag: "Shopify Theme",
        href: "/pipeline-theme-customization",
      },
      {
        title: "Vision Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/vision-theme.png",
        tag: "Shopify Theme",
        href: "/vision-theme-customization",
      },
      {
        title: "Craft Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/craft-theme.png",
        tag: "Shopify Theme",
        href: "/craft-theme-customization",
      },
      {
        title: "Broadcast Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/broadcast-theme.png",
        tag: "Shopify Theme",
        href: "/broadcast-theme-customization",
      },
      {
        title: "Warehouse Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/warehouse-theme.png",
        tag: "Shopify Theme",
        href: "/warehouse-theme-customization",
      },
      {
        title: "Startup Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/startup-theme.png",
        tag: "Shopify Theme",
        href: "/startup-theme-customization",
      },
      {
        title: "Impact Theme",
        description: "",
        image: "/assets/shopify-theme-customization/themes/impact-theme.png",
        tag: "Shopify Theme",
        href: "/impact-theme-customization",
      },
    ],
  },
  whyChoose: {
    title:
      "Why Choose Dynamic Dreamz For <br> Shopify Theme Customization?",
    subtitle:
      "At Dynamic Dreamz, we ensure your Shopify store reflects your brand and<br /> meets your business goals. Here’s why you should choose us:",
    items: [
      {
        title: "Expert Team",
        description:
          "We have experienced developers for your Shopify theme customization and development.",
        icon: "/assets/shopify-theme-customization/why-choose/expert-team.svg",
      },
      {
        title: "Proven Process",
        description:
          "We guarantee your store is developed according to your demands by going through a step by step process.",
        icon: "/assets/shopify-theme-customization/why-choose/proven-process.svg",
      },
      {
        title: "Ongoing Support",
        description:
          "We offer post launch support to keep your store updated and running smoothly.",
        icon: "/assets/shopify-theme-customization/why-choose/ongoing-support.svg",
      },
      {
        title: "Client Focused Approach",
        description:
          "We work closely with you to understand your requirements and vision.",
        icon: "/assets/shopify-theme-customization/why-choose/client-focused-approach.svg",
      },
    ],
  },
  portfolio: {
    title: "Snippets of Shopify Theme Customization Portfolio",
    subtitle:
      "Explore our portfolio showcasing successful Shopify customization projects, <br> highlighting how we customize, secure, and enhance stores for peak performance.",
    items: [
      {
        title: "Nufyx",
        category: "Shopify Theme Customization",
        description: "",
        image: "/assets/healthcare/portfolio/nufyx-protein-products.webp",
        href: "https://nufyx.com/",
      },
      {
        title: "Nekter Juice Bar",
        category: "Shopify Theme Customization",
        description: "",
        image: "/assets/food-beverages/portfolio/nekter-juice-bar.webp",
        href: "https://www.nekterjuicebar.com/",
      },
      {
        title: "Pagerie",
        category: "Shopify Theme Customization",
        description: "",
        image: "/assets/pet-industry/portfolio/pagerie-dog-accessories.webp",
        href: "https://www.pagerie.com/",
      },
      {
        title: "Luxxi Nails",
        category: "Shopify Theme Customization",
        description: "",
        image: "/assets/beauty-cosmetics/portfolio/luxxi-nails.webp",
        href: "https://luxxinails.com/",
      },
      {
        title: "Eco Soul",
        category: "Shopify Theme Customization",
        description: "",
        image: "/assets/our-work/projects/eco-soul.webp",
        href: "https://www.ecosoulhome.com/",
      },
      {
        title: "AdHOC Atelier",
        category: "Shopify Theme Customization",
        description: "",
        image: "/assets/hire-shopify-developers/portfolio/adhoc-atler.webp",
        href: "https://adhocatelier.it/",
      },
      {
        title: "Bombay Shirt Company",
        category: "Shopify Theme Customization",
        description: "",
        image: "/assets/fashion/portfolio/bombay-shirt-company-fashion.webp",
        href: "https://bombayshirts.com/",
      },
      {
        title: "Holy Plantz",
        category: "Shopify Theme Customization",
        description: "",
        image: "/assets/our-work/projects/holy-plantz.webp",
        href: "https://holyplantz.com/",
      },
    ],
  },
  faqs: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is Shopify theme customization?",
        answer:
          "Shopify theme customization involves modifying a Shopify theme to suit your brand’s specific design and functionality needs. It can include changes to layout, colors, fonts, features, and more to create a unique store that aligns with your business.",
      },
      {
        question: "Why should I customize my Shopify theme?",
        answer:
          "Customizing your Shopify theme helps your store stand out from competitors, improves user experience, and can lead to higher conversion rates. A custom theme allows you to tailor the design and functionality to your brand’s requirements and goals.",
      },
      {
        question: "How long does the customization process take?",
        answer:
          "The time required for theme customization can vary depending on the complexity of the changes and your project’s specific requirements. Generally, the theme customization process can take a few days to several weeks. We will provide a timeline after understanding your requirements during the initial consultation.",
      },
      {
        question: "Can I update the theme myself after customization?",
        answer:
          "You can update and change your theme once the customization is complete. We can also provide training and documentation to help you manage your theme. Additionally, our team is available for ongoing support if you need further assistance.",
      },
      {
        question: "Can you customize a theme I have already purchased?",
        answer:
          "Yes, we can customize any Shopify theme, whether it is one you have already purchased or one we recommend based on your needs. We will work with the existing theme to modify it to achieve your desired look and functionality.",
      },
      {
        question: "What if I don’t like the customizations?",
        answer:
          "Our process includes multiple stages of review and feedback to ensure you are satisfied with the customizations. We will provide design mockups and prototypes for your approval before implementing any changes. If there are any issues, we will work with you to make the necessary adjustments until you are happy with the result.",
      },
      {
        question:
          "What do you provide in Shopify theme customization service?",
        answer:
          "<p>Our Shopify theme customization service includes the following:</p>\\n<ul>\\n<li>Theme selection and installation</li>\\n<li>Custom design and branding</li>\\n<li>Responsive design for mobile optimization</li>\\n<li>Integration of advanced features</li>\\n<li>Performance optimization</li>\\n<li>Ongoing support and maintenance</li>\\n</ul>",
      },
      {
        question:
          "Will my store be down during the customization process?",
        answer:
          "We strive to minimize any downtime during the customization process. To ensure a smooth transition, first, we make most changes on a staging site and then deploy them to your live site. We will work with you to schedule any necessary downtime to minimize the impact on your business.",
      },
      {
        question: "After the theme customization, do you offer support?",
        answer:
          "We offer ongoing support and maintenance services to keep your store updated and perform optimally. Our team is available to assist with any issues or additional customizations you may need in the future.",
      },
      {
        question: "How much does Shopify theme customization cost?",
        answer:
          "The complexity and scope of the project determine how much customizing a Shopify theme will cost. We offer different packages to suit various budgets and needs, and we can provide a custom quote after discussing your specific requirements. Contact us for a free consultation to get a detailed estimate.",
      },
      {
        question:
          "Can I customize my Shopify theme, or do I need a new one?",
        answer:
          "You can customize an existing Shopify theme to fulfill your requirements. Suppose your current theme does not offer enough flexibility. In that case, we can extend it or recommend a new one better suited to your goals.",
      },
    ],
  },
  ctaBanner: {
    heading: "Want us to help you with your online store?",
    ctaLabel: "request a quote",
    ctaHref: "/request-quote",
  },
} as const;
