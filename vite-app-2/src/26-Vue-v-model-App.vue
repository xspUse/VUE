<template>
    <div>
      <button @click="flag = !flag">change {{flag}}</button>
      <div>标题{{ title }}</div>
      <!-- 1.默认v-model -->
      <!-- 2.自定义v-model -->
      <!-- 3.自定义修饰符 aaa  xm-->
      <Dialog v-model.xm="flag" v-model:title.aaa="title"></Dialog>
    </div>
</template>

<script setup lang="ts">
import Dialog from './components/Dialog.vue'
import { ref } from 'vue'
const flag = ref<boolean>(true)
const title = ref<string>('我是一只狗')
</script>

<style lang="less">

</style>