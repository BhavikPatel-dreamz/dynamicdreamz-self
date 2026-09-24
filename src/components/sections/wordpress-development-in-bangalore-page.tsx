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
        bgClassName="bg-white"
        className="city-page-why-choose-dynamic !pb-0"
        columns={3}
        content={wordpressDevelopmentBangaloreContent.whyDynamicDreamz}
        eyebrowVariant="dash"
      />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
        columns={4}
        headerLayout="split"
        cardVariant="ourWorkRefresh"
        eyebrow={wordpressDevelopmentBangaloreContent.portfolio.eyebrow}
        ctaHref="/our-work"
        ctaLabel={wordpressDevelopmentBangaloreContent.sectionCopy.portfolioCta}
      />
      <HappyClientSection
        className="happy-client-sec pt-0 pb-20 overflow-hidden max-[992px]:pb-[50px]"
        description={wordpressDevelopmentBangaloreContent.testimonials.description}
        heading={wordpressDevelopmentBangaloreContent.testimonials.heading}
        eyebrow={wordpressDevelopmentBangaloreContent.testimonials.eyebrow}
        variant="client-stories"
        items={wordpressDevelopmentBangaloreContent.testimonials.items}
      />
      <SplitFaqSection
        className="faq-sec"
        heading={wordpressDevelopmentBangaloreContent.sectionCopy.faqHeading}
        idPrefix="bangalore-wp-faq"
        items={wordpressDevelopmentBangaloreContent.faqs}
        answerClassName="!text-sm !leading-6 font-medium text-[#535353]"
      />
      <CtaBannerSection
        ctaHref={wordpressDevelopmentBangaloreContent.ctaBanner.ctaHref}
        ctaLabel={wordpressDevelopmentBangaloreContent.ctaBanner.ctaLabel}
        heading={wordpressDevelopmentBangaloreContent.ctaBanner.heading}
      />
    </div>
  );
}
