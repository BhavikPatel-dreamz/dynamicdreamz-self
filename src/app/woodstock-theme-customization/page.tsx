import { WoodstockThemeCustomizationPage } from "@/components/sections/woodstock-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createWoodstockThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.woodstockThemeCustomization;

export default function WoodstockThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="woodstock-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createWoodstockThemeCustomizationPageSchema()),
        }}
      />
      <WoodstockThemeCustomizationPage />
    </main>
  );
}
