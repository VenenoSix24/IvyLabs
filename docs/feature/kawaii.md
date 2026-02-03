---
# https://vitepress.dev/reference/default-theme-home-page
# 指定使用 VitePress 的首页布局
layout: home
pageClass: home-page

# 个人名片区域 (Hero Section)
hero:
  name: "总之就是非常可爱"
  text: "一部动漫，一次启发"
  tagline: 可定制化的个人网站/主页/博客模板，追求极致美观
  image:
    src: "/kawaii5.png"
    alt: Ivy Labs
  actions:
    - theme: brand
      text: 在线体验
      link: "https://kawaii.ivyris.top"
    - theme: alt
      text: 快速上手
      link: /feature/kawaii#📦-安装与使用
    - theme: alt
      text: 了解更多
      link: "https://github.com/VenenoSix24/kawaii-homepage"
# 项目展示区域 (Features Section)
# features:
#   - icon: 🤖
#     title: 我去抢个座
#     details: 基于 Python 实现的图书馆预约抢座系统，简化每日重复操作。
#     link: "https://github.com/VenenoSix24/igolib-ldu"
#   - icon: 🌸
#     title: 总之就是非常可爱
#     details: 一个高度可定制化的个人网站/主页/博客模板，追求极致美观。
#     link: "https://github.com/VenenoSix24/kawaii-homepage"
#   - icon: 🍎
#     title: Hackintosh OC EFI
#     details: 适配微星 B350M 迫击炮主板与 AMD CPU/GPU 的黑苹果 OpenCore 配置。
#     link: "https://github.com/VenenoSix24/MSI-B350M-MORTAR-Hackintosh-OpenCore-EFI"
#   - icon: 🎲
#     title: 打瓦加密器
#     details: 一个有趣的文本加密工具，使用“打”和“瓦”作为二进制来进行加解密。
#     link: "https://github.com/VenenoSix24/DV-Encrypter"
---

