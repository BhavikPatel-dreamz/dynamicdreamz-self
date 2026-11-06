import { getPostSitemapXml, xmlResponse } from "@/lib/sitemap";

export const dynamic = "force-dynamic";

export async function GET(): Promise<Response> {
  const xml = getPostSitemapXml();
  return xmlResponse(xml);
}
