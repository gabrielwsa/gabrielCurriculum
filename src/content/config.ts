import { defineCollection, z } from 'astro:content';

const certificationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    file: z.string(),
  }),
});

export const collections = {
  'certifications': certificationsCollection,
}; 