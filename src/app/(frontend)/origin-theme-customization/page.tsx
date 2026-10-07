import { OriginThemeCustomizationPage } from "@/components/sections/origin-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createOriginThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.originThemeCustomization;

export default function OriginThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="origin-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createOriginThemeCustomizationPageSchema()),
        }}
      />
      <OriginThemeCustomizationPage />
    </main>
  );
}
