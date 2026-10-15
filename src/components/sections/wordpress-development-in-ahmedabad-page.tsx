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
    <div>
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
        columns={3}
        content={wordpressDevelopmentAhmedabadContent.whyDynamicDreamz}
        eyebrowVariant="dash"
        theme="white"
      />
      <PortfolioShowcaseSection
        content={portfolioContent}
        columns={4}
        headerLayout="split"
        cardVariant="ourWorkRefresh"
        eyebrow={wordpressDevelopmentAhmedabadContent.portfolio.eyebrow}
        hideCta={true}
      />
      <HappyClientSection
        description={wordpressDevelopmentAhmedabadContent.testimonials.description}
        heading={wordpressDevelopmentAhmedabadContent.testimonials.heading}
        eyebrow={wordpressDevelopmentAhmedabadContent.testimonials.eyebrow}
        variant="client-stories"
        items={wordpressDevelopmentAhmedabadContent.testimonials.items}
      />
      <SplitFaqSection
        heading={wordpressDevelopmentAhmedabadContent.sectionCopy.faqHeading}
        idPrefix="ahmedabad-wp-faq"
        items={wordpressDevelopmentAhmedabadContent.faqs}
      />
      <CtaBannerSection
        ctaHref={wordpressDevelopmentAhmedabadContent.ctaBanner.ctaHref}
        ctaLabel={wordpressDevelopmentAhmedabadContent.ctaBanner.ctaLabel}
        heading={wordpressDevelopmentAhmedabadContent.ctaBanner.heading}
      />
    </div>
  );
}
