import { InspiroThemeCustomizationPage } from "@/components/sections/inspiro-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createInspiroThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.inspiroThemeCustomization;

export default function InspiroThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="inspiro-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createInspiroThemeCustomizationPageSchema()),
        }}
      />
      <InspiroThemeCustomizationPage />
    </main>
  );
}
