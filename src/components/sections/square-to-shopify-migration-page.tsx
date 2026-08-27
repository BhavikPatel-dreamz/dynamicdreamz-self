import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import {
  squareBrandLogos,
  squareFaqs,
  squareHeroContent,
  squareProcessContent,
  squareWhyMigrate,
  squareMigrationSectionCopy,
  squareTestimonials,
} from "@/content/square-to-shopify-migration";

export function SquareToShopifyMigrationPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec woocommerce-to-shopify relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[991px]:pt-[100px]"
        content={squareHeroContent}
        variant="split"
      />
      <IndustryBrandsSection
        content={{
          slug: "square-to-shopify-migration",
        }}
        density="compact"
        heading={squareMigrationSectionCopy.brandsHeading}
        items={squareBrandLogos}
      />
      <TextBoxSection
        className="single-text-box-sec py-20 max-[991px]:py-[50px]"
        heading={squareWhyMigrate.heading}
        text={squareWhyMigrate.text}
      />
      <MigrationProcessSection
        content={squareProcessContent}
        id="migration-process"
      />
      <HappyClientSection
        controlsLabels={squareTestimonials.controlsLabels}
        description={squareMigrationSectionCopy.testimonialsDescription}
        eyebrow={squareTestimonials.eyebrow}
        heading={squareMigrationSectionCopy.testimonialsHeading}
        items={squareTestimonials.items}
        variant="client-stories"
      />
      <SplitFaqSection
        idPrefix="square-migration-faq"
        items={squareFaqs}
      />
    </div>
  );
}
