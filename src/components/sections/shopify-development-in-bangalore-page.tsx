import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityPageCounterSection } from "@/components/sections/city-page-counter-section";
import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ProcessWaveSection } from "@/components/sections/process-wave-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { shopifyDevelopmentBangaloreContent } from "@/content/shopify-development-in-bangalore";

export function ShopifyDevelopmentInBangalorePage() {
  const brandsContent = {
    heading: shopifyDevelopmentBangaloreContent.brands.title,
    slug: "shopify-development-in-bangalore",
  };

  const reasonsContent = {
    heading: shopifyDevelopmentBangaloreContent.reasons.heading,
    description: shopifyDevelopmentBangaloreContent.reasons.description,
    items: shopifyDevelopmentBangaloreContent.reasons.items,
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
      />
      <CityWhyChooseBoxesSection
        content={shopifyDevelopmentBangaloreContent.whyChoose}
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
      <ProcessWaveSection
        className="our-process-sec inner-process-sec shopify-development-process relative overflow-hidden py-20 max-[992px]:py-12.5 max-[767px]:py-10"
        content={shopifyDevelopmentBangaloreContent.process}
      />
      <ShopifyReasonsSection
        carouselFullBleed={true}
        carouselItemClassName="w-[458px] shrink-0 max-[767px]:w-[calc(100vw-60px)]"
        className="shopify-customization-services-sec mb-20 bg-linear-[97.18deg] from-[#e8f9ef] from-[28.5%] to-[#e6fafd] to-[91.82%] py-20 max-[992px]:py-[60px]"
        content={reasonsContent}
        layout="carousel"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        columns={4}
        content={portfolioContent}
        ctaLabel={shopifyDevelopmentBangaloreContent.sectionCopy.portfolioCta}
        eyebrow={shopifyDevelopmentBangaloreContent.sectionCopy.portfolioEyebrow}
        headerLayout="split"
      />
      <HappyClientSection
        description={shopifyDevelopmentBangaloreContent.testimonials.description}
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
