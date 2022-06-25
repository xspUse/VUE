<template>
  <div class="menu">
    菜单区域
    <div>
      {{title}}
    </div>
    <div>{{data}}</div>

    <div>
      <button @click="clickTap">派发</button>
    </div>
    <div>
      <button @click="clickTap2">派发2</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
/**
 * 1.props传值
 */
type Props = {
  title: string,
  data?: number[] // 可传可不传
}
// 默认值
withDefaults(defineProps<Props>(), {
  title: '我是默认值',
  // 复杂数据类型通过return设置，防止数据被引用
  data:() => [1, 2, 3, 4]
})


/**
 * 2.emits传值给父组件，两个地方都要写
 */
const list = reactive<number[]>([6, 6, 6])
const emit = defineEmits(['on-click', 'on-click2'])
const clickTap = () => {
  emit('on-click', list, true)
}
const clickTap2 = () => {
  emit('on-click2', list, false)
}

/**
 * 3.向外暴露属性
 */
const flag = ref(false)
defineExpose({
  list,
  flag
})
</script>

<style lang="less" scoped>
.menu {
  width: 200px;
  border-right: 1px solid #ccc;
}
</style>