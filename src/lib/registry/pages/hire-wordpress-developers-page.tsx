import { CityPageHeroSection } from "@/components/blocks/CityHeroBlock";
import { OurDevelopmentProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { PortfolioShowcaseSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { PricingTableSection } from "@/components/blocks/EngagementModelsBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { ThemeCustomizationServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { WhiteLabelCounterSection } from "@/components/blocks/TrustStatsBarBlock";
import { WordPressCustomizationIcon } from "@/lib/icons/wordpress-customization-icons";
import {
  hireWordPressBenefits,
  hireWordPressCounters,
  hireWordPressFaqs,
  hireWordPressHero,
  hireWordPressPortfolio,
  hireWordPressPricing,
  hireWordPressProcess,
  hireWordPressTestimonials,
  hireWordPressWhyChoose,
} from "@/content/hire-wordpress-developers";

export function HireWordPressDevelopersPage() {
  const whyChooseContent = {
    eyebrow: hireWordPressWhyChoose.eyebrow,
    heading: hireWordPressWhyChoose.heading,
    boxes: hireWordPressWhyChoose.boxes.map((box) => ({
      title: box.title,
      description: box.description,
      icon: <WordPressCustomizationIcon name={box.iconKey} />,
    })),
  };

  const benefitsContent = {
    eyebrow: hireWordPressBenefits.eyebrow,
    heading: hireWordPressBenefits.heading,
    boxes: hireWordPressBenefits.boxes.map((box) => ({
      title: box.title,
      icon: <WordPressCustomizationIcon name={box.iconKey} />,
    })),
  };

  return (
    <div>
      <CityPageHeroSection content={hireWordPressHero} />
      <WhiteLabelCounterSection counters={hireWordPressCounters} />
      <ThemeCustomizationServicesSection
        content={whyChooseContent}
        variant="yellow"
      />
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="green"
      />
      <OurDevelopmentProcessSection
        content={hireWordPressProcess}
      />
      <PricingTableSection content={hireWordPressPricing} />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={hireWordPressPortfolio}
        eyebrow={hireWordPressPortfolio.eyebrow}
        headerLayout="split"
        hideCta
        sectionId="our_work"
        textColumnClassName="w-[48.3%] max-[992px]:w-full"
        titleColumnClassName="w-[44%] max-[992px]:w-full"
        variant="liveGrid"
      />
      <HappyClientSection
        description={hireWordPressTestimonials.description}
        eyebrow={hireWordPressTestimonials.eyebrow}
        heading={hireWordPressTestimonials.heading}
        items={hireWordPressTestimonials.items}
      />
      <SplitFaqSection
        idPrefix="hire-wordpress-developers-faq"
        items={hireWordPressFaqs}
      />
    </div>
  );
}
