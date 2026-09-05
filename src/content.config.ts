import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const writing = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    tag: z.string(),
    cluster: z.enum(["backend-data-systems", "ai-systems", "engineering-practice"]),
    related: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
})

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    index: z.string(),
    title: z.string(),
    category: z.string(),
    outcome: z.string(),
    role: z.string(),
    scope: z.string(),
    year: z.string(),
    href: z.string().optional(),
    accent: z.enum(["lime", "cobalt", "ink"]).default("ink"),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
})

export const collections = { writing, work }
