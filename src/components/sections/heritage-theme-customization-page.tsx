import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { heritageThemeCustomizationContent } from "@/content/heritage-theme-customization";

export function HeritageThemeCustomizationPage() {
  const brandsContent = {
    heading: heritageThemeCustomizationContent.brands.title,
    slug: "heritage-theme-customization",
  };

  const servicesContent = {
    heading: heritageThemeCustomizationContent.services.heading,
    description: heritageThemeCustomizationContent.services.description,
    items: heritageThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: heritageThemeCustomizationContent.whyChoose.eyebrow,
    heading: heritageThemeCustomizationContent.whyChoose.heading,
    description: heritageThemeCustomizationContent.whyChoose.description,
    items: heritageThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: heritageThemeCustomizationContent.portfolio.eyebrow,
    heading: heritageThemeCustomizationContent.portfolio.heading,
    description: heritageThemeCustomizationContent.portfolio.description,
    items: heritageThemeCustomizationContent.portfolio.items,
    ctaLabel: heritageThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: heritageThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection
        className="theme-customize-hero overflow-hidden bg-[#f7f4e9] pt-[91px] pb-0 max-[991px]:pt-16"
        content={heritageThemeCustomizationContent.hero}
        descriptionClassName="mb-0 text-base font-medium leading-7 text-muted max-[1199px]:text-sm max-[1199px]:leading-6"
        imageClassName="hero-img block h-auto w-full object-contain object-bottom"
        mediaClassName="image-block flex w-full items-end pt-[60px]"
        mediaColumnClassName="right-col flex w-[43.182%] self-end items-end justify-end max-[1399px]:w-[48%] max-[1199px]:mx-auto max-[1199px]:w-1/2 max-[767px]:hidden"
        textClassName="hero-content"
        textColumnClassName="left-col flex w-[51%] flex-col items-start justify-center py-[60px] max-[1399px]:w-1/2 max-[1199px]:w-full max-[1199px]:pb-8 max-[1199px]:text-center max-[991px]:py-10"
        titleClassName="mb-2.5 inline-block font-sans text-[50px] font-bold leading-[66px] tracking-[-0.7px] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px]"
        wrapperClassName="wrapper flex flex-wrap items-end justify-between max-[1199px]:flex-col max-[1199px]:items-center"
      />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={heritageThemeCustomizationContent.brands.title}
        items={heritageThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={heritageThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        bgClassName="bg-[#fafaf7]"
        className="city-page-why-choose-dynamic"
        columns={3}
        content={heritageThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        className="what-we-provide-sec pt-20 pb-0 max-[992px]:pt-[50px] max-[992px]:pb-0"
        columns={2}
        content={servicesContent}
        eyebrow={heritageThemeCustomizationContent.services.eyebrow}
        id="services"
      />
      <EvaluationFrameworkSection
        className="how-to-choose-spa-sec bg-white py-20 max-[992px]:py-[50px]"
        content={whyChooseContent}
        id="why-choose"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec pt-0 pb-20 max-[992px]:pt-0 max-[992px]:pb-[50px]"
        columns={3}
        content={portfolioContent}
        eyebrow={heritageThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        answerClassName="text-[#535353] text-base leading-7 font-medium max-[1199px]:text-sm max-[1199px]:leading-6"
        className="faq-sec"
        heading={heritageThemeCustomizationContent.faqsHeading}
        idPrefix="heritage-faq"
        items={heritageThemeCustomizationContent.faqs}
      />
    </div>
  );
}
