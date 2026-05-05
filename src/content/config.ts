import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        published: z.coerce.date(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        category: z.string().optional(),
        draft: z.boolean().optional().default(false),

        /* For internal use */
        prevTitle: z.string().default(''),
        prevSlug: z.string().default(''),
        nextTitle: z.string().default(''),
        nextSlug: z.string().default(''),
  }),
})
export const collections = {
  posts: posts,
}