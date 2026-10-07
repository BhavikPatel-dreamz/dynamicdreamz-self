import { WhiteLabelWordPressPage } from "@/components/sections/white-label-wordpress-page";
import { pageMetadata } from "@/data/seo";
import {
  createWhiteLabelWordPressPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.whiteLabelWordPress;

export default function WhiteLabelWordPressDevelopmentServicesRoute() {
  return (
    <main id="main-content" data-page="white-label-wordpress">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createWhiteLabelWordPressPageSchema()),
        }}
      />
      <WhiteLabelWordPressPage />
    </main>
  );
}
