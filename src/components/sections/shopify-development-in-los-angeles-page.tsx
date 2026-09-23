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
import { shopifyDevelopmentLosAngelesContent } from "@/content/shopify-development-in-los-angeles";

export function ShopifyDevelopmentInLosAngelesPage() {
  const brandsContent = {
    heading: shopifyDevelopmentLosAngelesContent.brands.title,
    slug: "shopify-development-in-los-angeles",
  };

  const portfolioContent = {
    heading: shopifyDevelopmentLosAngelesContent.portfolio.heading,
    description: shopifyDevelopmentLosAngelesContent.portfolio.description,
    items: shopifyDevelopmentLosAngelesContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection content={shopifyDevelopmentLosAngelesContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentLosAngelesContent.brands.title}
        items={shopifyDevelopmentLosAngelesContent.brands.items}
      />
      <CityPageCounterSection
        content={shopifyDevelopmentLosAngelesContent.counter}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        content={shopifyDevelopmentLosAngelesContent.whyChoose}
        eyebrowVariant="dash"
      />
      <AgencyServicesSection
        cardBgClassName="bg-white"
        cardVariant="services-box"
        className="what-we-provide-sec py-20 max-[992px]:py-[50px]"
        columns={2}
        content={shopifyDevelopmentLosAngelesContent.services}
        eyebrow={shopifyDevelopmentLosAngelesContent.services.eyebrow}
        hideCta={true}
        id="services"
        showDescription={true}
      />
      <OurDevelopmentProcessSection
        content={shopifyDevelopmentLosAngelesContent.process}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        bgClassName="bg-white"
        className="city-page-why-choose-dynamic !pb-0"
        columns={3}
        content={shopifyDevelopmentLosAngelesContent.whyDynamicDreamz}
        eyebrowVariant="dash"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        columns={4}
        content={portfolioContent}
        ctaHref={shopifyDevelopmentLosAngelesContent.portfolio.ctaHref}
        ctaLabel={shopifyDevelopmentLosAngelesContent.sectionCopy.portfolioCta}
        eyebrow={shopifyDevelopmentLosAngelesContent.sectionCopy.portfolioEyebrow}
        headerLayout="split"
      />
      <HappyClientSection
        description={shopifyDevelopmentLosAngelesContent.testimonials.description}
        eyebrow={shopifyDevelopmentLosAngelesContent.sectionCopy.testimonialsEyebrow}
        heading={shopifyDevelopmentLosAngelesContent.testimonials.heading}
        items={shopifyDevelopmentLosAngelesContent.testimonials.items}
      />
      <SplitFaqSection
        answerClassName="!text-base !leading-[28px] font-medium text-[#535353] max-[1199px]:!text-sm max-[1199px]:!leading-6"
        className="faq-sec"
        heading={shopifyDevelopmentLosAngelesContent.sectionCopy.faqHeading}
        idPrefix="los-angeles-faq"
        items={shopifyDevelopmentLosAngelesContent.faqs}
      />
      <CtaBannerSection
        ctaHref={shopifyDevelopmentLosAngelesContent.ctaBanner.ctaHref}
        ctaLabel={shopifyDevelopmentLosAngelesContent.ctaBanner.ctaLabel}
        heading={shopifyDevelopmentLosAngelesContent.ctaBanner.heading}
      />
    </div>
  );
}
