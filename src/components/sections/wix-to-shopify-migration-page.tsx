import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationPlatformIcon } from "@/components/sections/migration-platform-icons";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import {
  wixBrandLogos,
  wixFaqs,
  wixHeroContent,
  wixMigrationSectionCopy,
  wixProcessContent,
  wixTestimonials,
  wixWhyMigrateContent,
} from "@/content/wix-to-shopify-migration";

export function WixToShopifyMigrationPage() {
  const whyMigrateBoxes = wixWhyMigrateContent.boxes.map((box) => ({
    icon: <MigrationPlatformIcon name={box.iconName} />,
    title: box.title,
    description: box.description,
  }));

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero Section */}
      <ServiceHeroVideoSection content={wixHeroContent} />

      {/* 2. Brand Partners Section */}
      <IndustryBrandsSection
        content={{
          slug: "wix-to-shopify-migration",
        }}
        heading={wixMigrationSectionCopy.brandsHeading}
        items={wixBrandLogos}
      />

      {/* 3. Why Migrate from Wix to Shopify? */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: wixWhyMigrateContent.eyebrow,
          heading: wixWhyMigrateContent.heading,
          description: wixWhyMigrateContent.description,
          boxes: whyMigrateBoxes,
        }}
        id="why-migrate"
        variant="yellow"
      />

      {/* 4. Wix to Shopify Migration Process */}
      <MigrationProcessSection
        content={wixProcessContent}
        id="migration-process"
        variant="cards"
      />

      {/* 5. Testimonials */}
      <HappyClientSection
        description={wixTestimonials.description}
        eyebrow={wixTestimonials.eyebrow}
        heading={wixTestimonials.heading}
        items={wixTestimonials.items}
      />

      {/* 6. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="wix-migration-faq"
        items={wixFaqs}
        sectionId="faqs"
      />
    </div>
  );
}
