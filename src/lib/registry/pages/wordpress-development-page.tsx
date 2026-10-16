import { AgencyServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { CityPageHeroSection } from "@/components/blocks/CityHeroBlock";
import { CtaBannerSection } from "@/components/blocks/QuoteRequestCTABlock";
import { PortfolioShowcaseSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { WordPressCustomizationIcon } from "@/lib/icons/wordpress-customization-icons";
import {
  wordpressDevelopmentCta,
  wordpressDevelopmentFaqs,
  wordpressDevelopmentHero,
  wordpressDevelopmentPortfolio,
  wordpressDevelopmentServices,
  wordpressDevelopmentTestimonials,
} from "@/content/wordpress-development";

export function WordPressDevelopmentPage() {
  const servicesContent = {
    ...wordpressDevelopmentServices,
    items: wordpressDevelopmentServices.items.map((item) => ({
      ...item,
      iconSvg: item.iconKey ? (
        <WordPressCustomizationIcon name={item.iconKey} />
      ) : undefined,
    })),
  };

  return (
    <div>
      <CityPageHeroSection content={wordpressDevelopmentHero} />
      <AgencyServicesSection
        cardVariant="services-box"
        content={servicesContent}
        headerLayout="split"
        hideCta
        id="services"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={wordpressDevelopmentPortfolio}
        eyebrow={wordpressDevelopmentPortfolio.eyebrow}
        headerLayout="split"
        sectionId="our_work"
        textColumnClassName="w-[48.3%] max-[992px]:w-full"
        titleColumnClassName="w-[44%] max-[992px]:w-full"
        variant="liveGrid"
      />
      <HappyClientSection
        description={wordpressDevelopmentTestimonials.description}
        eyebrow={wordpressDevelopmentTestimonials.eyebrow}
        heading={wordpressDevelopmentTestimonials.heading}
      />
      <SplitFaqSection
        idPrefix="wordpress-development-faq"
        items={wordpressDevelopmentFaqs}
      />
      <CtaBannerSection
        ctaHref={wordpressDevelopmentCta.ctaHref}
        ctaLabel={wordpressDevelopmentCta.ctaLabel}
        heading={wordpressDevelopmentCta.heading}
      />
    </div>
  );
}
