<template>
    <div>
      <button @click="flag = !flag">切换</button>
      <A v-if="flag" v-move:aaa.xm="{background: 'green', flag:flag}"></A>
      <A v-move:aaa.xm="{background: 'green', flag:flag}"></A>
    </div>
</template>

<script setup lang="ts">
import A from './components/A.vue'
import { Directive, DirectiveBinding, ref } from 'vue'
const flag = ref<boolean>(true)
type Dir = {
  background: string
}
const vMove:Directive = {
  created () {
    console.log('======>created');
  },
  beforeMount () {
    console.log('======>beforeMount');
  },
  mounted (el:HTMLElement,dir:DirectiveBinding<Dir>) {
    console.log('======>mounted');
    console.log(dir.value.background);
    el.style.background = dir.value.background
  },
  beforeUpdate () {
    console.log('======>beforeUpdate');
  },
  updated () {
    console.log('======>updated');
  },
  beforeUnmount () {
    console.log('======>beforeUnmount');
  },
  unmounted () {
    console.log('======>unmounted');
  }
}

</script>

<style lang="less">

</style>