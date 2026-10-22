import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MagentoServiceIcon } from "@/components/sections/magento/magento-service-icons";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
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
        className="pt-0 max-[991px]:pt-0"
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
        textColumnClassName="w-[48.3%] max-[992px]:w-full"
        titleColumnClassName="w-[44%] max-[992px]:w-full"
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
