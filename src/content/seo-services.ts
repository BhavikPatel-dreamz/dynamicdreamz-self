import type { AgencyServicesContent } from "@/components/sections/agency-services-section";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { ProofSectionContent } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import type { ServiceHeroContent } from "@/components/sections/service-hero-section";
import type { ShopifyThemeTechSectionProps } from "@/components/sections/shopify-theme-customization/shopify-theme-tech-section";
import type { ThemeWhyChooseSectionProps } from "@/components/sections/theme-customization/theme-why-choose-section";
import type { IndustriesServedContent } from "@/components/sections/shopify-plus-agency/industries-served-section";
import type { PillListContent } from "@/components/sections/pill-list-section";
import type { LetsBuildContent } from "@/components/sections/lets-build-section";

export const seoServicesSectionCopy = {
  faqHeading: "FAQs",
} as const;

export const seoServicesHeroContent: ServiceHeroContent = {
  title: "Reduce Ad Spend by 70% With Organic Marketing",
  description:
    "Our SEO services help businesses grow organically by enhancing visibility across search engines like Google. We offer strategic SEO optimization, which involves link building, technical improvements, content upgrades, and keyword research. We focus on increasing search rankings, attracting high-quality traffic, and driving long-term growth. Whether you are a service provider, local business, or eCommerce brand, our expert SEO services are designed to deliver measurable results.",
  secondaryDescription:
    "<em><strong>SEO can be a game-changing move if you do it in the right way. It can help you save a significant amount of money that you spend on ads.</strong></em>",
  maxWidthClassName: "max-w-[880px]",
  reviews: [
    {
      platform: "Clutch",
      reviewCount: "132 Reviews",
      rating: "5.0",
      logoSrc: "/assets/reviews/clutch-wordmark.svg",
      logoAlt: "Clutch Review Dynamic Dreamz",
      logoWidth: 69,
      logoHeight: 19,
      href: "https://clutch.co/profile/dynamic-dreamz",
    },
    {
      platform: "Upwork",
      reviewCount: "2000+ Reviews",
      rating: "5.0",
      logoSrc: "/assets/reviews/upwork-wordmark.svg",
      logoAlt: "Upwork Review Dynamic Dreamz",
      logoWidth: 78,
      logoHeight: 23,
      href: "https://www.upwork.com/agencies/dynamicdreamz/",
    },
    {
      platform: "GoodFirms",
      reviewCount: "72 Reviews",
      rating: "5.0",
      logoSrc: "/assets/reviews/goodfirms-wordmark.svg",
      logoAlt: "Goodfirms Review Dynamic Dreamz",
      logoWidth: 105,
      logoHeight: 16,
      href: "https://www.goodfirms.co/company/dynamic-dreamz",
    },
  ],
};

export const seoServicesWhyChoose: PillListContent = {
  heading: "Why Choose SEO Service",
  items: [
    "Your website is not visible online.",
    "You have spent lots of money on ads, but still get nothing.",
    "Your website traffic suddenly decreases, and you have no idea why.",
    "The number of leads and inquiry calls has declined.",
    "You have a new website and want to grow your business fast.",
  ],
  description:
    "At our SEO agency, we employ proven SEO strategies to enhance your SEO ranking, boost traffic, and reduce ad spend—<strong>sometimes by as much as 70%</strong>. You know what it means: <strong>more leads, more sales, and more profit</strong>, without the continuous need to boost posts or run expensive campaigns. Our SEO experts know how to utilize all the latest SEO techniques.",
};

