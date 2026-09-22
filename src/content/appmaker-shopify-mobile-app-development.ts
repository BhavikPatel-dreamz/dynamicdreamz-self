import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { ShopifyAppBenefitItem } from "@/components/sections/shopify-mobile-app/shopify-app-benefits-section";
import type { ShopifyAppFeatureItem } from "@/components/sections/shopify-mobile-app/shopify-app-features-section";
import type { ShopifyAppProcessStep } from "@/components/sections/shopify-mobile-app/shopify-app-process-section";
import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";

export const appmakerHeroCoBranding = {
  leftLogo: {
    src: "/assets/services/shopify-mobile-app-development/hero/dynamic-dreamz-logo.svg",
    alt: "Dynamic Dreamz Logo",
    width: 104,
    height: 37,
  },
  separator: {
    src: "/assets/services/shopify-mobile-app-development/hero/cross-icon.svg",
    alt: "Dynamic Dreamz",
    width: 29,
    height: 29,
  },
  rightLogo: {
    src: "/assets/services/shopify-mobile-app-development/hero/app-makker-logo.svg",
    alt: "App Makker Logo",
    width: 147,
    height: 39,
  },
} as const;

export const appmakerHero = {
  title: "Transform Your Shopify Store into a Mobile App in Minutes!",
  ctaLabel: "start your free trial today!",
  ctaHref: "/request-quote",
  coBranding: appmakerHeroCoBranding,
} as const;

export const appmakerBrandLogos: readonly ClientLogoSliderItem[] = [
  {
    href: "https://supertails.com/",
    src: "/assets/clients/supertails.svg",
    alt: "Supper Tails Logo",
    width: 164,
    height: 41,
  },
  {
    href: "https://11-11.in/",
    src: "/assets/clients/eleven-eleven.svg",
    alt: "Eleven Eleven",
    width: 145,
    height: 20,
  },
  {
    href: "https://bellavitaorganic.com/",
    src: "/assets/clients/bellavita.svg",
    alt: "bellavita logo",
    width: 166,
    height: 24,
  },
  {
    href: "https://www.bombayshirts.com/",
    src: "/assets/clients/bombay-shirt-company.svg",
    alt: "Bombay Shirt Company",
    width: 204,
    height: 26,
  },
  {
    href: "https://popclub.co/",
    src: "/assets/clients/popclub.svg",
    alt: "",
    width: 65,
    height: 41,
  },
  {
    href: "https://www.srisritattva.com/",
    src: "/assets/clients/sri-sri-tattva.svg",
    alt: "SriSri Tattva Logo",
    width: 106,
    height: 40,
  },
  {
    href: "https://shop.tropicfeel.com/",
    src: "/assets/clients/tropicfeel.svg",
    alt: "tropicfeel logo",
    width: 150,
    height: 32,
  },
  {
    href: "https://reneecosmetics.in/",
    src: "/assets/clients/renee.svg",
    alt: "Renee logo",
    width: 93,
    height: 30,
  },
  {
    href: "https://royceindia.com/",
    src: "/assets/clients/royce-chocolate.svg",
    alt: "Royce chocolate logo",
    width: 132,
    height: 38,
  },
  {
    href: "https://tego.fit/",
    src: "/assets/clients/tego.svg",
    alt: "tego logo",
    width: 101,
    height: 40,
  },
  {
    href: "https://www.nekterjuicebar.com/",
    src: "/assets/clients/nelter.svg",
    alt: "nekter-colored",
    width: 66,
    height: 64,
  },
  {
    href: "https://thehouseofrare.com/",
    src: "/assets/clients/rare-rabbit.svg",
    alt: "Rare Rabbit Logo",
    width: 122,
    height: 84,
  },
] as const;

export const appmakerBrands = {
  title: "TRUSTED BY LEADING BRANDS",
  items: appmakerBrandLogos,
} as const;

export const appmakerBenefitsItems: readonly ShopifyAppBenefitItem[] = [
  {
    title: "Increase Sales",
    description: "Mobile apps convert better than mobile websites.",
    icon: "/assets/services/shopify-mobile-app-development/benefits/increase-sale-icon.svg",
    iconAlt: "Increase Sale Icon",
  },
  {
    title: "Engage Customers",
    description: "Push notifications keep your customers informed and engaged.",
    icon: "/assets/services/shopify-mobile-app-development/benefits/engage-icon.svg",
    iconAlt: "Engage Icon",
  },
  {
    title: "Enhance Experience",
    description: "Offer a smooth, user friendly shopping experience.",
    icon: "/assets/services/shopify-mobile-app-development/benefits/enhance-experience-icon.svg",
    iconAlt: "Engage Customers Icon",
  },
] as const;

export const appmakerBenefits = {
  heading: "Key benefits of Shopify Appmaker",
  items: appmakerBenefitsItems,
} as const;

export const appmakerLeftFeatures: readonly ShopifyAppFeatureItem[] = [
  {
    title: "Customizable Themes",
    description: "Design your app that matches your brand.",
    icon: "/assets/services/shopify-mobile-app-development/features/app-theme-icon.svg",
    iconAlt: "Customizable Themes Icon",
  },
  {
    title: "Push Notifications",
    description: "Send promotions and updates directly to your customers.",
    icon: "/assets/services/shopify-mobile-app-development/features/notifications-icon.svg",
    iconAlt: "Push Notifications Icon",
  },
  {
    title: "Seamless Checkout",
    description: "Simplified, quick checkout process.",
    icon: "/assets/services/shopify-mobile-app-development/features/checkout-icon.svg",
    iconAlt: "Seamless Checkout Icon",
  },
] as const;

