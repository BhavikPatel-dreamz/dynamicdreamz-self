import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { WooCommerceMigrationIcon } from "@/components/sections/woocommerce-to-shopify/woocommerce-migration-icons";
import {
  woocommerceBrandLogos,
  woocommerceFaqs,
  woocommerceHeroContent,
  woocommerceMigrationSectionCopy,
  woocommerceProcessContent,
  woocommerceTestimonials,
  woocommerceWhyMigrateContent,
} from "@/content/woocommerce-to-shopify-migration";

export function WooCommerceToShopifyMigrationPage() {
  const whyMigrateBoxes = woocommerceWhyMigrateContent.items.map((item) => ({
    icon: <WooCommerceMigrationIcon name={item.iconName} />,
    title: item.title,
    description: item.description,
  }));

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero Section */}
      <ServiceHeroVideoSection content={woocommerceHeroContent} />

      {/* 2. Brand Partners Section */}
      <IndustryBrandsSection
        content={{
          slug: "woocommerce-to-shopify-migration",
        }}
        heading={woocommerceMigrationSectionCopy.brandsHeading}
        items={woocommerceBrandLogos}
      />

      {/* 3. Why Migrate from WooCommerce to Shopify? */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: woocommerceWhyMigrateContent.eyebrow,
          heading: woocommerceWhyMigrateContent.heading,
          description: woocommerceWhyMigrateContent.description,
          boxes: whyMigrateBoxes,
        }}
        id="why-migrate"
        variant="yellow"
      />

      {/* 4. WooCommerce to Shopify Migration Process */}
      <MigrationProcessSection
        content={woocommerceProcessContent}
        id="migration-process"
        variant="cards"
      />

      {/* 5. Don't Just Take Our Word For It */}
      <HappyClientSection
        description={woocommerceTestimonials.description}
        eyebrow={woocommerceTestimonials.eyebrow}
        heading={woocommerceTestimonials.heading}
        items={woocommerceTestimonials.items}
      />

      {/* 6. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="woocommerce-migration-faq"
        items={woocommerceFaqs}
        sectionId="faqs"
      />
    </div>
  );
}
