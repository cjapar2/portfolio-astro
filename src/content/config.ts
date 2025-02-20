import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      stack: z.array(z.string()),
      image: image().default(null),
      featured: z.boolean()
    })
})

export const collections = {
  projects: projectsCollection,
}