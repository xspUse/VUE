<template>
    <div class="content">
      <button @click="switchCom">切换</button>
      <!-- include指定需要被缓存的组件，以组件名生效 -->
      <!-- <keep-alive :include="['Login', 'addd']"> -->
      <!-- exclude指定不被缓存的组件 -->
      <!-- max指定缓存的组件最大数量 -->
      <keep-alive :max="10" :exclude="['Login', 'addd']">
        <Login v-if="flag"></Login>
        <Register v-else></Register>
      </keep-alive>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineAsyncComponent } from 'vue'
import Login from '../../components/login/index.vue'
import Register from '../../components/register/index.vue'

const flag = ref(true)
const switchCom = () => {
  flag.value = !flag.value
}
</script>

<style lang="less" scoped> 
.loading {
  position: absolute;
  right: 10px;
  top: 10px;
  background: blue;
}
.content {
  flex: 1;
  margin: 20px;
  border: 1px solid #ccc;
  // 让页面可以滚动
  overflow: auto;
}
</style>