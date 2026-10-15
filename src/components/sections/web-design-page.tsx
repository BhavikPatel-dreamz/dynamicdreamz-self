import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
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
        textColumnClassName="w-[48.3%] max-[992px]:w-full"
        titleColumnClassName="w-[44%] max-[992px]:w-full"
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
