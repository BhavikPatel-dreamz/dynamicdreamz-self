import type { Block } from "payload";

/**
 * Hero Variant Classifications
 * Centralized to guarantee that any new or existing hero variant
 * correctly exposes its corresponding media and settings fields in Payload Admin.
 */
export const HERO_VIDEO_VARIANTS = ["video"] as const;
export const HERO_SLIDER_VARIANTS = ["tablet-slider", "mobile-app"] as const;
export const HERO_IMAGE_VARIANTS = ["image", "theme", "industry", "life"] as const;
export const HERO_REVIEWS_VARIANTS = ["reviews", "centered"] as const;
export const HERO_CENTERED_VARIANTS = ["centered"] as const;

export const isHeroVideoVariant = (v?: string) => !v || HERO_VIDEO_VARIANTS.includes(v as any);
export const isHeroSliderVariant = (v?: string) => HERO_SLIDER_VARIANTS.includes(v as any);
export const isHeroImageVariant = (v?: string) => HERO_IMAGE_VARIANTS.includes(v as any);
export const isHeroReviewsVariant = (v?: string) => HERO_REVIEWS_VARIANTS.includes(v as any);
export const isHeroCenteredVariant = (v?: string) => HERO_CENTERED_VARIANTS.includes(v as any);

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
                { label: "Mobile App Hero (Mockup Device & Rating)", value: "mobile-app" },
              ],
            },
            {
              name: "mobileBadgeLayout",
              type: "select",
              defaultValue: "divided",
              options: [
                { label: "Divided Grid (Default)", value: "divided" },
                { label: "Single Row (Equal Width)", value: "row" },
              ],
              admin: {
                condition: (data, siblingData) => siblingData?.variant === "mobile-app",
              },
            },
            {
              name: "heroComponent",
              type: "select",
              defaultValue: "auto",
              label: "Hero Renderer Component",
              options: [
                { label: "Automatic (Variant & Video Logo Default)", value: "auto" },
                { label: "Modern Service Hero (ServiceHeroSection)", value: "service-hero" },
                { label: "Split Video Hero (ServiceHeroVideoSection)", value: "service-hero-video" },
              ],
            },
            {
              name: "bodyLayout",
              type: "select",
              defaultValue: "default",
              label: "Description Layout",
              options: [
                { label: "Default Typography", value: "default" },
                { label: "Compact Editorial Copy (14px)", value: "compact" },
              ],
            },
            {
              name: "tabletMediaVisibility",
              type: "select",
              defaultValue: "auto",
              label: "Tablet Media Column Visibility",
              options: [
                { label: "Default (Preserve Variant Default)", value: "auto" },
                { label: "Hidden on Tablet & Mobile", value: "hidden" },
                { label: "Inline on Tablet (Auto Width)", value: "inline" },
                { label: "Inline on Tablet (70% Width)", value: "inline-70" },
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
              name: "wrapperClassName",
              type: "text",
              label: "Custom Wrapper CSS Class (e.g. hero-shopify-migration)",
            },
            {
              name: "eyebrow",
              type: "text",
              label: "Single Eyebrow Label (Optional)",
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
                { name: "href", type: "text", defaultValue: "/request-a-quote/" },
              ],
            },
            {
              name: "secondaryCta",
              type: "group",
              label: "Secondary CTA (Outline Button)",
              fields: [
                { name: "label", type: "text" },
                { name: "href", type: "text" },
                {
                  name: "target",
                  type: "select",
                  defaultValue: "_self",
                  options: [
                    { label: "Same Tab (_self)", value: "_self" },
                    { label: "New Tab (_blank)", value: "_blank" },
                  ],
                },
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
                condition: (data, siblingData) => isHeroVideoVariant(siblingData?.variant),
              },
            },
            {
              name: "videoPoster",
              type: "upload",
              relationTo: "media",
              label: "Video Poster Image",
              admin: {
                condition: (data, siblingData) => isHeroVideoVariant(siblingData?.variant),
              },
            },
            {
              name: "videoPosterSrc",
              type: "text",
              label: "Video Poster Fallback Path",
              admin: {
                description: "e.g. /assets/services/hero-video-poster.webp",
                condition: (data, siblingData) => isHeroVideoVariant(siblingData?.variant),
              },
            },
            {
              name: "videoLogo",
              type: "group",
              label: "Floating Partner Badge on Video (e.g. Shopify Plus White Badge)",
              admin: {
                condition: (data, siblingData) => isHeroVideoVariant(siblingData?.variant),
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
                condition: (data, siblingData) => isHeroImageVariant(siblingData?.variant),
              },
            },
            {
              name: "imageSrc",
              type: "text",
              label: "Static Image Fallback Path",
              admin: {
                condition: (data, siblingData) => isHeroImageVariant(siblingData?.variant),
              },
            },
            {
              name: "imageAlt",
              type: "text",
              label: "Image Alt Text",
              admin: {
                condition: (data, siblingData) => isHeroImageVariant(siblingData?.variant),
              },
            },
            {
              name: "imageWidth",
              type: "number",
              defaultValue: 684,
              admin: {
                condition: (data, siblingData) => isHeroImageVariant(siblingData?.variant),
              },
            },
            {
              name: "imageHeight",
              type: "number",
              defaultValue: 550,
              admin: {
                condition: (data, siblingData) => isHeroImageVariant(siblingData?.variant),
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
                condition: (data, siblingData) => isHeroImageVariant(siblingData?.variant),
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
                condition: (data, siblingData) => isHeroImageVariant(siblingData?.variant),
              },
            },
            // Tablet Slider Options
            {
              name: "slides",
              type: "array",
              dbName: "sh_ts_s",
              label: "Tablet Mockup Slider Slides",
              admin: {
                condition: (data, siblingData) => isHeroSliderVariant(siblingData?.variant),
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
                condition: (data, siblingData) => isHeroSliderVariant(siblingData?.variant),
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
                condition: (data, siblingData) => isHeroSliderVariant(siblingData?.variant),
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
                condition: (data, siblingData) => isHeroSliderVariant(siblingData?.variant),
              },
            },
            {
              name: "bgShapeSrc",
              type: "text",
              label: "Background Shape Fallback Path",
              admin: {
                condition: (data, siblingData) => isHeroSliderVariant(siblingData?.variant),
              },
            },
            // Reviews & Centered Layout Options
            {
              name: "showReviews",
              type: "checkbox",
              defaultValue: true,
              label: "Show Interactive Review Cards Animation",
              admin: {
                condition: (data, siblingData) => isHeroReviewsVariant(siblingData?.variant),
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
                condition: (data, siblingData) => isHeroCenteredVariant(siblingData?.variant),
              },
            },
            {
              name: "coBranding",
              type: "group",
              label: "Co-Branding Header (e.g. Partner X Dynamic Dreamz)",
              admin: {
                condition: (data, siblingData) => isHeroCenteredVariant(siblingData?.variant),
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
