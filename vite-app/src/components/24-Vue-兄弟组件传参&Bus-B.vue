<template>
    <div class="B">
      <h1>我是B组件</h1>
      {{Flag}}
    </div>
</template>

<script setup lang="ts">
import Bus from '../Bus'
import { ref } from 'vue'
const Flag = ref(false)
Bus.on('on-click', (flag:boolean) => {
  Flag.value = flag
})
</script>

<style lang="less">
.B {
  width: 200px;
  height: 200px;
  background: blue;
  color: #fff;
}
</style>
