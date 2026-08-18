import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { ShopifyPlusAgencyHeroSection } from "@/components/sections/shopify-plus-agency/shopify-plus-agency-hero-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { AgencyServicesSection } from "@/components/sections/shopify-plus-agency/agency-services-section";
import { CaseStudyCardsSection } from "@/components/sections/shopify-plus-agency/case-study-cards-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { IndustriesServedSection } from "@/components/sections/shopify-plus-agency/industries-served-section";
import { PortfolioSection } from "@/components/sections/shopify-plus-agency/portfolio-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { FaqSection } from "@/components/sections/shopify-plus-agency/faq-section";
import {
  shopifyPlusAgencyHowToChoose,
  shopifyPlusAgencyWhyChoose,
} from "@/content/shopify-plus-agency";

const brandSection = {
  slug: "shopify-plus-agency",
  brands: {
    ariaLabel: "Brands that trust Dynamic Dreamz",
  },
} as const;

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
      <PortfolioSection />
      <HappyClientSection />
      <FaqSection />
    </div>
  );
}