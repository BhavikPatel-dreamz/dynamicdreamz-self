import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ProcessWaveSection } from "@/components/sections/process-wave-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { wordpressDevelopmentDelhiContent } from "@/content/wordpress-development-in-delhi";

export function WordPressDevelopmentInDelhiPage() {
  const brandsContent = {
    heading: wordpressDevelopmentDelhiContent.brands.title,
    slug: "wordpress-development-in-delhi",
  };

  const reasonsContent = {
    heading: wordpressDevelopmentDelhiContent.reasons.heading,
    description: wordpressDevelopmentDelhiContent.reasons.description,
    items: wordpressDevelopmentDelhiContent.reasons.items,
  };

  const portfolioContent = {
    heading: wordpressDevelopmentDelhiContent.portfolio.heading,
    description: wordpressDevelopmentDelhiContent.portfolio.description,
    items: wordpressDevelopmentDelhiContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec single-full-img relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={wordpressDevelopmentDelhiContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={wordpressDevelopmentDelhiContent.brands.title}
        items={wordpressDevelopmentDelhiContent.brands.items}
      />
      <TextBoxSection
        className="single-text-box-sec pb-0 pt-20 max-[992px]:pt-[50px]"
        heading={wordpressDevelopmentDelhiContent.intro.heading}
        paragraphs={wordpressDevelopmentDelhiContent.intro.paragraphs}
      />
      <ProcessWaveSection
        className="our-process-sec inner-process-sec wordpress-development-process relative overflow-hidden py-20 max-[992px]:py-12.5 max-[767px]:py-10"
        content={wordpressDevelopmentDelhiContent.process}
      />
      <ShopifyReasonsSection content={reasonsContent} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
        columns={4}
        headerLayout="split"
        cardVariant="ourWorkRefresh"
        eyebrow={wordpressDevelopmentDelhiContent.sectionCopy.portfolioEyebrow}
        ctaLabel={wordpressDevelopmentDelhiContent.sectionCopy.portfolioCta}
      />
      <HappyClientSection
        className="happy-client-sec pt-0 pb-20 overflow-hidden max-[992px]:pb-[50px]"
        description={wordpressDevelopmentDelhiContent.testimonials.description}
        heading={wordpressDevelopmentDelhiContent.testimonials.heading}
        eyebrow={wordpressDevelopmentDelhiContent.sectionCopy.testimonialsEyebrow}
        variant="client-stories"
        items={wordpressDevelopmentDelhiContent.testimonials.items}
      />
      <SplitFaqSection
        className="faq-sec bg-white py-20 max-[992px]:py-[50px]"
        heading={wordpressDevelopmentDelhiContent.sectionCopy.faqHeading}
        idPrefix="delhi-wp-faq"
        items={wordpressDevelopmentDelhiContent.faqs}
      />
      <CtaBannerSection
        ctaHref={wordpressDevelopmentDelhiContent.ctaBanner.ctaHref}
        ctaLabel={wordpressDevelopmentDelhiContent.ctaBanner.ctaLabel}
        heading={wordpressDevelopmentDelhiContent.ctaBanner.heading}
      />
    </div>
  );
}
