import { HeritageThemeCustomizationPage } from "@/components/sections/heritage-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createHeritageThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.heritageThemeCustomization;

export default function HeritageThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="heritage-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createHeritageThemeCustomizationPageSchema()),
        }}
      />
      <HeritageThemeCustomizationPage />
    </main>
  );
}
