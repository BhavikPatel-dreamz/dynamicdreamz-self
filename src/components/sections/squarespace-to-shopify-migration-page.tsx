import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { TwoColCenterImageSection } from "@/components/sections/two-col-center-image-section";
import { salesforceFaqs } from "@/content/salesforce-to-shopify-migration";
import {
  squarespaceBenefitsContent,
  squarespaceBrandLogos,
  squarespaceConsiderationsContent,
  squarespaceFaqs,
  squarespaceHeroContent,
  squarespaceProcessContent,
  squarespaceWhatAfterContent,
  squarespaceWhyChooseContent,
  squarespaceWhyMigrate,
  squarespaceMigrationSectionCopy,
} from "@/content/squarespace-to-shopify-migration";
import { wixTestimonials } from "@/content/wix-to-shopify-migration";
import { SplitFaqSection } from "./split-faq-section";

export function SquarespaceToShopifyMigrationPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec woocommerce-to-shopify relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={squarespaceHeroContent}
        variant="split"
      />
      <IndustryBrandsSection
        content={{
          slug: "squarespace-to-shopify-migration",
        }}
        heading={squarespaceMigrationSectionCopy.brandsHeading}
        items={squarespaceBrandLogos}
      />
      <TextBoxSection
        className="single-text-box-sec py-20 max-[992px]:py-[50px]"
        heading={squarespaceWhyMigrate.heading}
        text={squarespaceWhyMigrate.text}
      />
      <ShopifyReasonsSection
        carouselFullBleed
        content={squarespaceBenefitsContent}
        id="benefits-of-moving"
        layout="carousel"
      />
      <TwoColCenterImageSection
        content={squarespaceConsiderationsContent}
        id="things-to-consider"
      />
      <MigrationProcessSection
        content={squarespaceProcessContent}
        id="migration-process"
      />
      <ThemeWhyChooseSection
        className="why_dynamic_dreamz_sec dev pt-0 pb-20 two-column-top-icon-text max-[767px]:pb-[50px]"
        content={squarespaceWhatAfterContent}
        id="what-after-migration"
        variant="top-icon"
      />
      <ThemeWhyChooseSection
        backgroundVariant="gradient"
        content={squarespaceWhyChooseContent}
        id="why-choose-dynamic-dreamz"
      />
      <HappyClientSection
        controlsLabels={wixTestimonials.controlsLabels}
        description={squarespaceMigrationSectionCopy.testimonialsDescription}
        eyebrow={wixTestimonials.eyebrow}
        heading={squarespaceMigrationSectionCopy.testimonialsHeading}
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
