import { URL, fileURLToPath } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      directoryAsNamespace: true,
    }),

    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['src/composables', 'src/stores'],
      vueTemplate: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
