import type { AgencyServicesContent } from "@/components/sections/agency-services-section";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { ServiceHeroContent } from "@/components/sections/service-hero-section";
import type { ThemeCustomizationServicesContent } from "@/components/sections/theme-customization-services-section";
import type { NumberedGridItem } from "@/components/sections/shopify-migration/shopify-migration-numbered-grid-section";
import type { WhiteLabelTool } from "@/types/white-label-service";
import { industryBrandLogos } from "@/content/industries";

export const seoServicesSectionCopy = {
  toolsHeading: "Tools We Use",
  toolsDescription: "We don't just rely on guesswork. SEO optimization tools we use:",
  faqHeading: "Frequently Asked Questions",
  faqDescription: "Get answers to common questions about SEO, our process, pricing, and results",
} as const;

export const seoServicesBrands = {
  heading: "Trusted by \nLeading Brands",
  slug: "seo-services",
  items: industryBrandLogos,
} as const;

export const seoServicesHeroContent: ServiceHeroContent = {
  eyebrows: ["Established in 2006"],
  title: "SEO Services for Sustainable Organic Growth",
  subheading:
    "SEO can be a game-changing move if you do it in the right way. It can help you save a significant amount of money that you spend on ads.",
  description:
    "Our SEO services help businesses grow organically by enhancing visibility across search engines like Google. We offer strategic SEO optimization, which involves link building, technical improvements, content upgrades, and keyword research. We focus on increasing search rankings, attracting high-quality traffic, and driving long-term growth. Whether you are a service provider, local business, or eCommerce brand, our expert SEO services are designed to deliver measurable results.",
  ctaLabel: "Book a Discovery Call",
  ctaHref: "/request-quote",
  badges: [
    {
      name: "Clutch",
      src: "/assets/proof/clutch-rating.svg",
      href: "https://clutch.co/profile/dynamic-dreamz",
      alt: "Dynamic Dreamz on Clutch — 4.9 rating",
      width: 111,
      height: 44,
    },
    {
      name: "Trustpilot",
      src: "/assets/proof/trustpilot-rating.svg",
      href: "https://www.trustpilot.com/review/dynamicdreamz.com",
      alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
      width: 148,
      height: 50,
    },
    {
      name: "Upwork",
      src: "/assets/proof/upwork-top-rated-plus.svg",
      href: "https://www.upwork.com/ag/dynamicdreamz/",
      alt: "Dynamic Dreamz — Upwork Top Rated Plus",
      width: 126,
      height: 54,
    },
  ],
  videoSrc: "/assets/home/why-dynamic-dreamz.mp4",
};

export const seoServicesWhyChoose: ThemeCustomizationServicesContent = {
  eyebrow: "The SEO Advantage",
  heading: "Why Choose SEO Service",
  description:
    "Our SEO work focuses on improving organic visibility, technical health, content relevance and qualified search traffic. Paid-media efficiency may improve over time, but results vary by market, competition, website quality and implementation.",
  boxes: [
    {
      icon: "01",
      title: "Your website is not visible online.",
    },
    {
      icon: "02",
      title: "You have spent lots of money on ads, but still get nothing.",
    },
    {
      icon: "03",
      title: "Your website traffic suddenly decreases, and you have no idea why",
    },
    {
      icon: "04",
      title: "The number of leads and inquiry calls has declined.",
    },
    {
      icon: "05",
      title: "You have a new website and want to grow your business fast.",
    },
  ],
};

