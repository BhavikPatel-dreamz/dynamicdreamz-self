export type BlogArchiveCategoryValue = "shopify" | "wordpress" | "ecommerce" | "big-commerce";

export type BlogArchiveArticle = {
  title: string;
  href: string;
  image: string;
  width: number;
  height: number;
  date: string;
  displayDate: string;
  category: "Shopify" | "WordPress" | "eCommerce" | "Big-Commerce";
  categoryHref: string;
};

export type BlogArchiveCategory = {
  label: BlogArchiveArticle["category"];
  value: BlogArchiveCategoryValue;
  href: string;
};

export type BlogArchivePaginationItem = {
  label: string;
  href?: string;
  current?: boolean;
  previous?: boolean;
  next?: boolean;
};

export const blogsPageContent = {
  heroTitle: "Blogs",
  search: {
    action: "/blogs",
    label: "Search blogs",
    placeholder: "Search blog...",
    submitLabel: "Search",
    noResults: "No posts found.",
  },
  categoriesLabel: "Filter blogs by category",
  categories: [
    { label: "Shopify", value: "shopify", href: "/blogs?category=shopify" },
    { label: "WordPress", value: "wordpress", href: "/blogs?category=wordpress" },
    { label: "eCommerce", value: "ecommerce", href: "/blogs?category=ecommerce" },
  ] satisfies readonly BlogArchiveCategory[],
  paginationLabel: "Blog archive pagination",
} as const;

