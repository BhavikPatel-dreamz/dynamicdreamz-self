import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationPlatformIcon } from "@/components/sections/migration-platform-icons";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import {
  prestashopBenefitsContent,
  prestashopBrandLogos,
  prestashopFaqs,
  prestashopHeroContent,
  prestashopMigrationSectionCopy,
  prestashopProcessContent,
  prestashopTestimonials,
} from "@/content/prestashop-to-shopify-migration";

export function PrestashopToShopifyMigrationPage() {
  const benefitsBoxes = prestashopBenefitsContent.boxes.map((box) => ({
    icon: <MigrationPlatformIcon name={box.iconName} />,
    title: box.title,
    description: box.description,
  }));

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero Section */}
      <ServiceHeroVideoSection content={prestashopHeroContent} />

      {/* 2. Brand Partners Section */}
      <IndustryBrandsSection
        content={{
          slug: "prestashop-to-shopify-migration",
        }}
        heading={prestashopMigrationSectionCopy.brandsHeading}
        items={prestashopBrandLogos}
      />

      {/* 3. Benefits of Moving from PrestaShop to Shopify */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: prestashopBenefitsContent.eyebrow,
          heading: prestashopBenefitsContent.heading,
          description: prestashopBenefitsContent.description,
          boxes: benefitsBoxes,
        }}
        id="benefits"
        variant="transparent"
      />

      {/* 4. PrestaShop to Shopify Migration Process */}
      <MigrationProcessSection
        content={prestashopProcessContent}
        id="migration-process"
        variant="cards"
      />

      {/* 5. Testimonials */}
      <HappyClientSection
        description={prestashopTestimonials.description}
        eyebrow={prestashopTestimonials.eyebrow}
        heading={prestashopTestimonials.heading}
        items={prestashopTestimonials.items}
      />

      {/* 6. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="prestashop-migration-faq"
        items={prestashopFaqs}
        sectionId="faqs"
      />
    </div>
  );
}
