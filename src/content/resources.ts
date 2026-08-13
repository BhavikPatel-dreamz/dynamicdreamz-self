import { getClientLogo, type ImageItem } from "@/content/home";

export type ResourceLink = {
  href: string;
  title: string;
};

export type ResourceCategory = {
  title: string;
  links: readonly ResourceLink[];
};

export type ResourceArticle = {
  href: string;
  image: string;
  width: number;
  height: number;
  categoryHref: string;
  category: string;
  displayDate: string;
  date: string;
  title: string;
};

export const resourcesHero = {
  title: "Everything You Need to Know About Shopify, eCommerce, and Digital Growth!",
  description: [
    "Have you ever wondered what really makes only some Shopify stores scale like never before, and that too effortlessly,",
    "while others keep facing struggles just to have some conversions? Or you're just curious about the web design,",
    "some smart integrations, or simply the speed, which literally can completely transform an online business?",
    "If yes, then you're in the right place.",
  ],
} as const;

export const resourcesHub = {
  title: "Shopify Resource Hub",
  points: [
    "This resource hub of ours is built for all the Shopify merchants/shopify experts, all the digital enthusiasts, and even the eCommerce founders, who want to understand all the Hows and Whys behind successful online stores. Here, you're gonna find all the Shopify migration guides to Shopify Plus Agency, numerous store performance tips that are required for design inspiration, latest marketing insights, and numerous growth strategies in one single place!",
    "So, get your hands on the resourceful content to stay ahead of trends, access proven tactics, & learn directly from our Shopify Platinum Partner team that has already powered 1,000+ stores & helped brands generate over $1 billion in sales.",
    "So, click and join the detailed list for exclusive insights on Shopify Mobile App Development and more, expert tips, and actionable resources of DynamicDreamz, because it's basically designed to help your Shopify store grow smarter, faster & stronger.",
  ],
  categories: [
  {
    "title": "Shopify",
    "links": [
      {
        "href": "/how-to-stay-competitive-in-white-label-services",
        "title": "How to Use White Label Agency Services to Stay Competitive"
      },
      {
        "href": "/scaling-your-agency-with-white-label-solutions",
        "title": "Scaling Your Agency with White Label Solutions: Myths vs. Reality"
      },
      {
        "href": "/benefits-of-white-label-web-design-services",
        "title": "White Label Web Design Advantages: Tailored Solutions for Customers"
      },
      {
        "href": "/building-a-profitable-white-label-agency-steps-for-success",
        "title": "Building a Profitable White Label Agency: Steps for Success"
      },
      {
        "href": "/how-to-choose-the-right-white-label-partner",
        "title": "How to Choose the Right White Label Partner for Your Digital Marketing Agency"
      },
      {
        "href": "/measuring-effectiveness-of-white-label-services",
        "title": "Important Steps for Evaluating White Label Services’ Performance"
      },
      {
        "href": "/how-white-label-services-reduce-overhead-increase-revenue",
        "title": "How White Label Services Reduce Overhead & Increase Revenue for Agencies"
      },
      {
        "href": "/benefits-of-white-labeling-agency",
        "title": "The Benefits of White Labeling: How Agencies Can Scale Faster"
      },
      {
        "href": "/what-is-a-white-label-agency",
        "title": "What Is a White Label Agency & How Can It Help You Grow Your Business?"
      }
    ]
  },
  {
    "title": "WordPress",
    "links": [
      {
        "href": "/signs-to-start-using-white-label-services",
        "title": "5 Signs It’s Time to Start Using White Label Services in Your Business"
      },
      {
        "href": "/wordpress-feature-development-for-culinary-shows-websites",
        "title": "WordPress Feature Development for Culinary Shows Websites"
      },
      {
        "href": "/top-5-flexible-wordpress-page-builders-for-2024",
        "title": "Top 5 Flexible WordPress Page Builders For 2024"
      },
      {
        "href": "/wordpress-web-design-company-building-a-website-that-converts",
        "title": "WordPress Web Design Company: Building A Website That Converts"
      }
    ]
  },
  {
    "title": "Magento",
    "links": []
  },
  {
    "title": "e-Commerce",
    "links": [
      {
        "href": "/b2b-ecommerce-features-for-successful-business",
        "title": "The Ultimate B2B eCommerce Features for Successful Business"
      },
      {
        "href": "/responsive-design-for-ecommerce",
        "title": "Why Responsive Design is Important for eCommerce"
      },
      {
        "href": "/proven-ways-to-speed-up-your-ecommerce-site",
        "title": "10 Proven Ways to Speed Up Your eCommerce Site and Boost Sales"
      },
      {
        "href": "/ecommerce-call-to-action-examples",
        "title": "10 eCommerce Call to Action Examples to Boost Your Sales"
      }
    ]
  }
] as const satisfies readonly ResourceCategory[],
} as const;

