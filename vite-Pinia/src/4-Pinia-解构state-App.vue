<template>
  <div>origin value {{ Test.current }}</div>
    <div> 
      pinia: {{current}}---{{name}}
      change: <button @click="change">change</button>
    </div>
</template>

<script setup lang="ts">
import { useTestStore } from './store'
import { storeToRefs } from 'pinia'
const Test = useTestStore()
// pinia 解构不具有响应式, 使用 storeToRefs 包裹变成响应式
const { current, name } = storeToRefs(Test)

const change = () => {
  current.value++
  
}

</script>

<style lang="less" scoped> 

</style>
