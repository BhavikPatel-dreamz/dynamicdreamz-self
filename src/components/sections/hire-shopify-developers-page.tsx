import { FaqSection } from "@/components/sections/faq-section";
import { HiringHeroSection } from "@/components/sections/hiring-hero-section";
import { HiringProcessSection } from "@/components/sections/hire-wordpress-developers/hiring-process-section";
import {
  ShopifyAdvantagesSection,
  ShopifyReasonsSection,
} from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { IndustriesServedSection } from "@/components/sections/shopify-plus-agency/industries-served-section";
import {
  hireShopifyFaqs,
  hireShopifyHero,
  hireShopifyIndustries,
  hireShopifyPortfolio,
  hireShopifyProcess,
  hireShopifyTestimonials,
} from "@/content/hire-shopify-developers";

const brandSection = {
  slug: "hire-shopify-developers",
  brands: {
    ariaLabel: "Brands that trust Dynamic Dreamz for Shopify development",
  },
} as const;

const industriesContent = {
  heading: "Industries that we have Served",
  description:
    "Dynamic Dreamz has massive experience across multiple industries,<br> helping businesses like yours succeed online. Our expertise spans sectors such as:",
  items: hireShopifyIndustries,
};

const portfolioContent = {
  heading: "Work of our Shopify Developers that show our Expertise",
  description:
    "We are sure you would like to hear to what our clients says about our Shopify development.",
  items: hireShopifyPortfolio,
};

export function HireShopifyDevelopersPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <HiringHeroSection content={hireShopifyHero} />
      <IndustryBrandsSection content={brandSection} />
      <HiringProcessSection content={hireShopifyProcess} showStepNumbers />
      <ShopifyServicesSection />
      <ShopifyReasonsSection />
      <ShopifyAdvantagesSection />
      <IndustriesServedSection content={industriesContent} />
      <PortfolioShowcaseSection content={portfolioContent} />
      <div id="shopify-testimonials">
        <HappyClientSection
          description={hireShopifyTestimonials.description}
          heading={hireShopifyTestimonials.heading}
        />
      </div>
      <FaqSection
        items={hireShopifyFaqs}
        idPrefix="hire-shopify-developers-faq"
      />
    </div>
  );
}
