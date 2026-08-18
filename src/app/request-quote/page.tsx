import { RequestQuotePage } from "@/components/sections/request-quote-page";
import { pageMetadata } from "@/data/seo";
import { createRequestQuotePageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.requestQuote;

export default function RequestQuoteRoute() {
  return (
    <main id="main-content" data-page="request-quote">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createRequestQuotePageSchema()) }}
      />
      <RequestQuotePage />
    </main>
  );
}
