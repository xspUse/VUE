<template>
    <!-- 1.插槽 2.全局选择器 -->
    <!-- <A>
      <div class="a">私人订制DIV</div>
    </A> -->

    <!-- 3.动态css -->
    <!-- <div class="xm">
      动态css
    </div> -->

    <!-- 4.css module -->
    <!-- 默认写法 -->
    <!-- <div :class="[$style.xm, $style.border]"> -->
    <!-- 命名写法 -->
    <div :class="[zs.xm, zs.border]">
      动态css
    </div>
</template>

<script setup lang="ts">
// 1.插槽 2.全局选择器
// import A from './components/A.vue'
// 3.动态css 4.css module
import { ref, useCssModule } from 'vue';

/**
 * 3.动态css
 */
// 写法1 
// const style = ref('red')

// 写法2 对象
// const style = ref({
//   color: 'red'
// })

// setTimeout(() => {
//   style.value.color = 'blue'
// }, 2000)

/**
 * 4.css module 场景主要用于写 tsx
 */
// css hooks
const css = useCssModule('zs')
console.log(css);

</script>

<!-- <style>
/* 所有的div都会生效 */
div {
  color: red;
}
</style> -->
<!-- <style lang="less" scoped> 
// 2.全局选择器
// :global(div) {
//   color: pink;
// }

// 3.动态css
.xm {
  // 写法1
  // 不可以用 :(style)
  // color: v-bind(style)
  // 写法2
  color: v-bind('style.color')
}
</style> -->

<!-- 4.css module -->
<!-- 默认写法 -->
<!-- <style module>
.xm {
  color: red;
}
.border {
  border: 1px solid #ccc;
}
</style> -->

<style module="zs">
.xm {
  color: red;
}
.border {
  border: 1px solid #ccc;
}
</style>