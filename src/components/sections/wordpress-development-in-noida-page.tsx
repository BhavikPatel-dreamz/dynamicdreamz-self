import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ProcessWaveSection } from "@/components/sections/process-wave-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { wordpressDevelopmentNoidaContent } from "@/content/wordpress-development-in-noida";

export function WordPressDevelopmentInNoidaPage() {
  const brandsContent = {
    heading: wordpressDevelopmentNoidaContent.brands.title,
    slug: "wordpress-development-in-noida",
  };

  const reasonsContent = {
    heading: wordpressDevelopmentNoidaContent.reasons.heading,
    description: wordpressDevelopmentNoidaContent.reasons.description,
    items: wordpressDevelopmentNoidaContent.reasons.items,
  };

  const portfolioContent = {
    heading: wordpressDevelopmentNoidaContent.portfolio.heading,
    description: wordpressDevelopmentNoidaContent.portfolio.description,
    items: wordpressDevelopmentNoidaContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec single-full-img relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={wordpressDevelopmentNoidaContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={wordpressDevelopmentNoidaContent.brands.title}
        items={wordpressDevelopmentNoidaContent.brands.items}
      />
      <TextBoxSection
        className="single-text-box-sec pb-0 pt-20 max-[992px]:pt-[50px]"
        heading={wordpressDevelopmentNoidaContent.intro.heading}
        paragraphs={wordpressDevelopmentNoidaContent.intro.paragraphs}
      />
      <ProcessWaveSection
        className="our-process-sec inner-process-sec wordpress-development-process relative overflow-hidden py-20 max-[992px]:py-12.5 max-[767px]:py-10"
        content={wordpressDevelopmentNoidaContent.process}
      />
      <ShopifyReasonsSection content={reasonsContent} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
        columns={4}
        headerLayout="split"
        cardVariant="ourWorkRefresh"
        eyebrow={wordpressDevelopmentNoidaContent.sectionCopy.portfolioEyebrow}
        ctaLabel={wordpressDevelopmentNoidaContent.sectionCopy.portfolioCta}
      />
      <HappyClientSection
        className="happy-client-sec pt-0 pb-20 overflow-hidden max-[992px]:pb-[50px]"
        description={wordpressDevelopmentNoidaContent.testimonials.description}
        heading={wordpressDevelopmentNoidaContent.testimonials.heading}
        eyebrow={wordpressDevelopmentNoidaContent.sectionCopy.testimonialsEyebrow}
        variant="client-stories"
        items={wordpressDevelopmentNoidaContent.testimonials.items}
      />
      <SplitFaqSection
        className="faq-sec bg-white py-20 max-[992px]:py-[50px]"
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
