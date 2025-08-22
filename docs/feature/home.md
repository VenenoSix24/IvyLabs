---
# https://vitepress.dev/reference/default-theme-home-page
# 指定使用 VitePress 的首页布局
layout: home
pageClass: home-page

# 个人名片区域 (Hero Section)
hero:
  name: "个人主页模板"
  text: "精心修改，不断打磨"
  tagline: 一个精美的个人主页模板，包含链接、作品、技能等模块
  image:
    src: "/home4.png"
    alt: Ivy Labs
  actions:
    - theme: brand
      text: 在线体验
      link: "https://m.ivyris.top"
    - theme: alt
      text: 快速上手
      link: /feature/home#🛠%EF%B8%8F-如何配置
    - theme: alt
      text: 了解更多
      link: "https://github.com/VenenoSix24/homepage"
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

## 📔 前言

这是基于 [ZYYO/homepage](https://github.com/ZYYO666/homepage) 项目修改的个人主页。

首先，非常感谢原作者 ZYYO 创造出如此简洁美观的模板。我在保留其核心设计理念的基础上，进行了一系列的修改，使其更易于配置和维护。

> **我的演示站**：[https://m.ivyris.top](https://m.ivyris.top)

- **PC 截图-1**

![](https://s2.loli.net/2025/08/17/J5UvNpkX96CjcxG.jpg)

- **PC 截图-2**

![](https://s2.loli.net/2025/08/17/NvdM5G3aVsFf1zg.jpg)

- **手机截图**

<img src="https://s2.loli.net/2025/08/17/iXGUpEe7zt2b5Zu.jpg"  />

## 🚀 我的主要修改

与原版相比，此版本主要有以下修改：

- **数据重构**:
  - 我将原版 HTML 中硬编码的所有个人信息、项目列表、时间线、技能图标等内容，全部抽离到了 `/static/js/data.js` 文件中。
  - 现在，你几乎可以通过修改这一个文件来定制整个网站，无需再改动 HTML 结构，极大地提升了可维护性。
- **视觉与交互升级**:
  - **切换主题**: 主题切换为自带的主题四（root.css）
  - **全新图标系统**: 引入了一整套风格统一的项目图标，并添加了全新的头像框，提升了整体视觉一致性。
  - **卡片样式精细化**: 对 `site` 和 `project` 两区的卡片进行了差异化设计，后者拥有更大的尺寸和字体，形成了更丰富的视觉层次。
  - **移动端体验优化**: 精确调整了移动端卡片的布局、间距和对齐方式，确保在小屏幕上也有优雅的阅读体验。
  - **动画优化**: 对项目卡片的 CSS 悬浮动画进行了微调，在保留原有趣味性的同时，确保了动画的流畅性。
- **性能与现代化**:
  - **图片压缩体积**: 对项目中大部分图片资源进行压缩，并统一改用体积更小的 `webp` 格式，加快了加载速度。
  - **代码健壮性**: 增加了对数据有效性的检查，确保即使 `data.js` 中部分数据缺失，页面也不会因此崩溃。

## ✨ ZYYO PHP 后台版

如果你需要一个功能更强大的后台来管理主页内容，原作者 **ZYYO** 开发了一个 PHP 后台版。

**后台版特色功能**：

- **在线管理**：通过后台方便地对图标、项目、标签、主题样式等所有内容进行增删改查。
- **功能开关**：可自由控制贪吃蛇、侧边栏、技能墙等模块的显示与隐藏。
- **主题细化**：支持在后台进行多主题切换，并细致修改所有主题细节。

这是一个增值版本，如果你认为这些功能对你有帮助，请考虑赞助并支持原作者 ZYYO 的辛勤劳动。

- **演示站** ：[https://zyyo.cc](https://zyyo.cc/)
- **后台演示地址**：[https://zyyo.cc/admin](https://zyyo.cc/admin)
- **账号**: `admin` / **密码**: `123456`
- **联系作者 QQ**: `3509679579`

## 🛠️ 如何配置

1. **核心配置**：**打开 `/static/js/data.js` 文件**。这里是你的“控制中心”，修改 `siteConfig` 对象中的内容即可定制你的全站信息。
2. **主题与样式**:
   - 主题切换与模糊效果调整，请修改 `/static/css/root.css`。
   - 字体等核心样式，请修改 `/static/css/style.css`。
3. **图片资源**:
   - 头像: `/static/img/logo.webp`
   - 背景: `/static/img/background.webp`
   - 网站图标: `/static/img/favicon.ico`
4. **技能图标**:
   - 前往 [skill-icons](https://github.com/tandpfun/skill-icons) 项目，挑选你需要的图标。
   - 构建你的图标 URL (例如: `https://skillicons.dev/icons?i=js,html,css`)。
   - 将此 URL 填入 `data.js` 文件的 `skills` 部分。

## ⚙️ 部署

本项目已配置好 Docker，可实现一键部署。

1. 确保你已安装 `docker` 和 `docker-compose`。
2. 修改 `Caddyfile` 中的域名为你的域名。
3. 在项目根目录下运行命令：
   ```bash
   docker compose up -d
   ```

Caddy 将会自动为你申请 SSL 证书并开启 HTTPS。

## 🙏 鸣谢

- **原项目作者**: [ZYYO](https://github.com/ZYYO666)
- **灵感来源**: xhofe, ddiu
- **技能图标**: [skill-icons](https://github.com/tandpfun/skill-icons)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=VenenoSix24/homepage&type=Date)](https://www.star-history.com/#VenenoSix24/homepage&Date)
