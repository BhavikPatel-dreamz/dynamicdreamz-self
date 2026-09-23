import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";
import { siteConfig } from "@/data/site";

export type ShopifyThemeCustomizationStat = {
  value: string;
  label: string;
};

export type ShopifyThemeCustomizationServiceItem = {
  title: string;
  description: string;
  iconName: "selection" | "branding" | "sections" | "pdp" | "integrations" | "performance";
};

export type ShopifyThemeCustomizationThemeItem = {
  title: string;
  image: string;
  alt: string;
  href: string;
  ctaText: string;
};

export const shopifyThemeCustomizationHero = {
  eyebrowSpans: ["Shopify Platinum Partner", "Theme Customization"] as const,
  title: "Shopify Theme Customization Services",
  paragraphs: [
    "Already purchased a Shopify theme but need it to feel like your brand? We customize Shopify themes around your colors, typography, imagery, products, layouts and functionality. If you have not chosen a theme yet, we can help shortlist the right one, create branded mockups with your real content, and then build the approved experience into Shopify.",
  ] as const,
  cta: "Customize My Shopify Theme",
  ctaHref: siteConfig.quotePath,
  secondaryCta: {
    label: "Browse Themes We Customize",
    href: "#customized-theme",
  },
  video: "/assets/home/why-dynamic-dreamz.mp4",
  badges: [
    {
      alt: "Dynamic Dreamz - Shopify Platinum Partner",
      href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
      icon: "/assets/proof/shopify-platinum-partner.svg",
      height: 44,
      width: 136,
    },
    {
      alt: "Dynamic Dreamz on Clutch — 4.9 rating",
      href: "https://clutch.co/profile/dynamic-dreamz",
      icon: "/assets/proof/clutch-rating.svg",
      height: 44,
      width: 111,
    },
    {
      alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
      href: "https://www.trustpilot.com/review/dynamicdreamz.com",
      icon: "/assets/proof/trustpilot-rating.svg",
      height: 50,
      width: 148,
    },
    {
      alt: "Dynamic Dreamz — Upwork Top Rated Plus",
      href: "https://www.upwork.com/ag/dynamicdreamz/",
      icon: "/assets/proof/upwork-top-rated-plus.svg",
      height: 54,
      width: 126,
    },
  ] as const,
};

export const shopifyThemeCustomizationBrands = {
  slug: "shopify-theme-customization",
  heading: "Trusted by Leading Brands",
  ariaLabel: "Trusted by Leading Brands",
  items: [
    {
      src: "/assets/clients/supertails.svg",
      alt: "Supper Tails Logo",
      width: 164,
      height: 41,
      href: "https://supertails.com/",
    },
    {
      src: "/assets/clients/eleven-eleven.svg",
      alt: "Eleven Eleven",
      width: 145,
      height: 20,
      href: "https://11-11.in/",
    },
    {
      src: "/assets/clients/bella-vita.svg",
      alt: "bellavita logo",
      width: 166,
      height: 24,
      href: "https://bellavitaorganic.com/",
    },
    {
      src: "/assets/clients/bombay-shirt-company.svg",
      alt: "Bombay Shirt Company",
      width: 204,
      height: 26,
      href: "https://www.bombayshirts.com/",
    },
    {
      src: "/assets/clients/popclub.svg",
      alt: "Popclub",
      width: 65,
      height: 41,
      href: "https://popclub.co/",
    },
    {
      src: "/assets/clients/sri-sri-tattva.svg",
      alt: "SriSri Tattva Logo",
      width: 106,
      height: 40,
      href: "https://www.srisritattva.com/",
    },
    {
      src: "/assets/clients/tropicfeel.svg",
      alt: "tropicfeel logo",
      width: 150,
      height: 32,
      href: "https://shop.tropicfeel.com/",
    },
    {
      src: "/assets/clients/renee.svg",
      alt: "Renee logo",
      width: 93,
      height: 30,
      href: "https://www.reneecosmetics.in/",
    },
    {
      src: "/assets/clients/royce-chocolate.svg",
      alt: "Royce chocolate logo",
      width: 132,
      height: 38,
      href: "https://royceindia.com/",
    },
    {
      src: "/assets/clients/tego.svg",
      alt: "tego logo",
      width: 101,
      height: 40,
      href: "https://tego.fit/",
    },
    {
      src: "/assets/clients/nekter-colored.svg",
      alt: "nekter-colored",
      width: 66,
      height: 64,
      href: "https://www.nekterjuicebar.com/",
    },
    {
      src: "/assets/clients/rare-rabbit.svg",
      alt: "Rare Rabbit Logo",
      width: 122,
      height: 84,
      href: "https://thehouseofrare.com/",
    },
  ] as const,
};

