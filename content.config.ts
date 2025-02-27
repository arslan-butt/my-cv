import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
    experiences: defineCollection({
      type: 'data',
      source: 'experiences/**.json',
      schema: z.object({
        name: z.string(),
        position: z.string(),
        location: z.string().optional(),
        date: z.string(), // Example: "Jan 2012 - Apr 2012"
        description: z.string().optional(),
        link: z.string().optional(),
      }),
    }),
    education: defineCollection({
      type: 'data',
      source: 'education/**.json',
      schema: z.object({
        name: z.string(),
        date: z.string(),
        description: z.string().optional(),
      }),
    }),
    projects: defineCollection({
      type: 'data',
      source: 'projects/**.json',
      schema: z.object({
        name: z.string(),
        image: z.string().optional(),
        position: z.string(),
        description: z.string().optional(),
        link: z.string().optional(),
        date: z.string().optional(),
      }),
    }),
  },
});
