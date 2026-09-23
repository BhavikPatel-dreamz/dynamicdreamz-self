import { CityPageCounterSection } from "@/components/sections/city-page-counter-section";
import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { wordpressDevelopmentNoidaContent } from "@/content/wordpress-development-in-noida";

export function WordPressDevelopmentInNoidaPage() {
  const brandsContent = {
    heading: wordpressDevelopmentNoidaContent.brands.title,
    slug: "wordpress-development-in-noida",
  };

  const portfolioContent = {
    eyebrow: wordpressDevelopmentNoidaContent.portfolio.eyebrow,
    heading: wordpressDevelopmentNoidaContent.portfolio.heading,
    description: wordpressDevelopmentNoidaContent.portfolio.description,
    items: wordpressDevelopmentNoidaContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection
        content={wordpressDevelopmentNoidaContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={wordpressDevelopmentNoidaContent.brands.title}
        items={wordpressDevelopmentNoidaContent.brands.items}
      />
      <CityPageCounterSection
        content={wordpressDevelopmentNoidaContent.counter}
        eyebrowVariant="dash"
      />
      <OurDevelopmentProcessSection
        content={wordpressDevelopmentNoidaContent.process}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        bgClassName="bg-white"
        className="city-page-why-choose-dynamic !pb-0"
        columns={3}
        content={wordpressDevelopmentNoidaContent.whyDynamicDreamz}
        eyebrowVariant="dash"
      />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
        columns={4}
        headerLayout="split"
        cardVariant="ourWorkRefresh"
        eyebrow={wordpressDevelopmentNoidaContent.portfolio.eyebrow}
        hideCta={false}
      />
      <HappyClientSection
        className="happy-client-sec pt-0 pb-20 overflow-hidden max-[992px]:pb-[50px]"
        description={wordpressDevelopmentNoidaContent.testimonials.description}
        heading={wordpressDevelopmentNoidaContent.testimonials.heading}
        eyebrow={wordpressDevelopmentNoidaContent.testimonials.eyebrow}
        variant="client-stories"
        items={wordpressDevelopmentNoidaContent.testimonials.items}
      />
      <SplitFaqSection
        className="faq-sec"
        heading={wordpressDevelopmentNoidaContent.sectionCopy.faqHeading}
        idPrefix="noida-wp-faq"
        items={wordpressDevelopmentNoidaContent.faqs}
        answerClassName="!text-sm !leading-6 font-medium text-[#535353]"
      />
      <CtaBannerSection
        ctaHref={wordpressDevelopmentNoidaContent.ctaBanner.ctaHref}
        ctaLabel={wordpressDevelopmentNoidaContent.ctaBanner.ctaLabel}
        heading={wordpressDevelopmentNoidaContent.ctaBanner.heading}
      />
    </div>
  );
}
