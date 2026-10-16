import type { Metadata } from "next";
import type { ReactNode } from "react";

export type ServicePageEntry = {
  slug: string;
  metadata: Metadata;
  getSchema: () => object;
  render: () => ReactNode;
};
