import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { nav } from './configs'
import { sidebar } from './configs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Ivy Labs",
  description: "常春藤下，指绘星河",

  base: '/', //网站部署的路径，默认根目录
  lastUpdated: true, //首次配置不会立即生效，需git提交后爬取时间戳

  //markdown配置
  markdown: {

    // 组件插入h1标题下
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
          let htmlResult = slf.renderToken(tokens, idx, options);
          if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
          return htmlResult;
      },
      md.use(groupIconMdPlugin)
    },

    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },

  vite: {
    plugins: [
      groupIconVitePlugin()
    ],
  },

  // 站点地图
  sitemap: {
    hostname: 'https://你的网址.com',
  },

  // head 配置，会注入到 HTML 的 <head> 标签中
  head: [
    // 添加网站图标 (favicon)
    ['link', { rel: 'icon', href: '/logo-ivy0.png' }]
  ],

  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    //上次更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },

    //自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    //编辑本页
    editLink: {
      pattern: 'https://github.com/VenenoSix24/IvyLabs/edit/main/docs/:path', // 改成自己的仓库
      text: '在GitHub上编辑本页'
    },

    // 大纲
    outline: {
      level: [2,2], // 显示2-2级标题
      // level: 'deep', // 显示2-6级标题
      label: '当前页大纲' // 文字显示
    },

    //本地搜索
    search: {
      provider: 'local'
    },

    //左上角站点名 logo
    logo: '/logo-ivy0.png',
    // siteTitle: false, //是否标题隐藏

    //导航栏
    nav: nav,
    //侧边栏
    sidebar: sidebar,


    // 社交链接
    socialLinks: [
    // VitePress 内置了 github, twitter, discord, facebook, youtube 等图标
      { icon: 'github', link: 'https://github.com/VenenoSix24' },
      { icon: 'x', link: 'https://x.com/' }
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2020-${new Date().getFullYear()} present Ivy Labs`,
    },
  }
})
