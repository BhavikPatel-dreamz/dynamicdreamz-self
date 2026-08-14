import { IndustryPage } from "@/components/sections/industry/industry-page";
import { foodBeveragesIndustryPage } from "@/content/food-beverages";
import { pageMetadata } from "@/data/seo";
import { createFoodBeveragesPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.foodBeverages;

export default function FoodBeveragesRoute() {
  return (
    <main id="main-content" data-page="food-beverages">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createFoodBeveragesPageSchema()),
        }}
      />
      <IndustryPage content={foodBeveragesIndustryPage} />
    </main>
  );
}
