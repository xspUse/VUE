<template>
    <div>
      <!-- 8.props传值 -->
      <!-- 9.接收emit -->
      <renderDom title="我是标题" @on-click="getNum"></renderDom>
    </div>
</template>

<script setup lang="ts">
import renderDom from './App';

const getNum = (num: number) => {
  console.log(num, '我接收到了');
  
}
</script>

<style lang="less">

</style>