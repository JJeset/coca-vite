import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['src/scss'],
      },
    },
  },
});
