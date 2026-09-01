import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { CaseStudyCardsSection } from "@/components/sections/shopify-plus-agency/case-study-cards-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { IndustriesServedSection } from "@/components/sections/shopify-plus-agency/industries-served-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import {
  shopifyPlusAgencyFaqs,
  shopifyPlusAgencyHero,
  shopifyPlusAgencyHowToChoose,
  shopifyPlusAgencyPortfolio,
  shopifyPlusAgencyWhyChoose,
} from "@/content/shopify-plus-agency";

const brandSection = {
  slug: "shopify-plus-agency",
  brands: {
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
      <ServiceHeroSection
        className="inner-hero-sec shopify-plus-experts relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={shopifyPlusAgencyHero}
      />
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
        className="our-work-sec pt-5 pb-20 max-[992px]:pt-0"
        content={portfolioContent}
      />
      <HappyClientSection />
      <SplitFaqSection
        items={shopifyPlusAgencyFaqs}
        idPrefix="shopify-plus-agency-faq"
      />
    </div>
  );
}