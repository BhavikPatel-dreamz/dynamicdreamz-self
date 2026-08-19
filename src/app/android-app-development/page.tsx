import { AndroidAppDevelopmentPage } from "@/components/sections/android-app-development-page";
import { pageMetadata } from "@/data/seo";
import { createAndroidAppDevelopmentPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.androidAppDevelopment;

export default function AndroidAppDevelopmentRoute() {
  return (
    <main data-page="android-app-development" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createAndroidAppDevelopmentPageSchema()),
        }}
        type="application/ld+json"
      />
      <AndroidAppDevelopmentPage />
    </main>
  );
}
