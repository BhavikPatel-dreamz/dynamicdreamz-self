import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import {
  InspiroBenefitIcon,
  InspiroFeatureIcon,
  InspiroServiceIcon,
} from "@/components/sections/inspiro-theme-customization/inspiro-icons";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { inspiroThemeCustomizationContent } from "@/content/inspiro-theme-customization";

export function InspiroThemeCustomizationPage() {
  const brandsContent = {
    heading: inspiroThemeCustomizationContent.brands.heading,
    slug: inspiroThemeCustomizationContent.brands.slug,
  };

  const featuresContent = {
    eyebrow: inspiroThemeCustomizationContent.features.eyebrow,
    heading: inspiroThemeCustomizationContent.features.heading,
    description: inspiroThemeCustomizationContent.features.description,
    boxes: inspiroThemeCustomizationContent.features.items.map((item) => ({
      icon: <InspiroFeatureIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    heading: inspiroThemeCustomizationContent.services.heading,
    description: inspiroThemeCustomizationContent.services.description,
    items: inspiroThemeCustomizationContent.services.items.map((item) => ({
      iconSvg: <InspiroServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: inspiroThemeCustomizationContent.benefits.eyebrow,
    heading: inspiroThemeCustomizationContent.benefits.heading,
    description: inspiroThemeCustomizationContent.benefits.description,
    boxes: inspiroThemeCustomizationContent.benefits.items.map((item) => ({
      icon: <InspiroBenefitIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero */}
      <ThemeHeroSection
        className="theme-customize-hero overflow-hidden bg-[#f7f4e9] pt-[91px] pb-0 max-[991px]:pt-16"
        content={inspiroThemeCustomizationContent.hero}
        descriptionClassName="mb-0 text-base font-medium leading-7 text-muted max-[1199px]:text-sm max-[1199px]:leading-6"
        imageClassName="block h-auto w-full object-contain object-bottom"
        mediaClassName="image-block flex w-full items-end pt-[60px]"
        mediaColumnClassName="right-col flex w-[43.182%] self-end items-end justify-end max-[1399px]:w-[48%] max-[1199px]:mx-auto max-[1199px]:w-1/2 max-[767px]:w-full"
        textColumnClassName="left-col flex w-[51%] flex-col items-start justify-center py-[60px] max-[1399px]:w-1/2 max-[1199px]:w-full max-[1199px]:pb-8 max-[1199px]:text-center max-[991px]:py-10"
        titleClassName="mb-2.5 inline-block font-sans text-[50px] font-bold leading-[66px] tracking-[-0.7px] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px]"
        wrapperClassName="wrapper flex flex-wrap items-end justify-between max-[1199px]:flex-col max-[1199px]:items-center"
      />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        density="flexible"
        heading={inspiroThemeCustomizationContent.brands.heading}
        items={inspiroThemeCustomizationContent.brands.items}
      />

      {/* 3. Features of Inspiro Theme */}
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
        preserveBreaks
      />

      {/* 5. Benefits of Inspiro Theme Customization */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="green"
      />

      {/* 6. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection
        content={inspiroThemeCustomizationContent.whyChoose}
      />

      {/* 7. WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        columns={4}
        content={inspiroThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 8. Client Testimonials */}
      <HappyClientSection
        description={inspiroThemeCustomizationContent.testimonials.description}
        eyebrow={inspiroThemeCustomizationContent.testimonials.eyebrow}
        heading={inspiroThemeCustomizationContent.testimonials.heading}
      />

      {/* 9. Frequently Asked Questions */}
      <SplitFaqSection
        className="faq-sec"
        idPrefix="inspiro-theme-faq"
        items={inspiroThemeCustomizationContent.faqs}
      />
    </div>
  );
}
