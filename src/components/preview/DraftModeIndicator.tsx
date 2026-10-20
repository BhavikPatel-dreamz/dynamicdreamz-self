"use client";

import Link from "next/link";
import React, { useSyncExternalStore } from "react";

export interface DraftModeIndicatorProps {
  badge: string;
  separator: string;
  exitLabel: string;
  exitHref?: string;
}

const emptySubscribe = () => () => {};

function getIsIframe(): boolean {
  return typeof window !== "undefined" && window.self !== window.top;
}

function getServerIsIframe(): boolean {
  return false;
}

/**
 * Floating indicator displayed when Next.js draftMode is active.
 * Automatically suppresses itself inside the Payload Admin Live Preview iframe
 * to avoid obstructing the visual preview layout.
 */
export function DraftModeIndicator({
  badge,
  separator,
  exitLabel,
  exitHref = "/api/exit-preview",
}: DraftModeIndicatorProps) {
  const isInIframe = useSyncExternalStore(
    emptySubscribe,
    getIsIframe,
    getServerIsIframe,
  );

  if (isInIframe) {
    return null;
  }

  return (
    <aside
      aria-label="Draft mode indicator"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-white shadow-xl"
    >
      <span>{badge}</span>
      <span aria-hidden="true">{separator}</span>
      <Link
        className="underline transition-opacity hover:opacity-80 focus-visible:opacity-80"
        href={exitHref}
        prefetch={false}
      >
        {exitLabel}
      </Link>
    </aside>
  );
}
