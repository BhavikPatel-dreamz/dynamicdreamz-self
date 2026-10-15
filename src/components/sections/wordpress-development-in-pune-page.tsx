import { CityPageCounterSection } from "@/components/sections/city-page-counter-section";
import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { wordpressDevelopmentPuneContent } from "@/content/wordpress-development-in-pune";

export function WordPressDevelopmentInPunePage() {
  const brandsContent = {
    heading: wordpressDevelopmentPuneContent.brands.title,
    slug: "wordpress-development-in-pune",
  };

  const portfolioContent = {
    eyebrow: wordpressDevelopmentPuneContent.portfolio.eyebrow,
    heading: wordpressDevelopmentPuneContent.portfolio.heading,
    description: wordpressDevelopmentPuneContent.portfolio.description,
    items: wordpressDevelopmentPuneContent.portfolio.items,
  };

  return (
    <div>
      <CityPageHeroSection
        content={wordpressDevelopmentPuneContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={wordpressDevelopmentPuneContent.brands.title}
        items={wordpressDevelopmentPuneContent.brands.items}
      />
      <CityPageCounterSection
        content={wordpressDevelopmentPuneContent.counter}
        eyebrowVariant="dash"
      />
      <OurDevelopmentProcessSection
        content={wordpressDevelopmentPuneContent.process}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={wordpressDevelopmentPuneContent.whyDynamicDreamz}
        eyebrowVariant="dash"
        theme="white"
      />
      <PortfolioShowcaseSection
        content={portfolioContent}
        columns={4}
        headerLayout="split"
        cardVariant="ourWorkRefresh"
        eyebrow={wordpressDevelopmentPuneContent.portfolio.eyebrow}
        ctaHref="/our-work"
        ctaLabel={wordpressDevelopmentPuneContent.sectionCopy.portfolioCta}
      />
      <HappyClientSection
        description={wordpressDevelopmentPuneContent.testimonials.description}
        heading={wordpressDevelopmentPuneContent.testimonials.heading}
        eyebrow={wordpressDevelopmentPuneContent.testimonials.eyebrow}
        variant="client-stories"
        items={wordpressDevelopmentPuneContent.testimonials.items}
      />
      <SplitFaqSection
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
