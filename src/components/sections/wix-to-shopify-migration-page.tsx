import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { TwoColCenterImageSection } from "@/components/sections/two-col-center-image-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import {
  wixBrandLogos,
  wixConsiderationsContent,
  wixHeroContent,
  wixProcessContent,
  wixWhatAfterContent,
  wixWhyChooseContent,
  wixFaqs,
  wixMigrationSectionCopy,
  wixTestimonials,
} from "@/content/wix-to-shopify-migration";

export function WixToShopifyMigrationPage() {
  return (
    <>
      <ServiceHeroSection content={wixHeroContent} />
      <IndustryBrandsSection
        content={{
          slug: "wix-to-shopify-migration",
        }}
        heading={wixMigrationSectionCopy.brandsHeading}
        items={wixBrandLogos}
      />
      <TextBoxSection
        className="single-text-box-sec py-20 max-[991px]:py-15"
        heading={wixMigrationSectionCopy.whyMigrateHeading}
        text={wixMigrationSectionCopy.whyMigrateText}
      />
      <TwoColCenterImageSection content={wixConsiderationsContent} />
      <MigrationProcessSection content={wixProcessContent} />
      <ThemeWhyChooseSection
        className="why_dynamic_dreamz_sec dev pt-0 pb-20 two-column-icon-text-bg two-column-top-icon-text"
        content={wixWhatAfterContent}
        variant="top-icon"
      />
      <ShopifyReasonsSection
        carouselFullBleed
        content={wixWhyChooseContent}
        id="benefits-of-moving"
        layout="carousel"
      />
      <HappyClientSection
        controlsLabels={wixTestimonials.controlsLabels}
        description={wixMigrationSectionCopy.testimonialsDescription}
        eyebrow={wixTestimonials.eyebrow}
        heading={wixMigrationSectionCopy.testimonialsHeading}
        items={wixTestimonials.items}
        variant="client-stories"
      />
      <SplitFaqSection
        idPrefix="wix-migration-faq"
        items={wixFaqs}
      />
    </>
  );
}
