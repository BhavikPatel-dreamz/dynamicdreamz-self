import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationPlatformIcon } from "@/components/sections/migration-platform-icons";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import {
  etsyBenefitsContent,
  etsyBrandLogos,
  etsyFaqs,
  etsyHeroContent,
  etsyMigrationSectionCopy,
  etsyProcessContent,
  etsyTestimonials,
  etsyWhyMigrateContent,
} from "@/content/etsy-to-shopify-migration";

export function EtsyToShopifyMigrationPage() {
  const whyMigrateBoxes = etsyWhyMigrateContent.boxes.map((box) => ({
    icon: <MigrationPlatformIcon name={box.iconName} />,
    title: box.title,
    description: box.description,
  }));

  const benefitsBoxes = etsyBenefitsContent.boxes.map((box) => ({
    icon: <MigrationPlatformIcon name={box.iconName} />,
    title: box.title,
    description: box.description,
  }));

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero Section */}
      <ServiceHeroVideoSection content={etsyHeroContent} />

      {/* 2. Brand Partners Section */}
      <IndustryBrandsSection
        content={{
          slug: "etsy-to-shopify-migration",
        }}
        heading={etsyMigrationSectionCopy.brandsHeading}
        items={etsyBrandLogos}
      />

      {/* 3. Why Migrate from Etsy to Shopify? */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: etsyWhyMigrateContent.eyebrow,
          heading: etsyWhyMigrateContent.heading,
          description: etsyWhyMigrateContent.description,
          boxes: whyMigrateBoxes,
        }}
        id="why-migrate"
        variant="yellow"
      />

      {/* 4. Benefits of Moving from Etsy to Shopify */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: etsyBenefitsContent.eyebrow,
          heading: etsyBenefitsContent.heading,
          description: etsyBenefitsContent.description,
          boxes: benefitsBoxes,
        }}
        id="benefits"
        variant="transparent"
      />

      {/* 5. Etsy to Shopify Migration Process */}
      <MigrationProcessSection
        content={etsyProcessContent}
        id="migration-process"
        variant="cards"
      />

      {/* 6. Testimonials */}
      <HappyClientSection
        description={etsyTestimonials.description}
        eyebrow={etsyTestimonials.eyebrow}
        heading={etsyTestimonials.heading}
        items={etsyTestimonials.items}
      />

      {/* 7. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="etsy-migration-faq"
        items={etsyFaqs}
        sectionId="faqs"
      />
    </div>
  );
}
