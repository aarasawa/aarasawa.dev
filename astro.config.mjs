import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

export default defineConfig({
  outDir: './dist',
  output: 'static',
  adapter: vercel(),
  integrations: [react()],
});