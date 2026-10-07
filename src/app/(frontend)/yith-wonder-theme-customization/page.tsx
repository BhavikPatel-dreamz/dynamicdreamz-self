import { YithWonderThemeCustomizationPage } from "@/components/sections/yith-wonder-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import {
  createYithWonderThemeCustomizationPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.yithWonderThemeCustomization;

export default function YithWonderThemeCustomizationRoute() {
  return (
    <main data-page="yith-wonder-theme-customization" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createYithWonderThemeCustomizationPageSchema()),
        }}
        type="application/ld+json"
      />
      <YithWonderThemeCustomizationPage />
    </main>
  );
}
