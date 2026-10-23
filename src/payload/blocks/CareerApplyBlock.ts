import type { Block } from "payload";

export const CareerApplyBlock: Block = {
  slug: "career-apply",
  labels: {
    singular: "Career Apply Section",
    plural: "Career Apply Sections",
  },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "phoneLabel", type: "text" },
    { name: "phoneNumber", type: "text" },
    { name: "phoneHref", type: "text" },
    { name: "emailLabel", type: "text" },
    { name: "emailAddress", type: "text" },
    { name: "emailHref", type: "text" },
    { name: "note", type: "text" },
    {
      name: "form",
      type: "relationship",
      relationTo: "forms",
      label: "Form (CMS Form Builder)",
      admin: {
        description: "Select the Career Apply Now form created in Form Builder.",
      },
    },
  ],
};
