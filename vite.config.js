import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Base path: repo-pages path for now (https://sovereignuniversity20-art.github.io/soveu-rebuild/).
// Change to '/' + add a public/CNAME file once the final custom domain is chosen (see project plan).
// https://vite.dev/config/
export default defineConfig({
  base: '/soveu-rebuild/',
  plugins: [react(), tailwindcss()],
})
