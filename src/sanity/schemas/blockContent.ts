import { defineType, defineArrayMember } from "sanity";

export default defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              { title: "URL", name: "href", type: "url" },
              { title: "Open in new tab", name: "blank", type: "boolean" },
            ],
          },
        ],
      },
    }),
    defineArrayMember({ type: "image", options: { hotspot: true } }),
    // Custom: Table
    defineArrayMember({
      name: "table",
      title: "Tabella",
      type: "object",
      fields: [
        {
          name: "rows",
          title: "Righe",
          type: "array",
          of: [
            {
              type: "object",
              name: "row",
              fields: [
                {
                  name: "cells",
                  title: "Celle",
                  type: "array",
                  of: [{ type: "string" }],
                },
              ],
              preview: {
                select: { cells: "cells" },
                prepare({ cells }: any) {
                  return { title: (cells || []).join(" | ") };
                },
              },
            },
          ],
        },
        {
          name: "hasHeader",
          title: "Prima riga è intestazione",
          type: "boolean",
          initialValue: true,
        },
      ],
      preview: {
        prepare() {
          return { title: "📊 Tabella" };
        },
      },
    }),
    // Custom: Callout/Note
    defineArrayMember({
      name: "callout",
      title: "Callout / Nota",
      type: "object",
      fields: [
        {
          name: "tone",
          title: "Tipo",
          type: "string",
          options: {
            list: [
              { title: "Info", value: "info" },
              { title: "Warning", value: "warning" },
              { title: "Success", value: "success" },
            ],
          },
          initialValue: "info",
        },
        { name: "text", title: "Testo", type: "text", rows: 3 },
      ],
      preview: {
        select: { tone: "tone", text: "text" },
        prepare({ tone, text }: any) {
          const icons: Record<string, string> = { info: "ℹ️", warning: "⚠️", success: "✅" };
          return { title: `${icons[tone] || "📝"} ${(text || "").substring(0, 60)}` };
        },
      },
    }),
    // Custom: CTA Button
    defineArrayMember({
      name: "cta",
      title: "Bottone CTA",
      type: "object",
      fields: [
        { name: "text", title: "Testo", type: "string" },
        { name: "url", title: "URL", type: "string" },
        {
          name: "style",
          title: "Stile",
          type: "string",
          options: {
            list: [
              { title: "Primary", value: "primary" },
              { title: "Secondary", value: "secondary" },
            ],
          },
          initialValue: "primary",
        },
      ],
      preview: {
        select: { text: "text", url: "url" },
        prepare({ text, url }: any) {
          return { title: `🔗 ${text || "CTA"}`, subtitle: url };
        },
      },
    }),
    // Custom: Video Embed
    defineArrayMember({
      name: "videoEmbed",
      title: "Video Embed",
      type: "object",
      fields: [
        {
          name: "url",
          title: "URL (YouTube / Vimeo)",
          type: "url",
          validation: (r) => r.required(),
        },
        { name: "caption", title: "Didascalia", type: "string" },
      ],
      preview: {
        select: { url: "url", caption: "caption" },
        prepare({ url, caption }: any) {
          return { title: `🎬 ${caption || "Video"}`, subtitle: url };
        },
      },
    }),
  ],
});
