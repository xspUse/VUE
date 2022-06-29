<template>
    <div> 
      <input v-model="message" type="text">
      <div ref="div">{{ message }}</div>
      <button @click="change">change</button>
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
const message = ref<string>('xm')
const div = ref<HTMLElement>()

const change = async () => {
  message.value = 'xmzs'
  // 为了性能优化设计了nextTick
  await nextTick() // 不添加这一步，下面打印的是 xm
  console.log(div.value?.innerText); // xmzs
  
}
</script>

<style lang="less" scoped> 

</style>