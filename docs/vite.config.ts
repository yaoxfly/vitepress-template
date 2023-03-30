import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'
// import postcssImport from 'postcss-import'
import autoprefixer from 'autoprefixer'
import browserslist from 'browserslist' // 统一js/css兼容性
import legacy from '@vitejs/plugin-legacy'
const browserslistConfig = browserslist.loadConfig({ path: '.' }) // npx browserslist "> 0.04%, last 2 versions,Firefox ESR,not dead" 查询兼容的浏览器
export default defineConfig({
  plugins: [
    vueJsx()
    // eslintPlugin({
    //   include: [
    //     'docs/**/*.vue',
    //     'docs/**/*.tsx',
    //     'docs/**/*.ts'
    //   ],
    //   exclude: ['./node\_modules/**', 'docs/.vitepress/dist'],
    //   cache: false
    // })

    // legacy({
    //   targets: browserslistConfig,
    //   renderLegacyChunks: true,
    //   additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    //   // 现代浏览器 --根据兼容的浏览器按需添加
    //   modernPolyfills: [
    //     'es.string.replace-all',
    //     'es.promise.finally',
    //     'es.array.flat-map',
    //     'es.object.values'
    //   ],
    //   // 传统浏览器 --根据兼容的浏览器按需添加
    //   polyfills: [
    //     'es.symbol',
    //     'es.array.filter',
    //     'es.promise',
    //     'es.promise.finally',
    //     'es/map',
    //     'es/set',
    //     'es.array.for-each',
    //     'es.object.define-properties',
    //     'es.object.define-property',
    //     'es.object.get-own-property-descriptor',
    //     'es.object.get-own-property-descriptors',
    //     'es.object.keys',
    //     'es.object.to-string',
    //     'web.dom-collections.for-each',
    //     'esnext.global-this',
    //     'esnext.string.match-all',
    //     'es.array.flat-map',
    //     'es.object.values'
    //   ]
    // })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'docs')
    }
  },

  build: {
    target: 'es2015',
    cssTarget: 'es2015',
    cssCodeSplit: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        banner: '/* !automatic generation */',
        entryFileNames: 'index/libs/[name].[hash].js',
        chunkFileNames: 'index/js/[name].[hash].js',
        assetFileNames: 'index/assets/[name].[hash].[ext]'
      }

    }
    // cssMinify: 'terser'
    // terserOptions: {
    //   compress: {
    //     keep_infinity: true,
    //     drop_console: true,
    //     drop_debugger: true
    //   }
    // }
  },

  css: {
    postcss: {
      plugins: [
        // postcssImport,
        autoprefixer
      ]
    }
  }
})
