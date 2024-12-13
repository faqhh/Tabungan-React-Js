import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',  // Pastikan Vite output-nya ke direktori 'build'
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
