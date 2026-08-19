import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { FaqSection } from "@/components/sections/faq-section";
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
        className="inner-hero-sec magento-development relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[991px]:pt-[100px]"
        content={magentoDevelopmentHero}
      />
      <IndustryBrandsSection
        content={{
          slug: "magento-development",
          ariaLabel: "Trusted Brands",
        }}
        items={magentoDevelopmentBrands}
      />
      <AgencyServicesSection content={magentoDevelopmentServices} />
      <PortfolioShowcaseSection
        className="our-work-sec pt-20 pb-20 max-[991px]:pt-10"
        content={magentoDevelopmentPortfolio}
        ctaHref="/our-work"
        ctaLabel="View our work"
      />
      <HappyClientSection
        description={magentoDevelopmentTestimonials.description}
        heading={magentoDevelopmentTestimonials.heading}
        items={magentoDevelopmentTestimonials.items}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[767px]:pb-[60px]"
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
