import { defineConfig } from 'vitepress'
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
      outlineTitle: '当前页',
      // logo: '/icon/favicon.ico',
      algolia: {
        appId: 'UXHUDO5MBD',
        apiKey: '9fe72716842d32cc387517b399a30a8d',
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
    markdown: {}
  }
)
