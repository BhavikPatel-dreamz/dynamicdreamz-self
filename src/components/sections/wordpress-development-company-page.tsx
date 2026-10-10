import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { WordPressCustomizationIcon } from "@/components/sections/wordpress/wordpress-customization-icons";
import {
  wordpressDevelopmentCompanyBrands,
  wordpressDevelopmentCompanyFaqs,
  wordpressDevelopmentCompanyHero,
  wordpressDevelopmentCompanyPortfolio,
  wordpressDevelopmentCompanyPricing,
  wordpressDevelopmentCompanyProcess,
  wordpressDevelopmentCompanyServices,
  wordpressDevelopmentCompanyTestimonials,
  wordpressDevelopmentCompanyWhyChoose,
  wordpressDevelopmentCompanyWhyWordPress,
} from "@/content/wordpress-development-company";

export function WordPressDevelopmentCompanyPage() {
  const whyChooseContent = {
    eyebrow: wordpressDevelopmentCompanyWhyChoose.eyebrow,
    heading: wordpressDevelopmentCompanyWhyChoose.heading,
    description: wordpressDevelopmentCompanyWhyChoose.description,
    boxes: wordpressDevelopmentCompanyWhyChoose.boxes.map((box) => ({
      title: box.title,
      description: box.description,
      icon: <WordPressCustomizationIcon name={box.iconKey} />,
    })),
  };

  const whyWordPressContent = {
    eyebrow: wordpressDevelopmentCompanyWhyWordPress.eyebrow,
    heading: wordpressDevelopmentCompanyWhyWordPress.heading,
    description: wordpressDevelopmentCompanyWhyWordPress.description,
    boxes: wordpressDevelopmentCompanyWhyWordPress.boxes.map((box) => ({
      title: box.title,
      description: box.description,
      icon: <WordPressCustomizationIcon name={box.iconKey} />,
    })),
  };

  const servicesContent = {
    ...wordpressDevelopmentCompanyServices,
    items: wordpressDevelopmentCompanyServices.items.map((item) => ({
      ...item,
      iconSvg: item.iconKey ? (
        <WordPressCustomizationIcon name={item.iconKey} />
      ) : undefined,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <CityPageHeroSection content={wordpressDevelopmentCompanyHero} />
      <IndustryBrandsSection
        content={wordpressDevelopmentCompanyBrands.content}
        items={wordpressDevelopmentCompanyBrands.items}
      />
      <AgencyServicesSection
        cardVariant="services-box"
        className="what-we-provide-sec only-text pb-0 pt-20 max-[992px]:pt-[50px] max-[992px]:pb-0"
        content={servicesContent}
        headerLayout="split"
        headerTextColumnClassName="w-[48.3%] max-[992px]:w-full"
        headerTitleColumnClassName="w-[44%] max-[992px]:w-full"
        hideCta
        id="services"
        preserveBreaks
      />
      <ThemeCustomizationServicesSection
        content={whyChooseContent}
        variant="yellow"
      />
      <ThemeCustomizationServicesSection
        content={whyWordPressContent}
        variant="green"
      />
      <OurDevelopmentProcessSection
        className="our-development-process bg-transparent"
        content={wordpressDevelopmentCompanyProcess}
      />
      <PricingTableSection
        className="white_label_wp_develop_plan_section shopify-plus-engagement mb-0 bg-[#edf2ee] py-20 max-[992px]:py-[50px]"
        content={wordpressDevelopmentCompanyPricing}
        textColumnClassName="w-[48.3%] max-[992px]:w-full"
        titleColumnClassName="w-[44%] max-[992px]:w-full"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec py-20 max-[992px]:py-[60px]"
        columns={4}
        content={wordpressDevelopmentCompanyPortfolio}
        eyebrow={wordpressDevelopmentCompanyPortfolio.eyebrow}
        headerLayout="split"
        sectionId="our_work"
        textColumnClassName="w-[48.3%] max-[992px]:w-full"
        titleColumnClassName="w-[44%] max-[992px]:w-full"
        variant="liveGrid"
      />
      <HappyClientSection
        description={wordpressDevelopmentCompanyTestimonials.description}
        eyebrow={wordpressDevelopmentCompanyTestimonials.eyebrow}
        heading={wordpressDevelopmentCompanyTestimonials.heading}
        items={wordpressDevelopmentCompanyTestimonials.items}
      />
      <SplitFaqSection
        className="faq-sec"
        idPrefix="wordpress-development-company-faq"
        items={wordpressDevelopmentCompanyFaqs}
      />
    </div>
  );
}
