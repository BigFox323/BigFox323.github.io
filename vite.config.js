import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import markdown from 'vite-plugin-md';

export default defineConfig({
  base:'./',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]  
    }),
    markdown(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  assetsInclude: ['**/*.md'] 
});
