<template>
  <div>
    {{R}}
    <button @click="Rfn">Rfn</button>
    <button @click="changeMsg">change</button>
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'
/**
 * shallowRef可以让对象不更新视图，
 * 但ref定义的数据发生改变使视图更新时，会导致shallowRef定义对象的视图发生变化
 */
const R = ref('hello')
const Rfn = () => {
  R.value = 'dff'
}
const message = shallowRef({
  foo: 'xx',
  ber: 'lll'
})
const changeMsg = () => {
  message.value.foo = 'change msg'
  console.log(message);
  
}
</script>

<style>
</style>
