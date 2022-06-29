<template>
    <div>
      我是插槽
      <slot></slot>
    </div>
</template>

<script setup lang="ts">


</script>

<style lang="less" scoped>
// scoped必须写上
// 1.插槽选择器
// :slotted(.a ){
//   color: red;
// }
</style>
