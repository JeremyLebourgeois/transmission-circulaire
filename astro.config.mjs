// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'es', 'de'],
    routing: {
      prefixDefaultLocale: false,
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});