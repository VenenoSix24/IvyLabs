import type { DefaultTheme } from 'vitepress'

// 使用 DefaultTheme.NavItem 类型，可以获得类型提示和校验
export const nav: DefaultTheme.NavItem[] = [
      { text: '首页', link: '/' },
      { text: '导航', link: '/nav' },
      { text: '链接汇总', link: '/mylink' },
      {
        text: '个人项目',
        items: [
          { text: '我去抢个座', link: '/feature/igolib' },
          { text: '总之就是非常可爱', link: '/feature/kawaii' },
          { text: '黑苹果 OC EFI', link: '/feature/ocefi' },
          { text: '个人密码生成器', link: '/feature/ts' },
          { text: '个人主页模板', link: '/feature/home' },
          { text: '开发者在线工具', link: '/feature/tool' },
          { text: '打瓦加密器', link: '/feature/dv' },
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
      { text: '关于', link: '/about' },
      { text: '我', link: 'https://m.776624.xyz' }
    ]