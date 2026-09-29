import { CityPageCounterSection } from "@/components/sections/city-page-counter-section";
import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ShopifyStageServicesSection } from "@/components/sections/shopify-stage-services-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { WebflowGrowthIcon } from "@/components/sections/webflow/webflow-growth-icons";
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
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection
        className="hide-logo"
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
        className="our-work-sec pt-0 pb-0"
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
