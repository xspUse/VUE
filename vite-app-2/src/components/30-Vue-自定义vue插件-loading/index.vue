<template>
    <div v-if="isShow" class="loading"> 
      <div class="loading-content">Loading....</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let isShow = ref<boolean>(false)
const show = () => {
  isShow.value = true
}
const hide = () => {
  isShow.value = false
}

// 将函数或属性暴露出去
defineExpose({
  isShow,
  show,
  hide
})
</script>

<style lang="less" scoped> 
.loading {
  position: fixed;
  // inset 属性用作定位元素的 top、right、bottom、left 这些属性的简写。
  // 类似于 margin 和 padding 属性，依照“上右下左”的顺序
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  &-content {
    font-size: 30px;
    color: #fff;
  }
}
</style>