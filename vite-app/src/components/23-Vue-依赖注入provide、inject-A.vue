<template>
    <div class="A">
      <h1>我是A组件</h1>
      <div>
        {{data}}
      </div>
      <B></B>
    </div>
</template>

<script setup lang="ts">
import B from './B.vue'
import { inject } from 'vue';
let data = inject('flag')
</script>

<style lang="less">
.A {
  width: 250px;
  height: 250px;
  background: green;
  color: #fff;
}
</style>
