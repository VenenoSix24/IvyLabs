# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

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
