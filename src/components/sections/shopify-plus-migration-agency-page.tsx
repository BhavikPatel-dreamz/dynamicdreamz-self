import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ShopifyMigrationServicesSection } from "@/components/sections/shopify-migration/shopify-migration-services-section";
import { ShopifyAppBenefitsSection } from "@/components/sections/shopify-mobile-app/shopify-app-benefits-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import {
  plusAgencyBrandLogos,
  plusAgencyFaqs,
  plusAgencyHeroContent,
  plusAgencyPlatformCards,
  plusAgencyPlatformsHeader,
  plusAgencyProcessContent,
  plusAgencyServicesContent,
  plusAgencyWhyChooseDD,
  plusAgencyWhyChooseIntro,
  plusAgencyMigrationSectionCopy,
} from "@/content/shopify-plus-migration-agency";

export function ShopifyPlusMigrationAgencyPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec full-width-sec mxw-100 relative overflow-hidden bg-white pt-[210px] pb-[55px] max-[992px]:pt-[100px]"
        content={plusAgencyHeroContent}
        variant="centered"
      />
      <IndustryBrandsSection
        content={{
          slug: "shopify-plus-migration-agency",
        }}
        heading={plusAgencyMigrationSectionCopy.brandsHeading}
        items={plusAgencyBrandLogos}
      />
      <TextBoxSection
        className="single-text-box-sec py-20 max-[992px]:py-[50px]"
        heading={plusAgencyWhyChooseIntro.heading}
        paragraphs={plusAgencyWhyChooseIntro.paragraphs}
      />
      <ShopifyAppBenefitsSection
        className="benefit_box_sec pt-0 pb-20 max-[767px]:pb-[50px]"
        content={plusAgencyServicesContent}
        id="services"
      />
      <MigrationProcessSection
        content={plusAgencyProcessContent}
        id="migration-process"
      />
      <ShopifyMigrationServicesSection
        className="migration-services-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        description={plusAgencyPlatformsHeader.description}
        heading={plusAgencyPlatformsHeader.heading}
        items={plusAgencyPlatformCards}
      />
      <TextBoxSection
        className="single-text-box-sec py-20 max-[992px]:py-[50px]"
        heading={plusAgencyWhyChooseDD.heading}
        paragraphs={plusAgencyWhyChooseDD.paragraphs}
      />
      <SplitFaqSection
        idPrefix="shopify-plus-migration-faq"
        items={plusAgencyFaqs}
      />
    </div>
  );
}
