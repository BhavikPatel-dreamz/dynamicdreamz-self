import { CityPageHeroSection } from "@/components/blocks/CityHeroBlock";
import { PricingTableSection } from "@/components/blocks/EngagementModelsBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { WhiteLabelFinalCtaSection } from "@/components/blocks/QuoteRequestCTABlock";
import { WhiteLabelProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { WhiteLabelStatsSection, WhiteLabelWhySection } from "@/components/blocks/TrustStatsBarBlock";
import { WhiteLabelServicesSection } from "@/components/blocks/WhiteLabelSolutionsBlock";
import { WhiteLabelToolsSection } from "@/components/blocks/TechStackShowcaseBlock";
import {
  whiteLabelWordPressFaqs,
  whiteLabelWordPressFinalCta,
  whiteLabelWordPressHero,
  whiteLabelWordPressPricing,
  whiteLabelWordPressProcess,
  whiteLabelWordPressReasons,
  whiteLabelWordPressSectionCopy,
  whiteLabelWordPressServices,
  whiteLabelWordPressStats,
  whiteLabelWordPressToolRows,
} from "@/content/white-label-wordpress-development";

export function WhiteLabelWordPressPage() {
  return (
    <div>
      <CityPageHeroSection
        content={whiteLabelWordPressHero}
      />
      <WhiteLabelStatsSection
        stats={whiteLabelWordPressStats}
        variant="minimal"
      />
      <WhiteLabelWhySection
        reasons={whiteLabelWordPressReasons}
        title={whiteLabelWordPressSectionCopy.reasonsTitle}
      />
      <WhiteLabelServicesSection
        ctaLabel={whiteLabelWordPressSectionCopy.servicesCta}
        idPrefix="white-label-wordpress-service"
        services={whiteLabelWordPressServices}
        title={whiteLabelWordPressSectionCopy.servicesTitle}
      />
      <PricingTableSection content={whiteLabelWordPressPricing} />
      <WhiteLabelToolsSection
        ariaLabel="WordPress technologies and tools"
        description={whiteLabelWordPressSectionCopy.toolsDescription}
        rows={whiteLabelWordPressToolRows}
        title={whiteLabelWordPressSectionCopy.toolsTitle}
      />
      <WhiteLabelProcessSection
        note={whiteLabelWordPressSectionCopy.processNote}
        steps={whiteLabelWordPressProcess}
        title={whiteLabelWordPressSectionCopy.processTitle}
      />
      <SplitFaqSection
        heading={whiteLabelWordPressSectionCopy.faqHeading}
        
        idPrefix="white-label-wordpress-faq"
        items={whiteLabelWordPressFaqs}
      />
      <WhiteLabelFinalCtaSection cta={whiteLabelWordPressFinalCta} variant="certifiedDevelopers"/>
    </div>
  );
}
