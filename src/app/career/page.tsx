import { CareerPage } from "@/components/sections/career-page";
import { pageMetadata } from "@/data/seo";
import { createCareerPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.career;

export default function CareerRoute() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createCareerPageSchema()),
        }}
      />
      <CareerPage />
    </main>
  );
}
