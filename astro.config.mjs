import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Astro configuration for the BexBack PSEO site.
// The `site` property is important for generating absolute URLs in the sitemap
// and canonical tags. The sitemap integration automatically outputs
// a sitemap.xml based on your pages and content collections.
export default defineConfig({
  site: 'https://bexback-pseo.pages.dev',
  integrations: [sitemap()],
});
