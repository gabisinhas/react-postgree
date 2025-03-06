import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  define: {
    'import.meta.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL)
  },
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 3000
  },
  preview: {
    host: true,
    port: 3000
  },
  build: {
    outDir: 'dist', // Output directory
    sourcemap: false, // Disable source maps for security
    minify: 'terser', // Minify using Terser
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separate vendor dependencies
          }
        },
      },
    },
  },
})
