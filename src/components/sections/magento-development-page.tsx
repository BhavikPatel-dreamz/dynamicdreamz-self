import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import {
  magentoDevelopmentBrands,
  magentoDevelopmentCtaBanner,
  magentoDevelopmentFaqs,
  magentoDevelopmentHero,
  magentoDevelopmentPortfolio,
  magentoDevelopmentServices,
  magentoDevelopmentTestimonials,
} from "@/content/magento-development";

export function MagentoDevelopmentPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec magento-development relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={magentoDevelopmentHero}
      />
      <IndustryBrandsSection
        content={{
          slug: "magento-development",
        }}
        items={magentoDevelopmentBrands}
      />
      <AgencyServicesSection content={magentoDevelopmentServices} />
      <PortfolioShowcaseSection
        className="our-work-sec pt-20 pb-20 max-[992px]:pt-10"
        content={magentoDevelopmentPortfolio}
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
