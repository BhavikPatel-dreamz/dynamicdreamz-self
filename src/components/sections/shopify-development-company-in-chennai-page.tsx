import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ProcessWaveSection } from "@/components/sections/process-wave-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ShopifyAppBenefitsSection } from "@/components/sections/shopify-mobile-app/shopify-app-benefits-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { shopifyDevelopmentChennaiContent } from "@/content/shopify-development-company-in-chennai";

export function ShopifyDevelopmentCompanyInChennaiPage() {
  const brandsContent = {
    heading: shopifyDevelopmentChennaiContent.brands.title,
    slug: "shopify-development-company-in-chennai",
  };

  const servicesContent = {
    heading: shopifyDevelopmentChennaiContent.services.heading,
    description: shopifyDevelopmentChennaiContent.services.description,
    items: shopifyDevelopmentChennaiContent.services.items,
  };

  const reasonsContent = {
    heading: shopifyDevelopmentChennaiContent.reasons.heading,
    description: shopifyDevelopmentChennaiContent.reasons.description,
    items: shopifyDevelopmentChennaiContent.reasons.items,
  };

  const portfolioContent = {
    heading: shopifyDevelopmentChennaiContent.portfolio.heading,
    description: shopifyDevelopmentChennaiContent.portfolio.description,
    items: shopifyDevelopmentChennaiContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec single-full-img relative overflow-hidden bg-white pt-47.5 pb-13.75 max-[992px]:pt-25"
        content={shopifyDevelopmentChennaiContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentChennaiContent.brands.title}
        items={shopifyDevelopmentChennaiContent.brands.items}
      />
      <TextBoxSection
        className="single-text-box-sec pb-0 pt-20 max-[992px]:pt-12.5"
        heading={shopifyDevelopmentChennaiContent.intro.heading}
        paragraphs={shopifyDevelopmentChennaiContent.intro.paragraphs}
      />
      <ShopifyAppBenefitsSection
        className="benefit_box_sec four-column-text-with-icon-sec pb-0 pt-20 max-[992px]:pt-12.5"
        content={shopifyDevelopmentChennaiContent.benefits}
        id="why-choose-shopify"
      />
      <AgencyServicesSection content={servicesContent} />
      <ProcessWaveSection
        className="pt-0"
        content={shopifyDevelopmentChennaiContent.process}
      />
      <ShopifyReasonsSection
        carouselFullBleed
        content={reasonsContent}
        id="why-choose-dynamic-dreamz"
        layout="carousel"
      />
      <PortfolioShowcaseSection
        content={portfolioContent}
        eyebrow="PORTFOLIO"
        eyebrowClassName="mb-4!"
        headerLayout="split"
        columns={4}
        ctaHref="/our-work"
        ctaLabel="VIEW OUR WORK"
        variant="liveGrid"
      />
      <HappyClientSection
        description={shopifyDevelopmentChennaiContent.testimonials.description}
        heading={shopifyDevelopmentChennaiContent.testimonials.heading}
        items={shopifyDevelopmentChennaiContent.testimonials.items}
      />
      <SplitFaqSection
        idPrefix="chennai-faq"
        items={shopifyDevelopmentChennaiContent.faqs}
      />
      <CtaBannerSection
        ctaHref={shopifyDevelopmentChennaiContent.ctaBanner.ctaHref}
        ctaLabel={shopifyDevelopmentChennaiContent.ctaBanner.ctaLabel}
        heading={shopifyDevelopmentChennaiContent.ctaBanner.heading}
      />
    </div>
  );
}
