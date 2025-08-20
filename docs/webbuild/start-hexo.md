---
title: 使用Hexo和Github搭建个人网站
date: 2023-07-27 21:54:11
categories: 实用教程
tags: 
  - Hexo
  - 教程
cover: "https://pic.imgdb.cn/item/64bf641a1ddac507cca972a1.png"
top_group_index: 1
---

## 前言

以前总是想拥有一个自己的Blog，可惜没太多的时间研究，今天，Ta来啦~

## 初步了解

先浅浅了解下什么是Hexo和Github吧

- **Hexo**

[Hexo](https://hexo.io/zh-cn/)是一个快速、简洁且高效的博客框架，支持Markdown，可使上百个页面在几秒内瞬间完成渲染，部署方便，可玩性较高。

- **Github**

[Github]([GitHub](https://github.com/))GitHub是一个面向开源及私有软件项目的托管平台，其中Github Pages可以理解为用户编写的、托管在github上的静态网页，使用Ta提供的免费服务器，免去搭建服务器的步骤。

## 下载Git

点击进入[Git下载页面](https://git-scm.com/download/win)

选择32或64位下载（都3202年了，不会还有32位系统吧

![](https://pic.imgdb.cn/item/64bfde691ddac507cc7a7a7d.png)

下载完成后，打开安装程序，如果没有其它需求，可采用**“一路回车大法”**安装

## 下载Node.js

进入[Node.js官网](https://nodejs.org/zh-cn)

选择长期维护版下载

<img src="https://pic.imgdb.cn/item/64bfde691ddac507cc7a799a.png"  />

下载完成后，打开安装程序，如果没有其它需求，可采用**“一路回车大法”**安装

## 检验是否安装成功

按下`Win`＋`R`打开运行窗口，输入`cmd`

分别输入以下命令，出现相关版本信息即代表安装成功，若无，则重新安装即可

```sh
git --version
node -v
npm -v
```

<img src="https://pic.imgdb.cn/item/64bfe1781ddac507cc7f6271.png" style="zoom:50%;" />

在右键菜单中，我们可以看到多出了两行，分别为`Open Git GUI Here`和 `Open Git Bash Here`，我们一般使用第二个`Bash`

<img src="https://pic.imgdb.cn/item/64bfe1781ddac507cc7f62a9.png" style="zoom: 50%;" />

## 安装Hexo框架

在你的任一磁盘中，新建一个文件夹，文件夹名任意（我的为“Blog-VenenoSix24”），网站的相关文件将储存在该文件夹下

在该文件夹下右键鼠标，选择`Open Git Bash Here`，输入以下命令即可安装

> **注意！Bash窗口下，不支持快捷键复制粘贴，请右键选择”Paste“粘贴命令代码**

```bash
npm install hexo-cli -g
```

第一次安装可能较久，请耐心等待（去刷视频

安装成功如下图

![](https://pic.imgdb.cn/item/64bfeaea1ddac507cc91b2a7.png)

## 初始化配置Hexo

上一步成功后，输入以下命令

```bash
hexo init blog
```

安装成功如下图

![](https://pic.imgdb.cn/item/64bfeaea1ddac507cc91b264.png)

这时你会发现你刚刚创建的文件夹下多了一个`blog`文件夹

输入以下命令

```bash
cd blog  #进入blog文件夹
```

接着输入以下命令

```bash
npm install
```

操作成功如下图

![](https://pic.imgdb.cn/item/64bfeaea1ddac507cc91b195.png)

最后输入以下命令

```bash
hexo s
```

出现如下提示，其中`http://localhost:4000/`是网站的本地地址，可用于本地预览

> **注意！复制网站时，切勿使用Ctrl+C快捷键，在这里Ctrl+C代表关闭本地服务**

![](https://pic.imgdb.cn/item/64bfeaea1ddac507cc91b1d8.png)

## 预览本地页面

在浏览器中输入`http://localhost:4000/`即可进入你自己的网站，但是只能本地浏览，预览如下

![](https://pic.imgdb.cn/item/64bfeaeb1ddac507cc91b3a8.png)

## 将网站部署到Github Pages上

我们接下来所做的事情是让其他人也能访问你的网站

1. 注册/登录Github账号，访问[Github官网](https://github.com/)，右上角Sign In为登录，Sign Up为注册

2. 创建项目仓库，点击右上角 ` + ` ，选择`New repository`进行创建

   ![](https://pic.imgdb.cn/item/64bffa8e1ddac507ccaedd7b.png)

   

   **注意事项如下**：

   - 项目名必须为`你的用户名.github.io`的格式
   - 勾选`Public`选项
   - 勾选`Add a README file`选项

   ![](https://pic.imgdb.cn/item/64bffa8d1ddac507ccaedc26.png)

   

3. 配置SSH密钥，在你自己创建的文件夹中，右键打开`Git Bash Here`输入以下命令

   ```bash
   ssh-keygen -t rsa -C "your email@example.com" #引号内填写你的邮箱地址
   ```

   运行结果如下，在三个箭头处按`Enter回车`就行，下方红框内是你的密钥所在位置

   > 注意！！！
   > 下图中我邮箱地址填错了，“example”，不要学我！！
   > 如果你以前执行过该操作，会提示`Overwrite  (y/n) ?`，请根据个人情况处理

   ![](https://pic.imgdb.cn/item/64bffb181ddac507ccb08d45.png)

   打开.ssh文件夹：`C盘→用户(Users)→你的电脑用户名→.ssh`**记得打开**`隐藏的项目`，这样才能找到这个文件夹

   方法如下

   ![](https://pic.imgdb.cn/item/64bffb181ddac507ccb08ce9.png)

   

   进入文件夹后，打开`id_rsa.pub`文件，**复制全部内容**(Ctrl+A、Ctrl+C)

   

4. 在Github上添加SSH公钥

   - 登录Github，进入`Settings`
     
     ![](https://pic.imgdb.cn/item/64bffb181ddac507ccb08c8a.png)
     
   - 点击`SSH and GPG Keys`

   - 点击`New SSH key`

   - Title栏随便填，**将刚才复制的全部内容粘贴到Key栏**，点击`Add SSH key`
     
     
     ![](https://pic.imgdb.cn/item/64bffb181ddac507ccb08da8.png)

   

5. 进行测试

   在任意文件夹/桌面右键选择`Git Bash Here`，输入以下命令

   ```bash
   ssh -T git@github.com
   ```



   运行结果会提示：

   `Are you sure you want to continue connecting  (yes/no)?`




   输入`yes`后会提示：

   `You‘ve successfully authenticated，but Github......`




   出现**"successfully"**字样，则表示配置正确

   

6. 配置Git个人信息

   输入以下命令进行个人信息的设置，名字可以随便写，但为了方便记忆，建议与GitHub保持一致

   ```bash
   git config --global user.name "your name"     #引号内填写你的用户名
   git config --global user.email "your email"   #引号内填写你的邮箱
   ```

   如果你做到这一步，恭喜你，你的SSH Key配置成功，已成功连接到Github

   

## 将本地Hexo文件更新至你的Github仓库

1. 登录Github，打开你创建的项目`yourname.github.io`

2. 复制你的SSH地址，如下
   ![](https://pic.imgdb.cn/item/64c002491ddac507ccbd7224.png)

3. 在你创建的Hexo文件夹中，打开`blog`文件夹，打开该文件夹下的`_config.yml`文件(右键选择记事本或其他软件打开)

4. 滑到底部，找到**deploy**字样，修改成如下样式，**保存！！**

   ```yaml
   deploy:
     type: git  #type 填 git
     repo: git@github.com:VenenoSix24/VenenoSix24.github.io.git  #此处粘贴复制的内容
     branch: main  #填写分支，master/main，可在Github项目→Settings→Pages→Branch查看
   ```

5. 在你的`blog`文件夹右键选择`Git Bash Here`，执行以下命令

   ```bash
   hexo g
   hexo d
   ```

   执行完会让你输入你的Github的账号和密码，之后你的网站就成功部署到Github上了

6. 如果出现`ERROR Deployer not found: git`

​		请输入以下代码回车

```bash
npm install --save hexo-deployer-git
```

1. 如何访问你的网站

   打开浏览器输入`https://你的用户名.github.io`，例如我的：[VenenoSix24.github.io](https://venenosix24.github.io/)你的网站就不再是单机的啦~

## 在博客上发表文章

现在我们的博客里面空空的，我们要写一些文章充实一下，方法如下

1. 新建一篇文章(两种方法)

   - **第一种**，在Bash中输入以下命令

     ```bash
     hexo n "文章标题"
     ```

     完成后你将在`blog\source\_posts`路径下看到一个`文章标题.md`文件

   - **第二种**，直接在`blog\source\_posts`路径下，右键新建一个`文本文档`，将后缀改为`.md`即可

   

2. 编写文章

   > md全称为Markdown，操作简单易懂上手快，推荐编辑器有Typora、Obsidian、VSCode等

   使用编辑器打开新建的.md文件即可编写文章，记得保存

3. 推送文章

   编写好后，我们要把文章推送到服务器上，输入以下命令，即可完成推送

   ```bash
   hexo cl
   hexo g
   hexo d
   ```

   推送完成后，打开你的博客就会发现你的新文章啦

## 更改个人网站主题

基本操作都完成了，但是你会发现你的网站没有别人的好看，接下来教你更换主题

打开Hexo官网的[主题页面](https://hexo.io/themes/)，选择一款你喜欢的主题样式

![](https://pic.imgdb.cn/item/64c0dbe11ddac507ccf45423.png)

- 点击主题上方图片为预览主题

- 点击主题标题文字为进入主题Github页面

我们点击标题文字进入Github页面，往下滑会看到主题的配置指南

![](https://pic.imgdb.cn/item/64c0dbe21ddac507ccf45528.png)

这里以我使用的[安知鱼主题](https://github.com/anzhiyu-c/hexo-theme-anzhiyu)为例，这里是[主题帮助文档](https://docs.anheyu.com/)

1. 打开博客本地根目录，右键选择`Git Bash Here`输入主题的Git安装代码

   ```bash
   git clone -b main https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git themes/anzhiyu
   #这里以此主题为例
   ```

   > 使用科学上网，配置速度会更快

   完成后，我们打开`blog`目录下的`themes`文件夹，会发现多了一个`anzhiyu`文件夹，即刚刚配置的主题，我们复制该文件夹的名字(我这里是“anzhiyu”)

2. 打开`blog`目录下的`_config.yml`文件，下滑找到**theme**字样，将复制的主题文件夹名粘贴进去，保存，如下

   ```yaml
   ## Themes: https://hexo.io/themes/
   theme: anzhiyu  #这里！！！
   ```

   > 注意！冒号后面有一个空格

3. 在`blog`文件夹下右键选择`Git Bash Here`，输入以下命令

   ```bash
   hexo cl
   hexo g
   hexo s
   ```

   完成后，在浏览器中输入博客本地地址`http://localhost:4000/`即可预览更改主题后的网页

4. 修改主题配置

   每个主题一般都有自己的配置指南，如我这个主题的配置指南为：[配置指南](https://docs.anheyu.com/)

   根据配置指南，就可以更改主题中的具体配置啦

## 结语

教程到这里就告一段落啦，此时你也拥有了属于自己的个人网站

希望能够帮助到你，祝你拥有以后个自己满意的个人网站

完结撒花~~