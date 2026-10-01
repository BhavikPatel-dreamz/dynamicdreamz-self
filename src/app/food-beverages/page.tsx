import { FoodBeveragesPage } from "@/components/sections/food-beverages-page";
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
      <FoodBeveragesPage />
    </main>
  );
}