export const resourceArticles = [
  {
    "href": "/blogs/shopify-vs-woocommerce",
    "image": "/assets/blog/shopify-vs-woocommerce.webp",
    "width": 1504,
    "height": 1137,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "August 3, 2026",
    "date": "2026-08-03",
    "title": "Shopify vs WooCommerce India: Which Is Better for Your Online Store?"
  },
  {
    "href": "/blogs/shopify-core-web-vitals",
    "image": "/assets/blog/shopify-core-web-vitals.webp",
    "width": 1504,
    "height": 1137,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "August 3, 2026",
    "date": "2026-08-03",
    "title": "How to Improve Shopify Core Web Vitals and Speed Up Your Store?"
  },
  {
    "href": "/blogs/ecommerce-website-design",
    "image": "/assets/blog/ecommerce-design-tips.webp",
    "width": 1504,
    "height": 1137,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "August 3, 2026",
    "date": "2026-08-03",
    "title": "7 Wonderful Ecommerce Website Design Tips for Your Shopify Store"
  },
  {
    "href": "/blogs/shopify-vs-woocommerce-vs-bigcommerce",
    "image": "/assets/blog/shopify-vs-woocommerce-vs-bigcommerce.webp",
    "width": 1024,
    "height": 774,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "July 15, 2026",
    "date": "2026-07-15",
    "title": "Shopify vs WooCommerce vs BigCommerce: Which One Is Better For LA Businesses?"
  },
  {
    "href": "/blogs/shopify-collective",
    "image": "/assets/blog/shopify-collective.webp",
    "width": 1024,
    "height": 774,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "July 15, 2026",
    "date": "2026-07-15",
    "title": "What is Shopify Collective? How Does It help Stores Expand Without Inventory Risk?"
  },
  {
    "href": "/blogs/shopify-plus-for-texas-brands",
    "image": "/assets/blog/shopify-plus-for-texas-brands.webp",
    "width": 1024,
    "height": 774,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "July 15, 2026",
    "date": "2026-07-15",
    "title": "Shopify Plus For Texas Brands: Shopify B2B Vs Plus In 2026"
  },
  {
    "href": "/blogs/los-angeles-brands",
    "image": "/assets/blog/los-angeles-brands.webp",
    "width": 1024,
    "height": 774,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "July 8, 2026",
    "date": "2026-07-08",
    "title": "How Big Los Angeles Brands Are Using Shopify Plus To Scale In 2026"
  },
  {
    "href": "/blogs/shopify-development-cost",
    "image": "/assets/blog/shopify-development-cost.webp",
    "width": 1024,
    "height": 774,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "July 8, 2026",
    "date": "2026-07-08",
    "title": "Shopify Development Cost in Los Angeles: Complete Price Breakdown"
  },
  {
    "href": "/blogs/how-to-do-ab-testing",
    "image": "/assets/blog/how-to-do-ab-testing.webp",
    "width": 1024,
    "height": 774,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "June 1, 2026",
    "date": "2026-06-01",
    "title": "How To Do A/B Testing On Shopify: Everything You Need To Know"
  },
  {
    "href": "/blogs/what-is-product-positioning",
    "image": "/assets/blog/what-is-product-positioning.webp",
    "width": 1024,
    "height": 774,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "May 22, 2026",
    "date": "2026-05-22",
    "title": "What Is Product Positioning for WooCommerce? (And How to Turn Commodity Products into Branded Offers)"
  },
  {
    "href": "/blogs/shopify-seo-tips",
    "image": "/assets/blog/shopify-seo-tips.webp",
    "width": 1024,
    "height": 774,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "May 22, 2026",
    "date": "2026-05-22",
    "title": "10 Wonderful Shopify SEO Tips to Rank Higher in 2026"
  },
  {
    "href": "/blogs/shopify-product-page",
    "image": "/assets/blog/shopify-product-page.webp",
    "width": 1024,
    "height": 774,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "May 12, 2026",
    "date": "2026-05-12",
    "title": "Why Shopify Product Page Isn’t Converting? Know These 5 Wonderful Fixes!"
  },
  {
    "href": "/blogs/ai-automation-for-shopify-stores",
    "image": "/assets/blog/ai-automation-for-shopify-stores.webp",
    "width": 1024,
    "height": 774,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "May 4, 2026",
    "date": "2026-05-04",
    "title": "How AI Automation Helps Shopify Stores Save Time? Sell More & Scale Faster"
  },
  {
    "href": "/blogs/shopify-seo-migration",
    "image": "/assets/blog/shopify-seo-migration.webp",
    "width": 1024,
    "height": 774,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "April 21, 2026",
    "date": "2026-04-21",
    "title": "Shopify SEO Migration: How to Move Your Store Without Losing Organic Traffic"
  },
  {
    "href": "/blogs/digital-transformation-trends",
    "image": "/assets/blog/digital-transformation-trends.webp",
    "width": 1024,
    "height": 774,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "April 14, 2026",
    "date": "2026-04-14",
    "title": "Digital Transformation Trends In Retail: What Brand Founders Need To Know"
  },
  {
    "href": "/blogs/digital-retail-ai-agents",
    "image": "/assets/blog/digital-retail-ai-agents.webp",
    "width": 1024,
    "height": 774,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "April 14, 2026",
    "date": "2026-04-14",
    "title": "Digital Retail AI Agents: How They Work and Why eCommerce Managers Should Care"
  },
  {
    "href": "/blogs/migrate-bigcommerce-to-shopify",
    "image": "/assets/blog/migrate-bigcommerce-to-shopify.webp",
    "width": 1024,
    "height": 774,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "April 14, 2026",
    "date": "2026-04-14",
    "title": "Bigcommerce To Shopify Migration: Everything You Need To Know Before You Switch"
  },
  {
    "href": "/blogs/shopify-plus-for-global-brands",
    "image": "/assets/blog/shopify-plus-for-global-brands.webp",
    "width": 1024,
    "height": 774,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "April 8, 2026",
    "date": "2026-04-08",
    "title": "Shopify Plus For Global Brands: Scale Smarter, Sell Everywhere"
  },
  {
    "href": "/blogs/how-to-migrate-to-shopify-plus",
    "image": "/assets/blog/how-to-migrate-to-shopify-plus.webp",
    "width": 1024,
    "height": 774,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "March 31, 2026",
    "date": "2026-03-31",
    "title": "How to Migrate to Shopify Plus: A Step-by-Step Guide"
  },
  {
    "href": "/blogs/shopify-agentic-commerce",
    "image": "/assets/blog/shopify-agentic-commerce.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "March 19, 2026",
    "date": "2026-03-19",
    "title": "What is Shopify Agentic Commerce? The Next Big Shift in Ecommerce"
  },
  {
    "href": "/blogs/complete-shopify-outsourcing-checklist-with-10-official-tips",
    "image": "/assets/blog/complete-shopify-outsourcing-checklist-with-10-official-tips.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "March 14, 2026",
    "date": "2026-03-14",
    "title": "Complete Shopify Outsourcing Checklist With 10 Official Tips"
  },
  {
    "href": "/blogs/transform-your-store-with-a-complete-magento-web-development-guide",
    "image": "/assets/blog/transform-your-store-with-a-complete-magento-web-development-guide.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "March 10, 2026",
    "date": "2026-03-10",
    "title": "Transform Your Store With A Complete Magento Web Development Guide"
  },
  {
    "href": "/blogs/what-are-the-risks-of-shopify-outsourcing-get-details-now",
    "image": "/assets/blog/what-are-the-risks-of-shopify-outsourcing-get-details-now.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "March 6, 2026",
    "date": "2026-03-06",
    "title": "What Are The Risks Of Shopify Outsourcing? Get Details Now!"
  },
  {
    "href": "/blogs/white-label-website-design-outsourcing-2",
    "image": "/assets/blog/white-label-website-design-outsourcing-2.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "March 1, 2026",
    "date": "2026-03-01",
    "title": "Why Agencies Prefer White Label Website Design Outsourcing For Growth!"
  },
  {
    "href": "/blogs/shopify-plus-headless-commerce",
    "image": "/assets/blog/shopify-plus-headless-commerce.webp",
    "width": 1024,
    "height": 774,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "February 25, 2026",
    "date": "2026-02-25",
    "title": "Shopify Plus Headless Commerce: The Growth Strategy Your Brand Can’t Ignore in 2026"
  },
  {
    "href": "/blogs/shopify-data-migration-challenges",
    "image": "/assets/blog/shopify-data-migration-challenges.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "February 18, 2026",
    "date": "2026-02-18",
    "title": "7 Most Common Shopify Data Migration Challenges For Business"
  },
  {
    "href": "/blogs/shopify-winter-edition-2026",
    "image": "/assets/blog/shopify-winter-edition-2026.webp",
    "width": 1024,
    "height": 774,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "February 5, 2026",
    "date": "2026-02-05",
    "title": "Shopify Winter Edition 2026: 11 Powerful Updates Scaling Brands Love"
  },
  {
    "href": "/blogs/shopify-limits",
    "image": "/assets/blog/shopify-limits.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "December 2, 2025",
    "date": "2025-12-02",
    "title": "Shopify Limits: The Complete Breakdown You Need In 2026"
  },
  {
    "href": "/blogs/shopify-plus-ecommerce-agency",
    "image": "/assets/blog/shopify-plus-ecommerce-agency.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "September 9, 2025",
    "date": "2025-09-09",
    "title": "Shopify Plus Ecommerce Agency: The Key to Scaling Your Online Brand"
  },
  {
    "href": "/blogs/why-shopify-plus-is-better-than-shopify",
    "image": "/assets/blog/why-shopify-plus-is-better-than-shopify.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "August 26, 2025",
    "date": "2025-08-26",
    "title": "Why Shopify Plus is Better Than Shopify"
  },
  {
    "href": "/blogs/top-payment-methods-for-shopify-store",
    "image": "/assets/blog/top-payment-methods-for-shopify-store.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "August 12, 2025",
    "date": "2025-08-12",
    "title": "Top 5 Shopify Payment Methods"
  },
  {
    "href": "/blogs/shopify-apps-for-email-marketing",
    "image": "/assets/blog/shopify-apps-for-email-marketing.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "August 5, 2025",
    "date": "2025-08-05",
    "title": "Top 5 Shopify Apps for Email Marketing"
  },
  {
    "href": "/blogs/shopify-themes-for-jewelry",
    "image": "/assets/blog/shopify-themes-for-jewelry.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "July 28, 2025",
    "date": "2025-07-28",
    "title": "Best 5 Shopify themes for jewelry"
  },
  {
    "href": "/blogs/how-to-stay-competitive-in-white-label-services",
    "image": "/assets/blog/how-to-stay-competitive-in-white-label-services.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "July 25, 2025",
    "date": "2025-07-25",
    "title": "How to Use White Label Agency Services to Stay Competitive"
  },
  {
    "href": "/blogs/scaling-your-agency-with-white-label-solutions",
    "image": "/assets/blog/scaling-your-agency-with-white-label-solutions.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "July 21, 2025",
    "date": "2025-07-21",
    "title": "Scaling Your Agency with White Label Solutions: Myths vs. Reality"
  },
  {
    "href": "/blogs/benefits-of-white-label-web-design-services",
    "image": "/assets/blog/benefits-of-white-label-web-design-services.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "July 14, 2025",
    "date": "2025-07-14",
    "title": "White Label Web Design Advantages: Tailored Solutions for Customers"
  },
  {
    "href": "/blogs/building-a-profitable-white-label-agency-steps-for-success",
    "image": "/assets/blog/building-a-profitable-white-label-agency-steps-for-success.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "July 10, 2025",
    "date": "2025-07-10",
    "title": "Building a Profitable White Label Agency: Steps for Success"
  },
  {
    "href": "/blogs/how-to-choose-the-right-white-label-partner",
    "image": "/assets/blog/how-to-choose-the-right-white-label-partner.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "June 5, 2025",
    "date": "2025-06-05",
    "title": "How to Choose the Right White Label Partner for Your Digital Marketing Agency"
  },
  {
    "href": "/blogs/measuring-effectiveness-of-white-label-services",
    "image": "/assets/blog/measuring-effectiveness-of-white-label-services.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "May 28, 2025",
    "date": "2025-05-28",
    "title": "Important Steps for Evaluating White Label Services’ Performance"
  },
  {
    "href": "/blogs/how-white-label-services-reduce-overhead-increase-revenue",
    "image": "/assets/blog/how-white-label-services-reduce-overhead-increase-revenue.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "May 28, 2025",
    "date": "2025-05-28",
    "title": "How White Label Services Reduce Overhead & Increase Revenue for Agencies"
  },
  {
    "href": "/blogs/benefits-of-white-labeling-agency",
    "image": "/assets/blog/benefits-of-white-labeling-agency.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "May 23, 2025",
    "date": "2025-05-23",
    "title": "The Benefits of White Labeling: How Agencies Can Scale Faster"
  },
  {
    "href": "/blogs/what-is-a-white-label-agency",
    "image": "/assets/blog/what-is-a-white-label-agency.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "May 23, 2025",
    "date": "2025-05-23",
    "title": "What Is a White Label Agency & How Can It Help You Grow Your Business?"
  },
  {
    "href": "/blogs/shopify-seo-apps",
    "image": "/assets/blog/shopify-seo-apps.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "May 5, 2025",
    "date": "2025-05-05",
    "title": "5 Game-Changing Shopify SEO Apps to Drive More Sales"
  },
  {
    "href": "/blogs/how-to-assign-and-manage-shopify-collaborator-access",
    "image": "/assets/blog/how-to-assign-and-manage-shopify-collaborator-access.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "March 17, 2025",
    "date": "2025-03-17",
    "title": "How to Assign and Manage Shopify Collaborator Access"
  },
  {
    "href": "/blogs/shopify-expert-costs",
    "image": "/assets/blog/shopify-expert-costs.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "February 5, 2025",
    "date": "2025-02-05",
    "title": "Shopify Expert Costs Explained: How Much Does It Cost?"
  },
  {
    "href": "/blogs/is-shopify-plus-worth-investing",
    "image": "/assets/blog/is-shopify-plus-worth-investing.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "January 10, 2025",
    "date": "2025-01-10",
    "title": "Is Shopify Plus Worth Investing? The Ultimate Guide to Making the Decision"
  },
  {
    "href": "/blogs/shopify-website-development-cost-breakdown-a-complete-guide",
    "image": "/assets/blog/shopify-website-development-cost-breakdown-a-complete-guide.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "January 3, 2025",
    "date": "2025-01-03",
    "title": "Shopify Website Development Cost Breakdown: A Complete Guide"
  },
  {
    "href": "/blogs/how-to-use-shopify-a-beginners-guide",
    "image": "/assets/blog/how-to-use-shopify-a-beginners-guide.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "December 23, 2024",
    "date": "2024-12-23",
    "title": "How to Use Shopify: A Beginner’s Guide to Starting a Shopify Store"
  },
  {
    "href": "/blogs/shopify-email-popups-alternatives",
    "image": "/assets/blog/shopify-email-popups-alternatives.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "December 6, 2024",
    "date": "2024-12-06",
    "title": "Say Goodbye to Traditional Shopify Email Popups: 3 Effective Alternatives"
  },
  {
    "href": "/blogs/shopify-summer-editions-2024",
    "image": "/assets/blog/shopify-summer-editions-2024.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "September 20, 2024",
    "date": "2024-09-20",
    "title": "Shopify Summer Editions 2024: Game Changing Features Every Store Owner Needs to Know"
  },
  {
    "href": "/blogs/shopify-launch-checklist",
    "image": "/assets/blog/shopify-launch-checklist.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "September 12, 2024",
    "date": "2024-09-12",
    "title": "Shopify Launch Checklist: Ultimate Guide for a Successful Store"
  },
  {
    "href": "/blogs/top-5-shopify-themes-for-the-fashion-and-beauty-industry-in-2024",
    "image": "/assets/blog/top-5-shopify-themes-for-the-fashion-and-beauty-industry-in-2024.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "August 29, 2024",
    "date": "2024-08-29",
    "title": "Top 5 Shopify Themes For The Fashion And Beauty Industry In 2024"
  },
  {
    "href": "/blogs/how-to-hire-shopify-development-agency",
    "image": "/assets/blog/how-to-hire-shopify-development-agency.webp",
    "width": 1024,
    "height": 774,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "June 20, 2024",
    "date": "2024-06-20",
    "title": "Ultimate guide to hiring Shopify Development Agency"
  },
  {
    "href": "/blogs/add-a-dmarc-record-to-sending-emails",
    "image": "/assets/blog/add-a-dmarc-record-to-sending-emails.webp",
    "width": 876,
    "height": 705,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "June 20, 2024",
    "date": "2024-06-20",
    "title": "Authenticate and add a DMARC record to continue sending emails from your domain"
  },
  {
    "href": "/blogs/types-of-shopify-experts-services",
    "image": "/assets/blog/types-of-shopify-experts-services.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "June 20, 2024",
    "date": "2024-06-20",
    "title": "Types of Shopify Experts Services: A Business Perspective"
  },
  {
    "href": "/blogs/guide-to-hiring-shopify-expert",
    "image": "/assets/blog/guide-to-hiring-shopify-expert.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "June 20, 2024",
    "date": "2024-06-20",
    "title": "Ultimate Guide To Hiring Shopify Expert"
  },
  {
    "href": "/blogs/product-bundling-in-shopify",
    "image": "/assets/blog/product-bundling-in-shopify.webp",
    "width": 1024,
    "height": 683,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "June 20, 2024",
    "date": "2024-06-20",
    "title": "Product bundling in Shopify"
  },
  {
    "href": "/blogs/shopify-experts-vs-diy-when-to-seek-professional-help-for-your-e-commerce-site",
    "image": "/assets/blog/shopify-experts-vs-diy-when-to-seek-professional-help-for-your-e-commerce-site.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "June 20, 2024",
    "date": "2024-06-20",
    "title": "Shopify Experts vs. DIY: When to Seek Professional Help for Your eCommerce Site"
  },
  {
    "href": "/blogs/shopify-vs-wordpress-choosing-the-right-platform-for-your-e-commerce-venture",
    "image": "/assets/blog/shopify-vs-wordpress-choosing-the-right-platform-for-your-e-commerce-venture.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "June 20, 2024",
    "date": "2024-06-20",
    "title": "Shopify vs. WordPress: Choosing the Right Platform for Your eCommerce Venture"
  },
  {
    "href": "/blogs/how-to-choose-the-right-shopify-app",
    "image": "/assets/blog/how-to-choose-the-right-shopify-app.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "June 17, 2024",
    "date": "2024-06-17",
    "title": "How to Choose the Right Shopify App: A Comprehensive Selection Guide"
  },
  {
    "href": "/blogs/key-benefits-of-choosing-shopify",
    "image": "/assets/blog/key-benefits-of-choosing-shopify.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "June 17, 2024",
    "date": "2024-06-17",
    "title": "10 Key Benefits of Choosing Shopify for Your eCommerce Store"
  },
  {
    "href": "/blogs/shopify-plus-in-action-success-stories-and-case-studies",
    "image": "/assets/blog/shopify-plus-in-action-success-stories-and-case-studies.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "June 17, 2024",
    "date": "2024-06-17",
    "title": "Shopify Plus in Action: Success Stories and Case Studies"
  },
  {
    "href": "/blogs/hire-shopify-expert-freelance-vs-agency",
    "image": "/assets/blog/hire-shopify-expert-freelance-vs-agency.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "June 17, 2024",
    "date": "2024-06-17",
    "title": "Your Expert Guide: Freelance vs. Agency for Shopify?"
  },
  {
    "href": "/blogs/the-journey-of-a-shopify-store-from-idea-to-success",
    "image": "/assets/blog/the-journey-of-a-shopify-store-from-idea-to-success.webp",
    "width": 1024,
    "height": 515,
    "categoryHref": "/blogs/category/shopify",
    "category": "Shopify",
    "displayDate": "June 17, 2024",
    "date": "2024-06-17",
    "title": "The Journey Of A Shopify Store: From Idea To Success"
  }
] as const satisfies readonly ResourceArticle[];

