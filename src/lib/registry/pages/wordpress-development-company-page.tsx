import { AgencyServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { CityPageHeroSection } from "@/components/blocks/CityHeroBlock";
import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { OurDevelopmentProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { PortfolioShowcaseSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { PricingTableSection } from "@/components/blocks/EngagementModelsBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { ThemeCustomizationServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { WordPressCustomizationIcon } from "@/lib/icons/wordpress-customization-icons";
import {
  wordpressDevelopmentCompanyBrands,
  wordpressDevelopmentCompanyFaqs,
  wordpressDevelopmentCompanyHero,
  wordpressDevelopmentCompanyPortfolio,
  wordpressDevelopmentCompanyPricing,
  wordpressDevelopmentCompanyProcess,
  wordpressDevelopmentCompanyServices,
  wordpressDevelopmentCompanyTestimonials,
  wordpressDevelopmentCompanyWhyChoose,
  wordpressDevelopmentCompanyWhyWordPress,
} from "@/content/wordpress-development-company";

export function WordPressDevelopmentCompanyPage() {
  const whyChooseContent = {
    eyebrow: wordpressDevelopmentCompanyWhyChoose.eyebrow,
    heading: wordpressDevelopmentCompanyWhyChoose.heading,
    description: wordpressDevelopmentCompanyWhyChoose.description,
    boxes: wordpressDevelopmentCompanyWhyChoose.boxes.map((box) => ({
      title: box.title,
      description: box.description,
      icon: <WordPressCustomizationIcon name={box.iconKey} />,
    })),
  };

  const whyWordPressContent = {
    eyebrow: wordpressDevelopmentCompanyWhyWordPress.eyebrow,
    heading: wordpressDevelopmentCompanyWhyWordPress.heading,
    description: wordpressDevelopmentCompanyWhyWordPress.description,
    boxes: wordpressDevelopmentCompanyWhyWordPress.boxes.map((box) => ({
      title: box.title,
      description: box.description,
      icon: <WordPressCustomizationIcon name={box.iconKey} />,
    })),
  };

  const servicesContent = {
    ...wordpressDevelopmentCompanyServices,
    items: wordpressDevelopmentCompanyServices.items.map((item) => ({
      ...item,
      iconSvg: item.iconKey ? (
        <WordPressCustomizationIcon name={item.iconKey} />
      ) : undefined,
    })),
  };

  return (
    <div>
      <CityPageHeroSection content={wordpressDevelopmentCompanyHero} />
      <IndustryBrandsSection
        content={wordpressDevelopmentCompanyBrands.content}
        items={wordpressDevelopmentCompanyBrands.items}
      />
      <AgencyServicesSection
        cardVariant="services-box"
        content={servicesContent}
        headerLayout="split"
        hideCta
        id="services"
        preserveBreaks
      />
      <ThemeCustomizationServicesSection
        content={whyChooseContent}
        variant="yellow"
      />
      <ThemeCustomizationServicesSection
        content={whyWordPressContent}
        variant="green"
      />
      <OurDevelopmentProcessSection
        content={wordpressDevelopmentCompanyProcess}
      />
      <PricingTableSection content={wordpressDevelopmentCompanyPricing} />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={wordpressDevelopmentCompanyPortfolio}
        eyebrow={wordpressDevelopmentCompanyPortfolio.eyebrow}
        headerLayout="split"
        sectionId="our_work"
        variant="liveGrid"
      />
      <HappyClientSection
        description={wordpressDevelopmentCompanyTestimonials.description}
        eyebrow={wordpressDevelopmentCompanyTestimonials.eyebrow}
        heading={wordpressDevelopmentCompanyTestimonials.heading}
        items={wordpressDevelopmentCompanyTestimonials.items}
      />
      <SplitFaqSection
        idPrefix="wordpress-development-company-faq"
        items={wordpressDevelopmentCompanyFaqs}
      />
    </div>
  );
}
