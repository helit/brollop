import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/brollop/',
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
})
