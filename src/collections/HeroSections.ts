// collections/HeroSections.ts
import type { CollectionConfig } from "payload";

export const HeroSections: CollectionConfig = {
  slug: "hero-sections",
  admin: { useAsTitle: "heading" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "ctaText", type: "text" },
    { name: "ctaLink", type: "text" },
    { name: "image", type: "upload", relationTo: "media" },
    { name: "footerNote", type: "text" },
  ],
};
