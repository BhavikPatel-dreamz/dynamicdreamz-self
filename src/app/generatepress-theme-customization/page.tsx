import { GeneratepressThemeCustomizationPage } from "@/components/sections/generatepress-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createGeneratepressThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.generatepressThemeCustomization;

export default function GeneratepressThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="generatepress-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createGeneratepressThemeCustomizationPageSchema()),
        }}
      />
      <GeneratepressThemeCustomizationPage />
    </main>
  );
}
