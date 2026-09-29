import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { MagentoServiceIcon } from "@/components/sections/magento/magento-service-icons";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
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
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection
        className="hide-logo"
        content={magentoDevelopmentHero}
      />
      <IndustryBrandsSection
        content={{ slug: "magento-development" }}
        heading={magentoDevelopmentBrands.title}
        items={magentoDevelopmentBrands.items}
      />
      <AgencyServicesSection
        cardVariant="services-box"
        className="what-we-provide-sec pb-0 pt-20 max-[992px]:pt-[50px] max-[992px]:pb-0"
        columns={2}
        content={servicesContent}
        headerLayout="split"
        headerTextColumnClassName="w-[48.3%] max-[992px]:w-full"
        headerTitleColumnClassName="w-[44%] max-[992px]:w-full"
        hideCta
        id="services"
      />
      <EvaluationFrameworkSection
        className="how-to-choose-spa-sec pt-20 pb-20 max-[992px]:pt-0 max-[992px]:pb-[50px]"
        content={magentoDevelopmentCapabilities}
        id="capabilities"
      />
      <PricingTableSection
        className="white_label_wp_develop_plan_section shopify-plus-engagement mb-0 bg-[#edf2ee] py-20 max-[992px]:py-[50px]"
        content={magentoDevelopmentEngagements}
        textColumnClassName="w-[48.3%] max-[992px]:w-full"
        titleColumnClassName="w-[44%] max-[992px]:w-full"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec py-20 max-[992px]:py-[60px]"
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
        className="faq-sec"
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
