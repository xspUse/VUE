<template>
  <div id="hello">我是hello组件</div>
  <div>{{count}}</div>
  <button @click="count++">count</button>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref } from 'vue'
console.log('setup');
const count = ref(0)

onBeforeMount(() => {
  let div = document.querySelector('#hello')
  console.log('挂载之前===>onBeforeMount', div);
})

onMounted(() => {
  let div = document.querySelector('#hello')
  console.log('挂载完毕===>onMounted', div);
})

onBeforeUpdate(() => {
  console.log('更新之前===>onBeforeUpdate');
})

onUpdated(() => {
  console.log('更新完毕===>onUpdated');
})

onBeforeUnmount(() => {
  console.log('卸载之前===>onBeforeUnmount');
})

onUnmounted(() => {
  console.log('卸载完毕===>onUnmounted');
})
</script>

<style scoped>
#hello {
  border: 1px solid #ccc;
}
</style>