> [!IMPORTANT]
>
> 注意！**2.0版本**界面进行了**重构**，如果喜欢1.0版本请切换到[**1.0分支**](https://github.com/VenenoSix24/kawaii-homepage/tree/1.0)！

<div align="center">

一个美观、响应式的个人网站/主页/博客，基于Vue3、Tailwind CSS和Vite构建，融入动漫《总之就是非常可爱》元素。

[🚀 Demo 2.0](https://kawaii.ivyris.top/) | [📖 文档](https://github.com/VenenoSix24/kawaii-homepage/blob/main/README.md) | [🐛 问题反馈](https://github.com/VenenoSix24/kawaii-homepage/issues)

**Ver 2.0：[预览](https://kawaii.ivyris.top/)**

![kawaii2.0-p1.png](https://s2.loli.net/2026/02/02/iSQr9loRjFJpw8h.png)



**Ver1.0：[预览](https://6aig.cn/)**

![网站预览](https://s2.loli.net/2025/05/17/usnaUKvDZ8k93FX.jpg)

</div>

- 🌸 **Kawaii 风格设计** - 采用柔和的马卡龙色系和圆角卡片，打造温馨治愈的视觉体验
- 🏃‍♂️ **流畅动画** - 集成 AOS 滚动动画、Blob 背景动画及平滑的微交互反馈
- 🌙 **深色模式** - 完美适配日间/夜间模式，提供舒适的阅读体验
- 📱 **完全响应式** - 精心优化的布局，完美适配移动端、平板和桌面端
- 📈 **打包分析** - 集成 `rollup-plugin-visualizer` 以分析构建产物

## 🚀 v2.0 升级亮点

### 🎨 界面深度重构
- **全新沉浸式视觉**：引入全新 Hero 布局、动态弥散光背景与微交互装饰，视觉体验更佳。
- **Glassmorphism UI** - 导航栏、底部和卡片均采用现代化的毛玻璃特效
- **美学布局升级**：关于我、精选作品与文章列表均重构为更具设计感的非对称式与模块化布局。
- **全站风格统一**：重塑了毛玻璃特效，并统一了默认封面图与视觉遮罩逻辑。

## 🛠️ 技术栈

- **前端框架**: [Vue 3](https://v3.vuejs.org/) 
- **路由管理**: [Vue Router 4](https://router.vuejs.org/)
- **CSS框架**: [Tailwind CSS](https://tailwindcss.com/)
- **排版**: [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- **构建工具**: [Vite](https://vitejs.dev/)
- **打包分析**: [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer)
- **图标库**: [Font Awesome](https://fontawesome.com/)
- **动画库**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Markdown解析**: [Marked](https://marked.js.org/)

## 📦 安装与使用

### 前提条件

- Node.js (v16.0.0或更高版本)
- npm 或 yarn

### 克隆和安装

```bash
# 克隆仓库
git clone https://github.com/VenenoSix24/kawaii-homepage.git
cd kawaii-homepage

# 安装依赖
npm install
```

在开始开发前，请务必先完成下面的 **“配置 GitHub 项目自动同步”** 步骤。

### 本地开发

```bash
npm run dev
```

访问 `http://localhost:3000` (或终端提示的端口) 查看您的网站。

### 创建一篇新文章

只需在终端运行：

```bash
npm run new
```

脚本会交互式地提示您输入文章标题，然后自动在 `src/md/` 目录下创建带有预设元数据模板的 Markdown 文件。

### 构建与分析

```bash
npm run build
```

该命令会执行生产环境的构建，并自动在浏览器中打开一个名为 `stats.html` 的打包分析报告，让您能清晰地看到项目中各个模块的体积。构建完成后，`dist` 目录中的文件即可部署。

## 🔄 项目结构

```
/
├── dist/                 # 构建输出目录
├── public/               # 静态资源 (不会被打包处理)
├── scripts/              # 自动化脚本
│   └── new-post.js       # 创建新文章的脚本
├── src/
│   ├── assets/           # 样式和资源文件
│   ├── components/       # Vue组件
│   ├── md/               # Markdown文章源文件目录
│   ├── router/           # 路由配置
│   ├── utils/            # 工具函数 (Markdown处理)
│   ├── views/            # 页面视图组件
│   └── ...
├── package.json          # 项目依赖和脚本
└── ...
```

## 🎨 自定义网站内容

### 1. 配置 GitHub 项目自动同步（重要）

本项目的“作品集”页面是动态的，它会自动拉取并展示您在 GitHub 上固定的(Pinned)仓库。要使其正常工作，您需要进行如下配置：

**a. 创建 GitHub 个人访问令牌 (PAT)**

* 前往 GitHub 的 `Settings` > `Developer settings` > `Personal access tokens` > `Tokens (classic)`。
* 生成一个新令牌，**权限 (scopes) 只勾选 `public_repo`** 即可。
* **请务必复制并妥善保管生成的令牌** ，因为它只会出现一次。

**b. 创建本地环境变量文件**

* 在项目根目录下，创建一个名为 `.env.local` 的文件。
* 在文件中添加以下内容，并填入你的信息：
  **代码段**

  ```
  # .env.local
  VITE_GITHUB_USERNAME="你的GitHub用户名"
  VITE_GITHUB_TOKEN="粘贴你刚刚生成的ghp_开头的令牌"
  ```
* `.env.local` 文件已被添加到 `.gitignore`，不会被上传到代码仓库，保证了令牌的安全。

**c. 配置 `site.js`**

* 打开 `src/config/site.js` 文件，找到 `site` 对象，并确保 `githubUsername` 字段已正确填写你的 GitHub 用户名。
* 如果没有 `src/config/site.js` 文件，请将 `src/config/site.example.js` 重命名为 `site.js` 。

完成以上步骤并重启开发服务器后，你的作品集页面就会自动显示你的 GitHub Pinned 项目了。

### 2. 作品集页面配置

在 `src/config/site.js` 中找到 `projectsPage` 进行修改

**两种模式：**

*  `hybrid` : 显示 GitHub Pinned 项目 + 下方的自定义项目列表
*  `custom` : 只显示下方自定义项目列表中的项目

**自定义项目列表：**

```
customProjects: [
  { repo: "VenenoSix24/kawaii-homepage" },
  { repo: "XXXXXXXX/xxxxxx" },
  // 您可以在这里添加任何想补充的公开仓库
  // 格式为: "作者名/仓库名"
]
```

### 3. 添加和管理文章

流程已完全自动化：

1. **创建文章** : 在终端运行 `npm run new` 并根据提示输入标题。
2. **编写内容** : 打开 `src/md/` 目录下新生成的文件，补充 `category`, `tags` 等元数据，然后开始撰写正文。

网站会自动发现并展示你的新文章，无需任何额外配置。

### 4. 修改网站其他信息

大部分网站内容都可以在中央配置文件 `src/config/site.js` 中管理，包括：

* 网站标题、作者、联系方式等
* 社交媒体链接
* 导航菜单项
* **首页展示的精选项目** (注意：这里是手动配置的，与作品集页面的自动同步不同)
* 《总之就是非常可爱》页面的所有内容

### 5. 修改主题颜色与字体

所有设计系统的核心定义都在 `tailwind.config.js` 文件中。你可以在此文件中：

* 修改 `theme.extend.colors` 中的 `primary`, `secondary` 等颜色值。
* 修改 `theme.extend.fontFamily` 来更换网站的全局字体。

## 🚀 部署指南

该项目可以轻松部署到任何支持静态网站的平台，如 Vercel, Netlify, GitHub Pages 或 您自己的服务器。

#### **通用部署步骤**

1. 运行 `npm run build` 构建项目。
2. 将生成的 `dist` 目录上传到您的托管平台。
3. 确保您的服务器配置能正确处理单页应用（SPA）的路由，通常需要将所有未匹配的路径重定向到 `index.html`。

#### 自行部署服务器配置（URL 重写规则）

若您将 `dist` 目录部署到自己的 Nginx 或 Apache 服务器，为确保 Vue Router 的 `history` 模式能正常工作（即在任意页面刷新时不会 404），您需要添加 URL 重写规则。

**对于 Vercel 等托管平台:**

项目根目录已内置 `vercel.json` ，直接部署即可，其他托管平台请自行参考。

**对于 Nginx:**

在您的站点配置文件中，向 `location /` 块添加 `try_files` 指令：

```nginx
server {
    # ... 其他配置 ...

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

修改配置后，请重新加载 Nginx 服务。

**对于 Apache:**

在 `dist` 目录中（与 `index.html` 同级）创建一个名为 `.htaccess` 的文件，并添加以下内容：

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### **通过 Vercel 手动部署**

1. **首先 Fork 本仓库到你的账号**
2. **登录 Vercel 并创建项目**：
   - 使用您的 GitHub 账户登录 [Vercel](https://vercel.com)。
   - 在个人 Dashboard 页面，点击 “**Add New...**” -> “**Project**”。
3. **导入 Git 仓库**：
   - 在 “Import Git Repository” 列表中，选择您 Fork 的项目仓库，点击 “**Import**”。
4. **配置项目**：
   - **Framework Preset**：Vercel 将自动识别为 `Vite` 并完成预设，无需修改。
   - **Build and Output Settings**：构建与输出目录设置将自动填充，确认无误即可。
   - **Environment Variables (环境变量)**：此项为必需配置。请展开此部分，并添加以下两个环境变量：
     - **`VITE_GITHUB_USERNAME`**: 您的 GitHub 用户名。
     - **`VITE_GITHUB_TOKEN`**: 您创建的、拥有 `public_repo` 权限的个人访问令牌 (Personal Access Token)。
5. **执行部署**：
   - 点击 “**Deploy**” 按钮，Vercel 将自动执行 `npm install` 和 `npm run build` 命令。
   - 部署成功后，Vercel 将提供一个 `.vercel.app` 的公开访问域名或者自定义你的个人域名。
   - 后续任何向 `main` 分支的推送，都将自动触发 Vercel 的重新部署。

## 🙏 鸣谢

* [Vue.js团队](https://vuejs.org/)
* [Tailwind CSS团队](https://tailwindcss.com/)
* [开源社区](https://github.com/)

---

<div align="center">
Made with ❤️ by <a href="https://github.com/VenenoSix24">VenenoSix24</a>
</div>
