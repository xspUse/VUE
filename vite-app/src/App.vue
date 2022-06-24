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
