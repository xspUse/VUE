<template>
  <div>
    <div>{{message}}</div>
    <div>{{message1}}</div>
    <div>{{shallowReactiveTest}}</div>
    <button @click="change1">1</button>
    <button @click="change2">2</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, readonly, shallowReactive } from 'vue'

/**
 * 1.异步赋值，通过push等方式进行添加，不能直接 = 赋值，否则会失去响应式
 */
// 1.异赋值1
let message = reactive<number[]>([]) // [] {}
setTimeout(() => {
  const arr = [1, 2, 3, 4]
  // message = arr
  message.push(...arr)
}, 1000)

// 2.异赋值2
type O = {
  list: number[]
}
let message1 = reactive<O>({
  list: []
})
setTimeout(() => {
  const arr = [1, 2, 3, 4]
  message1.list = arr
}, 1000)

/**
 * 2.readonly 拷贝一份proxy对象，并将其设置为只读，不可修改
 */
const person = reactive({
  count: 1
})
let copy = readonly(person)
// copy.count++

/**
 * 3.shallowReactive 只能对浅层的数据响应式，如果是深层的数据只会改变值，不会改变视图
 * 注：挂载前的首次执行会进行更新
 * 值改变后，其它响应式数据改变更新视图，会引发该类型数据更新视图
 */
const shallowReactiveTest = shallowReactive({
  test: 'xxx',
  nav: {
    bar: {
      name: '我是谁'
    }
  }
})
const change1 = () => {
  shallowReactiveTest.test = '我被改了'
}
const change2 = () => {
  shallowReactiveTest.nav.bar.name = '我被改了nav-bar-name'
}
// 挂载前执行会改变视图
// change1()
// change2()
</script>

<style>
</style>
