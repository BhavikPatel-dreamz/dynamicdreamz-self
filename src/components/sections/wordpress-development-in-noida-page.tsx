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
        columns={3}
        content={wordpressDevelopmentNoidaContent.whyDynamicDreamz}
        eyebrowVariant="dash"
        theme="white"
      />
      <PortfolioShowcaseSection
        content={portfolioContent}
        columns={4}
        headerLayout="split"
        cardVariant="ourWorkRefresh"
        eyebrow={wordpressDevelopmentNoidaContent.portfolio.eyebrow}
        hideCta={false}
      />
      <HappyClientSection
        description={wordpressDevelopmentNoidaContent.testimonials.description}
        heading={wordpressDevelopmentNoidaContent.testimonials.heading}
        eyebrow={wordpressDevelopmentNoidaContent.testimonials.eyebrow}
        variant="client-stories"
        items={wordpressDevelopmentNoidaContent.testimonials.items}
      />
      <SplitFaqSection
        heading={wordpressDevelopmentNoidaContent.sectionCopy.faqHeading}
        idPrefix="noida-wp-faq"
        items={wordpressDevelopmentNoidaContent.faqs}
      />
      <CtaBannerSection
        ctaHref={wordpressDevelopmentNoidaContent.ctaBanner.ctaHref}
        ctaLabel={wordpressDevelopmentNoidaContent.ctaBanner.ctaLabel}
        heading={wordpressDevelopmentNoidaContent.ctaBanner.heading}
      />
    </div>
  );
}
