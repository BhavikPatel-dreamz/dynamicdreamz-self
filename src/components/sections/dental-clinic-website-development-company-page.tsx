import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { dentalClinicWebsiteDevelopmentCompanyContent } from "@/content/dental-clinic-website-development-company";

export function DentalClinicWebsiteDevelopmentCompanyPage() {
  const brandsContent = {
    heading: dentalClinicWebsiteDevelopmentCompanyContent.brands.title,
    slug: dentalClinicWebsiteDevelopmentCompanyContent.brands.slug,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroVideoSection
        content={dentalClinicWebsiteDevelopmentCompanyContent.hero}
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={dentalClinicWebsiteDevelopmentCompanyContent.brands.title}
        items={dentalClinicWebsiteDevelopmentCompanyContent.brands.items}
      />
      <EvaluationFrameworkSection
        content={dentalClinicWebsiteDevelopmentCompanyContent.benefits}
        id="why-choose-dental"
      />
      <ThemeCustomizationServicesSection
        content={dentalClinicWebsiteDevelopmentCompanyContent.services}
        id="dental-services"
        variant="green"
      />
      <OurDevelopmentProcessSection
        content={dentalClinicWebsiteDevelopmentCompanyContent.process}
        id="dental-process"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        columns={4}
        content={dentalClinicWebsiteDevelopmentCompanyContent.portfolio}
        headerLayout="split"
        sectionId="our_work"
        variant="liveGrid"
      />
      <HappyClientSection
        description={dentalClinicWebsiteDevelopmentCompanyContent.testimonials.description}
        eyebrow={dentalClinicWebsiteDevelopmentCompanyContent.testimonials.eyebrow}
        heading={dentalClinicWebsiteDevelopmentCompanyContent.testimonials.heading}
        items={dentalClinicWebsiteDevelopmentCompanyContent.testimonials.items}
      />
      <SplitFaqSection
        heading={dentalClinicWebsiteDevelopmentCompanyContent.sectionCopy.faqHeading}
        idPrefix="dental-clinic-faq"
        items={dentalClinicWebsiteDevelopmentCompanyContent.faqs}
        layout="split"
      />
    </div>
  );
}
