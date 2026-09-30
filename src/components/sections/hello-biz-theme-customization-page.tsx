import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import {
  HelloBizBenefitIcon,
  HelloBizFeatureIcon,
  HelloBizServiceIcon,
} from "@/components/sections/hello-biz-theme-customization/hello-biz-icons";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { helloBizThemeCustomizationContent } from "@/content/hello-biz-theme-customization";

export function HelloBizThemeCustomizationPage() {
  const brandsContent = {
    heading: helloBizThemeCustomizationContent.brands.heading,
    slug: helloBizThemeCustomizationContent.brands.slug,
  };

  const featuresContent = {
    eyebrow: helloBizThemeCustomizationContent.features.eyebrow,
    heading: helloBizThemeCustomizationContent.features.heading,
    description: helloBizThemeCustomizationContent.features.description,
    boxes: helloBizThemeCustomizationContent.features.items.map((item) => ({
      icon: <HelloBizFeatureIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    eyebrow: helloBizThemeCustomizationContent.services.eyebrow,
    heading: helloBizThemeCustomizationContent.services.heading,
    description: helloBizThemeCustomizationContent.services.description,
    items: helloBizThemeCustomizationContent.services.items.map((item) => ({
      iconSvg: <HelloBizServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: helloBizThemeCustomizationContent.benefits.eyebrow,
    heading: helloBizThemeCustomizationContent.benefits.heading,
    description: helloBizThemeCustomizationContent.benefits.description,
    boxes: helloBizThemeCustomizationContent.benefits.items.map((item) => ({
      icon: <HelloBizBenefitIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero */}
      <ThemeHeroSection
        className="theme-customize-hero overflow-hidden bg-[#f7f4e9] pt-[91px] pb-0 max-[991px]:pt-16"
        content={helloBizThemeCustomizationContent.hero}
        descriptionClassName="mb-0 text-base font-medium leading-7 text-muted max-[1199px]:text-sm max-[1199px]:leading-6"
        imageClassName="h-auto w-full object-contain object-bottom"
        mediaClassName="image-block flex w-full items-end pt-[60px]"
        mediaColumnClassName="right-col flex w-[43.182%] items-end justify-end max-[1399px]:w-[48%] max-[1199px]:mx-auto max-[1199px]:w-1/2 max-[767px]:w-full"
        textColumnClassName="left-col flex w-[51%] flex-col items-start justify-center py-[60px] max-[1399px]:w-1/2 max-[1199px]:w-full max-[1199px]:pb-8 max-[1199px]:text-center max-[991px]:py-10"
        titleClassName="mb-2.5 inline-block font-sans text-[50px] font-bold leading-[66px] tracking-[-0.7px] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px]"
        wrapperClassName="wrapper flex flex-wrap items-center justify-between max-[1199px]:flex-col"
      />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        heading={helloBizThemeCustomizationContent.brands.heading}
        items={helloBizThemeCustomizationContent.brands.items}
      />

      {/* 3. Features of Hello Biz Theme */}
      <ThemeCustomizationServicesSection
        content={featuresContent}
        variant="yellow"
      />

      {/* 4. Our WordPress Theme Customization Services */}
      <AgencyServicesSection
        cardVariant="services-box"
        className="what-we-provide-sec only-text py-20 max-[992px]:py-[50px]"
        columns={2}
        content={servicesContent}
        headerTextColumnClassName="w-[48.3%] max-[992px]:w-full"
        headerTitleColumnClassName="w-[44%] max-[992px]:w-full"
        id="services"
      />

      {/* 5. Benefits of Hello Biz Theme Customization */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="green"
      />

      {/* 6. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection
        content={helloBizThemeCustomizationContent.whyChoose}
      />

      {/* 7. WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        columns={4}
        content={helloBizThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 8. Client Testimonials */}
      <HappyClientSection
        description={helloBizThemeCustomizationContent.testimonials.description}
        eyebrow={helloBizThemeCustomizationContent.testimonials.eyebrow}
        heading={helloBizThemeCustomizationContent.testimonials.heading}
      />

      {/* 9. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="hellobiz-faq"
        items={helloBizThemeCustomizationContent.faqs}
      />
    </div>
  );
}
