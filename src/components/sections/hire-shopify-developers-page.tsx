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
  hireShopifySectionCopy,
  hireShopifyTestimonials,
} from "@/content/hire-shopify-developers";

const brandSection = {
  slug: "hire-shopify-developers",
  brands: {
  },
} as const;

const industriesContent = {
  heading: hireShopifySectionCopy.industriesHeading,
  description: hireShopifySectionCopy.industriesDescription,
  items: hireShopifyIndustries,
};

const portfolioContent = {
  heading: hireShopifySectionCopy.portfolioHeading,
  description: hireShopifySectionCopy.portfolioDescription,
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
      <PortfolioShowcaseSection
        content={portfolioContent}
        headingBreakClassName="max-[767px]:hidden"
      />
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
