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
        columns={3}
        content={wordpressDevelopmentDelhiContent.whyDynamicDreamz}
        eyebrowVariant="dash"
        theme="white"
      />
      <PortfolioShowcaseSection
        content={portfolioContent}
        columns={4}
        headerLayout="split"
        cardVariant="ourWorkRefresh"
        eyebrow={wordpressDevelopmentDelhiContent.portfolio.eyebrow}
        hideCta={false}
      />
      <HappyClientSection
        description={wordpressDevelopmentDelhiContent.testimonials.description}
        heading={wordpressDevelopmentDelhiContent.testimonials.heading}
        eyebrow={wordpressDevelopmentDelhiContent.testimonials.eyebrow}
        variant="client-stories"
        items={wordpressDevelopmentDelhiContent.testimonials.items}
      />
      <SplitFaqSection
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
