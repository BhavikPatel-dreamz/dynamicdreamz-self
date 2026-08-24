export type WorkPlatform = "all" | "shopify" | "wordpress" | "apps" | "magento" | "bigCommerce";

export type WorkFilter = {
  id: WorkPlatform;
  label: string;
};

export type WorkProject = {
  id: string;
  platform: Exclude<WorkPlatform, "all">;
  name: string;
  category: string;
  href: string | null;
  image: string;
  imageAlt: string;
  platformMark?: {
    src: string;
    width: number;
    height: number;
  };
  appLinks?: readonly {
    label: string;
    href: string;
    icon: string;
  }[];
};

export type OurWorkCaseStudy = {
  slug: string;
  category: string;
  industry: string;
  title: string;
  excerpt: string;
  chips: readonly string[];
  image: string;
  imageAlt: string;
};

export const ourWorkPage = {
  hero: {
    eyebrow: "our work",
    title: "Shopify, Web & Mobile App Portfolio",
    description:
      "Explore selected work across Shopify and Shopify Plus, mobile apps, WordPress, Magento and BigCommerce — from premium DTC storefronts and B2B commerce to migrations, custom development and ongoing optimization.",
  },
  portfolio: {
    eyebrow: "PORTFOLIO",
    title: "Explore Our Work",
    description:
      "Explore selected projects across Shopify, WordPress, mobile apps and custom development. See how we help brands and agencies build high-performing digital experiences.",
  },
  caseStudies: {
    eyebrow: "CASE STUDIES",
    title: "See the Story Behind the Work",
    description:
      "Portfolio shows what we built. Case studies explain the requirement, challenges, approach and solution behind selected projects.",
  },
  filters: [
    { id: "all", label: "All Projects" },
    { id: "shopify", label: "Shopify / Shopify Plus" },
    { id: "wordpress", label: "WordPress" },
    { id: "apps", label: "Mobile Apps" },
    { id: "magento", label: "Magento" },
    { id: "bigCommerce", label: "Bigcommerce" },
  ] satisfies readonly WorkFilter[],
} as const;

export const ourWorkCaseStudies: readonly OurWorkCaseStudy[] = [
  {
    slug: "ranavat",
    category: "SHOPIFY / SHOPIFY PLUS · BEAUTY & COSMETICS",
    industry: "Beauty & Cosmetics",
    title: "Ranavat: 6+ Year Shopify Partnership for a Luxury Ayurvedic Skincare & Haircare Brand",
    excerpt:"",
    chips: ["Ayurvedic Skincare", "Long-Term Shopify Partnership"],
    image: "/assets/case-studies/ranavat.png",
    imageAlt: "Ranavat Shopify and Shopify Plus case study storefront",
  },
  {
    slug: "bombay-shirt-company",
    category: "SHOPIFY CUSTOM APPS & INTEGRATIONS · FASHION & APPAREL",
    industry: "Fashion & Apparel",
    title: "Bombay Shirt Company: 5-Year Shopify Partnership with Fit Smart Body-Type Sizing & Shirt Customizer",
    excerpt:"",
    chips: ["Fashion & Apparel", "Long-Term Shopify Partnership"],
    image: "/assets/case-studies/bombay-shirt-company.png",
    imageAlt: "Bombay Shirt Company Shopify custom apps case study storefront",
  },
  {
    slug: "nekter-juice-bar",
    category: "SHOPIFY / SHOPIFY PLUS · FOOD & BEVERAGES",
    industry: "Food & Beverages",
    title: "Nekter Juice Bar: Shopify Redesign with Streamlined Ordering & Multi-Location Store Pickup",
    excerpt:"",
    chips: ["Multi-Location Store Pickup", "Streamlined Ordering"],
    image: "/assets/case-studies/nekter-juice-bar.jpg",
    imageAlt: "Nekter Juice Bar Shopify case study storefront",
  },
];

