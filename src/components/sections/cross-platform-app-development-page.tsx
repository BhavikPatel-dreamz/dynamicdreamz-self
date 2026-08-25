import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { FaqSection } from "@/components/sections/faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import {
  crossPlatformAppDevelopmentBrands,
  crossPlatformAppDevelopmentCtaBanner,
  crossPlatformAppDevelopmentFaqs,
  crossPlatformAppDevelopmentHero,
  crossPlatformAppDevelopmentPortfolio,
  crossPlatformAppDevelopmentServices,
  crossPlatformAppDevelopmentTestimonials,
} from "@/content/cross-platform-app-development";

export function CrossPlatformAppDevelopmentPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec cross-platform-app-development relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[991px]:pt-[100px]"
        content={crossPlatformAppDevelopmentHero}
      />
      <IndustryBrandsSection
        content={{
          slug: "cross-platform-app-development",
        }}
        items={crossPlatformAppDevelopmentBrands}
      />
      <AgencyServicesSection content={crossPlatformAppDevelopmentServices} />
      <PortfolioShowcaseSection
        className="our-work-sec pt-20 pb-20 max-[991px]:pt-10"
        columns={4}
        content={crossPlatformAppDevelopmentPortfolio}
        imageAspectClassName="pb-[154.5%] max-[767px]:pb-[115%]"
      />
      <HappyClientSection
        description={crossPlatformAppDevelopmentTestimonials.description}
        heading={crossPlatformAppDevelopmentTestimonials.heading}
        items={crossPlatformAppDevelopmentTestimonials.items}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[767px]:pb-[60px]"
        idPrefix="cross-platform-app-dev-faq"
        items={crossPlatformAppDevelopmentFaqs}
      />
      <CtaBannerSection
        ctaHref={crossPlatformAppDevelopmentCtaBanner.ctaHref}
        ctaLabel={crossPlatformAppDevelopmentCtaBanner.ctaLabel}
        heading={crossPlatformAppDevelopmentCtaBanner.heading}
      />
    </div>
  );
}
