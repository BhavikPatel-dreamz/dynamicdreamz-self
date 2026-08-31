import { FaqSection } from "@/components/sections/faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import {
  woocommerceBrandLogos,
  woocommerceFaqs,
  woocommerceHeroContent,
  woocommerceProcessContent,
  woocommerceWhyMigrate,
  woocommerceMigrationSectionCopy,
} from "@/content/woocommerce-to-shopify-migration";

export function WooCommerceToShopifyMigrationPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec woocommerce-to-shopify relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={woocommerceHeroContent}
        variant="split"
      />
      <IndustryBrandsSection
        content={{
          slug: "woocommerce-to-shopify-migration",
        }}
        heading={woocommerceMigrationSectionCopy.brandsHeading}
        items={woocommerceBrandLogos}
      />
      <TextBoxSection
        className="single-text-box-sec py-20 max-[992px]:py-[50px]"
        heading={woocommerceWhyMigrate.heading}
        text={woocommerceWhyMigrate.text}
      />
      <MigrationProcessSection
        content={woocommerceProcessContent}
        id="migration-process"
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[767px]:pb-[60px]"
        idPrefix="woocommerce-migration-faq"
        items={woocommerceFaqs}
      />
    </div>
  );
}
