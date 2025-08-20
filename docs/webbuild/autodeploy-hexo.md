---
title: 使用Github Actins自动化部署Hexo
date: 2024-08-16 23:10:24
categories: 实用教程
tags:
  - Hexo
  - Github
  - 教程
cover: "https://s2.loli.net/2024/08/20/MPGmK7xjlTWyvie.jpg"
top_group_index: 1
---

# 前言/介绍

每次部署 Hexo 新文章都要执行特定的命令，到后期会很浪费时间，针对这个问题，本文探讨通过 Github Action 实现自动部署 Hexo！

# 获取 Github Token

1. 通过 Github Action 部署需要一定的权限来执行命令，实现推送到远程仓库，因此需要获取 Github `Token`
2. 打开[GitHub](https://github.com/)→ 右上角头像 →Settings→Developer Settings(左侧最下面)→Personal access tokens→Tokens (classic)→ 右上角 Generate new token→ 推荐选择 classic

   ![Snipaste_2024-08-20_22-48-25.png](https://s2.loli.net/2024/08/20/d21kVGOzMv9Buo6.png)

3. 名称随意 →Expiration 选择 `No expiration` 永不过期 → 勾选 `repo` 和 `workflow`→Generate token

   ![Snipaste_2024-08-20_22-54-18.png](https://s2.loli.net/2024/08/20/nhPXyLwdFizHUbI.png)

> **生成的 token 只会在此界面显示一次，请妥善保管**

# 在 Github 新建一个私有仓库

1. 创建一个私有仓库来存放 Hexo 博客源码`<img src="https://s2.loli.net/2024/08/20/1TapZlN6KGBW2Sj.png" alt="Snipaste_2024-08-20_23-01-01.png"  />`
2. 完成后需要将博客源码推送(Push)到这个仓库，先记住蓝色框里的 HTTPS 和 SSH，后续步骤会用到

   ![Snipaste_2024-08-20_23-06-01.png](https://s2.loli.net/2024/08/20/HYti5e2QxpN7lUn.png)

> **使用 SSH 或者 HTTPS 均可**

# 构建 Github Actions Workflows 自动化文件

1. 在 `博客根目录` 打开 或 新建 `.github`文件夹
2. 在 `.github`内新建 `workflows`文件夹
3. 在 `workflows`内新建 `deploy.yml`文件 (文件名可随意填写，推荐为 deploy 或 autodeploy)

   文件目录如下

   <img src="https://s2.loli.net/2024/08/20/xNpIrMEZwdoXmCl.png" alt="Snipaste_2024-08-20_23-54-04.png"  />

4. 打开新建的 `deploy.yml`文件，输入以下代码

   ```yml
   name: Deploy Hexo to GitHub Pages

   on:
     push:
       branches:
         - main # 当推送到 main 分支时触发

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
         - name: Checkout repository # 检查分支
           uses: actions/checkout@v2
           with:
             submodules: false # 禁用子模块检查

         - name: Setup Node.js # 安装 node
           uses: actions/setup-node@v2
           with:
             node-version: "20" # 这里 node 版本请保持与你本机一致

         - name: Install Hexo Git Deployer # 安装 Hexo
           run: |
             npm install hexo-deployer-git --save
             npm install hexo-renderer-pug hexo-renderer-stylus --save
             npm install hexo-cli -g

         - name: Install Dependencies # 安装依赖
           run: npm install

         - name: Clean and Generate Static Files # 生成静态文件
           run: |
             hexo clean
             hexo generate

         - name: Configure Git
           run: |
             git config --global user.name 'VenenoSix24'
             git config --global user.email '3405395460@qq.com'

         - name: Deploy to GitHub Pages # 部署到 Github
           env:
             GH_TOKEN: ${{ secrets.GH_TOKEN }}
           run: |
             cd public/
             git init
             git add -A
             git commit -m "Create by workflows"
             git remote add origin https://${{ secrets.GH_TOKEN }}@github.com/VenenoSix24/VenenoSix24.github.io.git  # 这里更改成你的远程仓库地址
             git push origin HEAD:main -f  # 推送到 main 分支
   ```

5. 可以看到代码中出现了 `secrets.GH_TOKEN`变量，因此我们要去仓库的 Settings→Secrets and variables→Actions 下添加环境变量

   |   变量名 Name    |          内容 Secret          |
   | :--------------: | :---------------------------: |
   | secrets.GH_TOKEN | 填写你刚刚获取的 Github Token |

   ![Snipaste_2024-08-20_23-14-50.png](https://s2.loli.net/2024/08/20/jb7qCOtV84Wc5HK.png)

# 连接本地与远程仓库

**首先** 将 `博客根目录/themes/anzhiyu(你的主题)/.git`文件夹删除或者移动到非博客目录下，`.git`文件夹的存在可能会导致将其识别成子项目，无法上传到远程仓库

## 博客目录曾使用过 git

1. 添加屏蔽项（减少提交的文件数量，加快提交速度）

   打开 `博客根目录/.gitignore`输入以下内容 (没有该文件就新建)：

   ```txt
   .DS_Store
   Thumbs.db
   db.json
   *.log
   node_modules/
   public/
   .deploy*/
   .deploy_git*/
   .idea
   themes/anzhiyu/.git
   ```

   > **最后一行替换成你自己的主题名**

2. 在博客根目录打开 Git Bash 终端，使用以下命令重设远程仓库地址

   ```bash
   git remote rm origin  # 删除原有仓库链接
   git remote add origin git@github.com:[Username]/[Repo].git  # 参考仓库代码指引
   git checkout -b main  # 切换到main分支
   git add .  # 将所有文件的修改添加到暂存区
   git commit -m "update hexo"  # 提交暂存区到本地仓库
   git push origin main  # 推送到远程仓库
   ```

## 博客目录未使用过 git

1. 在博客根目录打开 Git Bash 终端，使用以下命令连接远程仓库

   ```bash
   git init  # 初始化仓库
   git remote add origin git@github.com:[Username]/[Repo].git  # 参考仓库代码指引
   git checkout -b main  # 切换到main分支
   ```

2. 添加屏蔽项（减少提交的文件数量，加快提交速度）

   打开 `博客根目录/.gitignore`输入以下内容 (没有该文件就新建)：

   ```txt
   .DS_Store
   Thumbs.db
   db.json
   *.log
   node_modules/
   public/
   .deploy*/
   .deploy_git*/
   .idea
   themes/anzhiyu/.git
   ```

   > **最后一行替换成你自己的主题名**

3. 再次打开 Git Bash 终端，使用以下命令将博客源码推送到远程仓库：

   ```bash
   git add .  # 将所有文件的修改添加到暂存区
   git commit -m "update hexo"  # 提交暂存区到本地仓库
   git push origin main  # 推送到远程仓库
   ```

> 注意，上传到远程仓库后，请打开仓库的 `根目录/themes` 查看你的**主题文件夹图标**是否带有**`箭头 →`**
>
> 注意，上传到远程仓库后，请打开仓库的 `根目录/themes` 查看你的**主题文件夹图标**是否带有**`箭头 →`**
>
> 注意，上传到远程仓库后，请打开仓库的 `根目录/themes` 查看你的**主题文件夹图标**是否带有**`箭头 →`**
>
> **若有箭头**，请拉到**文章最后**，查看 `可能遇到的问题`

# 查看是否配置成功

打开你的博客源码仓库，在上边栏中找到 `Actions`，点击刚刚提交的 commit

![Snipaste_2024-08-20_23-40-23.png](https://s2.loli.net/2024/08/20/PvbsuXHgiFWar4c.png)

点击 `deploy`任务，查看运行情况

![Snipaste_2024-08-20_23-41-01.png](https://s2.loli.net/2024/08/20/RnCWK25oixI7JgP.png)

如果各项全部打勾，那么你的自动部署已经成功啦！Congratulations！！

![Snipaste_2024-08-20_23-41-33.png](https://s2.loli.net/2024/08/20/KoaPY5QWdUcRLkS.png)

# 可能遇到的问题

## 主题 `.git`文件夹问题

在上传源码到远程仓库后，你的主题文件夹可能被识别成**子系统模块**，无法正常打开，解决方法如下：

1. 将 `博客根目录/themes/anzhiyu(你的主题)/.git`文件夹**删除**
2. 右键打开 `Git Bash Here`，执行以下命令：

   ```bash
   git rm --cached [主题文件夹名]
   git add .
   git commit -m "commit messge"  # 内容随意
   git push origin main  # 推送到你的分支
   ```
