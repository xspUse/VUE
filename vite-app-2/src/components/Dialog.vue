<template>
    <div v-if="modelValue" class="dialog"> 
      <div class="dialog-header">
        <div>标题---{{title}}</div>
        <div @click="close">x</div>
      </div>
      <div class="dialog-content">内容</div>
    </div>
</template>

<script setup lang="ts">

type Props = {
  modelValue: boolean,
  title: string,
  modelModifiers?:{
    xm: boolean
  },
  titleModifiers?:{
    aaa: boolean
  }
}
const PropsData = defineProps<Props>()
// 1.modelValue默认v-model 2.title自定义v-model
const emit = defineEmits(['update:modelValue', 'update:title'])

// 3.自定义修饰符  结构:自定义名字+Modifiers 如：modelModifiers、titleModifiers
// 作用：可根据修饰符是否存在，做出相应的操作

const close = () => {
  console.log(PropsData.titleModifiers);
  if (PropsData.modelModifiers?.xm) {
    emit('update:title', '我是一条狗')
  } else {
    emit('update:title', '我是一只猫')
  }
  emit('update:modelValue', false)
}
</script>

<style lang="less" scoped> 
.dialog {
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &-header {
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  &-content {
    padding: 10px;
  }
}
</style>