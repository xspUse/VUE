<template>
    <div class="App">
      <h1>我是根组件</h1>
      <A></A>
    </div>
</template>

<script setup lang="ts">
import A from './components/A.vue'
import { provide, ref, getCurrentInstance } from 'vue'
provide('flag', ref(false))
let a = getCurrentInstance()
console.log(a);

</script>

<style lang="less">
.App {
  width: 300px;
  height: 300px;
  background: red;
  color: #fff;
}
</style>
