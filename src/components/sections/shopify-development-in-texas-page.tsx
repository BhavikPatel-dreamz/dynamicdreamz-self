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
import { FaqSection } from "@/components/sections/faq-section";
import { shopifyDevelopmentTexasContent } from "@/content/shopify-development-in-texas";

export function ShopifyDevelopmentInTexasPage() {
  const brandsContent = {
    heading: shopifyDevelopmentTexasContent.brands.title,
    slug: "shopify-development-in-texas",
  };

  const reasonsContent = {
    heading: shopifyDevelopmentTexasContent.reasons.heading,
    description: shopifyDevelopmentTexasContent.reasons.description,
    items: shopifyDevelopmentTexasContent.reasons.items,
  };

  const portfolioContent = {
    heading: shopifyDevelopmentTexasContent.portfolio.heading,
    description: shopifyDevelopmentTexasContent.portfolio.description,
    items: shopifyDevelopmentTexasContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection content={shopifyDevelopmentTexasContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentTexasContent.brands.title}
        items={shopifyDevelopmentTexasContent.brands.items}
      />
      <TextBoxSection
        className="single-text-box-sec pb-0"
        heading={shopifyDevelopmentTexasContent.whyDynamicDreamz.heading}
        listItems={shopifyDevelopmentTexasContent.whyDynamicDreamz.listItems}
        paragraphs={shopifyDevelopmentTexasContent.whyDynamicDreamz.paragraphs}
        subheading={shopifyDevelopmentTexasContent.whyDynamicDreamz.subheading}
      />
      <ShopifyAppBenefitsSection
        className="benefit_box_sec four-column-text-with-icon-sec pb-0"
        content={shopifyDevelopmentTexasContent.benefits}
      />
      <AgencyServicesSection
        cardBgClassName="bg-white"
        cardVariant="services-box"
        className="what-we-provide-sec py-20 max-[992px]:py-[50px]"
        columns={2}
        content={shopifyDevelopmentTexasContent.services}
        hideCta={true}
        id="services"
        showDescription={true}
      />
      <ProcessWaveSection
        className="our-process-sec inner-process-sec relative overflow-hidden py-20 max-[992px]:py-12.5 max-[767px]:py-10"
        content={shopifyDevelopmentTexasContent.process}
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
        ctaLabel={shopifyDevelopmentTexasContent.sectionCopy.portfolioCta}
        eyebrow={shopifyDevelopmentTexasContent.sectionCopy.portfolioEyebrow}
        headerLayout="split"
      />
      <HappyClientSection
        description={shopifyDevelopmentTexasContent.testimonials.description}
        heading={shopifyDevelopmentTexasContent.testimonials.heading}
        items={shopifyDevelopmentTexasContent.testimonials.items}
      />
      <BookIntroCallSection
        content={shopifyDevelopmentTexasContent.bookIntroCall}
      />
      <FaqSection
        accordionIconVariant="circle-cross"
        heading={shopifyDevelopmentTexasContent.sectionCopy.faqHeading}
        idPrefix="texas-faq"
        items={shopifyDevelopmentTexasContent.faqs}
      />
      <CtaBannerSection
        ctaHref={shopifyDevelopmentTexasContent.ctaBanner.ctaHref}
        ctaLabel={shopifyDevelopmentTexasContent.ctaBanner.ctaLabel}
        heading={shopifyDevelopmentTexasContent.ctaBanner.heading}
      />
    </div>
  );
}
