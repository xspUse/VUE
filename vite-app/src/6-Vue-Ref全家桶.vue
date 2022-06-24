<template>
  <div>
    <button @click="changeMsg">change</button>
    {{ message }}
    <br />
    <button @click="shallowRefTestFn">对象的属性失去响应性</button>
    {{ shallowRefTest }}
    <button @click="triggerRefTestFn">强制更新DOM</button>
    <br />
    <button @click="changeMyRef">对象的属性失去响应性</button>
    {{ myReftest }}
  </div>
</template>

<script setup lang="ts">
import {ref, Ref, isRef, shallowRef, triggerRef, customRef} from 'vue'
// const message = ref<string>('nnn')
/**
 * 1.Ref ref的泛型接口
 */
const message: Ref<string> = ref('nnn')
/**
 * 2.isRef 判断是否为ref数据
 */
let notRef: number = 0
const changeMsg = () => {
  message.value = 'change msg'
  console.log(isRef(message)); // true
  console.log(isRef(notRef)); // false
}

/**
 * 3.shallowRef 使相应对象的属性不具有响应式
 */
// 作用：节省性能
const shallowRefTest = shallowRef({
  name: '节省性能'
})
const shallowRefTestFn = () => {
  shallowRefTest.value.name = '不是响应式了'
  // shallowRefTest.value = { name: '这样还是响应式' }
}

/**
 * 4.triggerRef强制更新DOM
 */
const triggerRefTestFn = () => {
  shallowRefTest.value.name = '强制更新DOM'
  triggerRef(shallowRefTest)
}

/**
 * 5.customRef自定义ref
 * 例如：在调用接口之后再更新DOM之类的业务需求
 */
function MyRef<T>(value: T) {
  return customRef((trank, trigger) => {
    return {
      get () {
        trank()
        return value
      },
      set (newVal: T) {
        console.log('set');
        value = newVal
        trigger()
      }
    }
  })
}
const myReftest = MyRef<string>('自定义ref')
const changeMyRef = () => {
  myReftest.value = '081F951B.png'
}
</script>

<style>
</style>
