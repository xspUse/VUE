<template>
    <div class="B">
      <h1>我是B组件</h1>
      <!-- {{Flag}} -->
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance()
// on(自定义事件, 回调函数)
// instance?.proxy?.$Bus.on('on-xm', (str) => {
//   console.log(str, '====>B');
  
// })

// * 代表监听所有的事件触发  type 事件名称
// instance?.proxy?.$Bus.on('*', (type, str) => {
//   console.log(type, str, '====>B');
  
// })

const Bus = (str:any) => {
  console.log(str, '====>B');
}
instance?.proxy?.$Bus.on('on-xm', Bus)
// off(取消指定的mitt事件, 取消的函数)
instance?.proxy?.$Bus.off('on-xm', Bus)
// all.clear()取消所有的mitt事件
instance?.proxy?.$Bus.all.clear()
</script>

<style lang="less">
.B {
  width: 200px;
  height: 200px;
  background: blue;
  color: #fff;
}
</style>
