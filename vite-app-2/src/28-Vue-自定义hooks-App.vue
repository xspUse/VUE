<template>
    <div>
      <img id="img" width="300" height="300" src="./assets/logo.png" alt="">
    </div>
</template>

<script setup lang="ts">
// 自定义hooks将图片转换为base64
import useBase64 from './hooks'
useBase64({el: '#img'}).then(res => {
  console.log(res.baseUrl);
  
})
</script>

<style lang="less">

</style>