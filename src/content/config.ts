import { z, defineCollection } from 'astro:content';

// Define a content collection for our Markdown pages. The schema
// validates the frontmatter for each Markdown file, ensuring that
// required fields are present. Fields not listed here remain
// available but are not validated.
const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // The slug can be supplied in frontmatter but is optional since Astro will infer it from the filename.
    slug: z.string().optional(),
    // FAQs and other metadata can be optional
    faq1: z.string().optional(),
    faq2: z.string().optional(),
  }),
});

export const collections = {
  pages: pagesCollection,
};
