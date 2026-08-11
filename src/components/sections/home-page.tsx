import { AgencyOverviewSection } from "@/components/sections/home/agency-overview-section";
import { BrandPartnersSection } from "@/components/sections/home/brand-partners-section";
import { ExpertiseSection } from "@/components/sections/home/expertise-section";
import { HomeHeroSection } from "@/components/sections/home/home-hero-section";
import { InsightsSection } from "@/components/sections/home/insights-section";
import { IntegrationsSection } from "@/components/sections/home/integrations-section";
import { SelectedWorkSection } from "@/components/sections/home/selected-work-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";

export function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <BrandPartnersSection />
      <AgencyOverviewSection />
      <ExpertiseSection />
      <SelectedWorkSection />
      <TestimonialsSection />
      <IntegrationsSection />
      <InsightsSection />
    </>
  );
}
