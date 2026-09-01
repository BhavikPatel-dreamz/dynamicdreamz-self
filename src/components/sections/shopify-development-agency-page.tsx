import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import {
  shopifyDevelopmentAgencyBrands,
  shopifyDevelopmentAgencyCtaBanner,
  shopifyDevelopmentAgencyFaqs,
  shopifyDevelopmentAgencyHero,
  shopifyDevelopmentAgencyPortfolio,
  shopifyDevelopmentAgencyServices,
  shopifyDevelopmentAgencyTestimonials,
} from "@/content/shopify-development-agency";

const brandSection = {
  slug: "shopify-development-agency",
  brands: {
  },
} as const;

export function ShopifyDevelopmentAgencyPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={shopifyDevelopmentAgencyHero}
      />
      <IndustryBrandsSection
        content={brandSection}
        items={shopifyDevelopmentAgencyBrands}
      />
      <AgencyServicesSection content={shopifyDevelopmentAgencyServices} />
      <PortfolioShowcaseSection
        className="our-work-sec pt-20 pb-20 max-[992px]:pt-10"
        content={shopifyDevelopmentAgencyPortfolio}
      />
      <HappyClientSection
        description={shopifyDevelopmentAgencyTestimonials.description}
        heading={shopifyDevelopmentAgencyTestimonials.heading}
        items={shopifyDevelopmentAgencyTestimonials.items}
      />
      <SplitFaqSection
        idPrefix="shopify-dev-agency-faq"
        items={shopifyDevelopmentAgencyFaqs}
      />
      <CtaBannerSection
        ctaHref={shopifyDevelopmentAgencyCtaBanner.ctaHref}
        ctaLabel={shopifyDevelopmentAgencyCtaBanner.ctaLabel}
        heading={shopifyDevelopmentAgencyCtaBanner.heading}
      />
    </div>
  );
}
