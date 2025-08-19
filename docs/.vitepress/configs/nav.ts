import type { DefaultTheme } from 'vitepress'

// 使用 DefaultTheme.NavItem 类型，可以获得类型提示和校验
export const nav: DefaultTheme.NavItem[] = [
      { text: '首页', link: '/' },
      { text: '导航', link: '/nav' },
      {
        text: '指南',
        items: [
          { text: '快速上手', link: '/vitepress1' },
          { text: '页面配置', link: '/vitepress2' },
          { text: 'Frontmatter', link: '/vitepress3' }
        ]
      },
      { text: '关于', link: '/about' },
      { text: '我', link: 'https://m.776624.xyz' }
    ]