import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Se o domínio customizado está corretamente configurado, mantenha '/'. Caso contrário, ajuste para '/marcos4lex-portfolio/'
})
