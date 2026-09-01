import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { shopifyMaintenanceServicesContent } from "@/content/shopify-maintenance-services";

export function ShopifyMaintenanceServicesPage() {
  const brandsContent = {
    heading: shopifyMaintenanceServicesContent.brands.title,
    slug: "shopify-maintenance-services",
  };

  const servicesContent = {
    heading: shopifyMaintenanceServicesContent.services.heading,
    description: shopifyMaintenanceServicesContent.services.description,
    items: shopifyMaintenanceServicesContent.services.items,
    cta: shopifyMaintenanceServicesContent.services.cta,
  };

  const portfolioContent = {
    heading: shopifyMaintenanceServicesContent.portfolio.heading,
    description: shopifyMaintenanceServicesContent.portfolio.description,
    items: shopifyMaintenanceServicesContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec single-full-img relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={shopifyMaintenanceServicesContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyMaintenanceServicesContent.brands.title}
        items={shopifyMaintenanceServicesContent.brands.items}
      />
      <AgencyServicesSection
        className="what-we-provide-sec pt-20 pb-0 max-[992px]:pt-[50px]"
        content={servicesContent}
        id="what-we-provide"
      />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
        ctaLabel={shopifyMaintenanceServicesContent.sectionCopy.portfolioCta}
      />
      <HappyClientSection
        description={shopifyMaintenanceServicesContent.testimonials.description}
        heading={shopifyMaintenanceServicesContent.testimonials.heading}
        items={shopifyMaintenanceServicesContent.testimonials.items}
      />
      <SplitFaqSection
        heading={shopifyMaintenanceServicesContent.sectionCopy.faqHeading}
        idPrefix="shopify-maintenance-faq"
        items={shopifyMaintenanceServicesContent.faqs}
      />
      <CtaBannerSection
        ctaHref={shopifyMaintenanceServicesContent.ctaBanner.ctaHref}
        ctaLabel={shopifyMaintenanceServicesContent.ctaBanner.ctaLabel}
        heading={shopifyMaintenanceServicesContent.ctaBanner.heading}
      />
    </div>
  );
}
