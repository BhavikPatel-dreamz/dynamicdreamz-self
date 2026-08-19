import { testimonials, type Testimonial } from "@/content/home";
import type {
  WhiteLabelCapability,
  WhiteLabelCard,
  WhiteLabelFaq,
  WhiteLabelHero,
  WhiteLabelService,
  WhiteLabelStat,
} from "@/types/white-label-service";

export const whiteLabelWebsiteDesignHero = {
  title: "White Label Website Design",
  titleLines: ["White Label", "Website Design"],
  lead: "Looking to expand your service offerings without the hassle of building an in-house team?",
  leadStrong: false,
  paragraphs: [
    "Our white label website design services provide the perfect solution. We create custom, high quality websites tailored to your client’s needs, all branded under your name. Whether you’re an agency looking to scale or a business aiming to diversify, our team handles the design and development while you take all the credit.",
  ],
  cta: "request a Quote",
  illustration:
    "/assets/white-label-website-design/hero/white-label-website-design-services.png",
  illustrationAlt: "White Label Website Design Services",
} as const satisfies WhiteLabelHero;

export const whiteLabelWebsiteDesignStats: readonly WhiteLabelStat[] = [
  { value: "20+", label: "Years of experience", icon: "/assets/proof/years-of-experience.svg" },
  { value: "150+", label: "Skilled Developers", icon: "/assets/proof/skilled-developers.svg" },
  { value: "2500+", label: "Client Reviews", icon: "/assets/proof/client-reviews.svg" },
  { value: "1000+", label: "WP Sites Delivered", icon: "/assets/proof/sites-delivered.svg" },
];

export const whiteLabelWebsiteDesignReasons: readonly WhiteLabelCard[] = [
  { title: "Expand Service Offerings", description: "White label web design allows you to provide a more comprehensive choice of services and attract more customers without creating an in-house team." },
  { title: "Focus on Core Competencies", description: "Allow professionals to manage website design while your company concentrates on customer relations, sales, and marketing." },
  { title: "Cost Effective Solution", description: "When web design is outsourced instead of being developed or designed internally, overhead costs are decreased." },
  { title: "Faster Project Turnaround", description: "Working with professional white label web developers allows you to complete projects faster, which increases productivity and client satisfaction." },
  { title: "Brand Control", description: "All work is delivered under your name, maintaining customer trust and enhancing your reputation in the marketplace." },
];

const benefitAsset = (filename: string) => `/assets/white-label-website-design/benefits/${filename}.svg`;
export const whiteLabelWebsiteDesignBenefits: readonly WhiteLabelCapability[] = [
  { title: "Scalability", description: "Increase your client list without worrying about hiring more people or gaining more experience to grow your company fast.", icon: benefitAsset("scalability") },
  { title: "Access to Expertise", description: "Work with experienced designers and developers to provide high quality services and ensure that professional and modern websites are delivered to your client.", icon: benefitAsset("access-to-expertise") },
  { title: "Increase Revenue Streams", description: "Add website design services to your list of services to attract more customers and boost your overall income.", icon: benefitAsset("increase-revenue-streams") },
  { title: "Reduced Risk", description: "With a white label partner, you can lower the risk of project delays or poor quality work, ensuring your clients are happy with the project work.", icon: benefitAsset("reduced-risk") },
  { title: "Flexible Pricing", description: "By negotiating with the white label partner, you can manage your pricing structure and margins and offer your clients competitive pricing.", icon: benefitAsset("flexible-pricing") },
];

const aiAsset = (filename: string) => `/assets/white-label-website-design/ai/${filename}.svg`;
export const whiteLabelWebsiteDesignAiCapabilities: readonly WhiteLabelCapability[] = [
  { title: "AI-assisted content", description: "Generate high-quality product descriptions, landing page copy, and SEO content fast and at scale.", icon: aiAsset("ai-assisted-content"), tools: ["OpenAI", "Shopify Magic"] },
  { title: "Smarter customer support", description: "Embed AI chat and support tools that reduce ticket volume and keep visitors engaged on-site.", icon: aiAsset("smarter-customer-support"), tools: ["Tidio", "Tidio"] },
  { title: "Workflow automation", description: "Connect your clients' websites to their business tools, removing manual work across marketing, CRM, and fulfilment.", icon: aiAsset("workflow-automation"), tools: ["Zapier", "Make"] },
  { title: "Email & retention", description: "Behaviour-based email flows that convert first-time visitors into repeat buyers automatically.", icon: aiAsset("email-retention"), tools: ["Klaviyo"] },
  { title: "Conversion optimisation", description: "AI-informed UX improvements from page layout to CTAs that move visitors toward action.", icon: aiAsset("conversion-optimisation"), tools: ["Shopify Sidekick"] },
];

