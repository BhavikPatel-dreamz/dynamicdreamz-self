import { HeaderThree } from "@/components/layout/header-three";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { BarcelonaHeroSection } from "@/components/sections/barcelona/barcelona-hero-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { shopifyDevelopmentBarcelonaContent } from "@/content/shopify-development-in-barcelona-spain";

export function ShopifyDevelopmentInBarcelonaSpainPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <HeaderThree />
      <BarcelonaHeroSection />
      <AgencyServicesSection
        className="barcelona-services-sec pt-0 pb-20 max-[992px]:pb-12 max-[767px]:pb-10"
        content={shopifyDevelopmentBarcelonaContent.services}
        headerLayout="centered"
        id="shopify-services"
        showDescription={false}
      />
      <PortfolioShowcaseSection
        className="our-work-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        content={shopifyDevelopmentBarcelonaContent.portfolio}
        hideCta={true}
      />
    </div>
  );
}
