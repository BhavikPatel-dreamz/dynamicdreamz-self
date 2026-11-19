import { BrandPartnersSection } from "@/components/sections/home/brand-partners-section";
import { CommerceSolutionsSection } from "@/components/sections/home/commerce-solutions-section";
import { HomeHeroSection } from "@/components/sections/home/home-hero-section";
import { HomeFaqSection } from "@/components/sections/home/home-faq-section";
import { InsightsSection } from "@/components/sections/home/insights-section";
import { IntegrationsSection } from "@/components/sections/home/integrations-section";
import { SelectedWorkSection } from "@/components/sections/home/selected-work-section";
import { ShopifyPlusAgencySection } from "@/components/sections/home/shopify-plus-agency-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { WhiteLabelPartnerSection } from "@/components/sections/home/white-label-partner-section";
import { homeSectionCopy } from "@/content/home";
import { getPayloadAdaptedTestimonials } from "@/lib/payload";

export async function HomePage() {
  const testimonials = await getPayloadAdaptedTestimonials();

  return (
    <>
      <HomeHeroSection />
      <BrandPartnersSection />
      <ShopifyPlusAgencySection />
      <WhiteLabelPartnerSection />
      <CommerceSolutionsSection />
      <SelectedWorkSection />
      <HappyClientSection
        description={homeSectionCopy.testimonialsDescription}
        hasTopPadding={true}
        heading={homeSectionCopy.testimonialsTitle}
        items={testimonials.length > 0 ? testimonials : undefined}
      />
      <IntegrationsSection />
      <InsightsSection />
      <HomeFaqSection />
    </>
  );
}
