import { MagentoDevelopmentPage } from "@/components/sections/magento-development-page";
import { pageMetadata } from "@/data/seo";
import { createMagentoDevelopmentPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.magentoDevelopment;

export default function MagentoDevelopmentRoute() {
  return (
    <main data-page="magento-development" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createMagentoDevelopmentPageSchema()),
        }}
        type="application/ld+json"
      />
      <MagentoDevelopmentPage />
    </main>
  );
}
