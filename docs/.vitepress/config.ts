import { defineConfig } from 'vitepress'
export default defineConfig(
  {
    /** ---基础配置-- */
    lang: 'zh-CN',
    title: 'yaoxfly',
    lastUpdated: true,
    description: '个人博客',
    /** ---部署配置-- */
    base: '/',
    /** ---主题配置-- */
    themeConfig: {
      algolia: {
        appId: 'HAT6A1ER66',
        apiKey: '9fe72716842d32cc387517b399a30a8d',
        indexName: ''
      },
      lastUpdatedText: '最近更新时间',
      socialLinks: [
        { icon: 'github', link: 'https://github.com/yaoxfly' }
      ],
      /** ---头部导航-- */
      nav: [
        {
          text: '首页',
          link: '/'
        },
        {
          text: '组件文档',
          link: '/component/'
        },
        {
          text: '百度',
          link: 'http://www.baidu.com' // 外部链接有特定标识
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
              { text: '前言', link: '/component/' },
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
      footer: {
        message: '©2022  By yaoxfly',
        copyright: 'Power by vitepress'
      }
    },
    /** ---md配置-- */
    markdown: {}
  }
)
