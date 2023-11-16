import { defineConfig } from 'vite';

import postcss from './postcss.config.js';

import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss,
  },
  plugins: [vue()],
});
