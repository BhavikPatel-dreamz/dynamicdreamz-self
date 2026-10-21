import { BrandPartnersSection } from "@/components/sections/home/brand-partners-section";
import { CommerceSolutionsSection } from "@/components/sections/home/commerce-solutions-section";
import { HomeHeroSection } from "@/components/sections/home/home-hero-section";
import { HomeFaqSection } from "@/components/sections/home/home-faq-section";
import { InsightsSection } from "@/components/sections/home/insights-section";
import { IntegrationsSection } from "@/components/sections/home/integrations-section";
import { SelectedWorkSection } from "@/components/sections/home/selected-work-section";
import { ShopifyPlusAgencySection } from "@/components/sections/home/shopify-plus-agency-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { WhiteLabelPartnerSection } from "@/components/sections/home/white-label-partner-section";

export function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <BrandPartnersSection />
      <ShopifyPlusAgencySection />
      <WhiteLabelPartnerSection />
      <CommerceSolutionsSection />
      <SelectedWorkSection />
      <TestimonialsSection />
      <IntegrationsSection />
      <InsightsSection />
      <HomeFaqSection />
    </>
  );
}
