"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { trackAttributionVisit } from "@/lib/attribution";

/**
 * Tracks entry landing page, external referrer, and UTM / click-ID attribution
 * across user navigation (including query-string updates) for conversion forms.
 */
export function AttributionTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchKey = searchParams.toString();

  useEffect(() => {
    void pathname;
    void searchKey;
    trackAttributionVisit();
  }, [pathname, searchKey]);

  return null;
}
