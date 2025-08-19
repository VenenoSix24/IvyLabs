---
title: 从零到一，用 VitePress 打造你的个人网站（页面篇）
date: 2025-08-18 15:59:00
categories: 实用教程
tags:
  - VitePress
  - 个人网站
  - 前端
  - 教程
cover:
---
# **从零到一，用 VitePress 打造你的个人网站（页面篇）**

## **前言**

在《基础篇》中，我们已经成功初始化并运行了一个 VitePress 网站。现在，它还只是一个“毛坯房”。本篇文章将作为一份详尽的“装修指南”，带你逐一了解并配置 VitePress 的各项功能，将你的网站从“能用”变为“好用”且“好看”。

## **一、 站点全局配置：定义你的网站身份**

### **1. 元数据 (Metadata)**

这是最基础也最重要的配置，包括网站的语言、标题和描述。

```TypeScript
// .vitepress/config.mts
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN', // 网站语言
  title: "IvyLabs", // 网站标题，会显示在浏览器标签页上
  description: "一个开发者与创造者的数字空间", // 网站描述，对 SEO 很重要
})
```

- `lang`: 帮助浏览器和搜索引擎理解你的网站语言，中文站点请使用 `zh-CN`。
- `title`: 将作为所有页面的标题后缀，例如“首页 | IvyLabs”。
- `description`: 会被渲染为 `<meta>` 标签，是搜索引擎了解你网站内容的关键。

### **2. 浏览器标签页图标 (Favicon)**

想让你的网站在浏览器标签页里拥有一个独特的 Logo 吗？

1. 在 `docs` 目录下创建一个 `public` 文件夹。
2. 将你的图标文件（如 `logo.png` 或 `favicon.ico`）放入 `public` 文件夹。
3. 在配置中添加 `head` 选项：

```TypeScript
// .vitepress/config.mts
export default defineConfig({
  // ...
  head: [
    // 设置浏览器标签页的图标
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
})
```

> **路径提示**：`public` 目录下的文件在构建时会被复制到网站根目录。因此，我们用 `/logo.png` 这样的根路径来引用它，而不是 `../public/logo.png`。

### **3. 深色模式 (Dark Mode)**

VitePress 内置了优秀的的深色模式支持，你可以通过 `appearance` 选项控制它。

```TypeScript
// .vitepress/config.mts
export default defineConfig({
  // ...
  // appearance: true,   // 默认值，开启深色模式切换，并以系统设置为初始主题
  appearance: 'dark',    // 强制网站初始为深色模式
  // appearance: false,  // 完全禁用深色模式切换功能
})
```

对于个人博客或作品集，保留切换功能（即 `true` 或不设置）是最佳选择。



## **二、 主题配置 (`themeConfig`)：精雕细琢你的网站外观**

大部分的外观和交互功能都在 `themeConfig` 对象中配置。这里是定制化的核心区域。

### **1. Logo 与站点标题**

在导航栏左上角设置你的品牌 Logo 和标题。

```TypeScript
// .vitepress/config.mts
export default defineConfig({
  // ...
  themeConfig: {
    // 导航栏左侧的 Logo
    // public 目录下的文件，路径始终以 / 开头
    logo: '/logo.png',

    // 导航栏左侧的标题
    // siteTitle: 'IvyLabs', // 可以自定义标题
    // siteTitle: false, // 设置为 false 可以隐藏标题
  },
})
```

### **2. 顶部导航栏 (`nav`)**

导航是引导用户探索你网站的关键。

- **基础导航**：包含内部链接、外部链接。

  ```TypeScript
  // .vitepress/config.mts
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/articles/' }, // 内部链接
      // 外部链接会自动添加 '↗' 图标
      { text: 'GitHub', link: 'https://github.com/VenenoSix24' },
    ],
  }
  ```

如果不喜欢外部链接的箭头 `↗`  图标，可以选择关闭，`noIcon: true` 。

```TypeScript
{ text: 'VitePress', link: 'https://vitepress.dev/zh/' , noIcon: true },
```

- **下拉菜单**：当你有多个相关页面时，使用下拉菜单进行组织，添加 `iteams` 即可。

  ```TypeScript
  // .vitepress/config.mts
  themeConfig: {
    nav: [
  	{ text: '首页', link: '/' },
      {
        text: '学习笔记',
        items: [
          { text: '前端', link: '/notes/frontend' },
          { text: '后端', link: '/notes/backend' },
          { text: '算法', link: '/notes/algorithm' }
        ]
      }
    ],
  }
  ```
