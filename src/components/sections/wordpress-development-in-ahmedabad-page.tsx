import { CityPageCounterSection } from "@/components/sections/city-page-counter-section";
import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { wordpressDevelopmentAhmedabadContent } from "@/content/wordpress-development-in-ahmedabad";

export function WordPressDevelopmentInAhmedabadPage() {
  const brandsContent = {
    heading: wordpressDevelopmentAhmedabadContent.brands.title,
    slug: "wordpress-development-in-ahmedabad",
  };

  const portfolioContent = {
    eyebrow: wordpressDevelopmentAhmedabadContent.portfolio.eyebrow,
    heading: wordpressDevelopmentAhmedabadContent.portfolio.heading,
    description: wordpressDevelopmentAhmedabadContent.portfolio.description,
    items: wordpressDevelopmentAhmedabadContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection
        content={wordpressDevelopmentAhmedabadContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={wordpressDevelopmentAhmedabadContent.brands.title}
        items={wordpressDevelopmentAhmedabadContent.brands.items}
      />
      <CityPageCounterSection
        content={wordpressDevelopmentAhmedabadContent.counter}
        eyebrowVariant="dash"
      />
      <OurDevelopmentProcessSection
        content={wordpressDevelopmentAhmedabadContent.process}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        bgClassName="bg-white"
        className="city-page-why-choose-dynamic !pb-0"
        columns={3}
        content={wordpressDevelopmentAhmedabadContent.whyDynamicDreamz}
        eyebrowVariant="dash"
      />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
        columns={4}
        headerLayout="split"
        cardVariant="ourWorkRefresh"
        eyebrow={wordpressDevelopmentAhmedabadContent.portfolio.eyebrow}
        hideCta={true}
      />
      <HappyClientSection
        className="happy-client-sec pt-0 pb-20 overflow-hidden max-[992px]:pb-[50px]"
        description={wordpressDevelopmentAhmedabadContent.testimonials.description}
        heading={wordpressDevelopmentAhmedabadContent.testimonials.heading}
        eyebrow={wordpressDevelopmentAhmedabadContent.testimonials.eyebrow}
        variant="client-stories"
        items={wordpressDevelopmentAhmedabadContent.testimonials.items}
      />
      <SplitFaqSection
        className="faq-sec"
        heading={wordpressDevelopmentAhmedabadContent.sectionCopy.faqHeading}
        idPrefix="ahmedabad-wp-faq"
        items={wordpressDevelopmentAhmedabadContent.faqs}
        answerClassName="!text-sm !leading-6 font-medium text-[#535353]"
      />
      <CtaBannerSection
        ctaHref={wordpressDevelopmentAhmedabadContent.ctaBanner.ctaHref}
        ctaLabel={wordpressDevelopmentAhmedabadContent.ctaBanner.ctaLabel}
        heading={wordpressDevelopmentAhmedabadContent.ctaBanner.heading}
      />
    </div>
  );
}
