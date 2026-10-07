import { AiServicesPage } from "@/components/sections/ai-services-page";
import { pageMetadata } from "@/data/seo";
import {
  createAiServicesPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.aiServices;

export default function AiServicesRoute() {
  return (
    <main data-page="ai-services" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createAiServicesPageSchema()),
        }}
        type="application/ld+json"
      />
      <AiServicesPage />
    </main>
  );
}
