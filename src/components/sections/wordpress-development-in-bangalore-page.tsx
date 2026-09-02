import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ProcessWaveSection } from "@/components/sections/process-wave-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { wordpressDevelopmentBangaloreContent } from "@/content/wordpress-development-in-bangalore";

export function WordPressDevelopmentInBangalorePage() {
  const brandsContent = {
    heading: wordpressDevelopmentBangaloreContent.brands.title,
    slug: "wordpress-development-in-bangalore",
  };

  const reasonsContent = {
    heading: wordpressDevelopmentBangaloreContent.reasons.heading,
    description: wordpressDevelopmentBangaloreContent.reasons.description,
    items: wordpressDevelopmentBangaloreContent.reasons.items,
  };

  const portfolioContent = {
    heading: wordpressDevelopmentBangaloreContent.portfolio.heading,
    description: wordpressDevelopmentBangaloreContent.portfolio.description,
    items: wordpressDevelopmentBangaloreContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec single-full-img relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]"
        content={wordpressDevelopmentBangaloreContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={wordpressDevelopmentBangaloreContent.brands.title}
        items={wordpressDevelopmentBangaloreContent.brands.items}
      />
      <TextBoxSection
        className="single-text-box-sec pb-0 pt-20 max-[992px]:pt-[50px]"
        heading={wordpressDevelopmentBangaloreContent.intro.heading}
        paragraphs={wordpressDevelopmentBangaloreContent.intro.paragraphs}
      />
      <ProcessWaveSection
        className="our-process-sec inner-process-sec wordpress-development-process relative overflow-hidden py-20 max-[992px]:py-12.5 max-[767px]:py-10"
        content={wordpressDevelopmentBangaloreContent.process}
      />
      <ShopifyReasonsSection content={reasonsContent} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
        columns={4}
        headerLayout="split"
        cardVariant="ourWorkRefresh"
        eyebrow={wordpressDevelopmentBangaloreContent.sectionCopy.portfolioEyebrow}
        ctaLabel={wordpressDevelopmentBangaloreContent.sectionCopy.portfolioCta}
      />
      <HappyClientSection
        className="happy-client-sec pt-0 pb-20 overflow-hidden max-[992px]:pb-[50px]"
        description={wordpressDevelopmentBangaloreContent.testimonials.description}
        heading={wordpressDevelopmentBangaloreContent.testimonials.heading}
        eyebrow={wordpressDevelopmentBangaloreContent.sectionCopy.testimonialsEyebrow}
        variant="client-stories"
        items={wordpressDevelopmentBangaloreContent.testimonials.items}
      />
      <SplitFaqSection
        className="faq-sec bg-white py-20 max-[992px]:py-[50px]"
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