- **带分组的下拉菜单**：对于更复杂的结构，可以在下拉菜单中再次分组。

  ```TypeScript
  // .vitepress/config.mts
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '学习笔记',
        items: [
          {
            text: 'Web 开发', // 分组标题
            items: [
              { text: '前端', link: '/notes/frontend' },
              { text: '后端', link: '/notes/backend' },
            ]
          },
          {
            text: '基础学科', // 另一个分组标题
            items: [
              { text: '算法', link: '/notes/algorithm' },
            ]
          }
        ]
      }
    ],
  }
  ```

### **3. 社交链接 (`socialLinks`)**

在导航栏右侧展示你的社交媒体图标，方便他人关注你。

```TypeScript
// .vitepress/config.mts
themeConfig: {
  socialLinks: [
    { icon: 'github', link: 'https://github.com/' },
    { icon: 'x', link: 'https://x.com/' },
    { icon: 'discord', link: 'https://discord.com/' },
    // 你还可以添加 'discord', 'facebook', 'youtube' 等内置图标
    // 自定义 SVG 图标
    {
      icon: {
        svg: '<svg>...</svg>' // 在这里粘贴你的 SVG 代码
      },
      link: 'https://juejin.cn/',
      // 为图标添加描述，有助于无障碍访问
      ariaLabel: '我的掘金'
    }
  ],
}
```

