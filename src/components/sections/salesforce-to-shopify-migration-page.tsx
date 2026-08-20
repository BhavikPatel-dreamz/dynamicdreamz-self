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
} from "@/content/salesforce-to-shopify-migration";

export function SalesforceToShopifyMigrationPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec woocommerce-to-shopify relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[991px]:pt-[100px]"
        content={salesforceHeroContent}
        variant="split"
      />
      <IndustryBrandsSection
        content={{
          slug: "salesforce-to-shopify-migration",
          ariaLabel: "Brands that trust Dynamic Dreamz for Salesforce to Shopify migration",
        }}
        heading="Trusted by <br> Leading Brands"
        items={salesforceBrandLogos}
      />
      <TextBoxSection
        className="single-text-box-sec py-20 max-[991px]:py-[50px]"
        heading={salesforceWhyMigrate.heading}
        text={salesforceWhyMigrate.text}
      />
      <ShopifyReasonsSection
        className="shopify-customization-services-sec mb-0 py-20 max-[767px]:py-[60px]"
        content={salesforceBenefitsContent}
        id="benefits-of-moving"
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
        className="why_dynamic_dreamz_sec dev mb-20 pb-20 bg-[linear-gradient(180deg,#F2F9F5_0%,rgba(242,249,245,0)_100%)] two-column-icon-text-bg max-[767px]:mb-[50px] max-[767px]:pb-[50px]"
        content={salesforceWhyChooseContent}
        id="why-choose-dynamic-dreamz"
      />
      <HappyClientSection
        description="We have faith in our work, but what truly matters is the outcomes we serve our clients. <br> Happy clients make happy stories: Check out how our services empower them to evolve."
        heading="Our Customers' Testimonials"
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[767px]:pb-[60px]"
        idPrefix="salesforce-migration-faq"
        items={salesforceFaqs}
      />
    </div>
  );
}
