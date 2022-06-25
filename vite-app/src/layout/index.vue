<template>
    <div class="layout"> 
      <Menu ref="menus" @on-click="getList" @on-click2="getList" :data="list" title="裤子"></Menu>
      <div class="layout-right">
        <Header></Header>
        <Content></Content>
      </div>
    </div>
</template>

<script setup lang="ts">
import Menu from './menu/index.vue'
import Header from './header/index.vue'
import Content from './content/index.vue'
import { reactive, ref } from 'vue';
/**
 * 1.props传值
 */
const list = reactive<number[]>([1, 2, 3])
/**
 * 2.接收子组件传的值emits
 */
const getList = (list: number[], flag: boolean) => {
  // console.log('我是子组件传过来的list', list, flag);
  console.log(menus.value);
  
}
/**
 * 3.绑定实例，获取实例属性
 * */ 
const menus = ref(null)
</script>

<style lang="less" scoped> 
.layout {
  display: flex;
  height: 100%;
  overflow: hidden;
  // &父级，会自动拼接
  &-right{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>