import { CtaBannerSection } from "@/components/blocks/QuoteRequestCTABlock";
import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { PortfolioShowcaseSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { ServiceHeroVideoSection } from "@/components/blocks/ServiceHeroBlock";
import { ShopifyHorizontalProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { PricingTableSection } from "@/components/blocks/EngagementModelsBlock";
import { ShopifyStageServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { ShopifyTeamBoxesSection } from "@/components/blocks/WhyChooseUsBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import {
  shopifyDevelopmentAgencyBrandConfig,
  shopifyDevelopmentAgencyBrands,
  shopifyDevelopmentAgencyBrandsHeading,
  shopifyDevelopmentAgencyCtaBanner,
  shopifyDevelopmentAgencyFaqs,
  shopifyDevelopmentAgencyHero,
  shopifyDevelopmentAgencyPortfolio,
  shopifyDevelopmentAgencyPricing,
  shopifyDevelopmentAgencyProcess,
  shopifyDevelopmentAgencyServices,
  shopifyDevelopmentAgencyTeam,
  shopifyDevelopmentAgencyTestimonials,
} from "@/content/shopify-development-agency";

export function ShopifyDevelopmentAgencyPage() {
  return (
    <div className="font-sans">
      <ServiceHeroVideoSection content={shopifyDevelopmentAgencyHero} />
      <IndustryBrandsSection
        content={shopifyDevelopmentAgencyBrandConfig}
        heading={shopifyDevelopmentAgencyBrandsHeading}
        items={shopifyDevelopmentAgencyBrands}
      />
      <ShopifyStageServicesSection content={shopifyDevelopmentAgencyServices} />
      <PortfolioShowcaseSection
        columns={4}
        content={shopifyDevelopmentAgencyPortfolio}
        headerLayout="split"
        sectionId="our_work"
        variant="liveGrid"
      />
      <ShopifyTeamBoxesSection content={shopifyDevelopmentAgencyTeam} />
      <PricingTableSection content={shopifyDevelopmentAgencyPricing} />
      <ShopifyHorizontalProcessSection content={shopifyDevelopmentAgencyProcess} />
      <HappyClientSection
        description={shopifyDevelopmentAgencyTestimonials.description}
        eyebrow={shopifyDevelopmentAgencyTestimonials.eyebrow}
        heading={shopifyDevelopmentAgencyTestimonials.heading}
        items={shopifyDevelopmentAgencyTestimonials.items}
      />
      <SplitFaqSection
        idPrefix="shopify-dev-agency-faq"
        items={shopifyDevelopmentAgencyFaqs}
      />
      <CtaBannerSection
        ctaHref={shopifyDevelopmentAgencyCtaBanner.ctaHref}
        ctaLabel={shopifyDevelopmentAgencyCtaBanner.ctaLabel}
        heading={shopifyDevelopmentAgencyCtaBanner.heading}
      />
    </div>
  );
}

