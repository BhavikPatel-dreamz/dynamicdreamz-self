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
          ariaLabel: "Brands that trust Dynamic Dreamz for Square to Shopify migration",
        }}
        heading="Trusted by <br> Leading Brands"
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
        description="We have faith in our work, but what truly matters is the outcomes we serve our clients. <br> Happy clients make happy stories: Check out how our services empower them to evolve."
        heading="Our Customers' Testimonials"
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[767px]:pb-[60px]"
        idPrefix="square-migration-faq"
        items={squareFaqs}
      />
    </div>
  );
}