export const ourWorkProjects = [
  {
    "id": "project-001",
    "platform": "shopify",
    "name": "Ranavat",
    "category": "shopifyplus",
    "href": "https://www.ranavat.com/",
    "image": "/assets/beauty-cosmetics/portfolio/ranavat-skincare.webp",
    "imageAlt": "Ranavat project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-plus-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-002",
    "platform": "shopify",
    "name": "Atolea Jewelry",
    "category": "shopifyplus",
    "href": "https://atoleajewelry.com/",
    "image": "/assets/our-work/projects/atolea-jewelry.webp",
    "imageAlt": "Atolea Jewelry project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-plus-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-003",
    "platform": "shopify",
    "name": "Naakbar",
    "category": "shopifyplus",
    "href": "https://www.naak.com/",
    "image": "/assets/healthcare/portfolio/naakbar-energy-products.webp",
    "imageAlt": "Naakbar project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-plus-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-004",
    "platform": "shopify",
    "name": "Tropicfeel",
    "category": "shopifyplus",
    "href": "https://shop.tropicfeel.com/",
    "image": "/assets/fashion/portfolio/tropicfeel-fashion.webp",
    "imageAlt": "Tropicfeel project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-plus-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-005",
    "platform": "shopify",
    "name": "Bella Vita",
    "category": "shopifyplus",
    "href": "https://bellavitaorganic.com/",
    "image": "/assets/our-work/projects/bella-vita.webp",
    "imageAlt": "Bella Vita project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-plus-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-006",
    "platform": "shopify",
    "name": "Renee",
    "category": "shopifyplus",
    "href": "https://www.reneecosmetics.in/",
    "image": "/assets/our-work/projects/renee.webp",
    "imageAlt": "Renee project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-plus-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-007",
    "platform": "shopify",
    "name": "Lilac ST.",
    "category": "shopifyplus",
    "href": "https://lilacst.com/",
    "image": "/assets/beauty-cosmetics/portfolio/lilac-st-cosmetics.webp",
    "imageAlt": "Lilac ST. project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-plus-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-008",
    "platform": "shopify",
    "name": "nekter juice bar",
    "category": "shopifyplus",
    "href": "https://www.nekterjuicebar.com/",
    "image": "/assets/food-beverages/portfolio/nekter-juice-bar.webp",
    "imageAlt": "nekter juice bar project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-plus-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-009",
    "platform": "shopify",
    "name": "Matcha Republic",
    "category": "shopify",
    "href": "https://www.matcharepublic.com/",
    "image": "/assets/our-work/projects/matcha-republic.webp",
    "imageAlt": "Matcha Republic project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-010",
    "platform": "wordpress",
    "name": "Awaken Media",
    "category": "WordPress (94+ Page Speed Score)",
    "href": "https://www.awaken.media/",
    "image": "/assets/our-work/projects/awaken-media.webp",
    "imageAlt": "Awaken Media project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-011",
    "platform": "wordpress",
    "name": "Budget Maids",
    "category": "WordPress (99+ Page Speed Score)",
    "href": "https://www.budget-maids.com/",
    "image": "/assets/our-work/projects/budget-maids.webp",
    "imageAlt": "Budget Maids project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-012",
    "platform": "wordpress",
    "name": "Daniel Center",
    "category": "Elementor + WordPress",
    "href": "https://daniel-center.co.il/",
    "image": "/assets/our-work/projects/daniel-center.webp",
    "imageAlt": "Daniel Center project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-013",
    "platform": "shopify",
    "name": "Sri Sri Tatva",
    "category": "shopifyplus",
    "href": "https://www.srisritattva.com/",
    "image": "/assets/our-work/projects/sri-sri-tatva.webp",
    "imageAlt": "Sri Sri Tatva project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-plus-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-014",
    "platform": "shopify",
    "name": "Rare Rabbit",
    "category": "shopifyplus",
    "href": "https://thehouseofrare.com/",
    "image": "/assets/our-work/projects/rare-rabbit.webp",
    "imageAlt": "Rare Rabbit project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-plus-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-015",
    "platform": "shopify",
    "name": "Headsets",
    "category": "shopifyplus",
    "href": "https://www.headsets.com/",
    "image": "/assets/our-work/projects/headsets.webp",
    "imageAlt": "Headsets project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-plus-white.svg",
      "width": 113,
      "height": 27
    }
  },
  {
    "id": "project-016",
    "platform": "wordpress",
    "name": "Inthelia",
    "category": "WordPress (92+ Page Speed Score)",
    "href": "https://inthelia.com/",
    "image": "/assets/our-work/projects/inthelia.webp",
    "imageAlt": "Inthelia project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-017",
    "platform": "wordpress",
    "name": "Little Light Workers",
    "category": "WordPress (89+ Plus Page Speed Score)",
    "href": "https://www.littlelightworkers.com/",
    "image": "/assets/our-work/projects/little-light-workers.webp",
    "imageAlt": "Little Light Workers project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-018",
    "platform": "shopify",
    "name": "Bombay Shirt Company",
    "category": "shopify",
    "href": "https://www.bombayshirts.com/",
    "image": "/assets/fashion/portfolio/bombay-shirt-company-fashion.webp",
    "imageAlt": "Bombay Shirt Company project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-019",
    "platform": "shopify",
    "name": "Holy Plantz",
    "category": "shopify",
    "href": "https://holyplantz.com/",
    "image": "/assets/our-work/projects/holy-plantz.webp",
    "imageAlt": "Holy Plantz project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-020",
    "platform": "shopify",
    "name": "Midnight Cosmetics",
    "category": "shopify",
    "href": "https://midnightcosmetics.co/",
    "image": "/assets/beauty-cosmetics/portfolio/midnight-cosmetics-skincare.webp",
    "imageAlt": "Midnight Cosmetics project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-021",
    "platform": "magento",
    "name": "Sambazon",
    "category": "magento",
    "href": "https://www.sambazon.com/",
    "image": "/assets/our-work/projects/sambazon.webp",
    "imageAlt": "Sambazon project preview",
    "platformMark": {
      "src": "/assets/platforms/magento-white.svg",
      "width": 105,
      "height": 30
    }
  },
  {
    "id": "project-022",
    "platform": "apps",
    "name": "House of Rare",
    "category": "React Native",
    "href": null,
    "image": "/assets/our-work/projects/house-of-rare.webp",
    "imageAlt": "House of Rare project preview",
    "appLinks": [
      {
        "label": "Android App",
        "href": "https://play.google.com/store/apps/details?id=rarerabbit.android.app",
        "icon": "/assets/our-work/platforms/android-icon.svg"
      },
      {
        "label": "IOS App",
        "href": "https://apps.apple.com/in/app/house-of-rare/id1563278819",
        "icon": "/assets/our-work/platforms/app-store-ios.svg"
      }
    ]
  },
  {
    "id": "project-023",
    "platform": "apps",
    "name": "Kalki India",
    "category": "React Native",
    "href": null,
    "image": "/assets/our-work/projects/kalki-india.webp",
    "imageAlt": "Kalki India project preview",
    "appLinks": [
      {
        "label": "Android App",
        "href": "https://play.google.com/store/apps/details?id=com.shopgate.android.kalkifash",
        "icon": "/assets/our-work/platforms/android-icon.svg"
      },
      {
        "label": "IOS App",
        "href": "https://apps.apple.com/in/app/kalki-fashion-online-shopping/id950206786",
        "icon": "/assets/our-work/platforms/app-store-ios.svg"
      }
    ]
  },
  {
    "id": "project-024",
    "platform": "apps",
    "name": "Bellavita Organic",
    "category": "React Native",
    "href": null,
    "image": "/assets/our-work/projects/bella-vita.webp",
    "imageAlt": "Bellavita Organic project preview",
    "appLinks": [
      {
        "label": "Android App",
        "href": "https://play.google.com/store/apps/details?id=com.bellavita.shopifyapps",
        "icon": "/assets/our-work/platforms/android-icon.svg"
      },
      {
        "label": "IOS App",
        "href": "https://apps.apple.com/in/app/bellavita-online-shopping-app/id1588406681",
        "icon": "/assets/our-work/platforms/app-store-ios.svg"
      }
    ]
  },
  {
    "id": "project-025",
    "platform": "shopify",
    "name": "SomewhereCo",
    "category": "shopify",
    "href": "https://thesomewhereco.com/",
    "image": "/assets/fashion/portfolio/somewhereco-fashion.webp",
    "imageAlt": "SomewhereCo project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-plus-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-026",
    "platform": "shopify",
    "name": "Elavate",
    "category": "shopify",
    "href": "https://elavate.com/",
    "image": "/assets/healthcare/portfolio/elavate-collagen-supplement.webp",
    "imageAlt": "Elavate project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-027",
    "platform": "shopify",
    "name": "Ayu Sunless",
    "category": "Shopify",
    "href": "https://www.ayusunless.com/",
    "image": "/assets/our-work/projects/ayu-sunless.webp",
    "imageAlt": "Ayu Sunless project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-028",
    "platform": "wordpress",
    "name": "The Huddle Sports Grill",
    "category": "WordPress (95+ Page Speed Score)",
    "href": "https://thehuddlesportsgrill.com/",
    "image": "/assets/our-work/projects/the-huddle-sports-grill.webp",
    "imageAlt": "The Huddle Sports Grill project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-029",
    "platform": "wordpress",
    "name": "Totum",
    "category": "WordPress",
    "href": "https://totum.ca/",
    "image": "/assets/our-work/projects/totum.webp",
    "imageAlt": "Totum project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-030",
    "platform": "shopify",
    "name": "Capri Bikes",
    "category": "shopify",
    "href": "https://capribikes.com/",
    "image": "/assets/our-work/projects/capri-bikes.webp",
    "imageAlt": "Capri Bikes project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-031",
    "platform": "shopify",
    "name": "Sculpt Neon",
    "category": "shopifyplus",
    "href": "https://sculptneonsigns.com/",
    "image": "/assets/our-work/projects/sculpt-neon.webp",
    "imageAlt": "Sculpt Neon project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-plus-white.svg",
      "width": 113,
      "height": 27
    }
  },
  {
    "id": "project-032",
    "platform": "shopify",
    "name": "Conserving Beauty",
    "category": "shopify",
    "href": "https://www.conservingbeauty.com/",
    "image": "/assets/beauty-cosmetics/portfolio/conserving-beauty-products.webp",
    "imageAlt": "Conserving Beauty project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-033",
    "platform": "wordpress",
    "name": "Donj Jewellery",
    "category": "WordPress + Wocommerce",
    "href": "https://donjjewellery.com/",
    "image": "/assets/fashion/portfolio/donj-jewellery.webp",
    "imageAlt": "Donj Jewellery project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-034",
    "platform": "wordpress",
    "name": "brilliantpetcare",
    "category": "WordPress + Wocommerce",
    "href": "https://brilliantpetcare.com/",
    "image": "/assets/our-work/projects/brilliantpetcare.webp",
    "imageAlt": "brilliantpetcare project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-035",
    "platform": "shopify",
    "name": "Js Associates",
    "category": "shopifyplus",
    "href": "https://shop.jsassociates.com/",
    "image": "/assets/our-work/projects/js-associates.webp",
    "imageAlt": "Js Associates project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-plus-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-036",
    "platform": "shopify",
    "name": "Try Nokt",
    "category": "shopify",
    "href": "https://trynokt.com/",
    "image": "/assets/our-work/projects/try-nokt.webp",
    "imageAlt": "Try Nokt project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-037",
    "platform": "shopify",
    "name": "Cool Flags",
    "category": "shopify",
    "href": "https://coolflags.com/",
    "image": "/assets/our-work/projects/cool-flags.webp",
    "imageAlt": "Cool Flags project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-038",
    "platform": "wordpress",
    "name": "Annacopping",
    "category": "Elementor + WordPress",
    "href": "https://annacopping.com/",
    "image": "/assets/our-work/projects/annacopping.webp",
    "imageAlt": "Annacopping project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-039",
    "platform": "wordpress",
    "name": "Fitzpatrick Hotels NYC",
    "category": "WordPress",
    "href": "https://www.fitzpatrickhotels.com/",
    "image": "/assets/our-work/projects/fitzpatrick-hotels-nyc.webp",
    "imageAlt": "Fitzpatrick Hotels NYC project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-040",
    "platform": "shopify",
    "name": "Capital Tiles",
    "category": "shopify",
    "href": "https://capitaltiles.ca/",
    "image": "/assets/our-work/projects/capital-tiles.webp",
    "imageAlt": "Capital Tiles project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-041",
    "platform": "shopify",
    "name": "Adriatic",
    "category": "shopify",
    "href": "https://adriatic.com.au/",
    "image": "/assets/our-work/projects/adriatic.webp",
    "imageAlt": "Adriatic project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-042",
    "platform": "shopify",
    "name": "Blackopalbeauty",
    "category": "shopify",
    "href": "https://blackopalbeauty.com/",
    "image": "/assets/our-work/projects/blackopalbeauty.webp",
    "imageAlt": "Blackopalbeauty project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-043",
    "platform": "apps",
    "name": "Bombay Shirt Company",
    "category": "React Native",
    "href": null,
    "image": "/assets/fashion/portfolio/bombay-shirt-company-fashion.webp",
    "imageAlt": "Bombay Shirt Company project preview",
    "appLinks": [
      {
        "label": "Android App",
        "href": "https://play.google.com/store/apps/details?id=com.coffye.ndufju",
        "icon": "/assets/our-work/platforms/android-icon.svg"
      },
      {
        "label": "IOS App",
        "href": "https://apps.apple.com/in/app/bombay-shirt-company/id6444273632",
        "icon": "/assets/our-work/platforms/app-store-ios.svg"
      }
    ]
  },
  {
    "id": "project-044",
    "platform": "apps",
    "name": "Renee Cosmetics",
    "category": "React Native",
    "href": null,
    "image": "/assets/our-work/projects/renee.webp",
    "imageAlt": "Renee Cosmetics project preview",
    "appLinks": [
      {
        "label": "Android App",
        "href": "https://play.google.com/store/apps/details?id=com.coffye.sbzuof",
        "icon": "/assets/our-work/platforms/android-icon.svg"
      },
      {
        "label": "IOS App",
        "href": "https://apps.apple.com/in/app/renee-cosmetics/id6449245534",
        "icon": "/assets/our-work/platforms/app-store-ios.svg"
      }
    ]
  },
  {
    "id": "project-045",
    "platform": "apps",
    "name": "Supertails",
    "category": "React Native",
    "href": null,
    "image": "/assets/pet-industry/portfolio/supertails-dog.webp",
    "imageAlt": "Supertails project preview",
    "appLinks": [
      {
        "label": "Android App",
        "href": "https://play.google.com/store/apps/details?id=com.coffye.dqiabm",
        "icon": "/assets/our-work/platforms/android-icon.svg"
      },
      {
        "label": "IOS App",
        "href": "https://apps.apple.com/in/app/supertails-online-pet-shop/id1670908360",
        "icon": "/assets/our-work/platforms/app-store-ios.svg"
      }
    ]
  },
  {
    "id": "project-046",
    "platform": "shopify",
    "name": "Pagerie",
    "category": "shopify",
    "href": "https://www.pagerie.com/",
    "image": "/assets/pet-industry/portfolio/pagerie-dog-accessories.webp",
    "imageAlt": "Pagerie project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-047",
    "platform": "shopify",
    "name": "Baked by Noon",
    "category": "shopify",
    "href": "https://bakedbynoon.com/",
    "image": "/assets/our-work/projects/baked-by-noon.webp",
    "imageAlt": "Baked by Noon project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-048",
    "platform": "shopify",
    "name": "Nyam Good Sauces",
    "category": "shopify",
    "href": "https://nyamgoodsauceco.com/",
    "image": "/assets/our-work/projects/nyam-good-sauces.webp",
    "imageAlt": "Nyam Good Sauces project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-049",
    "platform": "shopify",
    "name": "Daniel Walters Eyewear",
    "category": "BigCommerce to shopify Migration",
    "href": "https://www.danielwalters.com/",
    "image": "/assets/our-work/projects/daniel-walters-eyewear.webp",
    "imageAlt": "Daniel Walters Eyewear project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-050",
    "platform": "wordpress",
    "name": "My Mortgage Planner",
    "category": "WordPress (91+ Page Speed Score)",
    "href": "https://mymortgageplanner.co.uk/",
    "image": "/assets/our-work/projects/my-mortgage-planner.webp",
    "imageAlt": "My Mortgage Planner project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-051",
    "platform": "wordpress",
    "name": "Piki Poki",
    "category": "Elementor + WordPress",
    "href": "https://zabavapikipoki.si/",
    "image": "/assets/our-work/projects/piki-poki.webp",
    "imageAlt": "Piki Poki project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-052",
    "platform": "magento",
    "name": "Maxi Cosi",
    "category": "magento",
    "href": "https://www.maxi-cosi.com.au/",
    "image": "/assets/our-work/projects/maxi-cosi.webp",
    "imageAlt": "Maxi Cosi project preview",
    "platformMark": {
      "src": "/assets/platforms/magento-white.svg",
      "width": 105,
      "height": 30
    }
  },
  {
    "id": "project-053",
    "platform": "shopify",
    "name": "Sims Direct",
    "category": "shopify+laravel",
    "href": "https://simsdirect.com.au/",
    "image": "/assets/our-work/projects/sims-direct.webp",
    "imageAlt": "Sims Direct project preview",
    "platformMark": {
      "src": "/assets/our-work/platforms/shopify-laravel-img.svg",
      "width": 204,
      "height": 26
    }
  },
  {
    "id": "project-054",
    "platform": "shopify",
    "name": "Chinuki",
    "category": "shopify",
    "href": "https://www.chinuki.de/",
    "image": "/assets/food-beverages/portfolio/chinuki-meals.webp",
    "imageAlt": "Chinuki project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-055",
    "platform": "shopify",
    "name": "Royce Chocolate",
    "category": "shopify",
    "href": "https://royceindia.com/",
    "image": "/assets/our-work/projects/royce-chocolate.webp",
    "imageAlt": "Royce Chocolate project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-056",
    "platform": "wordpress",
    "name": "Future Range",
    "category": "WordPress (89+ Plus Page Speed Score)",
    "href": "https://futurerange.ie/",
    "image": "/assets/our-work/projects/future-range.webp",
    "imageAlt": "Future Range project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-057",
    "platform": "wordpress",
    "name": "Banchharams",
    "category": "WordPress",
    "href": "https://banchharams.com/",
    "image": "/assets/our-work/projects/banchharams.webp",
    "imageAlt": "Banchharams project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-058",
    "platform": "wordpress",
    "name": "Motion",
    "category": "WordPress",
    "href": "https://motion.ie//",
    "image": "/assets/our-work/projects/motion.webp",
    "imageAlt": "Motion project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-059",
    "platform": "bigCommerce",
    "name": "Maple Syrup",
    "category": "bigcommerce",
    "href": "https://www.maplesyrupworld.com/",
    "image": "/assets/our-work/projects/maple-syrup.webp",
    "imageAlt": "Maple Syrup project preview",
    "platformMark": {
      "src": "/assets/our-work/platforms/big-commerce-icon.svg",
      "width": 133,
      "height": 29
    }
  },
  {
    "id": "project-060",
    "platform": "bigCommerce",
    "name": "Knobs",
    "category": "bigcommerce",
    "href": "https://www.knobs.co/",
    "image": "/assets/our-work/projects/knobs.webp",
    "imageAlt": "Knobs project preview",
    "platformMark": {
      "src": "/assets/our-work/platforms/big-commerce-icon.svg",
      "width": 133,
      "height": 29
    }
  },
  {
    "id": "project-061",
    "platform": "magento",
    "name": "Caves Santa Cruz",
    "category": "magento",
    "href": "https://www.cavessantacruz.com.br/",
    "image": "/assets/our-work/projects/caves-santa-cruz.webp",
    "imageAlt": "Caves Santa Cruz project preview",
    "platformMark": {
      "src": "/assets/platforms/magento-white.svg",
      "width": 105,
      "height": 30
    }
  },
  {
    "id": "project-062",
    "platform": "shopify",
    "name": "Comfort First",
    "category": "shopify",
    "href": "https://www.comfortfirst.au/",
    "image": "/assets/our-work/projects/comfort-first.webp",
    "imageAlt": "Comfort First project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-063",
    "platform": "shopify",
    "name": "Joburg Meats",
    "category": "shopify",
    "href": "https://joburgmeats.com/",
    "image": "/assets/food-beverages/portfolio/joburg-meats.webp",
    "imageAlt": "Joburg Meats project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-064",
    "platform": "shopify",
    "name": "11 11",
    "category": "shopify",
    "href": "https://11-11.in/",
    "image": "/assets/our-work/projects/11-11.webp",
    "imageAlt": "11 11 project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-065",
    "platform": "wordpress",
    "name": "Kvaser",
    "category": "Wordpress + Woocommerce",
    "href": "https://www.kvaser.com/",
    "image": "/assets/our-work/projects/kvaser.webp",
    "imageAlt": "Kvaser project preview",
    "platformMark": {
      "src": "/assets/our-work/platforms/woocommerce-img.svg",
      "width": 66,
      "height": 39
    }
  },
  {
    "id": "project-066",
    "platform": "wordpress",
    "name": "The Dark Essence",
    "category": "Elementor + WordPress",
    "href": "https://thedarkessence.com/",
    "image": "/assets/our-work/projects/the-dark-essence.webp",
    "imageAlt": "The Dark Essence project preview",
    "platformMark": {
      "src": "/assets/our-work/platforms/woocommerce-img.svg",
      "width": 66,
      "height": 39
    }
  },
  {
    "id": "project-067",
    "platform": "magento",
    "name": "City Circuit",
    "category": "magento",
    "href": "https://circuitcity.com/",
    "image": "/assets/our-work/projects/city-circuit.webp",
    "imageAlt": "City Circuit project preview",
    "platformMark": {
      "src": "/assets/platforms/magento-white.svg",
      "width": 105,
      "height": 30
    }
  },
  {
    "id": "project-068",
    "platform": "bigCommerce",
    "name": "Country & Stable",
    "category": "bigcommerce",
    "href": "https://www.countryandstable.com/",
    "image": "/assets/our-work/projects/country-and-stable.webp",
    "imageAlt": "Country & Stable project preview",
    "platformMark": {
      "src": "/assets/our-work/platforms/big-commerce-icon.svg",
      "width": 133,
      "height": 29
    }
  },
  {
    "id": "project-069",
    "platform": "bigCommerce",
    "name": "Jolie Perfume",
    "category": "bigcommerce",
    "href": "https://jolieprofumerie.net/",
    "image": "/assets/our-work/projects/jolie-perfume.webp",
    "imageAlt": "Jolie Perfume project preview",
    "platformMark": {
      "src": "/assets/our-work/platforms/big-commerce-icon.svg",
      "width": 133,
      "height": 29
    }
  },
  {
    "id": "project-070",
    "platform": "apps",
    "name": "Utsah",
    "category": "Flutter",
    "href": null,
    "image": "/assets/our-work/projects/utsah.webp",
    "imageAlt": "Utsah project preview",
    "appLinks": [
      {
        "label": "Android App",
        "href": "https://play.google.com/store/apps/details?id=com.utsah&hl=en_IN",
        "icon": "/assets/our-work/platforms/android-icon.svg"
      },
      {
        "label": "IOS App",
        "href": "https://apps.apple.com/in/app/utsah/id6478540483",
        "icon": "/assets/our-work/platforms/app-store-ios.svg"
      }
    ]
  },
  {
    "id": "project-071",
    "platform": "apps",
    "name": "Llama – An App by CWRB",
    "category": "Flutter",
    "href": null,
    "image": "/assets/our-work/projects/llama-an-app-by-cwrb.webp",
    "imageAlt": "Llama – An App by CWRB project preview",
    "appLinks": [
      {
        "label": "Android App",
        "href": "https://play.google.com/store/apps/details?id=com.cwrb.app&hl=en_IN",
        "icon": "/assets/our-work/platforms/android-icon.svg"
      },
      {
        "label": "IOS App",
        "href": "https://apps.apple.com/in/app/llama-an-app-by-cwrb/id1635297358",
        "icon": "/assets/our-work/platforms/app-store-ios.svg"
      }
    ]
  },
  {
    "id": "project-072",
    "platform": "apps",
    "name": "Tap Your Talents",
    "category": "Flutter",
    "href": null,
    "image": "/assets/our-work/projects/tap-your-talents.webp",
    "imageAlt": "Tap Your Talents project preview",
    "appLinks": [
      {
        "label": "Android App",
        "href": "https://play.google.com/store/apps/details?id=com.tapyourtalents",
        "icon": "/assets/our-work/platforms/android-icon.svg"
      },
      {
        "label": "IOS App",
        "href": "https://apps.apple.com/in/app/tap-your-talents/id6499201102",
        "icon": "/assets/our-work/platforms/app-store-ios.svg"
      }
    ]
  },
  {
    "id": "project-073",
    "platform": "shopify",
    "name": "Luxxi nails",
    "category": "shopify",
    "href": "https://luxxinails.com/",
    "image": "/assets/beauty-cosmetics/portfolio/luxxi-nails.webp",
    "imageAlt": "Luxxi nails project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-074",
    "platform": "shopify",
    "name": "Nufyx",
    "category": "shopify",
    "href": "https://nufyx.com/",
    "image": "/assets/healthcare/portfolio/nufyx-protein-products.webp",
    "imageAlt": "Nufyx project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-075",
    "platform": "shopify",
    "name": "Parts Prime",
    "category": "shopify",
    "href": " https://partsprime.ca/",
    "image": "/assets/our-work/projects/parts-prime.webp",
    "imageAlt": "Parts Prime project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-076",
    "platform": "wordpress",
    "name": "BMF Baking Company",
    "category": "WordPress",
    "href": "https://www.bmfbaking.com/",
    "image": "/assets/our-work/projects/bmf-baking-company.webp",
    "imageAlt": "BMF Baking Company project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-077",
    "platform": "wordpress",
    "name": "TFI Marine",
    "category": "WordPress",
    "href": "https://www.tfimarine.com/",
    "image": "/assets/our-work/projects/tfi-marine.webp",
    "imageAlt": "TFI Marine project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-078",
    "platform": "wordpress",
    "name": "Cyber Cert Labs",
    "category": "WordPress",
    "href": "https://www.cybercertlabs.com/",
    "image": "/assets/our-work/projects/cyber-cert-labs.webp",
    "imageAlt": "Cyber Cert Labs project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-079",
    "platform": "shopify",
    "name": "Zuluz Skincare",
    "category": "shopify",
    "href": "https://www.zuluzskincare.com.au/",
    "image": "/assets/our-work/projects/zuluz-skincare.webp",
    "imageAlt": "Zuluz Skincare project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-080",
    "platform": "shopify",
    "name": "Wine Moments",
    "category": "shopify",
    "href": "https://winemoments.com/",
    "image": "/assets/food-beverages/portfolio/wine-moments.webp",
    "imageAlt": "Wine Moments project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-081",
    "platform": "shopify",
    "name": "Bonbon Lingerie",
    "category": "shopify",
    "href": "https://bonbonlingerie.com/",
    "image": "/assets/our-work/projects/bonbon-lingerie.webp",
    "imageAlt": "Bonbon Lingerie project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-082",
    "platform": "wordpress",
    "name": "Valents",
    "category": "WordPress",
    "href": "https://wearvalents.com/",
    "image": "/assets/our-work/projects/valents.webp",
    "imageAlt": "Valents project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-083",
    "platform": "wordpress",
    "name": "Gama Professional",
    "category": "Elementor + WordPress",
    "href": "https://www.gamaprofessional.us/",
    "image": "/assets/our-work/projects/gama-professional.webp",
    "imageAlt": "Gama Professional project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-084",
    "platform": "wordpress",
    "name": "Les Etoiles",
    "category": "WordPress",
    "href": "https://louer-lesetoiles.ca/",
    "image": "/assets/our-work/projects/les-etoiles.webp",
    "imageAlt": "Les Etoiles project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-085",
    "platform": "shopify",
    "name": "Pop Coin",
    "category": "shopify",
    "href": "https://popclub.co/",
    "image": "/assets/our-work/projects/pop-coin.webp",
    "imageAlt": "Pop Coin project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-086",
    "platform": "shopify",
    "name": "Eco Soul",
    "category": "shopify",
    "href": "https://www.ecosoulhome.com/",
    "image": "/assets/our-work/projects/eco-soul.webp",
    "imageAlt": "Eco Soul project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-087",
    "platform": "shopify",
    "name": "Supertails",
    "category": "shopify",
    "href": "https://supertails.com/",
    "image": "/assets/pet-industry/portfolio/supertails-dog.webp",
    "imageAlt": "Supertails project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-088",
    "platform": "wordpress",
    "name": "Get Sunsights",
    "category": "WordPress",
    "href": "https://www.getsunsights.com/",
    "image": "/assets/our-work/projects/get-sunsights.webp",
    "imageAlt": "Get Sunsights project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-089",
    "platform": "wordpress",
    "name": "Dais",
    "category": "WordPress",
    "href": "https://dais.com.au/",
    "image": "/assets/our-work/projects/dais.webp",
    "imageAlt": "Dais project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-090",
    "platform": "wordpress",
    "name": "MCL Architecture",
    "category": "WordPress",
    "href": "https://mcl-architecture.com/",
    "image": "/assets/our-work/projects/mcl-architecture.webp",
    "imageAlt": "MCL Architecture project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-091",
    "platform": "shopify",
    "name": "Balticborn",
    "category": "shopify",
    "href": "https://balticborn.com/",
    "image": "/assets/our-work/projects/balticborn.webp",
    "imageAlt": "Balticborn project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-092",
    "platform": "shopify",
    "name": "TEGO Fit",
    "category": "shopify",
    "href": "https://tego.fit/",
    "image": "/assets/fashion/portfolio/tego-fit-activewear.webp",
    "imageAlt": "TEGO Fit project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-093",
    "platform": "shopify",
    "name": "Kentaur Australia",
    "category": "shopify",
    "href": "https://kentauraustralia.com/",
    "image": "/assets/pet-industry/portfolio/kentaur-australia-equestrian.webp",
    "imageAlt": "Kentaur Australia project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-094",
    "platform": "apps",
    "name": "GNC India",
    "category": "React Native",
    "href": null,
    "image": "/assets/our-work/projects/gnc-india.webp",
    "imageAlt": "GNC India project preview",
    "appLinks": [
      {
        "label": "Android App",
        "href": "https://play.google.com/store/apps/details?id=in.guardiannewapp",
        "icon": "/assets/our-work/platforms/android-icon.svg"
      },
      {
        "label": "IOS App",
        "href": "https://apps.apple.com/in/app/gnc-india/id6473276654",
        "icon": "/assets/our-work/platforms/app-store-ios.svg"
      }
    ]
  },
  {
    "id": "project-095",
    "platform": "apps",
    "name": "Sri Sri Tattva",
    "category": "React Native",
    "href": null,
    "image": "/assets/our-work/projects/sri-sri-tattva.webp",
    "imageAlt": "Sri Sri Tattva project preview",
    "appLinks": [
      {
        "label": "Android App",
        "href": "https://play.google.com/store/apps/details?id=com.apptuse.app713744883",
        "icon": "/assets/our-work/platforms/android-icon.svg"
      },
      {
        "label": "IOS App",
        "href": "https://apps.apple.com/in/app/sri-sri-tattva/id1497876885",
        "icon": "/assets/our-work/platforms/app-store-ios.svg"
      }
    ]
  },
  {
    "id": "project-096",
    "platform": "apps",
    "name": "Fashor",
    "category": "React Native",
    "href": null,
    "image": "/assets/our-work/projects/fashor.webp",
    "imageAlt": "Fashor project preview",
    "appLinks": [
      {
        "label": "Android App",
        "href": "https://play.google.com/store/apps/details?id=co.tapcart.app.id_INu2PrmT53",
        "icon": "/assets/our-work/platforms/android-icon.svg"
      },
      {
        "label": "IOS App",
        "href": "https://apps.apple.com/in/app/fashor/id1458834104",
        "icon": "/assets/our-work/platforms/app-store-ios.svg"
      }
    ]
  },
  {
    "id": "project-097",
    "platform": "shopify",
    "name": "Raen",
    "category": "shopifyplus",
    "href": "https://raen.com/",
    "image": "/assets/fashion/portfolio/raen-eyewear-fashion.webp",
    "imageAlt": "Raen project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-plus-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-098",
    "platform": "shopify",
    "name": "Paw Labs",
    "category": "shopify",
    "href": "https://pawlabs.co/",
    "image": "/assets/pet-industry/portfolio/paw-labs-pets.webp",
    "imageAlt": "Paw Labs project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-099",
    "platform": "shopify",
    "name": "My Pet Frame",
    "category": "shopify",
    "href": "https://mypetframe.co.uk/",
    "image": "/assets/pet-industry/portfolio/my-pet-frame-dogs.webp",
    "imageAlt": "My Pet Frame project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-100",
    "platform": "wordpress",
    "name": "Lipari Design",
    "category": "WordPress",
    "href": "https://liparidesign.ca/",
    "image": "/assets/our-work/projects/lipari-design.webp",
    "imageAlt": "Lipari Design project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-101",
    "platform": "wordpress",
    "name": "Nexventur",
    "category": "WordPress",
    "href": "https://www.nexventur.com/",
    "image": "/assets/our-work/projects/nexventur.webp",
    "imageAlt": "Nexventur project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  },
  {
    "id": "project-102",
    "platform": "shopify",
    "name": "Neater Pets",
    "category": "shopify",
    "href": "https://neaterpets.com/",
    "image": "/assets/pet-industry/portfolio/neater-pets-dog.webp",
    "imageAlt": "Neater Pets project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-103",
    "platform": "shopify",
    "name": "Nordic Nutrition",
    "category": "shopify",
    "href": "https://nordicnutrition.ae/",
    "image": "/assets/healthcare/portfolio/nordic-nutrition-supplements.webp",
    "imageAlt": "Nordic Nutrition project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-104",
    "platform": "shopify",
    "name": "Turmeric Vitality",
    "category": "shopify",
    "href": "https://turmericvitality.co.uk/",
    "image": "/assets/healthcare/portfolio/turmeric-vitality-supplement.webp",
    "imageAlt": "Turmeric Vitality project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-105",
    "platform": "apps",
    "name": "ThriveCo",
    "category": "React Native",
    "href": null,
    "image": "/assets/our-work/projects/thriveco.webp",
    "imageAlt": "ThriveCo project preview",
    "appLinks": [
      {
        "label": "Android App",
        "href": "https://play.google.com/store/apps/details?id=in.thriveco",
        "icon": "/assets/our-work/platforms/android-icon.svg"
      },
      {
        "label": "IOS App",
        "href": "https://apps.apple.com/in/app/thriveco/id6479603171",
        "icon": "/assets/our-work/platforms/app-store-ios.svg"
      }
    ]
  },
  {
    "id": "project-106",
    "platform": "apps",
    "name": "Vilvah",
    "category": "React Native",
    "href": null,
    "image": "/assets/our-work/projects/vilvah.webp",
    "imageAlt": "Vilvah project preview",
    "appLinks": [
      {
        "label": "Android App",
        "href": "https://apps.apple.com/in/app/thriveco/id1635766051",
        "icon": "/assets/our-work/platforms/android-icon.svg"
      },
      {
        "label": "IOS App",
        "href": "https://apps.apple.com/us/app/vilvah-store-skin-hair-care/id1635766051",
        "icon": "/assets/our-work/platforms/app-store-ios.svg"
      }
    ]
  },
  {
    "id": "project-107",
    "platform": "apps",
    "name": "Rentastic",
    "category": "React Native",
    "href": null,
    "image": "/assets/our-work/projects/rentastic.webp",
    "imageAlt": "Rentastic project preview",
    "appLinks": [
      {
        "label": "IOS App",
        "href": "https://apps.apple.com/us/app/rentastic-accounting-tax/id1510019160",
        "icon": "/assets/our-work/platforms/app-store-ios.svg"
      }
    ]
  },
  {
    "id": "project-108",
    "platform": "shopify",
    "name": "Health co",
    "category": "shopify",
    "href": "https://www.healthco.com.au/",
    "image": "/assets/healthcare/portfolio/health-co-protein-powder.webp",
    "imageAlt": "Health co project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-109",
    "platform": "shopify",
    "name": "Twojeys",
    "category": "shopify",
    "href": "https://twojeys.com/",
    "image": "/assets/our-work/projects/twojeys.webp",
    "imageAlt": "Twojeys project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-110",
    "platform": "shopify",
    "name": "Mygeeni",
    "category": "shopify",
    "href": "https://mygeeni.com/",
    "image": "/assets/our-work/projects/mygeeni.webp",
    "imageAlt": "Mygeeni project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-111",
    "platform": "magento",
    "name": "Chers",
    "category": "magento",
    "href": "https://chers.com/",
    "image": "/assets/our-work/projects/chers.webp",
    "imageAlt": "Chers project preview",
    "platformMark": {
      "src": "/assets/platforms/magento-white.svg",
      "width": 105,
      "height": 30
    }
  },
  {
    "id": "project-112",
    "platform": "magento",
    "name": "United Cheer Apparel",
    "category": "magento",
    "href": "https://unitedcheerapparel.com/",
    "image": "/assets/our-work/projects/united-cheer-apparel.webp",
    "imageAlt": "United Cheer Apparel project preview",
    "platformMark": {
      "src": "/assets/platforms/magento-white.svg",
      "width": 105,
      "height": 30
    }
  },
  {
    "id": "project-113",
    "platform": "shopify",
    "name": "Lash Affair",
    "category": "shopify",
    "href": "https://lashaffair.com/",
    "image": "/assets/our-work/projects/lash-affair.webp",
    "imageAlt": "Lash Affair project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-114",
    "platform": "shopify",
    "name": "Coco Dry",
    "category": "shopify",
    "href": "https://www.cocodry.co/",
    "image": "/assets/our-work/projects/coco-dry.webp",
    "imageAlt": "Coco Dry project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-115",
    "platform": "apps",
    "name": "Water Butlers",
    "category": "Flutter",
    "href": null,
    "image": "/assets/our-work/projects/water-butlers.webp",
    "imageAlt": "Water Butlers project preview",
    "appLinks": [
      {
        "label": "Android App",
        "href": "https://play.google.com/store/apps/details?id=com.waterbutlers&hl=en_IN",
        "icon": "/assets/our-work/platforms/android-icon.svg"
      }
    ]
  },
  {
    "id": "project-116",
    "platform": "shopify",
    "name": "Tropical Oasis",
    "category": "shopify",
    "href": "https://tropicaloasis.com/",
    "image": "/assets/our-work/projects/tropical-oasis.webp",
    "imageAlt": "Tropical Oasis project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-117",
    "platform": "shopify",
    "name": "Nested Naturals",
    "category": "shopify",
    "href": "https://nestednaturals.com/",
    "image": "/assets/our-work/projects/nested-naturals.webp",
    "imageAlt": "Nested Naturals project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-118",
    "platform": "shopify",
    "name": "Weardiop",
    "category": "shopify",
    "href": "https://weardiop.com/",
    "image": "/assets/our-work/projects/weardiop.webp",
    "imageAlt": "Weardiop project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-119",
    "platform": "shopify",
    "name": "Lace Laboratory",
    "category": "shopify",
    "href": "https://lacelaboratory.com/",
    "image": "/assets/our-work/projects/lace-laboratory.webp",
    "imageAlt": "Lace Laboratory project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-120",
    "platform": "shopify",
    "name": "Feners",
    "category": "shopify",
    "href": "https://feners.com/",
    "image": "/assets/our-work/projects/feners.webp",
    "imageAlt": "Feners project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-121",
    "platform": "shopify",
    "name": "Projectlobster",
    "category": "shopify",
    "href": "https://projectlobster.com/en",
    "image": "/assets/our-work/projects/projectlobster.webp",
    "imageAlt": "Projectlobster project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-122",
    "platform": "shopify",
    "name": "Pedromiralles",
    "category": "shopify",
    "href": "https://pedromiralles.com/us/en/",
    "image": "/assets/our-work/projects/pedromiralles.webp",
    "imageAlt": "Pedromiralles project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-123",
    "platform": "shopify",
    "name": "Purra Performance",
    "category": "shopify",
    "href": "https://purraperformance.com/",
    "image": "/assets/our-work/projects/purra-performance.webp",
    "imageAlt": "Purra Performance project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-124",
    "platform": "shopify",
    "name": "Iridescent Sea",
    "category": "shopify",
    "href": "https://iridescentsea.com.au/",
    "image": "/assets/our-work/projects/iridescent-sea.webp",
    "imageAlt": "Iridescent Sea project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-125",
    "platform": "shopify",
    "name": "Boutique Jacques",
    "category": "shopify",
    "href": "https://www.boutiquejacques.com/",
    "image": "/assets/our-work/projects/boutique-jacques.webp",
    "imageAlt": "Boutique Jacques project preview",
    "platformMark": {
      "src": "/assets/platforms/shopify-white.svg",
      "width": 89,
      "height": 26
    }
  },
  {
    "id": "project-126",
    "platform": "wordpress",
    "name": "Quite Events",
    "category": "WordPress",
    "href": "https://www.quietevents.com/",
    "image": "/assets/our-work/projects/quite-events.webp",
    "imageAlt": "Quite Events project preview",
    "platformMark": {
      "src": "/assets/platforms/wordpress-woocommerce-white.svg",
      "width": 113,
      "height": 29
    }
  }
] satisfies readonly WorkProject[];