export const seoServicesWhatWeProvide: AgencyServicesContent = {
  heading: "Our SEO Services",
  description:
    "<b>We don't just offer SEO—we live it. </b> Our SEO company helps you build an SEO strategy that works perfectly for <br/> your online business goals. Regardless of the type of business you operate — whether a small local shop or a large <br/> eCommerce brand —we deliver customized SEO services that provide long-lasting results.",
  items: [
    {
      title: "Keyword Research & Strategy",
      description:
        "We utilize advanced SEO keyword research to determine what your customers are searching for. Then we develop a strategy that helps your website show up first.",
      icon: "/assets/etsy-to-shopify-migration/seo-redirects.svg",
      iconAlt: "seo-redirects-img",
      href: "",
    },
    {
      title: "Link Building",
      description:
        "We help your website establish authority with high-quality backlinks from trusted websites, naturally improving your SEO ranking.",
      icon: "/assets/seo-services/services/seo-optimized-websites.svg",
      iconAlt: "SEO-Optimized Websites Icon",
      href: "",
    },
    {
      title: "Technical SEO",
      description:
        "From website speed to mobile responsiveness, our technical SEO services resolve bugs and issues that stop your website from ranking higher.",
      icon: "/assets/seo-services/services/technical-seo.svg",
      iconAlt: "app-maintenance-icon",
      href: "",
    },
    {
      title: "Local SEO",
      description:
        'Our primary goal is to make you appear in "near me" searches. Local SEO is ideal for service providers, physical stores, and local businesses.',
      icon: "/assets/seo-services/services/local-seo.svg",
      iconAlt: "Local_seo",
      href: "",
    },
    {
      title: "On-Page SEO",
      description:
        "We optimize your website's page titles, content, meta tags, headings, and images to enhance its search engine friendliness.",
      icon: "/assets/seo-services/services/on-page-seo.svg",
      iconAlt: "onpageseo",
      href: "",
    },
    {
      title: "Off-Page SEO",
      description:
        "We help you build your website's reputation off-site through strategic techniques, including link outreach and online mentions.",
      icon: "/assets/seo-services/services/off-page-seo.svg",
      iconAlt: "Off-Page SEO Icon",
      href: "",
    },
    {
      title: "Franchise SEO",
      description:
        "Are you managing multiple locations? We develop SEO strategies for each franchise to help you succeed across cities.",
      icon: "/assets/seo-services/services/franchise-seo.svg",
      iconAlt: "franchiseseo",
      href: "",
    },
    {
      title: "Shopify SEO",
      description:
        "We have Shopify SEO specialists. From product pages to collections, we ensure your store ranks well in search results.",
      icon: "/assets/seo-services/services/shopify-seo.svg",
      iconAlt: "shophifyseo",
      href: "",
    },
    {
      title: "Amazon SEO",
      description:
        "Selling on Amazon? We help your listings appear higher in Amazon search results and drive more sales.",
      icon: "/assets/seo-services/services/amazon-seo.svg",
      iconAlt: "amazonseo",
      href: "",
    },
    {
      title: "eCommerce SEO",
      description:
        "Our eCommerce SEO strategy enhances your online store's visibility and traffic by targeting high-converting keywords that drive sales and increase revenue.",
      icon: "/assets/seo-services/services/ecommerce-seo.svg",
      iconAlt: "ecommerce seo",
      href: "",
    },
    {
      title: "Content Writing",
      description:
        "We write SEO-optimized blogs & articles, product pages, and service pages that not only rank but also engage readers.",
      icon: "/assets/seo-services/services/content-writing.svg",
      iconAlt: "content writing",
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

export const seoServicesOutcomesContent: ProofSectionContent = {
  heading: "SEO Services Designed to Deliver Outcomes",
  description:
    "Our SEO optimization <strong>process is designed for real growth</strong>. Each step is conducted by an <br/><strong>SEO expert or specialist</strong> who understands how to optimize your website for search engines.",
  items: [
    {
      title: "Site Audit",
      description:
        "To determine what's working and what's holding back your website, we begin with a comprehensive SEO analysis.",
      icon: "/assets/seo-services/outcomes/site-audit.jpg",
      iconAlt: "site-audit",
    },
    {
      title: "Competition Analysis",
      description:
        "We analyze your competitors to discover what they're doing right—and how we might improve.",
      icon: "/assets/seo-services/outcomes/keyword-research.svg",
      iconAlt: "keyword-research",
    },
    {
      title: "Keyword Research",
      description:
        "Our SEO experts identify high-traffic keywords that your target audience is already searching for.",
      icon: "/assets/seo-services/outcomes/keyword-gap-analysis.svg",
      iconAlt: "keyword-gap-analysis",
    },
    {
      title: "Keyword Gap Analysis",
      description:
        "We compare your website with your competitors to identify keyword opportunities you may be missing.",
      icon: "/assets/seo-services/outcomes/on-page-optimization.svg",
      iconAlt: "on-page-optimization",
    },
    {
      title: "On-Page Optimization",
      description:
        "We update each page of your website, ensuring it's optimized for Google—from titles to images and internal links.",
      icon: "/assets/seo-services/outcomes/off-page-optimization.svg",
      iconAlt: "off-page-optimization",
    },
    {
      title: "Off-Page Optimization",
      description:
        "We establish authority through backlinks and brand mentions that enhance your credibility in Google's eyes.",
      icon: "/assets/seo-services/outcomes/tracking-and-reporting.svg",
      iconAlt: "tracking-and-reporting",
    },
    {
      title: "Tracking and Reporting",
      description:
        "You'll be aware of every step and always know what's going on. We provide simple, clear reports showing improvement, rankings, and ROI.",
      icon: "/assets/seo-services/outcomes/site-audit.jpg",
      iconAlt: "site-audit",
    },
  ],
};

export const seoServicesToolsContent: ShopifyThemeTechSectionProps["content"] = {
  title: "Tools We Use",
  subtitle: "We don't just rely on guesswork. SEO optimization tools we use:",
  bottomDescription:
    "These tools help us research, improve, and monitor your website's performance with accuracy.",
  items: [
    {
      title: "Google Analytics",
      icon: "/assets/seo-services/tools/google-analytics.svg",
      alt: "Google Analytics Logo",
      gradient:
        "linear-gradient(180deg, rgba(146, 0, 59, 0.06) 0%, rgba(255, 255, 255, 0) 100%)",
    },
    {
      title: "Google Search Console",
      icon: "/assets/seo-services/tools/google-search-console.svg",
      alt: "Google Search Console Logo",
      gradient:
        "linear-gradient(180deg, rgba(228, 77, 38, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
    },
    {
      title: "Ahrefs",
      icon: "/assets/seo-services/tools/ahrefs.svg",
      alt: "Ahrefs Logo",
      gradient:
        "linear-gradient(180deg, rgba(41, 101, 241, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
    },
    {
      title: "SEMrush",
      icon: "/assets/seo-services/tools/semrush.svg",
      alt: "SEMrush Logo",
      gradient:
        "linear-gradient(180deg, rgba(240, 190, 37, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
    },
    {
      title: "Moz",
      icon: "/assets/seo-services/tools/moz.svg",
      alt: "Moz Logo",
      gradient:
        "linear-gradient(180deg, rgb(4 100 145 / 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
    },
    {
      title: "Screaming Frog",
      icon: "/assets/seo-services/tools/screaming-frog.png",
      alt: "Screaming Frog Logo",
      gradient:
        "linear-gradient(180deg, rgba(8, 104, 172, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
    },
    {
      title: "Ubersuggest",
      icon: "/assets/seo-services/tools/ubersuggest.png",
      alt: "Ubersuggest Logo",
      gradient:
        "linear-gradient(180deg, rgba(86, 61, 124, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
    },
    {
      title: "Surfer SEO",
      icon: "/assets/seo-services/tools/surfer-seo.png",
      alt: "Surfer SEO Logo",
      gradient:
        "linear-gradient(180deg, rgba(0, 0, 0, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
    },
    {
      title: "Yoast SEO",
      icon: "/assets/seo-services/tools/yoast-seo.svg",
      alt: "Yoast SEO Logo",
      gradient:
        "linear-gradient(180deg, rgba(155, 92, 143, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
    },
    {
      title: "GTmetrix",
      icon: "/assets/seo-services/tools/gtmetrix.svg",
      alt: "GTmetrix Logo",
      gradient:
        "linear-gradient(180deg, rgba(146, 0, 59, 0.06) 0%, rgba(255, 255, 255, 0) 100%)",
    },
    {
      title: "PageSpeed Insights",
      icon: "/assets/seo-services/tools/pagespeed-insights.svg",
      alt: "PageSpeed Insights Logo",
      gradient:
        "linear-gradient(180deg, rgba(75, 131, 238, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
    },
  ],
};

export const seoServicesWhyChooseUs: ThemeWhyChooseSectionProps["content"] = {
  title: "Why Choose Us",
  subtitle:
    "Choosing the right SEO company can be the difference between growth and standing still.<br>Here’s why we’re the best SEO agency for your business:",
  items: [
    {
      title: "Experience Matters",
      description:
        "Our professional SEO services helped hundreds of businesses grow with ease.",
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
      icon: "/assets/seo-services/why-choose/getting-better.png",
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
      description:
        "You’ll always stay informed. We explain every number in clear, simple terms.",
      icon: "/assets/seo-services/why-choose/transparent-reporting.svg",
      iconAlt: "transparent-reporting",
    },
  ],
};

export const seoServicesIndustries: IndustriesServedContent = {
  heading: "Industries We Serve",
  description: "Our SEO services are trusted across a wide range of industries:",
  bottomDescription:
    "Whether you're selling a product, providing a service, or running a local shop, our SEO strategies can be tailored to your target audience.",
  items: [
    {
      image: "/assets/shopify-plus-agency/industries/beauty-cosmetics.webp",
      imageAlt: "Beauty & Cosmetics Slide Image",
      title: "Beauty & Cosmetics",
      description:
        "We help cosmetic and beauty brands attract potential customers with SEO strategies that boost organic rankings and direct customer queries to product pages.",
    },
    {
      image: "/assets/shopify-plus-agency/industries/fashion-apparel.webp",
      imageAlt: "Fashion & Apparel Slide Image",
      title: "Fashion & Apparel",
      description:
        "Fashion is a dynamic, cutthroat industry. We help your fashion & apparel store stand out by enhancing product and category pages to turn searchers into consumers.",
    },
    {
      image: "/assets/shopify-plus-agency/industries/health-nutrition.webp",
      imageAlt: "Health & Nutrition Slide Image",
      title: "Health & Nutrition",
      description:
        "Building trust is crucial in the health and nutrition industry. We help wellness businesses rank for informational queries and build credibility with clients.",
    },
    {
      image: "/assets/shopify-plus-agency/industries/food-beverages.webp",
      imageAlt: "Food & Beverages Slide Image",
      title: "Food & Beverages",
      description:
        "Whether you operate a local restaurant or an online food shop, we help you connect with hungry customers who are looking for local eating places and food items.",
    },
    {
      image: "/assets/shopify-plus-agency/industries/pet-industry.webp",
      imageAlt: "Pet Industry Slide Image",
      title: "Pet Industry",
      description:
        "The pet market is developing rapidly. We optimize your store so pet owners searching for supplies, food, and grooming can easily find your business.",
    },
    {
      image: "/assets/seo-services/industries/ecommerce-online-stores.png",
      imageAlt: "eCommerce & Online Stores Slide Image",
      title: "eCommerce & Online Stores",
      description:
        "Our specialized eCommerce SEO services ensure that your products rank for high-intent search terms, driving more conversions and sales without paid ads.",
    },
    {
      image: "/assets/seo-services/industries/real-estate.png",
      imageAlt: "Real Estate Slide Image",
      title: "Real Estate",
      description:
        "Our SEO methods help real estate agents connect with local property seekers and sellers by boosting exposure for city and neighborhood-level searches.",
    },
    {
      image: "/assets/seo-services/industries/education-online-courses.png",
      imageAlt: "Education & Online Courses Slide Image",
      title: "Education & Online Courses",
      description:
        "We assist colleges, training facilities, and e-learning platforms in ranking for educational queries that bring students directly to their courses.",
    },
    {
      image: "/assets/seo-services/industries/travel-hospitality.png",
      imageAlt: "Travel & Hospitality Slide Image",
      title: "Travel & Hospitality",
      description:
        "From local hotels to global tour operators, our SEO services help travel and hospitality companies capture travel bookings during key holiday seasons.",
    },
    {
      image: "/assets/seo-services/industries/finance-insurance.png",
      imageAlt: "Finance & Insurance Slide Image",
      title: "Finance & Insurance",
      description:
        "With effective SEO methods, we help insurance and financial businesses build trust with their clients. By targeting high-intent keywords, we attract customers looking for financial guidance and security.",
    },
    {
      image: "/assets/seo-services/industries/legal-services.png",
      imageAlt: "Legal Services Slide Image",
      title: "Legal Services",
      description:
        "Online competition among law firms is exceptionally high. We create SEO strategies that help lawyers rank for particular practice areas and engage potential customers.",
    },
    {
      image: "/assets/seo-services/industries/local-businesses.png",
      imageAlt: "Local Businesses Slide Image",
      title: "Local Businesses",
      description:
        'For small businesses, local SEO is very crucial. To increase consumer traffic and regional leads, we help stores, salons, and service providers appear in "near me" searches.',
    },
    {
      image: "/assets/seo-services/industries/it-tech-startups.png",
      imageAlt: "IT & Tech Startups Slide Image",
      title: "IT & Tech Startups",
      description:
        "Online visibility is crucial for startups. We develop SEO strategies that help tech companies reach their ideal clients, attract investors, and scale faster.",
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
      "Most businesses start to see effects within <strong>3 to 6 months</strong>. It depends on competition, keywords, and your current website status.",
  },
  {
    question: "Is SEO better than paid ads?",
    answer:
      "<strong>SEO creates long-term value</strong>. Unlike ads, you don’t have to keep paying dollars to stay visible once you rank well.",
  },
  {
    question: "What is an SEO audit?",
    answer:
      "An SEO audit examines your website for issues such as <strong>slow loading speed, broken links, missing tags</strong>, and other factors that affect your ranking.",
  },
  {
    question: "How do I choose the best SEO company?",
    answer:
      "Look for an SEO agency with <strong>experience, providing transparent reporting, clear communication, and proven results</strong>.",
  },
  {
    question: "Do you guarantee first-page ranking?",
    answer:
      "<strong>Any trustworthy SEO agency does not guarantee rankings</strong>. However, we follow best practices that maximize your chances of ranking higher in the SERP (Search Engine Results Page).",
  },
  {
    question: "What's the cost of SEO services?",
    answer:
      "It depends on your business size and goals. We offer custom packages that fit every budget. To obtain an <strong>accurate estimate of the cost</strong>, please contact us with your detailed requirements.",
  },
  {
    question: "Will I get reports?",
    answer:
      "Yes. Our monthly SEO reports are <strong>clear and easy to understand</strong>, even for those without technical expertise.",
  },
];

export const seoServicesLetsBuild: LetsBuildContent = {
  heading: "Ready to Grow Without Paying for Ads Forever?",
  description:
    "Let’s grow your business together. Stop wasting money on ads and start investing in organic traffic that brings real, long-term results. Our SEO experts are here to help you rank higher, reach more people, and convert visitors into loyal customers.",
  ctaLabel: "Book a Free SEO Audit Today!",
  ctaHref: "/request-quote",
};
