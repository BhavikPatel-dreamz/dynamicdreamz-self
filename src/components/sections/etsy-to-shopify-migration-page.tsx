import { SplitFaqSection } from "./split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { TwoColCenterImageSection } from "@/components/sections/two-col-center-image-section";
import {
  etsyBenefitsContent,
  etsyBrandLogos,
  etsyConsiderationsContent,
  etsyFaqs,
  etsyHeroContent,
  etsyProcessContent,
  etsyWhatAfterContent,
  etsyWhyChooseContent,
  etsyWhyMigrate,
  etsyMigrationSectionCopy,
  etsyTestimonials,
} from "@/content/etsy-to-shopify-migration";

export function EtsyToShopifyMigrationPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec woocommerce-to-shopify relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[991px]:pt-[100px]"
        content={etsyHeroContent}
        variant="split"
      />
      <IndustryBrandsSection
        content={{
          slug: "etsy-to-shopify-migration",
        }}
        heading={etsyMigrationSectionCopy.brandsHeading}
        items={etsyBrandLogos}
      />
      <TextBoxSection
        className="single-text-box-sec py-20 max-[991px]:py-[50px]"
        heading={etsyWhyMigrate.heading}
        text={etsyWhyMigrate.text}
      />
      <ShopifyReasonsSection
        carouselFullBleed
        content={etsyBenefitsContent}
        id="benefits-of-moving"
        layout="carousel"
      />
      <TwoColCenterImageSection
        content={etsyConsiderationsContent}
        id="things-to-consider"
      />
      <MigrationProcessSection
        content={etsyProcessContent}
        id="migration-process"
      />
      <ThemeWhyChooseSection
        className="why_dynamic_dreamz_sec dev pt-0 two-column-icon-text-bg two-column-top-icon-text max-[767px]:pb-[50px]"
        content={etsyWhatAfterContent}
        id="what-after-migration"
        variant="top-icon"
      />
      <ThemeWhyChooseSection
        content={etsyWhyChooseContent}
        id="why-choose-dynamic-dreamz"
      />
      <HappyClientSection
        controlsLabels={etsyTestimonials.controlsLabels}
        description={etsyMigrationSectionCopy.testimonialsDescription}
        eyebrow={etsyTestimonials.eyebrow}
        heading={etsyMigrationSectionCopy.testimonialsHeading}
        items={etsyTestimonials.items}
        variant="client-stories"
      />
       <SplitFaqSection
        idPrefix="etsy-migration-faq"
        items={etsyFaqs}
            />
    </div>
  );
}
