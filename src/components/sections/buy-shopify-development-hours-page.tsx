import { ShopifyHoursHeroSection } from "@/components/sections/buy-shopify-development-hours/shopify-hours-hero-section";
import {
  ShopifyHoursAudienceSection,
  ShopifyHoursCommitmentSection,
  ShopifyHoursComparisonSection,
  ShopifyHoursTasksSection,
} from "@/components/sections/buy-shopify-development-hours/shopify-hours-content-sections";
import { BrandPartnersSection } from "@/components/sections/home/brand-partners-section";
import { NumberedProcessTimelineSection } from "@/components/sections/numbered-process-timeline-section";
import { WhiteLabelFinalCtaSection } from "@/components/sections/white-label/white-label-closing-sections";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import {
  shopifyHoursClientLogos,
  shopifyHoursFaqs,
  shopifyHoursFinalCta,
  shopifyHoursMobileLogoRows,
  shopifyHoursProcess,
  shopifyHoursSectionCopy,
} from "@/content/buy-shopify-development-hours";

export function BuyShopifyDevelopmentHoursPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ShopifyHoursHeroSection />
      <ShopifyHoursCommitmentSection />
      <ShopifyHoursAudienceSection />
      <ShopifyHoursComparisonSection />
      <ShopifyHoursTasksSection />
      <NumberedProcessTimelineSection
        eyebrow={shopifyHoursProcess.eyebrow}
        heading={shopifyHoursProcess.heading}
        headingId="shopify-hours-process-title"
        items={shopifyHoursProcess.items}
      />
      <BrandPartnersSection
        description=""
        heading={shopifyHoursSectionCopy.brandsHeading}
        items={shopifyHoursClientLogos}
        mobileRows={shopifyHoursMobileLogoRows}
        variant="shopifyHours"
      />
      <SplitFaqSection
        idPrefix="buy-shopify-development-hours-faq"
        items={shopifyHoursFaqs}
      />
      <WhiteLabelFinalCtaSection
        cta={shopifyHoursFinalCta}
        variant="shopifyHours"
      />
    </div>
  );
}
