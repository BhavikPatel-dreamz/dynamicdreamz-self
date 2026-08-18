import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

export type ShopifyExpertsStat = {
  value: string;
  label: string;
};

export type ShopifyExpertsCard = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
};

export type ShopifyExpertsAutomationItem = {
  title: string;
  description: string;
  icon: string;
  alt: string;
  pills: string[];
};

export type ShopifyExpertsAiDiscoveryItem = {
  title: string;
  description: string;
  icon: string;
  alt: string;
};

export type ShopifyExpertsIndustry = {
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
};

export type ShopifyExpertsWorkItem = {
  name: string;
  href: string;
  image: string;
  imageAlt: string;
  category: string;
};

export const shopifyExpertsContent = {
  hero: {
    title: "Hire Shopify Experts for Rapid growth of your brand",
    description:
      "Want to create a stunning Shopify store or determined to take your Shopify store to the next level?",
    secondaryDescription:
      "Hire our experienced Shopify experts who specialize in creating custom themes, optimizing store performance, and enhancing user experience. Whether you need help with design, development, or marketing, our Shopify professionals can tailor solutions to fit your business needs. Boost sales, improve site functionality, highlight your brand, and stand out in the crowded eCommerce market with the help of skilled Shopify experts.",
    ctaLabel: "get started today",
    ctaHref: "/request-quote",
    stats: [
      { value: "50+", label: "Agile enabled Shopify Developers" },
      { value: "5000+", label: "Completed Projects" },
      { value: "20+", label: "Years of Experience" },
      { value: "1000+", label: "Happy & Satisfied Clients" },
      { value: "1000+", label: "Shopify Developments" },
    ] as ShopifyExpertsStat[],
  },

  brands: {
    heading: "Trusted by Leading Brands",
    ariaLabel: "Brands that trust Dynamic Dreamz for Shopify development",
    slug: "shopify-experts",
  },

  process: {
    heading: "Hassle free Hiring Process to Get Started",
    description:
      "Hiring Shopify experts at Dynamic Dreamz is like smooth sailing. We offer competitive pricing to hire with a convenient pricing model.",
    items: [
      {
        title: "Share Requirements",
        description:
          "Post your project requirements. Let us know the outcome you want from your project.",
        icon: "/assets/hire-wordpress-developers/icons/share-requirements.svg",
        iconAlt: "Share Requirements Icon",
      },
      {
        title: "Expert Talent Selection",
        description:
          "We scrutinize your requirements and shortlist Shopify experts profiles best fit for your project.",
        icon: "/assets/hire-wordpress-developers/icons/expert-talent-selection.svg",
        iconAlt: "Expert Talent Selection Icon",
      },
      {
        title: "Select the Expert",
        description:
          "Select the best talent that matches your requirements from the shortlisted talents.",
        icon: "/assets/hire-wordpress-developers/icons/matching-business-talent.svg",
        iconAlt: "Matching Business Talent Icon",
      },
      {
        title: "Project Initiation",
        description:
          "Get engaged with the selected Shopify expert and you can kickstart your project!",
        icon: "/assets/hire-wordpress-developers/icons/project-kickstart.svg",
        iconAlt: "Project Kickstart Phase Icon",
      },
    ],
  },

  hiringChoice: {
    heading:
      "What makes Dynamic Dreamz an excellent choice to hire for your Shopify Development?",
    description:
      "Our Shopify experts are a perfect blend of Shopify technology and eCommerce business knowledge. We can be an effective catalyst for your online business.",
    items: [
      {
        title: "Experience says it all",
        description:
          "We are a seasoned Shopify development agency with 20+ years of rich experience in Shopify development.",
        icon: "/assets/hire-shopify-developers/icons/experience.svg",
        iconAlt: "Experience says it all icon",
      },
      {
        title: "Extensive Shopify development in different verticals",
        description:
          "We have crafted Shopify stores for Fashion & Apparels, Beauty & Cosmetics, Food & Beverages, Retail, Pet, and others. We have in-depth knowledge of how eCommerce is done in these industries.",
        icon: "/assets/hire-shopify-developers/icons/industry-experience.svg",
        iconAlt: "Extensive Shopify development icon",
      },
      {
        title: "Talented Pool of Shopify Experts",
        description:
          "We have a team of dedicated and full time Shopify experts consisting of designers, developers, project managers and QA guys. We hire them after a rigorous selection process to ensure that our clients get the best of the talents.",
        icon: "/assets/hire-shopify-developers/icons/shopify-team.svg",
        iconAlt: "Talented Pool of Shopify Experts icon",
      },
    ] as ShopifyExpertsCard[],
  },

  advantages: {
    heading: "Advantages of Choosing Dynamic Dreamz as a Shopify Expert",
    description:
      "Get connected with us, and you will witness the difference from day one!",
    items: [
      {
        title: "Easy and fair hiring process",
        description: "We use a hassle free hiring procedure with no hidden fee.",
        icon: "/assets/hire-shopify-developers/icons/fair-hiring.svg",
        iconAlt: "Fair hiring process icon",
      },
      {
        title: "Save 60% on your development cost",
        description:
          "Our agency offers competitive prices. Our pricing standards are flexible and convenient for all kinds of customers.",
        icon: "/assets/hire-shopify-developers/icons/development-savings.svg",
        iconAlt: "Development cost savings icon",
      },
      {
        title: "Integrity is our core value",
        description:
          "We stick to strict data security guidelines to ensure clients' data stays secure and confidential.",
        icon: "/assets/hire-shopify-developers/icons/integrity.svg",
        iconAlt: "Data security and integrity icon",
      },
      {
        title: "We handle your HR needs",
        description:
          "We handle paperwork and HR related issues so you may concentrate on your core business.",
        icon: "/assets/hire-shopify-developers/icons/managed-hr.svg",
        iconAlt: "Managed HR needs icon",
      },
      {
        title: "We work as per your time zone",
        description:
          "Our Shopify developers can work whenever it suits you or by your time zone.",
        icon: "/assets/hire-shopify-developers/icons/timezone.svg",
        iconAlt: "Timezone flexibility icon",
      },
      {
        title: "Unmatched post production support",
        description:
          "Our work does not stop when the project is finished, we provide you with continuous support.",
        icon: "/assets/hire-shopify-developers/icons/post-production-support.svg",
        iconAlt: "Post-production support icon",
      },
    ] as ShopifyExpertsCard[],
    ctaLabel: "inquire now",
    ctaHref: "/request-quote",
  },

  aiAutomation: {
    heading:
      "Shopify Experts Who Build Stores That Think, Automate, and Convert",
    description:
      "Great Shopify stores aren't just well-built, they're smart. Our experts go beyond design and development to set up the AI tools, automation flows, and customer journeys that keep your store converting and retaining around the clock.",
    items: [
      {
        title: "AI customer support",
        description:
          "Resolve tier-1 tickets, answer product questions, and capture leads automatically across live chat, email, and social before a human agent ever needs to step in.",
        icon: "/assets/white-label-shopify/ai/ai-customer-support.svg",
        alt: "AI customer support",
        pills: ["Gorgias", "Tidio", "ChatGPT / OpenAI"],
      },
      {
        title: "Store Workflow Automation",
        description:
          "Automate fulfilment triggers, inventory alerts, order tagging, and post-purchase flows, eliminating manual tasks that slow your operations down.",
        icon: "/assets/white-label-shopify/ai/store-automation.svg",
        alt: "Store automation",
        pills: ["Shopify Flow", "Zapier", "Make"],
      },
      {
        title: "AI product content",
        description:
          "Generate compelling, SEO-ready product descriptions, collection copy, and meta content at scale using Shopify's own AI tools and OpenAI integrations.",
        icon: "/assets/white-label-shopify/ai/ai-product-content.svg",
        alt: "AI product content",
        pills: ["Shopify Magic", "Shopify Sidekick", "OpenAI"],
      },
      {
        title: "Smart Email & Retention",
        description:
          "Behaviour-triggered email flows that recover abandoned carts, re-engage lapsed customers, and build loyalty running on autopilot after setup.",
        icon: "/assets/white-label-shopify/ai/email-retention.svg",
        alt: "Email & retention",
        pills: ["Klaviyo", "Shopify Flow", "Make"],
      },
      {
        title: "Smarter Shopping Experiences",
        description:
          "From personalised product recommendations to AI-powered search and upsell logic, build experiences that guide shoppers confidently toward buying.",
        icon: "/assets/white-label-shopify/ai/email-retention.svg",
        alt: "Smarter Shopping Experiences",
        pills: ["Shopify Sidekick", "OpenAI", "Zapier"],
      },
      {
        title: "Cross-Platform Automation",
        description:
          "Connect your Shopify store to your CRM, ERP, fulfilment systems, and marketing stack, with no manual data entry, no broken handoffs between tools.",
        icon: "/assets/white-label-shopify/ai/email-retention.svg",
        alt: "Cross-Platform Automation",
        pills: ["Make", "Zapier", "Shopify Flow"],
      },
    ] as ShopifyExpertsAutomationItem[],
  },

  aiDiscovery: {
    heading: "Your Store, Visible Where Tomorrow's Shoppers Are Looking",
    description:
      "Search is changing. Customers are asking ChatGPT, Google AI Overviews, and Perplexity for product recommendations and buying through AI agents without visiting a store at all. Our Shopify experts structure your product pages, schema, FAQs, and trust signals so your store is the one AI engines recommend. And through Shopify's Universal Commerce Protocol, we help your store get discovered by the AI shopping agents of the future.",
    items: [
      {
        title: "Answer Engine Optimisation (AEO)",
        description:
          "FAQs, schema, and product data are structured so AI assistants can cite your store directly.",
        icon: "/assets/white-label-shopify/ai/ai-search-visibility.svg",
        alt: "Answer Engine Optimisation (AEO)",
      },
      {
        title: "Generative Engine Optimisation (GEO)",
        description:
          "Product and collection pages tuned for ChatGPT, Gemini, and Perplexity recommendations.",
        icon: "/assets/white-label-shopify/ai/structured-data.svg",
        alt: "Generative Engine Optimisation (GEO)",
      },
      {
        title: "Agentic Commerce Readiness",
        description:
          "Store architecture aligned with Shopify's Universal Commerce Protocol for AI agent shopping.",
        icon: "/assets/white-label-shopify/ai/agentic-commerce.svg",
        alt: "Agentic Commerce Readiness",
      },
      {
        title: "Trust Signal Architecture",
        description:
          "Reviews, internal linking, structured data, and product quality signals are built for AI and human trust.",
        icon: "/assets/white-label-shopify/ai/trust-signals.svg",
        alt: "Trust Signal Architecture",
      },
    ] as ShopifyExpertsAiDiscoveryItem[],
  },

  industries: {
    heading: "Industries that we have Served",
    description:
      "Having technical expertise has never been enough to fulfill clients’ requirements. Without domain knowledge, one cannot cater to the requirements and expectations of clients in a specific industry. Dynamic Dreamz with its vast experience in diverse industries has the following verticals to offer.",
    slides: [
      {
        title: "Beauty & Cosmetics",
        description:
          "The beauty and cosmetics industry is a dynamic sector encompassing a wide range of products designed to enhance personal appearance and skincare. Here the outcome of the application of beauty products matters the most. We at Dynamic Dreamz, use Shopify eCommerce platform to showcase ‘Before’ and ‘After’ effects of the beauty products.",
        image: "/assets/shopify-plus-agency/industries/beauty-cosmetics.webp",
        alt: "Beauty & Cosmetics Industry",
        href: "/beauty-cosmetics",
      },
      {
        title: "Fashion & Apparel",
        description:
          "The fashion industry is dynamic, fast paced, and trend driven, characterized by constant innovation and seasonal changes. Our Shopify and Shopify Plus based holistic IT solutions enable you to offer your customers the latest fashion clothing with hassle free configuration of your online store.",
        image: "/assets/shopify-plus-agency/industries/fashion-apparel.webp",
        alt: "Fashion & Apparel Industry",
        href: "/fashion",
      },
      {
        title: "Health & Nutrition",
        description:
          "Health & nutrition industry requires precise product display with accurate information readily available on their website for the customers. We at Dynamic Dreamz leverage the latest eCommerce technology to make product and its medicinal information easily accessible.",
        image: "/assets/shopify-plus-agency/industries/health-nutrition.webp",
        alt: "Health & Nutrition Industry",
        href: "/healthcare",
      },
      {
        title: "Food & Beverages",
        description:
          "Food and beverages industry is one of the most dynamic industries in the world. Dynamic Dreamz’ innovative IT solutions help you in overcoming the challenges faced in today's fast paced and competitive market.",
        image: "/assets/shopify-plus-agency/industries/food-beverages.webp",
        alt: "Food & Beverages Industry",
        href: "/food-beverages",
      },
      {
        title: "Pet Industry",
        description:
          "The Pet Industry is a niche market. The businesses have to adopt different strategies from pet to pet to target their customers because each pet has different needs and food habits. Dynamic Dreamz has an encompassing experience of serving 15+ pet industry clients.",
        image: "/assets/shopify-plus-agency/industries/pet-industry.webp",
        alt: "Pet Industry",
        href: "/pet-industry",
      },
    ] as ShopifyExpertsIndustry[],
  },

  work: {
    heading: "The Shopify Stores That Reflect Our Success",
    description:
      "We are sure you would like to listen to what our enraptured clients have responded to our Shopify development.",
    items: [
      {
        name: "Nufyx",
        href: "https://nufyx.com/",
        image: "/assets/healthcare/portfolio/nufyx-protein-products.webp",
        imageAlt: "Nufyx Shopify Store",
        category: "shopify",
      },
      {
        name: "nekter juice bar",
        href: "https://www.nekterjuicebar.com/",
        image: "/assets/food-beverages/portfolio/nekter-juice-bar.webp",
        imageAlt: "Nekter Juice Bar Image",
        category: "shopify",
      },
      {
        name: "Pagerie",
        href: "https://www.pagerie.com/",
        image: "/assets/pet-industry/portfolio/pagerie-dog-accessories.webp",
        imageAlt: "Pagerie Image",
        category: "shopify",
      },
      {
        name: "Luxxi nails",
        href: "https://luxxinails.com/",
        image: "/assets/beauty-cosmetics/portfolio/luxxi-nails.webp",
        imageAlt: "Luxxi Nails Image",
        category: "shopify",
      },
      {
        name: "Eco Soul",
        href: "https://www.ecosoulhome.com/",
        image: "/assets/our-work/projects/eco-soul.webp",
        imageAlt: "Eco Soul Image",
        category: "shopify",
      },
      {
        name: "AdHOC Atler",
        href: "https://adhocatelier.it/",
        image: "/assets/hire-shopify-developers/portfolio/adhoc-atler.webp",
        imageAlt: "AdHOC Atler Image",
        category: "shopify",
      },
    ] as ShopifyExpertsWorkItem[],
  },

  testimonials: {
    heading: "Our Customers' testimonials",
    description:
      "We have faith in our work, but what truly matters is the outcomes we serve our clients. Happy clients make happy stories. Check out how our services empower them to evolve.",
  },

  faqs: [
    {
      question:
        "What's the difference between hiring a Shopify expert and a Shopify developer?",
      answer:
        "A Shopify developer handles the technical build, code, integrations, and functionality. A Shopify expert brings both technical depth and ecommerce strategy. They understand what converts, how to structure a store for growth, and how to connect design decisions to business outcomes. At Dynamic Dreamz, our experts do both: build and advise.",
    },
    {
      question:
        "How long does it take to build a Shopify store from scratch?",
      answer:
        "Timelines depend on scope. A basic Shopify store with a pre-built theme takes 3–5 business days. A custom-designed Shopify store takes 2–3 weeks. A Shopify Plus store with custom checkout, B2B features, or third-party integrations typically takes 4–6 weeks. We share a detailed project timeline at kickoff so there are no surprises.",
    },
    {
      question:
        "Can your Shopify experts set up AI and automation for my store?",
      answer:
        "Yes, this is part of what makes our experts different. We implement AI-powered customer support (Gorgias, Tidio), smart email and retention flows (Klaviyo), workflow automation (Shopify Flow, Make, Zapier), and AI product content generation (Shopify Magic, OpenAI). You get a store that works harder after launch, not just a well-built one at delivery.",
    },
    {
      question:
        "Can you help my Shopify store appear in ChatGPT, Google AI Overviews, and Perplexity?",
      answer:
        "Yes, we optimise Shopify stores for AI search visibility through AEO (Answer Engine Optimisation) and GEO (Generative Engine Optimisation). This involves structuring product pages, FAQs, schema markup, internal linking, and trust signals so AI engines like ChatGPT, Gemini, and Perplexity can understand, trust, and recommend your store. Most Shopify agencies don't offer this yet — we do.",
    },
    {
      question:
        "How do I know the quality will be good before I commit to a full project?",
      answer:
        "Most clients start with a small scope, a single page, a theme fix, or a feature build before moving to a full store project. We're happy to start small. You can also browse our portfolio (50+ Shopify projects across fashion, beauty, health, and more) or check our reviews 5.0 across Clutch, Upwork, and GoodFirms, with 2,000+ Upwork reviews alone.",
    },
    {
      question:
        "Why hire Dynamic Dreamz over a freelancer or another Shopify agency?",
      answer:
        "Three things set us apart: depth (20+ years, 5,000+ projects, 50+ Shopify developers on one team), breadth (design, development, migration, apps, AI, and automation all in-house), and price (up to 60% more cost-effective than equivalent US or UK agencies, with no compromise on quality or communication). We also work across your time zone, not just IST hours.",
    },
    {
      question:
        "What happens after my Shopify store goes live? Do you offer ongoing support?",
      answer:
        "Yes, we offer post-launch support covering bug fixes, performance optimisation, feature additions, app integrations, and ongoing AI or automation setup. You can retain us on an hourly basis for ad-hoc work or on a monthly retainer for continuous improvements. Launching is the beginning, not the end, of our engagement.",
    },
  ] as readonly FaqAccordionItem[],

  ctaBanner: {
    heading: "Want us to help you with your online store?",
    ctaLabel: "REQUEST A QUOTE",
    ctaHref: "/request-quote",
  },
} as const;
