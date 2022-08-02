import type { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import { resolve } from 'path';

// https://vitejs.dev/config/
const config: UserConfig = {
  plugins: [eslintPlugin(), vue()],
  build: {
    target: [
      'chrome63',
      'edge79',
      'firefox67',
      'ios11',
      'opera50',
      'safari11.1',
    ],
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'v-calendar',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', '@popperjs/core'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          '@popperjs/core': 'PopperCore',
        },
      },
    },
  },
};

export default config;
