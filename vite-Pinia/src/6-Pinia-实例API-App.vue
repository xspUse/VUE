<template>
  <div>
    <p>actions-user: {{ Test.user }}</p>
    <hr />
    <p>actions-name: {{ Test.name }}</p>
    <hr />
    <!-- <p>getters:{{Test.newName}}</p>
    <hr /> -->
    <button @click="change">change</button>
    <p>
      <button @click="reset">reset</button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useTestStore } from './store'
const Test = useTestStore()

/**
 * 2.$subscribe在state中的值发生变化时会触发，可用于一些插件上
 * 第一个参数是工厂函数
 */
Test.$subscribe((args, state) => {
  console.log('=====>', args);
  console.log('=====>', state);
}, {
  // 当该组件被销毁时，依然存活，仍然能监听state的变化
  detached: true,
  deep: true,
  flush: 'post'
})

/**
 * 3.$onAction一调用actions里的方法就会被监听到
 * 第一个参数是工厂函数
 * 第二个参数为true时的作用是：当该组件被销毁时，仍然能监听actions，依然存活
 */
Test.$onAction((args) => {
  args.after(() => {
    console.log('after');
  })
  console.log(args);
}, true)

const change = () => {
  Test.setUser()
  // Test.setName('ast')
}

const reset = () => {
  /**
   * 1.$reset 没有参数，将state重置为初始状态
   */
  Test.$reset()
}

</script>

<style lang="less" scoped> 

</style>
