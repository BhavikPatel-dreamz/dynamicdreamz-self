import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { ShopifyHorizontalProcessSection } from "@/components/sections/shopify-horizontal-process-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { ShopifyStageServicesSection } from "@/components/sections/shopify-stage-services-section";
import { ShopifyTeamBoxesSection } from "@/components/sections/shopify-team-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
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
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroVideoSection content={shopifyDevelopmentAgencyHero} />
      <IndustryBrandsSection
        content={shopifyDevelopmentAgencyBrandConfig}
        heading={shopifyDevelopmentAgencyBrandsHeading}
        items={shopifyDevelopmentAgencyBrands}
      />
      <ShopifyStageServicesSection content={shopifyDevelopmentAgencyServices} />
      <PortfolioShowcaseSection
        className="our-work-sec pt-20 pb-20 max-[992px]:pt-10 max-[767px]:pt-0"
        columns={4}
        content={shopifyDevelopmentAgencyPortfolio}
        headerLayout="split"
        mobileColumns={2}
        sectionId="our_work"
        showMobileArrow={true}
        variant="liveGrid"
      />
      <ShopifyTeamBoxesSection content={shopifyDevelopmentAgencyTeam} />
      <PricingTableSection content={shopifyDevelopmentAgencyPricing} />
      <ShopifyHorizontalProcessSection content={shopifyDevelopmentAgencyProcess} />
      <HappyClientSection
        className="pt-0 max-[992px]:pt-0"
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

