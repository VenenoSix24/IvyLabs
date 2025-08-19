import type { DefaultTheme } from 'vitepress'

// 使用 DefaultTheme.Sidebar 类型，可以获得类型提示和校验
export const sidebar: DefaultTheme.Sidebar = [
  { text: '首页', link: '/' },
      { text: '导航', link: '/nav' },
      { text: '团队', link: '/team' },
      {
        // 分组 1
        text: '基础配置',
        items: [
          { text: '快速上手', link: '/vitepress1' },
          { text: '页面配置', link: '/vitepress2' },
          { text: 'Frontmatter', link: '/vitepress3' }
        ]
      },
      {
        // 分组 1
        text: '文档测试',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        // 分组 2
        text: '插件',
        items: [
          { text: 'vitepress-plugin-group-icons', link: '/vitepress-plugin-group-icons' },
          { text: 'vitepress-plugin-autobar', link: '/vitepress-plugin-autobar' }
        ]
      },
      {
        // 分组 3
        text: '参考文档',
        items: [
          { text: 'VitePress 中文教程', link: 'https://vitepress.yiov.top/' },
          { text: 'XaviDocs 个人技术文档', link: 'https://xaviw.github.io/XaviDocs/%E5%B7%A5%E5%85%B7%E7%B3%BB%E5%88%97/VitePress%E6%90%AD%E5%BB%BA/%E5%9F%BA%E7%A1%80%E6%90%AD%E5%BB%BA.html' },
          { text: 'vitepress-theme-async', link: 'https://github.com/MaLuns/vitepress-theme-async' }
        ]
      }
    ]