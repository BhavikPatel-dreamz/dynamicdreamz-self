import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MagentoPlusIcon } from "@/components/sections/magento-to-shopify-plus/magento-plus-icons";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import {
  magentoPlusBrandLogos,
  magentoPlusFaqs,
  magentoPlusHeroContent,
  magentoPlusMigrationSectionCopy,
  magentoPlusProcessContent,
  magentoPlusTestimonials,
  magentoPlusWhatDataContent,
  magentoPlusWhyChooseContent,
  magentoPlusWhyMigrateContent,
} from "@/content/magento-to-shopify-plus-migration";

export function MagentoToShopifyPlusMigrationPage() {
  const whyMigrateBoxes = magentoPlusWhyMigrateContent.items.map((item) => ({
    icon: <MagentoPlusIcon name={item.iconName} />,
    title: item.title,
    description: item.description,
  }));

  const whatDataItems = magentoPlusWhatDataContent.items.map((item) => ({
    iconNode: <MagentoPlusIcon name={item.iconName} />,
    title: item.title,
    description: item.description,
  }));

  const processBoxes = magentoPlusProcessContent.steps.map((step) => ({
    icon: <MagentoPlusIcon name={step.iconName} />,
    title: step.title,
    description: step.description,
  }));

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero */}
      <ServiceHeroVideoSection content={magentoPlusHeroContent} />

      {/* 2. Brands */}
      <IndustryBrandsSection
        content={{
          slug: "magento-to-shopify-plus-migration",
        }}
        heading={magentoPlusMigrationSectionCopy.brandsHeading}
        items={magentoPlusBrandLogos}
      />

      {/* 3. Why Choose Magento to Shopify Plus Migration? */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: magentoPlusWhyMigrateContent.eyebrow,
          heading: magentoPlusWhyMigrateContent.heading,
          description: magentoPlusWhyMigrateContent.description,
          boxes: whyMigrateBoxes,
        }}
        id="why-choose-magento-plus"
        variant="yellow"
      />

      {/* 4. What Data Can We Transfer During Migration? */}
      <CityWhyChooseBoxesSection
        bgClassName="bg-[#eff4ef]"
        columns={5}
        content={{
          eyebrow: magentoPlusWhatDataContent.eyebrow,
          heading: magentoPlusWhatDataContent.heading,
          description: magentoPlusWhatDataContent.description,
          items: whatDataItems,
        }}
        id="what-data-we-transfer"
      />

      {/* 5. How do We Migrate from Magento to Shopify plus​? */}
      <ThemeCustomizationServicesSection
        className="pb-0"
        content={{
          eyebrow: magentoPlusProcessContent.eyebrow,
          heading: magentoPlusProcessContent.heading,
          description: magentoPlusProcessContent.description,
          boxes: processBoxes,
        }}
        id="how-we-migrate"
        variant="transparent"
      />

      {/* 6. Why Choose Dynamic Dreamz for Migration Services? */}
      <EvaluationFrameworkSection
        content={magentoPlusWhyChooseContent}
        id="why-choose-dynamic-dreamz"
      />

      {/* 7. Don't Just Take Our Word For It */}
      <HappyClientSection
        description={magentoPlusTestimonials.description}
        eyebrow={magentoPlusTestimonials.eyebrow}
        heading={magentoPlusTestimonials.heading}
        items={magentoPlusTestimonials.items}
      />

      {/* 8. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="magento-plus-migration-faq"
        items={magentoPlusFaqs}
        sectionId="faqs"
      />
    </div>
  );
}