export const blogArchiveArticles = [
  {
    "title": "Free vs Paid Shopify Themes: Which One Is Right for Your Store?",
    "href": "/blogs/free-vs-paid-shopify-themes",
    "image": "/assets/blog/free-vs-paid-shopify-themes.webp",
    "width": 2560,
    "height": 1935,
    "date": "2026-08-11",
    "displayDate": "August 11 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "WooCommerce SEO Guide: How to Rank Your Store Higher in 2026",
    "href": "/blogs/woocommerce-seo",
    "image": "/assets/blog/woocommerce-seo-guide.webp",
    "width": 2560,
    "height": 1930,
    "date": "2026-08-11",
    "displayDate": "August 11 2026",
    "category": "WordPress",
    "categoryHref": "/blogs?category=wordpress"
  },
  {
    "title": "7 Must-Have Shopify Development Tools for Agencies & Developers",
    "href": "/blogs/shopify-development-tools",
    "image": "/assets/blog/shopify-development-tools.webp",
    "width": 2560,
    "height": 1935,
    "date": "2026-08-11",
    "displayDate": "August 11 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Shopify CRO Checklist: 10 Urgent CRO Steps You Should Know Right Now",
    "href": "/blogs/shopify-cro-checklist",
    "image": "/assets/blog/shopify-cro-checklist.webp",
    "width": 2560,
    "height": 1930,
    "date": "2026-08-11",
    "displayDate": "August 11 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Shopify vs WooCommerce India: Which Is Better for Your Online Store?",
    "href": "/blogs/shopify-vs-woocommerce",
    "image": "/assets/blog/shopify-vs-woocommerce.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-08-03",
    "displayDate": "August 3 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "How to Improve Shopify Core Web Vitals and Speed Up Your Store?",
    "href": "/blogs/shopify-core-web-vitals",
    "image": "/assets/blog/shopify-core-web-vitals.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-08-03",
    "displayDate": "August 3 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "7 Wonderful Ecommerce Website Design Tips for Your Shopify Store",
    "href": "/blogs/ecommerce-website-design",
    "image": "/assets/blog/ecommerce-design-tips.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-08-03",
    "displayDate": "August 3 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Shopify vs WooCommerce vs BigCommerce: Which One Is Better For LA Businesses?",
    "href": "/blogs/shopify-vs-woocommerce-vs-bigcommerce",
    "image": "/assets/blog/shopify-vs-woocommerce-vs-bigcommerce.webp",
    "width": 2560,
    "height": 1935,
    "date": "2026-07-15",
    "displayDate": "July 15 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "What is Shopify Collective? How Does It help Stores Expand Without Inventory Risk?",
    "href": "/blogs/shopify-collective",
    "image": "/assets/blog/shopify-collective.webp",
    "width": 2560,
    "height": 1935,
    "date": "2026-07-15",
    "displayDate": "July 15 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Shopify Plus For Texas Brands: Shopify B2B Vs Plus In 2026",
    "href": "/blogs/shopify-plus-for-texas-brands",
    "image": "/assets/blog/shopify-plus-for-texas-brands.webp",
    "width": 2560,
    "height": 1935,
    "date": "2026-07-15",
    "displayDate": "July 15 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "How Big Los Angeles Brands Are Using Shopify Plus To Scale In 2026",
    "href": "/blogs/los-angeles-brands",
    "image": "/assets/blog/los-angeles-brands.webp",
    "width": 2560,
    "height": 1935,
    "date": "2026-07-08",
    "displayDate": "July 8 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Shopify Development Cost in Los Angeles: Complete Price Breakdown",
    "href": "/blogs/shopify-development-cost",
    "image": "/assets/blog/shopify-development-cost.webp",
    "width": 2560,
    "height": 1935,
    "date": "2026-07-08",
    "displayDate": "July 8 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "What is AI marketing? And Why New Ecommerce Stores Need It?",
    "href": "/blogs/what-is-ai-marketing",
    "image": "/assets/blog/what-is-ai-marketing.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-06-01",
    "displayDate": "June 1 2026",
    "category": "eCommerce",
    "categoryHref": "/blogs?category=ecommerce"
  },
  {
    "title": "How To Do A/B Testing On Shopify: Everything You Need To Know",
    "href": "/blogs/how-to-do-ab-testing",
    "image": "/assets/blog/how-to-do-ab-testing.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-06-01",
    "displayDate": "June 1 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "What Is Product Positioning for WooCommerce? (And How to Turn Commodity Products into Branded Offers)",
    "href": "/blogs/what-is-product-positioning",
    "image": "/assets/blog/what-is-product-positioning.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-05-22",
    "displayDate": "May 22 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "10 Wonderful Shopify SEO Tips to Rank Higher in 2026",
    "href": "/blogs/shopify-seo-tips",
    "image": "/assets/blog/shopify-seo-tips.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-05-22",
    "displayDate": "May 22 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Why Shopify Product Page Isn’t Converting? Know These 5 Wonderful Fixes!",
    "href": "/blogs/shopify-product-page",
    "image": "/assets/blog/shopify-product-page.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-05-12",
    "displayDate": "May 12 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "AI Product Recommendation For Ecommerce And Why Your Store Needs It In 2026?",
    "href": "/blogs/ai-recommendation-system",
    "image": "/assets/blog/ai-recommendation-system.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-05-12",
    "displayDate": "May 12 2026",
    "category": "eCommerce",
    "categoryHref": "/blogs?category=ecommerce"
  },
  {
    "title": "7 Common WordPress Mistakes When Setting Up A New Website",
    "href": "/blogs/common-wordpress-mistakes",
    "image": "/assets/blog/common-wordpress-mistakes.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-05-12",
    "displayDate": "May 12 2026",
    "category": "WordPress",
    "categoryHref": "/blogs?category=wordpress"
  },
  {
    "title": "How AI Automation Helps Shopify Stores Save Time? Sell More & Scale Faster",
    "href": "/blogs/ai-automation-for-shopify-stores",
    "image": "/assets/blog/ai-automation-for-shopify-stores.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-05-04",
    "displayDate": "May 4 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Shopify SEO Migration: How to Move Your Store Without Losing Organic Traffic",
    "href": "/blogs/shopify-seo-migration",
    "image": "/assets/blog/shopify-seo-migration.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-04-21",
    "displayDate": "April 21 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "BigCommerce To WooCommerce Migration: The Complete Guide For 2026",
    "href": "/blogs/bigcommerce-to-woocommerce-migration",
    "image": "/assets/blog/bigcommerce-to-woocommerce-migration.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-04-21",
    "displayDate": "April 21 2026",
    "category": "Big-Commerce",
    "categoryHref": "/blogs?category=big-commerce"
  },
  {
    "title": "Best Free WordPress Themes For 2026- Tested & Ranked",
    "href": "/blogs/best-free-wordpress-themes",
    "image": "/assets/blog/best-free-wordpress-themes.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-04-21",
    "displayDate": "April 21 2026",
    "category": "WordPress",
    "categoryHref": "/blogs?category=wordpress"
  },
  {
    "title": "Digital Transformation Trends In Retail: What Brand Founders Need To Know",
    "href": "/blogs/digital-transformation-trends",
    "image": "/assets/blog/digital-transformation-trends.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-04-14",
    "displayDate": "April 14 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Digital Retail AI Agents: How They Work and Why eCommerce Managers Should Care",
    "href": "/blogs/digital-retail-ai-agents",
    "image": "/assets/blog/digital-retail-ai-agents.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-04-14",
    "displayDate": "April 14 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Bigcommerce To Shopify Migration: Everything You Need To Know Before You Switch",
    "href": "/blogs/migrate-bigcommerce-to-shopify",
    "image": "/assets/blog/migrate-bigcommerce-to-shopify.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-04-14",
    "displayDate": "April 14 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Shopify Plus For Global Brands: Scale Smarter, Sell Everywhere",
    "href": "/blogs/shopify-plus-for-global-brands",
    "image": "/assets/blog/shopify-plus-for-global-brands.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-04-08",
    "displayDate": "April 8 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "How to Migrate to Shopify Plus: A Step-by-Step Guide",
    "href": "/blogs/how-to-migrate-to-shopify-plus",
    "image": "/assets/blog/how-to-migrate-to-shopify-plus.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-03-31",
    "displayDate": "March 31 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "What is Shopify Agentic Commerce? The Next Big Shift in Ecommerce",
    "href": "/blogs/shopify-agentic-commerce",
    "image": "/assets/blog/shopify-agentic-commerce.webp",
    "width": 1504,
    "height": 756,
    "date": "2026-03-19",
    "displayDate": "March 19 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Complete Shopify Outsourcing Checklist With 10 Official Tips",
    "href": "/blogs/complete-shopify-outsourcing-checklist-with-10-official-tips",
    "image": "/assets/blog/complete-shopify-outsourcing-checklist-with-10-official-tips.webp",
    "width": 329,
    "height": 237,
    "date": "2026-03-14",
    "displayDate": "March 14 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Transform Your Store With A Complete Magento Web Development Guide",
    "href": "/blogs/transform-your-store-with-a-complete-magento-web-development-guide",
    "image": "/assets/blog/transform-your-store-with-a-complete-magento-web-development-guide.webp",
    "width": 329,
    "height": 237,
    "date": "2026-03-10",
    "displayDate": "March 10 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "What Are The Risks Of Shopify Outsourcing? Get Details Now!",
    "href": "/blogs/what-are-the-risks-of-shopify-outsourcing-get-details-now",
    "image": "/assets/blog/what-are-the-risks-of-shopify-outsourcing-get-details-now.webp",
    "width": 1316,
    "height": 948,
    "date": "2026-03-06",
    "displayDate": "March 6 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Why Agencies Prefer White Label Website Design Outsourcing For Growth!",
    "href": "/blogs/white-label-website-design-outsourcing-2",
    "image": "/assets/blog/white-label-website-design-outsourcing-2.webp",
    "width": 1504,
    "height": 756,
    "date": "2026-03-01",
    "displayDate": "March 1 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Shopify Plus Headless Commerce: The Growth Strategy Your Brand Can’t Ignore in 2026",
    "href": "/blogs/shopify-plus-headless-commerce",
    "image": "/assets/blog/shopify-plus-headless-commerce.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-02-25",
    "displayDate": "February 25 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "7 Most Common Shopify Data Migration Challenges For Business",
    "href": "/blogs/shopify-data-migration-challenges",
    "image": "/assets/blog/shopify-data-migration-challenges.webp",
    "width": 2560,
    "height": 1287,
    "date": "2026-02-18",
    "displayDate": "February 18 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Why Do Agencies Love Working with White Label WordPress Developers?",
    "href": "/blogs/white-label-wordpress-developers",
    "image": "/assets/blog/white-label-wordpress-developers.webp",
    "width": 1504,
    "height": 756,
    "date": "2026-02-05",
    "displayDate": "February 5 2026",
    "category": "WordPress",
    "categoryHref": "/blogs?category=wordpress"
  },
  {
    "title": "Shopify Winter Edition 2026: 11 Powerful Updates Scaling Brands Love",
    "href": "/blogs/shopify-winter-edition-2026",
    "image": "/assets/blog/shopify-winter-edition-2026.webp",
    "width": 1504,
    "height": 1137,
    "date": "2026-02-05",
    "displayDate": "February 5 2026",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Why Agencies Prefer White Label Website Design Outsourcing For Growth!",
    "href": "/blogs/white-label-website-design-outsourcing",
    "image": "/assets/blog/white-label-website-design-outsourcing.webp",
    "width": 1308,
    "height": 948,
    "date": "2025-12-16",
    "displayDate": "December 16 2025",
    "category": "WordPress",
    "categoryHref": "/blogs?category=wordpress"
  },
  {
    "title": "White Label WordPress Outsourcing That Makes Scaling Feel Simple",
    "href": "/blogs/white-label-wordpress-outsourcing",
    "image": "/assets/blog/white-label-wordpress-outsourcing.webp",
    "width": 1298,
    "height": 948,
    "date": "2025-12-09",
    "displayDate": "December 9 2025",
    "category": "WordPress",
    "categoryHref": "/blogs?category=wordpress"
  },
  {
    "title": "Shopify Limits: The Complete Breakdown You Need In 2026",
    "href": "/blogs/shopify-limits",
    "image": "/assets/blog/shopify-limits.webp",
    "width": 1308,
    "height": 948,
    "date": "2025-12-02",
    "displayDate": "December 2 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Shopify Plus Ecommerce Agency: The Key to Scaling Your Online Brand",
    "href": "/blogs/shopify-plus-ecommerce-agency",
    "image": "/assets/blog/shopify-plus-ecommerce-agency.webp",
    "width": 1308,
    "height": 948,
    "date": "2025-09-09",
    "displayDate": "September 9 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "The Ultimate B2B eCommerce Features for Successful Business",
    "href": "/blogs/b2b-ecommerce-features-for-successful-business",
    "image": "/assets/blog/b2b-ecommerce-features-for-successful-business.webp",
    "width": 329,
    "height": 237,
    "date": "2025-09-02",
    "displayDate": "September 2 2025",
    "category": "eCommerce",
    "categoryHref": "/blogs?category=ecommerce"
  },
  {
    "title": "Why Shopify Plus is Better Than Shopify",
    "href": "/blogs/why-shopify-plus-is-better-than-shopify",
    "image": "/assets/blog/why-shopify-plus-is-better-than-shopify.webp",
    "width": 329,
    "height": 237,
    "date": "2025-08-26",
    "displayDate": "August 26 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Why Responsive Design is Important for eCommerce",
    "href": "/blogs/responsive-design-for-ecommerce",
    "image": "/assets/blog/responsive-design-for-ecommerce.webp",
    "width": 329,
    "height": 237,
    "date": "2025-08-19",
    "displayDate": "August 19 2025",
    "category": "eCommerce",
    "categoryHref": "/blogs?category=ecommerce"
  },
  {
    "title": "Top 5 Shopify Payment Methods",
    "href": "/blogs/top-payment-methods-for-shopify-store",
    "image": "/assets/blog/top-payment-methods-for-shopify-store.webp",
    "width": 329,
    "height": 237,
    "date": "2025-08-12",
    "displayDate": "August 12 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Top 5 Shopify Apps for Email Marketing",
    "href": "/blogs/shopify-apps-for-email-marketing",
    "image": "/assets/blog/shopify-apps-for-email-marketing.webp",
    "width": 1504,
    "height": 756,
    "date": "2025-08-05",
    "displayDate": "August 5 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Best 5 Shopify themes for jewelry",
    "href": "/blogs/shopify-themes-for-jewelry",
    "image": "/assets/blog/shopify-themes-for-jewelry.webp",
    "width": 329,
    "height": 237,
    "date": "2025-07-28",
    "displayDate": "July 28 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "How to Use White Label Agency Services to Stay Competitive",
    "href": "/blogs/how-to-stay-competitive-in-white-label-services",
    "image": "/assets/blog/how-to-stay-competitive-in-white-label-services.webp",
    "width": 658,
    "height": 474,
    "date": "2025-07-25",
    "displayDate": "July 25 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Scaling Your Agency with White Label Solutions: Myths vs. Reality",
    "href": "/blogs/scaling-your-agency-with-white-label-solutions",
    "image": "/assets/blog/scaling-your-agency-with-white-label-solutions.webp",
    "width": 329,
    "height": 237,
    "date": "2025-07-21",
    "displayDate": "July 21 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "10 Proven Ways to Speed Up Your eCommerce Site and Boost Sales",
    "href": "/blogs/proven-ways-to-speed-up-your-ecommerce-site",
    "image": "/assets/blog/proven-ways-to-speed-up-your-ecommerce-site.webp",
    "width": 1316,
    "height": 948,
    "date": "2025-07-18",
    "displayDate": "July 18 2025",
    "category": "eCommerce",
    "categoryHref": "/blogs?category=ecommerce"
  },
  {
    "title": "White Label Web Design Advantages: Tailored Solutions for Customers",
    "href": "/blogs/benefits-of-white-label-web-design-services",
    "image": "/assets/blog/benefits-of-white-label-web-design-services.webp",
    "width": 658,
    "height": 474,
    "date": "2025-07-14",
    "displayDate": "July 14 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Building a Profitable White Label Agency: Steps for Success",
    "href": "/blogs/building-a-profitable-white-label-agency-steps-for-success",
    "image": "/assets/blog/building-a-profitable-white-label-agency-steps-for-success.webp",
    "width": 658,
    "height": 474,
    "date": "2025-07-10",
    "displayDate": "July 10 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "How to Choose the Right White Label Partner for Your Digital Marketing Agency",
    "href": "/blogs/how-to-choose-the-right-white-label-partner",
    "image": "/assets/blog/how-to-choose-the-right-white-label-partner.webp",
    "width": 658,
    "height": 474,
    "date": "2025-06-05",
    "displayDate": "June 5 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Important Steps for Evaluating White Label Services’ Performance",
    "href": "/blogs/measuring-effectiveness-of-white-label-services",
    "image": "/assets/blog/measuring-effectiveness-of-white-label-services.webp",
    "width": 1504,
    "height": 756,
    "date": "2025-05-28",
    "displayDate": "May 28 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "How White Label Services Reduce Overhead & Increase Revenue for Agencies",
    "href": "/blogs/how-white-label-services-reduce-overhead-increase-revenue",
    "image": "/assets/blog/how-white-label-services-reduce-overhead-increase-revenue.webp",
    "width": 1316,
    "height": 948,
    "date": "2025-05-28",
    "displayDate": "May 28 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "5 Signs It’s Time to Start Using White Label Services in Your Business",
    "href": "/blogs/signs-to-start-using-white-label-services",
    "image": "/assets/blog/signs-to-start-using-white-label-services.webp",
    "width": 1316,
    "height": 948,
    "date": "2025-05-23",
    "displayDate": "May 23 2025",
    "category": "WordPress",
    "categoryHref": "/blogs?category=wordpress"
  },
  {
    "title": "The Benefits of White Labeling: How Agencies Can Scale Faster",
    "href": "/blogs/benefits-of-white-labeling-agency",
    "image": "/assets/blog/benefits-of-white-labeling-agency.webp",
    "width": 329,
    "height": 237,
    "date": "2025-05-23",
    "displayDate": "May 23 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "What Is a White Label Agency & How Can It Help You Grow Your Business?",
    "href": "/blogs/what-is-a-white-label-agency",
    "image": "/assets/blog/what-is-a-white-label-agency.webp",
    "width": 329,
    "height": 237,
    "date": "2025-05-23",
    "displayDate": "May 23 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "5 Game-Changing Shopify SEO Apps to Drive More Sales",
    "href": "/blogs/shopify-seo-apps",
    "image": "/assets/blog/shopify-seo-apps.webp",
    "width": 329,
    "height": 237,
    "date": "2025-05-05",
    "displayDate": "May 5 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "How to Assign and Manage Shopify Collaborator Access",
    "href": "/blogs/how-to-assign-and-manage-shopify-collaborator-access",
    "image": "/assets/blog/how-to-assign-and-manage-shopify-collaborator-access.webp",
    "width": 329,
    "height": 237,
    "date": "2025-03-17",
    "displayDate": "March 17 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Shopify Expert Costs Explained: How Much Does It Cost?",
    "href": "/blogs/shopify-expert-costs",
    "image": "/assets/blog/shopify-expert-costs.webp",
    "width": 1316,
    "height": 948,
    "date": "2025-02-05",
    "displayDate": "February 5 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Is Shopify Plus Worth Investing? The Ultimate Guide to Making the Decision",
    "href": "/blogs/is-shopify-plus-worth-investing",
    "image": "/assets/blog/is-shopify-plus-worth-investing.webp",
    "width": 1316,
    "height": 948,
    "date": "2025-01-10",
    "displayDate": "January 10 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Shopify Website Development Cost Breakdown: A Complete Guide",
    "href": "/blogs/shopify-website-development-cost-breakdown-a-complete-guide",
    "image": "/assets/blog/shopify-website-development-cost-breakdown-a-complete-guide.webp",
    "width": 1316,
    "height": 948,
    "date": "2025-01-03",
    "displayDate": "January 3 2025",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "How to Use Shopify: A Beginner’s Guide to Starting a Shopify Store",
    "href": "/blogs/how-to-use-shopify-a-beginners-guide",
    "image": "/assets/blog/how-to-use-shopify-a-beginners-guide.webp",
    "width": 1316,
    "height": 948,
    "date": "2024-12-23",
    "displayDate": "December 23 2024",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Say Goodbye to Traditional Shopify Email Popups: 3 Effective Alternatives",
    "href": "/blogs/shopify-email-popups-alternatives",
    "image": "/assets/blog/shopify-email-popups-alternatives.webp",
    "width": 1316,
    "height": 948,
    "date": "2024-12-06",
    "displayDate": "December 6 2024",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "10 eCommerce Call to Action Examples to Boost Your Sales",
    "href": "/blogs/ecommerce-call-to-action-examples",
    "image": "/assets/blog/ecommerce-call-to-action-examples.webp",
    "width": 1316,
    "height": 948,
    "date": "2024-10-21",
    "displayDate": "October 21 2024",
    "category": "eCommerce",
    "categoryHref": "/blogs?category=ecommerce"
  },
  {
    "title": "Shopify Summer Editions 2024: Game Changing Features Every Store Owner Needs to Know",
    "href": "/blogs/shopify-summer-editions-2024",
    "image": "/assets/blog/shopify-summer-editions-2024.webp",
    "width": 1316,
    "height": 948,
    "date": "2024-09-20",
    "displayDate": "September 20 2024",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Shopify Launch Checklist: Ultimate Guide for a Successful Store",
    "href": "/blogs/shopify-launch-checklist",
    "image": "/assets/blog/shopify-launch-checklist.webp",
    "width": 1316,
    "height": 948,
    "date": "2024-09-12",
    "displayDate": "September 12 2024",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "WordPress Feature Development for Culinary Shows Websites",
    "href": "/blogs/wordpress-feature-development-for-culinary-shows-websites",
    "image": "/assets/blog/wordpress-feature-development-for-culinary-shows-websites.webp",
    "width": 1316,
    "height": 948,
    "date": "2024-08-29",
    "displayDate": "August 29 2024",
    "category": "WordPress",
    "categoryHref": "/blogs?category=wordpress"
  },
  {
    "title": "Top 5 Shopify Themes For The Fashion And Beauty Industry In 2024",
    "href": "/blogs/top-5-shopify-themes-for-the-fashion-and-beauty-industry-in-2024",
    "image": "/assets/blog/top-5-shopify-themes-for-the-fashion-and-beauty-industry-in-2024.webp",
    "width": 329,
    "height": 237,
    "date": "2024-08-29",
    "displayDate": "August 29 2024",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Top 5 Flexible WordPress Page Builders For 2024",
    "href": "/blogs/top-5-flexible-wordpress-page-builders-for-2024",
    "image": "/assets/blog/top-5-flexible-wordpress-page-builders-for-2024.webp",
    "width": 1316,
    "height": 948,
    "date": "2024-07-08",
    "displayDate": "July 8 2024",
    "category": "WordPress",
    "categoryHref": "/blogs?category=wordpress"
  },
  {
    "title": "Ultimate guide to hiring Shopify Development Agency",
    "href": "/blogs/how-to-hire-shopify-development-agency",
    "image": "/assets/blog/how-to-hire-shopify-development-agency.webp",
    "width": 1024,
    "height": 774,
    "date": "2024-06-20",
    "displayDate": "June 20 2024",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Authenticate and add a DMARC record to continue sending emails from your domain",
    "href": "/blogs/add-a-dmarc-record-to-sending-emails",
    "image": "/assets/blog/add-a-dmarc-record-to-sending-emails.webp",
    "width": 876,
    "height": 705,
    "date": "2024-06-20",
    "displayDate": "June 20 2024",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Types of Shopify Experts Services: A Business Perspective",
    "href": "/blogs/types-of-shopify-experts-services",
    "image": "/assets/blog/types-of-shopify-experts-services.webp",
    "width": 1316,
    "height": 948,
    "date": "2024-06-20",
    "displayDate": "June 20 2024",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Ultimate Guide To Hiring Shopify Expert",
    "href": "/blogs/guide-to-hiring-shopify-expert",
    "image": "/assets/blog/guide-to-hiring-shopify-expert.webp",
    "width": 1316,
    "height": 948,
    "date": "2024-06-20",
    "displayDate": "June 20 2024",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Product bundling in Shopify",
    "href": "/blogs/product-bundling-in-shopify",
    "image": "/assets/blog/product-bundling-in-shopify.webp",
    "width": 1800,
    "height": 1201,
    "date": "2024-06-20",
    "displayDate": "June 20 2024",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Shopify Experts vs. DIY: When to Seek Professional Help for Your eCommerce Site",
    "href": "/blogs/shopify-experts-vs-diy-when-to-seek-professional-help-for-your-e-commerce-site",
    "image": "/assets/blog/shopify-experts-vs-diy-when-to-seek-professional-help-for-your-e-commerce-site.webp",
    "width": 1316,
    "height": 948,
    "date": "2024-06-20",
    "displayDate": "June 20 2024",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Shopify vs. WordPress: Choosing the Right Platform for Your eCommerce Venture",
    "href": "/blogs/shopify-vs-wordpress-choosing-the-right-platform-for-your-e-commerce-venture",
    "image": "/assets/blog/shopify-vs-wordpress-choosing-the-right-platform-for-your-e-commerce-venture.webp",
    "width": 1504,
    "height": 756,
    "date": "2024-06-20",
    "displayDate": "June 20 2024",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "How to Choose the Right Shopify App: A Comprehensive Selection Guide",
    "href": "/blogs/how-to-choose-the-right-shopify-app",
    "image": "/assets/blog/how-to-choose-the-right-shopify-app.webp",
    "width": 1316,
    "height": 948,
    "date": "2024-06-17",
    "displayDate": "June 17 2024",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "10 Key Benefits of Choosing Shopify for Your eCommerce Store",
    "href": "/blogs/key-benefits-of-choosing-shopify",
    "image": "/assets/blog/key-benefits-of-choosing-shopify.webp",
    "width": 1316,
    "height": 948,
    "date": "2024-06-17",
    "displayDate": "June 17 2024",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "WordPress Web Design Company: Building A Website That Converts",
    "href": "/blogs/wordpress-web-design-company-building-a-website-that-converts",
    "image": "/assets/blog/wordpress-web-design-company-building-a-website-that-converts.webp",
    "width": 1316,
    "height": 948,
    "date": "2024-06-17",
    "displayDate": "June 17 2024",
    "category": "WordPress",
    "categoryHref": "/blogs?category=wordpress"
  },
  {
    "title": "Shopify Plus in Action: Success Stories and Case Studies",
    "href": "/blogs/shopify-plus-in-action-success-stories-and-case-studies",
    "image": "/assets/blog/shopify-plus-in-action-success-stories-and-case-studies.webp",
    "width": 1316,
    "height": 948,
    "date": "2024-06-17",
    "displayDate": "June 17 2024",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "Your Expert Guide: Freelance vs. Agency for Shopify?",
    "href": "/blogs/hire-shopify-expert-freelance-vs-agency",
    "image": "/assets/blog/hire-shopify-expert-freelance-vs-agency.webp",
    "width": 1504,
    "height": 756,
    "date": "2024-06-17",
    "displayDate": "June 17 2024",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  },
  {
    "title": "The Journey Of A Shopify Store: From Idea To Success",
    "href": "/blogs/the-journey-of-a-shopify-store-from-idea-to-success",
    "image": "/assets/blog/the-journey-of-a-shopify-store-from-idea-to-success.webp",
    "width": 1316,
    "height": 948,
    "date": "2024-06-17",
    "displayDate": "June 17 2024",
    "category": "Shopify",
    "categoryHref": "/blogs?category=shopify"
  }
] as const satisfies readonly BlogArchiveArticle[];

