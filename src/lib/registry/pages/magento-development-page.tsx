import { AgencyServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { CityPageHeroSection } from "@/components/blocks/CityHeroBlock";
import { CtaBannerSection } from "@/components/blocks/QuoteRequestCTABlock";
import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { MagentoServiceIcon } from "@/lib/icons/magento-service-icons";
import { PortfolioShowcaseSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { EvaluationFrameworkSection } from "@/components/blocks/WhyChooseUsBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { PricingTableSection } from "@/components/blocks/EngagementModelsBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import {
  magentoDevelopmentBrands,
  magentoDevelopmentCapabilities,
  magentoDevelopmentCtaBanner,
  magentoDevelopmentEngagements,
  magentoDevelopmentFaqs,
  magentoDevelopmentHero,
  magentoDevelopmentPortfolio,
  magentoDevelopmentServices,
  magentoDevelopmentTestimonials,
} from "@/content/magento-development";

export function MagentoDevelopmentPage() {
  const servicesContent = {
    ...magentoDevelopmentServices,
    items: magentoDevelopmentServices.items.map((item) => ({
      ...item,
      iconSvg: item.iconKey ? (
        <MagentoServiceIcon name={item.iconKey} />
      ) : undefined,
    })),
  };

  return (
    <div>
      <CityPageHeroSection
        content={magentoDevelopmentHero}
      />
      <IndustryBrandsSection
        content={{ slug: "magento-development" }}
        heading={magentoDevelopmentBrands.title}
        items={magentoDevelopmentBrands.items}
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        headerLayout="split"
        hideCta
        id="services"
      />
      <EvaluationFrameworkSection
        className="pt-0"
        content={magentoDevelopmentCapabilities}
        id="capabilities"
      />
      <PricingTableSection content={magentoDevelopmentEngagements} />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={magentoDevelopmentPortfolio}
        eyebrow={magentoDevelopmentPortfolio.eyebrow}
        headerLayout="split"
        sectionId="our_work"
        variant="liveGrid"
      />
      <HappyClientSection
        description={magentoDevelopmentTestimonials.description}
        heading={magentoDevelopmentTestimonials.heading}
        items={magentoDevelopmentTestimonials.items}
      />
      <SplitFaqSection
        idPrefix="magento-dev-faq"
        items={magentoDevelopmentFaqs}
      />
      <CtaBannerSection
        ctaHref={magentoDevelopmentCtaBanner.ctaHref}
        ctaLabel={magentoDevelopmentCtaBanner.ctaLabel}
        heading={magentoDevelopmentCtaBanner.heading}
      />
    </div>
  );
}
