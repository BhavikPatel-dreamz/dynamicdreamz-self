import { CityPageCounterSection } from "@/components/sections/city-page-counter-section";
import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { wordpressDevelopmentMumbaiContent } from "@/content/wordpress-development-in-mumbai";

export function WordPressDevelopmentInMumbaiPage() {
  const brandsContent = {
    heading: wordpressDevelopmentMumbaiContent.brands.title,
    slug: "wordpress-development-in-mumbai",
  };

  const portfolioContent = {
    eyebrow: wordpressDevelopmentMumbaiContent.portfolio.eyebrow,
    heading: wordpressDevelopmentMumbaiContent.portfolio.heading,
    description: wordpressDevelopmentMumbaiContent.portfolio.description,
    items: wordpressDevelopmentMumbaiContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection
        content={wordpressDevelopmentMumbaiContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={wordpressDevelopmentMumbaiContent.brands.title}
        items={wordpressDevelopmentMumbaiContent.brands.items}
      />
      <CityPageCounterSection
        content={wordpressDevelopmentMumbaiContent.counter}
        eyebrowVariant="dash"
      />
      <OurDevelopmentProcessSection
        content={wordpressDevelopmentMumbaiContent.process}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={wordpressDevelopmentMumbaiContent.whyDynamicDreamz}
        eyebrowVariant="dash"
        theme="white"
      />
      <PortfolioShowcaseSection
        content={portfolioContent}
        columns={4}
        headerLayout="split"
        cardVariant="ourWorkRefresh"
        eyebrow={wordpressDevelopmentMumbaiContent.portfolio.eyebrow}
        hideCta={false}
      />
      <HappyClientSection
        description={wordpressDevelopmentMumbaiContent.testimonials.description}
        heading={wordpressDevelopmentMumbaiContent.testimonials.heading}
        eyebrow={wordpressDevelopmentMumbaiContent.testimonials.eyebrow}
        variant="client-stories"
        items={wordpressDevelopmentMumbaiContent.testimonials.items}
      />
      <SplitFaqSection
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
