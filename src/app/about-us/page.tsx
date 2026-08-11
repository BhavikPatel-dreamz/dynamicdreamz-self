import { AboutPage } from "@/components/sections/about-page";
import { pageMetadata } from "@/data/seo";
import { createAboutPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.about;

export default function AboutUsPage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createAboutPageSchema()) }}
      />
      <AboutPage />
    </main>
  );
}
