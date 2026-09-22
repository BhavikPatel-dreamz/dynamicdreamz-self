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
import { shopifyDevelopmentMumbaiContent } from "@/content/shopify-development-in-mumbai";

export function ShopifyDevelopmentInMumbaiPage() {
  const brandsContent = {
    heading: shopifyDevelopmentMumbaiContent.brands.title,
    slug: "shopify-development-in-mumbai",
  };

  const portfolioContent = {
    heading: shopifyDevelopmentMumbaiContent.portfolio.heading,
    description: shopifyDevelopmentMumbaiContent.portfolio.description,
    items: shopifyDevelopmentMumbaiContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection content={shopifyDevelopmentMumbaiContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentMumbaiContent.brands.title}
        items={shopifyDevelopmentMumbaiContent.brands.items}
      />
      <CityPageCounterSection
        content={shopifyDevelopmentMumbaiContent.counter}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        content={shopifyDevelopmentMumbaiContent.whyChoose}
        eyebrowVariant="dash"
      />
      <AgencyServicesSection
        cardBgClassName="bg-white"
        cardVariant="services-box"
        className="what-we-provide-sec py-20 max-[992px]:py-[50px]"
        columns={2}
        content={shopifyDevelopmentMumbaiContent.services}
        eyebrow={shopifyDevelopmentMumbaiContent.services.eyebrow}
        hideCta={true}
        id="services"
        showDescription={true}
      />
      <OurDevelopmentProcessSection
        content={shopifyDevelopmentMumbaiContent.process}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        bgClassName="bg-white"
        className="city-page-why-choose-dynamic !pb-0"
        columns={3}
        content={shopifyDevelopmentMumbaiContent.whyDynamicDreamz}
        eyebrowVariant="dash"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        columns={4}
        content={portfolioContent}
        ctaHref={shopifyDevelopmentMumbaiContent.portfolio.ctaHref}
        ctaLabel={shopifyDevelopmentMumbaiContent.sectionCopy.portfolioCta}
        eyebrow={shopifyDevelopmentMumbaiContent.sectionCopy.portfolioEyebrow}
        headerLayout="split"
      />
      <HappyClientSection
        description={shopifyDevelopmentMumbaiContent.testimonials.description}
        eyebrow={shopifyDevelopmentMumbaiContent.sectionCopy.testimonialsEyebrow}
        heading={shopifyDevelopmentMumbaiContent.testimonials.heading}
        items={shopifyDevelopmentMumbaiContent.testimonials.items}
      />
      <SplitFaqSection
        heading={shopifyDevelopmentMumbaiContent.sectionCopy.faqHeading}
        idPrefix="mumbai-faq"
        items={shopifyDevelopmentMumbaiContent.faqs}
      />
      <CtaBannerSection
        ctaHref={shopifyDevelopmentMumbaiContent.ctaBanner.ctaHref}
        ctaLabel={shopifyDevelopmentMumbaiContent.ctaBanner.ctaLabel}
        heading={shopifyDevelopmentMumbaiContent.ctaBanner.heading}
      />
    </div>
  );
}