export const whiteLabelWebsiteDesignAiDiscovery: readonly WhiteLabelCard[] = [
  { title: "Schema & structured data", description: "FAQPage, Organization, and Product schema so AI engines can read and cite your clients' sites." },
  { title: "Internal linking & content structure", description: "Pages are structured so both users and AI crawlers understand context, hierarchy, and relevance." },
  { title: "Trust signals", description: "Reviews, credentials, and social proof woven into the design are the signals AI uses to recommend businesses." },
  { title: "Agentic commerce readiness", description: "For e-commerce clients, we prepare stores for AI agents that discover products and complete purchases autonomously." },
];

export type WhiteLabelWebsiteDesignProcessStep = WhiteLabelCard & { icon: string };
const processAsset = (filename: string) => `/assets/process/${filename}.svg`;
export const whiteLabelWebsiteDesignProcess: readonly WhiteLabelWebsiteDesignProcessStep[] = [
  { title: "Analyze", description: "We start by analyzing your client's requirements and collecting all relevant data to ensure we understand the project's requirements.", icon: processAsset("step-01") },
  { title: "Design", description: "Our design team creates a layout and wireframe based on the project requirements, focusing on user experience and visual attraction.", icon: processAsset("step-02") },
  { title: "Build", description: "After design approval, our development team starts creating the website using the latest technologies, ensuring the website is fast, secure, and responsive.", icon: processAsset("step-03") },
  { title: "Test", description: "Before delivery, we thoroughly test the site to ensure it works perfectly across all devices and browsers.", icon: processAsset("step-04") },
];

export const whiteLabelWebsiteDesignFeatures: readonly WhiteLabelCard[] = [
  { title: "Customization", description: "We create website design to fit your client's brand, ensuring each site is unique and personalized." },
  { title: "Responsive Design", description: "We build websites that look great on all devices, from desktops to smartphones, ensuring a seamless user experience." },
  { title: "SEO Friendly", description: "Our designs follow best practices for SEO, ensuring the sites are optimized for search engines and helping clients rank higher." },
  { title: "Fast Loading Times", description: "We prioritize performance, ensuring that websites load quickly, improving user satisfaction and search engine rankings." },
  { title: "Secure Development", description: "We implement robust security measures to protect websites from hackers and other cyber threats." },
];

export const whiteLabelWebsiteDesignAdvantages: readonly WhiteLabelCapability[] = [
  { title: "No Need for an In-House Team", description: "You can offer web design services without hiring or managing an internal development team.", icon: benefitAsset("advantage-check") },
  { title: "Faster Time to Market", description: "Projects are completed quickly, allowing you to take on more clients and deliver results faster.", icon: benefitAsset("advantage-check") },
  { title: "Improved Client Satisfaction", description: "Your clients will appreciate the high quality, professional websites that meet their needs and exceed expectations.", icon: benefitAsset("advantage-check") },
  { title: "Increased Profit Margins", description: "Outsourcing work at a lower cost can improve profit margins while maintaining competitive pricing for clients.", icon: benefitAsset("advantage-check") },
  { title: "Less Stress on Internal Resources", description: "With the web design taken care of, your team can focus on their strengths and grow your agency.", icon: benefitAsset("advantage-check") },
];

const serviceAsset = (filename: string) => `/assets/white-label-website-design/services/${filename}.svg`;
export const whiteLabelWebsiteDesignServices: readonly WhiteLabelService[] = [
  { title: "Custom Website Design", description: "We create custom website designs that match your client’s brand identity and help them stay ahead of competitors.", icon: serviceAsset("custom-website-design") },
  { title: "eCommerce Website Design", description: "Our designers and developers are experts in designing user friendly, conversion focused eCommerce websites that help your client boost their sales.", icon: serviceAsset("ecommerce-website-design") },
  { title: "Responsive Website Design", description: "While designing, we ensure that websites are fully responsive and run properly on all devices, offering a smooth experience to visitors.", icon: serviceAsset("responsive-website-design") },
  { title: "SEO Optimized Websites", description: "We do not provide core SEO services, but we make sure we do some basic SEO. It optimizes the website for search engines and loads faster, helping clients attract more traffic and grow their business.", icon: serviceAsset("seo-optimized-websites") },
  { title: "Theme Customization", description: "We help your client customize their newly purchased theme or modify their existing one. We can customize the website design to your client’s requirements.", icon: serviceAsset("theme-customization") },
  { title: "BigCommerce Website Development", description: "We design and develop scalable BigCommerce websites tailored to your client’s business needs. From custom storefronts to seamless integrations, our BigCommerce solutions are built for performance & long-term growth.", icon: serviceAsset("bigcommerce-website-development"), href: "/bigcommerce-development", linkLabel: "Read More" },
];

