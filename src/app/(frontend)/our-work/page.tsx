import { OurWorkPage } from "@/components/sections/our-work-page";
import { pageMetadata } from "@/data/seo";
import { createOurWorkPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.ourWork;

export default function OurWorkRoute() {
  return (
    <main id="main-content" data-page="our-work">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createOurWorkPageSchema()),
        }}
      />
      <OurWorkPage />
    </main>
  );
}