export const shopifyThemeCustomizationServices = {
  eyebrow: "Shopify Theme Customization",
  heading: "Our Shopify Theme Customization Services",
  description:
    "Whether you need a few branding changes or a broader storefront redesign, we customize the selected Shopify theme without adding unnecessary complexity.",
  items: [
    {
      title: "Theme Selection & Setup",
      description:
        "Need help choosing? We compare themes against your catalog, content, desired features and design references, then configure the selected theme.",
      iconName: "selection" as const,
    },
    {
      title: "Branding & Design Customization",
      description:
        "Apply your logo, colors, typography, imagery, visual hierarchy and brand guidelines so the purchased theme no longer feels generic.",
      iconName: "branding" as const,
    },
    {
      title: "Custom Sections & Layouts",
      description:
        "Build reusable Shopify sections, blocks, landing-page modules and content layouts when the theme's default structure is not enough.",
      iconName: "sections" as const,
    },
    {
      title: "PDP, Collection & Navigation UX",
      description:
        "Customize product pages, collection pages, product cards, filters, metafields, swatches, menus, merchandising and mobile shopping journeys.",
      iconName: "pdp" as const,
    },
    {
      title: "Features, Apps & Integrations",
      description:
        "Add functionality through theme code, app blocks and relevant integrations while keeping the storefront experience cohesive with the selected theme.",
      iconName: "integrations" as const,
    },
    {
      title: "Performance & Ongoing Support",
      description:
        "Review theme performance, unnecessary code, responsive behavior and post-launch changes. We can continue supporting the theme as your storefront evolves.",
      iconName: "performance" as const,
    },
  ] as const,
};

export const shopifyThemeCustomizationDevTeam = {
  eyebrow: "Shopify Theme Customization",
  heading: "You like the theme. We make it work for your brand.",
  description: [
    "If you have already purchased or selected a Shopify theme, you do not need to rebuild the storefront from scratch. Dynamic Dreamz can customize the theme around your branding, products, content and customer journey while keeping the theme as the development foundation.",
    "We review what the theme can already do, identify the changes that need custom development, prepare branded mockups where required, and then implement the approved experience in Shopify.",
  ] as const,
  cta: {
    label: "Discuss Your Theme Customization",
    href: siteConfig.quotePath,
  },
  items: [
    {
      title: "Match Your Branding",
      description:
        "Apply your logo, colors, typography, imagery and product presentation.",
    },
    {
      title: "Improve Layouts & UX",
      description:
        "Refine homepage, PDP, collections, navigation and mobile shopping journeys.",
    },
    {
      title: "Add Missing Functionality",
      description:
        "Extend the theme with custom sections, metafields, integrations and app-driven features.",
    },
    {
      title: "Upgrade the Theme",
      description:
        "Move from an older or limiting theme to a stronger Shopify theme while preserving your brand and content.",
    },
  ] as const,
};

export const shopifyThemeCustomizationProcess = {
  eyebrow: "Our Process",
  heading: "Shopify Theme Customization Process",
  description:
    "Already chose a theme? We customize it. Still deciding? We can help shortlist a suitable theme first. From there, the process stays simple and transparent.",
  steps: [
    {
      step: "Step 01",
      title: "Review Requirements",
      description:
        "We review your store, products, branding, reference sites, required changes and any app or integration dependencies.",
    },
    {
      step: "Step 02",
      title: "Choose or Confirm the Theme",
      description:
        "We work with your purchased theme or help shortlist a suitable Shopify theme based on your catalog, features and design goals.",
    },
    {
      step: "Step 03",
      title: "Create Branded Mockups",
      description:
        "Where design changes are needed, we show how the theme will look with your real products, colors, typography, imagery and content.",
    },
    {
      step: "Step 04",
      title: "Customize the Theme",
      description:
        "After approval, we integrate the design and required functionality using Shopify theme settings, Liquid, sections, blocks and custom code.",
    },
    {
      step: "Step 05",
      title: "QA & Optimize",
      description:
        "We test important pages and shopping flows across relevant devices and browsers and review customizations before launch.",
    },
    {
      step: "Step 06",
      title: "Launch & Support",
      description:
        "We publish the approved theme, validate the live storefront and can continue with post-launch fixes, improvements and new theme updates.",
    },
  ] as const,
};

