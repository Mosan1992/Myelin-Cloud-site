import { defineConfig } from 'astro/config';

// Update `site` to the production domain once DNS is live.
export default defineConfig({
  site: 'https://myelincloud.cn',
  i18n: {
    defaultLocale: 'en',
    locales: ['zh', 'en', 'ar'],
    routing: {
      prefixDefaultLocale: false, // en at /, zh at /zh/, ar at /ar/
    },
  },
});
