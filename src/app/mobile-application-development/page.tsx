import { MobileApplicationDevelopmentPage } from "@/components/sections/mobile-application-development-page";
import { pageMetadata } from "@/data/seo";
import {
  createMobileApplicationDevelopmentPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.mobileApplicationDevelopment;

export default function MobileApplicationDevelopmentRoute() {
  return (
    <main data-page="mobile-application-development" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createMobileApplicationDevelopmentPageSchema()),
        }}
        type="application/ld+json"
      />
      <MobileApplicationDevelopmentPage />
    </main>
  );
}
