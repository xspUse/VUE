<template>
    <div class="content">
      <button @click="flag = !flag">切换</button>
      <!-- <Transition 
        appear
        appear-from-class="from"
        appear-active-class="active"
        appear-to-class="to"
      > -->
      <!-- 结合animate.css使用 -->
      <Transition 
        appear
        appear-active-class="animate__animated animate__bounceOut"
      >
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
// .from {
//   width: 0;
//   height: 0;
// }
// .active {
//   transition: all 2s ease;
// }
// .to {
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