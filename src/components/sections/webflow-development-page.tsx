import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { MilestonesSection } from "@/components/sections/milestones-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import {
  webflowDevelopmentBrands,
  webflowDevelopmentCta,
  webflowDevelopmentFaqs,
  webflowDevelopmentGrowth,
  webflowDevelopmentHero,
  webflowDevelopmentMilestones,
  webflowDevelopmentPortfolio,
  webflowDevelopmentServices,
  webflowDevelopmentTestimonials,
} from "@/content/webflow-development";

export function WebflowDevelopmentPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        content={webflowDevelopmentHero}
        className="inner-hero-sec webflow-development-hero relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        headingClassName="min-[1200px]:leading-[60px]"
        imageClassName="h-auto w-[213px] max-[767px]:w-[150px]"
      />
      <IndustryBrandsSection
        content={{
          slug: "webflow-development",
          brands: { ariaLabel: "Trusted by Leading Brands" },
        }}
        items={webflowDevelopmentBrands}
      />
      <AgencyServicesSection
        cardVariant="webflow"
        className="webflow-services-section py-20 max-[992px]:py-[60px]"
        columns={3}
        content={webflowDevelopmentServices}
        headerLayout="centered"
        variant="classic"
      />
      <ShopifyReasonsSection
        cardMinHeightClassName="min-h-[300px]"
        className="hiring-services-sec mt-0 bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] py-20 max-[767px]:py-[60px]"
        content={webflowDevelopmentGrowth}
        id="webflow-growth"
      />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[60px]"
        content={webflowDevelopmentPortfolio}
        ctaLabel={webflowDevelopmentPortfolio.ctaLabel}
        ctaHref={webflowDevelopmentPortfolio.ctaHref}
        eyebrow={webflowDevelopmentPortfolio.eyebrow}
        hideCta={false}
        variant="liveGrid"
      />
      <HappyClientSection
        description={webflowDevelopmentTestimonials.description}
        eyebrow={webflowDevelopmentTestimonials.eyebrow}
        heading={webflowDevelopmentTestimonials.heading}
        items={webflowDevelopmentTestimonials.items}
        variant="client-stories"
      />
      <MilestonesSection
        description={webflowDevelopmentMilestones.description}
        heading={webflowDevelopmentMilestones.heading}
        items={webflowDevelopmentMilestones.items}
      />
      <SplitFaqSection idPrefix="webflow-development-faq" items={webflowDevelopmentFaqs} />
      <CtaBannerSection
        ctaHref={webflowDevelopmentCta.ctaHref}
        ctaLabel={webflowDevelopmentCta.ctaLabel}
        heading={webflowDevelopmentCta.heading}
      />
    </div>
  );
}
