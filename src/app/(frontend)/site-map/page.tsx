import { SiteMapPage } from "@/components/sections/site-map-page";
import { pageMetadata } from "@/data/seo";
import { createSiteMapPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.siteMap;

export default function SiteMapRoute() {
  return (
    <main data-page="site-map" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createSiteMapPageSchema()),
        }}
        type="application/ld+json"
      />
      <SiteMapPage />
    </main>
  );
}
