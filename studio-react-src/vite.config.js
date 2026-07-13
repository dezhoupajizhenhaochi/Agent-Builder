import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'studio-react-src',
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  plugins: [react()],
  build: {
    outDir: '../studio-react',
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: 'selects.jsx',
      formats: ['es'],
      fileName: () => 'selects.js',
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => assetInfo.name?.endsWith('.css') ? 'selects.css' : '[name][extname]',
      },
    },
  },
});
