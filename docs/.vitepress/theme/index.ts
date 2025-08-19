/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import 'virtual:group-icons.css'
import update from "./components/update.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"

import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { h } from 'vue'

import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';

import MyLayout from './components/MyLayout.vue'
import MNavLinks from './components/MNavLinks.vue'

// 彩虹背景动画样式
let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,

  Layout: MyLayout,

  setup() {

    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();

    // giscus配置
    giscusTalk({
      repo: 'VenenoSix24/IvyLabs', //仓库
      repoId: 'R_kgDOPgUdBw', //仓库ID
      category: 'General', // 讨论分类
      categoryId: 'DIC_kwDOPgUdB84CuVLq', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
      },
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );

    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },

  enhanceApp({ app, router }) {

    // 注册全局组件
    app.component('MNavLinks' , MNavLinks)
    app.component('update', update)
    app.component('ArticleMetadata' , ArticleMetadata)

    // 彩虹背景动画样式
    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/'),
        { immediate: true },
      )
    }

  },
}
// 彩虹背景动画样式
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}