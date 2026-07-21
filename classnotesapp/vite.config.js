import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import string from 'vite-plugin-string';
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  // In CI, VITE_BASE_PATH is derived from the repo name (see deploy-pages.yml)
  // — this fallback only matters for local `npm run build` outside CI.
  base: process.env.VITE_BASE_PATH || '/course-platform/',
  plugins: [
    react(),
    string({
      include: ['**/*.md'],
    }),
    
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
