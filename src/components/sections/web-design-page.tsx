import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import {
  webDesignBrands,
  webDesignFaqs,
  webDesignHero,
  webDesignPortfolio,
  webDesignServices,
  webDesignTestimonials,
} from "@/content/web-design";

export function WebDesignPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection content={webDesignHero} />
      <IndustryBrandsSection
        content={{
          slug: "web-design",
        }}
        items={webDesignBrands}
      />
      <AgencyServicesSection content={webDesignServices} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[60px]"
        content={webDesignPortfolio}
      />
      <HappyClientSection
        description={webDesignTestimonials.description}
        heading={webDesignTestimonials.heading}
        items={webDesignTestimonials.items}
      />
      <SplitFaqSection idPrefix="web-design-faq" items={webDesignFaqs} />
    </div>
  );
}
