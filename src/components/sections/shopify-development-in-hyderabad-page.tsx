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
import { shopifyDevelopmentHyderabadContent } from "@/content/shopify-development-in-hyderabad";

export function ShopifyDevelopmentInHyderabadPage() {
  const brandsContent = {
    heading: shopifyDevelopmentHyderabadContent.brands.title,
    slug: "shopify-development-in-hyderabad",
  };

  const reasonsContent = {
    heading: shopifyDevelopmentHyderabadContent.reasons.heading,
    description: shopifyDevelopmentHyderabadContent.reasons.description,
    items: shopifyDevelopmentHyderabadContent.reasons.items,
  };

  const portfolioContent = {
    heading: shopifyDevelopmentHyderabadContent.portfolio.heading,
    description: shopifyDevelopmentHyderabadContent.portfolio.description,
    items: shopifyDevelopmentHyderabadContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec single-full-img relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={shopifyDevelopmentHyderabadContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentHyderabadContent.brands.title}
        items={shopifyDevelopmentHyderabadContent.brands.items}
      />
      <TextBoxSection
        className="single-text-box-sec pb-0 pt-20 max-[992px]:pt-[50px]"
        heading={shopifyDevelopmentHyderabadContent.intro.heading}
        paragraphs={shopifyDevelopmentHyderabadContent.intro.paragraphs}
      />
      <ShopifyAppBenefitsSection
        className="benefit_box_sec four-column-text-with-icon-sec pb-0 pt-20 max-[992px]:pt-[50px]"
        content={shopifyDevelopmentHyderabadContent.benefits}
        id="why-choose-shopify-hyderabad"
      />
      <AgencyServicesSection
        className="what-we-provide-sec pt-20 pb-0 max-[992px]:pt-[50px]"
        content={shopifyDevelopmentHyderabadContent.services}
        headerLayout="centered"
        hideCta={true}
        showDescription={false}
      />
      <ProcessWaveSection
        className="our-process-sec inner-process-sec shopify-development-process relative overflow-hidden py-20 max-[992px]:py-12.5 max-[767px]:py-10"
        content={shopifyDevelopmentHyderabadContent.process}
      />
      <ShopifyReasonsSection content={reasonsContent} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
        columns={4}
        headerLayout="split"
        eyebrow={shopifyDevelopmentHyderabadContent.sectionCopy.portfolioEyebrow}
        ctaLabel={shopifyDevelopmentHyderabadContent.sectionCopy.portfolioCta}
      />
      <HappyClientSection
        className="happy-client-sec pt-0 pb-20 overflow-hidden max-[992px]:pb-[50px]"
        description={shopifyDevelopmentHyderabadContent.testimonials.description}
        heading={shopifyDevelopmentHyderabadContent.testimonials.heading}
        eyebrow={shopifyDevelopmentHyderabadContent.sectionCopy.testimonialsEyebrow}
        variant="client-stories"
        items={shopifyDevelopmentHyderabadContent.testimonials.items}
      />
      <SplitFaqSection
        className="faq-sec bg-white py-20 max-[992px]:py-[50px]"
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
