<template>
  <div>
    <input id="ipt" v-model="message" type="text">
    <input v-model="message1" type="text">

    <button @click="stopWatch">停止监听</button>
  </div>
</template>

<script setup lang="ts">
import { watchEffect, ref } from 'vue'

const message = ref<string>('飞机')
const message1 = ref<string>('飞机被子')

/**
 * 1.非惰性，立即执行更新一次
 * 2.里面使用到了对应的响应式数据，就会对其进行监听
 * 3.清除副作用，例如防抖、清除接口之类的，在回调函数里编写
 * 4.会返回一个停止监听的函数
 */
const stop = watchEffect((oninvalidate) => {
  // let ipt: HTMLInputElement = document.querySelector('#ipt') as HTMLInputElement // ts断言
  console.log('message====', message.value);
  // console.log('message====', message1.value);
  // console.log(ipt, 'ellll');
  
  oninvalidate(() => {
    // 先执行
    console.log('before');
  })
}, {
  /**
   * flush 更新执行时机： pre 组件更新前执行, sync 强制效果始终同步触发, post 组件更新后执行
   * */ 
  flush: 'post',
  /**
   * onTrigger 打断点进行调试
   */
  onTrigger (e) {
    debugger
  }
})
const stopWatch = () => stop()
</script>

<style>
</style>
