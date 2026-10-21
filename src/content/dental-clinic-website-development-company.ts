import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { ServiceHeroVideoContent } from "@/components/sections/service-hero-video-section";
import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { EvaluationFrameworkContent } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import type { ThemeCustomizationServicesContent } from "@/components/sections/theme-customization-services-section";
import type { OurDevelopmentProcessContent } from "@/components/sections/our-development-process-section";
import type { PortfolioShowcaseItem } from "@/components/sections/portfolio-showcase-section";
import { shopifyPlusAgencyTestimonials } from "@/content/shopify-plus-agency";

const heroContent: ServiceHeroVideoContent = {
  eyebrow: "Website Development Company",
  title: "Dental Clinic Website Development Company",
  paragraphs: [
    "At Dynamic Dreamz, We are the best Dental Clinic Website Development Company and helps dentists and web development companies create websites for the dental industry. Whether you’re a dentist who wants to create a new website or customize an existing one or a web development company looking for white-label development services for websites for dentists, we’ve helped you with everything. We create simple, professional, modern, effective WordPress websites that attract more patients and simplify your services.",
  ],
  cta: "request a quote",
  ctaHref: "/request-quote",
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
  ],
};

const brandsItems: readonly ClientLogoSliderItem[] = [
  {
    src: "/assets/clients/ranavat.svg",
    href: "https://www.ranavat.com/",
    alt: "Ranavat Logo",
    width: 174,
    height: 19,
  },
  {
    src: "/assets/clients/prolash.svg",
    href: "https://prolash.com/",
    alt: "prolash_black",
    width: 204,
    height: 22,
  },
  {
    src: "/assets/clients/tropicfeel.svg",
    href: "https://shop.tropicfeel.com/",
    alt: "Tropicfeel Logo",
    width: 150,
    height: 32,
  },
  {
    src: "/assets/clients/perfect-locks.svg",
    href: "https://www.perfectlocks.com/",
    alt: "perfect_locks_color_logo",
    width: 175,
    height: 32,
  },
  {
    src: "/assets/clients/bombay-shirt-company.svg",
    href: "https://www.bombayshirts.com/",
    alt: "Bombay Shirt Company Logo",
    width: 204,
    height: 26,
  },
  {
    src: "/assets/clients/kayfi.svg",
    href: "https://kayfi.com/",
    alt: "kayfi-colored",
    width: 90,
    height: 49,
  },
  {
    src: "/assets/clients/simsdirect.svg",
    href: "https://simsdirect.com.au/",
    alt: "simdirect_logo_color",
    width: 143,
    height: 49,
  },
  {
    src: "/assets/clients/kvaser.svg",
    href: "https://www.kvaser.com/",
    alt: "Kvaser Logo",
    width: 135,
    height: 25,
  },
  {
    src: "/assets/clients/nekter-colored.svg",
    href: "https://www.nekterjuicebar.com/",
    alt: "nekter-colored",
    width: 66,
    height: 64,
  },
  {
    src: "/assets/clients/circuit-city.svg",
    href: "https://circuitcity.com/",
    alt: "Circuit City Logo",
    width: 64,
    height: 64,
  },
];

const benefitsContent: EvaluationFrameworkContent = {
  eyebrow: "Why Dynamic Dreamz",
  heading: "Why Choose Dynamic Dreamz for Your Dental Clinic Website",
  description:
    "We have expertise in creating and customizing dental websites to fulfill dentist’s unique requirements. Dentists need an accurate and functional website since we understand this is important. That’s why we offer:",
  items: [
    {
      title: "",
      description: "Custom website designs that match your brand.",
    },
    {
      title: "",
      description:
        "Simple features for the website, such as patient management and appointment booking.",
    },
    {
      title: "",
      description: "Fast and secure websites that patients love to use.",
    },
    {
      title: "",
      description:
        "We have proven experience in Dental Website Development, with a team of 150 Experts.",
    },
  ],
};

