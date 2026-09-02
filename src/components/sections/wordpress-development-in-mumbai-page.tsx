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
import { IndustriesServedSection } from "@/components/sections/shopify-plus-agency/industries-served-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { wordpressDevelopmentMumbaiContent } from "@/content/wordpress-development-in-mumbai";

export function WordPressDevelopmentInMumbaiPage() {
  const brandsContent = {
    heading: wordpressDevelopmentMumbaiContent.brands.title,
    slug: "wordpress-development-in-mumbai",
  };

  const servicesContent = {
    heading: wordpressDevelopmentMumbaiContent.services.heading,
    description: wordpressDevelopmentMumbaiContent.services.description,
    items: wordpressDevelopmentMumbaiContent.services.items,
  };

  const reasonsContent = {
    heading: wordpressDevelopmentMumbaiContent.reasons.heading,
    description: wordpressDevelopmentMumbaiContent.reasons.description,
    items: wordpressDevelopmentMumbaiContent.reasons.items,
  };

  const portfolioContent = {
    heading: wordpressDevelopmentMumbaiContent.portfolio.heading,
    description: wordpressDevelopmentMumbaiContent.portfolio.description,
    items: wordpressDevelopmentMumbaiContent.portfolio.items,
  };

  const industriesContent = {
    heading: wordpressDevelopmentMumbaiContent.industries.heading,
    description: wordpressDevelopmentMumbaiContent.industries.description,
    items: wordpressDevelopmentMumbaiContent.industries.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec single-full-img relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={wordpressDevelopmentMumbaiContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={wordpressDevelopmentMumbaiContent.brands.title}
        items={wordpressDevelopmentMumbaiContent.brands.items}
      />
      <TextBoxSection
        className="single-text-box-sec pb-0 pt-20 max-[992px]:pt-[50px]"
        heading={wordpressDevelopmentMumbaiContent.intro.heading}
        paragraphs={wordpressDevelopmentMumbaiContent.intro.paragraphs}
      />
      <ShopifyAppBenefitsSection
        className="benefit_box_sec pt-20 pb-0 max-[992px]:pt-[50px]"
        content={wordpressDevelopmentMumbaiContent.benefits}
        id="why-choose-wordpress"
      />
      <AgencyServicesSection
        className="what-we-provide-sec py-20 max-[992px]:py-[50px]"
        content={servicesContent}
        cardVariant="services-box"
        headerLayout="split"
        columns={2}
        hideCta={true}
        id="services"
      />
      <ProcessWaveSection
        className="our-process-sec inner-process-sec wordpress-development-process relative overflow-hidden py-20 max-[992px]:py-12.5 max-[767px]:py-10"
        content={wordpressDevelopmentMumbaiContent.process}
      />
      <ShopifyReasonsSection content={reasonsContent} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
        columns={4}
        headerLayout="split"
        cardVariant="ourWorkRefresh"
        eyebrow={wordpressDevelopmentMumbaiContent.sectionCopy.portfolioEyebrow}
        ctaLabel={wordpressDevelopmentMumbaiContent.sectionCopy.portfolioCta}
      />
      <IndustriesServedSection
        className="industries-served-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        content={industriesContent}
      />
      <HappyClientSection
        className="happy-client-sec pt-0 pb-20 overflow-hidden max-[992px]:pb-[50px]"
        description={wordpressDevelopmentMumbaiContent.testimonials.description}
        heading={wordpressDevelopmentMumbaiContent.testimonials.heading}
        eyebrow={wordpressDevelopmentMumbaiContent.sectionCopy.testimonialsEyebrow}
        variant="client-stories"
        items={wordpressDevelopmentMumbaiContent.testimonials.items}
      />
      <SplitFaqSection
        className="faq-sec bg-white py-20 max-[992px]:py-[50px]"
        heading={wordpressDevelopmentMumbaiContent.sectionCopy.faqHeading}
        idPrefix="mumbai-wp-faq"
        items={wordpressDevelopmentMumbaiContent.faqs}
      />
      <CtaBannerSection
        ctaHref={wordpressDevelopmentMumbaiContent.ctaBanner.ctaHref}
        ctaLabel={wordpressDevelopmentMumbaiContent.ctaBanner.ctaLabel}
        heading={wordpressDevelopmentMumbaiContent.ctaBanner.heading}
      />
    </div>
  );
}
