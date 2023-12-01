import { defineCollection, z } from 'astro:content';

const work = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()),
		img: z.string(),
		img_alt: z.string().optional(),
	}),
});

const blog = defineCollection({
	schema: z.object({
	  title: z.string(),
	  description: z.string(),
	  pubDate: z.coerce.date(),
	  updatedDate: z.coerce.date().optional(),
	  heroImage: z.string().optional(),
	  tags: z.array(z.string()).optional(),
	}),
  });
  
  
  export const collections = { blog, work };
