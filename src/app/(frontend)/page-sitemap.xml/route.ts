import { getPageSitemapXml, xmlResponse } from "@/lib/sitemap";

export const dynamic = "force-dynamic";

export async function GET(): Promise<Response> {
  const xml = getPageSitemapXml();
  return xmlResponse(xml);
}
