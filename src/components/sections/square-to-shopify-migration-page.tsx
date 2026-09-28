import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationPlatformIcon } from "@/components/sections/migration-platform-icons";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import {
  squareBrandLogos,
  squareFaqs,
  squareHeroContent,
  squareMigrationSectionCopy,
  squareProcessContent,
  squareTestimonials,
  squareWhyMigrateContent,
} from "@/content/square-to-shopify-migration";

export function SquareToShopifyMigrationPage() {
  const whyMigrateBoxes = squareWhyMigrateContent.boxes.map((box) => ({
    icon: <MigrationPlatformIcon name={box.iconName} />,
    title: box.title,
    description: box.description,
  }));

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero Section */}
      <ServiceHeroVideoSection content={squareHeroContent} />

      {/* 2. Brand Partners Section */}
      <IndustryBrandsSection
        content={{
          slug: "square-to-shopify-migration",
        }}
        heading={squareMigrationSectionCopy.brandsHeading}
        items={squareBrandLogos}
      />

      {/* 3. Why do Square to Shopify Migration? */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: squareWhyMigrateContent.eyebrow,
          heading: squareWhyMigrateContent.heading,
          description: squareWhyMigrateContent.description,
          boxes: whyMigrateBoxes,
        }}
        id="why-migrate"
        variant="yellow"
      />

      {/* 4. Square to Shopify Migration Process */}
      <MigrationProcessSection
        content={squareProcessContent}
        id="migration-process"
        variant="cards"
      />

      {/* 5. Testimonials */}
      <HappyClientSection
        description={squareTestimonials.description}
        eyebrow={squareTestimonials.eyebrow}
        heading={squareTestimonials.heading}
        items={squareTestimonials.items}
      />

      {/* 6. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="square-migration-faq"
        items={squareFaqs}
        sectionId="faqs"
      />
    </div>
  );
}
