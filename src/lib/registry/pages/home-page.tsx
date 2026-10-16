import { BrandPartnersSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { CommerceSolutionsSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { HomeHeroSection } from "@/components/blocks/AgencyHeroBlock";
import { HomeFaqSection } from "@/components/blocks/FaqSectionBlock";
import { InsightsSection } from "@/components/blocks/ResourceHubFeedBlock";
import { IntegrationsSection } from "@/components/blocks/TechStackShowcaseBlock";
import { SelectedWorkSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { ShopifyPlusAgencySection } from "@/components/blocks/WhyChooseUsBlock";
import { TestimonialsSection } from "@/components/blocks/TestimonialsSliderBlock";
import { WhiteLabelPartnerSection } from "@/components/blocks/WhiteLabelSolutionsBlock";

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
