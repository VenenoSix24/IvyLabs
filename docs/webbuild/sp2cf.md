---
title: 将 Spaceship 域名托管到 Cloudflare
date: 2025-08-20 00:18:00
categories: 实用教程
tags:
  - 域名
  - Cloudflare
  - Spaceship
  - 个人网站
  - 教程
cover: https://s2.loli.net/2025/08/20/QunlcdOxZYgEBms.jpg
---

# 将 Spaceship 域名托管到 Cloudflare

## 前言

将域名从注册商（如 Spaceship）的默认 DNS 服务迁移到 Cloudflare，是提升网站性能和安全性的一个高性价比操作。通过 Cloudflare，您可以免费获得强大的 CDN 加速、DDoS 防护、SSL 证书以及精细的 DNS 管理功能。

![](https://s2.loli.net/2025/08/20/QunlcdOxZYgEBms.jpg)

本教程将引导您完成两个核心步骤：

1. **迁移域名解析**：将 Spaceship 域名的名称服务器（Nameservers）更改为 Cloudflare。
2. **增强安全性**：开启 DNSSEC，防止 DNS 欺骗和缓存投毒攻击。

## 准备工作

在开始之前，请确保您已拥有：

- 一个在 Cloudflare 注册的账户。
- 一个在 Spaceship 购买并管理的域名。

## 第一部分：迁移域名解析

### 步骤 1：在 Cloudflare 添加你的域名

首先，我们需要在 Cloudflare 中添加您的站点，并获取 Cloudflare 提供的名称服务器地址。

1. 登录您的 Cloudflare 账户，在主页点击 **“添加站点” (Add a Site)**。
2. 输入您在 Spaceship 购买的域名（例如 `yourdomain.com`），然后点击“继续”。

   ![](https://s2.loli.net/2025/08/20/zxKAB4IU8g2Jojm.jpg)

3. 在计划选择页面，选择 **Free（免费）** 计划，然后点击“继续”。
4. Cloudflare 会自动扫描您域名现有的 DNS 记录。您可以在此页面检查并确认，暂时无需修改，直接点击“继续”。
5. 接下来，页面会提示您更改域名的名称服务器。**请复制并保存页面上提供的两个 Cloudflare 名称服务器地址**。它们通常看起来像这样：

   - `ada.ns.cloudflare.com`
   - `dave.ns.cloudflare.com`
     ![](https://s2.loli.net/2025/08/20/Ij6pxHElvCZfAuS.jpg)

### 步骤 2：在 Spaceship 更改名称服务器

现在，我们需要登录 Spaceship，将域名的管理者指向刚刚获取的 Cloudflare 地址。

1. 登录您的 Spaceship 账户主页。
2. 点击页面右上角的 **Launchpad**，进入您的仪表盘。
3. 选择 **域名管理器 (Domain Manager)**，然后点击您需要操作的域名。
4. 在域名管理页面，找到并点击 **名称服务器和 DNS (Nameservers and DNS)** 区域。
   ![](https://s2.loli.net/2025/08/20/FZmjr3g5toexC6c.jpg)
5. 在“名称服务器”一栏，点击 **更改 (Change)**。
6. 将您在 Cloudflare 获取的两个名称服务器地址，分别粘贴到输入框中。
   ![](https://s2.loli.net/2025/08/20/9X5oaJZcbGOvVux.jpg)
7. 点击 **保存 (Save)**。

> **注意**：名称服务器的全球更新通常需要几分钟到几小时不等。

## 第二部分：开启 DNSSEC 增强安全性

DNSSEC (Domain Name System Security Extensions) 为 DNS 查询增加了一层安全验证，能确保访问者连接到的是真实的服务器，而不是被恶意劫持的虚假地址。

### 步骤 1：在 Cloudflare 启用 DNSSEC

1. 在 Cloudflare 仪表盘中，选择您已激活的域名。
2. 导航到左侧菜单的 **DNS** -> **设置 (Settings)** 页面。
3. 向下滚动找到 DNSSEC 功能区，点击 **“启用 DNSSEC” (Enable DNSSEC)**。
   ![](https://s2.loli.net/2025/08/20/TJkKqpVP2y6Ug3R.jpg)
4. 启用后，Cloudflare 会为您生成一条 **DS 记录**。请将此页面保持打开，因为我们下一步需要用到这些值。
   ![](https://s2.loli.net/2025/08/20/MTtxYKPl9Nid8j3.jpg)

### 步骤 2：在 Spaceship 添加 DS 记录

最后一步，是将 Cloudflare 生成的 DS 记录添加到 Spaceship，完成验证链。

1. 回到 Spaceship 的域名管理页面。
2. 在 **名称服务器和 DNS** 页面，点击 **高级 DNS (Advanced DNS)**。
3. 找到 **DS 记录 (DS Records)** 部分，点击 **“添加” (Add)**。
   ![](https://s2.loli.net/2025/08/20/9qH5kbIPKl31fG6.jpg)
4. 现在，将 Cloudflare 页面上 DS 记录的各项值，一一对应地填写到 Spaceship 的输入框中。

为了避免混淆，请参考下方的字段对应关系：

| Cloudflare DS 记录字段 | Spaceship DS 记录字段 |
| ---------------------- | --------------------- |
| `密钥标记`             | **关键标签**          |
| `算法-13`              | **算法**              |
| `摘要类型-2`           | **摘要类型**          |
| `摘要`                 | **摘要**              |

5. 填写完毕后，点击 **保存 (Save)** 即可。

至此，您的 Spaceship 域名已成功托管到 Cloudflare，并开启了 DNSSEC 安全防护。