const solutionsBoxes = [
  {
    number: "01",
    title: "Website Development Services",
    description:
      "We develop engaging, easy-to-navigate and search engine-friendly WordPress websites for dental professionals to highlight your dental services effectively.",
  },
  {
    number: "02",
    title: "Website Customization Services",
    description:
      "Do you already have a Website? We will customize it to align smoothly with your dental branding, services, and goals.",
  },
  {
    number: "03",
    title: "Website Optimization Services",
    description:
      "We improve your dental website to ensure secure performance, fast load speed, and a more satisfying user experience.",
  },
  {
    number: "04",
    title: "Custom Dental Features Development",
    description:
      "We can help you build a custom feature that meets your unique requirements. We can help you develop features like Dental appointment scheduling, Solutions for dental back office work, etc.",
  },
  {
    number: "05",
    title: "Website Maintenance Service",
    description:
      "With our Website maintenance services, you can stay relaxed. We take care of backups, security audits, and upgrades to maintain the functionality of your dental website.",
  },
] as const;

const solutionsContent: ThemeCustomizationServicesContent = {
  eyebrow: "Solutions",
  heading: "What Solutions We Offer",
  description:
    "Dynamic Dreamz offers custom website development services to help dental businesses grow and generate more dental appointments. Here is what we provide:",
  boxes: solutionsBoxes,
};

const processContent: OurDevelopmentProcessContent = {
  eyebrow: "Our Process",
  heading: "Our Website Development Process",
  description:
    "Our efficient and focused development process allows us to deliver top-notch websites customized for dental business. We take care of everything from planning to post-lunch support, ensuring your dental website is functional, engaging, and customized to fit your requirements perfectly.",
  steps: [
    {
      step: "Step 01",
      title: "Discovery and Planning",
      description:
        "We start by analyzing your dental practice, the audience you aim to reach, and your goals. This phase includes researching, generating ideas, and developing a plan for your custom website or solution.",
    },
    {
      step: "Step 02",
      title: "Design and Development",
      description:
        "We create an attractive, responsive design and build features specifically suited to your dental services. To provide a flawless online experience, we emphasize appearance, usability, and functionality.",
    },
    {
      step: "Step 03",
      title: "Testing and Launch",
      description:
        "Before launching a website, we strictly test your website for performance, compatibility, and security. Once everything looks good, we will launch your website, ensuring a smooth and hassle-free launch process.",
    },
    {
      step: "Step 04",
      title: "Post Launch Support",
      description:
        "After the launch, we offer continuous website support, which includes updates, backups, and performance enhancements, ensuring your website works smoothly.",
    },
  ],
};

const portfolioItems: readonly PortfolioShowcaseItem[] = [
  {
    name: "Quite Events",
    href: "https://www.quietevents.com/",
    image: "/assets/our-work/projects/quite-events.webp",
    imageAlt: "Quite Events Image",
    category: "WORDPRESS",
  },
  {
    name: "Les Etoiles",
    href: "https://louer-lesetoiles.ca/",
    image: "/assets/our-work/projects/les-etoiles.webp",
    imageAlt: "Les Etoiles Image",
    category: "WORDPRESS",
  },
  {
    name: "Valents",
    href: "https://wearvalents.com/",
    image: "/assets/our-work/projects/valents.webp",
    imageAlt: "Valents Image",
    category: "WORDPRESS",
  },
  {
    name: "Get Sunsights",
    href: "https://www.getsunsights.com/",
    image: "/assets/our-work/projects/get-sunsights.webp",
    imageAlt: "Get Sunsights Image",
    category: "WORDPRESS",
  },
  {
    name: "Lipari Design",
    href: "https://liparidesign.ca/",
    image: "/assets/our-work/projects/lipari-design.webp",
    imageAlt: "Lipari Design Image",
    category: "WORDPRESS",
  },
  {
    name: "Nexventur",
    href: "https://www.nexventur.com/",
    image: "/assets/our-work/projects/nexventur.webp",
    imageAlt: "Nexventur Image",
    category: "WORDPRESS",
  },
  {
    name: "Awaken Media",
    href: "https://www.awaken.media/",
    image: "/assets/our-work/projects/awaken-media.webp",
    imageAlt: "Awaken Media Image",
    category: "WORDPRESS",
  },
  {
    name: "Budget Maids",
    href: "https://www.budget-maids.com/",
    image: "/assets/our-work/projects/budget-maids.webp",
    imageAlt: "Budget Maids Image",
    category: "WORDPRESS",
  },
];

