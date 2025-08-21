# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## 链接卡片测试

<Links
  :items="[
    {
      icon: { icon: 'line-md:iconify2-static', color: '#1769AA' },
      size: 48,
      name: 'iconify',
      desc: '开源的图标库，提供了数以万计的矢量图标，支持多种框架和平台。它允许开发者轻松地在项目中使用各种图标，并且支持深浅模式切换。'
    }
  ]"
/>

<Links
  :grid="3"
  :items="[
    // 深浅色模式的 iconify 图标 + v-html 渲染
    {
      icon: { light: 'ion:logo-vercel', dark: 'ion:logo-vercel', color: { light: '#000000', dark: '#FFFFFF' } },
      name: `<p style='margin:0; font-style: italic;'>Vercel</p>`,
      desc: '适用于前端框架的无服务器部署平台，支持静态生成和即时预览。',
      link: 'https://vercel.com/'
    },
    // 深浅模式 iconify 图标，无 color
    {
      icon: { light: 'skill-icons:vite-dark', dark: 'skill-icons:vite-light' },
      name: 'Vite',
      desc: '极速的现代前端构建工具，支持热更新与按需加载。',
      link: 'https://vitejs.dev/'
    },
    // 无图标
    {
      name: 'MDN Web Docs',
      desc: '权威的 Web 技术文档库，涵盖 HTML、CSS 和 JavaScript。',
      link: 'https://developer.mozilla.org/'
    }
  ]"
/>

<Links
  :grid="2"
  :items="[
    // 普通图片
    {
      image: 'https://i.theojs.cn/logo/alipay.svg',
      name: '支付宝',
      desc: '移动支付平台，提供便捷的在线支付和转账服务',
      link: 'https://i.theojs.cn/alipay.webp',
      linkText: '立即查看'
    },
    // 深浅模式图片
    {
      image: {
        light: 'https://i.theojs.cn/logo/github.svg',
        dark: 'https://i.theojs.cn/logo/github-dark.svg',
        crop: true
      },
      name: 'GitHub',
      desc: '全球最大代码托管平台，支持版本控制和协作开发。',
      link: 'https://github.com/',
      linkText: '跳转链接'
    }
  ]"
/>

## 代码块测试

```sh
#默认有行号
pnpm -v
```

```sh:no-line-numbers
#关闭行号
pnpm -v
```

::: code-group

```sh [pnpm]
#查询pnpm版本
pnpm -v
```

```sh [yarn]
#查询yarn版本
yarn -v
```

:::

## 链接统一性调试

https://default.link.com

https://weizwz.com

https://note.weizwz.com

https://vitepress.dev

https://hexo.io

https://git-scm.com

https://github.com

https://gitee.com

https://developer.mozilla.org

https://vite.dev

https://webpack.js

https://vuejs.org

https://twikoo.js.org

https://element-plus.org

https://nodejs.org

https://npmjs.com

https://react.dev

https://typescriptlang.org

https://uniapp.dcloud.net.cn

https://siliconflow.cn

https://www.deepseek.com

https://code.visualstudio.com

https://marketplace.visualstudio.com

https://www.google.com

https://chrome.google.com

https://mp.weixin.qq.com

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
