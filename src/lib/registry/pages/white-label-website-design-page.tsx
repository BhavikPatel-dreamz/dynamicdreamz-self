import { CityPageHeroSection } from "@/components/blocks/CityHeroBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { OurDevelopmentProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { ShopifyStageServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { ShopifyTeamBoxesSection } from "@/components/blocks/WhyChooseUsBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { ThemeCustomizationServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { WhiteLabelCounterSection } from "@/components/blocks/TrustStatsBarBlock";
import { WhiteLabelServicesSection } from "@/components/blocks/WhiteLabelSolutionsBlock";
import { DesignReasonsSection } from "@/components/blocks/WhyChooseUsBlock";
import { WhiteLabelWebsiteDesignAdvantageIcon, WhiteLabelWebsiteDesignBenefitIcon } from "@/lib/icons/white-label-website-design-icons";
import {
  whiteLabelWebsiteDesignAdvantagesContent,
  whiteLabelWebsiteDesignAiDiscoveryContent,
  whiteLabelWebsiteDesignAiEnginesContent,
  whiteLabelWebsiteDesignBenefitsContent,
  whiteLabelWebsiteDesignCounters,
  whiteLabelWebsiteDesignFaqCopy,
  whiteLabelWebsiteDesignFaqs,
  whiteLabelWebsiteDesignHero,
  whiteLabelWebsiteDesignProcessContent,
  whiteLabelWebsiteDesignReasons,
  whiteLabelWebsiteDesignServices,
  whiteLabelWebsiteDesignServicesContent,
  whiteLabelWebsiteDesignWhyCopy,
} from "@/content/white-label-website-design";

export function WhiteLabelWebsiteDesignPage() {
  return (
    <div>
      {/* 1. Hero */}
      <CityPageHeroSection content={whiteLabelWebsiteDesignHero} />

      {/* 2. Counters */}
      <WhiteLabelCounterSection counters={whiteLabelWebsiteDesignCounters} />

      {/* 3. Why Choose Accordion */}
      <DesignReasonsSection
        description={whiteLabelWebsiteDesignWhyCopy.description}
        items={whiteLabelWebsiteDesignReasons}
        title={whiteLabelWebsiteDesignWhyCopy.title}
      />

      {/* 4. Key Benefits */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: whiteLabelWebsiteDesignBenefitsContent.eyebrow,
          heading: whiteLabelWebsiteDesignBenefitsContent.heading,
          description: whiteLabelWebsiteDesignBenefitsContent.description,
          boxes: whiteLabelWebsiteDesignBenefitsContent.boxes.map((box) => ({
            title: box.title,
            description: box.description,
            icon: <WhiteLabelWebsiteDesignBenefitIcon name={box.iconName} />,
          })),
        }}
        variant="green"
      />

      {/* 5. Websites Built for Search & AI */}
      <ShopifyStageServicesSection
        content={whiteLabelWebsiteDesignAiEnginesContent}
      />

      {/* 6. AI Search Visibility */}
      <ShopifyTeamBoxesSection
        content={whiteLabelWebsiteDesignAiDiscoveryContent}
      />

      {/* 7. Process */}
      <OurDevelopmentProcessSection
        content={whiteLabelWebsiteDesignProcessContent}
      />

      {/* 8. The Agency Advantage */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: whiteLabelWebsiteDesignAdvantagesContent.eyebrow,
          heading: whiteLabelWebsiteDesignAdvantagesContent.heading,
          description: whiteLabelWebsiteDesignAdvantagesContent.description,
          boxes: whiteLabelWebsiteDesignAdvantagesContent.boxes.map((box) => ({
            title: box.title,
            description: box.description,
            icon: <WhiteLabelWebsiteDesignAdvantageIcon />,
          })),
        }}
        variant="transparent"
      />

      {/* 9. White Label Services */}
      <WhiteLabelServicesSection
        description={whiteLabelWebsiteDesignServicesContent.description}
        eyebrow={whiteLabelWebsiteDesignServicesContent.eyebrow}
        idPrefix="white-label-website-design-service"
        services={whiteLabelWebsiteDesignServices}
        showCta={false}
        title={whiteLabelWebsiteDesignServicesContent.title}
      />

      {/* 10. Happy Clients */}
      <HappyClientSection />

      {/* 11. FAQs */}
      <SplitFaqSection
        description={whiteLabelWebsiteDesignFaqCopy.description}
        heading={whiteLabelWebsiteDesignFaqCopy.heading}
        idPrefix="white-label-website-design-faq"
        items={whiteLabelWebsiteDesignFaqs}
      />
    </div>
  );
}
