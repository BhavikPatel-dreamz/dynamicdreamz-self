import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

export const hireShopifySectionCopy = {
  industriesHeading: "Industries that we have Served",
  industriesDescription:
    "Dynamic Dreamz has massive experience across multiple industries,<br> helping businesses like yours succeed online. Our expertise spans sectors such as:",
  portfolioHeading: "Work of our Shopify Developers<br>that show our Expertise",
  portfolioDescription:
    "We are sure you would like to hear to what our clients says about our Shopify development.",
  reasonsHeading: "Why Choose Dynamic Dreamz for <br> Shopify Development",
  reasonsDescription:
    "Our Shopify developers have the ideal balance of expertise in eCommerce <br> business and Shopify technology. For your online business, <br> we can act as a powerful catalyst.",
  advantagesHeading: "Our Advantages of Choosing Dynamic Dreamz as a Shopify Developer",
  advantagesDescription: "Get connected with us, and you will witness the difference from day one!",
  advantagesCtaLabel: "inquire now",
} as const;

const icon = (name: string) => `/assets/hire-shopify-developers/icons/${name}.svg`;

export const hireShopifyHero = {
  title: "Hire Shopify Developers",
  description: "Are you looking to expand your brand fast? Hire Shopify developers from Dynamic Dreamz to create, customize, and optimize your online Shopify store. Our experienced Shopify developers can help you achieve high quality, scalable solutions based on your business requirements. Let us handle the technicalities while you concentrate on developing your brand.",
  ctaLabel: "Hire Shopify Developers",
  stats: [
    { value: "50+", label: "Agile enabled Shopify Developers" },
    { value: "5000+", label: "Completed Projects" },
    { value: "20+", label: "Years of Experience" },
    { value: "1000+", label: "Happy & Satisfied Clients" },
    { value: "1000+", label: "Shopify Developments" },
  ],
} as const;

export const hireShopifyProcess = {
  heading: "Hassle free Hiring Process to Hire Shopify Developers",
  description: "Hiring Shopify developers from Dynamic Dreamz is like smooth sailing. With a practical pricing structure, we provide hiring at competitive prices.",
  items: [
    { title: "Share Requirements", description: "Post the requirements for your project. Please tell us what you hope to get out of the project.", icon: "/assets/hire-wordpress-developers/icons/share-requirements.svg", iconAlt: "Share requirements" },
    { title: "Expert Talent Selection", description: "We analyze your requirements and shortlist Shopify developer profiles that best fit your upcoming project work.", icon: "/assets/hire-wordpress-developers/icons/expert-talent-selection.svg", iconAlt: "Expert talent selection" },
    { title: "Select the Developer", description: "Choose the best skilled developer that matches your requirements from the shortlisted developers.", icon: "/assets/hire-wordpress-developers/icons/matching-business-talent.svg", iconAlt: "Select the Shopify developer" },
    { title: "Project Initiation", description: "Communicate with the selected Shopify developer, and you can kickstart your project!", icon: "/assets/hire-wordpress-developers/icons/project-kickstart.svg", iconAlt: "Project initiation" },
  ],
} as const;

export const hireShopifyServices = {
  heading: "Get Started with Shopify Developers for End to End Development Services",
  description: "Are you looking for a professional team to help you create and expand your online store? Our Shopify developers offer complete services, from setup to ongoing support. Let us handle the technical side so you can focus on your core business.",
  items: [
    { title: "Shopify Store Setup & Configuration", description: "We will help you build a fully functional Shopify store from scratch, based on your brand's requirements. From choosing themes to configuring environments, we ensure a smooth and efficient store launch.", icon: icon("shopify-store-setup"), iconAlt: "Shopify store setup and configuration" },
    { title: "Third party App Integration", description: "Improve your store's functionality with custom app integrations. Our team connects your Shopify store with important third party apps for marketing, payments, shipping, and more, all without compromising performance.", icon: icon("third-party-app-integration"), iconAlt: "Third-party app integration" },
    { title: "Shopify Migration", description: "Want to switch to Shopify from another platform? We handle data transfer, theme customization, and app integration, ensuring a smooth migration and minimal downtime for your online store.", icon: icon("shopify-migration"), iconAlt: "Shopify migration" },
    { title: "Shopify Post launch Maintenance & Support", description: "We offer ongoing support even after your Shopify store is live. From updates and troubleshooting to performance optimization, our team guarantees your Shopify store runs seamlessly and stays up to date.", icon: icon("post-launch-support"), iconAlt: "Shopify post-launch maintenance and support" },
  ],
} as const;

export const hireShopifyReasons = [
  { title: "Experience says it all", description: "With more than eighteen years of significant experience in Shopify development, we are an established Shopify development agency.", icon: icon("experience"), iconAlt: "Shopify development experience" },
  { title: "Extensive Shopify development in different verticals", description: "We have created Shopify stores in the following categories: Retail, Food & Beverages, Beauty & Cosmetics, Fashion & Apparel, and Pet. We are well knowledgeable about the eCommerce development used in these sectors.", icon: icon("industry-experience"), iconAlt: "Shopify industry experience" },
  { title: "Talented Pool of Shopify Developer", description: "Our team contains full time, committed Shopify specialists, including developers, designers, project managers, and quality assurance personnel. To ensure that our clients receive the most of their abilities, we hire them only after a thorough selection process.", icon: icon("shopify-team"), iconAlt: "Shopify developer team" },
] as const;

