export default {
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
}
