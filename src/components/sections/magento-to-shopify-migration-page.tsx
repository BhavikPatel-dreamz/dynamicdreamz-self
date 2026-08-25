import { FaqSection } from "@/components/sections/faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import {
  magentoBrandLogos,
  magentoFaqs,
  magentoHeroContent,
  magentoProcessContent,
  magentoWhyMigrate,
  magentoMigrationSectionCopy,
} from "@/content/magento-to-shopify-migration";

export function MagentoToShopifyMigrationPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec magento-to-shopify relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[991px]:pt-[100px]"
        content={magentoHeroContent}
        variant="split"
      />
      <IndustryBrandsSection
        content={{
          slug: "magento-to-shopify-migration",
        }}
        heading={magentoMigrationSectionCopy.brandsHeading}
        items={magentoBrandLogos}
      />
      <TextBoxSection
        className="single-text-box-sec py-20 max-[991px]:py-[50px]"
        heading={magentoWhyMigrate.heading}
        paragraphs={magentoWhyMigrate.paragraphs}
      />
      <MigrationProcessSection
        content={magentoProcessContent}
        id="migration-process"
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[767px]:pb-[60px]"
        idPrefix="magento-migration-faq"
        items={magentoFaqs}
      />
    </div>
  );
}
