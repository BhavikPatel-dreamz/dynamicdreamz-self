import { CityPageCounterSection } from "@/components/blocks/TrustStatsBarBlock";
import { CityPageHeroSection } from "@/components/blocks/CityHeroBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { PortfolioShowcaseSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { ShopifyStageServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { ThemeCustomizationServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { WebflowGrowthIcon } from "@/lib/icons/webflow-growth-icons";
import {
  webflowDevelopmentBrands,
  webflowDevelopmentFaqDescription,
  webflowDevelopmentFaqHeading,
  webflowDevelopmentFaqs,
  webflowDevelopmentGrowth,
  webflowDevelopmentHero,
  webflowDevelopmentMilestones,
  webflowDevelopmentPortfolio,
  webflowDevelopmentServices,
  webflowDevelopmentTestimonials,
} from "@/content/webflow-development";

export function WebflowDevelopmentPage() {
  const growthContent = {
    ...webflowDevelopmentGrowth,
    boxes: webflowDevelopmentGrowth.boxes.map((box) => ({
      ...box,
      icon: <WebflowGrowthIcon name={box.iconKey} />,
    })),
  };

  return (
    <div>
      <CityPageHeroSection
        content={webflowDevelopmentHero}
      />
      <IndustryBrandsSection
        content={{
          slug: "webflow-development",
          brands: { ariaLabel: "Trusted by Leading Brands" },
        }}
        items={webflowDevelopmentBrands}
      />
      <ShopifyStageServicesSection
        content={webflowDevelopmentServices}
        id="shopify-services"
      />
      <ThemeCustomizationServicesSection
        content={growthContent}
        variant="transparent"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={webflowDevelopmentPortfolio}
        eyebrow={webflowDevelopmentPortfolio.eyebrow}
        hideCta={false}
        sectionId="our_work"
        showMobileArrow={true}
        variant="liveGrid"
      />
      <CityPageCounterSection content={webflowDevelopmentMilestones} />
      <HappyClientSection
        description={webflowDevelopmentTestimonials.description}
        eyebrow={webflowDevelopmentTestimonials.eyebrow}
        heading={webflowDevelopmentTestimonials.heading}
        items={webflowDevelopmentTestimonials.items}
        variant="client-stories"
      />
      <SplitFaqSection
        description={webflowDevelopmentFaqDescription}
        heading={webflowDevelopmentFaqHeading}
        idPrefix="webflow-development-faq"
        items={webflowDevelopmentFaqs}
      />
    </div>
  );
}
