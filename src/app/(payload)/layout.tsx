import configPromise from "@payload-config";
import { RootLayout, handleServerFunctions } from "@payloadcms/next/layouts";
import { getPayload } from "payload";
import type { ServerFunctionClient } from "payload";

export default async function PayloadAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const payload = await getPayload({ config: configPromise });

  const serverFunction: ServerFunctionClient = async ({ name, args }) => {
    return handleServerFunctions({
      args,
      config: configPromise,
      importMap: payload.importMap,
      name,
    });
  };

  return (
    <RootLayout
      config={configPromise}
      importMap={payload.importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  );
}
