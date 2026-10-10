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
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection content={webDesignHero} />
      <IndustryBrandsSection
        content={{
          slug: "web-design",
        }}
        items={webDesignBrands}
      />
      <AgencyServicesSection
        cardVariant="services-box"
        className="what-we-provide-sec py-20 max-[992px]:py-[50px]"
        content={webDesignServices}
        headerTextColumnClassName="w-[48.3%] max-[992px]:w-full"
        headerTitleColumnClassName="w-[44%] max-[992px]:w-full"
        id="services"
      />
      <PricingTableSection
        className="white_label_wp_develop_plan_section shopify-plus-engagement mb-0 bg-[#edf2ee] py-20 max-[992px]:py-[50px]"
        content={webDesignPricing}
        textColumnClassName="w-[48.3%] max-[992px]:w-full"
        titleColumnClassName="w-[44%] max-[992px]:w-full"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec py-20 max-[992px]:py-[60px]"
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
        className="faq-sec"
        idPrefix="web-design-faq"
        items={webDesignFaqs}
      />
    </div>
  );
}
