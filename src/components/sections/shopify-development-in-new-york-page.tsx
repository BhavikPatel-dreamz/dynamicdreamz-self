import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { BookIntroCallSection } from "@/components/sections/book-intro-call-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ProcessWaveSection } from "@/components/sections/process-wave-section";
import { ShopifyAppBenefitsSection } from "@/components/sections/shopify-mobile-app/shopify-app-benefits-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { shopifyDevelopmentNewYorkContent } from "@/content/shopify-development-in-new-york";

export function ShopifyDevelopmentInNewYorkPage() {
  const brandsContent = {
    heading: shopifyDevelopmentNewYorkContent.brands.title,
    slug: "shopify-development-in-new-york",
  };

  const reasonsContent = {
    heading: shopifyDevelopmentNewYorkContent.reasons.heading,
    description: shopifyDevelopmentNewYorkContent.reasons.description,
    items: shopifyDevelopmentNewYorkContent.reasons.items,
  };

  const portfolioContent = {
    heading: shopifyDevelopmentNewYorkContent.portfolio.heading,
    description: shopifyDevelopmentNewYorkContent.portfolio.description,
    items: shopifyDevelopmentNewYorkContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection content={shopifyDevelopmentNewYorkContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentNewYorkContent.brands.title}
        items={shopifyDevelopmentNewYorkContent.brands.items}
      />
      <TextBoxSection
        className="single-text-box-sec pb-0"
        heading={shopifyDevelopmentNewYorkContent.whyDynamicDreamz.heading}
        paragraphs={shopifyDevelopmentNewYorkContent.whyDynamicDreamz.paragraphs}
      />
      <ShopifyAppBenefitsSection
        className="benefit_box_sec four-column-text-with-icon-sec pb-0"
        content={shopifyDevelopmentNewYorkContent.benefits}
      />
      <AgencyServicesSection
        cardBgClassName="bg-white"
        cardVariant="services-box"
        className="what-we-provide-sec py-20 max-[992px]:py-[50px]"
        columns={2}
        content={shopifyDevelopmentNewYorkContent.services}
        hideCta={true}
        id="services"
        showDescription={true}
      />
      <ProcessWaveSection
        className="our-process-sec inner-process-sec relative overflow-hidden py-20 max-[992px]:py-12.5 max-[767px]:py-10"
        content={shopifyDevelopmentNewYorkContent.process}
      />
      <ShopifyReasonsSection
        carouselFullBleed={true}
        carouselItemClassName="w-[458px] shrink-0 max-[767px]:w-[calc(100vw-60px)]"
        className="shopify-customization-services-sec bg-linear-[97.18deg] from-[#e8f9ef] from-[28.5%] to-[#e6fafd] to-[91.82%] py-20 max-[992px]:py-[60px]"
        content={reasonsContent}
        layout="carousel"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        columns={4}
        content={portfolioContent}
        ctaLabel={shopifyDevelopmentNewYorkContent.sectionCopy.portfolioCta}
        eyebrow={shopifyDevelopmentNewYorkContent.sectionCopy.portfolioEyebrow}
        headerLayout="split"
      />
      <HappyClientSection
        description={shopifyDevelopmentNewYorkContent.testimonials.description}
        heading={shopifyDevelopmentNewYorkContent.testimonials.heading}
        items={shopifyDevelopmentNewYorkContent.testimonials.items}
      />
      <BookIntroCallSection
        content={shopifyDevelopmentNewYorkContent.bookIntroCall}
      />
      <SplitFaqSection
        heading={shopifyDevelopmentNewYorkContent.sectionCopy.faqHeading}
        idPrefix="new-york-faq"
        items={shopifyDevelopmentNewYorkContent.faqs}
      />
      <CtaBannerSection
        ctaHref={shopifyDevelopmentNewYorkContent.ctaBanner.ctaHref}
        ctaLabel={shopifyDevelopmentNewYorkContent.ctaBanner.ctaLabel}
        heading={shopifyDevelopmentNewYorkContent.ctaBanner.heading}
      />
    </div>
  );
}
