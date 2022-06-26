<template>
    <div class="A">
      <button @click="emitB">派发一个事件</button>
      <h1>我是A组件</h1>
    </div>
</template>

<script setup lang="ts">
import Bus from '../Bus'
let flag = false
const emitB = () => {
  flag = !flag
  Bus.emit('on-click', flag)
}
</script>

<style lang="less">
.A {
  width: 200px;
  height: 200px;
  background: green;
  color: #fff;
}
</style>
