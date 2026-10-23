import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ShopifyStageServicesSection } from "@/components/sections/shopify-stage-services-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { CaseStudyCardsSection } from "@/components/sections/shopify-plus-agency/case-study-cards-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustriesServedSection } from "@/components/sections/shopify-plus-agency/industries-served-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { ShopifyPlusProofSection } from "@/components/sections/shopify-plus-agency/shopify-plus-proof-section";
import {
  shopifyPlusAgencyBrandLogos,
  shopifyPlusAgencyBrandTrustHeading,
  shopifyPlusAgencyCaseStudies,
  shopifyPlusAgencyFaqDescription,
  shopifyPlusAgencyFaqHeading,
  shopifyPlusAgencyFaqs,
  shopifyPlusAgencyHero,
  shopifyPlusAgencyHowToChoose,
  shopifyPlusAgencyIndustries,
  shopifyPlusAgencyPageTestimonials,
  shopifyPlusAgencyPortfolio,
  shopifyPlusAgencyPricing,
  shopifyPlusAgencyServices,
  shopifyPlusAgencyWhyChoose,
} from "@/content/shopify-plus-agency";

const brandSection = {
  slug: "shopify-plus-agency",
  ariaLabel: "Trusted by Leading Brands",
  brands: {
    ariaLabel: "Trusted by Leading Brands",
  },
} as const;

export function ShopifyPlusAgencyPage() {
  return (
    <div>
      <ServiceHeroSection
        content={shopifyPlusAgencyHero}
      />
      <IndustryBrandsSection
        content={brandSection}
        heading={shopifyPlusAgencyBrandTrustHeading}
        items={shopifyPlusAgencyBrandLogos}
      />
      <ShopifyPlusProofSection content={shopifyPlusAgencyWhyChoose} />
      <PortfolioShowcaseSection
        className="pt-0"
        content={{
          ...shopifyPlusAgencyPortfolio,
          platformMark: {
            src: shopifyPlusAgencyPortfolio.platformMark,
            width: 113,
            height: 27,
          },
        }}
        sectionId="our_work"
      />
      <ShopifyStageServicesSection
        content={shopifyPlusAgencyServices}
        id="shopify-services"
      />
      <CaseStudyCardsSection content={shopifyPlusAgencyCaseStudies} />
      <IndustriesServedSection
        content={shopifyPlusAgencyIndustries}
        variant="grid"
      />
      <PricingTableSection content={shopifyPlusAgencyPricing} />
      <HappyClientSection
        variant="client-stories"
        hasTopPadding={true}
        description={shopifyPlusAgencyPageTestimonials.description}
        heading={shopifyPlusAgencyPageTestimonials.heading}
        items={shopifyPlusAgencyPageTestimonials.items}
      />
      <EvaluationFrameworkSection
        className="pt-0 mb-0"
        content={shopifyPlusAgencyHowToChoose}
      />
      <SplitFaqSection
        description={shopifyPlusAgencyFaqDescription}
        heading={shopifyPlusAgencyFaqHeading}
        idPrefix="shopify-plus-agency-faq"
        items={shopifyPlusAgencyFaqs}
      />
    </div>
  );
}
