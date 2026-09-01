import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { sharedUiCopy } from "@/content/common";
import {
  androidAppDevelopmentBrands,
  androidAppDevelopmentCtaBanner,
  androidAppDevelopmentFaqs,
  androidAppDevelopmentHero,
  androidAppDevelopmentPortfolio,
  androidAppDevelopmentServices,
  androidAppDevelopmentTestimonials,
} from "@/content/android-app-development";

export function AndroidAppDevelopmentPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec android-app-development relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={androidAppDevelopmentHero}
      />
      <IndustryBrandsSection
        content={{
          slug: "android-app-development",
        }}
        items={androidAppDevelopmentBrands}
      />
      <AgencyServicesSection content={androidAppDevelopmentServices} />
      <PortfolioShowcaseSection
        className="our-work-sec pt-20 pb-20 max-[992px]:pt-10"
        columns={4}
        content={androidAppDevelopmentPortfolio}
        ctaLabel={sharedUiCopy.viewOurWorkUpper}
        imageAspectClassName="pb-[154.5%] max-[767px]:pb-[115%]"
      />
      <HappyClientSection
        description={androidAppDevelopmentTestimonials.description}
        heading={androidAppDevelopmentTestimonials.heading}
        items={androidAppDevelopmentTestimonials.items}
      />
      <SplitFaqSection
        idPrefix="android-app-dev-faq"
        items={androidAppDevelopmentFaqs}
      />
      <CtaBannerSection
        ctaHref={androidAppDevelopmentCtaBanner.ctaHref}
        ctaLabel={androidAppDevelopmentCtaBanner.ctaLabel}
        heading={androidAppDevelopmentCtaBanner.heading}
      />
    </div>
  );
}
