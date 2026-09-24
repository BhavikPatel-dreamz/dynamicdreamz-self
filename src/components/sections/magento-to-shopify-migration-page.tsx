import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MagentoMigrationIcon } from "@/components/sections/magento-to-shopify/magento-migration-icons";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import {
  magentoBrandLogos,
  magentoFaqs,
  magentoHeroContent,
  magentoMigrationSectionCopy,
  magentoProcessContent,
  magentoTestimonials,
  magentoWhyChooseContent,
  magentoWhyMigrateContent,
} from "@/content/magento-to-shopify-migration";

export function MagentoToShopifyMigrationPage() {
  const whyMigrateBoxes = magentoWhyMigrateContent.items.map((item) => ({
    icon: <MagentoMigrationIcon name={item.iconName} />,
    title: item.title,
    description: item.description,
  }));

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero Section */}
      <ServiceHeroVideoSection content={magentoHeroContent} />

      {/* 2. Brand Partners Section */}
      <IndustryBrandsSection
        content={{
          slug: "magento-to-shopify-migration",
        }}
        heading={magentoMigrationSectionCopy.brandsHeading}
        items={magentoBrandLogos}
      />

      {/* 3. Why Do You Need to migrate from Magento to Shopify? */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: magentoWhyMigrateContent.eyebrow,
          heading: magentoWhyMigrateContent.heading,
          description: magentoWhyMigrateContent.description,
          boxes: whyMigrateBoxes,
        }}
        id="why-migrate"
        variant="yellow"
      />

      {/* 4. Magento to Shopify Migration Process */}
      <MigrationProcessSection
        content={magentoProcessContent}
        id="migration-process"
        variant="cards"
      />

      {/* 5. Why Choose Dynamic Dreamz for Migration Services? */}
      <EvaluationFrameworkSection
        className="pt-0"
        content={magentoWhyChooseContent}
        id="why-choose-dynamic-dreamz"
      />

      {/* 6. Don't Just Take Our Word For It */}
      <HappyClientSection
        description={magentoTestimonials.description}
        eyebrow={magentoTestimonials.eyebrow}
        heading={magentoTestimonials.heading}
        items={magentoTestimonials.items}
      />

      {/* 7. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="magento-migration-faq"
        items={magentoFaqs}
        sectionId="faqs"
      />
    </div>
  );
}