const portfolioContent = {
  eyebrow: "Portfolio",
  heading: "Our Development Expertise for Dental Clinic Website's",
  description:
    [
    "Explore our portfolio of WordPress solutions created especially for the dental industry.",
    "Our work shows creative designs, smooth processes, and personalized features that take",
    "dental practices to new heights online, from attractive websites to optimized WooCommerce stores.",
  ],
  ctaLabel: "View our work",
  ctaHref: "/our-work",
  category: "WORDPRESS",
  items: portfolioItems,
};

const testimonialsContent = {
  eyebrow: "Client Stories",
  heading: "Don't Just Take Our Word For It",
  description:
    [
      "We have faith in our work, but what truly matters is the outcomes we serve our clients.",
      "Happy clients make happy stories. Check out how our services empower them to evolve.",
    ],
  items: shopifyPlusAgencyTestimonials.items,
};

const faqsList: readonly FaqAccordionItem[] = [
  {
    question: "How long does it take to develop a dental website?",
    answer:
      "The development time depends on the project's complexity, but we aim to create a fully functional and excellent website in 4–6 weeks. We understand your unique requirements before providing a detailed timeframe.",
  },
  {
    question: "What is the Cost of Developing a Dental Website?",
    answer:
      [
      "The cost of creating a dental website depends on your specific needs and requirements. Every dental practice is unique. Your desired features, design, and functionality will influence the final development price.",
      "",
      "To provide an accurate estimate, we need details like:",
    ],
    listItems: [
      {
        text: "The number of pages you need (e.g., Home, Services, Blog, Contact).",
      },
      {
        text: "Custom features like online appointment booking, patient portals, or eCommerce for selling products.",
      },
      {
        text: "For website design, whether you want a custom design or are starting with pre-designed templates.",
      },
      {
        text: "Do you need additional tools or integrations, like analytics or third-party software?",
      },
    ],
    secondaryAnswer:
      "Contact us with your detailed website requirements, and we will estimate the proper cost and timeline.",
  },
  {
    question: "Can you customize my existing dental website?",
    answer:
      "Yes, we can customize your existing dental website per your custom requirements for dental business, including your preferred logo, color scheme, and style. We aim to ensure your website correctly reflects your professional identity.",
  },
  {
    question: "Can you integrate appointment booking features into my website?",
    answer:
      "We have experts who help you develop and implement custom appointment scheduling systems. These features reduce administrative load and improve patient satisfaction by simplifying online appointment scheduling.",
  },
  {
    question: "Do you provide WooCommerce development for selling dental products?",
    answer:
      "Yes, we can design and customize WooCommerce websites for your dental business. We'll create a user-friendly, excellent online WooCommerce store for you to present dental hygiene kits, teeth-whitening products, or other goods.",
  },
  {
    question: "Do you offer maintenance services for dental websites?",
    answer:
      "Of course! We provide complete website maintenance services that ensure your website operates safely and smoothly. These services contain regular updates, backups, performance optimization, and security checks.",
  },
  {
    question: "What is the benefit of having a website for my dental practice?",
    answer:
      "A website boosts your online visibility and makes it simpler for potential patients to find your dental offerings. It increases your reputation and reliability by allowing you to present your experience, offer patient recommendations, and provide treatment specifics.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Because all our websites are fully responsive, they will function flawlessly on desktops, tablets, and mobile. No matter what device your patients use, it ensures the best browsing experience.",
  },
];

export const dentalClinicWebsiteDevelopmentCompanyContent = {
  sectionCopy: {
    faqHeading: "FAQs",
    portfolioCta: "View our work",
  },
  hero: heroContent,
  brands: {
    title: "Trusted by Leading Brands",
    slug: "dental-clinic-website-development",
    items: brandsItems,
  },
  benefits: benefitsContent,
  services: {
    ...solutionsContent,
    items: solutionsBoxes.map((box) => ({
      title: box.title,
      description: box.description,
    })),
  },
  process: processContent,
  portfolio: portfolioContent,
  testimonials: testimonialsContent,
  faqs: faqsList,
} as const;
