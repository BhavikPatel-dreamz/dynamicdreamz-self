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
import { FaqSection } from "@/components/sections/faq-section";
import {
  shopifyHoursClientLogos,
  shopifyHoursFaqs,
  shopifyHoursFinalCta,
  shopifyHoursMobileLogoRows,
  shopifyHoursProcess,
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
        heading="Brands That Trust Us"
        items={shopifyHoursClientLogos}
        mobileRows={shopifyHoursMobileLogoRows}
        variant="shopifyHours"
      />
      <FaqSection
        accordionIconClassName="min-[768px]:max-[1199px]:!right-8 min-[768px]:max-[1199px]:!size-8"
        accordionPanelContentClassName="min-[768px]:max-[1199px]:!px-8 min-[768px]:max-[1199px]:!pb-6"
        accordionTriggerClassName="min-[768px]:max-[1199px]:!py-6 min-[768px]:max-[1199px]:!pr-[70px] min-[768px]:max-[1199px]:!pl-8"
        className="bg-[#e6ecf0] py-20 max-[1199px]:py-[60px] max-[767px]:py-[50px]"
        headerClassName="mb-10 text-center max-[1199px]:mb-[30px]"
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
