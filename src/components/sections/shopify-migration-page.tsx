import { AiAutomationSection } from "@/components/sections/ai-automation-section";
import { AiDiscoverySection } from "@/components/sections/ai-discovery-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ShopifyMigrationServicesSection } from "@/components/sections/shopify-migration/shopify-migration-services-section";
import {
  shopifyMigrationAiAutomation,
  shopifyMigrationAiDiscovery,
  shopifyMigrationFaqs,
  shopifyMigrationHero,
  shopifyMigrationPortfolio,
  shopifyMigrationServices,
} from "@/content/shopify-migration";

export function ShopifyMigrationPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        content={shopifyMigrationHero}
        variant="centered"
        className="inner-hero-sec relative overflow-hidden bg-white pt-[250px] pb-16 border-b-[1.5px] border-[#dfdfdf] max-[1199px]:pt-[200px] max-[992px]:pt-[140px] max-[992px]:pb-[50px]"
      />
      <ShopifyMigrationServicesSection
        items={shopifyMigrationServices}
        className="migration-services-sec pt-16 pb-0 max-[992px]:pt-[50px]"
      />
      <AiAutomationSection
        content={shopifyMigrationAiAutomation}
        className="smarter-shopify-store mt-20 bg-[#171E16] py-20 text-white max-[992px]:mt-10 max-[992px]:py-[50px]"
      />
      <AiDiscoverySection
        content={shopifyMigrationAiDiscovery}
        variant="cards"
        className="preparing-store pt-20 pb-0 max-[992px]:pt-[50px]"
      />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px] max-[767px]:pt-0 max-[767px]:pb-[50px]"
        content={shopifyMigrationPortfolio}
      />
      <HappyClientSection className="happy-client-sec pt-0 pb-20 overflow-hidden max-[992px]:pb-[50px]" />
      <FaqSection
        items={shopifyMigrationFaqs}
        idPrefix="shopify-migration-faq"
        className="faq-sec pt-0 pb-20 max-[767px]:pb-[50px]"
      />
      <CtaBannerSection />
    </div>
  );
}