export type WhiteLabelWebsiteDesignIndustry = WhiteLabelCard & { icon: string };
const industryAsset = (filename: string) => `/assets/white-label-website-design/industries/${filename}.svg`;
export const whiteLabelWebsiteDesignIndustries: readonly WhiteLabelWebsiteDesignIndustry[] = [
  { title: "Beauty & Cosmetics", description: "We are experts in designing stunning websites for beauty and cosmetics brands, helping them highlight their hero products and attract new customers.", icon: industryAsset("beauty-cosmetics-pet") },
  { title: "Fashion & Apparel", description: "Our creative website designs for fashion and apparel brands concentrate on visual appeal and straightforward navigation, encouraging visitors to explore and buy.", icon: industryAsset("fashion-apparel") },
  { title: "Food & Beverages", description: "Our experienced website designers create attractive website designs for food and beverage businesses, improving their online presence and boosting sales.", icon: industryAsset("food-beverages") },
  { title: "Health & Nutrition", description: "We create websites that support health and wellness companies, highlighting straightforward, educational content and responsive designs.", icon: industryAsset("health-nutrition") },
  { title: "Pet Industry", description: "We create active and welcoming website designs for pet related businesses, helping them showcase their products and services.", icon: industryAsset("beauty-cosmetics-pet") },
];

export const whiteLabelWebsiteDesignTestimonials: readonly Testimonial[] = [...testimonials.slice(6), ...testimonials.slice(0, 6)];

export const whiteLabelWebsiteDesignFaqs: readonly WhiteLabelFaq[] = [
  { question: "Will you work directly with our clients or contact them at any point?", answer: "Never. We work exclusively with your agency team. Your clients never know we exist; all files, deliverables, and communication go through you. We sign NDAs as standard, and our team is briefed to maintain full confidentiality throughout every project." },
  { question: "How long does a typical white label website design project take?", answer: "Timelines depend on the project scope. A landing page or single-page design typically takes 5–7 business days. A multi-page custom website ranges from 2 to 4 weeks. An e-commerce website with custom product pages and integrations generally runs 4–6 weeks. We align timelines during the briefing stage so your agency can communicate accurate delivery dates to clients." },
  { question: "What do you need from us to start a project?", answer: "We typically need a project brief covering your client’s goals, brand guidelines (logo, colours, fonts), reference websites they like, and any content or assets they’ve prepared. If content isn’t ready, we can work with placeholder copy and flag gaps during the review stage. The more context you share upfront, the fewer revision rounds are needed." },
  { question: "How many revision rounds are included, and how is feedback managed?", answer: "Every project includes a structured review process, design approval at the wireframe stage, staging review before development is finalised, and a pre-launch QA pass. Revision requests are tracked in a shared document so nothing slips through the cracks. If the scope changes significantly during a project, we discuss it transparently before any additional work begins." },
  { question: "What platforms and technologies do you design and build on?", answer: "We work across Shopify, Shopify Plus, WordPress, WooCommerce, BigCommerce, and Figma-to-code builds. For custom projects, we work with HTML/CSS/JS and popular front-end frameworks. If your client is on a specific platform, let us know during the briefing stage, and we’ll confirm our fit before the project starts." },
  { question: "Can you add AI tools and automation to the websites you design?", answer: "Yes. Beyond design and development, we can integrate AI-powered tools, including live chat and support automation (Tidio, Gorgias), email marketing and retention flows (Klaviyo), workflow automation across connected business tools (Zapier, Make), and AI-assisted content generation (OpenAI, Shopify Magic). All of this is delivered white label, your agency takes credit, we handle the build." },
  { question: "What is GEO and why does it matter for my clients' websites?", answer: "GEO stands for Generative Engine Optimisation, the practice of making websites readable and recommendable by AI-powered search engines like ChatGPT, Gemini, and Perplexity. Unlike traditional SEO, which targets Google’s crawler, GEO focuses on structured data, content clarity, trust signals, and FAQ coverage so AI engines can confidently cite a business in their answers. As more users search through AI assistants rather than Google, GEO is becoming as important as SEO for online visibility." },
  { question: "Are the websites you build ready for agentic commerce and AI shopping agents?", answer: "For e-commerce clients, yes. We prepare Shopify and WooCommerce stores to be compatible with AI shopping agents’ autonomous tools that can discover products, build carts, and complete purchases on behalf of users. This involves a clean product data structure, schema markup, and API readiness aligned with Shopify’s Universal Commerce Protocol. Most e-commerce websites today are not set up for this. We help your clients get ahead of it before it becomes standard." },
];
