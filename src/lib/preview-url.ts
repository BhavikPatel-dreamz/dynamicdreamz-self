/**
 * Relative draft URL. Payload's admin resolves this against the browser origin,
 * so production preview stays on the deployed host instead of localhost.
 */
export function previewDraftPath(path: string, slug: string): string {
  const params = new URLSearchParams({
    secret: process.env.PAYLOAD_PREVIEW_SECRET || process.env.PAYLOAD_SECRET || "",
    path,
    slug,
  });

  return `/api/draft?${params.toString()}`;
}
