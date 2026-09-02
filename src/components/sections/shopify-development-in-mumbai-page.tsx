import { AgencyServicesSection } from "@/components/sections/agency-services-section";
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
import { shopifyDevelopmentMumbaiContent } from "@/content/shopify-development-in-mumbai";

export function ShopifyDevelopmentInMumbaiPage() {
  const brandsContent = {
    heading: shopifyDevelopmentMumbaiContent.brands.title,
    slug: "shopify-development-in-mumbai",
  };

  const reasonsContent = {
    heading: shopifyDevelopmentMumbaiContent.reasons.heading,
    description: shopifyDevelopmentMumbaiContent.reasons.description,
    items: shopifyDevelopmentMumbaiContent.reasons.items,
  };

  const portfolioContent = {
    heading: shopifyDevelopmentMumbaiContent.portfolio.heading,
    description: shopifyDevelopmentMumbaiContent.portfolio.description,
    items: shopifyDevelopmentMumbaiContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection content={shopifyDevelopmentMumbaiContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentMumbaiContent.brands.title}
        items={shopifyDevelopmentMumbaiContent.brands.items}
      />
      <TextBoxSection
        className="single-text-box-sec pb-0"
        heading={shopifyDevelopmentMumbaiContent.whyDynamicDreamz.heading}
        paragraphs={shopifyDevelopmentMumbaiContent.whyDynamicDreamz.paragraphs}
      />
      <ShopifyAppBenefitsSection
        className="benefit_box_sec pb-0"
        content={shopifyDevelopmentMumbaiContent.benefits}
      />
      <AgencyServicesSection
        cardBgClassName="bg-white"
        cardVariant="services-box"
        className="what-we-provide-sec py-20 max-[992px]:py-[50px]"
        columns={2}
        content={shopifyDevelopmentMumbaiContent.services}
        hideCta={true}
        id="services"
        showDescription={false}
      />
      <ProcessWaveSection
        className="our-process-sec inner-process-sec relative overflow-hidden py-20 max-[992px]:py-12.5 max-[767px]:py-10"
        content={shopifyDevelopmentMumbaiContent.process}
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
        ctaLabel={shopifyDevelopmentMumbaiContent.sectionCopy.portfolioCta}
        eyebrow={shopifyDevelopmentMumbaiContent.sectionCopy.portfolioEyebrow}
        headerLayout="split"
      />
      <HappyClientSection
        description={shopifyDevelopmentMumbaiContent.testimonials.description}
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
