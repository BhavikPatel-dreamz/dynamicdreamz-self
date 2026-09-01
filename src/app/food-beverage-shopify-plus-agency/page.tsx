import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { IndustryHeroSection } from "@/components/sections/industry/industry-hero-section";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ServicesCaseStudiesSection } from "@/components/sections/services-case-studies-section";
import { TwoColImageWithTextSection } from "@/components/sections/two-col-image-with-text-section";
import {
  foodBeverageBrands,
  foodBeverageCaseStudies,
  foodBeverageHero,
  foodBeverageProcess,
  foodBeverageServices,
  foodBeverageFaqs,
  foodBeverageWhyChoose,
} from "@/content/food-beverage-shopify-plus-agency";
import { pageMetadata } from "@/data/seo";
import {
  createFoodBeverageShopifyPlusAgencyPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.foodBeverageShopifyPlusAgency;

export default function FoodBeverageShopifyPlusAgencyRoute() {
  return (
    <main
      id="main-content"
      data-page="food-beverage-shopify-plus-agency"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(
            createFoodBeverageShopifyPlusAgencyPageSchema(),
          ),
        }}
      />
      <IndustryHeroSection
        variant="white"
        title={foodBeverageHero.title}
        description={foodBeverageHero.description}
        image={foodBeverageHero.image}
        showEyebrow={false}
        showCta={false}
        slug="food-beverage-shopify-plus-agency"
      />
      <IndustryBrandsSection
        content={foodBeverageBrands}
        heading={foodBeverageBrands.heading}
        items={foodBeverageBrands.items}
      />
      <TwoColImageWithTextSection
        heading={foodBeverageWhyChoose.heading}
        description={foodBeverageWhyChoose.description}
        image={foodBeverageWhyChoose.image}
      />
      <AgencyServicesSection
        content={foodBeverageServices}
        headerLayout="split"
        columns={2}
        cardVariant="services-box"
        cardBgClassName="bg-white"
        hideCta={true}
        className="what-we-provide-sec bg-[linear-gradient(97deg,#E8F9EF_28.5%,#E6FAFD_91.82%)] py-20 pb-[30px] mb-20 max-[991px]:mb-[50px] max-[992px]:py-[50px]"
      />
      <MigrationProcessSection
        content={foodBeverageProcess}
        titleAlign="center"
        className="migration-process-step-sec py-20 max-[992px]:py-[50px]"
      />
      <ServicesCaseStudiesSection
        eyebrow={foodBeverageCaseStudies.eyebrow}
        heading={foodBeverageCaseStudies.heading}
        items={foodBeverageCaseStudies.items}
      />
      <SplitFaqSection
        items={foodBeverageFaqs.items}
        idPrefix="food-beverage-faq"
        heading={foodBeverageFaqs.heading}
        className="faq-sec bg-white py-[60px] max-[767px]:py-10"
      />
    </main>
  );
}