export const shopifyThemeCustomizationApproach = {
  eyebrow: "Choose the Right Approach",
  heading: "Theme Customization vs. Custom Shopify Theme Development",
  description:
    "These are different services. This page is intentionally focused on merchants who want to adapt a selected Shopify theme rather than fund a completely bespoke storefront from scratch.",
  approaches: [
    {
      badge: "Best fit for this service",
      title: "Shopify Theme Customization",
      description:
        "Use an existing free or premium Shopify theme as the foundation and customize what your brand or customer journey needs.",
      points: [
        "You already purchased or selected a theme",
        "The base layouts/features are largely suitable",
        "You need branding, layout or feature changes",
        "You want a faster, more cost-efficient path than a ground-up theme",
      ] as const,
      isHighlighted: true,
    },
    {
      badge: "Different requirement",
      title: "Custom Theme Development",
      description:
        "Build a more bespoke storefront architecture when a pre-built theme cannot reasonably support the desired design or functionality.",
      points: [
        "Highly unique UX or interaction system",
        "Extensive custom templates and components",
        "Design is driving the technical architecture",
        "More development depth and budget are expected",
      ] as const,
      isHighlighted: false,
    },
  ] as const,
};

export const shopifyThemeCustomizationThemes = {
  eyebrow: "Choose the Right Approach",
  title: "Shopify Themes We Customize",
  subtitle:
    "From free Shopify themes to popular premium themes, we customize the selected theme around your branding, products, content and required functionality. Browse the themes below or send us the name of any other Shopify theme you are using.",
  items: [
    {
      title: "Horizon Theme",
      image: "/assets/shopify-theme-customization/themes/horizon-theme.webp",
      alt: "Horizon Theme Image",
      href: "/horizon-theme-customization",
      ctaText: "Customize Horizon",
    },
    {
      title: "Prestige Theme",
      image: "/assets/shopify-theme-customization/themes/prestige-theme.webp",
      alt: "Prestige Theme Image",
      href: "/prestige-theme-customization",
      ctaText: "Customize Prestige",
    },
    {
      title: "Impulse Theme",
      image: "/assets/shopify-theme-customization/themes/impulse-theme.webp",
      alt: "Impulse Theme Image",
      href: "/impulse-theme-customization",
      ctaText: "Customize Impulse",
    },
    {
      title: "Expanse Theme",
      image: "/assets/shopify-theme-customization/themes/expanse-theme.webp",
      alt: "Expanse Theme Image",
      href: "/expanse-theme-customization",
      ctaText: "Customize Expanse",
    },
    {
      title: "Sense Theme",
      image: "/assets/shopify-theme-customization/themes/sense-theme.webp",
      alt: "Sense Theme Image",
      href: "/sense-theme-customization",
      ctaText: "Customize Sense",
    },
    {
      title: "Be Yours Theme",
      image: "/assets/shopify-theme-customization/themes/be-yours-theme.webp",
      alt: "Be Yours Theme Image",
      href: "/be-yours-theme-customization",
      ctaText: "Customize Be Yours",
    },
    {
      title: "Fabric Theme",
      image: "/assets/shopify-theme-customization/themes/fabric-theme.webp",
      alt: "Fabric Theme Image",
      href: "/fabric-theme-customization",
      ctaText: "Customize Fabric",
    },
    {
      title: "Savor Theme",
      image: "/assets/shopify-theme-customization/themes/savor-theme.png",
      alt: "Savor Theme Image",
      href: "/savor-theme-customization",
      ctaText: "Customize Savor",
    },
    {
      title: "Vessel Theme",
      image: "/assets/shopify-theme-customization/themes/vessel-theme.png",
      alt: "Vessel Theme Image",
      href: "/vessel-theme-customization",
      ctaText: "Customize Vessel",
    },
    {
      title: "Dwell Theme",
      image: "/assets/shopify-theme-customization/themes/dwell-theme.png",
      alt: "Dwell Theme Image",
      href: "/dwell-theme-customization",
      ctaText: "Customize Dwell",
    },
    {
      title: "Tinker Theme",
      image: "/assets/shopify-theme-customization/themes/tinker-theme.png",
      alt: "Tinker Theme Image",
      href: "/tinker-theme-customization",
      ctaText: "Customize Tinker",
    },
    {
      title: "Pitch Theme",
      image: "/assets/shopify-theme-customization/themes/pitch-theme.png",
      alt: "Pitch Theme Image",
      href: "/pitch-theme-customization",
      ctaText: "Customize Pitch",
    },
    {
      title: "Atelier Theme",
      image: "/assets/shopify-theme-customization/themes/atelier-theme.png",
      alt: "Atelier Theme Image",
      href: "/atelier-theme-customization",
      ctaText: "Customize Atelier",
    },
    {
      title: "Heritage Theme",
      image: "/assets/shopify-theme-customization/themes/heritage-theme.png",
      alt: "Heritage Theme Image",
      href: "/heritage-theme-customization",
      ctaText: "Customize Heritage",
    },
    {
      title: "Ritual Theme",
      image: "/assets/shopify-theme-customization/themes/ritual-theme.png",
      alt: "Ritual Theme Image",
      href: "/ritual-theme-customization",
      ctaText: "Customize Ritual",
    },
    {
      title: "Dawn Theme",
      image: "/assets/shopify-theme-customization/themes/dawn-theme.png",
      alt: "Dawn Theme Image",
      href: "/dawn-theme-customization",
      ctaText: "Customize Dawn",
    },
    {
      title: "Studio Theme",
      image: "/assets/shopify-theme-customization/themes/studio-theme.png",
      alt: "Studio Theme Image",
      href: "/studio-theme-customization",
      ctaText: "Customize Studio",
    },
    {
      title: "Origin Theme",
      image: "/assets/shopify-theme-customization/themes/origin-theme.png",
      alt: "Origin Theme Image",
      href: "/origin-theme-customization",
      ctaText: "Customize Origin",
    },
    {
      title: "Publisher Theme",
      image: "/assets/shopify-theme-customization/themes/publisher-theme.png",
      alt: "Publisher Theme Image",
      href: "/publisher-theme-customization",
      ctaText: "Customize Publisher",
    },
    {
      title: "Trade Theme",
      image: "/assets/shopify-theme-customization/themes/trade-theme.png",
      alt: "Trade Theme Image",
      href: "/trade-theme-customization",
      ctaText: "Customize Trade",
    },
    {
      title: "Spotlight Theme",
      image: "/assets/shopify-theme-customization/themes/spotlight-theme.png",
      alt: "Spotlight Theme Image",
      href: "/spotlight-theme-customization",
      ctaText: "Customize Spotlight",
    },
    {
      title: "Refresh Theme",
      image: "/assets/shopify-theme-customization/themes/refresh-theme.png",
      alt: "Refresh Theme Image",
      href: "/refresh-theme-customization",
      ctaText: "Customize Refresh",
    },
    {
      title: "Woodstock Theme",
      image: "/assets/shopify-theme-customization/themes/woodstock-theme.png",
      alt: "Woodstock Theme Image",
      href: "/woodstock-theme-customization",
      ctaText: "Customize Woodstock",
    },
    {
      title: "Stiletto Theme",
      image: "/assets/shopify-theme-customization/themes/stiletto-theme.png",
      alt: "Stiletto Theme Image",
      href: "/stiletto-theme-customization",
      ctaText: "Customize Stiletto",
    },
    {
      title: "Colorblock Theme",
      image: "/assets/shopify-theme-customization/themes/colorblock-theme.png",
      alt: "Colorblock Theme Image",
      href: "/colorblock-theme-customization",
      ctaText: "Customize Colorblock",
    },
    {
      title: "Pipeline Theme",
      image: "/assets/shopify-theme-customization/themes/pipeline-theme.png",
      alt: "Pipeline Theme Image",
      href: "/pipeline-theme-customization",
      ctaText: "Customize Pipeline",
    },
    {
      title: "Vision Theme",
      image: "/assets/shopify-theme-customization/themes/vision-theme.png",
      alt: "Vision Theme Image",
      href: "/vision-theme-customization",
      ctaText: "Customize Vision",
    },
    {
      title: "Craft Theme",
      image: "/assets/shopify-theme-customization/themes/craft-theme.png",
      alt: "Craft Theme Image",
      href: "/craft-theme-customization",
      ctaText: "Customize Craft",
    },
    {
      title: "Broadcast Theme",
      image: "/assets/shopify-theme-customization/themes/broadcast-theme.png",
      alt: "Broadcast Theme Image",
      href: "/broadcast-theme-customization",
      ctaText: "Customize Broadcast",
    },
    {
      title: "Warehouse Theme",
      image: "/assets/shopify-theme-customization/themes/warehouse-theme.png",
      alt: "Warehouse Theme Image",
      href: "/warehouse-theme-customization",
      ctaText: "Customize Warehouse",
    },
    {
      title: "Startup Theme",
      image: "/assets/shopify-theme-customization/themes/startup-theme.png",
      alt: "Startup Theme Image",
      href: "/startup-theme-customization",
      ctaText: "Customize Startup",
    },
    {
      title: "Impact Theme",
      image: "/assets/shopify-theme-customization/themes/impact-theme.png",
      alt: "Impact Theme Image",
      href: "/impact-theme-customization",
      ctaText: "Customize Impact",
    },
  ] as const,
};

