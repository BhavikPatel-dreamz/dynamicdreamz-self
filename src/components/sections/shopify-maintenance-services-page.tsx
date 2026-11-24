import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { shopifyMaintenanceServicesContent } from "@/content/shopify-maintenance-services";

export function ShopifyMaintenanceServicesPage() {
  const brandsContent = {
    heading: shopifyMaintenanceServicesContent.brands.title,
    slug: "shopify-maintenance-services",
  };

  return (
    <div>
      <ServiceHeroVideoSection
        content={shopifyMaintenanceServicesContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        density="flexible"
        heading={shopifyMaintenanceServicesContent.brands.title}
        items={shopifyMaintenanceServicesContent.brands.items}
      />
      <AgencyServicesSection
        cardVariant="services-box"
        className="pb-0"
        content={shopifyMaintenanceServicesContent.services}
        id="services"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={shopifyMaintenanceServicesContent.portfolio}
        eyebrow={shopifyMaintenanceServicesContent.portfolio.eyebrow}
        headerLayout="split"
        sectionId="our_work"
      />
      <PricingTableSection content={shopifyMaintenanceServicesContent.pricing} />
      <HappyClientSection
        hasTopPadding={true}
        description={shopifyMaintenanceServicesContent.testimonials.description}
        eyebrow={shopifyMaintenanceServicesContent.testimonials.eyebrow}
        heading={shopifyMaintenanceServicesContent.testimonials.heading}
        items={shopifyMaintenanceServicesContent.testimonials.items}
      />
      <SplitFaqSection
        heading={shopifyMaintenanceServicesContent.sectionCopy.faqHeading}
        idPrefix="shopify-maintenance-services-faqs"
        items={shopifyMaintenanceServicesContent.faqs}
        sectionId="faq"
      />
    </div>
  );
}
