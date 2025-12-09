import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // se estiver usando Vue, se for JS puro, pode ignorar

export default defineConfig({
  base: '/conectamb-fullstack/', // <--- nome do seu repositório
  plugins: [vue()],
})
