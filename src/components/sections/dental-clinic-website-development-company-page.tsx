import { FaqSection } from "@/components/sections/faq-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ProcessWaveSection } from "@/components/sections/process-wave-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ShopifyAppBenefitsSection } from "@/components/sections/shopify-mobile-app/shopify-app-benefits-section";
import { dentalClinicWebsiteDevelopmentCompanyContent } from "@/content/dental-clinic-website-development-company";

export function DentalClinicWebsiteDevelopmentCompanyPage() {
  const brandsContent = {
    heading: dentalClinicWebsiteDevelopmentCompanyContent.brands.title,
    ariaLabel: "Brands that trust Dynamic Dreamz for dental clinic website development",
    slug: "dental-clinic-website-development",
  };

  const servicesContent = {
    heading: dentalClinicWebsiteDevelopmentCompanyContent.services.heading,
    description: dentalClinicWebsiteDevelopmentCompanyContent.services.description,
    items: dentalClinicWebsiteDevelopmentCompanyContent.services.items,
  };

  const portfolioContent = {
    heading: dentalClinicWebsiteDevelopmentCompanyContent.portfolio.heading,
    description: dentalClinicWebsiteDevelopmentCompanyContent.portfolio.description,
    platformMark: {
      src: "/assets/platforms/wordpress-woocommerce-white.svg",
      width: 90,
      height: 26,
    },
    items: dentalClinicWebsiteDevelopmentCompanyContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        bodyClassName="max-w-[920px] mx-auto text-base font-normal leading-[30.4px] text-muted my-6"
        className="inner-hero-sec full-width-sec shopify-theme-customization-sec relative overflow-hidden bg-white pt-[190px] pb-20 max-[991px]:pt-[100px] max-[991px]:pb-10"
        content={dentalClinicWebsiteDevelopmentCompanyContent.hero}
        variant="centered"
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={dentalClinicWebsiteDevelopmentCompanyContent.brands.title}
        items={dentalClinicWebsiteDevelopmentCompanyContent.brands.items}
      />
      <ShopifyAppBenefitsSection
        className="benefit_box_sec pb-20 pt-20 max-[991px]:pt-[50px] max-[767px]:pb-[50px]"
        content={dentalClinicWebsiteDevelopmentCompanyContent.benefits}
        id="why-choose-dental"
      />
      <ShopifyReasonsSection
        className="shopify-customization-services-sec mb-80 bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] py-20 max-[767px]:py-[60px]"
        content={servicesContent}
        id="dental-services"
      />
      <ProcessWaveSection
        className="our-process-sec inner-process-sec shopify-development-process relative overflow-hidden py-20 pb-0 max-[991px]:py-12.5 max-[767px]:py-10"
        content={dentalClinicWebsiteDevelopmentCompanyContent.process}
      />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[991px]:py-[50px]"
        content={portfolioContent}
        ctaHref="/our-work"
        ctaLabel="View our work"
      />
      <HappyClientSection
        className="happy-client-sec pt-0 pb-20 overflow-hidden max-[991px]:pb-[50px]"
        description={dentalClinicWebsiteDevelopmentCompanyContent.testimonials.description}
        heading={dentalClinicWebsiteDevelopmentCompanyContent.testimonials.heading}
        items={dentalClinicWebsiteDevelopmentCompanyContent.testimonials.items}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[991px]:pb-[50px]"
        heading="FAQs"
        idPrefix="dental-clinic-faq"
        items={dentalClinicWebsiteDevelopmentCompanyContent.faqs}
      />
    </div>
  );
}
