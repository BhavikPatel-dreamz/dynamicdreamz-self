import type { Block } from "payload";

export const TestimonialsCarouselBlock: Block = {
  slug: "testimonials-carousel",
  labels: {
    singular: "Testimonials Carousel (Brand Reviews)",
    plural: "Testimonials Carousel Sections",
  },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text" },
    { name: "description", type: "textarea" },
  ],
};
