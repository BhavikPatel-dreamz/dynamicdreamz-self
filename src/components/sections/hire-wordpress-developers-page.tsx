import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { WhiteLabelCounterSection } from "@/components/sections/white-label-shopify/white-label-counter-section";
import { WordPressCustomizationIcon } from "@/components/sections/wordpress/wordpress-customization-icons";
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
    <div className="font-sans leading-[30.4px]">
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
