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
import { shopifyDevelopmentBangaloreContent } from "@/content/shopify-development-in-bangalore";

export function ShopifyDevelopmentInBangalorePage() {
  const brandsContent = {
    heading: shopifyDevelopmentBangaloreContent.brands.title,
    slug: "shopify-development-in-bangalore",
  };

  const portfolioContent = {
    heading: shopifyDevelopmentBangaloreContent.portfolio.heading,
    description: shopifyDevelopmentBangaloreContent.portfolio.description,
    items: shopifyDevelopmentBangaloreContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection content={shopifyDevelopmentBangaloreContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentBangaloreContent.brands.title}
        items={shopifyDevelopmentBangaloreContent.brands.items}
      />
      <CityPageCounterSection
        content={shopifyDevelopmentBangaloreContent.counter}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        content={shopifyDevelopmentBangaloreContent.whyChoose}
        eyebrowVariant="dash"
      />
      <AgencyServicesSection
        cardBgClassName="bg-white"
        cardVariant="services-box"
        className="what-we-provide-sec py-20 max-[992px]:py-[50px]"
        columns={2}
        content={shopifyDevelopmentBangaloreContent.services}
        eyebrow={shopifyDevelopmentBangaloreContent.services.eyebrow}
        hideCta={true}
        id="services"
        showDescription={true}
      />
      <OurDevelopmentProcessSection
        content={shopifyDevelopmentBangaloreContent.process}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        bgClassName="bg-white"
        className="city-page-why-choose-dynamic !pb-0"
        columns={3}
        content={shopifyDevelopmentBangaloreContent.whyDynamicDreamz}
        eyebrowVariant="dash"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        columns={4}
        content={portfolioContent}
        ctaHref={shopifyDevelopmentBangaloreContent.portfolio.ctaHref}
        ctaLabel={shopifyDevelopmentBangaloreContent.sectionCopy.portfolioCta}
        eyebrow={shopifyDevelopmentBangaloreContent.sectionCopy.portfolioEyebrow}
        headerLayout="split"
      />
      <HappyClientSection
        description={shopifyDevelopmentBangaloreContent.testimonials.description}
        eyebrow={shopifyDevelopmentBangaloreContent.sectionCopy.testimonialsEyebrow}
        heading={shopifyDevelopmentBangaloreContent.testimonials.heading}
        items={shopifyDevelopmentBangaloreContent.testimonials.items}
      />
      <SplitFaqSection
        heading={shopifyDevelopmentBangaloreContent.sectionCopy.faqHeading}
        idPrefix="bangalore-faq"
        items={shopifyDevelopmentBangaloreContent.faqs}
      />
      <CtaBannerSection
        ctaHref={shopifyDevelopmentBangaloreContent.ctaBanner.ctaHref}
        ctaLabel={shopifyDevelopmentBangaloreContent.ctaBanner.ctaLabel}
        heading={shopifyDevelopmentBangaloreContent.ctaBanner.heading}
      />
    </div>
  );
}
