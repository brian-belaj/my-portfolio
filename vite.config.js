import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'
import { generateSitemap } from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin(),
    generateSitemap({
      hostname: "https://brianbelaj.netlify.app", // Aggiungi qui tutte le tue pagine
    }),
  ],
});