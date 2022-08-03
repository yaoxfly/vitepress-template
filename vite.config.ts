import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import ViteRestart from 'vite-plugin-restart'
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    ViteRestart({
      restart: [
        // './.vitepress/nav/index.ts',
      ]
    }),
  ],
})