import { ImpactThemeCustomizationPage } from "@/components/sections/impact-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createImpactThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.impactThemeCustomization;

export default function ImpactThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="impact-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createImpactThemeCustomizationPageSchema()),
        }}
      />
      <ImpactThemeCustomizationPage />
    </main>
  );
}
