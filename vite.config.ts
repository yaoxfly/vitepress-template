import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import ViteRestart from 'vite-plugin-restart'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'
import postcssImport from 'postcss-import'
import autoprefixer from 'autoprefixer'
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // ViteRestart({
    //   restart: [
    //     // './.vitepress/nav/index.ts',
    //   ]
    // }),
    eslintPlugin({
      include: [
        'docs/**/*.vue',
        'docs/**/*.tsx',
        'docs/**/*.ts'
      ],
      exclude: ['./node\_modules/**', './dist'],
      cache: false
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'docs')
    }
  },
  css: {
    postcss: {
      plugins: [
        postcssImport,
        autoprefixer
      ]
    }
  }
})
