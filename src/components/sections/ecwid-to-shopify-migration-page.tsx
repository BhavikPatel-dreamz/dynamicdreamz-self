import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { TwoColCenterImageSection } from "@/components/sections/two-col-center-image-section";
import {
  ecwidBenefitsContent,
  ecwidBrandLogos,
  ecwidConsiderationsContent,
  ecwidFaqs,
  ecwidHeroContent,
  ecwidProcessContent,
  ecwidWhyMigrate,
} from "@/content/ecwid-to-shopify-migration";

export function EcwidToShopifyMigrationPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec woocommerce-to-shopify relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[991px]:pt-[100px]"
        content={ecwidHeroContent}
        variant="split"
      />
      <IndustryBrandsSection
        content={{
          slug: "ecwid-to-shopify-migration",
          ariaLabel: "Brands that trust Dynamic Dreamz for Ecwid to Shopify migration",
        }}
        heading="Trusted by <br> Leading Brands"
        items={ecwidBrandLogos}
      />
      <TextBoxSection
        className="single-text-box-sec py-20 max-[991px]:py-[50px]"
        heading={ecwidWhyMigrate.heading}
        text={ecwidWhyMigrate.text}
      />
      <ShopifyReasonsSection
        className="shopify-customization-services-sec mb-0 py-20 max-[767px]:py-[60px]"
        content={ecwidBenefitsContent}
        id="benefits-of-moving"
      />
      <TwoColCenterImageSection
        content={ecwidConsiderationsContent}
        id="things-to-consider"
      />
      <MigrationProcessSection
        content={ecwidProcessContent}
        id="migration-process"
      />
      <HappyClientSection
        description="We have faith in our work, but what truly matters is the outcomes we serve our clients. <br> Happy clients make happy stories: Check out how our services empower them to evolve."
        heading="Our Customers' Testimonials"
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[767px]:pb-[60px]"
        idPrefix="ecwid-migration-faq"
        items={ecwidFaqs}
      />
    </div>
  );
}
