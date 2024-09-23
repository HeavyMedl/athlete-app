import { resolve } from 'node:path';

import { build } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { externalizeDeps } from 'vite-plugin-externalize-deps';

import { defineConfig } from 'vite';

const entries = {
  landing: './src/pages/entry/landing.mts',
  detail: './src/pages/entry/detail.mts',
  review: './src/pages/entry/review.mts',
  main: './src/main.mts',
};

// Using for..of to enforce synchronous builds for each entry. Seeing
// builds seemingly not complete when firing off in parallel.
for (const [entryKey, entryPath] of Object.entries(entries)) {
  const config = defineConfig({
    build: {
      emptyOutDir: false,
      lib: {
        entry: resolve(process.cwd(), entryPath),
        formats: ['es'],
        fileName: () => `${entryKey}.mjs`,
      },
      rollupOptions: {
        output: {
          globals: {
            vue: 'Vue',
          },
          assetFileNames: () =>
            entryKey === 'main' ? 'style[extname]' : `${entryKey}[extname]`,
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
  config.plugins = [vue(), externalizeDeps()];
  if (entryKey === 'main') {
    config.plugins = config.plugins.concat([
      dts({
        insertTypesEntry: true,
        exclude: [
          '**/*.{spec,test}.mts',
          'vite*.config.mts',
          'tailwind.config.ts',
          'vitest.setup.mts',
          'build.mts',
          'test/**/*.mts',
          'src/DevelopmentContainer.vue',
          'src/main-dev.mts',
        ],
      }),
    ]);
  }
  await build({ configFile: false, ...config });
}
