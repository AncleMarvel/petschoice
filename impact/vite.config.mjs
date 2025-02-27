import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy';
import path from 'path'

export default defineConfig({
  root: './app',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'app')
    }
  },
  plugins: [
    legacy({
      targets: ['defaults', 'IE 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  build: {
    minify: 'terser',
    outDir: '../assets',
    emptyOutDir: false,
    sourcemap: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'app/index.js'),
      },
      output: {
        manualChunks: () => 'index',
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