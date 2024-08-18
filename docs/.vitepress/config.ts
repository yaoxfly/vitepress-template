import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import { base } from './custom-config'
import nav from './custom-config/nav'
import sidebar from './custom-config/sidebar'
export default defineConfig(
  {
    /** ---基础配置-- */
    lang: 'zh-CN',
    title: 'yaoxfly',
    lastUpdated: true,
    description: 'yaoxfly&个人博客',
    titleTemplate: false,
    head: [
      ['link', { rel: 'icon', href: `${base}icon/favicon.ico` }]
    ],
    /** ---部署配置-- */
    base,
    /** ---主题配置-- */
    themeConfig: {
      /** ---头部导航-- */
      nav,
      /** ---侧边栏-- */
      sidebar,
      siteTitle: 'yaoxfly',
      outlineTitle: '目录',
      // logo: '/icon/favicon.ico',
      algolia: {
        appId: 'GMQ8P1YNY9',
        apiKey: 'b9e3cc055aaccfd108e51ea6a50aa9be',
        indexName: 'vitepress-template'
      },
      lastUpdatedText: '最近更新时间',
      socialLinks: [
        { icon: 'github', link: 'https://github.com/yaoxfly' }
      ],
      docFooter: {
        prev: '上一篇',
        next: '下一篇'
      },
      footer: {
        message: '©2022  By yaoxfly',
        copyright: 'Power by vitepress'
      }
    },
    /** ---md配置-- */
    markdown: {},
    /** ---vite-- */
    vite: {
      resolve: {
        alias: {
          '@': resolve(__dirname, './')
        }
      },
      plugins: [
        vueJsx(),
        eslintPlugin({
          include: [
            'docs/**/*.vue',
            'docs/**/*.tsx',
            'docs/**/*.ts'
          ],
          exclude: ['./node\_modules/**', 'docs/.vitepress/dist', 'docs/.vitepress/cache'],
          cache: false,
          emitWarning: false
        })
      ],

      build: {
        target: 'es2015',
        cssCodeSplit: false,
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true
          }
        },
        chunkSizeWarningLimit: 500,
        rollupOptions: {
          output: {
            chunkFileNames: 'assets/chunks/[name]-[hash].js',
            assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
            manualChunks (id) { // 静态资源分拆打包，解决自定义全局样式，打包后置于最后面覆盖页面里的样式
              if (id.includes('node_modules')) {
                return id.toString().split('node_modules/')[1].split('/')[0].toString()
              }
            }
          }
        }
      },
      css: {
        postcss: {
          plugins: [
            autoprefixer
          ]
        }
      }
    }
  }
)
