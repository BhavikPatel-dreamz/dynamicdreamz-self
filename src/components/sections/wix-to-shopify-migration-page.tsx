import { FaqSection } from "@/components/sections/faq-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { TwoColCenterImageSection } from "@/components/sections/two-col-center-image-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import {
  wixBrandLogos,
  wixConsiderationsContent,
  wixHeroContent,
  wixProcessContent,
  wixWhatAfterContent,
  wixWhyChooseContent,
  wixFaqs,
} from "@/content/wix-to-shopify-migration";

export function WixToShopifyMigrationPage() {
  return (
    <>
      <ServiceHeroSection content={wixHeroContent} />
            <IndustryBrandsSection
        content={{
          slug: "wix-to-shopify-migration",
          ariaLabel: "Brands that trust Dynamic Dreamz for Wix to Shopify migration",
        }}
        heading="Trusted by Leading Brands"
        items={wixBrandLogos}
      />
      <TextBoxSection
        className="single-text-box-sec "
        heading="Why Migrate from Wix to Shopify? "
        text="If you want more features and benefits for your online store, Migrate from Wix to Shopify. Shopify is a straightforward eCommerce platform that offers a user friendly experience, robust security, advanced features, and a wide range of apps to expand the store’s functionality. If you migrate from the Wix store to Shopify, you can achieve a secure, scalable, and engaging buying experience."
      />
      <TwoColCenterImageSection content={wixConsiderationsContent} />
      <MigrationProcessSection content={wixProcessContent} />
      <ThemeWhyChooseSection
        className="why_dynamic_dreamz_sec dev pt-0 pb-80 two-column-icon-text-bg two-column-top-icon-text"
        content={wixWhatAfterContent}
        variant="top-icon"
      />
      <ShopifyReasonsSection
        className="shopify-customization-services-sec mb-80"
        content={wixWhyChooseContent}
      />
      <HappyClientSection />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[767px]:pb-[60px]"
        idPrefix="wix-migration-faq"
        items={wixFaqs}
      />
    </>
  );
}
