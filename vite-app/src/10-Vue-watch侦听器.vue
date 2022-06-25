<template>
  <div>
    <input v-model="message.nav.bar.name" type="text">
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue';

/**
 * 1.监听多个数据源
 */
// watch([message, message2], (newVal, oldVal) => {
//   console.log('新的', newVal);
//   console.log('旧的', oldVal);
// })

/**
 * 2.ref定义的深层次数据需要开启deep才能监听到
 */
// const message = ref({
//   nav: {
//     bar: {
//       name: 'xs'
//     }
//   }
// })
// watch(message, (newVal, oldVal) => {
//   console.log('新的', newVal);
//   console.log('旧的', oldVal);
// }, {
//   // 深度监听
//   deep: true,
//   // 立即执行一次
//   immediate: true
// })

/**
 * 3.reactive定义的深层次数据不需要开启也能监听到
 */
const message = reactive({
  nav: {
    bar: {
      name: 'xs'
    }
  }
})
watch(message, (newVal, oldVal) => {
  console.log('新的', newVal);
  console.log('旧的', oldVal);
}, {
  immediate: true
})

/**
 * 4.监听对象的单个属性
 */
// const message = reactive({
//   name: 'xx',
//   name2: 'sssss'
// })
// watch(() => message.name, (newVal, oldVal) => {
//   console.log('新的', newVal);
//   console.log('旧的', oldVal);
// }, {
//   // 立即执行一次
//   immediate: true
// })
</script>

<style>
</style>
