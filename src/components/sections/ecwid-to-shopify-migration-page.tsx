import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { TwoColCenterImageSection } from "@/components/sections/two-col-center-image-section";
import {
  ecwidBenefitsContent,
  ecwidBrandLogos,
  ecwidConsiderationsContent,
  ecwidFaqs,
  ecwidHeroContent,
  ecwidProcessContent,
  ecwidWhyMigrate,
  ecwidMigrationSectionCopy,
} from "@/content/ecwid-to-shopify-migration";
import { wixTestimonials } from "@/content/wix-to-shopify-migration";
import { SplitFaqSection } from "./split-faq-section";

export function EcwidToShopifyMigrationPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec woocommerce-to-shopify relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[991px]:pt-[100px]"
        content={ecwidHeroContent}
        variant="split"
      />
      <IndustryBrandsSection
        content={{
          slug: "ecwid-to-shopify-migration",
        }}
        heading={ecwidMigrationSectionCopy.brandsHeading}
        items={ecwidBrandLogos}
      />
      <TextBoxSection
        className="single-text-box-sec py-20 max-[991px]:py-[50px]"
        heading={ecwidWhyMigrate.heading}
        text={ecwidWhyMigrate.text}
      />
      <ShopifyReasonsSection
        carouselFullBleed
        content={ecwidBenefitsContent}
        id="benefits-of-moving"
        layout="carousel"
      />
      <TwoColCenterImageSection
        content={ecwidConsiderationsContent}
        id="things-to-consider"
      />
      <MigrationProcessSection
        content={ecwidProcessContent}
        id="migration-process"
      />
      <HappyClientSection
        controlsLabels={wixTestimonials.controlsLabels}
        description={ecwidMigrationSectionCopy.testimonialsDescription}
        eyebrow={wixTestimonials.eyebrow}
        heading={ecwidMigrationSectionCopy.testimonialsHeading}
        items={wixTestimonials.items}
        variant="client-stories"
      />
      <SplitFaqSection
        idPrefix="ecwid-migration-faq"
        items={ecwidFaqs}
      />
    </div>
  );
}
