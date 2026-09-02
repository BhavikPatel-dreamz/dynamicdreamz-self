import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { BookIntroCallSection } from "@/components/sections/book-intro-call-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ProcessWaveSection } from "@/components/sections/process-wave-section";
import { ShopifyAppBenefitsSection } from "@/components/sections/shopify-mobile-app/shopify-app-benefits-section";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { shopifyDevelopmentMiamiContent } from "@/content/shopify-development-in-miami";

export function ShopifyDevelopmentInMiamiPage() {
  const brandsContent = {
    heading: shopifyDevelopmentMiamiContent.brands.title,
    slug: "shopify-development-in-miami",
  };

  const reasonsContent = {
    heading: shopifyDevelopmentMiamiContent.reasons.heading,
    description: shopifyDevelopmentMiamiContent.reasons.description,
    items: shopifyDevelopmentMiamiContent.reasons.items,
  };

  const portfolioContent = {
    heading: shopifyDevelopmentMiamiContent.portfolio.heading,
    description: shopifyDevelopmentMiamiContent.portfolio.description,
    items: shopifyDevelopmentMiamiContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection content={shopifyDevelopmentMiamiContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={shopifyDevelopmentMiamiContent.brands.title}
        items={shopifyDevelopmentMiamiContent.brands.items}
      />
      <TextBoxSection
        className="single-text-box-sec pb-0"
        heading={shopifyDevelopmentMiamiContent.whyDynamicDreamz.heading}
        listItems={shopifyDevelopmentMiamiContent.whyDynamicDreamz.listItems}
        paragraphs={shopifyDevelopmentMiamiContent.whyDynamicDreamz.paragraphs}
        subheading={shopifyDevelopmentMiamiContent.whyDynamicDreamz.subheading}
      />
      <ShopifyAppBenefitsSection
        className="benefit_box_sec four-column-text-with-icon-sec pb-0"
        content={shopifyDevelopmentMiamiContent.benefits}
      />
      <AgencyServicesSection
        cardBgClassName="bg-white"
        cardVariant="services-box"
        className="what-we-provide-sec py-20 max-[992px]:py-[50px]"
        columns={2}
        content={shopifyDevelopmentMiamiContent.services}
        hideCta={true}
        id="services"
        showDescription={true}
      />
      <ProcessWaveSection
        className="our-process-sec inner-process-sec relative overflow-hidden py-20 max-[992px]:py-12.5 max-[767px]:py-10"
        content={shopifyDevelopmentMiamiContent.process}
      />
      <ShopifyReasonsSection
        carouselFullBleed={true}
        carouselItemClassName="w-[458px] shrink-0 max-[767px]:w-[calc(100vw-60px)]"
        className="shopify-customization-services-sec bg-linear-[97.18deg] from-[#e8f9ef] from-[28.5%] to-[#e6fafd] to-[91.82%] py-20 max-[992px]:py-[60px]"
        content={reasonsContent}
        layout="carousel"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        columns={4}
        content={portfolioContent}
        ctaLabel={shopifyDevelopmentMiamiContent.sectionCopy.portfolioCta}
        eyebrow={shopifyDevelopmentMiamiContent.sectionCopy.portfolioEyebrow}
        headerLayout="split"
      />
      <HappyClientSection
        description={shopifyDevelopmentMiamiContent.testimonials.description}
        heading={shopifyDevelopmentMiamiContent.testimonials.heading}
        items={shopifyDevelopmentMiamiContent.testimonials.items}
      />
      <BookIntroCallSection
        content={shopifyDevelopmentMiamiContent.bookIntroCall}
      />
      <SplitFaqSection
        heading={shopifyDevelopmentMiamiContent.sectionCopy.faqHeading}
        idPrefix="miami-faq"
        items={shopifyDevelopmentMiamiContent.faqs}
      />
      <CtaBannerSection
        ctaHref={shopifyDevelopmentMiamiContent.ctaBanner.ctaHref}
        ctaLabel={shopifyDevelopmentMiamiContent.ctaBanner.ctaLabel}
        heading={shopifyDevelopmentMiamiContent.ctaBanner.heading}
      />
    </div>
  );
}