export const appmakerRightFeatures: readonly ShopifyAppFeatureItem[] = [
  {
    title: "Product Searching",
    description: "Easy navigation and search functionality.",
    icon: "/assets/services/shopify-mobile-app-development/features/searching-icon.svg",
    iconAlt: "Product Searching Icon",
  },
  {
    title: "Analytics and Reporting",
    description: "Track your app’s performance and user behavior.",
    icon: "/assets/services/shopify-mobile-app-development/features/reporting-icon.svg",
    iconAlt: "Product Searching Icon",
  },
  {
    title: "Customer Reviews",
    description: "Display reviews to build trust.",
    icon: "/assets/services/shopify-mobile-app-development/features/customer-reviews-icon.svg",
    iconAlt: "Analytics and Reporting Icon",
  },
] as const;

export const appmakerFeatures = {
  heading: "Features of Shopify App Maker",
  centerImage: {
    src: "/assets/services/shopify-mobile-app-development/features/app-features-img.webp",
    alt: "Features of Shopify App maker Image",
    width: 374,
    height: 518,
  },
  leftFeatures: appmakerLeftFeatures,
  rightFeatures: appmakerRightFeatures,
  items: [...appmakerLeftFeatures, ...appmakerRightFeatures],
} as const;

export const appmakerProcessSteps: readonly ShopifyAppProcessStep[] = [
  {
    title: "Signup",
    description: "Create an account and choose a plan.",
    icon: "/assets/services/shopify-mobile-app-development/process/signup-icon.svg",
    iconAlt: "Signup Icon",
  },
  {
    title: "Customize Your App",
    description: "Use our drag and drop builder to design your app.",
    icon: "/assets/services/shopify-mobile-app-development/process/customize-app-icon.svg",
    iconAlt: "Customize App Icon",
  },
  {
    title: "Connect your Store",
    description: "Integrate your Shopify store with a few clicks.",
    icon: "/assets/services/shopify-mobile-app-development/process/connect-store-icon.svg",
    iconAlt: "Connect Store Icon",
  },
  {
    title: "Publish",
    description: "Launch your app on the Apple App Store and Google Play Store.",
    icon: "/assets/services/shopify-mobile-app-development/process/publish-icon.svg",
    iconAlt: "Publish Icon",
  },
] as const;

export const appmakerProcess = {
  heading: "How Does the Shopify <br> App Maker Work?",
  steps: appmakerProcessSteps,
} as const;

export const appmakerFaqs: readonly FaqAccordionItem[] = [
  {
    question: "What is Shopify AppMaker?",
    answer:
      "Shopify AppMaker is a service that helps you create custom mobile apps for your Shopify store. Our platform enables you to transform your online store into a user friendly mobile app without requiring any coding knowledge.",
  },
  {
    question: "Why should I create a mobile app for my Shopify store?",
    answer:
      "A mobile app can enhance your customer’s shopping experience, increase engagement, and boost sales. It provides a seamless shopping experience, push notifications for promotions, and easy access to your products.",
  },
  {
    question: "How does the Shopify AppMaker service work?",
    answer: "Our service works in a few simple steps:",
    listItems: [
      { text: "Sign Up: Create an account on our platform." },
      { text: "Customize Your App: Use our intuitive drag and drop builder to design your app." },
      { text: "Connect Your Store: Integrate your Shopify store with the app." },
      { text: "Publish: Launch your app on the Apple App Store and Google Play Store." },
    ],
    listPosition: "after",
  },
  {
    question: "What features are included in the mobile app?",
    answer: "Our mobile apps come with a range of features, including:",
    listItems: [
      { text: "Customizable themes" },
      { text: "Push notifications" },
      { text: "Seamless checkout process" },
      { text: "Product browsing and search" },
      { text: "Customer reviews" },
      { text: "Social media integration" },
      { text: "Analytics and Reporting" },
    ],
    listPosition: "after",
  },
  {
    question: "How long does it take to create and launch the app?",
    answer:
      "Creating and customizing your app can be done in a few hours, depending on your requirements. Once you submit your app, it typically takes 1-2 weeks for approval and publication on the Apple App Store and Google Play Store.",
  },
  {
    question: "Is Shopify AppMaker secure?",
    answer:
      "Yes, we prioritize security and ensure that your data and your customers’ data are protected. Our platform complies with industry standard security measures.",
  },
  {
    question: "Is there customer support available?",
    answer:
      "Absolutely! Our dedicated support team is here to help you with any questions or issues you may encounter. You can contact us via email, live chat, or phone.",
  },
  {
    question: "How much does Shopify AppMaker cost?",
    answer:
      "We offer various pricing plans to suit different needs and budgets. Please get in touch with your project details and the outcome you want; we will get back to you with the best rates.",
  },
  {
    question: "Can I try Shopify AppMaker before committing to a paid plan?",
    answer:
      "Yes, we offer a free trial so you can explore the features and see how the service can benefit your business. You can sign up for the free trial on our Sign Up Page.",
  },
  {
    question: "What if I want to cancel my subscription?",
    answer:
      "You can cancel your subscription at any time. However, we recommend contacting our support team to discuss any issues you may have. For more details on cancellation and refunds, please refer to our Terms and Conditions.",
  },
] as const;

export const appmakerFaqCopy = {
  heading: "Frequently Asked Questions",
} as const;

export const appmakerCtaBanner = {
  heading: "Want us to help you with your online store?",
  ctaLabel: "request a quote",
  ctaHref: "/request-quote",
} as const;

export const appmakerShopifyMobileAppDevelopmentContent = {
  hero: appmakerHero,
  brands: appmakerBrands,
  benefits: appmakerBenefits,
  features: appmakerFeatures,
  process: appmakerProcess,
  faqs: appmakerFaqs,
  faqCopy: appmakerFaqCopy,
  ctaBanner: appmakerCtaBanner,
} as const;
