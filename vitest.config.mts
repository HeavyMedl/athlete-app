import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  test: {
    globals: true,
    include: ['**/*.{spec,test}.{mts,mjs}'],
    environment: 'jsdom',
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json-summary', 'html'],
      all: true,
      exclude: [
        'src/**/{main-dev,entry-client,entry-server}.{js,mjs,ts,mts}',
        '**/*.{spec,test}.{js,mjs,mts}',
        'src/**/*.d.{mts,ts}',
        '**/types/*',
        'src/**/DevelopmentContainer.vue',
        'src/components/svg/*.vue',
        'src/mock/*.mts',
        'src/main.mts',
        'src/pages/entry/*',
        'src/__mocks__/*.mts',
      ],
      include: ['src', 'test'],
      clean: true,
      thresholds: {
        // branches: 80,
        // lines: 80,
        // functions: 50,
        // statements: 80,
      },
    },
    setupFiles: ['./vitest.setup.mts'],
  },
  plugins: [vue()],
});
