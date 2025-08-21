---
# https://vitepress.dev/reference/default-theme-home-page
# 指定使用 VitePress 的首页布局
layout: home
pageClass: home-page

# 个人名片区域 (Hero Section)
hero:
  name: "个人密码生成器"
  text: "安全到我自己都记不住"
  tagline: 一个具备工业级安全性的纯客户端个人密码生成器，基于 PBKDF2-SHA512 算法，确保零信任架构下的密码安全
  image:
    src: "/ts3.png"
    alt: Ivy Labs
  actions:
    - theme: brand
      text: 在线体验
      link: "https://ts.6aig.cn"
    - theme: alt
      text: 快速上手
      link: /feature/ts#🚀-快速开始
    - theme: alt
      text: 了解更多
      link: /
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

## ✨ 特性

- **🔒 绝对安全**: 100% 客户端计算，密钥永不离开您的设备
- **🛡️ 工业级加密**: 基于 PBKDF2-SHA512 算法，10 万次迭代
- **🔄 多版本支持**: V2 (兼容) / V3 (增强) / V4 (双因素) 三种算法
- **🔑 双因素认证**: V4 支持密钥文件作为第二因素
- **🎯 平台唯一**: 每个平台生成唯一的强密码
- **🌏 中文支持**: 智能拼音转换，支持中文平台名称
- **📊 密码仪表盘**: 实时强度分析和构成解析
- **📋 会话历史**: 智能记录和快速重用
- **⚙️ 高级配置**: 字符集限制、长度控制等高级选项
- **📱 响应式设计**: 完美适配桌面和移动设备

## 🚀 快速开始

### 在线使用

1. 打开 `index.html` 文件或访问演示页面 `demo.html`
2. 输入平台名称（如：微信、Google、GitHub）
3. 输入您的个人密钥
4. 选择生成策略（完整/紧凑）
5. 可选：启用高级策略进行自定义配置
6. 点击"生成密码"

### 本地部署

```bash
# 克隆项目
git clone <repository-url>
cd mnemonic-fortress

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 `http://localhost:3000` 即可使用。

### 项目文件说明

- `index.html` - 主应用程序
- `demo.html` - 功能演示页面
- `test.html` - 测试页面
- `js/` - JavaScript 源代码目录

## 🔧 使用说明

### 算法版本选择

- **V4 (双因素安全)** - 推荐 🌟

  - 最高安全级别
  - 需要密钥文件作为第二因素
  - 适合重要账户

- **V3 (增强隐私)**

  - 改进的密码构造算法
  - 增强隐私保护
  - 动态连接符

- **V2 (兼容旧版)**
  - 向后兼容
  - 标准 PBKDF2 算法
  - 支持完整/紧凑模式

### 基础使用

1. **选择算法版本**: 推荐使用 V4 获得最高安全性
2. **上传密钥文件**: V4 模式需要任意文件作为密钥
3. **平台名称**: 输入目标平台名称，支持中文自动补全
4. **个人密钥**: 您的主密码，建议使用强密码
5. **生成策略**: (仅 V2 支持)
   - **完整模式**: 最高安全性，密码较长
   - **紧凑模式**: 适中长度，便于输入

### 高级配置

启用高级策略后可以：

