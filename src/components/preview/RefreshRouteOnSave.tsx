"use client";

import { RefreshRouteOnSave as PayloadLivePreview } from "@payloadcms/live-preview-react";
import { useRouter } from "next/navigation";
import React, { useSyncExternalStore } from "react";

export interface RefreshRouteOnSaveProps {
  apiRoute?: string;
  depth?: number;
  serverURL?: string;
}

const emptySubscribe = () => () => {};

function getClientOrigin(): string {
  return typeof window !== "undefined" ? window.location.origin : "";
}

function getServerOrigin(): string {
  return "";
}

/**
 * Production-ready server-side Live Preview bridge for Next.js App Router
 * as specified by Payload CMS (https://payloadcms.com/docs/live-preview/server).
 *
 * Listens for `window.postMessage` document events from the Payload Admin Panel
 * iframe/popup and invokes Next.js `router.refresh()` to hydrate React Server
 * Components with the latest draft content.
 */
export function RefreshRouteOnSave({
  apiRoute,
  depth,
  serverURL,
}: RefreshRouteOnSaveProps) {
  const router = useRouter();
  const clientOrigin = useSyncExternalStore(
    emptySubscribe,
    getClientOrigin,
    getServerOrigin,
  );

  const resolvedServerURL =
    serverURL ||
    process.env.NEXT_PUBLIC_SERVER_URL ||
    process.env.NEXT_PUBLIC_PAYLOAD_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    clientOrigin;

  if (!resolvedServerURL) {
    return null;
  }

  return (
    <PayloadLivePreview
      apiRoute={apiRoute}
      depth={depth}
      refresh={() => router.refresh()}
      serverURL={resolvedServerURL}
    />
  );
}
