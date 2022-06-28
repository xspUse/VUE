<template>
    <div class="A">
      <h1>我是A组件</h1>
    </div>
</template>

<script setup lang="ts">
// vue自带hooks
// 1. useAttrs 获取传入的所有属性
// 2. useSlots 获取插槽
import { useAttrs, useSlots } from 'vue';
let attr = useAttrs()
console.log(attr);

</script>

<style lang="less">
.A {
  width: 200px;
  height: 200px;
  background: green;
  color: #fff;
}
</style>
