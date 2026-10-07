import { HomePage } from "@/components/sections/home-page";
import { pageMetadata } from "@/data/seo";
import { createHomePageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.home;

export default function Home() {
  return (
    <main id="main-content" data-page="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createHomePageSchema()) }}
      />
      <HomePage />
    </main>
  );
}
