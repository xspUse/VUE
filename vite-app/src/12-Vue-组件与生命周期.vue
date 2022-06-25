<template>
  <div>
    <HelloWorldVue v-if="flag"></HelloWorldVue>
  </div>
  <div>
    <button @click="flag = !flag">改变组件状态</button>
  </div>
</template>

<script setup lang="ts">
/**
 * 组件名不能用成元素名，例如div、p等
 */
import { ref } from 'vue';
import HelloWorldVue from './components/HelloWorld.vue';
let flag = ref(true)
</script>

<style>
</style>
