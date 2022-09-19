import { defineConfig } from 'vitepress'
import { base } from './custom-config'
export default defineConfig(
  {
    /** ---基础配置-- */
    lang: 'zh-CN',
    title: 'yaoxfly',
    lastUpdated: true,
    description: 'yaoxfly&个人博客',
    head: [
      ['link', { rel: 'icon', href: '/icon/favicon.ico' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
    ],
    /** ---部署配置-- */
    base,
    /** ---主题配置-- */
    themeConfig: {
      /** ---头部导航-- */
      nav: [
        {
          text: '首页',
          link: '/'
        },
        {
          text: '组件文档',
          link: '/component/button',
          activeMatch: '/component/'
        },
        {
          text: '项目地址',
          link: 'https://github.com/yaoxfly/vitepress-template'
        },
        {
          text: '下拉菜单',
          items: [
            { text: 'Item A', link: '/item-1' },
            { text: 'Item B', link: '/item-2' },
            { text: 'Item C', link: '/item-3' }
          ]
        }
      ],

      /** ---侧边栏-- */
      sidebar: {
        '/component/': [
          {
            text: '一级标题',
            collapsible: true,
            items: [
              { text: '按钮', link: '/component/button' },
              { text: '测试', link: '/component/test' }
            ]
          }
        ],
        '/utils/': [{
          text: '一级标题',
          collapsible: true,
          items: [
            {
              text: '二级标题1',
              link: '/utils/test1'
            },
            {
              text: '二级标题2',
              link: '/utils/test'
            }
          ]
        }]
      },
      siteTitle: 'yaoxfly',
      // logo: '/icon/favicon.ico',
      algolia: {
        appId: 'HAT6A1ER66',
        apiKey: '9fe72716842d32cc387517b399a30a8d',
        indexName: ''
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
