import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { WhiteLabelFinalCtaSection } from "@/components/sections/white-label/white-label-closing-sections";
import { WhiteLabelProcessSection } from "@/components/sections/white-label/white-label-process-section";
import {
  WhiteLabelStatsSection,
  WhiteLabelWhySection,
} from "@/components/sections/white-label/white-label-proof-section";
import { WhiteLabelServicesSection } from "@/components/sections/white-label/white-label-services-section";
import { WhiteLabelToolsSection } from "@/components/sections/white-label/white-label-tools-section";
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
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection
        className="hide-logo"
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
      <PricingTableSection
        className="white_label_wp_develop_plan_section shopify-plus-engagement mb-0 bg-[#edf2ee] py-20 max-[992px]:py-[50px]"
        content={whiteLabelWordPressPricing}
        textColumnClassName="w-[50.2%] max-[992px]:w-full"
        titleColumnClassName="w-[43.5%] max-[992px]:w-full"
      />
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
        className="bg-sky-blue"
        heading={whiteLabelWordPressSectionCopy.faqHeading}
        headingClassName="!font-sans !text-[35px] !font-bold !leading-[48.475px] !tracking-[-0.7px] text-ink max-[992px]:!text-[30px] max-[992px]:!leading-10 max-[767px]:!text-2xl max-[767px]:!leading-[33.24px] max-[767px]:!tracking-[-0.48px]"
        idPrefix="white-label-wordpress-faq"
        items={whiteLabelWordPressFaqs}
      />
      <WhiteLabelFinalCtaSection cta={whiteLabelWordPressFinalCta} variant="certifiedDevelopers"/>
    </div>
  );
}
