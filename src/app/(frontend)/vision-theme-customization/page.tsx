import { VisionThemeCustomizationPage } from "@/components/sections/vision-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createVisionThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.visionThemeCustomization;

export default function VisionThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="vision-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createVisionThemeCustomizationPageSchema()),
        }}
      />
      <VisionThemeCustomizationPage />
    </main>
  );
}
