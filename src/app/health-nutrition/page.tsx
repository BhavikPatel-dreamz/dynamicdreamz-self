import { HealthNutritionPage } from "@/components/sections/health-nutrition-page";
import { pageMetadata } from "@/data/seo";
import { createHealthNutritionPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.healthNutrition;

export default function HealthNutritionRoute() {
  return (
    <main id="main-content" data-page="health-nutrition">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createHealthNutritionPageSchema()),
        }}
      />
      <HealthNutritionPage />
    </main>
  );
}
