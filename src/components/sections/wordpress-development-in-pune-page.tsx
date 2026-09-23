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
    <div className="font-sans leading-[30.4px]">
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
        bgClassName="bg-white"
        className="city-page-why-choose-dynamic !pb-0"
        columns={3}
        content={wordpressDevelopmentPuneContent.whyDynamicDreamz}
        eyebrowVariant="dash"
      />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
        columns={4}
        headerLayout="split"
        cardVariant="ourWorkRefresh"
        eyebrow={wordpressDevelopmentPuneContent.portfolio.eyebrow}
        ctaHref="/our-work"
        ctaLabel={wordpressDevelopmentPuneContent.sectionCopy.portfolioCta}
      />
      <HappyClientSection
        className="happy-client-sec pt-0 pb-20 overflow-hidden max-[992px]:pb-[50px]"
        description={wordpressDevelopmentPuneContent.testimonials.description}
        heading={wordpressDevelopmentPuneContent.testimonials.heading}
        eyebrow={wordpressDevelopmentPuneContent.testimonials.eyebrow}
        variant="client-stories"
        items={wordpressDevelopmentPuneContent.testimonials.items}
      />
      <SplitFaqSection
        className="faq-sec"
        heading={wordpressDevelopmentPuneContent.sectionCopy.faqHeading}
        idPrefix="pune-wp-faq"
        items={wordpressDevelopmentPuneContent.faqs}
        answerClassName="!text-sm !leading-6 font-medium text-[#535353]"
      />
      <CtaBannerSection
        ctaHref={wordpressDevelopmentPuneContent.ctaBanner.ctaHref}
        ctaLabel={wordpressDevelopmentPuneContent.ctaBanner.ctaLabel}
        heading={wordpressDevelopmentPuneContent.ctaBanner.heading}
      />
    </div>
  );
}
