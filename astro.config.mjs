// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Public URL of the deployed site; used for canonical links, Open Graph and the sitemap
  site: 'https://sebastian-cohen.netlify.app',
  integrations: [sitemap()],
});
