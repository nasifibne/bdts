import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

const page = name => resolve(import.meta.dirname, `${name}.html`);

// base './' keeps every asset path relative, so the built site works on
// GitHub Pages (nasifibne.github.io/bdts/) or any custom domain unchanged.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: page('index'),
        delegates: page('delegates'),
        objectives: page('objectives'),
        faq: page('faq'),
        notfound: page('404')
      }
    }
  }
});
