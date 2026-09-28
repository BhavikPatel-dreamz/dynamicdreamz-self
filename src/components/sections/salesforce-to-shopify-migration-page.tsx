import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationPlatformIcon } from "@/components/sections/migration-platform-icons";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import {
  salesforceBenefitsContent,
  salesforceBrandLogos,
  salesforceFaqs,
  salesforceHeroContent,
  salesforceMigrationSectionCopy,
  salesforceProcessContent,
  salesforceTestimonials,
  salesforceWhyMigrateContent,
} from "@/content/salesforce-to-shopify-migration";

export function SalesforceToShopifyMigrationPage() {
  const whyMigrateBoxes = salesforceWhyMigrateContent.boxes.map((box) => ({
    icon: <MigrationPlatformIcon name={box.iconName} />,
    title: box.title,
    description: box.description,
  }));

  const benefitsBoxes = salesforceBenefitsContent.boxes.map((box) => ({
    icon: <MigrationPlatformIcon name={box.iconName} />,
    title: box.title,
    description: box.description,
  }));

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero Section */}
      <ServiceHeroVideoSection content={salesforceHeroContent} />

      {/* 2. Brand Partners Section */}
      <IndustryBrandsSection
        content={{
          slug: "salesforce-to-shopify-migration",
        }}
        heading={salesforceMigrationSectionCopy.brandsHeading}
        items={salesforceBrandLogos}
      />

      {/* 3. Why Migrate from Salesforce to Shopify? */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: salesforceWhyMigrateContent.eyebrow,
          heading: salesforceWhyMigrateContent.heading,
          description: salesforceWhyMigrateContent.description,
          boxes: whyMigrateBoxes,
        }}
        id="why-migrate"
        variant="yellow"
      />

      {/* 4. Benefits of Moving from Salesforce to Shopify */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: salesforceBenefitsContent.eyebrow,
          heading: salesforceBenefitsContent.heading,
          description: salesforceBenefitsContent.description,
          boxes: benefitsBoxes,
        }}
        id="benefits"
        variant="transparent"
      />

      {/* 5. Salesforce to Shopify Migration Process */}
      <MigrationProcessSection
        content={salesforceProcessContent}
        id="migration-process"
        variant="cards"
      />

      {/* 6. Testimonials */}
      <HappyClientSection
        description={salesforceTestimonials.description}
        eyebrow={salesforceTestimonials.eyebrow}
        heading={salesforceTestimonials.heading}
        items={salesforceTestimonials.items}
      />

      {/* 7. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="salesforce-migration-faq"
        items={salesforceFaqs}
        sectionId="faqs"
      />
    </div>
  );
}
