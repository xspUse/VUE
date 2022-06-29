<template>
    <div> 
      pinia: {{Test.current}}---{{Test.name}}
      change: <button @click="change">change</button>
    </div>
</template>

<script setup lang="ts">
import { useTestStore } from './store'

const Test = useTestStore()

/**
 * 修改state值的方式
 */
// 1.直接修改 Test.current++
// 2.对象方式批量修改 Test.$patch({ current: 888, name: '娃娃' })
// 3.工厂函数(推荐) Test.$patch((state) => { state.current = 999 state.name = '范冰冰' })
// 4.整个对象的所有值都要写(即使只是修改一个值, 用的不多)  Test.$state = { current: 2000, name: 'xmzs' }
// 5.通过actions进行修改 Test.setCurrent(567)

const change = () => {
  // Test.setCurrent()
  Test.setCurrent(567)
}

</script>

<style lang="less" scoped> 

</style>
