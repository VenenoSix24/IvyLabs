import type { DefaultTheme } from 'vitepress'

// 使用 DefaultTheme.Sidebar 类型，可以获得类型提示和校验
export const sidebar: DefaultTheme.Sidebar = [
  // IvyLabs
      {
        text: '🍃 IvyLabs',
        items: [
          { text: '首页', link: '/' },
          { text: '导航', link: '/nav' },
          { text: '团队', link: '/team' },
          { text: '关于', link: '/about' },
        ]
      },
      {
        // 分组 1
        text: '🐣 个人项目',
        items: [
          { text: '我去抢个座', link: '/feature/igolib' },
          { text: '总之就是非常可爱', link: '/feature/kawaii' },
          { text: '黑苹果 OC EFI', link: '/feature/ocefi' },
          { text: '个人密码生成器', link: '/feature/ts' },
          { text: '个人主页模板', link: '/feature/home' },
          { text: '开发者在线工具', link: '/feature/tool' },
          { text: '打瓦加密器', link: '/feature/dava' },
          { text: '原神抽卡模拟', link: '/feature/ys' }
        ]
      },
      {
        text: '网站搭建',
        items: [
          {
            text: 'VitePress', // 分组标题
            items: [
            { text: '快速上手', link: '/webbuild/vitepress1' },
            { text: '页面配置', link: '/webbuild/vitepress2' },
            { text: 'Frontmatter', link: '/webbuild/vitepress3' },
            { text: '域名托管到CF', link: '/webbuild/sp2cf' }
            ]
          },
          {
            text: 'Hexo', // 另一个分组标题
            items: [
              { text: '基础配置', link: 'webbuild/start-hexo' },
              { text: '进阶玩法', link: 'webbuild/autodeploy-hexo' }
            ]
          }
        ]
      },
      {
        // 分组 1
        text: '🧩 文档测试',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        // 分组 2
        text: '🔌 插件',
        items: [
          { text: 'vitepress-plugin-group-icons', link: '/vitepress-plugin-group-icons' },
          { text: 'vitepress-plugin-autobar', link: '/vitepress-plugin-autobar' }
        ]
      },
      {
        // 分组 3
        text: '📚 参考文档',
        items: [
          { text: 'VitePress 中文教程', link: 'https://vitepress.yiov.top/' },
          { text: 'XaviDocs 个人技术文档', link: 'https://xaviw.github.io/XaviDocs/%E5%B7%A5%E5%85%B7%E7%B3%BB%E5%88%97/VitePress%E6%90%AD%E5%BB%BA/%E5%9F%BA%E7%A1%80%E6%90%AD%E5%BB%BA.html' },
          { text: 'vitepress-theme-async', link: 'https://github.com/MaLuns/vitepress-theme-async' },
          { text: '唯知笔记', link: 'https://note.weizwz.com/' }
        ]
      }
    ]