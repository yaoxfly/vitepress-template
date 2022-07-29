import { defineConfig } from 'vite'
import ViteRestart from 'vite-plugin-restart'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vueJsx(),
    ViteRestart({
      restart: [
        // './.vitepress/nav/index.ts',
      ]
    })
  ],
})