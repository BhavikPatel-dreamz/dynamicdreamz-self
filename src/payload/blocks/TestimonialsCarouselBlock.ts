import type { Block } from "payload";

export const TestimonialsCarouselBlock: Block = {
  slug: "testimonials-carousel",
  labels: {
    singular: "Testimonials Carousel",
    plural: "Testimonials Carousel Sections",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow Text",
    },
    {
      name: "heading",
      type: "text",
      defaultValue: "Words from Our Happy Clients",
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "variant",
      type: "select",
      defaultValue: "classic",
      options: [
        { label: "Video Testimonials Carousel (Default)", value: "classic" },
        { label: "Client Stories (White Background)", value: "client-stories" },
        { label: "Home Testimonials (Slider)", value: "home" },
      ],
    },
    {
      name: "hasTopPadding",
      type: "checkbox",
      defaultValue: false,
      label: "Add Top Padding",
    },
    {
      name: "items",
      type: "array",
      dbName: "tc_items",
      label: "Client Testimonials",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          label: "Client / Founder Name",
        },
        {
          name: "company",
          type: "text",
          label: "Company / Store Name",
        },
        {
          name: "quote",
          type: "textarea",
          required: true,
          label: "Quote / Review",
        },
        {
          name: "videoId",
          type: "text",
          label: "YouTube Video ID (e.g. 7q_3o7PzP_E)",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Video Poster / Avatar Image",
        },
        {
          name: "imageSrc",
          type: "text",
          label: "Static Poster Image Fallback Path",
        },
        {
          name: "imageAlt",
          type: "text",
          label: "Image Alt Text",
        },
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
          label: "Client Company Logo",
        },
        {
          name: "logoSrc",
          type: "text",
          label: "Static Company Logo Fallback Path",
        },
        {
          name: "logoAlt",
          type: "text",
          label: "Logo Alt Text",
        },
        {
          name: "logoWidth",
          type: "number",
          defaultValue: 120,
        },
        {
          name: "logoHeight",
          type: "number",
          defaultValue: 40,
        },
      ],
    },
  ],
};
