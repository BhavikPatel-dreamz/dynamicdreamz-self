import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ProcessWaveSection } from "@/components/sections/process-wave-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ShopifyAppBenefitsSection } from "@/components/sections/shopify-mobile-app/shopify-app-benefits-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { shopifyDevelopmentPuneContent } from "@/content/shopify-development-in-pune";

export function ShopifyDevelopmentInPunePage() {
  const brandsContent = {
    heading: shopifyDevelopmentPuneContent.brands.title,
    slug: "shopify-development-in-pune",
  };

  const reasonsContent = {
    heading: shopifyDevelopmentPuneContent.reasons.heading,
    description: shopifyDevelopmentPuneContent.reasons.description,
    items: shopifyDevelopmentPuneContent.reasons.items,
  };

  const portfolioContent = {
    heading: shopifyDevelopmentPuneContent.portfolio.heading,
    description: shopifyDevelopmentPuneContent.portfolio.description,
    items: shopifyDevelopmentPuneContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec single-full-img relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={shopifyDevelopmentPuneContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentPuneContent.brands.title}
        items={shopifyDevelopmentPuneContent.brands.items}
      />
      <TextBoxSection
        className="single-text-box-sec pb-0 pt-20 max-[992px]:pt-[50px]"
        heading={shopifyDevelopmentPuneContent.intro.heading}
        paragraphs={shopifyDevelopmentPuneContent.intro.paragraphs}
      />
      <ShopifyAppBenefitsSection
        className="benefit_box_sec four-column-text-with-icon-sec pb-0 pt-20 max-[992px]:pt-[50px]"
        content={shopifyDevelopmentPuneContent.benefits}
        id="why-choose-shopify-pune"
      />
      <AgencyServicesSection
        className="what-we-provide-sec pt-20 pb-0 max-[992px]:pt-[50px]"
        content={shopifyDevelopmentPuneContent.services}
        hideCta={true}
        showDescription={false}
      />
      <ProcessWaveSection
        className="our-process-sec inner-process-sec shopify-development-process relative overflow-hidden py-20 max-[992px]:py-12.5 max-[767px]:py-10"
        content={shopifyDevelopmentPuneContent.process}
      />
      <ShopifyReasonsSection content={reasonsContent} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
        columns={4}
        headerLayout="split"
        cardVariant="ourWorkRefresh"
        eyebrow={shopifyDevelopmentPuneContent.sectionCopy.portfolioEyebrow}
        ctaLabel={shopifyDevelopmentPuneContent.sectionCopy.portfolioCta}
      />
      <HappyClientSection
        description={shopifyDevelopmentPuneContent.testimonials.description}
        heading={shopifyDevelopmentPuneContent.testimonials.heading}
        items={shopifyDevelopmentPuneContent.testimonials.items}
      />
      <SplitFaqSection
        heading={shopifyDevelopmentPuneContent.sectionCopy.faqHeading}
        idPrefix="pune-faq"
        items={shopifyDevelopmentPuneContent.faqs}
      />
      <CtaBannerSection
        ctaHref={shopifyDevelopmentPuneContent.ctaBanner.ctaHref}
        ctaLabel={shopifyDevelopmentPuneContent.ctaBanner.ctaLabel}
        heading={shopifyDevelopmentPuneContent.ctaBanner.heading}
      />
    </div>
  );
}
