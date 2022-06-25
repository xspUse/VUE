<template>
  <div>
    <div><button @click="change">gaibian</button></div>
    <div>{{state}}</div>

    <div>'------foo'{{foo}}</div>
    <div>'------bar'{{bar}}</div>
    <button @click="change1">change1</button>
  </div>
</template>

<script setup lang="ts">
import { toRef, reactive, toRefs, toRaw } from 'vue'
/**
 * 1.toRef
 */
const obj = {
  foo: 1,
  bar: 1
}
const state = toRef(obj, 'bar')
const change = () => {
  state.value++

  console.log('----原始对象', obj);

  console.log('----引用对象', state);
}
/**
 * 2.toRefs 使解构出来的数据也为响应式
 */
const obj1 = reactive({
  foo: 1,
  bar: 1
})
const { foo, bar } = toRefs(obj1)
const change1 = () => {
  foo.value++
  bar.value--
}

/**
 * 3.toRaw 将响应式对象变成原始对象，可节省内存
 */
const obj2 = reactive({
  foo: 1,
  bar: 1
})
const raw = toRaw(obj2)
console.log('响应式的', obj2);
console.log('raw', raw);

</script>

<style>
</style>
