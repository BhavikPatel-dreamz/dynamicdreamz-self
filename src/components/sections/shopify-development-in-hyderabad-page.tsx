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
import { shopifyDevelopmentHyderabadContent } from "@/content/shopify-development-in-hyderabad";

export function ShopifyDevelopmentInHyderabadPage() {
  const brandsContent = {
    heading: shopifyDevelopmentHyderabadContent.brands.title,
    slug: "shopify-development-in-hyderabad",
  };

  const portfolioContent = {
    heading: shopifyDevelopmentHyderabadContent.portfolio.heading,
    description: shopifyDevelopmentHyderabadContent.portfolio.description,
    items: shopifyDevelopmentHyderabadContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection content={shopifyDevelopmentHyderabadContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentHyderabadContent.brands.title}
        items={shopifyDevelopmentHyderabadContent.brands.items}
      />
      <CityPageCounterSection
        content={shopifyDevelopmentHyderabadContent.counter}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        content={shopifyDevelopmentHyderabadContent.whyChoose}
        eyebrowVariant="dash"
      />
      <AgencyServicesSection
        cardBgClassName="bg-white"
        cardVariant="services-box"
        className="what-we-provide-sec py-20 max-[992px]:py-[50px]"
        columns={2}
        content={shopifyDevelopmentHyderabadContent.services}
        eyebrow={shopifyDevelopmentHyderabadContent.services.eyebrow}
        hideCta={true}
        id="services"
        showDescription={false}
      />
      <OurDevelopmentProcessSection
        content={shopifyDevelopmentHyderabadContent.process}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        bgClassName="bg-white"
        className="city-page-why-choose-dynamic !pb-0"
        columns={3}
        content={shopifyDevelopmentHyderabadContent.whyDynamicDreamz}
        eyebrowVariant="dash"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        columns={4}
        content={portfolioContent}
        ctaHref={shopifyDevelopmentHyderabadContent.portfolio.ctaHref}
        ctaLabel={shopifyDevelopmentHyderabadContent.sectionCopy.portfolioCta}
        eyebrow={shopifyDevelopmentHyderabadContent.sectionCopy.portfolioEyebrow}
        headerLayout="split"
      />
      <HappyClientSection
        description={shopifyDevelopmentHyderabadContent.testimonials.description}
        eyebrow={shopifyDevelopmentHyderabadContent.sectionCopy.testimonialsEyebrow}
        heading={shopifyDevelopmentHyderabadContent.testimonials.heading}
        items={shopifyDevelopmentHyderabadContent.testimonials.items}
      />
      <SplitFaqSection
        heading={shopifyDevelopmentHyderabadContent.sectionCopy.faqHeading}
        idPrefix="hyderabad-faq"
        items={shopifyDevelopmentHyderabadContent.faqs}
      />
      <CtaBannerSection
        ctaHref={shopifyDevelopmentHyderabadContent.ctaBanner.ctaHref}
        ctaLabel={shopifyDevelopmentHyderabadContent.ctaBanner.ctaLabel}
        heading={shopifyDevelopmentHyderabadContent.ctaBanner.heading}
      />
    </div>
  );
}
