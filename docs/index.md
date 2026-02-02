---
# https://vitepress.dev/reference/default-theme-home-page
# 指定使用 VitePress 的首页布局
layout: home
pageClass: home-page

# 个人名片区域 (Hero Section)
hero:
  name: "Ivy Labs"
  text: 常春藤下  指绘星河
  textsuffix:
  tagline: |
    星河璀璨，亦有暗斑
    恰似墨山留雪隙，偷藏梅影，暗递冬信
  # tagline: 星河璀璨，亦有暗斑，代码是写给未来的情书，而这里是我的回音壁。
  # tagline: 星河璀璨，亦有暗斑，那些熄灭的星辰，都化作了今日仰望夜空的基石。
  image:
    # src: /opening-hours.png
    src: /logo-ivy1-2.png
    alt: Ivy Labs
  actions:
    - theme: brand
      text: 开始探索
      link: /webbuild/vitepress1
    - theme: alt
      text: 了解更多
      link: "https://m.ivyris.top"
    - theme: alt
      text: 地球OL
      link: /feature/ol

# 项目展示区域 (Features Section)
features:
  - icon:
      light: /student.png
      dark: /student.png
    title: 我去抢个座
    details: 基于 React + TypeScript + Tauri 的跨平台图书馆座位预约应用
    link: "/feature/igolib"
  - icon:
      light: /kawaii5.png
      dark: /kawaii5.png
    title: 总之就是非常可爱
    details: 一个高度可定制化的个人网站/主页/博客模板，追求极致美观
    link: "/feature/kawaii"
  - icon:
      light: /ocefi3.png
      dark: /ocefi3.png
    title: 黑苹果 OC EFI
    details: 适配微星 B350M 迫击炮主板与 AMD CPU/GPU 的黑苹果 OpenCore 配置
    link: "/feature/ocefi"
  - icon:
      light: /ts3.png
      dark: /ts3.png
    title: 个人密码生成器
    details: 一个基于 PBKDF2-SHA512 算法，具备工业级安全性的纯客户端个人密码生成器
    link: "/feature/ts"
  - icon:
      light: /home4.png
      dark: /home4.png
    title: 个人主页模板
    details: 一个精美的个人主页模板，包含链接、作品、技能等模块
    link: "/feature/home"
  - icon:
      light: /box1.png
      dark: /box1.png
    title: 开发者在线工具
    details: 界面美观的在线开发者工具合集，助力开发人员
    link: "/feature/tool"
  - icon:
      light: /dv3.png
      dark: /dv3.png
    title: 打瓦加密器
    details: 一个有趣的文本加密工具，使用“打”和“瓦”作为二进制来进行加解密
    link: "/feature/dava"
  - icon:
      light: /ys3.webp
      dark: /ys3.webp
    title: 原神抽卡模拟
    details: 目前网页端最真实的原神抽卡模拟器之一，包含当期与历史卡池，快来试试你是欧皇还是非酋
    link: "/feature/ys"
---

<!-- <Home /> -->
