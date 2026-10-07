import { WordPressDevelopmentInDelhiPage } from "@/components/sections/wordpress-development-in-delhi-page";
import { pageMetadata } from "@/data/seo";
import {
  createWordPressDevelopmentInDelhiPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.wordpressDevelopmentInDelhi;

export default function WordPressDevelopmentInDelhiRoute() {
  return (
    <main id="main-content" data-page="wordpress-development-in-delhi">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createWordPressDevelopmentInDelhiPageSchema()),
        }}
      />
      <WordPressDevelopmentInDelhiPage />
    </main>
  );
}
