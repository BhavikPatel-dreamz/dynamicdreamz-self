import { draftMode } from "next/headers";
import Link from "next/link";
import { BlockRenderer, type CmsSectionBlock } from "@/components/blocks/block-renderer";
import { UpgradeToShopifyPlusPage } from "@/components/sections/upgrade-to-shopify-plus-page";
import { draftPreviewCopy } from "@/content/common";
import { pageMetadata } from "@/data/seo";
import { getPayloadPageBySlug } from "@/lib/payload";
import {
  createUpgradeToShopifyPlusPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.upgradeToShopifyPlus;

export default async function UpgradeToShopifyPlusRoute() {
  const draft = await draftMode();
  const rawPage = await getPayloadPageBySlug("upgrade-to-shopify-plus", { preview: draft.isEnabled });
  const pageSections = (rawPage?.sections as readonly CmsSectionBlock[] | undefined) || [];

  return (
    <main id="main-content" data-page="upgrade-to-shopify-plus">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createUpgradeToShopifyPlusPageSchema()),
        }}
      />
      {draft.isEnabled ? (
        <aside
          aria-label="Draft mode indicator"
          className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-white shadow-xl"
        >
          <span>{draftPreviewCopy.badge}</span>
          <span aria-hidden="true">{draftPreviewCopy.separator}</span>
          <Link
            className="underline transition-opacity hover:opacity-80 focus-visible:opacity-80"
            href="/api/exit-preview"
            prefetch={false}
          >
            {draftPreviewCopy.exit}
          </Link>
        </aside>
      ) : null}
      {pageSections.length > 0 ? (
        <BlockRenderer sections={pageSections} />
      ) : (
        <UpgradeToShopifyPlusPage />
      )}
    </main>
  );
}
