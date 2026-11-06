import { getCaseStudySitemapXml, xmlResponse } from "@/lib/sitemap";

export const dynamic = "force-dynamic";

export async function GET(): Promise<Response> {
  const xml = getCaseStudySitemapXml();
  return xmlResponse(xml);
}
