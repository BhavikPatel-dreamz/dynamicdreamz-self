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
import { shopifyDevelopmentTexasContent } from "@/content/shopify-development-in-texas";

export function ShopifyDevelopmentInTexasPage() {
  const brandsContent = {
    heading: shopifyDevelopmentTexasContent.brands.title,
    slug: "shopify-development-in-texas",
  };

  const portfolioContent = {
    heading: shopifyDevelopmentTexasContent.portfolio.heading,
    description: shopifyDevelopmentTexasContent.portfolio.description,
    items: shopifyDevelopmentTexasContent.portfolio.items,
  };

  return (
    <div>
      <CityPageHeroSection content={shopifyDevelopmentTexasContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentTexasContent.brands.title}
        items={shopifyDevelopmentTexasContent.brands.items}
      />
      <CityPageCounterSection
        content={shopifyDevelopmentTexasContent.counter}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        content={shopifyDevelopmentTexasContent.whyChoose}
        eyebrowVariant="dash"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={shopifyDevelopmentTexasContent.services}
        eyebrow={shopifyDevelopmentTexasContent.services.eyebrow}
        hideCta={true}
        id="services"
        showDescription={true}
      />
      <OurDevelopmentProcessSection
        content={shopifyDevelopmentTexasContent.process}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={shopifyDevelopmentTexasContent.whyDynamicDreamz}
        eyebrowVariant="dash"
        theme="white"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={portfolioContent}
        ctaHref={shopifyDevelopmentTexasContent.portfolio.ctaHref}
        ctaLabel={shopifyDevelopmentTexasContent.sectionCopy.portfolioCta}
        eyebrow={shopifyDevelopmentTexasContent.sectionCopy.portfolioEyebrow}
        headerLayout="split"
      />
      <HappyClientSection
        description={shopifyDevelopmentTexasContent.testimonials.description}
        eyebrow={shopifyDevelopmentTexasContent.sectionCopy.testimonialsEyebrow}
        heading={shopifyDevelopmentTexasContent.testimonials.heading}
        items={shopifyDevelopmentTexasContent.testimonials.items}
      />
      <SplitFaqSection
        heading={shopifyDevelopmentTexasContent.sectionCopy.faqHeading}
        idPrefix="texas-faq"
        items={shopifyDevelopmentTexasContent.faqs}
      />
      <CtaBannerSection
        ctaHref={shopifyDevelopmentTexasContent.ctaBanner.ctaHref}
        ctaLabel={shopifyDevelopmentTexasContent.ctaBanner.ctaLabel}
        heading={shopifyDevelopmentTexasContent.ctaBanner.heading}
      />
    </div>
  );
}
