import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { WordPressCustomizationIcon } from "@/components/sections/wordpress/wordpress-customization-icons";
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
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection content={wordpressDevelopmentHero} />
      <AgencyServicesSection
        cardVariant="services-box"
        className="what-we-provide-sec pb-0 pt-20 max-[992px]:pt-[50px] max-[992px]:pb-0"
        content={servicesContent}
        headerLayout="split"
        headerTextColumnClassName="w-[48.3%] max-[992px]:w-full"
        headerTitleColumnClassName="w-[44%] max-[992px]:w-full"
        hideCta
        id="services"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec py-20 max-[992px]:py-[60px]"
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
        className="faq-sec"
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