export const BLOGS_PAGE_SIZE = 9;
export const BLOGS_TOTAL_PAGES = Math.ceil(blogArchiveArticles.length / BLOGS_PAGE_SIZE);

const blogArchiveCategoryValues = new Set<BlogArchiveCategoryValue>([
  "shopify",
  "wordpress",
  "ecommerce",
  "big-commerce",
]);

export function normalizeBlogArchiveCategory(value: string): BlogArchiveCategoryValue | undefined {
  return blogArchiveCategoryValues.has(value as BlogArchiveCategoryValue)
    ? (value as BlogArchiveCategoryValue)
    : undefined;
}

export function filterBlogArchiveArticles(
  query = "",
  category?: BlogArchiveCategoryValue,
) {
  const normalizedQuery = query.trim().toLocaleLowerCase("en-US");

  return blogArchiveArticles.filter((article) => {
    const matchesCategory = category
      ? article.category.toLocaleLowerCase("en-US") === category
      : true;
    const matchesQuery = normalizedQuery
      ? article.title.toLocaleLowerCase("en-US").includes(normalizedQuery)
      : true;

    return matchesCategory && matchesQuery;
  });
}

export function getBlogArchivePage(page: number) {
  const safePage = Math.min(Math.max(Math.trunc(page), 1), BLOGS_TOTAL_PAGES);
  const start = (safePage - 1) * BLOGS_PAGE_SIZE;
  return blogArchiveArticles.slice(start, start + BLOGS_PAGE_SIZE);
}

