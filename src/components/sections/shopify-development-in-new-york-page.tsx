import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityPageCounterSection } from "@/components/sections/city-page-counter-section";
import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { shopifyDevelopmentNewYorkContent } from "@/content/shopify-development-in-new-york";

export function ShopifyDevelopmentInNewYorkPage() {
  const brandsContent = {
    heading: shopifyDevelopmentNewYorkContent.brands.title,
    slug: "shopify-development-in-new-york",
  };

  const portfolioContent = {
    heading: shopifyDevelopmentNewYorkContent.portfolio.heading,
    description: shopifyDevelopmentNewYorkContent.portfolio.description,
    items: shopifyDevelopmentNewYorkContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection content={shopifyDevelopmentNewYorkContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentNewYorkContent.brands.title}
        items={shopifyDevelopmentNewYorkContent.brands.items}
      />
      <CityPageCounterSection
        content={shopifyDevelopmentNewYorkContent.counter}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        content={shopifyDevelopmentNewYorkContent.whyChoose}
        eyebrowVariant="dash"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={shopifyDevelopmentNewYorkContent.services}
        eyebrow={shopifyDevelopmentNewYorkContent.services.eyebrow}
        hideCta={true}
        id="services"
        showDescription={true}
      />
      <OurDevelopmentProcessSection
        content={shopifyDevelopmentNewYorkContent.process}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={shopifyDevelopmentNewYorkContent.whyDynamicDreamz}
        eyebrowVariant="dash"
        theme="white"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={portfolioContent}
        ctaHref={shopifyDevelopmentNewYorkContent.portfolio.ctaHref}
        ctaLabel={shopifyDevelopmentNewYorkContent.sectionCopy.portfolioCta}
        eyebrow={shopifyDevelopmentNewYorkContent.sectionCopy.portfolioEyebrow}
        headerLayout="split"
      />
      <HappyClientSection
        description={shopifyDevelopmentNewYorkContent.testimonials.description}
        eyebrow={shopifyDevelopmentNewYorkContent.sectionCopy.testimonialsEyebrow}
        heading={shopifyDevelopmentNewYorkContent.testimonials.heading}
        items={shopifyDevelopmentNewYorkContent.testimonials.items}
      />
      <SplitFaqSection
        heading={shopifyDevelopmentNewYorkContent.sectionCopy.faqHeading}
        idPrefix="new-york-faq"
        items={shopifyDevelopmentNewYorkContent.faqs}
      />
      <CtaBannerSection
        ctaHref={shopifyDevelopmentNewYorkContent.ctaBanner.ctaHref}
        ctaLabel={shopifyDevelopmentNewYorkContent.ctaBanner.ctaLabel}
        heading={shopifyDevelopmentNewYorkContent.ctaBanner.heading}
      />
    </div>
  );
}
