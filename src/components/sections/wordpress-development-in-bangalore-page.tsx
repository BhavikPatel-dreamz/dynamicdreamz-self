import { CityPageCounterSection } from "@/components/sections/city-page-counter-section";
import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { wordpressDevelopmentBangaloreContent } from "@/content/wordpress-development-in-bangalore";

export function WordPressDevelopmentInBangalorePage() {
  const brandsContent = {
    heading: wordpressDevelopmentBangaloreContent.brands.title,
    slug: "wordpress-development-in-bangalore",
  };

  const portfolioContent = {
    eyebrow: wordpressDevelopmentBangaloreContent.portfolio.eyebrow,
    heading: wordpressDevelopmentBangaloreContent.portfolio.heading,
    description: wordpressDevelopmentBangaloreContent.portfolio.description,
    items: wordpressDevelopmentBangaloreContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection
        content={wordpressDevelopmentBangaloreContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={wordpressDevelopmentBangaloreContent.brands.title}
        items={wordpressDevelopmentBangaloreContent.brands.items}
      />
      <CityPageCounterSection
        content={wordpressDevelopmentBangaloreContent.counter}
        eyebrowVariant="dash"
      />
      <OurDevelopmentProcessSection
        content={wordpressDevelopmentBangaloreContent.process}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={wordpressDevelopmentBangaloreContent.whyDynamicDreamz}
        eyebrowVariant="dash"
        theme="white"
      />
      <PortfolioShowcaseSection
        content={portfolioContent}
        columns={4}
        headerLayout="split"
        cardVariant="ourWorkRefresh"
        eyebrow={wordpressDevelopmentBangaloreContent.portfolio.eyebrow}
        ctaHref="/our-work"
        ctaLabel={wordpressDevelopmentBangaloreContent.sectionCopy.portfolioCta}
      />
      <HappyClientSection
        description={wordpressDevelopmentBangaloreContent.testimonials.description}
        heading={wordpressDevelopmentBangaloreContent.testimonials.heading}
        eyebrow={wordpressDevelopmentBangaloreContent.testimonials.eyebrow}
        variant="client-stories"
        items={wordpressDevelopmentBangaloreContent.testimonials.items}
      />
      <SplitFaqSection
        heading={wordpressDevelopmentBangaloreContent.sectionCopy.faqHeading}
        idPrefix="bangalore-wp-faq"
        items={wordpressDevelopmentBangaloreContent.faqs}
      />
      <CtaBannerSection
        ctaHref={wordpressDevelopmentBangaloreContent.ctaBanner.ctaHref}
        ctaLabel={wordpressDevelopmentBangaloreContent.ctaBanner.ctaLabel}
        heading={wordpressDevelopmentBangaloreContent.ctaBanner.heading}
      />
    </div>
  );
}
