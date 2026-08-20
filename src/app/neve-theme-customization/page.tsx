import { NeveThemeCustomizationPage } from "@/components/sections/neve-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createNeveThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.neveThemeCustomization;

export default function NeveThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="neve-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createNeveThemeCustomizationPageSchema()),
        }}
      />
      <NeveThemeCustomizationPage />
    </main>
  );
}
