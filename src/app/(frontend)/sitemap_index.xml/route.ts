import { getSitemapIndexXml, xmlResponse } from "@/lib/sitemap";

export const dynamic = "force-dynamic";

export async function GET(): Promise<Response> {
  const xml = getSitemapIndexXml();
  return xmlResponse(xml);
}
