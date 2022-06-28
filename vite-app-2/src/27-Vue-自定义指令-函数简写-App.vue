<template>
    <div>
      <input v-model="value" type="text">
      <A v-move="{background: value}"></A>
    </div>
</template>

<script setup lang="ts">
import A from './components/A.vue'
import { Directive, DirectiveBinding, ref } from 'vue'
const value = ref<string>('')
type Dir = {
  background: string
}
const vMove:Directive = (el:HTMLElement, binding:DirectiveBinding<Dir>) => {
  el.style.background = binding.value.background
}

</script>

<style lang="less">

</style>