import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

    redirects: {
        '/': '/login',
        'admin': 'admin/student/search',
        'student': 'student/search'
    }

});
