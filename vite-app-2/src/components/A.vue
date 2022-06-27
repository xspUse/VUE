<template>
    <div class="A">
      <button @click="emit">emit</button>
      <h1>我是A组件</h1>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance()

const emit = () => {
  // emit(自定义事件, ...参数)
  instance?.proxy?.$Bus.emit('on-xm', 'mitt')
  instance?.proxy?.$Bus.emit('on-xm2', 'mitt2')
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