export const resourcesStory = {
  title: "Our Dynamic Story,",
  subtitle: "Your detailed guide for accessing Dynamic Dreamz's resources",
  videoId: "0GEJ928rBnM",
  videoTitle: "The Dynamic Dreamz story and Shopify resource guide",
  videoPosterAlt: "Dynamic Dreamz team collaborating in the Surat office",
  paragraphs: [
    "At Dynamic Dreamz, we take great pride in being a trusted Shopify Platinum Partner, and with that pride, we keep empowering hundreds and thousands of brands to build, scale & optimise their respective online stores with much confidence.",
    "Our massive team of experts, which includes 150+ certified Shopify developers, never fails to bring their expertise in Shopify Plus eCommerce design and development, ensuring we create seamless digital experiences for D2C & B2B businesses alike. From the early days, when we were just kicking off, we've launched 1000+ successfully operational online Shopify stores across industries such as fashion, health & wellness, home & lifestyle, cosmetics & beauty, electronics, and luxury goods.",
    "With our range of expertise, clients from startups to major global enterprises have collectively generated over $1 billion in online revenue —and not just that —they have driven consistently strong growth & sustainable success through tailor-made Shopify solutions.",
    "At Dynamic Dreamz, every project is built on strategy, creativity, and performance — helping your eCommerce brand reach its full potential.",
  ],
  reviews: [
    { name: "Clutch", href: "https://clutch.co/profile/dynamic-dreamz", reviews: "132 Reviews", rating: "5.0", logo: "/assets/reviews/clutch-wordmark.svg", logoWidth: 69, logoHeight: 19, logoClassName: "w-[69px]" },
    { name: "Upwork", href: "https://www.upwork.com/agencies/dynamicdreamz/", reviews: "2000+ Reviews", rating: "5.0", logo: "/assets/reviews/upwork-wordmark.svg", logoWidth: 78, logoHeight: 23, logoClassName: "h-[23px] w-[78px]" },
    { name: "GoodFirms", href: "https://www.goodfirms.co/company/dynamic-dreamz", reviews: "72 Reviews", rating: "5.0", logo: "/assets/reviews/goodfirms-wordmark.svg", logoWidth: 105, logoHeight: 16, logoClassName: "h-[16px] w-[105px]" },
  ],
} as const;

const resourceClientLogoPaths = [
  "/assets/clients/supertails.svg",
  "/assets/clients/eleven-eleven.svg",
  "/assets/clients/bella-vita.svg",
  "/assets/clients/bombay-shirt-company.svg",
  "/assets/clients/popclub.svg",
  "/assets/clients/sri-sri-tattva.svg",
  "/assets/clients/tropicfeel.svg",
  "/assets/clients/renee.svg",
  "/assets/clients/royce-chocolate.svg",
  "/assets/clients/tego.svg",
  "/assets/clients/nelter.svg",
  "/assets/clients/rare-rabbit.svg",
] as const;

export const resourcesClientLogos: ImageItem[] = resourceClientLogoPaths.map(getClientLogo);

export const resourcesStats = [
  { value: 18, suffix: "+", label: "Years of Experience" },
  { value: 150, suffix: "+", label: "Experts" },
  { value: 5000, suffix: "+", label: "Projects Completed" },
  { value: 1100, suffix: "+", label: "Happy Clients" },
] as const;