export const shopifyThemeCustomizationAiDelivery = {
  eyebrow: "AI-Assisted Theme Customization",
  heading: "Experienced Shopify theme developers, supported by modern AI tools.",
  description:
    "Our developers use AI-assisted tools such as Claude and Cursor where they can accelerate code exploration, debugging, documentation, refactoring and repetitive implementation work. We also validate custom theme code with Shopify-oriented development and QA practices before release.",
  tools: [
    {
      name: "Claude",
      description: "Code analysis & problem solving",
    },
    {
      name: "Cursor",
      description: "AI-assisted codebase exploration",
    },
    {
      name: "Shopify Theme Check",
      description: "Theme-focused code validation",
    },
    {
      name: "Human QA",
      description: "UX, maintainability & release review",
    },
  ] as const,
  callout:
    "AI helps our developers work faster. Theme architecture, business logic, code quality and production release decisions remain human-controlled.",
};

export const shopifyThemeCustomizationWhyChoose = {
  eyebrow: "Why Dynamic Dreamz",
  heading: "Why choose us for Shopify theme customization?",
  description:
    "Get theme design and development from an in-house ecommerce team with a verifiable Shopify partnership, structured QA and experience across different product categories.",
  items: [
    {
      icon: "design" as const,
      title: "Theme Design + Development",
      description:
        "Designers and Shopify developers work together when the theme needs visual changes, mockups and technical implementation.",
    },
    {
      icon: "expertise" as const,
      title: "In-House Expertise",
      description:
        "Shopify work can be supported by UI/UX, QA, integrations, mobile and full-stack specialists when needed.",
    },
    {
      icon: "qa" as const,
      title: "Structured QA Before Launch",
      description:
        "Key customizations are reviewed across relevant devices, browsers and customer journeys before publishing the updated theme.",
    },
    {
      icon: "support" as const,
      title: "Post-Launch Support",
      description:
        "After launch, our team can continue helping with theme updates, bug fixes, new sections, app changes and ongoing Shopify improvements.",
    },
  ] as const,
  partnerLogo: "/assets/proof/shopify-platinum-partner.svg",
  partnerLogoAlt: "Dynamic Dreamz - Shopify Platinum Partner",
  partnerHeading: "20+ Years of Ecommerce Delivery",
  partnerDescription:
    "Dynamic Dreamz combines long-term web and ecommerce experience with a broader 150+ expert in-house team and more than 5,000 delivered projects.",
  stats: [
    { value: "20+", label: "Years of Experience" },
    { value: "150+", label: "Experts" },
    { value: "5k+", label: "projects delivered" },
    { value: "2.5k+", label: "Verified 5 star Reviews" },
  ] as const,
  partnerLink: {
    label: "About Dynamic Dreamz",
    href: "/about-us",
  },
};

