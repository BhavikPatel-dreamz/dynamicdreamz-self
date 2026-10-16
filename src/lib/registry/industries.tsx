import type { ServicePageEntry } from "./types";
import { IndustryLandingTemplate } from "@/components/sections/industry-landing-template";
import { pageMetadata } from "@/data/seo";
import {
  createBeautyCosmeticsPageSchema,
  createFashionPageSchema,
  createFoodBeveragesPageSchema,
  createHealthNutritionPageSchema,
  createHomeLivingPageSchema,
  createJewelleryAccessoriesPageSchema,
  createPetIndustryPageSchema,
  createSportsOutdoorsPageSchema,
} from "@/lib/schema";
import {
  beautyCosmeticsBrands,
  beautyCosmeticsBrandsConfig,
  beautyCosmeticsBrandsHeading,
  beautyCosmeticsCaseStudies,
  beautyCosmeticsChallenges,
  beautyCosmeticsCustomDev,
  beautyCosmeticsFaqEyebrow,
  beautyCosmeticsFaqHeading,
  beautyCosmeticsFaqs,
  beautyCosmeticsHero,
  beautyCosmeticsPortfolio,
  beautyCosmeticsSolutions,
  beautyCosmeticsTechnologies,
  beautyCosmeticsTestimonials,
  beautyCosmeticsWhyChoose,
} from "@/content/beauty-cosmetics";
import {
  fashionBrands,
  fashionBrandsConfig,
  fashionBrandsHeading,
  fashionCaseStudies,
  fashionChallenges,
  fashionCustomDev,
  fashionFaqEyebrow,
  fashionFaqHeading,
  fashionFaqs,
  fashionHero,
  fashionPortfolio,
  fashionSolutions,
  fashionTechnologies,
  fashionTestimonials,
  fashionWhyChoose,
} from "@/content/fashion";
import {
  foodBeveragesBrands,
  foodBeveragesBrandsConfig,
  foodBeveragesBrandsHeading,
  foodBeveragesCaseStudies,
  foodBeveragesChallenges,
  foodBeveragesCustomDev,
  foodBeveragesFaqEyebrow,
  foodBeveragesFaqHeading,
  foodBeveragesFaqs,
  foodBeveragesHero,
  foodBeveragesPortfolio,
  foodBeveragesSolutions,
  foodBeveragesTechnologies,
  foodBeveragesTestimonials,
  foodBeveragesWhyChoose,
} from "@/content/food-beverages";
import {
  healthNutritionBrands,
  healthNutritionBrandsConfig,
  healthNutritionBrandsHeading,
  healthNutritionCaseStudies,
  healthNutritionChallenges,
  healthNutritionCustomDev,
  healthNutritionFaqEyebrow,
  healthNutritionFaqHeading,
  healthNutritionFaqs,
  healthNutritionHero,
  healthNutritionPortfolio,
  healthNutritionSolutions,
  healthNutritionTechnologies,
  healthNutritionWhyChoose,
} from "@/content/health-nutrition";
import {
  homeLivingBrands,
  homeLivingBrandsConfig,
  homeLivingBrandsHeading,
  homeLivingCaseStudies,
  homeLivingChallenges,
  homeLivingCustomDev,
  homeLivingFaqEyebrow,
  homeLivingFaqHeading,
  homeLivingFaqs,
  homeLivingHero,
  homeLivingPortfolio,
  homeLivingSolutions,
  homeLivingTechnologies,
  homeLivingTestimonials,
  homeLivingWhyChoose,
} from "@/content/home-living";
import {
  jewelleryAccessoriesBrands,
  jewelleryAccessoriesBrandsConfig,
  jewelleryAccessoriesBrandsHeading,
  jewelleryAccessoriesCaseStudies,
  jewelleryAccessoriesChallenges,
  jewelleryAccessoriesCustomDev,
  jewelleryAccessoriesFaqEyebrow,
  jewelleryAccessoriesFaqHeading,
  jewelleryAccessoriesFaqs,
  jewelleryAccessoriesHero,
  jewelleryAccessoriesPortfolio,
  jewelleryAccessoriesSolutions,
  jewelleryAccessoriesTechnologies,
  jewelleryAccessoriesTestimonials,
  jewelleryAccessoriesWhyChoose,
} from "@/content/jewellery-accessories";
import {
  petIndustryBrands,
  petIndustryBrandsConfig,
  petIndustryBrandsHeading,
  petIndustryChallenges,
  petIndustryCustomDev,
  petIndustryFaqEyebrow,
  petIndustryFaqHeading,
  petIndustryFaqs,
  petIndustryHero,
  petIndustryPortfolio,
  petIndustrySolutions,
  petIndustryTechnologies,
  petIndustryTestimonials,
  petIndustryWhyChoose,
} from "@/content/pet-industry";
import {
  sportsOutdoorsBrands,
  sportsOutdoorsBrandsConfig,
  sportsOutdoorsBrandsHeading,
  sportsOutdoorsChallenges,
  sportsOutdoorsCustomDev,
  sportsOutdoorsFaqEyebrow,
  sportsOutdoorsFaqHeading,
  sportsOutdoorsFaqs,
  sportsOutdoorsHero,
  sportsOutdoorsPortfolio,
  sportsOutdoorsSolutions,
  sportsOutdoorsTechnologies,
  sportsOutdoorsTestimonials,
  sportsOutdoorsWhyChoose,
} from "@/content/sports-outdoors";