export const seoServicesWhatWeProvide: AgencyServicesContent = {
  eyebrow: "SEO Services",
  heading: "Our SEO Services",
  description: [
    "We don't just offer SEO—we live it. Our SEO company helps you build an SEO strategy that works perfectly for your online business goals. Regardless of the type of business you operate — whether a small local shop or a large eCommerce brand —we deliver customized SEO services that provide long-lasting results.",
  ],
  items: [
    {
      title: "Keyword Research & Strategy",
      description:
        "We utilize advanced SEO keyword research to determine what your customers are searching for. Then we develop a strategy that helps your website target relevant searches more effectively.",
      icon: "/assets/seo-services/services/keyword-research-and-strategy.svg",
      iconAlt: "Keyword Research & Strategy",
      href: "",
    },
    {
      title: "Link Building",
      description:
        "We help your website establish authority with high-quality backlinks from trusted websites, naturally improving your SEO ranking.",
      icon: "/assets/seo-services/services/link-building.svg",
      iconAlt: "Link Building",
      href: "",
    },
    {
      title: "Technical SEO",
      description:
        "From website speed to mobile responsiveness, our technical SEO services resolve bugs and issues that stop your website from ranking higher.",
      icon: "/assets/seo-services/services/technical-seo.svg",
      iconAlt: "Technical SEO",
      href: "",
    },
    {
      title: "Local SEO",
      description:
        'Our primary goal is to make you appear in “near me” searches. Local SEO is ideal for service providers, physical stores, and local businesses.',
      icon: "/assets/seo-services/services/local-seo.svg",
      iconAlt: "Local SEO",
      href: "",
    },
    {
      title: "On-Page SEO",
      description:
        "We optimize your website’s page titles, content, meta tags, headings, and images to enhance its search engine friendliness.",
      icon: "/assets/seo-services/services/on-page-seo.svg",
      iconAlt: "On-Page SEO",
      href: "",
    },
    {
      title: "Off-Page SEO",
      description:
        "We help you build your website’s reputation off-site through strategic techniques, including link outreach and online mentions.",
      icon: "/assets/seo-services/services/off-page-seo.svg",
      iconAlt: "Off-Page SEO",
      href: "",
    },
    {
      title: "Franchise SEO",
      description:
        "Are you managing multiple locations? We develop SEO strategies for each franchise to help you succeed across cities.",
      icon: "/assets/seo-services/services/franchise-seo.svg",
      iconAlt: "Franchise SEO",
      href: "",
    },
    {
      title: "Shopify SEO",
      description:
        "We have Shopify SEO specialists. From product pages to collections, we ensure your store ranks well in search results.",
      icon: "/assets/seo-services/services/shopify-seo.svg",
      iconAlt: "Shopify SEO",
      href: "",
    },
    {
      title: "Amazon SEO",
      description:
        "Selling on Amazon? We help your listings appear higher in Amazon search results and drive more sales.",
      icon: "/assets/seo-services/services/amazon-seo.svg",
      iconAlt: "Amazon SEO",
      href: "",
    },
    {
      title: "eCommerce SEO",
      description:
        "Our eCommerce SEO strategy enhances your online store’s visibility and traffic by targeting high-converting keywords that drive sales and increase revenue.",
      icon: "/assets/seo-services/services/ecommerce-seo.svg",
      iconAlt: "eCommerce SEO",
      href: "",
    },
    {
      title: "Content Writing",
      description:
        "We write SEO-optimized blogs & articles, product pages, and service pages that not only rank but also engage readers.",
      icon: "/assets/seo-services/services/content-writing.svg",
      iconAlt: "Content Writing",
      href: "",
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      description:
        "We don’t just drive traffic—we help you convert your visitors into customers by optimizing the user experience and website structure.",
      icon: "/assets/seo-services/services/cro.svg",
      iconAlt: "Conversion Rate Optimization (CRO)",
      href: "",
    },
  ],
};

export const seoServicesOutcomesContent = {
  eyebrow: "SEO Process",
  heading: "SEO Services Designed to Deliver Outcomes",
  description:
    "Our SEO optimization process is designed for real growth. Each step is conducted by an SEO expert or specialist who understands how to optimize your website for search engines.",
  items: [
    {
      number: "01",
      title: "Site Audit",
      description:
        "To determine what's working and what's holding back your website, we begin with a comprehensive SEO analysis.",
    },
    {
      number: "02",
      title: "Competition Analysis",
      description:
        "We analyze your competitors to discover what they're doing right—and how we might improve.",
    },
    {
      number: "03",
      title: "Keyword Research",
      description:
        "Our SEO experts identify high-traffic keywords that your target audience is already searching for.",
    },
    {
      number: "04",
      title: "Keyword Gap Analysis",
      description:
        "We compare your website with your competitors to identify keyword opportunities you may be missing.",
    },
    {
      number: "05",
      title: "On-Page Optimization",
      description:
        "We update each page of your website, ensuring it's optimized for Google—from titles to images and internal links.",
    },
    {
      number: "06",
      title: "Off-Page Optimization",
      description:
        "We establish authority through backlinks and brand mentions that enhance your credibility in Google's eyes.",
    },
    {
      number: "07",
      title: "Tracking and Reporting",
      description:
        "You'll be aware of every step and always know what's going on. We provide simple, clear reports showing improvement, rankings, and ROI.",
    },
  ] as const satisfies readonly NumberedGridItem[],
};

