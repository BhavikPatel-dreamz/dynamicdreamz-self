import configPromise from "@payload-config";
import { RootPage, generatePageMetadata } from "@payloadcms/next/views";
import { getPayload } from "payload";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  return generatePageMetadata({ config: configPromise, params, searchParams });
}

export default async function AdminPage({
  params,
  searchParams,
}: {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  const payload = await getPayload({ config: configPromise });

  return (
    <RootPage
      config={configPromise}
      importMap={payload.importMap}
      params={params}
      searchParams={searchParams}
    />
  );
}