export function getBlogArchivePagination(currentPage: number): BlogArchivePaginationItem[] {
  const safePage = Math.min(Math.max(Math.trunc(currentPage), 1), BLOGS_TOTAL_PAGES);
  const items: BlogArchivePaginationItem[] = [];
  const pageHref = (page: number) => `/blogs?page=${page}`;

  if (safePage > 1) {
    items.push({ label: "Previous page", href: pageHref(safePage - 1), previous: true });
  }

  const addPage = (page: number) => {
    items.push(
      page === safePage
        ? { label: String(page), current: true }
        : { label: String(page), href: pageHref(page) },
    );
  };

  const addEllipsis = () => items.push({ label: "..." });

  if (BLOGS_TOTAL_PAGES <= 5) {
    for (let page = 1; page <= BLOGS_TOTAL_PAGES; page += 1) addPage(page);
  } else if (safePage <= 4) {
    for (let page = 1; page <= Math.min(BLOGS_TOTAL_PAGES, safePage + 2); page += 1) addPage(page);
    if (safePage + 2 < BLOGS_TOTAL_PAGES) addEllipsis();
    addPage(BLOGS_TOTAL_PAGES);
  } else if (safePage >= BLOGS_TOTAL_PAGES - 3) {
    addPage(1);
    addEllipsis();
    for (let page = Math.max(2, safePage - 2); page <= BLOGS_TOTAL_PAGES; page += 1) addPage(page);
  } else {
    addPage(1);
    addEllipsis();
    for (let page = safePage - 2; page <= safePage + 2; page += 1) addPage(page);
    addEllipsis();
    addPage(BLOGS_TOTAL_PAGES);
  }

  if (safePage < BLOGS_TOTAL_PAGES) {
    items.push({ label: "Next page", href: pageHref(safePage + 1), next: true });
  }

  return items;
}
