import { ShopifyHoursHeroSection } from "@/components/sections/buy-shopify-development-hours/shopify-hours-hero-section";
import { ShopifyHoursComparisonSection } from "@/components/blocks/EngagementModelsBlock";
import { ShopifyHoursTasksSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { BrandPartnersSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { NumberedProcessTimelineSection } from "@/components/blocks/ProcessWorkflowBlock";
import { ShopifyTeamBoxesSection } from "@/components/blocks/WhyChooseUsBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { ThemeCustomizationServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import {
  shopifyHoursAudiences,
  shopifyHoursClientLogos,
  shopifyHoursCommitments,
  shopifyHoursFaqs,
  shopifyHoursMobileLogoRows,
  shopifyHoursProcess,
  shopifyHoursSectionCopy,
} from "@/content/buy-shopify-development-hours";

export function BuyShopifyDevelopmentHoursPage() {
  return (
    <div>
      <ShopifyHoursHeroSection />
      <ThemeCustomizationServicesSection
        className="pt-0 max-[991px]:pt-0"
        content={shopifyHoursCommitments}
        variant="transparent"
      />
      <ShopifyTeamBoxesSection content={shopifyHoursAudiences} />
      <ShopifyHoursComparisonSection />
      <ShopifyHoursTasksSection />
      <NumberedProcessTimelineSection
        className="engagement-section"
        description={shopifyHoursProcess.description}
        eyebrow={shopifyHoursProcess.eyebrow}
        heading={shopifyHoursProcess.heading}
        headingId="shopify-hours-process-title"
        items={shopifyHoursProcess.items}
        layout="split"
      />
      <BrandPartnersSection
        description={shopifyHoursSectionCopy.brandsDescription}
        heading={shopifyHoursSectionCopy.brandsHeading}
        items={shopifyHoursClientLogos}
        mobileRows={shopifyHoursMobileLogoRows}
        variant="shopifyHours"
      />
      <SplitFaqSection
        idPrefix="buy-shopify-development-hours-faq"
        items={shopifyHoursFaqs}
      />
    </div>
  );
}
