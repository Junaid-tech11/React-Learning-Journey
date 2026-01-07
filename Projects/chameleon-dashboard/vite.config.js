import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 👈 Get the plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 👈 Plug it in
  ],
})