export const shopifyThemeCustomizationPortfolio = {
  eyebrow: "Portfolio",
  heading: "Snippets of Shopify Theme Customization Portfolio",
  description:
    "Explore our portfolio showcasing successful Shopify customization projects, <br/> highlighting how we customize, secure, and enhance stores for peak performance.",
  ctaLabel: "View our work",
  ctaHref: "/our-work",
  items: [
    {
      name: "Nufyx",
      href: "https://nufyx.com/",
      image: "/assets/healthcare/portfolio/nufyx-protein-products.webp",
      imageAlt: "Nufyx Image",
      category: "SHOPIFY",
    },
    {
      name: "Nekter Juice Bar",
      href: "https://www.nekterjuicebar.com/",
      image: "/assets/food-beverages/portfolio/nekter-juice-bar.webp",
      imageAlt: "Nekter Juice Bar Image",
      category: "SHOPIFY",
    },
    {
      name: "Pagerie",
      href: "https://www.pagerie.com/",
      image: "/assets/pet-industry/portfolio/pagerie-dog-accessories.webp",
      imageAlt: "Pagerie Image",
      category: "SHOPIFY",
    },
    {
      name: "Luxxi Nails",
      href: "https://luxxinails.com/",
      image: "/assets/beauty-cosmetics/portfolio/luxxi-nails.webp",
      imageAlt: "Luxxi Nails Image",
      category: "SHOPIFY",
    },
    {
      name: "Eco Soul",
      href: "https://www.ecosoulhome.com/",
      image: "/assets/our-work/projects/eco-soul.webp",
      imageAlt: "Eco Soul Image",
      category: "SHOPIFY",
    },
    {
      name: "AdHOC Atelier",
      href: "https://adhocatelier.it/",
      image: "/assets/hire-shopify-developers/portfolio/adhoc-atler.webp",
      imageAlt: "AdHOC Atelier Image",
      category: "SHOPIFY",
    },
    {
      name: "Bombay Shirt Company",
      href: "https://bombayshirts.com/",
      image: "/assets/fashion/portfolio/bombay-shirt-company-fashion.webp",
      imageAlt: "Bombay Shirt Company Image",
      category: "SHOPIFY",
    },
    {
      name: "Holy Plantz",
      href: "https://holyplantz.com/",
      image: "/assets/our-work/projects/holy-plantz.webp",
      imageAlt: "Holy Plantz Image",
      category: "SHOPIFY",
    },
  ] as const,
};