> **自定义 SVG**：你可以从 [Iconfont](https://www.iconfont.cn/) 或 [icones](https://icones.js.org/) 等网站找到你需要的图标，复制其 SVG 源码并粘贴到配置中，实现无限扩展。

### **4. 侧边栏 (`sidebar`)**

VitePress 的侧边栏配置极其灵活，主要分为两种核心模式：**全局侧边栏**和**多路径侧边栏**。

#### **全局侧边栏**

当你的网站内容比较单一，或者所有页面都可以共享同一套导航结构时，可以使用这种最简单的配置。它的值是一个数组 `[]`。

- **单个分组**

  最基础的形式，所有链接都在一个分组内。

  ```TypeScript
  // .vitepress/config.mts
  themeConfig: {
    sidebar: [
      {
        text: '教程指南', // 分组标题
        items: [
          { text: '前言', link: '/preface' },
          { text: '快速上手', link: '/getting-started' },
          { text: '配置', link: '/configuration' },
          { text: '页面', link: '/page' },
        ],
      },
    ],
  }
  ```
- **多个分组**

  当链接较多时，你可以创建多个分组来使结构更有条理。

  ```TypeScript
  // .vitepress/config.mts
  themeConfig: {
    sidebar: [
      {
        text: '基础配置',
        items: [
          { text: '快速上手', link: '/getting-started' },
          { text: '配置', link: '/configuration' },
        ],
      },
      {
        text: '进阶玩法',
        items: [
          { text: 'Markdown 扩展', link: '/markdown-extensions' },
          { text: '静态资源处理', link: '/asset-handling' },
        ],
      },
    ],
  }
  ```

#### **多路径侧边栏**

这是构建复杂文档站点的**最佳实践**。你可以为不同的内容目录（路径）提供完全独立的侧边栏。它的值是一个对象 `{}`。

**1. 规划你的文件目录**

首先，你需要一个清晰的文件结构。例如，我们有两个内容区：“指南 (`guide`)” 和 “配置参考 (`config`)”。

```
.
├─ docs/
│  ├─ guide/
│  │  ├─ index.md
│  │  ├─ one.md
│  │  └─ two.md
│  ├─ config/
│  │  ├─ index.md
│  │  ├─ three.md
│  │  └─ four.md
└─ .vitepress/
   └─ config.mts
```

**2. 进行配置**

现在，在 `sidebar` 选项中，我们使用**路径作为 `key`**，侧边栏数组作为 `value`。

```TypeScript
// .vitepress/config.mts
themeConfig: {
  sidebar: {
    // 当用户在 `guide` 目录下拉取页面时，会显示此侧边栏
    '/guide/': [
      {
        text: '开发指南',
        items: [
          { text: '指南首页', link: '/guide/' }, // '/guide/index.md'
          { text: '第一篇', link: '/guide/one' },   // '/guide/one.md'
          { text: '第二篇', link: '/guide/two' }    // '/guide/two.md'
        ],
      },
    ],
  
    // 当用户在 `config` 目录下拉取页面时，会显示此侧边栏
    '/config/': [
      {
        text: '配置参考',
        items: [
          { text: '配置首页', link: '/config/' },
          { text: '第三个配置', link: '/config/three' },
          { text: '第四个配置', link: '/config/four' }
        ],
      },
    ],
  },
}
```

**工作原理**： 当用户访问一个页面时，VitePress 会检查该页面的 URL。如果 URL 以 `/guide/` 开头，它就会自动加载并显示为 `/guide/` 配置的侧边栏。访问 `/config/` 目录下的页面时同理。这样就实现了不同内容区域侧边栏的隔离。

#### **侧边栏行为微调**

无论使用哪种模式，你都可以对侧边栏的分组进行微调。

- **分组可折叠 (`collapsed`)**

  对于内容超长的分组，可以设置其为可折叠状态，以保持界面整洁。

  ```TypeScript
  // .vitepress/config.mts
  themeConfig: {
    sidebar: [
      {
        text: '这是一个很长的分组',
        // 设置为 false，该分组默认展开。
        // 设置为 true，该分组默认折叠。
        // 如果不设置，默认为 true (折叠)。
        collapsed: false,
        items: [ /* ...海量链接... */ ]
      },
    ],
  }
  ```

#### **移动端 UI 文本定制**

VitePress 还允许你定制移动端视图下的一些默认文本，让体验更本地化。

```TypeScript
// .vitepress/config.mts
themeConfig: {
  // 移动端侧边栏菜单的标题，默认是 "Menu"
  sidebarMenuLabel: '文章目录',

  // 点击返回顶部按钮的文字，默认是 "Return to top"
  returnToTopLabel: '返回顶部',
},
```

### **5. 搜索 (`search`)**

VitePress 提供开箱即用的本地搜索功能。

```TypeScript
// .vitepress/config.mts
themeConfig: {
  search: {
    provider: 'local',
    options: {
  
      // 多语言搜索支持
      locales: {
        zh: {
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档'
            },
            modal: {
              noResultsText: '无法找到相关结果',
              resetButtonTitle: '清除查询条件',
              footer: {
                selectText: '选择',
                navigateText: '切换'
              }
            }
          }
        }
      }
    }
  },
}
```

对于个人网站，本地搜索 (`local`) 完全足够。如果你有更专业的需求，可以考虑配置 [Algolia DocSearch](https://docsearch.algolia.com/)。



## **三、 页面增强配置：提升阅读体验**

这些配置主要用于增强内容页面的交互和元信息展示。

### **1. 右侧大纲**

文章页右侧的大纲（目录）能帮助读者快速定位内容。

```TypeScript
// .vitepress/config.mts
themeConfig: {
  outline: {
    level: [2, 4], // 显示从 h2 到 h4 的标题
    // level: 'deep', // 显示所有级别的标题
    label: '本页大纲' // 大纲的标题
  },
}
```

### **2. 在 GitHub 上编辑此页**

鼓励读者为你的内容贡献力量！这个链接会直接指向你仓库中对应文件的编辑页面。

```TypeScript
// .vitepress/config.mts
themeConfig: {
  editLink: {
    // :path 会被 VitePress 自动替换为当前页面的路径
    pattern: 'https://github.com/your-name/your-repo/edit/main/docs/:path',
    text: '在 GitHub 上编辑此页'
  },
}
```

### **3. 最后更新时间**

基于 Git 的提交记录，自动在每篇文章底部显示最后更新时间。

```TypeScript
// .vitepress/config.mts
export default defineConfig({
  lastUpdated: true,   // 必须先开启这个选项
  
  themeConfig: {
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',    // 可选值full、long、medium、short
        timeStyle: 'medium'     // 可选值full、long、medium、short
      }
    },
  }
})
```

> **注意**：这个功能需要你的项目是一个 Git 仓库，并且有提交历史。首次配置后，需要一次新的 commit 才能看到效果。

### **4. 上一页/下一页**

在文章底部自动生成指向上一篇和下一篇文章的导航链接。

```TypeScript
// .vitepress/config.mts
themeConfig: {
  //自定义上下一页名称
  docFooter: {
    prev: '上一篇',
    next: '下一篇'
  },
}
```

### **5. 页脚**

为你的网站添加全局页脚。

```TypeScript
// .vitepress/config.mts
themeConfig: {
  //页脚
  footer: {
    message: '基于 MIT 许可发布',
    // 使用 new Date().getFullYear() 可以动态更新年份
    copyright: `Copyright © 2020-${new Date().getFullYear()} IvyLabs`
  
    // 如果你有备案号，也可以在这里添加 HTML
    // copyright: `Copyright © 2023-${new Date().getFullYear()} IvyLabs | <a href="https://beian.miit.gov.cn/" target="_blank">京ICP备********号</a>`
  },
}
```



## **结语**

恭喜你！跟随本篇教程，你已经掌握了 VitePress 中绝大部分的页面配置项。现在你的网站不仅有了骨架，更有了精致的“装修”和丰富的交互功能。

从全局元信息到每一个UI组件的文案，你都可以通过 `.vitepress/config.mts` 文件进行深度定制。花点时间，将这些配置项逐一调整，打造出最符合你心意的个人网站吧！

在下一篇教程中，我们或许将探讨 **Frontmatter** 和 **Markdown 扩展** ，让你能够对单个页面进行更精细化的控制。敬请期待！
