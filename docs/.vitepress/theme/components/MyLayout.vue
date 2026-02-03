<!-- .vitepress/theme/MyLayout.vue -->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { nextTick, provide, computed } from 'vue'
// 组件1、2、3
import backtotop from "./backtotop.vue";

const { isDark, frontmatter } = useData()
const layoutClass = computed(() => frontmatter.value.layoutClass)

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  // 标记为颜色模式切换，用于区分页面切换动画
  // NOTE: 必须在 startViewTransition 之前添加，确保快照捕获时 class 已存在
  document.documentElement.classList.add('theme-transitioning')

  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })

  // 监听 transition 完成（包括动画），然后移除标记
  transition.finished.then(() => {
    document.documentElement.classList.remove('theme-transitioning')
  })

  await transition.ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      fill: 'forwards',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  )
})

</script>

<template>
  <DefaultTheme.Layout v-bind="$attrs">

    <!-- doc-footer-before插槽 组件 -->
    <template #doc-footer-before>
      <backtotop />
    </template>

    <!-- layout-top插槽 组件 -->
    <template #layout-top>
    </template>

  </DefaultTheme.Layout>
</template>

<style>
/* 
 * 颜色模式切换时的动画样式
 * NOTE: 颜色模式切换时禁用页面过渡动画，使用自定义的 clipPath 圆形扩展动画
 * 使用 !important 确保覆盖 page-transition.css 中的样式
 */
html.theme-transitioning::view-transition-old(root),
html.theme-transitioning::view-transition-new(root) {
  animation: none !important;
  mix-blend-mode: normal;
}

html.theme-transitioning::view-transition-old(root),
html.theme-transitioning.dark::view-transition-new(root) {
  z-index: 1 !important;
}

html.theme-transitioning::view-transition-new(root),
html.theme-transitioning.dark::view-transition-old(root) {
  z-index: 9999 !important;
}

/* 恢复原始开关按钮 */
/* .VPSwitchAppearance {
  width: 22px !important;
} */

.VPSwitchAppearance .check {
  transform: none !important;
}

/* 修正因视图过渡导致的按钮图标偏移 */
.VPSwitchAppearance .check .icon {
  top: -2px;
}
</style>