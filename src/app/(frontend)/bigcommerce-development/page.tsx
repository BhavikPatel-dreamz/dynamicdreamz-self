import { BigCommerceDevelopmentPage } from "@/components/sections/bigcommerce-development-page";
import { pageMetadata } from "@/data/seo";
import { createBigCommerceDevelopmentPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.bigCommerceDevelopment;

export default function BigCommerceDevelopmentRoute() {
  return (
    <main data-page="bigcommerce-development" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createBigCommerceDevelopmentPageSchema()),
        }}
        type="application/ld+json"
      />
      <BigCommerceDevelopmentPage />
    </main>
  );
}
