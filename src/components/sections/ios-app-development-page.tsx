import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { FaqSection } from "@/components/sections/faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { sharedUiCopy } from "@/content/common";
import {
  iosAppDevelopmentBrands,
  iosAppDevelopmentCtaBanner,
  iosAppDevelopmentFaqs,
  iosAppDevelopmentHero,
  iosAppDevelopmentPortfolio,
  iosAppDevelopmentServices,
  iosAppDevelopmentTestimonials,
} from "@/content/ios-app-development";

export function IosAppDevelopmentPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec ios-app-development relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[991px]:pt-[100px]"
        content={iosAppDevelopmentHero}
      />
      <IndustryBrandsSection
        content={{
          slug: "ios-app-development",
        }}
        items={iosAppDevelopmentBrands}
      />
      <AgencyServicesSection content={iosAppDevelopmentServices} />
      <PortfolioShowcaseSection
        className="our-work-sec pt-20 pb-20 max-[991px]:pt-10"
        columns={4}
        content={iosAppDevelopmentPortfolio}
        ctaLabel={sharedUiCopy.viewOurWorkUpper}
        imageAspectClassName="pb-[154.5%] max-[767px]:pb-[115%]"
      />
      <HappyClientSection
        description={iosAppDevelopmentTestimonials.description}
        heading={iosAppDevelopmentTestimonials.heading}
        items={iosAppDevelopmentTestimonials.items}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[767px]:pb-[60px]"
        idPrefix="ios-app-dev-faq"
        items={iosAppDevelopmentFaqs}
      />
      <CtaBannerSection
        ctaHref={iosAppDevelopmentCtaBanner.ctaHref}
        ctaLabel={iosAppDevelopmentCtaBanner.ctaLabel}
        heading={iosAppDevelopmentCtaBanner.heading}
      />
    </div>
  );
}
