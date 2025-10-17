// src/collections/Pages.ts
import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",

  admin: { useAsTitle: "title" },

  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true },

    {
      name: "layout",
      type: "blocks",
      blocks: [
        // ✅ Hero Section
        {
          slug: "hero",
          fields: [
            { name: "heading", type: "text" },
            { name: "description", type: "textarea" },
            { name: "ctaText", type: "text" },
            { name: "ctaLink", type: "text" },
            { name: "image", type: "upload", relationTo: "media" },
            { name: "footerNote", type: "text" },
            { name: "youtubeLink", type: "text", defaultValue: "#" }, // ✅ baru
            { name: "tiktokLink", type: "text", defaultValue: "#" },
          ],
        },

        // ✅ Card School Section
        {
          slug: "card-school",
          fields: [
            { name: "title", type: "text" },
            { name: "description", type: "textarea" },
            {
              name: "cards",
              type: "array",
              fields: [
                { name: "image", type: "upload", relationTo: "media" },
              ],
            },
          ],
        },

        // ✅ School OS Section
        {
          slug: "school-os",
          fields: [
            { name: "title", type: "text" },
            {
              name: "features",
              type: "array",
              fields: [
                { name: "description", type: "text" },
                { name: "image", type: "upload", relationTo: "media" },
              ],
            },
          ],
        },

        // ✅ Solutions Section
        {
          slug: "school-solutions",
          fields: [
            { name: "title", type: "text" },
            { name: "description", type: "textarea" },
            {
              name: "items",
              type: "array",
              fields: [
                { name: "image", type: "upload", relationTo: "media" },
              ],
            },
          ],
        },

        // ✅ Resources Section
        {
          slug: "resources",
          fields: [
            { name: "title", type: "text" },
            {
              name: "links",
              type: "array",
              fields: [
                { name: "label", type: "text" },
                { name: "url", type: "text" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
