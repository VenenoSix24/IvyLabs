---
# https://vitepress.dev/reference/default-theme-home-page
# 指定使用 VitePress 的首页布局
layout: home
pageClass: home-page

# 个人名片区域 (Hero Section)
hero:
  name: "我去抢个座"
  text: "快让我去图书馆呐"
  tagline: 基于 React + TypeScript + Tauri 的跨平台图书馆座位预约应用，简化每日重复操作，轻松实现座位预约
  image:
    src: "/student.png"
    alt: Ivy Labs
  actions:
    - theme: brand
      text: 立即下载
      link: "https://igolib.ivyris.top"
    - theme: alt
      text: 快速上手
      link: /feature/igolib#📦-安装指南
    - theme: alt
      text: 了解更多
      link: "https://github.com/VenenoSix24/igolib-ldu"
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

一个基于 **React + TypeScript + Tauri** 的全平台图书馆座位预约系统。

本项目已完成从 **Python 后端** 到 **纯前端驱动跨平台架构** 的全面迁移。核心业务逻辑、GraphQL API 交互、WebSocket 队列处理以及任务调度器均已重写为 TypeScript 模块。通过使用 Tauri 2.0，应用现已完美适配 **Android、Windows、macOS 以及 Linux** 平台，提供一致的体验。

> 如果你**需要 Python 做为后端**的版本，请切换到 [**dev 分支**](https://github.com/VenenoSix24/igolib-ldu/tree/dev)。Python 版本可能会更新不及时！

![igolib-ts-p1.jpg](https://s2.loli.net/2026/01/25/YaLWsrDVJHZwITf.jpg)

*(基于某个我去图书馆，谁去图书馆？！！)*

## ✨ 功能特性

- 📱 **全平台覆盖**：完美运行于手机（Android）与桌面端（Win/Mac/Linux）。
- 🚀 **纯单机驱动**：核心逻辑异步化重写，无需额外部署 Python 后端，本地直接与图书馆服务器通信。
- 🔄 **明日预约模式**：支持 WebSocket 排队通道模拟，在开放瞬间精准抢占次日座席。
- ⚡ **即时抢座模式**：实时抢占当天可用座位，智能优化重试策略。
- 🌐 **精美 Web UI**：采用 TailwindCSS 和 Framer Motion，支持流畅的微交互与响应式布局。
- 🌙 **深色模式支持**：完美适配系统主题，自由切换主题或跟随系统设置。
- 🔄 **动态数据获取**：实时动态获取场馆状态，彻底告别静态场馆映射数据。
- 🏫 **多校区自由配置**：支持自定义 API 域名、Origin 与 Referer，轻松适配不同学校系统。

## 📥 快速下载 (推荐)

如果您只是单纯想使用本软件，可以直接从 [Releases 页面](https://github.com/VenenoSix24/igolib-ldu/releases) 下载对应平台的安装包：

- **Android**: 下载 `.apk` 文件。
- **Windows**: 下载 `.msi` 或 `.exe` 安装包。
- **macOS**: 下载 `.dmg` 文件。
- **Linux**: 下载 `.AppImage` 或 `.deb` 包。

## 🛠️ 编译运行

如果您希望参与开发或自行从源码构建应用：

### 环境要求
- [Node.js](https://nodejs.org/) (推荐 v22+) & [pnpm](https://pnpm.io/)
- [Rust](https://www.rust-lang.org/) (Tauri 编译核心)
- **移动端编译额外要求**: [Android Studio](https://developer.android.com/studio) (Android) 或 [Xcode](https://developer.apple.com/xcode/) (iOS)

### 开发运行
1. **安装依赖**
   ```bash
   pnpm install
   ```
2. **桌面端预览**
   ```bash
   pnpm tauri dev
   ```
3. **移动端预览**
   ```bash
   pnpm tauri android dev
   # 或
   pnpm tauri ios dev
   ```

### 编译打包
```bash
pnpm tauri build                # 打包桌面端
pnpm tauri android build        # 打包 Android
```

## 🏗️ 项目结构

- `src-tauri/`: Tauri 原生配置、权限定义。
- `src/`:
  - `services/`:
    - `LibraryService.ts`: **核心逻辑** - 封装 GraphQL 协议。
    - `SchedulerService.ts`: **毫秒级调度** - 负责精准抢座触发。
    - `WebSocketService.ts`: 模拟 WebSocket 排队协议。
  - `pages/`: 应用主视图 (Dashboard, LandingPage)。
  - `components/`: UI 组件仓库。

## 🚀 使用流程

1. **配置学校**：点击设置图标，确认/修改当前学校的 API 全局路径。
2. **凭证加载**：粘贴您的 Cookie 。应用会自动实时校验并识别您的身份。
3. **智能选座**：从动态列表选择场馆，手动或通过列表指定座位号。
4. **启动任务**：设定好时间点击“开始”，保持应用在前台运行，系统将接管后续所有排队与请求。

## 🖼️ 界面预览

![igolib-ts-p2.jpg](https://s2.loli.net/2026/01/25/r16QduYiBlFDJEm.jpg)

![igolib-ts-p4.jpg](https://s2.loli.net/2026/01/25/tYDSefbR5quG8my.jpg)

<img src="https://s2.loli.net/2026/01/25/TCFcJxO317gMfjy.jpg" alt="igolib-ts-p3.jpg" style="zoom: 33%;" />


## 📄 许可证

本项目采用 MIT 许可证。

---

**声明**：本项目仅供学术交流与编程技术研究使用，请自觉遵守各高校图书馆座位管理规定。严禁用于任何商业用途。