export const seoServicesTools: readonly WhiteLabelTool[] = [
  { name: "Google Analytics", image: "/assets/seo-services/tools/google-analytics.svg" },
  { name: "Google Search Console", image: "/assets/seo-services/tools/google-search-console.svg" },
  { name: "Ahrefs", image: "/assets/seo-services/tools/ahrefs.svg" },
  { name: "SEMrush", image: "/assets/seo-services/tools/semrush.svg" },
  { name: "Moz", image: "/assets/seo-services/tools/moz.svg" },
  { name: "Screaming Frog", image: "/assets/seo-services/tools/screaming-frog.png" },
  { name: "Ubersuggest", image: "/assets/seo-services/tools/ubersuggest.png" },
  { name: "Surfer SEO", image: "/assets/seo-services/tools/surfer-seo.png" },
  { name: "Yoast SEO", image: "/assets/seo-services/tools/yoast-seo.svg" },
  { name: "GTmetrix", image: "/assets/seo-services/tools/gtmetrix.svg" },
  { name: "PageSpeed Insights", image: "/assets/seo-services/tools/pagespeed-insights.svg" },
];

export const seoServicesWhyChooseUs: ThemeCustomizationServicesContent = {
  eyebrow: "Beyond Rankings",
  heading: "Why Choose Us",
  description:
    "Choosing the right SEO company can be the difference between growth and standing still. Here’s why we’re the best SEO agency for your business:",
  boxes: [
    {
      title: "Experience Matters",
      description: "Our professional SEO services helped hundreds of businesses grow with ease.",
      icon: "/assets/seo-services/why-choose/experience-matters.svg",
      iconAlt: "experience-matters",
    },
    {
      title: "Dedicated SEO Professionals",
      description:
        "You get a team of SEO experts who genuinely care about your success and are easy to communicate with.",
      icon: "/assets/seo-services/why-choose/dedicated-seo-professionals.svg",
      iconAlt: "dedicated-seo-professionals",
    },
    {
      title: "Relationships & Results",
      description:
        "We build long-term collaborations and consistently focus on outcomes, not just reporting.",
      icon: "/assets/seo-services/why-choose/relationship-and-results.svg",
      iconAlt: "relationship-and-results",
    },
    {
      title: "We Are Consistently Getting Better",
      description:
        "SEO changes quickly. We stay ahead by continually learning and adapting our SEO strategies.",
      icon: "/assets/seo-services/why-choose/getting-better.svg",
      iconAlt: "getting-better",
    },
    {
      title: "We Play Fair",
      description:
        "No black-hat tricks. We utilize honest, Google-approved SEO strategies that provide long-term outcomes.",
      icon: "/assets/seo-services/why-choose/we-play-fair.svg",
      iconAlt: "we-play-fair",
    },
    {
      title: "Transparent Reporting",
      description: "You’ll always stay informed. We explain every number in clear, simple terms.",
      icon: "/assets/seo-services/why-choose/transparent-reporting.svg",
      iconAlt: "transparent-reporting",
    },
  ],
};

export const seoServicesFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What is SEO?",
    answer:
      "SEO (Search Engine Optimization) is the process of optimizing your website to increase traffic from search engines, such as Google, without incurring ad costs.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "Most businesses start to see effects within **3 to 6 months**. It depends on competition, keywords, and your current website status.",
  },
  {
    question: "Is SEO better than paid ads?",
    answer:
      "**SEO creates long-term value**. Unlike ads, you don’t have to keep paying dollars to stay visible once you rank well.",
  },
  {
    question: "What is an SEO audit?",
    answer:
      "An SEO audit examines your website for issues such as **slow loading speed, broken links, missing tags**, and other factors that affect your ranking.",
  },
  {
    question: "How do I choose the best SEO company?",
    answer:
      "Look for an SEO agency with **experience, providing transparent reporting, clear communication, and proven results**.",
  },
  {
    question: "Do you guarantee first-page ranking?",
    answer:
      "**Any trustworthy SEO agency does not guarantee rankings**. However, we follow best practices that maximize your chances of ranking higher in the SERP (Search Engine Results Page).",
  },
  {
    question: "What's the cost of SEO services?",
    answer:
      "It depends on your business size and goals. We offer custom packages that fit every budget. To obtain an **accurate estimate of the cost**, please contact us with your detailed requirements.",
  },
  {
    question: "Will I get reports?",
    answer:
      "Yes. Our monthly SEO reports are **clear and easy to understand**, even for those without technical expertise.",
  },
];