export const shopifyThemeCustomizationPricing = {
  eyebrow: "Flexible Engagement",
  heading: "Choose the right theme customization engagement.",
  description:
    "Use a project quote for a defined redesign, flexible hours for smaller changes, or dedicated capacity when theme updates are part of an ongoing Shopify roadmap.",
  items: [
    {
      label: "Project-Based",
      badge: "Defined Theme Customization",
      price: "Custom Quote",
      description:
        "For theme selection, branded mockups, redesigns, custom templates or a defined set of theme changes.",
      ctaLabel: "Send Your Theme Requirement",
      ctaHref: siteConfig.quotePath,
    },
    {
      label: "Flexible Shopify Support",
      badge: "Smaller / Ongoing Changes",
      price: "From $25/hour",
      description:
        "For theme fixes, sections, styling, PDP/collection changes, app integration and ongoing implementation.",
      ctaLabel: "Buy Shopify Development Hours",
      ctaHref: siteConfig.quotePath,
    },
    {
      label: "Dedicated Capacity",
      badge: "Ongoing Shopify Roadmap",
      price: "From $2,000/month",
      description:
        "For brands or agencies with recurring Shopify theme, feature and storefront development requirements.",
      ctaLabel: "Discuss Dedicated Capacity",
      ctaHref: siteConfig.quotePath,
    },
  ] as const,
};