- **长度限制**: 设置密码最大长度
- **字符集控制**: 选择允许的字符类型
  - 大写字母 (A-Z)
  - 小写字母 (a-z)
  - 数字 (0-9)
  - 基础符号 (!@#$%^&\*)
  - 特殊符号 (()[]{}.,;:-\_+=<>?/|\\~`)

## 🔐 安全原理

### 核心算法

```
salt = version + ":" + normalizedPlatformName
derivedKey = PBKDF2(masterKey, salt, 100000 iterations, SHA-512)
password = assemblePassword(derivedKey, strategy, advancedConfig)
```

### 安全特性

1. **PBKDF2-SHA512**: 业界标准的密钥派生函数
2. **高迭代次数**: 10 万次迭代，抵御暴力破解
3. **平台隔离**: 不同平台使用不同的盐值
4. **版本控制**: 算法版本确保未来兼容性
5. **纯客户端**: 无网络传输，无服务器存储

### 密码组成

生成的密码包含以下组件：

- **动态符号**: 从派生密钥中选择的特殊字符
- **混合首尾符**: 平台首字母 + 随机字母
- **加密数字**: 基于平台名称和派生密钥的数字
- **个人标识**: 从派生密钥中提取的唯一标识
- **平台标识**: 规范化的平台名称

## 🧪 测试

项目包含完整的测试套件：

```bash
# 在浏览器中打开测试页面
open test.html
```

测试包括：

- ✅ 基础功能测试
- ✅ 算法一致性测试
- ✅ 中文平台测试
- ✅ 高级配置测试

## 🌐 服务器部署

### 🚀 快速部署

项目提供了自动化部署脚本，支持多种部署方式：

```bash
# 使用部署脚本
chmod +x deploy.sh

# Docker 部署
./deploy.sh docker

# Nginx 部署
./deploy.sh nginx /var/www/topsecret

# Apache 部署
./deploy.sh apache /var/www/html/topsecret
```

### 方式一：静态文件部署 (推荐)

由于 Top Secret 是纯前端应用，可以部署到任何支持静态文件的服务器：

#### 1. Nginx 部署

```bash
# 1. 上传文件到服务器
scp -r ./* user@your-server:/var/www/topsecret/

# 2. 配置 Nginx
sudo nano /etc/nginx/sites-available/topsecret
```

Nginx 配置示例：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/topsecret;
    index index.html;

    # 启用 gzip 压缩
    gzip on;
    gzip_types text/css application/javascript text/javascript application/json;

    # 缓存静态资源
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # 主页面
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

```bash
# 3. 启用站点
sudo ln -s /etc/nginx/sites-available/topsecret /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### 2. Apache 部署

```bash
# 1. 上传文件
scp -r ./* user@your-server:/var/www/html/topsecret/

# 2. 创建 .htaccess 文件
nano /var/www/html/topsecret/.htaccess
```

.htaccess 配置：

```apache
# 启用压缩
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE text/javascript
    AddOutputFilterByType DEFLATE application/json
</IfModule>

# 缓存设置
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
</IfModule>

# 安全头
Header always set X-Frame-Options "SAMEORIGIN"
Header always set X-Content-Type-Options "nosniff"
Header always set X-XSS-Protection "1; mode=block"
```

### 方式二：云平台部署

#### 1. Vercel 部署 (免费)

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 在项目目录下部署
vercel

# 3. 按提示配置域名和设置
```

#### 2. Netlify 部署 (免费)

```bash
# 1. 安装 Netlify CLI
npm install -g netlify-cli

# 2. 部署
netlify deploy --prod --dir .

# 或直接拖拽文件到 Netlify 网站
```

#### 3. GitHub Pages 部署 (免费)

```bash
# 1. 推送代码到 GitHub
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main

# 2. 在 GitHub 仓库设置中启用 Pages
# Settings -> Pages -> Source: Deploy from a branch -> main
```

### 方式三：Docker 部署

创建 `Dockerfile`：

```dockerfile
FROM nginx:alpine

# 复制文件到 nginx 目录
COPY . /usr/share/nginx/html

# 复制 nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

创建 `nginx.conf`：

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    gzip on;
    gzip_types text/css application/javascript text/javascript application/json;

    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

部署命令：

```bash
# 构建镜像
docker build -t topsecret .

# 运行容器
docker run -d -p 80:80 --name topsecret topsecret

# 或使用 docker-compose
echo "version: '3'
services:
  topsecret:
    build: .
    ports:
      - '80:80'
    restart: unless-stopped" > docker-compose.yml

docker-compose up -d
```

### 🔒 HTTPS 配置 (推荐)

#### 使用 Let's Encrypt (免费 SSL)

```bash
# 1. 安装 Certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# 2. 获取 SSL 证书
sudo certbot --nginx -d your-domain.com

# 3. 自动续期
sudo crontab -e
# 添加: 0 12 * * * /usr/bin/certbot renew --quiet
```

### 📊 性能优化建议

1. **启用 CDN**

   - 使用 Cloudflare、AWS CloudFront 等
   - 加速全球访问速度

2. **压缩优化**

   - 启用 Gzip/Brotli 压缩
   - 压缩 CSS/JS 文件

3. **缓存策略**

   - 静态资源长期缓存
   - HTML 文件短期缓存

4. **安全加固**
   - 设置安全响应头
   - 定期更新服务器
   - 使用 HTTPS

### 🔧 环境要求

- **服务器**: 任何支持静态文件的 Web 服务器
- **域名**: 可选，支持 IP 直接访问
- **SSL**: 推荐使用 HTTPS
- **浏览器**: 现代浏览器 (Chrome 60+, Firefox 55+, Safari 12+)

### 🏥 健康检查

部署完成后，使用健康检查脚本验证服务状态：

```bash
# 检查本地服务
./health-check.sh

# 检查指定 URL
./health-check.sh http://your-domain.com

# 检查指定端口
./health-check.sh http://localhost 8080
```

健康检查包括：

- ✅ 服务可访问性
- ✅ HTTP 状态码
- ✅ 页面内容验证
- ✅ 静态资源检查
- ✅ 服务器状态 (Docker/Nginx/Apache)

## 📁 项目结构

```
top-secret/
├── index.html              # 主应用页面
├── demo.html               # 功能演示页面
├── test.html               # 测试页面
├── package.json            # 项目配置
├── README.md              # 项目说明
├── 开发文档.md             # 详细开发文档
└── js/
    ├── app.js             # 主应用逻辑
    ├── password-generator.js  # 密码生成算法
    └── platform-data.js   # 平台数据和自动补全
```

## 📝 更新日志

### V4.1 (2025-07-17) - 问题修复 🔧

- ✅ **会话历史修复**: 修复历史项点击无反应问题，增加调试信息
- ✅ **测试页面重构**: 修复异步 API 调用错误，支持 V2/V3/V4 全版本测试
- ✅ **演示页面更新**: 展示 V4 算法特性和双因素认证功能
- ✅ **可视化密码分析**: 实现彩色字符分类和图例显示
- ✅ **用户体验优化**: 增强交互反馈和错误处理

### V4.0 (2025-07-17) - 重大升级 🚀

- ✅ **多版本算法支持**: 全面支持 V2/V3/V4 三种算法
- ✅ **双因素认证**: V4 算法支持密钥文件作为第二因素
- ✅ **密码仪表盘**: 全新的可视化密码分析和强度显示
- ✅ **会话历史**: 智能记录平台历史，支持快速重用
- ✅ **增强安全性**: V3/V4 算法提供更强的隐私保护
- ✅ **文件哈希**: V4 使用文件内容哈希作为盐值增强
- ✅ **UI 全面升级**: 现代化仪表盘界面和交互体验

### V2.4 (2025-07-17)

- ✅ **自动补全完美优化**: 修复悬浮颜色不匹配和左侧空白问题
- ✅ **策略选择统一配色**: 红色主题贯穿整个界面，保持视觉一致性
- ✅ **演示页面防闪烁**: 解决组件加载时的闪烁问题，提升用户体验
- ✅ **测试页面全面美化**: 采用赛博朋克主题，增强视觉效果和交互体验
- ✅ **细节体验优化**: 状态指示器、加载动画、渐变效果等细节完善

### V2.3 (2025-07-17)

- ✅ **赛博朋克主题升级**: 采用现代热门的赛博朋克配色方案
- ✅ **自动补全优化**: 修复紫色悬浮问题，移除滚动条，保持滚动功能
- ✅ **按钮视觉升级**: 红色渐变按钮配合发光效果，更具科技感
- ✅ **交互体验提升**: 青绿色聚焦效果，现代化的悬浮动画
- ✅ **视觉层次优化**: 深色背景配合霓虹色彩，营造专业氛围

### V2.2 (2025-07-17)

- ✅ **彻底修复 undefined 问题**: 完全解决密码生成中的 undefined 字符问题
- ✅ **修复自动补全功能**: 解决平台名称自动补全不工作的问题
- ✅ **品牌更新**: 将项目名称更改为 "Top Secret"
- ✅ **背景色优化**: 更换为深蓝色系渐变背景，更加专业
- ✅ **按钮样式修复**: 解决生成密码按钮变白色的问题
- ✅ **脚本错误修复**: 修复 ES6 export 语法错误
- ✅ **调试功能增强**: 添加详细的依赖加载状态检查

### V2.1 (2025-07-17)

- ✅ **修复 undefined 问题**: 解决密码生成中出现 undefined 字符的问题
- ✅ **界面全面升级**: 采用现代化设计，参考热门网页设计趋势
- ✅ **动画优化**: 添加流畅的过渡动画和交互效果
- ✅ **性能优化**: 优化 PBKDF2 计算，减少界面卡顿
- ✅ **开关修复**: 修复高级策略开关的样式问题
- ✅ **新增演示页**: 添加功能演示页面 `demo.html`
- ✅ **测试增强**: 增加 undefined 检测测试

### V2.0 (2025-07-17)

- 🎉 **初始版本**: 基于 PBKDF2-SHA512 的密码生成器
- 🔒 **核心安全**: 实现工业级加密算法
- 🌏 **中文支持**: 智能拼音转换功能
- ⚙️ **高级配置**: 字符集和长度控制
- 📱 **响应式设计**: 完美适配各种设备

## 🔒 安全建议

1. **个人密钥安全**:

   - 使用强密码作为个人密钥
   - 不要在不安全的环境中输入
   - 定期更换个人密钥

2. **使用环境**:

   - 建议在本地或可信环境中使用
   - 可以离线使用，无需网络连接
   - 使用后清除浏览器缓存

3. **备份策略**:
   - 记住您的个人密钥
   - 记录使用的算法版本
   - 备份重要平台的生成参数

## 🛠️ 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **样式**: Tailwind CSS
- **加密**: CryptoJS (PBKDF2-SHA512)
- **中文处理**: pinyin-pro
- **部署**: 静态文件托管

## 📄 许可证

MIT License - 详见 LICENSE 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## ⚠️ 免责声明

本工具仅供个人使用，请确保在安全的环境中使用。开发者不对因使用本工具而导致的任何损失承担责任。

---

**🔐 Top Secret - 您的密码安全守护者**
