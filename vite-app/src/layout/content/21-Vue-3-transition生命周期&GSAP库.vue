<template>
    <div class="content">
      <button @click="flag = !flag">切换</button>
      <!-- 8个声明周期钩子 -->
      <!-- <Transition 
        @before-enter="EnterFrom"
        @enter="EnterActive"
        @after-enter="EnterTo"
        @enter-cancelled="EnterCancel"
        @before-leave="LeaveFrom"
        @leave="LeaveActive"
        @after-leave="LeaveTo"
        @leave-cancelled="LeaveCancel"
      > -->
      <Transition 
        @before-enter="EnterFrom"
        @enter="EnterActive"
        @leave="LeaveActive"
      >
        <div v-if="flag" class="box"></div>
      </Transition>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
// 1.引入
import gsap from 'gsap'
const flag = ref<boolean>(true)

const EnterFrom = (el:Element) => {
  // set(DOM, 配置)
  gsap.set(el, {
    width: 0,
    height: 0
  })
}
const EnterActive = (el:Element, done:gsap.Callback) => {
  // onComplete回调
  gsap.to(el, {
    width: 200,
    height: 200,
    onComplete: done
  })
}
const LeaveActive = (el:Element, done:gsap.Callback) => {
  gsap.to(el, {
    width: 0,
    height: 0,
    onComplete: done
  })
}
/**
 * 进入
 */
// const EnterFrom = (el:Element) => {
//   // el当前DOM元素
//   console.log('进入之前');
// }
// const EnterActive = (el:Element, done:Function) => {
//   console.log('进入过渡曲线');
//   setTimeout(() => {
//     // 3s之后 '过渡完成' 才会打印
//     done()
//   },3000)
// }
// const EnterTo = (el:Element) => {
//   console.log('进入过渡完成');
// }
// const EnterCancel = (el:Element) => {
//   console.log('进入过渡效果被打断');
// }

/**
 * 离开
 */
// const LeaveFrom = (el:Element) => {
//   // el当前DOM元素
//   console.log('离开之前');
// }
// const LeaveActive = (el:Element, done:Function) => {
//   console.log('离开过渡曲线');
//   setTimeout(() => {
//     // 3s之后 '过渡完成' 才会打印
//     done()
//   },5000)
// }
// const LeaveTo = (el:Element) => {
//   console.log('离开过渡完成');
// }
// const LeaveCancel = (el:Element) => {
//   console.log('离开过渡效果被打断---');
// }

</script>

<style lang="less" scoped> 
.box {
  width: 200px;
  height: 200px;
  background: red;
}
.content {
  flex: 1;
  margin: 20px;
  border: 1px solid #ccc;
  // 让页面可以滚动
  overflow: auto;
}
</style>