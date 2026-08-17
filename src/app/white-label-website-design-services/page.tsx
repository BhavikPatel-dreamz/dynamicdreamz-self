import { WhiteLabelWebsiteDesignPage } from "@/components/sections/white-label-website-design-page";
import { pageMetadata } from "@/data/seo";
import {
  createWhiteLabelWebsiteDesignPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.whiteLabelWebsiteDesign;

export default function WhiteLabelWebsiteDesignServicesRoute() {
  return (
    <main id="main-content" data-page="white-label-website-design">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createWhiteLabelWebsiteDesignPageSchema()),
        }}
      />
      <WhiteLabelWebsiteDesignPage />
    </main>
  );
}
