import { WordPressThemeCustomizationPage } from "@/components/sections/wordpress-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import {
  createWordPressThemeCustomizationPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.wordPressThemeCustomization;

export default function WordPressThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="wordpress-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createWordPressThemeCustomizationPageSchema()),
        }}
      />
      <WordPressThemeCustomizationPage />
    </main>
  );
}
