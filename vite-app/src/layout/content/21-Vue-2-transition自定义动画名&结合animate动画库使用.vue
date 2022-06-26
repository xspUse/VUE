<template>
    <div class="content">
      <button @click="flag = !flag">切换</button>
      <!-- 自定义动画名，可结合第三方css库使用 -->
      <!-- <Transition enter-to-class="e-to" enter-active-class="e-active" enter-from-class="e-from" name="fade"> -->
      <!-- duration：动画时间 两种方式：1. :duration="50" 2. :duration="{enter: 50, leave: 1000}"-->
      <Transition :duration="{enter: 50, leave: 1000}" leave-active-class="animate__animated animate__bounce" enter-active-class="animate__animated animate__fadeIn">
        <div v-if="flag" class="box"></div>
      </Transition>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
// 1.引入
import 'animate.css'
const flag = ref<boolean>(true)
</script>

<style lang="less" scoped> 
.box {
  width: 200px;
  height: 200px;
  background: red;
}
// 自定义动画名
// .e-from {
//   width: 0;
//   height: 0;
//   transform: rotate(360deg);
// }
// .e-active {
//   transition: all 1.5s ease;
// }

// .e-to {
//   width: 200px;
//   height: 200px;
// }

.content {
  flex: 1;
  margin: 20px;
  border: 1px solid #ccc;
  // 让页面可以滚动
  overflow: auto;
}
</style>