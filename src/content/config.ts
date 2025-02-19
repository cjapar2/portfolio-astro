import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        stack: z.array(z.string()),
        featured: z.boolean()
    })
})

export const collections = {
    projects: projectsCollection,
}