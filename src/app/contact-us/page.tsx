import { ContactPage } from "@/components/sections/contact-page";
import { pageMetadata } from "@/data/seo";
import { createContactPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.contact;

export default function ContactUsPage() {
  return (
    <main id="main-content" data-page="contact-us">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createContactPageSchema()) }}
      />
      <ContactPage />
    </main>
  );
}
