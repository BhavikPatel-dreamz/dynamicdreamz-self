import { type NextRequest, NextResponse } from "next/server";
import { indexNowApiCopy } from "@/content/common";
import { submitToIndexNow } from "@/lib/indexnow";

export async function POST(req: NextRequest) {
  const secret =
    req.headers.get("x-indexnow-secret") ||
    req.headers.get("x-revalidate-secret") ||
    req.nextUrl.searchParams.get("secret");

  if (
    secret !== process.env.PAYLOAD_SECRET &&
    secret !== process.env.PAYLOAD_PREVIEW_SECRET &&
    secret !== process.env.INDEXNOW_SECRET
  ) {
    return NextResponse.json(
      { message: indexNowApiCopy.unauthorized },
      { status: 401 },
    );
  }

  const body = await req.json().catch(() => ({}));
  const rawUrls = body.urls || body.url || body.urlList;

  if (!rawUrls) {
    return NextResponse.json(
      { message: indexNowApiCopy.missingUrls },
      { status: 400 },
    );
  }

  const result = await submitToIndexNow(rawUrls);

  return NextResponse.json(result, {
    status: result.success ? 200 : (result.status ?? 500),
  });
}
