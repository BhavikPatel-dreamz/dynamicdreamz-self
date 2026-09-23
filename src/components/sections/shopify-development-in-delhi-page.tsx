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
import { shopifyDevelopmentDelhiContent } from "@/content/shopify-development-in-delhi";

export function ShopifyDevelopmentInDelhiPage() {
  const brandsContent = {
    heading: shopifyDevelopmentDelhiContent.brands.title,
    slug: "shopify-development-in-delhi",
  };

  const portfolioContent = {
    heading: shopifyDevelopmentDelhiContent.portfolio.heading,
    description: shopifyDevelopmentDelhiContent.portfolio.description,
    items: shopifyDevelopmentDelhiContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection content={shopifyDevelopmentDelhiContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentDelhiContent.brands.title}
        items={shopifyDevelopmentDelhiContent.brands.items}
      />
      <CityPageCounterSection
        content={shopifyDevelopmentDelhiContent.counter}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        content={shopifyDevelopmentDelhiContent.whyChoose}
        eyebrowVariant="dash"
      />
      <AgencyServicesSection
        cardBgClassName="bg-white"
        cardVariant="services-box"
        className="what-we-provide-sec py-20 max-[992px]:py-[50px]"
        columns={2}
        content={shopifyDevelopmentDelhiContent.services}
        eyebrow={shopifyDevelopmentDelhiContent.services.eyebrow}
        hideCta={true}
        id="services"
        showDescription={true}
      />
      <OurDevelopmentProcessSection
        content={shopifyDevelopmentDelhiContent.process}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        bgClassName="bg-white"
        className="city-page-why-choose-dynamic !pb-0"
        columns={3}
        content={shopifyDevelopmentDelhiContent.whyDynamicDreamz}
        eyebrowVariant="dash"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        columns={4}
        content={portfolioContent}
        ctaHref={shopifyDevelopmentDelhiContent.portfolio.ctaHref}
        ctaLabel={shopifyDevelopmentDelhiContent.sectionCopy.portfolioCta}
        eyebrow={shopifyDevelopmentDelhiContent.sectionCopy.portfolioEyebrow}
        headerLayout="split"
      />
      <HappyClientSection
        description={shopifyDevelopmentDelhiContent.testimonials.description}
        eyebrow={shopifyDevelopmentDelhiContent.sectionCopy.testimonialsEyebrow}
        heading={shopifyDevelopmentDelhiContent.testimonials.heading}
        items={shopifyDevelopmentDelhiContent.testimonials.items}
      />
      <SplitFaqSection
        heading={shopifyDevelopmentDelhiContent.sectionCopy.faqHeading}
        idPrefix="delhi-faq"
        items={shopifyDevelopmentDelhiContent.faqs}
      />
      <CtaBannerSection
        ctaHref={shopifyDevelopmentDelhiContent.ctaBanner.ctaHref}
        ctaLabel={shopifyDevelopmentDelhiContent.ctaBanner.ctaLabel}
        heading={shopifyDevelopmentDelhiContent.ctaBanner.heading}
      />
    </div>
  );
}
