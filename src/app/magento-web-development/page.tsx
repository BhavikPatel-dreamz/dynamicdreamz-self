import { MagentoWebDevelopmentPage } from "@/components/sections/magento-web-development-page";
import { pageMetadata } from "@/data/seo";
import { createMagentoWebDevelopmentPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.magentoWebDevelopment;

export default function MagentoWebDevelopmentRoute() {
  return (
    <main data-page="magento-web-development" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createMagentoWebDevelopmentPageSchema()),
        }}
        type="application/ld+json"
      />
      <MagentoWebDevelopmentPage />
    </main>
  );
}
