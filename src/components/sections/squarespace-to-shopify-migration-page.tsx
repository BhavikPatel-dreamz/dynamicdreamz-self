import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationPlatformIcon } from "@/components/sections/migration-platform-icons";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import {
  squarespaceBenefitsContent,
  squarespaceBrandLogos,
  squarespaceFaqs,
  squarespaceHeroContent,
  squarespaceMigrationSectionCopy,
  squarespaceProcessContent,
  squarespaceTestimonials,
  squarespaceWhyMigrateContent,
} from "@/content/squarespace-to-shopify-migration";

export function SquarespaceToShopifyMigrationPage() {
  const whyMigrateBoxes = squarespaceWhyMigrateContent.boxes.map((box) => ({
    icon: <MigrationPlatformIcon name={box.iconName} />,
    title: box.title,
    description: box.description,
  }));

  const benefitsBoxes = squarespaceBenefitsContent.boxes.map((box) => ({
    icon: <MigrationPlatformIcon name={box.iconName} />,
    title: box.title,
    description: box.description,
  }));

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero Section */}
      <ServiceHeroVideoSection content={squarespaceHeroContent} />

      {/* 2. Brand Partners Section */}
      <IndustryBrandsSection
        content={{
          slug: "squarespace-to-shopify-migration",
        }}
        heading={squarespaceMigrationSectionCopy.brandsHeading}
        items={squarespaceBrandLogos}
      />

      {/* 3. Why do Squarespace to Shopify Migration? */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: squarespaceWhyMigrateContent.eyebrow,
          heading: squarespaceWhyMigrateContent.heading,
          description: squarespaceWhyMigrateContent.description,
          boxes: whyMigrateBoxes,
        }}
        id="why-migrate"
        variant="yellow"
      />

      {/* 4. Benefits of Moving from Squarespace to Shopify */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: squarespaceBenefitsContent.eyebrow,
          heading: squarespaceBenefitsContent.heading,
          description: squarespaceBenefitsContent.description,
          boxes: benefitsBoxes,
        }}
        id="benefits"
        variant="transparent"
      />

      {/* 5. Squarespace to Shopify Migration Process */}
      <MigrationProcessSection
        content={squarespaceProcessContent}
        id="migration-process"
        variant="cards"
      />

      {/* 6. Testimonials */}
      <HappyClientSection
        description={squarespaceTestimonials.description}
        eyebrow={squarespaceTestimonials.eyebrow}
        heading={squarespaceTestimonials.heading}
        items={squarespaceTestimonials.items}
      />

      {/* 7. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="squarespace-migration-faq"
        items={squarespaceFaqs}
        sectionId="faqs"
      />
    </div>
  );
}
