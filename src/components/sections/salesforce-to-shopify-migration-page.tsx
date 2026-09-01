import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { TwoColCenterImageSection } from "@/components/sections/two-col-center-image-section";
import {
  salesforceBenefitsContent,
  salesforceBrandLogos,
  salesforceConsiderationsContent,
  salesforceFaqs,
  salesforceHeroContent,
  salesforceProcessContent,
  salesforceWhyChooseContent,
  salesforceWhyMigrate,
  salesforceMigrationSectionCopy,
} from "@/content/salesforce-to-shopify-migration";
import { wixTestimonials } from "@/content/wix-to-shopify-migration";
import { SplitFaqSection } from "./split-faq-section";

export function SalesforceToShopifyMigrationPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec woocommerce-to-shopify relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={salesforceHeroContent}
        variant="split"
      />
      <IndustryBrandsSection
        content={{
          slug: "salesforce-to-shopify-migration",
        }}
        heading={salesforceMigrationSectionCopy.brandsHeading}
        items={salesforceBrandLogos}
      />
      <TextBoxSection
        className="single-text-box-sec py-20 max-[992px]:py-[50px]"
        heading={salesforceWhyMigrate.heading}
        text={salesforceWhyMigrate.text}
      />
      <ShopifyReasonsSection
        carouselFullBleed
        content={salesforceBenefitsContent}
        id="benefits-of-moving"
        layout="carousel"
      />
      <TwoColCenterImageSection
        content={salesforceConsiderationsContent}
        id="things-to-consider"
      />
      <MigrationProcessSection
        content={salesforceProcessContent}
        id="migration-process"
      />
      <ThemeWhyChooseSection
        backgroundVariant="gradient"
        content={salesforceWhyChooseContent}
        id="why-choose-dynamic-dreamz"
      />
      <HappyClientSection
        controlsLabels={wixTestimonials.controlsLabels}
        description={salesforceMigrationSectionCopy.testimonialsDescription}
        eyebrow={wixTestimonials.eyebrow}
        heading={salesforceMigrationSectionCopy.testimonialsHeading}
        items={wixTestimonials.items}
        variant="client-stories"
      />
      <SplitFaqSection
        idPrefix="salesforce-migration-faq"
        items={salesforceFaqs}
      />
    </div>
  );
}
