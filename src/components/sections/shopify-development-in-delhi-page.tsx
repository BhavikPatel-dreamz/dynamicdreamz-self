import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ProcessWaveSection } from "@/components/sections/process-wave-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ShopifyAppBenefitsSection } from "@/components/sections/shopify-mobile-app/shopify-app-benefits-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { shopifyDevelopmentDelhiContent } from "@/content/shopify-development-in-delhi";

export function ShopifyDevelopmentInDelhiPage() {
  const brandsContent = {
    heading: shopifyDevelopmentDelhiContent.brands.title,
    slug: "shopify-development-in-delhi",
  };

  const reasonsContent = {
    heading: shopifyDevelopmentDelhiContent.reasons.heading,
    description: shopifyDevelopmentDelhiContent.reasons.description,
    items: shopifyDevelopmentDelhiContent.reasons.items,
  };

  const portfolioContent = {
    heading: shopifyDevelopmentDelhiContent.portfolio.heading,
    description: shopifyDevelopmentDelhiContent.portfolio.description,
    items: shopifyDevelopmentDelhiContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec single-full-img relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={shopifyDevelopmentDelhiContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentDelhiContent.brands.title}
        items={shopifyDevelopmentDelhiContent.brands.items}
      />
      <TextBoxSection
        className="single-text-box-sec pb-0 pt-20 max-[992px]:pt-[50px]"
        heading={shopifyDevelopmentDelhiContent.intro.heading}
        paragraphs={shopifyDevelopmentDelhiContent.intro.paragraphs}
      />
      <ShopifyAppBenefitsSection
        className="benefit_box_sec four-column-text-with-icon-sec pb-0 pt-20 max-[992px]:pt-[50px]"
        content={shopifyDevelopmentDelhiContent.benefits}
        id="why-choose-shopify-delhi"
      />
      <AgencyServicesSection
        className="what-we-provide-sec pt-20 pb-0 max-[992px]:pt-[50px]"
        content={shopifyDevelopmentDelhiContent.services}
        headerLayout="centered"
        hideCta={true}
        showDescription={false}
      />
      <ProcessWaveSection
        className="our-process-sec inner-process-sec shopify-development-process relative overflow-hidden py-20 max-[992px]:py-12.5 max-[767px]:py-10"
        content={shopifyDevelopmentDelhiContent.process}
      />
      <ShopifyReasonsSection content={reasonsContent} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
        ctaLabel={shopifyDevelopmentDelhiContent.sectionCopy.portfolioCta}
      />
      <HappyClientSection
        className="happy-client-sec pt-0 pb-20 overflow-hidden max-[992px]:pb-[50px]"
        description={shopifyDevelopmentDelhiContent.testimonials.description}
        heading={shopifyDevelopmentDelhiContent.testimonials.heading}
        items={shopifyDevelopmentDelhiContent.testimonials.items}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        heading={shopifyDevelopmentDelhiContent.sectionCopy.faqHeading}
        idPrefix="delhi-faq"
        items={shopifyDevelopmentDelhiContent.faqs}
      />
      <CtaBannerSection
        ctaHref={shopifyDevelopmentDelhiContent.ctaBanner.ctaHref}
        ctaLabel={shopifyDevelopmentDelhiContent.ctaBanner.ctaLabel}
        heading={shopifyDevelopmentDelhiContent.ctaBanner.heading}
      />
    </div>
  );
}
