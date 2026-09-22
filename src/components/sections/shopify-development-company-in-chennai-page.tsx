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
import { shopifyDevelopmentChennaiContent } from "@/content/shopify-development-company-in-chennai";

export function ShopifyDevelopmentCompanyInChennaiPage() {
  const brandsContent = {
    heading: shopifyDevelopmentChennaiContent.brands.title,
    slug: "shopify-development-company-in-chennai",
  };

  const portfolioContent = {
    heading: shopifyDevelopmentChennaiContent.portfolio.heading,
    description: shopifyDevelopmentChennaiContent.portfolio.description,
    items: shopifyDevelopmentChennaiContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection content={shopifyDevelopmentChennaiContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentChennaiContent.brands.title}
        items={shopifyDevelopmentChennaiContent.brands.items}
      />
      <CityPageCounterSection
        content={shopifyDevelopmentChennaiContent.counter}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        content={shopifyDevelopmentChennaiContent.whyChoose}
        eyebrowVariant="dash"
      />
      <AgencyServicesSection
        cardBgClassName="bg-white"
        cardVariant="services-box"
        className="what-we-provide-sec py-20 max-[992px]:py-[50px]"
        columns={2}
        content={shopifyDevelopmentChennaiContent.services}
        eyebrow={shopifyDevelopmentChennaiContent.services.eyebrow}
        hideCta={true}
        id="services"
        showDescription={true}
      />
      <OurDevelopmentProcessSection
        content={shopifyDevelopmentChennaiContent.process}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        bgClassName="bg-white"
        className="city-page-why-choose-dynamic !pb-0"
        columns={3}
        content={shopifyDevelopmentChennaiContent.whyDynamicDreamz}
        eyebrowVariant="dash"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        columns={4}
        content={portfolioContent}
        ctaHref={shopifyDevelopmentChennaiContent.portfolio.ctaHref}
        ctaLabel={shopifyDevelopmentChennaiContent.sectionCopy.portfolioCta}
        eyebrow={shopifyDevelopmentChennaiContent.sectionCopy.portfolioEyebrow}
        headerLayout="split"
      />
      <HappyClientSection
        description={shopifyDevelopmentChennaiContent.testimonials.description}
        eyebrow={shopifyDevelopmentChennaiContent.sectionCopy.testimonialsEyebrow}
        heading={shopifyDevelopmentChennaiContent.testimonials.heading}
        items={shopifyDevelopmentChennaiContent.testimonials.items}
      />
      <SplitFaqSection
        idPrefix="chennai-faq"
        heading={shopifyDevelopmentChennaiContent.sectionCopy.faqHeading}
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
