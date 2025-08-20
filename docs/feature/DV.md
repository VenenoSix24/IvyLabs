---
# https://vitepress.dev/reference/default-theme-home-page
# 指定使用 VitePress 的首页布局
layout: home
pageClass: home-page

# 个人名片区域 (Hero Section)
hero:
  name: "打瓦加密器"
  text: "打瓦瓦瓦打瓦打打瓦瓦瓦打打瓦瓦打"
  tagline: 一个有趣的文本加密工具，使用“打”和“瓦”作为二进制来进行加解密 OpenCore 配置
  image:
    src: "/DV.png"
    alt: Ivy Labs
  actions:
    - theme: brand
      text: 快速上手
      link: /feature/DV#演示
    - theme: alt
      text: 了解更多
      link: "https://github.com/VenenoSix24/DV-Encrypter"
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

**打瓦加密器**是一个简单的在线工具，可以将文本转换为"打"和"瓦"组成的字符串，同样可以将"打""瓦"字符串解密回原始文本。本项目旨在提供一种有趣的方式来加密和解密信息。

## 演示

项目演示站点：👉 [Demo](https://dava.776624.xyz/) | [打瓦加密器](https://dava.776624.xyz/)

## 声明

本项目**完全本地运行**，并不会上传你所输入的任何信息。

> [!NOTE] > **注意：这种加密方式仅用于娱乐，不适用于需要高度安全性的场景。**

## 截图

![Introduction.jpg](https://s2.loli.net/2024/10/06/ZK3M7tEpJu1PIQd.jpg)

## 部署

本项目实现很简单，静态网页，在 [Vercel](https://vercel.com/)、[Netlify](https://app.netlify.com/) 等托管平台**直接托管**即可。本项目以 Vercel 为例。

### Vercel

- 直接点击下方按钮，在下一步点击 **Deploy** 即可。

  <a href="https://vercel.com/import/project?template=https://github.com/VenenoSix24/DV-Encrypter"><img src="https://vercel.com/button" height="36"  ></a>

- 或者 `Fork` 本仓库，在 `Vercel` 中引入该项目，点击 **Deploy** 即可完成部署。

## 贡献

欢迎你做出贡献！如若更改，随时 `Fork` 仓库，进行更改并提交 `PR`。

## 支持

**欢迎使用！Enjoy!**

若觉得有趣或有用请给个**Star！**

如遇 Bug 或疑问，请在仓库提交 `Issues` 。

## 许可证

本项目采用 `CC BY-NC-SA 4.0` 许可证。

```
MIT License

Copyright (c) 2024 VenenoSix24

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
