import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ProcessWaveSection } from "@/components/sections/process-wave-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { wordpressDevelopmentAhmedabadContent } from "@/content/wordpress-development-in-ahmedabad";

export function WordPressDevelopmentInAhmedabadPage() {
  const brandsContent = {
    heading: wordpressDevelopmentAhmedabadContent.brands.title,
    slug: "wordpress-development-in-ahmedabad",
  };

  const reasonsContent = {
    heading: wordpressDevelopmentAhmedabadContent.reasons.heading,
    description: wordpressDevelopmentAhmedabadContent.reasons.description,
    items: wordpressDevelopmentAhmedabadContent.reasons.items,
  };

  const portfolioContent = {
    heading: wordpressDevelopmentAhmedabadContent.portfolio.heading,
    description: wordpressDevelopmentAhmedabadContent.portfolio.description,
    items: wordpressDevelopmentAhmedabadContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec single-full-img relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={wordpressDevelopmentAhmedabadContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={wordpressDevelopmentAhmedabadContent.brands.title}
        items={wordpressDevelopmentAhmedabadContent.brands.items}
      />
      <TextBoxSection
        className="single-text-box-sec pb-0 pt-20 max-[992px]:pt-[50px]"
        heading={wordpressDevelopmentAhmedabadContent.intro.heading}
        paragraphs={wordpressDevelopmentAhmedabadContent.intro.paragraphs}
      />
      <ProcessWaveSection
        className="our-process-sec inner-process-sec wordpress-development-process relative overflow-hidden py-20 max-[992px]:py-12.5 max-[767px]:py-10"
        content={wordpressDevelopmentAhmedabadContent.process}
      />
      <ShopifyReasonsSection content={reasonsContent} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
        columns={4}
        headerLayout="split"
        cardVariant="ourWorkRefresh"
        eyebrow={wordpressDevelopmentAhmedabadContent.sectionCopy.portfolioEyebrow}
        ctaLabel={wordpressDevelopmentAhmedabadContent.sectionCopy.portfolioCta}
      />
      <HappyClientSection
        className="happy-client-sec pt-0 pb-20 overflow-hidden max-[992px]:pb-[50px]"
        description={wordpressDevelopmentAhmedabadContent.testimonials.description}
        heading={wordpressDevelopmentAhmedabadContent.testimonials.heading}
        eyebrow={wordpressDevelopmentAhmedabadContent.sectionCopy.testimonialsEyebrow}
        variant="client-stories"
        items={wordpressDevelopmentAhmedabadContent.testimonials.items}
      />
      <SplitFaqSection
        className="faq-sec bg-white py-20 max-[992px]:py-[50px]"
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
