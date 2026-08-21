import { PipelineThemeCustomizationPage } from "@/components/sections/pipeline-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createPipelineThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.pipelineThemeCustomization;

export default function PipelineThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="pipeline-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createPipelineThemeCustomizationPageSchema()),
        }}
      />
      <PipelineThemeCustomizationPage />
    </main>
  );
}
