import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { PortfolioShowcaseSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { ServiceHeroSection } from "@/components/blocks/ServiceHeroBlock";
import { ShopifyStageServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { CaseStudyCardsSection } from "@/components/blocks/CaseStudySpotlightBlock";
import { EvaluationFrameworkSection } from "@/components/blocks/WhyChooseUsBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { IndustriesServedSection } from "@/components/blocks/IndustryVerticalsGridBlock";
import { PricingTableSection } from "@/components/blocks/EngagementModelsBlock";
import { ShopifyPlusProofSection } from "@/components/blocks/PartnerCertificationsBarBlock";
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
