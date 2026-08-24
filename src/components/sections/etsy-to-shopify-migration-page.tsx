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
  etsyBenefitsContent,
  etsyBrandLogos,
  etsyConsiderationsContent,
  etsyFaqs,
  etsyHeroContent,
  etsyProcessContent,
  etsyWhatAfterContent,
  etsyWhyChooseContent,
  etsyWhyMigrate,
} from "@/content/etsy-to-shopify-migration";

export function EtsyToShopifyMigrationPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec woocommerce-to-shopify relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[991px]:pt-[100px]"
        content={etsyHeroContent}
        variant="split"
      />
      <IndustryBrandsSection
        content={{
          slug: "etsy-to-shopify-migration",
          ariaLabel: "Brands that trust Dynamic Dreamz for Etsy to Shopify migration",
        }}
        heading="Trusted by Leading Brands"
        items={etsyBrandLogos}
      />
      <TextBoxSection
        className="single-text-box-sec py-20 max-[991px]:py-[50px]"
        heading={etsyWhyMigrate.heading}
        text={etsyWhyMigrate.text}
      />
      <ShopifyReasonsSection
        className="shopify-customization-services-sec mb-20 py-20 max-[767px]:mb-[50px] max-[767px]:py-[60px]"
        content={etsyBenefitsContent}
        id="benefits-of-moving"
      />
      <TwoColCenterImageSection
        content={etsyConsiderationsContent}
        id="things-to-consider"
      />
      <MigrationProcessSection
        content={etsyProcessContent}
        id="migration-process"
      />
      <ThemeWhyChooseSection
        className="why_dynamic_dreamz_sec dev pt-0 pb-20 two-column-icon-text-bg two-column-top-icon-text max-[767px]:pb-[50px]"
        content={etsyWhatAfterContent}
        id="what-after-migration"
        variant="top-icon"
      />
      <ThemeWhyChooseSection
        className="why_dynamic_dreamz_sec dev mb-20 pb-20 bg-[linear-gradient(180deg,#F2F9F5_0%,rgba(242,249,245,0)_100%)] two-column-icon-text-bg max-[767px]:mb-[50px] max-[767px]:pb-[50px]"
        content={etsyWhyChooseContent}
        id="why-choose-dynamic-dreamz"
      />
      <HappyClientSection
        description="We have faith in our work, but what truly matters is the outcomes we serve our clients. <br> Happy clients make happy stories: Check out how our services empower them to evolve."
        heading="Our Customers' Testimonials"
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[767px]:pb-[60px]"
        idPrefix="etsy-migration-faq"
        items={etsyFaqs}
      />
    </div>
  );
}
