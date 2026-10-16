import type { Block } from "payload";

export const IntegrationsPartnersBlock: Block = {
  slug: "integrations-partners",
  labels: {
    singular: "Partners & Integrations Marquee",
    plural: "Partners & Integrations Sections",
  },
  fields: [
    { name: "title", type: "text" },
  ],
};
