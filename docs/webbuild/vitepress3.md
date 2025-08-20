---
title: 从零到一，用 VitePress 打造你的个人网站（Frontmatter 篇）
date: 2025-08-18 16:54:00
categories: 实用教程
tags:
  - VitePress
  - 个人网站
  - 前端
  - 教程
cover:
---

# **从零到一，用 VitePress 打造你的个人网站（Frontmatter）**

## **前言**

如果说 `config.mts` 是网站的“全局总开关”，那么 **Frontmatter** 就是每个页面的“独立控制面板”。它允许我们在 Markdown 文件的最顶部，通过简单的 YAML 语法，覆盖全局配置、定义页面专属布局，并注入特定的元数据。

掌握了 Frontmatter，你就能轻松地将某个页面设置为独特的首页样式，或者在另一篇文章中隐藏侧边栏，甚至为特定页面添加独立的 SEO 关键词。

## **一、 什么是 Frontmatter？**

Frontmatter 是位于 Markdown 文件最顶部的，由三短划线 `` 包裹的一块 YAML 代码块。VitePress 会读取这块区域的内容，并用它来渲染当前页面。

**基本语法：**

```YAML

# 这里是 YAML 格式的键值对
key: value
another_key:
  nested_key: "hello"


# 这里开始是你的 Markdown正文
...
```



## **二、 `layout`：决定页面的“模板”**

`layout` 是最基础也是最重要的 Frontmatter 属性，它决定了当前页面使用哪一套“模板”进行渲染。

```YAML

layout: doc

```

VitePress 内置了三种布局：

- **`doc` (默认)**: 标准的文档页面布局。包含导航栏、侧边栏、大纲、编辑链接、上下页导航等所有你在 `themeConfig` 中配置过的元素。如果你不写 `layout`，默认就是它。
- **`home`**: 专为首页设计的特殊布局。它会启用 `hero` 和 `features` 等首页专属配置项。我们在《基础篇》中配置的 `index.md` 就是用的这个布局。
- **`page`**: 一个“干净”的页面布局。它保留了导航栏和页脚，但移除了侧边栏、编辑链接等文档特有的元素。非常适合用于制作“关于我”、“友链”等独立页面。



## **三、 首页专属配置 (`layout: home`)**

> **请注意**：以下 `hero` 和 `features` 配置项，**仅在 `layout: home` 时生效**！

### **1. `hero` 区域**

`hero` 区域是访客进入你网站时第一眼看到的核心内容，包含了标题、标语、图片和号召性用语按钮。

```YAML

layout: home
hero:
  name: Ivy Labs
  text: "一个开发者与创造者的数字空间"
  tagline: 热衷于探索技术边界，构建实用且有趣的应用。
  image:
    src: /logo.png # 图片路径，相对于 public 目录
    alt: IvyLabs Logo
  actions:
    - theme: brand # 主题色按钮
      text: 开始学习
      link: /getting-started
    - theme: alt # 次要色按钮
      text: 在 GitHub 上查看
      link: https://github.com/your-repo

```

### **2. `features` 区域**

`features` 用于在 `hero` 区域下方创建一个特性展示网格，非常适合用来陈列你的核心项目或网站亮点。

特性可以使用  [Emoji 表情](https://www.emojiall.com/zh-hans/)、图片以及 SVG 创建图形

- SVG 图形：[iconfont](https://www.iconfont.cn/)、[xicons](https://www.xicons.org/#/zh-CN)、[iconpark](https://iconpark.oceanengine.com/official)

```YAML

layout: features
features:
  - icon: 📝 # 可以是 Emoji
    title: 专注于您的内容
    details: 只需使用 Markdown 即可轻松创建精美的文档网站。
  - icon:
      # 可以为深色/浅色模式提供不同图片
      dark: /logo-dark.png
      light: /logo-light.png
    title: 享受 Vite 的极速 DX
    details: 即时服务器启动，闪电般的热更新。
    link: https://vitejs.dev # 为这个特性添加外部链接跳转
    linkText: 了解 Vite # 链接按钮的文字
  - icon: <svg>...</svg> # 也可以是原始 SVG 代码
    title: 使用 Vue 进行定制
    details: 直接在 Markdown 中使用 Vue 语法和组件。

```



## **四、 通用页面配置 (适用于 `doc` 和 `page` 布局)**

这些配置可以用于任何非首页的普通页面，让你对单个页面的 UI 和元数据进行微调。

### **1. UI 元素显隐控制**

有时候，你希望某个特定页面更“纯粹”，可以单独关闭全局开启的某些 UI 元素。

```YAML

# 在这个页面上，不显示侧边栏
sidebar: false

# 也不显示页脚
footer: false

# 同时关闭“编辑本页”链接
editLink: false

# 关闭最后更新时间
lastUpdated: false

# 你甚至可以隐藏整个导航栏
navbar: false

```

### **2. 内容导航微调**

- **大纲**
  覆盖全局配置，为当前页面设置不同深度的大纲。
  ```YAML
  
  # 只显示 h2 和 h3 标题
  outline: [2, 3]

  # 或者显示所有级别的标题
  # outline: 'deep'

  # 在这个页面上大纲显示在左侧
  # aside: left

  # 甚至在这个页面上彻底关闭大纲
  # outline: false
  
  ```
- **上/下页链接**
  VitePress 会根据侧边栏顺序自动生成上下页链接。但你也可以手动指定它们，创造一条自定义的阅读路径。
  ```YAML
  
  # 只修改显示的文字
  prev: 上一篇：安装指南
  next: 下一篇：核心概念

  # 或者，完全自定义文字和链接
  prev:
    text: 返回基础配置
    link: /configuration
  next:
    text: 探索 Markdown 扩展
    link: /markdown-extensions

  # 关闭上/下页显示
  prev: false
  next: false
  
  ```

### **3. 高级技巧**

- **`head`：注入页面专属元信息**
  这是实现**单页面 SEO 优化**的利器。你可以为当前页面注入独有的 `<meta>` 标签或其他 `<head>` 内的标签。
  ```YAML
  
  head:
    - - meta
      - name: keywords # 关键词
        content: VitePress, Frontmatter, 教程
    - - meta
      - name: og:title # Open Graph 协议标题，用于社交分享
        content: VitePress Frontmatter 完全指南
  
  ```
- **`pageClass`：实现页面专属样式**
  想让某个页面的背景与众不同吗？`pageClass` 可以帮你。
  ```YAML
  
  pageClass: special-background-page
  
  ```
  VitePress 会将 `special-background-page` 这个类名添加到当前页面的根 `<div>` 元素上。然后，你就可以在自定义 CSS 文件中为它编写专属样式了：
  ```CSS
  /* .vitepress/theme/custom.css */
  .special-background-page {
    background: linear-gradient(to right, #74ebd5, #acb6e5);
  }
  ```



## **结语**

Frontmatter 是 VitePress 赋予每个 Markdown 页面的“超能力”。通过它，我们可以跳出全局配置的框架，实现从布局模板到 UI 细节，再到 SEO 和样式的深度定制。

现在，你已经集齐了**全局配置 (`config.mts`)** 和**页面级配置 (Frontmatter)** 两大“神器”。尝试将它们结合起来，去创造一个布局多变、细节丰富的网站吧！

在我们的下一篇文章中，将深入 Markdown 的世界，探索 VitePress 提供的各种语法扩展和在 Markdown 中使用 Vue 组件的强大能力。这将是内容创作的终极指南！
