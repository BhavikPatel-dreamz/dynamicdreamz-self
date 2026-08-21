import { WarehouseThemeCustomizationPage } from "@/components/sections/warehouse-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createWarehouseThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.warehouseThemeCustomization;

export default function WarehouseThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="warehouse-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createWarehouseThemeCustomizationPageSchema()),
        }}
      />
      <WarehouseThemeCustomizationPage />
    </main>
  );
}
