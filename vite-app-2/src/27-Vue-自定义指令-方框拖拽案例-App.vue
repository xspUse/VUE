<template>
    <div v-move class="box">
      <div class="header"></div>
      <div>内容</div>
    </div>
</template>

<script setup lang="ts">
import { Directive, DirectiveBinding, ref } from 'vue'

const vMove:Directive<any, void> = (el:HTMLElement, binding:DirectiveBinding) => {
  // 获取使用这个指令下的第一个子元素，断言这个元素为div类型
  let moveElement:HTMLElement = el.firstElementChild as HTMLDivElement
  console.log(moveElement);
  const mouseDown = (e:MouseEvent) => {
    // 坐标
    let X = e.clientX - el.offsetLeft
    let Y = e.clientY - el.offsetTop
    const move = (e: MouseEvent) => {
      console.log(e);
      el.style.left = e.clientX - X + 'px'
      el.style.top = e.clientY - Y + 'px'
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move)
    })
  }
  moveElement.addEventListener('mousedown', mouseDown)
}
</script>

<style lang="less">
.box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 3px solid black;
  .header {
    height: 20px;
    background: black;
  }
}
</style>