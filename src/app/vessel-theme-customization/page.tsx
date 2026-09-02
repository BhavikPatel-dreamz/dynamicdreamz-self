import { VesselThemeCustomizationPage } from "@/components/sections/vessel-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import {
  createVesselThemeCustomizationPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.vesselThemeCustomization;

export default function VesselThemeCustomizationRoute() {
  return (
    <main data-page="vessel-theme-customization" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createVesselThemeCustomizationPageSchema()),
        }}
        type="application/ld+json"
      />
      <VesselThemeCustomizationPage />
    </main>
  );
}
