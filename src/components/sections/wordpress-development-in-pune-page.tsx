import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ProcessWaveSection } from "@/components/sections/process-wave-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { wordpressDevelopmentPuneContent } from "@/content/wordpress-development-in-pune";

export function WordPressDevelopmentInPunePage() {
  const brandsContent = {
    heading: wordpressDevelopmentPuneContent.brands.title,
    slug: "wordpress-development-in-pune",
  };

  const reasonsContent = {
    heading: wordpressDevelopmentPuneContent.reasons.heading,
    description: wordpressDevelopmentPuneContent.reasons.description,
    items: wordpressDevelopmentPuneContent.reasons.items,
  };

  const portfolioContent = {
    heading: wordpressDevelopmentPuneContent.portfolio.heading,
    description: wordpressDevelopmentPuneContent.portfolio.description,
    items: wordpressDevelopmentPuneContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec single-full-img relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={wordpressDevelopmentPuneContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={wordpressDevelopmentPuneContent.brands.title}
        items={wordpressDevelopmentPuneContent.brands.items}
      />
      <TextBoxSection
        className="single-text-box-sec pb-0 pt-20 max-[992px]:pt-[50px]"
        heading={wordpressDevelopmentPuneContent.intro.heading}
        paragraphs={wordpressDevelopmentPuneContent.intro.paragraphs}
      />
      <ProcessWaveSection
        className="our-process-sec inner-process-sec wordpress-development-process relative overflow-hidden py-20 max-[992px]:py-12.5 max-[767px]:py-10"
        content={wordpressDevelopmentPuneContent.process}
      />
      <ShopifyReasonsSection content={reasonsContent} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
        columns={4}
        headerLayout="split"
        cardVariant="ourWorkRefresh"
        eyebrow={wordpressDevelopmentPuneContent.sectionCopy.portfolioEyebrow}
        ctaLabel={wordpressDevelopmentPuneContent.sectionCopy.portfolioCta}
      />
      <HappyClientSection
        className="happy-client-sec pt-0 pb-20 overflow-hidden max-[992px]:pb-[50px]"
        description={wordpressDevelopmentPuneContent.testimonials.description}
        heading={wordpressDevelopmentPuneContent.testimonials.heading}
        eyebrow={wordpressDevelopmentPuneContent.sectionCopy.testimonialsEyebrow}
        variant="client-stories"
        items={wordpressDevelopmentPuneContent.testimonials.items}
      />
      <SplitFaqSection
        className="faq-sec bg-white py-20 max-[992px]:py-[50px]"
        heading={wordpressDevelopmentPuneContent.sectionCopy.faqHeading}
        idPrefix="pune-wp-faq"
        items={wordpressDevelopmentPuneContent.faqs}
      />
      <CtaBannerSection
        ctaHref={wordpressDevelopmentPuneContent.ctaBanner.ctaHref}
        ctaLabel={wordpressDevelopmentPuneContent.ctaBanner.ctaLabel}
        heading={wordpressDevelopmentPuneContent.ctaBanner.heading}
      />
    </div>
  );
}
