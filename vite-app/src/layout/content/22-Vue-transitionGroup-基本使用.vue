<template>
    <div class="content">
      <button @click="add">ADD</button><button @click="pop">POP</button>
      <div class="wraps">
        <TransitionGroup 
          enter-active-class="animate__animated animate__bounceIn" 
          leave-active-class="animate__animated animate__hinge"
        >
          <div class="item" v-for="item in list" :key="item">{{item}}</div>
        </TransitionGroup>
      </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import 'animate.css'
const list = reactive<number[]>([1, 2, 3, 4, 5, 6])
const add = () => {
  list.push(list.length+1)
}
const pop = () => {
  list.pop()
}
</script>

<style lang="less" scoped> 
.wraps {
  display: flex;
  flex-wrap: wrap;
  // word-break自动换行的处理方法  break-all允许在单词内换行 
  word-break: break-all;
  border: 1px solid #ccc;
  .item {
    margin: 10px;
    font-size: 30px;
  }
}
.content {
  flex: 1;
  margin: 20px;
  border: 1px solid #ccc;
  // 让页面可以滚动
  overflow: auto;
}
</style>