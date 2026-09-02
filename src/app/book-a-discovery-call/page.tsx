import { BookDiscoveryCallPage } from "@/components/sections/book-a-discovery-call-page";
import { pageMetadata } from "@/data/seo";
import { createBookDiscoveryCallPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.bookDiscoveryCall;

export default function BookADiscoveryCallRoute() {
  return (
    <main data-page="book-a-discovery-call" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createBookDiscoveryCallPageSchema()),
        }}
        type="application/ld+json"
      />
      <BookDiscoveryCallPage />
    </main>
  );
}
