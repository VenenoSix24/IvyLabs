---
title: 从零到一，用 VitePress 打造你的个人网站（基础篇）
date: 2025-08-18 11:49:00
categories: 实用教程
tags:
  - VitePress
  - 个人网站
  - 前端
  - 教程
cover:
---

# **从零到一，用 VitePress 打造你的个人网站（基础篇）**

## **前言：寻找完美的个人网站解决方案**

![2025-08-13 23.16.11_compressed.png](https://s2.loli.net/2025/08/13/xZ5RYIHwJyMTSoe.png)

1. **快**：访问速度和本地开发速度都得快如闪电。
2. **简**：外观设计简约，内容为王。
3. **易**：更新内容就像写笔记一样简单，最好只用 Markdown。
4. **省**：能免费、方便地部署。

在对比了市面上众多方案后，我最终选择了 **VitePress**。它不仅完美契合我的所有要求，其“为内容而生”的哲学和开箱即用的精美主题更是让我一见倾心。

这篇教程将带你从零开始，复刻我的个人作品集网站 **IvyLabs** 的完整搭建过程。无论你是想建立个人品牌，还是纯粹想记录自己的项目，相信都能从中获益。

## **第一步：环境准备与项目初始化**

### **讨论：为什么推荐使用 PNPM？**

在初始化项目前，我想先回答一个问题：“npm, yarn, pnpm 我该用哪个？”

虽然 `npm` 是 Node.js 自带的包管理器，但我在这篇教程中**强烈推荐使用 `pnpm`**。

- **速度快**：`pnpm` 通过一个全局存储来管理依赖，避免了重复下载，安装速度极快。
- **节省磁盘空间**：依赖文件通过硬链接或符号链接的方式链接到项目中，极大减少了 `node_modules` 文件夹的体积。

简单来说，`pnpm` 更快、更高效。你可以通过 `npm install -g pnpm` 来全局安装它。

### **前置准备**

- [Node.js](https://nodejs.org/) 18 及以上版本。
- 通过命令行界面 (CLI) 访问 VitePress 的终端。
- 支持  [Markdown](https://en.wikipedia.org/wiki/Markdown)  语法的编辑器。
  - 推荐  [VSCode](https://code.visualstudio.com/)  及其[官方 Vue 扩展](https://marketplace.visualstudio.com/items?itemName=Vue.volar)。

### **开始初始化**

现在，让我们正式开始。

#### 安装 pnpm （可选）

本文使用 `npnm` 进行搭建，如果你使用 `npm` `yarn` 等，请自行修改。

```Bash
# 1. 全局安装 pnpm (如果尚未安装)
npm install -g pnpm
```

若出现以下提示：

```Bash
sixig@VenenoSix24deMac-Pro IvyLabs % npm install -g pnpm
npm error code EACCES
npm error syscall mkdir
npm error path /usr/local/lib/node_modules/pnpm
npm error errno -13
npm error Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/pnpm'
npm error     at async mkdir (node:internal/fs/promises:852:10)
npm error     at async /usr/local/lib/node_modules/npm/node_modules/@npmcli/arborist/lib/arborist/reify.js:624:20
npm error     at async Promise.allSettled (index 0)
npm error     at async [reifyPackages] (/usr/local/lib/node_modules/npm/node_modules/@npmcli/arborist/lib/arborist/reify.js:325:11)
npm error     at async Arborist.reify (/usr/local/lib/node_modules/npm/node_modules/@npmcli/arborist/lib/arborist/reify.js:142:5)
npm error     at async Install.exec (/usr/local/lib/node_modules/npm/lib/commands/install.js:150:5)
npm error     at async Npm.exec (/usr/local/lib/node_modules/npm/lib/npm.js:207:9)
npm error     at async module.exports (/usr/local/lib/node_modules/npm/lib/cli/entry.js:74:5) {
npm error   errno: -13,
npm error   code: 'EACCES',
npm error   syscall: 'mkdir',
npm error   path: '/usr/local/lib/node_modules/pnpm'
npm error }
npm error
npm error The operation was rejected by your operating system.
npm error It is likely you do not have the permissions to access this file as the current user
npm error
npm error If you believe this might be a permissions issue, please double-check the
npm error permissions of the file and its containing directories, or try running
npm error the command again as root/Administrator.
npm error A complete log of this run can be found in: /Users/sixig/.npm/_logs/2025-08-18T04_20_57_761Z-debug-0.log
```

这个错误是因为你尝试在系统目录 (`/usr/local/lib/node_modules`) 安装全局包时没有足够的权限。

> 改用 `sudo` 解决：

```Bash
sudo npm install -g pnpm
```

#### 接下来开始安装 `VitePress`

##### **1. 创建项目目录**

首先，为你的项目创建一个专属文件夹。

```Bash
mkdir IvyLabs
cd IvyLabs
```

##### **2. 安装 VitePress 和 Vue**

现在，我们将 VitePress 添加到项目中

```Bash
# 使用 @next 来获取 VitePress 的最新版本
# -D 表示这是一个开发依赖 (dev dependency)
pnpm add -D vitepress@next
```

> **注意**：VitePress 是仅 ESM 的软件包。不要使用  `require()`  导入它，并确保最新的  `package.json`  包含  `"type": "module"`，或者更改相关文件的文件扩展名，例如  `.vitepress/config.js`  到  `.mjs`/`.mts`。更多详情请参考  [Vite 故障排除指南](http://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only)。此外，在异步 CJS 上下文中，可以使用  `await import('vitepress')`  代替。

##### **3. 运行初始化向导**

安装完成后，我们可以直接运行 VitePress 附带的命令行设置向导来生成基础配置。

```Bash
pnpm vitepress init
```

这个命令会启动一个交互式的向导。请根据提示回答以下问题（以下是我的选择，你可以根据自己情况调整）：

```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ● ./docs  (在 docs 目录下生成所有网站文件，这是最佳实践)
│
◇ Where should VitePress look for your markdown files?
│  ● ./docs
│
◇  Site title:
│  ● IvyLabs (你的网站标题)
│
◇  Site description:
│  ● 一个开发者与创造者的数字空间 (你的网站描述)
│
◇  Theme:
│  ● Default Theme (使用功能强大的默认主题)
│
◇  Use TypeScript for config and theme files?
│  ● Yes (强烈推荐！提供更好的类型检查和代码提示)
│
◇  Add VitePress npm scripts to package.json?
│  ● Yes (自动帮你添加 'docs:dev' 等命令)
│
◇ Add a prefix for VitePress npm scripts?
│  ● Yes
│
│ ◇ Prefix for VitePress npm scripts:
│  ● docs
│
└  Done! Now run pnpm run docs:dev and start writing.
```

> Vue 作为 peer dependency
>
> 如果打算使用 Vue 组件或 API 进行自定义，还应该明确地将  `vue`  安装为 dependency。

##### **4. 理解生成的文件结构**

向导执行完毕后，你的项目目录看起来应该是这样的：

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.mts             <-- VitePress 配置文件
│  ├─ api-examples.md           <-- 文章1
│  ├─ markdown-examples.md      <-- 文章2
│  └─ index.md                  <-- 你的首页
└─ package.json
```

- `docs`: 这是你网站的**根目录**，所有的 Markdown 文件和公共资源都放在这里。
- `.vitepress`: 这是 VitePress 的“大脑”，包含了所有的配置、缓存和构建输出。我们最常打交道的就是 `config.mts` 文件。
- `index.md`: 这就是网站的首页文件，我们后续会重点美化它。

生成的 HTML 页面会是这样：

```
api-examples.md         -->    /api-examples.html
markdown-examples.md    -->    /markdown-examples.html
index.md                -->    /index.html (可以通过 / 访问)
```

> **TIP**
>
> 默认情况下，VitePress 将其开发服务器缓存存储在  `.vitepress/cache`  中，并将生产构建输出存储在  `.vitepress/dist`  中。如果使用 Git，应该将它们添加到  `.gitignore`  文件中。也可以手动[配置](https://vitepress.dev/zh/reference/site-config#outdir)这些位置。

##### **5. 启动开发服务器！**

初始化向导已经在你的 `package.json` 文件中自动添加了如下脚本：

```JSON
// package.json
"scripts": {
  "docs:dev": "vitepress dev docs",
  "docs:build": "vitepress build docs",
  "docs:preview": "vitepress preview docs"
}
```

现在，让我们启动它！

```Bash
pnpm run docs:dev
```

终端会显示一个本地服务地址，通常是 `http://localhost:5173`。在浏览器中打开它，一个崭新的、基于最新 VitePress 版本的网站雏形就已经在你面前了！这个流程不仅是官方推荐的，也更加稳定和透明。

## **第二步：核心定制：打造你的专属首页 (`docs/index.md`)**

VitePress 的精髓在于通过 Markdown 的 `YAML Frontmatter` 来驱动页面。我们来把默认的首页 `docs/index.md` 彻底改造成 IvyLabs 的样子。

### **`index.md` 完整代码**

```Markdown

# 指定使用 VitePress 的首页布局
layout: home

# 个人名片区域 (Hero Section)
hero:
  name: "IvyLabs"
  text: "一个开发者与创造者的数字空间"
  tagline: 热衷于探索技术边界，构建实用且有趣的应用。这里记录着我的思考、实践与作品。
  image:
    src: /logo.svg # Logo 文件放在 docs/public/ 目录下
    alt: IvyLabs Logo
  actions:
    - theme: brand
      text: 开始探索
      link: '#projects' # 页面内锚点链接
    - theme: alt
      text: 了解更多
      link: '/about' # 指向 "关于我" 页面

# 项目展示区域 (Features Section)
features:
  - icon: 🤖
    title: 我去抢个座
    details: 基于 Python 实现的图书馆预约抢座系统，简化每日重复操作。
    link: 'https://github.com/VenenoSix24/igolib-ldu'
  - icon: 🌸
    title: 总之就是非常可爱
    details: 一个高度可定制化的个人网站/主页/博客模板，追求极致美观。
    link: 'https://github.com/VenenoSix24/kawaii-homepage'
  - icon: 🍎
    title: Hackintosh OC EFI
    details: 适配微星 B350M 迫击炮主板与 AMD CPU/GPU 的黑苹果 OpenCore 配置。
    link: 'https://github.com/VenenoSix24/MSI-B350M-MORTAR-Hackintosh-OpenCore-EFI'
  - icon: 🎲
    title: 打瓦加密器
    details: 一个有趣的文本加密工具，使用“打”和“瓦”作为二进制来进行加解密。
    link: 'https://github.com/VenenoSix24/DV-Encrypter'

```

### **代码深度解析：如何修改成你的内容？**

这段代码分为三个部分，我们逐一解析：

1. **`layout: home`**

   - **作用**：这是最重要的指令。它告诉 VitePress：“这个页面不是普通文章，请使用你内置的、专门为首页设计的漂亮布局来渲染它”。

2. **`hero` (个人名片区)**

   - **如何修改**：这是访客第一眼看到的内容，请务必用心填写。
   - `name`: 网站或你的名字。
   - `text`: 你的身份或一句话座右铭。
   - `tagline`: 更详细的描述，展示你的技能和热情。
   - `image`:
     - `src`: 你的头像或 Logo。**注意**：你需要将图片文件（如 `logo.svg`）放入 `docs/public/` 文件夹中。`public` 目录下的所有文件最终都会被复制到网站根目录，所以这里用 `/logo.svg` 来引用。
   - `actions`: 这是两个行为按钮。
     - `link: '#projects'`: 这种以 `#` 开头的链接是**页面内锚点**。它会平滑滚动到页面中 `id="projects"` 的元素位置。
     - `link: '/about'`: 这种以 `/` 开头的链接是**内部页面跳转**。它会跳转到 `docs/about.md` 这个页面。

3. **`features` (项目展示区)**

   - **如何修改**：这里是你的作品集核心。它是一个数组，每个 `{}` 包裹起来的部分就是一个项目卡片。
   - **要新增项目**：完整复制一个 `{}` 代码块，粘贴到数组中，然后修改内容。
   - **要删除项目**：直接删掉对应的 `{}` 代码块。
   - `icon`: 可以是 Emoji，也可以是自定义 SVG 图标代码，非常灵活。
   - `title`: 你的项目名称。
   - `details`: 1-2 句核心介绍。
   - `link`: 项目的跳转链接，可以是 GitHub 仓库、在线 Demo 或任何你想展示的网址。

## **第三步：全局配置 (`.vitepress/config.mts`)**

如果说 `index.md` 是网站的血肉，那么 `config.mts` (或 `.js`) 就是网站的灵魂。它控制着导航、社交链接、页脚等全局元素。

### **`config.mts` 完整代码**

```TypeScript
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IvyLabs",
  description: "一个开发者与创造者的数字空间",

  // head 配置，会注入到 HTML 的 <head> 标签中
  head: [
    // 添加网站图标 (favicon)
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '关于',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
    // VitePress 内置了 github, twitter, discord, facebook, youtube 等图标
      { icon: 'github', link: 'https://github.com/VenenoSix24' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-present IvyLabs'
    },
  }
})
```

### **配置解析与修改指南**

- `title` 和 `description`: 这是网站的元信息，对 SEO 非常重要，请务必修改成你自己的。
- `head`: 我在这里增加了一个 `favicon` 的配置。你需要准备一个 `favicon.ico` 文件并同样放在 `docs/public/` 目录下。
- `themeConfig.nav`: 顶部导航栏。你可以根据需要增删条目。比如，如果你暂时没有“文章”页，可以直接删掉 `{ text: '文章', link: '/articles/' }` 这一行。
- `themeConfig.socialLinks`: 社交链接。`icon` 字段可以直接使用 VitePress 内置的平台名称，它会自动渲染成对应的图标，非常方便。

## **第四步：部署上线：让世界看到你的作品**

本地开发完成后，就是激动人心的部署环节。我们以 Vercel 为例，它对 VitePress 的支持堪称完美。

1. **推送到 GitHub**：

   - 在 GitHub 上创建一个新的空仓库（比如 `IvyLabs`）。
   - 在你的本地项目文件夹中，执行 Git 命令，将代码推送到这个仓库。

2. **Vercel 一键导入**：

   - 登录 Vercel，点击 “Add New... -> Project”。
   - 选择 “Continue with Git”，然后选择你刚刚创建的 GitHub 仓库并导入。
   - Vercel 会自动识别出这是一个 VitePress 项目，并帮你填充好所有构建设置（`Framework Preset: VitePress`）。
   - 点击 “Deploy”，然后泡杯咖啡。

几分钟后，构建完成，Vercel 会为你生成一个 `.vercel.app` 的域名。现在，全世界都可以访问你的网站了！

## **结语与下一步**

恭喜你！从零开始，你已经成功搭建并上线了一个专业、美观且高性能的个人作品集网站。VitePress 的简洁与强大，让整个过程如行云流水。

但这仅仅是个开始，你还可以继续探索：

- **创建 `docs/about.md` 页面**，丰富你的个人介绍。
- **开始撰写文章**，在 `docs/articles/` 目录下创建你的第一篇博客。
- **探索 VitePress 的主题定制**，通过添加自定义 CSS 来微调网站的颜色和字体。
- **深入阅读 [VitePress 官方文档](https://vitepress.dev/)**，发掘更多高级功能。

希望这篇超详细的搭建记录能为你扫清障碍，点燃你打造个人品牌的火花。欢迎访问我的网站 **IvyLabs** [在这里插入你的网站链接] 和它的 [GitHub 源码链接]！
