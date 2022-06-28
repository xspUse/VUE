<template>
    <button @click="showLoading">切换</button>
</template>

<script setup lang="ts">
import { ComponentInternalInstance, getCurrentInstance } from 'vue';

// 使用自定义的插件
const {appContext} = getCurrentInstance() as ComponentInternalInstance

const showLoading = () => {
  appContext.config.globalProperties.$loading.show()

  setTimeout(() => {
    appContext.config.globalProperties.$loading.hide()
  }, 5000)
}
</script>

<style lang="less">

</style>