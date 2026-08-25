import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ProcessWaveSection } from "@/components/sections/process-wave-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ShopifyAppBenefitsSection } from "@/components/sections/shopify-mobile-app/shopify-app-benefits-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { shopifyDevelopmentChennaiContent } from "@/content/shopify-development-company-in-chennai";

export function ShopifyDevelopmentCompanyInChennaiPage() {
  const brandsContent = {
    heading: shopifyDevelopmentChennaiContent.brands.title,
    slug: "shopify-development-company-in-chennai",
  };

  const servicesContent = {
    heading: shopifyDevelopmentChennaiContent.services.heading,
    description: shopifyDevelopmentChennaiContent.services.description,
    items: shopifyDevelopmentChennaiContent.services.items,
  };

  const reasonsContent = {
    heading: shopifyDevelopmentChennaiContent.reasons.heading,
    description: shopifyDevelopmentChennaiContent.reasons.description,
    items: shopifyDevelopmentChennaiContent.reasons.items,
  };

  const portfolioContent = {
    heading: shopifyDevelopmentChennaiContent.portfolio.heading,
    description: shopifyDevelopmentChennaiContent.portfolio.description,
    items: shopifyDevelopmentChennaiContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec single-full-img relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[991px]:pt-[100px]"
        content={shopifyDevelopmentChennaiContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentChennaiContent.brands.title}
        items={shopifyDevelopmentChennaiContent.brands.items}
      />
      <TextBoxSection
        className="single-text-box-sec pb-0 pt-20 max-[991px]:pt-[50px]"
        heading={shopifyDevelopmentChennaiContent.intro.heading}
        paragraphs={shopifyDevelopmentChennaiContent.intro.paragraphs}
      />
      <ShopifyAppBenefitsSection
        className="benefit_box_sec four-column-text-with-icon-sec pb-0 pt-20 max-[991px]:pt-[50px]"
        content={shopifyDevelopmentChennaiContent.benefits}
        id="why-choose-shopify"
      />
      <ShopifyServicesSection content={servicesContent} />
      <ProcessWaveSection
        className="our-process-sec inner-process-sec shopify-development-process relative overflow-hidden py-20 max-[991px]:py-12.5 max-[767px]:py-10"
        content={shopifyDevelopmentChennaiContent.process}
      />
      <ShopifyReasonsSection content={reasonsContent} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[991px]:py-[50px]"
        content={portfolioContent}
      />
      <HappyClientSection
        className="happy-client-sec pt-0 pb-20 overflow-hidden max-[991px]:pb-[50px]"
        description={shopifyDevelopmentChennaiContent.testimonials.description}
        heading={shopifyDevelopmentChennaiContent.testimonials.heading}
        items={shopifyDevelopmentChennaiContent.testimonials.items}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[991px]:pb-[50px]"
        idPrefix="chennai-faq"
        items={shopifyDevelopmentChennaiContent.faqs}
      />
      <CtaBannerSection
        ctaHref={shopifyDevelopmentChennaiContent.ctaBanner.ctaHref}
        ctaLabel={shopifyDevelopmentChennaiContent.ctaBanner.ctaLabel}
        heading={shopifyDevelopmentChennaiContent.ctaBanner.heading}
      />
    </div>
  );
}
