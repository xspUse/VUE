<template>
    <div class="content">
      <button @click="flag = !flag">切换</button>
      <Transition name="fade">
        <div v-if="flag" class="box"></div>
      </Transition>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const flag = ref<boolean>(true)
</script>

<style lang="less" scoped> 
.box {
  width: 200px;
  height: 200px;
  background: red;
}
// 隐藏到显示
.fade-enter-from {
  width: 0;
  height: 0;
  transform: rotate(360deg);
}
.fade-enter-active {
  transition: all 1.5s ease;
}

.fade-enter-to {
  width: 200px;
  height: 200px;
}
// 显示到隐藏
.fade-leave-from {
  width: 200px;
  height: 200px;
  transform: rotate(360deg);
}
.fade-leave-active {
  transition: all 1.5s ease;
}

.fade-leave-to {
  width: 0;
  height: 0;
}
.content {
  flex: 1;
  margin: 20px;
  border: 1px solid #ccc;
  // 让页面可以滚动
  overflow: auto;
}
</style>