import { FaqSection } from "@/components/sections/faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import {
  squareBrandLogos,
  squareFaqs,
  squareHeroContent,
  squareProcessContent,
  squareWhyMigrate,
  squareMigrationSectionCopy,
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
        description={squareMigrationSectionCopy.testimonialsDescription}
        heading={squareMigrationSectionCopy.testimonialsHeading}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[767px]:pb-[60px]"
        idPrefix="square-migration-faq"
        items={squareFaqs}
      />
    </div>
  );
}
