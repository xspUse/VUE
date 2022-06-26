<template>
    <div>
      <input v-model="num.current" step="20" type="number" />
      <div>
        {{num.tweenedNumber.toFixed(0)}}
      </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import gsap from 'gsap'

const num = reactive({
  current: 0,
  tweenedNumber: 0
})
watch(() => num.current, (newVal, oldVal) => {
  // 数字滚动
  gsap.to(num, {
    duration: 1,
    tweenedNumber: newVal
  })
})
</script>

<style lang="less">

</style>