export const shopifyThemeCustomizationTestimonials = {
  eyebrow: "Client Stories",
  heading: "Don't Just Take Our Word For It",
  description:
    "Our clients' success speaks for itself. Read testimonials from satisfied clients who have benefited from our Shopify maintenance services and see how we can help you achieve similar results.",
  items: shopifyPlusAgencyTestimonials.items,
};

export const shopifyThemeCustomizationFaqs = {
  heading: "Frequently Asked Questions",
  items: [
    {
      question: "What is Shopify theme customization?",
      answer:
        "Shopify theme customization means modifying an existing Shopify theme so it better matches your brand, products, customer journey and business requirements. It can include colors, typography, layouts, sections, product and collection templates, navigation, custom functionality, integrations and responsive behavior.",
    },
    {
      question: "Can you customize a Shopify theme I have already purchased?",
      answer:
        "Yes. This is one of the most common reasons clients hire us. We review the theme you have purchased, identify what can be configured through theme settings and what needs custom development, then customize the theme around your branding and requirements.",
    },
    {
      question: "Can you help me choose the right Shopify theme before customization?",
      answer:
        "Yes. If you have not selected a theme yet, we can review your product catalog, content, desired features and reference websites, then recommend suitable Shopify themes. We can also create a branded mockup using your actual products, imagery, colors and content before development begins.",
    },
    {
      question: "Do you provide a design mockup before customizing the theme?",
      answer:
        "Yes. For projects that need design changes, we can prepare mockups showing how the selected theme will look with your branding, colors, typography, imagery, products and content. After approval, our developers integrate the agreed design into the Shopify theme.",
    },
    {
      question: "What can you customize in a Shopify theme?",
      answer:
        "We can customize headers, navigation, homepages, product pages, collection pages, cart experiences, sections, blocks, typography, colors, product cards, filters, metafields, badges, promotional areas, app integrations, responsive layouts and other theme functionality within Shopify’s platform capabilities.",
    },
    {
      question: "Do you use AI for Shopify theme customization?",
      answer:
        "Yes. Our developers use AI-assisted tools such as Claude and Cursor where appropriate for code exploration, debugging, documentation, refactoring and repetitive development work. AI helps accelerate parts of the workflow, while architecture, code quality, maintainability and QA remain developer-controlled.",
    },
    {
      question: "Will Shopify theme customization affect future theme updates?",
      answer:
        "It can, depending on how the theme is customized. We try to keep customizations maintainable and isolated where practical. Shopify also recommends duplicating a theme before code changes, and significant custom code should be reviewed when moving to a newer theme version.",
    },
    {
      question: "How long does Shopify theme customization take?",
      answer:
        "The timeline depends on the number and complexity of changes. Small branding or section updates may take only a few days, while larger redesigns, custom templates or integrations can take several weeks. We provide an estimate after reviewing the selected theme and requirements.",
    },
    {
      question: "How much does Shopify theme customization cost?",
      answer:
        "Cost depends on the theme, design changes and custom functionality required. We can quote a defined project after reviewing the scope, or support smaller and ongoing theme changes through flexible Shopify development hours.",
    },
    {
      question: "Will my live Shopify store be affected while customization is in progress?",
      answer:
        "We normally work on a duplicate or unpublished theme so the live storefront can continue operating. After design approval, development and QA are complete, the updated theme can be scheduled for launch.",
    },
  ] as const,
};

export const shopifyThemeCustomizationContent = {
  hero: shopifyThemeCustomizationHero,
  brands: shopifyThemeCustomizationBrands,
  services: shopifyThemeCustomizationServices,
  devTeam: shopifyThemeCustomizationDevTeam,
  process: shopifyThemeCustomizationProcess,
  approach: shopifyThemeCustomizationApproach,
  themes: shopifyThemeCustomizationThemes,
  aiDelivery: shopifyThemeCustomizationAiDelivery,
  whyChoose: shopifyThemeCustomizationWhyChoose,
  portfolio: shopifyThemeCustomizationPortfolio,
  pricing: shopifyThemeCustomizationPricing,
  testimonials: shopifyThemeCustomizationTestimonials,
  faqs: shopifyThemeCustomizationFaqs,
};
