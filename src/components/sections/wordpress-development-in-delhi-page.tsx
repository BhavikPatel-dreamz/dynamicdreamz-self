import { CityPageCounterSection } from "@/components/sections/city-page-counter-section";
import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { wordpressDevelopmentDelhiContent } from "@/content/wordpress-development-in-delhi";

export function WordPressDevelopmentInDelhiPage() {
  const brandsContent = {
    heading: wordpressDevelopmentDelhiContent.brands.title,
    slug: "wordpress-development-in-delhi",
  };

  const portfolioContent = {
    eyebrow: wordpressDevelopmentDelhiContent.portfolio.eyebrow,
    heading: wordpressDevelopmentDelhiContent.portfolio.heading,
    description: wordpressDevelopmentDelhiContent.portfolio.description,
    items: wordpressDevelopmentDelhiContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection
        content={wordpressDevelopmentDelhiContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={wordpressDevelopmentDelhiContent.brands.title}
        items={wordpressDevelopmentDelhiContent.brands.items}
      />
      <CityPageCounterSection
        content={wordpressDevelopmentDelhiContent.counter}
        eyebrowVariant="dash"
      />
      <OurDevelopmentProcessSection
        content={wordpressDevelopmentDelhiContent.process}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        bgClassName="bg-white"
        className="city-page-why-choose-dynamic !pb-0"
        columns={3}
        content={wordpressDevelopmentDelhiContent.whyDynamicDreamz}
        eyebrowVariant="dash"
      />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
        columns={4}
        headerLayout="split"
        cardVariant="ourWorkRefresh"
        eyebrow={wordpressDevelopmentDelhiContent.portfolio.eyebrow}
        hideCta={false}
      />
      <HappyClientSection
        className="happy-client-sec pt-0 pb-20 overflow-hidden max-[992px]:pb-[50px]"
        description={wordpressDevelopmentDelhiContent.testimonials.description}
        heading={wordpressDevelopmentDelhiContent.testimonials.heading}
        eyebrow={wordpressDevelopmentDelhiContent.testimonials.eyebrow}
        variant="client-stories"
        items={wordpressDevelopmentDelhiContent.testimonials.items}
      />
      <SplitFaqSection
        className="faq-sec"
        heading={wordpressDevelopmentDelhiContent.sectionCopy.faqHeading}
        idPrefix="delhi-wp-faq"
        items={wordpressDevelopmentDelhiContent.faqs}
        answerClassName="!text-sm !leading-6 font-medium text-[#535353]"
      />
      <CtaBannerSection
        ctaHref={wordpressDevelopmentDelhiContent.ctaBanner.ctaHref}
        ctaLabel={wordpressDevelopmentDelhiContent.ctaBanner.ctaLabel}
        heading={wordpressDevelopmentDelhiContent.ctaBanner.heading}
      />
    </div>
  );
}
