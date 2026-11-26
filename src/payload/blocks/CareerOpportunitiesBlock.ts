import type { Block } from "payload";

export const CareerOpportunitiesBlock: Block = {
  slug: "career-opportunities",
  labels: {
    singular: "Career Opportunities & Job Openings",
    plural: "Career Opportunities Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow Text",
    },
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Current Opportunities",
      label: "Heading / Title",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "locations",
      type: "array",
      dbName: "co_locs",
      label: "Office Filter Locations",
      fields: [
        {
          name: "slug",
          type: "select",
          required: true,
          options: [
            { label: "Surat", value: "surat" },
            { label: "Ahmedabad", value: "ahmedabad" },
          ],
        },
        { name: "label", type: "text", required: true, label: "Display Label" },
      ],
    },
    {
      name: "jobs",
      type: "array",
      dbName: "co_jobs",
      label: "Job Openings",
      fields: [
        { name: "slug", type: "text", required: true, label: "Job Slug" },
        { name: "title", type: "text", required: true, label: "Job Title" },
        { name: "applicationTitle", type: "text", required: true, label: "Application Form Position Title" },
        { name: "experience", type: "text", required: true, label: "Experience Required" },
        { name: "jobType", type: "text", required: true, label: "Job Type (e.g. Full time)" },
        { name: "postedOn", type: "text", required: true, label: "Posted Display Date" },
        { name: "postedDate", type: "text", required: true, label: "ISO Posted Date (YYYY-MM-DD)" },
        { name: "positions", type: "number", required: true, defaultValue: 1, label: "Open Positions Count" },
        {
          name: "locations",
          type: "array",
          dbName: "co_jlocs",
          label: "Available Locations",
          fields: [{ name: "text", type: "text", required: true }],
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Job Icon",
        },
        {
          name: "iconSrc",
          type: "text",
          label: "Static Icon Fallback Path",
        },
        { name: "iconAlt", type: "text", label: "Icon Alt Text" },
        { name: "summary", type: "textarea", required: true, label: "Role Summary (JSON-LD)" },
        { name: "jobDescription", type: "text", required: true, label: "Job Description PDF Path" },
      ],
    },
  ],
};
