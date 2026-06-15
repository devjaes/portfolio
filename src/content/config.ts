import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      isMain: z.boolean(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
      symbol: z.string().optional(),
      status: z.enum(["ship", "build", "paused", "down"]).optional(),
      tier: z.enum(["flagship", "mid", "earlier"]).optional(),
    }),
  }),
};
