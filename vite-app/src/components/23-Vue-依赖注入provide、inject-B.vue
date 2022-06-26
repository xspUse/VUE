<template>
    <div class="B">
      <h1>我是B组件</h1>
      <button @click="changeFlag">change Flag</button>
      <div>
        {{data}}
      </div>
    </div>
</template>

<script setup lang="ts">
import { inject, Ref, ref } from 'vue';
// inject第二个参数ref(false) 为兜底逻辑
let data = inject<Ref<boolean>>('flag', ref(false))

const changeFlag = () => {
  data.value = true
}
</script>

<style lang="less">
.B {
  width: 200px;
  height: 200px;
  background: blue;
  color: #fff;
}
</style>
