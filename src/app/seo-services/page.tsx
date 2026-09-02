import { SeoServicesPage } from "@/components/sections/seo-services-page";
import { pageMetadata } from "@/data/seo";
import { createSeoServicesPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.seoServices;

export default function SeoServicesRoute() {
  return (
    <main data-page="seo-services" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createSeoServicesPageSchema()),
        }}
        type="application/ld+json"
      />
      <SeoServicesPage />
    </main>
  );
}
