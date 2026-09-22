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
import { shopifyDevelopmentPuneContent } from "@/content/shopify-development-in-pune";

export function ShopifyDevelopmentInPunePage() {
  const brandsContent = {
    heading: shopifyDevelopmentPuneContent.brands.title,
    slug: "shopify-development-in-pune",
  };

  const portfolioContent = {
    heading: shopifyDevelopmentPuneContent.portfolio.heading,
    description: shopifyDevelopmentPuneContent.portfolio.description,
    items: shopifyDevelopmentPuneContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection content={shopifyDevelopmentPuneContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentPuneContent.brands.title}
        items={shopifyDevelopmentPuneContent.brands.items}
      />
      <CityPageCounterSection
        content={shopifyDevelopmentPuneContent.counter}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        content={shopifyDevelopmentPuneContent.whyChoose}
        eyebrowVariant="dash"
      />
      <AgencyServicesSection
        cardBgClassName="bg-white"
        cardVariant="services-box"
        className="what-we-provide-sec py-20 max-[992px]:py-[50px]"
        columns={2}
        content={shopifyDevelopmentPuneContent.services}
        eyebrow={shopifyDevelopmentPuneContent.services.eyebrow}
        hideCta={true}
        id="services"
        showDescription={true}
      />
      <OurDevelopmentProcessSection
        content={shopifyDevelopmentPuneContent.process}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        bgClassName="bg-white"
        className="city-page-why-choose-dynamic !pb-0"
        columns={5}
        content={shopifyDevelopmentPuneContent.whyDynamicDreamz}
        eyebrowVariant="dash"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        columns={4}
        content={portfolioContent}
        ctaHref={shopifyDevelopmentPuneContent.portfolio.ctaHref}
        ctaLabel={shopifyDevelopmentPuneContent.sectionCopy.portfolioCta}
        eyebrow={shopifyDevelopmentPuneContent.sectionCopy.portfolioEyebrow}
        headerLayout="split"
      />
      <HappyClientSection
        description={shopifyDevelopmentPuneContent.testimonials.description}
        eyebrow={shopifyDevelopmentPuneContent.sectionCopy.testimonialsEyebrow}
        heading={shopifyDevelopmentPuneContent.testimonials.heading}
        items={shopifyDevelopmentPuneContent.testimonials.items}
      />
      <SplitFaqSection
        heading={shopifyDevelopmentPuneContent.sectionCopy.faqHeading}
        idPrefix="pune-faq"
        items={shopifyDevelopmentPuneContent.faqs}
      />
      <CtaBannerSection
        ctaHref={shopifyDevelopmentPuneContent.ctaBanner.ctaHref}
        ctaLabel={shopifyDevelopmentPuneContent.ctaBanner.ctaLabel}
        heading={shopifyDevelopmentPuneContent.ctaBanner.heading}
      />
    </div>
  );
}
