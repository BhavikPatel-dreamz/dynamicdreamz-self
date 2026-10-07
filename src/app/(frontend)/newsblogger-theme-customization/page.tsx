import { NewsbloggerThemeCustomizationPage } from "@/components/sections/newsblogger-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createNewsbloggerThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.newsbloggerThemeCustomization;

export default function NewsbloggerThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="newsblogger-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createNewsbloggerThemeCustomizationPageSchema()),
        }}
      />
      <NewsbloggerThemeCustomizationPage />
    </main>
  );
}