export const hireShopifyAdvantages = [
  { title: "The easy and fair hiring process", description: "We use a hassle free hiring procedure with no hidden fee.", icon: icon("fair-hiring"), iconAlt: "Fair hiring process" },
  { title: "Save 60% on your development cost", description: "Our agency offers competitive prices. Our pricing standards are flexible and convenient for all kinds of customers.", icon: icon("development-savings"), iconAlt: "Development cost savings" },
  { title: "Integrity is our core value", description: "We stick to strict data security guidelines to ensure clients' data stays secure and confidential.", icon: icon("integrity"), iconAlt: "Data security and integrity" },
  { title: "We handle your HR needs", description: "We handle paperwork and HR related issues so you may concentrate on your core business.", icon: icon("managed-hr"), iconAlt: "Managed HR needs" },
  { title: "We work as per your time zone", description: "Our Shopify developers can work whenever it suits you or by your time zone.", icon: icon("timezone"), iconAlt: "Shopify developers working across time zones" },
  { title: "Unmatched post production support", description: "Our work does not stop when the project is finished, we provide you with continuous support.", icon: icon("post-production-support"), iconAlt: "Post-production support" },
] as const;

export const hireShopifyIndustries = [
  { title: "Beauty & Cosmetics", image: "/assets/shopify-plus-agency/industries/beauty-cosmetics.webp", imageAlt: "Beauty and cosmetics Shopify store", description: "We create elegant, high converting stores that capture the essence of beauty and cosmetics brands, enhancing customer engagement." },
  { title: "Fashion & Apparel", image: "/assets/shopify-plus-agency/industries/fashion-apparel.webp", imageAlt: "Fashion and apparel Shopify store", description: "Our solutions for fashion and apparel brands concentrate on artistic taste and functionality, driving organic traffic and boosting sales." },
  { title: "Health & Nutrition", image: "/assets/shopify-plus-agency/industries/health-nutrition.webp", imageAlt: "Health and nutrition Shopify store", description: "We develop robust Shopify stores for health and nutrition brands, ensuring adherence to industry standards and providing a smooth shopping experience." },
  { title: "Food & Beverages", image: "/assets/shopify-plus-agency/industries/food-beverages.webp", imageAlt: "Food and beverages Shopify store", description: "Our team designs appealing and easy-to-navigate stores for food and beverage businesses, enhancing customer satisfaction and loyalty." },
  { title: "Pet Industry", image: "/assets/shopify-plus-agency/industries/pet-industry.webp", imageAlt: "Pet industry Shopify store", description: "We cater to pet brands with tailored Shopify solutions that resonate with pet lovers, making shopping for pet products a satisfying experience." },
] as const;

export const hireShopifyPortfolio = [
  { name: "nekter juice bar", href: "https://www.nekterjuicebar.com/", image: "/assets/food-beverages/portfolio/nekter-juice-bar.webp", imageAlt: "Nekter Juice Bar Shopify project preview" },
  { name: "Nufyx", href: "https://nufyx.com/", image: "/assets/healthcare/portfolio/nufyx-protein-products.webp", imageAlt: "Nufyx Shopify project preview" },
  { name: "Pagerie", href: "https://www.pagerie.com/", image: "/assets/pet-industry/portfolio/pagerie-dog-accessories.webp", imageAlt: "Pagerie Shopify project preview" },
  { name: "Luxxi nails", href: "https://luxxinails.com/", image: "/assets/beauty-cosmetics/portfolio/luxxi-nails.webp", imageAlt: "Luxxi Nails Shopify project preview" },
  { name: "Eco Soul", href: "https://www.ecosoulhome.com/", image: "/assets/our-work/projects/eco-soul.webp", imageAlt: "Eco Soul Shopify project preview" },
  { name: "AdHOC Atler", href: "https://adhocatelier.it/", image: "/assets/hire-shopify-developers/portfolio/adhoc-atler.webp", imageAlt: "AdHOC Atelier Shopify project preview" },
] as const;

export const hireShopifyTestimonials = { heading: "Our Customer's Testimonials", description: "We have faith in our work, but what truly matters is the outcomes we serve our clients.<br> Happy clients make happy stories. Check out how our services empower them to evolve." } as const;

export const hireShopifyFaqs: readonly FaqAccordionItem[] = [
  { question: "What do Shopify developers do?", answer: "Shopify store development, customization, and maintenance are the responsibilities of Shopify developers. Everything is taken care of by them, including performance optimization, app integration, and design and development." },
  { question: "How much does hiring a Shopify developer cost?", answer: "The cost of hiring a Shopify developer depends on the complexity and size of your project, as well as the developer's skills and experience. We offer flexible pricing models to suit your budget and needs." },
  { question: "Is it worth hiring a Shopify developer?", answer: "Yes, of course. You may save time and make sure your store is expertly designed, optimized, and tailored to fit your unique business needs by hiring a Shopify developer." },
  { question: "What is the process for hiring a Shopify developer from Dynamic Dreamz?", answer: "Hiring a Shopify developer from Dynamic Dreamz is simple:", listItems: [{ text: "Reach out to us with your requirements." }, { text: "Choose your preferred hiring model." }, { text: "Get started with a dedicated Shopify developer to bring your project to life." }] },
  { question: "What services do Shopify developers offer?", answer: "Shopify developers provide services such as:", listItems: [{ text: "Shopify Store setup" }, { text: "Shopify Theme customization" }, { text: "Shopify App development" }, { text: "Shopify Store Migration" }, { text: "Shopify SEO Optimization" }, { text: "Shopify Ongoing support" }] },
] as const;
