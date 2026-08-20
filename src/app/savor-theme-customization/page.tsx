import { SavorThemeCustomizationPage } from "@/components/sections/savor-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createSavorThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.savorThemeCustomization;

export default function SavorThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="savor-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createSavorThemeCustomizationPageSchema()),
        }}
      />
      <SavorThemeCustomizationPage />
    </main>
  );
}