export const industriesRegistry: readonly ServicePageEntry[] = [
  {
    slug: "beauty-cosmetics",
    metadata: pageMetadata.beautyCosmetics,
    getSchema: createBeautyCosmeticsPageSchema,
    render: () => (
      <IndustryLandingTemplate
        brands={{
          config: beautyCosmeticsBrandsConfig,
          heading: beautyCosmeticsBrandsHeading,
          items: beautyCosmeticsBrands,
        }}
        caseStudies={beautyCosmeticsCaseStudies}
        challenges={beautyCosmeticsChallenges}
        customDev={beautyCosmeticsCustomDev}
        faq={{
          eyebrow: beautyCosmeticsFaqEyebrow,
          heading: beautyCosmeticsFaqHeading,
          idPrefix: "beauty-cosmetics-faq",
          items: beautyCosmeticsFaqs,
        }}
        hero={beautyCosmeticsHero}
        portfolio={beautyCosmeticsPortfolio}
        solutions={beautyCosmeticsSolutions}
        technologies={beautyCosmeticsTechnologies}
        testimonials={beautyCosmeticsTestimonials}
        whyChoose={beautyCosmeticsWhyChoose}
      />
    ),
  },
  {
    slug: "fashion",
    metadata: pageMetadata.fashion,
    getSchema: createFashionPageSchema,
    render: () => (
      <IndustryLandingTemplate
        brands={{
          config: fashionBrandsConfig,
          heading: fashionBrandsHeading,
          items: fashionBrands,
        }}
        caseStudies={fashionCaseStudies}
        challenges={fashionChallenges}
        customDev={fashionCustomDev}
        faq={{
          eyebrow: fashionFaqEyebrow,
          heading: fashionFaqHeading,
          idPrefix: "fashion-faq",
          items: fashionFaqs,
        }}
        hero={fashionHero}
        portfolio={fashionPortfolio}
        solutions={fashionSolutions}
        technologies={fashionTechnologies}
        testimonials={fashionTestimonials}
        whyChoose={fashionWhyChoose}
      />
    ),
  },
  {
    slug: "food-beverages",
    metadata: pageMetadata.foodBeverages,
    getSchema: createFoodBeveragesPageSchema,
    render: () => (
      <IndustryLandingTemplate
        brands={{
          config: foodBeveragesBrandsConfig,
          heading: foodBeveragesBrandsHeading,
          items: foodBeveragesBrands,
        }}
        caseStudies={foodBeveragesCaseStudies}
        challenges={foodBeveragesChallenges}
        customDev={foodBeveragesCustomDev}
        faq={{
          eyebrow: foodBeveragesFaqEyebrow,
          heading: foodBeveragesFaqHeading,
          idPrefix: "food-beverages-faq",
          items: foodBeveragesFaqs,
        }}
        hero={foodBeveragesHero}
        portfolio={foodBeveragesPortfolio}
        solutions={foodBeveragesSolutions}
        technologies={foodBeveragesTechnologies}
        testimonials={foodBeveragesTestimonials}
        whyChoose={foodBeveragesWhyChoose}
      />
    ),
  },
  {
    slug: "health-nutrition",
    metadata: pageMetadata.healthNutrition,
    getSchema: createHealthNutritionPageSchema,
    render: () => (
      <IndustryLandingTemplate
        brands={{
          config: healthNutritionBrandsConfig,
          heading: healthNutritionBrandsHeading,
          items: healthNutritionBrands,
        }}
        caseStudies={healthNutritionCaseStudies}
        challenges={healthNutritionChallenges}
        customDev={healthNutritionCustomDev}
        faq={{
          eyebrow: healthNutritionFaqEyebrow,
          heading: healthNutritionFaqHeading,
          idPrefix: "health-nutrition-faq",
          items: healthNutritionFaqs,
        }}
        hero={healthNutritionHero}
        portfolio={healthNutritionPortfolio}
        solutions={healthNutritionSolutions}
        technologies={healthNutritionTechnologies}
        whyChoose={healthNutritionWhyChoose}
      />
    ),
  },
  {
    slug: "home-living",
    metadata: pageMetadata.homeLiving,
    getSchema: createHomeLivingPageSchema,
    render: () => (
      <IndustryLandingTemplate
        brands={{
          config: homeLivingBrandsConfig,
          heading: homeLivingBrandsHeading,
          items: homeLivingBrands,
        }}
        caseStudies={homeLivingCaseStudies}
        challenges={homeLivingChallenges}
        customDev={homeLivingCustomDev}
        faq={{
          eyebrow: homeLivingFaqEyebrow,
          heading: homeLivingFaqHeading,
          idPrefix: "home-living-faq",
          items: homeLivingFaqs,
        }}
        hero={homeLivingHero}
        portfolio={homeLivingPortfolio}
        solutions={homeLivingSolutions}
        technologies={homeLivingTechnologies}
        testimonials={homeLivingTestimonials}
        whyChoose={homeLivingWhyChoose}
      />
    ),
  },
  {
    slug: "jewellery-accessories",
    metadata: pageMetadata.jewelleryAccessories,
    getSchema: createJewelleryAccessoriesPageSchema,
    render: () => (
      <IndustryLandingTemplate
        brands={{
          config: jewelleryAccessoriesBrandsConfig,
          heading: jewelleryAccessoriesBrandsHeading,
          items: jewelleryAccessoriesBrands,
        }}
        caseStudies={jewelleryAccessoriesCaseStudies}
        challenges={jewelleryAccessoriesChallenges}
        customDev={jewelleryAccessoriesCustomDev}
        faq={{
          eyebrow: jewelleryAccessoriesFaqEyebrow,
          heading: jewelleryAccessoriesFaqHeading,
          idPrefix: "jewellery-accessories-faq",
          items: jewelleryAccessoriesFaqs,
        }}
        hero={jewelleryAccessoriesHero}
        portfolio={jewelleryAccessoriesPortfolio}
        solutions={jewelleryAccessoriesSolutions}
        technologies={jewelleryAccessoriesTechnologies}
        testimonials={jewelleryAccessoriesTestimonials}
        whyChoose={jewelleryAccessoriesWhyChoose}
      />
    ),
  },
  {
    slug: "pet-industry",
    metadata: pageMetadata.petIndustry,
    getSchema: createPetIndustryPageSchema,
    render: () => (
      <IndustryLandingTemplate
        brands={{
          config: petIndustryBrandsConfig,
          heading: petIndustryBrandsHeading,
          items: petIndustryBrands,
        }}
        challenges={petIndustryChallenges}
        customDev={petIndustryCustomDev}
        faq={{
          eyebrow: petIndustryFaqEyebrow,
          heading: petIndustryFaqHeading,
          idPrefix: "pet-industry-faq",
          items: petIndustryFaqs,
        }}
        hero={petIndustryHero}
        portfolio={petIndustryPortfolio}
        solutions={petIndustrySolutions}
        technologies={petIndustryTechnologies}
        testimonials={petIndustryTestimonials}
        whyChoose={petIndustryWhyChoose}
      />
    ),
  },
  {
    slug: "sports-outdoors",
    metadata: pageMetadata.sportsOutdoors,
    getSchema: createSportsOutdoorsPageSchema,
    render: () => (
      <IndustryLandingTemplate
        brands={{
          config: sportsOutdoorsBrandsConfig,
          heading: sportsOutdoorsBrandsHeading,
          items: sportsOutdoorsBrands,
        }}
        challenges={sportsOutdoorsChallenges}
        customDev={sportsOutdoorsCustomDev}
        faq={{
          eyebrow: sportsOutdoorsFaqEyebrow,
          heading: sportsOutdoorsFaqHeading,
          idPrefix: "sports-outdoors-faq",
          items: sportsOutdoorsFaqs,
        }}
        hero={sportsOutdoorsHero}
        portfolio={sportsOutdoorsPortfolio}
        solutions={sportsOutdoorsSolutions}
        technologies={sportsOutdoorsTechnologies}
        testimonials={sportsOutdoorsTestimonials}
        whyChoose={sportsOutdoorsWhyChoose}
      />
    ),
  },
];
