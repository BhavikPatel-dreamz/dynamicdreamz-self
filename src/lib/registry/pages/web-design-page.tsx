import { CityPageHeroSection } from "@/components/blocks/CityHeroBlock";
import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { AgencyServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { PricingTableSection } from "@/components/blocks/EngagementModelsBlock";
import { PortfolioShowcaseSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import {
  webDesignBrands,
  webDesignFaqs,
  webDesignHero,
  webDesignPortfolio,
  webDesignPricing,
  webDesignServices,
  webDesignTestimonials,
} from "@/content/web-design";

export function WebDesignPage() {
  return (
    <div>
      <CityPageHeroSection content={webDesignHero} />
      <IndustryBrandsSection
        content={{
          slug: "web-design",
        }}
        items={webDesignBrands}
      />
      <AgencyServicesSection
        cardVariant="services-box"
        content={webDesignServices}
        id="services"
      />
      <PricingTableSection content={webDesignPricing} />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={webDesignPortfolio}
        sectionId="our_work"
        variant="liveGrid"
      />
      <HappyClientSection
        description={webDesignTestimonials.description}
        heading={webDesignTestimonials.heading}
        items={webDesignTestimonials.items}
      />
      <SplitFaqSection
        idPrefix="web-design-faq"
        items={webDesignFaqs}
      />
    </div>
  );
}
