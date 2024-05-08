import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/': '/login',
    'admin': 'admin/student/search',
    'student': 'student/search'
  },
  integrations: [svelte()]
});