import { StudioThemeCustomizationPage } from "@/components/sections/studio-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createStudioThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.studioThemeCustomization;

export default function StudioThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="studio-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createStudioThemeCustomizationPageSchema()),
        }}
      />
      <StudioThemeCustomizationPage />
    </main>
  );
}
