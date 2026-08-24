import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { TwoColCenterImageSection } from "@/components/sections/two-col-center-image-section";
import {
  prestashopBenefitsContent,
  prestashopBrandLogos,
  prestashopConsiderationsContent,
  prestashopFaqs,
  prestashopHeroContent,
  prestashopProcessContent,
  prestashopWhyChooseContent,
  prestashopWhyMigrate,
} from "@/content/prestashop-to-shopify-migration";

export function PrestashopToShopifyMigrationPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec woocommerce-to-shopify relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[991px]:pt-[100px]"
        content={prestashopHeroContent}
        variant="split"
      />
      <IndustryBrandsSection
        content={{
          slug: "prestashop-to-shopify-migration",
          ariaLabel: "Brands that trust Dynamic Dreamz for PrestaShop to Shopify migration",
        }}
        density="compact"
        heading="Trusted by Leading Brands"
        items={prestashopBrandLogos}
      />
      <TextBoxSection
        className="single-text-box-sec py-20 max-[991px]:py-[50px]"
        heading={prestashopWhyMigrate.heading}
        text={prestashopWhyMigrate.text}
      />
      <ShopifyReasonsSection
        carouselFullBleed
        className="shopify-customization-services-sec mb-20 bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] py-20 max-[991px]:mb-[50px] max-[991px]:py-[50px]"
        content={prestashopBenefitsContent}
        id="benefits-of-moving"
        layout="carousel"
      />
      <TwoColCenterImageSection
        content={prestashopConsiderationsContent}
        id="things-to-consider"
      />
      <MigrationProcessSection
        content={prestashopProcessContent}
        id="migration-process"
        titleAlign="center"
      />
      <ShopifyReasonsSection
        carouselFullBleed
        className="shopify-customization-services-sec mb-20 bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] py-20 max-[991px]:mb-[50px] max-[991px]:py-[50px]"
        content={prestashopWhyChooseContent}
        id="why-choose-dynamicdreamz"
        layout="carousel"
      />
      <HappyClientSection
        description="We have faith in our work, but what truly matters is the outcomes we serve our clients. <br> Happy clients make happy stories: Check out how our services empower them to evolve."
        heading="Our Customers' Testimonials"
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[767px]:pb-[60px]"
        idPrefix="prestashop-migration-faq"
        items={prestashopFaqs}
      />
    </div>
  );
}
