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
import { shopifyDevelopmentBarcelonaContent } from "@/content/shopify-development-in-barcelona-spain";

export function ShopifyDevelopmentInBarcelonaSpainPage() {
  const brandsContent = {
    heading: shopifyDevelopmentBarcelonaContent.brands.title,
    slug: "shopify-development-in-barcelona-spain",
  };

  const portfolioContent = {
    heading: shopifyDevelopmentBarcelonaContent.portfolio.heading,
    description: shopifyDevelopmentBarcelonaContent.portfolio.description,
    items: shopifyDevelopmentBarcelonaContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection content={shopifyDevelopmentBarcelonaContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentBarcelonaContent.brands.title}
        items={shopifyDevelopmentBarcelonaContent.brands.items}
      />
      <CityPageCounterSection
        content={shopifyDevelopmentBarcelonaContent.counter}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        content={shopifyDevelopmentBarcelonaContent.whyChoose}
        eyebrowVariant="dash"
      />
      <AgencyServicesSection
        cardBgClassName="bg-white"
        cardVariant="services-box"
        className="what-we-provide-sec py-20 max-[992px]:py-[50px]"
        columns={2}
        content={shopifyDevelopmentBarcelonaContent.services}
        eyebrow={shopifyDevelopmentBarcelonaContent.services.eyebrow}
        hideCta={true}
        id="services"
        showDescription={true}
      />
      <OurDevelopmentProcessSection
        content={shopifyDevelopmentBarcelonaContent.process}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        bgClassName="bg-white"
        className="city-page-why-choose-dynamic !pb-0"
        columns={3}
        content={shopifyDevelopmentBarcelonaContent.whyDynamicDreamz}
        eyebrowVariant="dash"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        columns={4}
        content={portfolioContent}
        ctaHref={shopifyDevelopmentBarcelonaContent.portfolio.ctaHref}
        ctaLabel={shopifyDevelopmentBarcelonaContent.sectionCopy.portfolioCta}
        eyebrow={shopifyDevelopmentBarcelonaContent.sectionCopy.portfolioEyebrow}
        headerLayout="split"
      />
      <HappyClientSection
        description={shopifyDevelopmentBarcelonaContent.testimonials.description}
        eyebrow={shopifyDevelopmentBarcelonaContent.sectionCopy.testimonialsEyebrow}
        heading={shopifyDevelopmentBarcelonaContent.testimonials.heading}
        items={shopifyDevelopmentBarcelonaContent.testimonials.items}
      />
      <SplitFaqSection
        answerClassName="!text-sm !leading-6 font-medium text-[#535353]"
        className="faq-sec"
        heading={shopifyDevelopmentBarcelonaContent.sectionCopy.faqHeading}
        idPrefix="barcelona-faq"
        items={shopifyDevelopmentBarcelonaContent.faqs}
      />
      <CtaBannerSection
        ctaHref={shopifyDevelopmentBarcelonaContent.ctaBanner.ctaHref}
        ctaLabel={shopifyDevelopmentBarcelonaContent.ctaBanner.ctaLabel}
        heading={shopifyDevelopmentBarcelonaContent.ctaBanner.heading}
      />
    </div>
  );
}
