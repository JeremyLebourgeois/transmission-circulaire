// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    imageService: 'cloudflare',
  }),
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'es', 'de'],
    routing: {
      prefixDefaultLocale: false,
    }
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['**/.astro/**', '**/.wrangler/**']
      }
    }
  }
});