import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: './app',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'app')
    }
  },
  build: {
    outDir: '../assets',
    emptyOutDir: false,
    sourcemap: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'app/index.js'),
      },
      output: {
        entryFileNames: 'index.js', 
        chunkFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          const ext = path.extname(assetInfo.name);
          if (ext === '.css') {
            return 'index.css'; 
          }

          const baseName = path.basename(assetInfo.name, ext);
          return `${baseName}${ext}`; 
        }
      }
    },
    chunkSizeWarningLimit: 1000, 
  },
  server: {
    port: 3000,
    strictPort: true,
  }
});