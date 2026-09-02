import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { DifferenceCardSection } from "@/components/sections/difference-card-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import {
  bigcommerceDataSecuredContent,
  bigcommerceDifferenceContent,
  bigcommerceBrandLogos,
  bigcommerceFaqs,
  bigcommerceHeroContent,
  bigcommerceMigrationSectionCopy,
  bigcommerceProcessContent,
  bigcommerceWhyChooseContent,
  bigcommerceWhyMigrate,
} from "@/content/bigcommerce-to-shopify-migration";
import { wixTestimonials } from "@/content/wix-to-shopify-migration";

export function BigCommerceToShopifyMigrationPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec woocommerce-to-shopify relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={bigcommerceHeroContent}
        variant="split"
      />
      <IndustryBrandsSection
        content={{
          slug: "bigcommerce-to-shopify-migration",
        }}
        heading={bigcommerceMigrationSectionCopy.brandsHeading}
        items={bigcommerceBrandLogos}
      />
      <TextBoxSection
        className="single-text-box-sec py-20 max-[992px]:py-[50px]"
        heading={bigcommerceWhyMigrate.heading}
        text={bigcommerceWhyMigrate.text}
      />
      <DifferenceCardSection
        content={bigcommerceDifferenceContent}
        id="difference"
      />
      <MigrationProcessSection
        content={bigcommerceProcessContent}
        id="migration-process"
      />
      <ShopifyReasonsSection
        carouselFullBleed
        className="shopify-customization-services-sec mb-20 bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] py-20 max-[992px]:mb-[50px] max-[992px]:py-[50px]"
        content={bigcommerceWhyChooseContent}
        id="why-choose-dynamicdreamz"
        layout="carousel"
      />
      <AgencyServicesSection
        className="what-we-provide-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        columns={3}
        content={bigcommerceDataSecuredContent}
        headerLayout="split"
        id="services"
        variant="compact"
      />
      <HappyClientSection
        controlsLabels={wixTestimonials.controlsLabels}
        description={bigcommerceMigrationSectionCopy.testimonialsDescription}
        eyebrow={wixTestimonials.eyebrow}
        heading={bigcommerceMigrationSectionCopy.testimonialsHeading}
        items={wixTestimonials.items}
        variant="client-stories"
      />
      <SplitFaqSection
        idPrefix="bigcommerce-migration-faq"
        items={bigcommerceFaqs}
      />
    </div>
  );
}
