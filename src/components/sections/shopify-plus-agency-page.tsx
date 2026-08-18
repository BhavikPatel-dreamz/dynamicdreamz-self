import { FaqSection } from "@/components/sections/faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { AgencyServicesSection } from "@/components/sections/shopify-plus-agency/agency-services-section";
import { CaseStudyCardsSection } from "@/components/sections/shopify-plus-agency/case-study-cards-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { IndustriesServedSection } from "@/components/sections/shopify-plus-agency/industries-served-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { ShopifyPlusAgencyHeroSection } from "@/components/sections/shopify-plus-agency/shopify-plus-agency-hero-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import {
  shopifyPlusAgencyFaqs,
  shopifyPlusAgencyHowToChoose,
  shopifyPlusAgencyPortfolio,
  shopifyPlusAgencyWhyChoose,
} from "@/content/shopify-plus-agency";

const brandSection = {
  slug: "shopify-plus-agency",
  brands: {
    ariaLabel: "Brands that trust Dynamic Dreamz",
  },
} as const;

const portfolioContent = {
  heading: shopifyPlusAgencyPortfolio.heading,
  description: shopifyPlusAgencyPortfolio.description,
  items: shopifyPlusAgencyPortfolio.items,
  category: shopifyPlusAgencyPortfolio.category,
  platformMark: {
    src: shopifyPlusAgencyPortfolio.platformMark,
    width: 113,
    height: 27,
  },
};

export function ShopifyPlusAgencyPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ShopifyPlusAgencyHeroSection />
      <IndustryBrandsSection content={brandSection} />
      <TextBoxSection
        className="pt-20 pb-0"
        heading={shopifyPlusAgencyWhyChoose.heading}
        text={shopifyPlusAgencyWhyChoose.text}
      />
      <AgencyServicesSection />
      <CaseStudyCardsSection />
      <TextBoxSection
        className="pt-0 pb-20"
        heading={shopifyPlusAgencyHowToChoose.heading}
        text={shopifyPlusAgencyHowToChoose.text}
      />
      <PricingTableSection />
      <IndustriesServedSection />
      <PortfolioShowcaseSection
        className="our-work-sec pt-5 pb-20 max-[991px]:pt-0"
        content={portfolioContent}
      />
      <HappyClientSection />
      <FaqSection
        items={shopifyPlusAgencyFaqs}
        idPrefix="shopify-plus-agency-faq"
        className="faq-sec pt-0 pb-20"
      />
    </div>
  );
}