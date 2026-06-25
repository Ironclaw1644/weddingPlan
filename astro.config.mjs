// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production domain — drives canonical URLs and the generated sitemap.
// (Correct even on the *.vercel.app preview: canonicals should point to the live domain.)
export default defineConfig({
  site: 'https://forresterfields.com',
  integrations: [sitemap()],
  image: {
    // Allow optimizing the few remaining GoDaddy-hosted images if ever referenced remotely.
    domains: ['img1.wsimg.com'],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
