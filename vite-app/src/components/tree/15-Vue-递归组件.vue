<template>
    <div style="margin-left: 10px"> 
      <div @click.stop="clickItem(item)" v-for="(item, index) in data" :key="index">
        {{item.name }}
        <!-- 自己调用自己 -->
        <TreeItem @on-click="clickItem" v-if="item?.children?.length" :data="item.children"></TreeItem>
      </div>
    </div>
</template>

<script setup lang="ts">
/**
 * 递归组件，法1
 */
// import TreeItem from './index.vue'

type TreeList = {
  name: string,
  icon?: string,
  children?: TreeList[] | []
}

type Props = {
  data?: TreeList[]
}
defineProps<Props>()

const emit = defineEmits(['on-click'])
const clickItem = (item: TreeList) => {
  emit('on-click', item)
}
</script>


<script lang="ts">
/**
 * 递归组件，法2
 * 给组件弄个命名空间 vue2方法
 * lang要一样
 */
export default {
  name: "TreeItem"
}
</script>
<style lang="less" scoped> 

</style>