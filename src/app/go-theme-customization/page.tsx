import { GoThemeCustomizationPage } from "@/components/sections/go-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createGoThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.goThemeCustomization;

export default function GoThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="go-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createGoThemeCustomizationPageSchema()),
        }}
      />
      <GoThemeCustomizationPage />
    </main>
  );
}
