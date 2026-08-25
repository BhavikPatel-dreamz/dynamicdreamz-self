import { FaqSection } from "@/components/sections/faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PartnerWhyChooseSection } from "@/components/sections/magento-to-shopify-plus/partner-why-choose-section";
import { WhatDataTransferSection } from "@/components/sections/magento-to-shopify-plus/what-data-transfer-section";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ShopifyAppBenefitsSection } from "@/components/sections/shopify-mobile-app/shopify-app-benefits-section";
import {
  magentoPlusBenefitsContent,
  magentoPlusBrandLogos,
  magentoPlusFaqs,
  magentoPlusHeroContent,
  magentoPlusProcessContent,
  magentoPlusWhatDataContent,
  magentoPlusMigrationSectionCopy,
  magentoPlusWhyChooseContent,
} from "@/content/magento-to-shopify-plus-migration";

export function MagentoToShopifyPlusMigrationPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec woocommerce-to-shopify relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[991px]:pt-[100px]"
        content={magentoPlusHeroContent}
        variant="split"
      />
      <IndustryBrandsSection
        content={{
          slug: "magento-to-shopify-plus-migration",
        }}
        heading={magentoPlusMigrationSectionCopy.brandsHeading}
        items={magentoPlusBrandLogos}
      />
      <ShopifyAppBenefitsSection
        className="benefit_box_sec justify-left py-20 max-[767px]:py-[50px]"
        content={magentoPlusBenefitsContent}
        id="benefits"
      />
      <WhatDataTransferSection
        content={magentoPlusWhatDataContent}
        id="what-data-we-transfer"
      />
      <MigrationProcessSection
        content={magentoPlusProcessContent}
        id="migration-process"
      />
      <PartnerWhyChooseSection
        content={magentoPlusWhyChooseContent}
        id="why-choose-dynamic-dreamz"
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[767px]:pb-[60px]"
        idPrefix="magento-plus-migration-faq"
        items={magentoPlusFaqs}
      />
    </div>
  );
}
