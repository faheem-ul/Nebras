import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
      "@/utils": "/src/lib/utils",
      "@/lib": "/src/lib",
      "@/ui": "/src/components/ui",
      "@/hooks": "/src/hooks",
      "@/public": "/public",
    },
  },
})
