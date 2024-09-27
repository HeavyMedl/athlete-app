import { defineConfig } from 'vite';
// import basicSsl from '@vitejs/plugin-basic-ssl';
import vue from '@vitejs/plugin-vue';

/**
 * This is the configuration file is for the Vite development
 * server. Production builds use `build.mts`
 */
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "global";',
        includePaths: ['node_modules/', 'src/style/'],
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
});
