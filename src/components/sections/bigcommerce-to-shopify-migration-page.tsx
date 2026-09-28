import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationPlatformIcon } from "@/components/sections/migration-platform-icons";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import {
  bigcommerceBrandLogos,
  bigcommerceDataSecuredContent,
  bigcommerceFaqs,
  bigcommerceHeroContent,
  bigcommerceMigrationSectionCopy,
  bigcommerceProcessContent,
  bigcommerceTestimonials,
  bigcommerceWhyMigrateContent,
} from "@/content/bigcommerce-to-shopify-migration";

export function BigCommerceToShopifyMigrationPage() {
  const whyMigrateBoxes = bigcommerceWhyMigrateContent.boxes.map((box) => ({
    icon: <MigrationPlatformIcon name={box.iconName} />,
    title: box.title,
    description: box.description,
  }));

  const dataSecuredBoxes = bigcommerceDataSecuredContent.boxes.map((box) => ({
    icon: <MigrationPlatformIcon name={box.iconName} />,
    title: box.title,
    description: box.description,
  }));

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero Section */}
      <ServiceHeroVideoSection content={bigcommerceHeroContent} />

      {/* 2. Brand Partners Section */}
      <IndustryBrandsSection
        content={{
          slug: "bigcommerce-to-shopify-migration",
        }}
        heading={bigcommerceMigrationSectionCopy.brandsHeading}
        items={bigcommerceBrandLogos}
      />

      {/* 3. Why Migrate from BigCommerce to Shopify? */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: bigcommerceWhyMigrateContent.eyebrow,
          heading: bigcommerceWhyMigrateContent.heading,
          description: bigcommerceWhyMigrateContent.description,
          boxes: whyMigrateBoxes,
        }}
        id="why-migrate"
        variant="yellow"
      />

      {/* 4. How Our Data Is Secured During Migration? */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: bigcommerceDataSecuredContent.eyebrow,
          heading: bigcommerceDataSecuredContent.heading,
          description: bigcommerceDataSecuredContent.description,
          boxes: dataSecuredBoxes,
        }}
        id="data-security"
        variant="green"
      />

      {/* 5. BigCommerce to Shopify Migration Process */}
      <MigrationProcessSection
        content={bigcommerceProcessContent}
        id="migration-process"
        variant="cards"
      />

      {/* 6. Testimonials */}
      <HappyClientSection
        description={bigcommerceTestimonials.description}
        eyebrow={bigcommerceTestimonials.eyebrow}
        heading={bigcommerceTestimonials.heading}
        items={bigcommerceTestimonials.items}
      />

      {/* 7. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="bigcommerce-migration-faq"
        items={bigcommerceFaqs}
        sectionId="faqs"
      />
    </div>
  );
}
