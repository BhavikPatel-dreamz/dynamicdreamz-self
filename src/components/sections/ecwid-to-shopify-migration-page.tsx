import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationPlatformIcon } from "@/components/sections/migration-platform-icons";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import {
  ecwidBenefitsContent,
  ecwidBrandLogos,
  ecwidFaqs,
  ecwidHeroContent,
  ecwidMigrationSectionCopy,
  ecwidProcessContent,
  ecwidTestimonials,
} from "@/content/ecwid-to-shopify-migration";

export function EcwidToShopifyMigrationPage() {
  const benefitsBoxes = ecwidBenefitsContent.boxes.map((box) => ({
    icon: <MigrationPlatformIcon name={box.iconName} />,
    title: box.title,
    description: box.description,
  }));

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero Section */}
      <ServiceHeroVideoSection content={ecwidHeroContent} />

      {/* 2. Brand Partners Section */}
      <IndustryBrandsSection
        content={{
          slug: "ecwid-to-shopify-migration",
        }}
        heading={ecwidMigrationSectionCopy.brandsHeading}
        items={ecwidBrandLogos}
      />

      {/* 3. Benefits of Moving from Ecwid to Shopify */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: ecwidBenefitsContent.eyebrow,
          heading: ecwidBenefitsContent.heading,
          description: ecwidBenefitsContent.description,
          boxes: benefitsBoxes,
        }}
        id="benefits"
        variant="yellow"
      />

      {/* 4. Ecwid to Shopify Migration Process */}
      <MigrationProcessSection
        content={ecwidProcessContent}
        id="migration-process"
        variant="cards"
      />

      {/* 5. Testimonials */}
      <HappyClientSection
        description={ecwidTestimonials.description}
        eyebrow={ecwidTestimonials.eyebrow}
        heading={ecwidTestimonials.heading}
        items={ecwidTestimonials.items}
      />

      {/* 6. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="ecwid-migration-faq"
        items={ecwidFaqs}
        sectionId="faqs"
      />
    </div>
  );
}
