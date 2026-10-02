import { ShopifyHoursHeroSection } from "@/components/sections/buy-shopify-development-hours/shopify-hours-hero-section";
import {
  ShopifyHoursComparisonSection,
  ShopifyHoursTasksSection,
} from "@/components/sections/buy-shopify-development-hours/shopify-hours-content-sections";
import { BrandPartnersSection } from "@/components/sections/home/brand-partners-section";
import { NumberedProcessTimelineSection } from "@/components/sections/numbered-process-timeline-section";
import { ShopifyTeamBoxesSection } from "@/components/sections/shopify-team-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
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
    <div className="font-sans leading-[30.4px]">
      <ShopifyHoursHeroSection />
      <ThemeCustomizationServicesSection
        className="pt-0"
        content={shopifyHoursCommitments}
        variant="transparent"
      />
      <ShopifyTeamBoxesSection content={shopifyHoursAudiences} />
      <ShopifyHoursComparisonSection />
      <ShopifyHoursTasksSection />
      <NumberedProcessTimelineSection
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
