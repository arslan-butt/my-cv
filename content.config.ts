import { defineCollection, defineContentConfig } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "*.md",
    }),
    education: defineCollection({
      type: "data",
      source: "education/*.json",
    }),
    experiences: defineCollection({
      type: "data",
      source: "experiences/*.json",
    }),
    projects: defineCollection({
      type: "data",
      source: "projects/*.json",
    }),
  },
});
