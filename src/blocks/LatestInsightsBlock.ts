import type { Block } from "payload";

export const LatestInsightsBlock: Block = {
  slug: "latest-insights",
  labels: {
    singular: "Latest Insights (Blog Articles)",
    plural: "Latest Insights Sections",
  },
  fields: [
    { name: "title", type: "text" },
    { name: "ctaLabel", type: "text" },
    { name: "ctaHref", type: "text" },
  ],
};
