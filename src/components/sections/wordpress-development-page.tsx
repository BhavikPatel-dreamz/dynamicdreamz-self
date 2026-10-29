import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { WordPressCustomizationIcon } from "@/components/sections/wordpress/wordpress-customization-icons";
import {
  wordpressDevelopmentCta,
  wordpressDevelopmentEngagement,
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
        content={servicesContent}
        headerLayout="split"
        hideCta
        id="services"
      />
      <PricingTableSection content={wordpressDevelopmentEngagement} />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={wordpressDevelopmentPortfolio}
        eyebrow={wordpressDevelopmentPortfolio.eyebrow}
        headerLayout="split"
        sectionId="our_work"
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
