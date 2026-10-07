import { PublisherThemeCustomizationPage } from "@/components/sections/publisher-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createPublisherThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.publisherThemeCustomization;

export default function PublisherThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="publisher-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createPublisherThemeCustomizationPageSchema()),
        }}
      />
      <PublisherThemeCustomizationPage />
    </main>
  );
}
