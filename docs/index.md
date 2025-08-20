---
# https://vitepress.dev/reference/default-theme-home-page
# 指定使用 VitePress 的首页布局
layout: home
pageClass: home-page

# 个人名片区域 (Hero Section)
hero:
  name: "Ivy Labs"
  text: "常春藤下，指绘星河  "
  tagline: |
    星河璀璨，亦有暗斑
    恰似墨山留雪隙，偷藏梅影，暗递冬信
  # tagline: 星河璀璨，亦有暗斑，代码是写给未来的情书，而这里是我的回音壁。
  # tagline: 星河璀璨，亦有暗斑，那些熄灭的星辰，都化作了今日仰望夜空的基石。
  image:
    src: /logo-ivy1.png
    alt: Ivy Labs
  actions:
    - theme: brand
      text: 开始探索
      link: /webbuild/vitepress1
    - theme: alt
      text: 了解更多
      link: "https://m.ivyris.top"

# 项目展示区域 (Features Section)
features:
  - icon: 🤖
    title: 我去抢个座
    details: 基于 Python 实现的图书馆预约抢座系统，简化每日重复操作。
    link: "/feature/igolib"
  - icon: 🌸
    title: 总之就是非常可爱
    details: 一个高度可定制化的个人网站/主页/博客模板，追求极致美观。
    link: "/feature/kawaii"
  - icon: 🍎
    title: Hackintosh OC EFI
    details: 适配微星 B350M 迫击炮主板与 AMD CPU/GPU 的黑苹果 OpenCore 配置。
    link: "/feature/ocefi"
  - icon: 🎲
    title: 打瓦加密器
    details: 一个有趣的文本加密工具，使用“打”和“瓦”作为二进制来进行加解密。
    link: "/feature/DV"
---
