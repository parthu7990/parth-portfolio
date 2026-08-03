import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// Base path for GitHub Pages deployment.
// The repo is "parth-portfolio", so assets are served from /parth-portfolio/.
// If you deploy to a custom domain or the root, change this to base: '/'.
export default defineConfig({
  base: '/parth-portfolio/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
