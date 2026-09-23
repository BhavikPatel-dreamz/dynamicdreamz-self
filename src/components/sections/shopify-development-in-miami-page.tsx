import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { BookIntroCallSection } from "@/components/sections/book-intro-call-section";
import { CityPageCounterSection } from "@/components/sections/city-page-counter-section";
import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { shopifyDevelopmentMiamiContent } from "@/content/shopify-development-in-miami";

export function ShopifyDevelopmentInMiamiPage() {
  const brandsContent = {
    heading: shopifyDevelopmentMiamiContent.brands.title,
    slug: "shopify-development-in-miami",
  };

  const portfolioContent = {
    heading: shopifyDevelopmentMiamiContent.portfolio.heading,
    description: shopifyDevelopmentMiamiContent.portfolio.description,
    items: shopifyDevelopmentMiamiContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection content={shopifyDevelopmentMiamiContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentMiamiContent.brands.title}
        items={shopifyDevelopmentMiamiContent.brands.items}
      />
      <CityPageCounterSection
        content={shopifyDevelopmentMiamiContent.counter}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        content={shopifyDevelopmentMiamiContent.whyChoose}
        eyebrowVariant="dash"
      />
      <AgencyServicesSection
        cardBgClassName="bg-white"
        cardVariant="services-box"
        className="what-we-provide-sec py-20 max-[992px]:py-[50px]"
        columns={2}
        content={shopifyDevelopmentMiamiContent.services}
        eyebrow={shopifyDevelopmentMiamiContent.services.eyebrow}
        hideCta={true}
        id="services"
        showDescription={true}
      />
      <OurDevelopmentProcessSection
        content={shopifyDevelopmentMiamiContent.process}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        bgClassName="bg-white"
        className="city-page-why-choose-dynamic !pb-0"
        columns={3}
        content={shopifyDevelopmentMiamiContent.whyDynamicDreamz}
        eyebrowVariant="dash"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        columns={4}
        content={portfolioContent}
        ctaHref={shopifyDevelopmentMiamiContent.portfolio.ctaHref}
        ctaLabel={shopifyDevelopmentMiamiContent.sectionCopy.portfolioCta}
        eyebrow={shopifyDevelopmentMiamiContent.sectionCopy.portfolioEyebrow}
        headerLayout="split"
      />
      <HappyClientSection
        description={shopifyDevelopmentMiamiContent.testimonials.description}
        eyebrow={shopifyDevelopmentMiamiContent.sectionCopy.testimonialsEyebrow}
        heading={shopifyDevelopmentMiamiContent.testimonials.heading}
        items={shopifyDevelopmentMiamiContent.testimonials.items}
      />
      <SplitFaqSection
        answerClassName="!text-base !leading-[28px] font-medium text-[#535353] max-[1199px]:!text-sm max-[1199px]:!leading-6"
        className="faq-sec"
        heading={shopifyDevelopmentMiamiContent.sectionCopy.faqHeading}
        idPrefix="miami-faq"
        items={shopifyDevelopmentMiamiContent.faqs}
      />
      <CtaBannerSection
        ctaHref={shopifyDevelopmentMiamiContent.ctaBanner.ctaHref}
        ctaLabel={shopifyDevelopmentMiamiContent.ctaBanner.ctaLabel}
        heading={shopifyDevelopmentMiamiContent.ctaBanner.heading}
      />
      <BookIntroCallSection
        content={shopifyDevelopmentMiamiContent.bookIntroCall}
      />
    </div>
  );
}
