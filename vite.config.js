import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANTE: o base deve ser o NOME DO REPOSITÓRIO
export default defineConfig({
  plugins: [react()],
  base: '/conectamb-fullstack/',
})
