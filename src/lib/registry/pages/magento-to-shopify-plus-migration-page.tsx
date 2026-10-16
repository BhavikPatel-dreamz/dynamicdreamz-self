import { CityWhyChooseBoxesSection } from "@/components/blocks/KeyBenefitsGridBlock";
import { EvaluationFrameworkSection } from "@/components/blocks/WhyChooseUsBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { MagentoPlusIcon } from "@/lib/icons/magento-plus-icons";
import { ServiceHeroVideoSection } from "@/components/blocks/ServiceHeroBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { ThemeCustomizationServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
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
    <div>
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
