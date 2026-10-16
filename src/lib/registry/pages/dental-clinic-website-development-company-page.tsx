import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { PortfolioShowcaseSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { OurDevelopmentProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { ServiceHeroVideoSection } from "@/components/blocks/ServiceHeroBlock";
import { EvaluationFrameworkSection } from "@/components/blocks/WhyChooseUsBlock";
import { ThemeCustomizationServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { dentalClinicWebsiteDevelopmentCompanyContent } from "@/content/dental-clinic-website-development-company";

export function DentalClinicWebsiteDevelopmentCompanyPage() {
  const brandsContent = {
    heading: dentalClinicWebsiteDevelopmentCompanyContent.brands.title,
    slug: dentalClinicWebsiteDevelopmentCompanyContent.brands.slug,
  };

  return (
    <div>
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
      />
    </div>
  );
}
