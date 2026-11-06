import type { Block } from "payload";

export const ServiceHeroBlock: Block = {
  slug: "service-hero",
  labels: {
    singular: "Service Hero (Master)",
    plural: "Service Hero Sections",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "General & Content",
          fields: [
            {
              name: "variant",
              type: "select",
              defaultValue: "video",
              required: true,
              options: [
                { label: "Split with Looping Video (Default)", value: "video" },
                { label: "Split with Tablet Mockup Slider", value: "tablet-slider" },
                { label: "Split with Static Image", value: "image" },
                { label: "Split with Review Animation", value: "reviews" },
                { label: "Centered Hero (Co-branding & Reviews)", value: "centered" },
                { label: "Home Hero (Centered with Badges)", value: "home" },
                { label: "Text Only (Full Width)", value: "text-only" },
                { label: "Theme Customization Hero (with Mockup Card)", value: "theme" },
                { label: "About Us Hero", value: "about" },
                { label: "Careers Hero", value: "career" },
                { label: "Life at Dynamic Dreamz Hero", value: "life" },
                { label: "Our Work Hero", value: "our-work" },
                { label: "Resources Hero", value: "resources" },
                { label: "Shopify Hours Hero", value: "buy-hours" },
                { label: "Industry Ecommerce Hero", value: "industry" },
              ],
            },
            {
              name: "backgroundColor",
              type: "select",
              defaultValue: "cream",
              options: [
                { label: "Cream (#f7f4e9) - Modern Service Hero", value: "cream" },
                { label: "White (#ffffff) - Classic Service Hero", value: "white" },
              ],
            },
            {
              name: "eyebrows",
              type: "array",
              dbName: "sh_eb",
              label: "Eyebrow Tags / Badges",
              fields: [{ name: "text", type: "text", required: true }],
            },
            {
              name: "title",
              type: "text",
              required: true,
              label: "Main Heading (H1)",
            },
            {
              name: "titleAccent",
              type: "text",
              label: "Title Accent (Highlighted in Red)",
            },
            {
              name: "titleAccentTag",
              type: "select",
              defaultValue: "i",
              options: [
                { label: "Italic (<i>)", value: "i" },
                { label: "Standard (<span>)", value: "span" },
              ],
            },
            {
              name: "titleAccentPosition",
              type: "select",
              defaultValue: "end",
              options: [
                { label: "End of Title", value: "end" },
                { label: "Start of Title", value: "start" },
              ],
            },
            {
              name: "subtitle",
              type: "text",
              label: "Subtitle (Montserrat Semi-bold)",
            },
            {
              name: "lead",
              type: "text",
              label: "Lead Intro Sentence",
            },
            {
              name: "description",
              type: "textarea",
              label: "Primary Description",
            },
            {
              name: "secondaryDescription",
              type: "textarea",
              label: "Secondary Description",
            },
            {
              name: "paragraphs",
              type: "array",
              dbName: "sh_paras",
              label: "Additional Paragraphs (Multi-paragraph Intros)",
              fields: [{ name: "text", type: "textarea", required: true }],
            },
            {
              name: "primaryCta",
              type: "group",
              label: "Primary CTA (Solid Button)",
              fields: [
                { name: "label", type: "text", defaultValue: "Let's Talk" },
                { name: "href", type: "text", defaultValue: "/request-a-quote" },
              ],
            },
            {
              name: "secondaryCta",
              type: "group",
              label: "Secondary CTA (Outline Button)",
              fields: [
                { name: "label", type: "text" },
                { name: "href", type: "text" },
              ],
            },
          ],
        },
        {
          label: "Media & Variant Settings",
          fields: [
            // Video Options
            {
              name: "videoSrc",
              type: "text",
              label: "Video URL / Path (MP4)",
              admin: {
                description: "e.g. /assets/home/why-dynamic-dreamz.mp4 or CDN URL",
                condition: (data, siblingData) =>
                  siblingData?.variant === "video" || !siblingData?.variant,
              },
            },
            {
              name: "videoPoster",
              type: "upload",
              relationTo: "media",
              label: "Video Poster Image",
              admin: {
                condition: (data, siblingData) =>
                  siblingData?.variant === "video" || !siblingData?.variant,
              },
            },
            {
              name: "videoLogo",
              type: "group",
              label: "Floating Partner Badge on Video (e.g. Shopify Plus White Badge)",
              admin: {
                condition: (data, siblingData) =>
                  siblingData?.variant === "video" || !siblingData?.variant,
              },
              fields: [
                { name: "logo", type: "upload", relationTo: "media" },
                { name: "src", type: "text", label: "Static Fallback Path" },
                { name: "alt", type: "text" },
                { name: "width", type: "number", defaultValue: 143 },
                { name: "height", type: "number", defaultValue: 30 },
              ],
            },
            // Image Options
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              label: "Hero Image",
              admin: {
                condition: (data, siblingData) => siblingData?.variant === "image",
              },
            },
            {
              name: "imageSrc",
              type: "text",
              label: "Static Image Fallback Path",
              admin: {
                condition: (data, siblingData) => siblingData?.variant === "image",
              },
            },
            {
              name: "imageAlt",
              type: "text",
              label: "Image Alt Text",
              admin: {
                condition: (data, siblingData) => siblingData?.variant === "image",
              },
            },
            {
              name: "imageWidth",
              type: "number",
              defaultValue: 684,
              admin: {
                condition: (data, siblingData) => siblingData?.variant === "image",
              },
            },
            {
              name: "imageHeight",
              type: "number",
              defaultValue: 550,
              admin: {
                condition: (data, siblingData) => siblingData?.variant === "image",
              },
            },
            {
              name: "imageBlend",
              type: "select",
              defaultValue: "normal",
              options: [
                { label: "Normal", value: "normal" },
                { label: "Darken (mix-blend-darken)", value: "darken" },
              ],
              admin: {
                condition: (data, siblingData) => siblingData?.variant === "image",
              },
            },
            {
              name: "imageAlignment",
              type: "select",
              defaultValue: "center",
              options: [
                { label: "Center Aligned", value: "center" },
                { label: "Bottom Aligned (Mockup Overlap)", value: "bottom" },
              ],
              admin: {
                condition: (data, siblingData) => siblingData?.variant === "image",
              },
            },
            // Tablet Slider Options
            {
              name: "slides",
              type: "array",
              dbName: "sh_ts_s",
              label: "Tablet Mockup Slider Slides",
              admin: {
                condition: (data, siblingData) =>
                  siblingData?.variant === "tablet-slider",
              },
              fields: [
                { name: "image", type: "upload", relationTo: "media" },
                { name: "src", type: "text", label: "Static Fallback Path" },
                { name: "alt", type: "text" },
                { name: "width", type: "number", defaultValue: 1600 },
                { name: "height", type: "number", defaultValue: 2380 },
              ],
            },
            {
              name: "topBadge",
              type: "group",
              label: "Top Floating Technology Badge (e.g. Node.js Badge)",
              admin: {
                condition: (data, siblingData) =>
                  siblingData?.variant === "tablet-slider",
              },
              fields: [
                { name: "image", type: "upload", relationTo: "media" },
                { name: "src", type: "text", label: "Static Fallback Path" },
                { name: "alt", type: "text" },
                { name: "width", type: "number", defaultValue: 346 },
                { name: "height", type: "number", defaultValue: 212 },
              ],
            },
            {
              name: "bottomBadge",
              type: "group",
              label: "Bottom Floating Technology Badge (e.g. Next.js Badge)",
              admin: {
                condition: (data, siblingData) =>
                  siblingData?.variant === "tablet-slider",
              },
              fields: [
                { name: "image", type: "upload", relationTo: "media" },
                { name: "src", type: "text", label: "Static Fallback Path" },
                { name: "alt", type: "text" },
                { name: "width", type: "number", defaultValue: 260 },
                { name: "height", type: "number", defaultValue: 252 },
              ],
            },
            {
              name: "bgShape",
              type: "upload",
              relationTo: "media",
              label: "Background Decorative Shape SVG",
              admin: {
                condition: (data, siblingData) =>
                  siblingData?.variant === "tablet-slider",
              },
            },
            {
              name: "bgShapeSrc",
              type: "text",
              label: "Background Shape Fallback Path",
              admin: {
                condition: (data, siblingData) =>
                  siblingData?.variant === "tablet-slider",
              },
            },
            // Reviews & Centered Layout Options
            {
              name: "showReviews",
              type: "checkbox",
              defaultValue: true,
              label: "Show Interactive Review Cards Animation",
              admin: {
                condition: (data, siblingData) =>
                  siblingData?.variant === "reviews" ||
                  siblingData?.variant === "centered",
              },
            },
            {
              name: "maxWidth",
              type: "select",
              defaultValue: "default",
              options: [
                { label: "Default Width (max-w-[770px])", value: "default" },
                { label: "Wide Width (max-w-[830px] - Risks Outsourcing)", value: "wide" },
              ],
              admin: {
                condition: (data, siblingData) =>
                  siblingData?.variant === "centered",
              },
            },
            {
              name: "coBranding",
              type: "group",
              label: "Co-Branding Header (e.g. Partner X Dynamic Dreamz)",
              admin: {
                condition: (data, siblingData) =>
                  siblingData?.variant === "centered",
              },
              fields: [
                { name: "enabled", type: "checkbox", defaultValue: false },
                {
                  name: "leftLogo",
                  type: "group",
                  fields: [
                    { name: "logo", type: "upload", relationTo: "media" },
                    { name: "src", type: "text", label: "Static Fallback Path" },
                    { name: "alt", type: "text" },
                    { name: "width", type: "number", defaultValue: 147 },
                    { name: "height", type: "number", defaultValue: 37 },
                  ],
                },
                {
                  name: "separator",
                  type: "group",
                  fields: [
                    { name: "logo", type: "upload", relationTo: "media" },
                    { name: "src", type: "text", label: "Static Fallback Path" },
                    { name: "alt", type: "text" },
                    { name: "width", type: "number", defaultValue: 29 },
                    { name: "height", type: "number", defaultValue: 29 },
                  ],
                },
                {
                  name: "rightLogo",
                  type: "group",
                  fields: [
                    { name: "logo", type: "upload", relationTo: "media" },
                    { name: "src", type: "text", label: "Static Fallback Path" },
                    { name: "alt", type: "text" },
                    { name: "width", type: "number", defaultValue: 130 },
                    { name: "height", type: "number", defaultValue: 39 },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Proof & Trust Badges",
          fields: [
            {
              name: "badges",
              type: "array",
              dbName: "sh_bdgs",
              label: "Trust & Partner Badges (Clutch, GoodFirms, Shopify Plus Partner)",
              fields: [
                { name: "logo", type: "upload", relationTo: "media" },
                { name: "src", type: "text", label: "Static Fallback Path" },
                { name: "name", type: "text", label: "Badge Name" },
                { name: "alt", type: "text", label: "Alt Text" },
                { name: "href", type: "text", label: "Profile Link" },
                { name: "width", type: "number", defaultValue: 120 },
                { name: "height", type: "number", defaultValue: 44 },
              ],
            },
          ],
        },
      ],
    },
  ],
};
