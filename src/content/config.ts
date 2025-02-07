import { defineCollection, z } from "astro:content";

const reviews = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.string(),
        author_name: z.string(),
        rating: z.number(),
        text: z.string(),
        thumb: z.string()
        })
    })

export const collections = { reviews }  