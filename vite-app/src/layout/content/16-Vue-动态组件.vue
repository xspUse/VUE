<template>
    <div class="content"> 
      <div class="tab">
        <div @click="switchCom(item)" v-for="item in data" :key="item.name">{{item.name}}</div>
      </div>
      <component :is="current.comName"></component>
    </div>
</template>

<script setup lang="ts">
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'
import { reactive, ref, markRaw } from 'vue'

/**
 * markRaw作用：给使用的对象进行标记，让proxy跳过它
 */
const obj = reactive({
  name: 'ddd'
})
const o = markRaw(obj)

console.log(o);


type Tabs = {
  name: string,
  comName: any
}
// proxy
const data = reactive<Tabs[]>([
  {
    name: '我是A组件',
    comName: markRaw(A)
  },
  {
    name: '我是B组件',
    comName: markRaw(B)
  },
  {
    name: '我是C组件',
    comName: markRaw(C)
  },
])

// Pick作用：从Tabs中摘出conName的数据类型
type Com = Pick<Tabs, 'comName'>
let current = reactive<Com>({
  comName: data[0].comName
})

const switchCom = (item: Tabs) => {
  current.comName = item.comName
}
</script>

<style lang="less" scoped> 
.tab {
  display: flex;
  .active {
    background: skyblue;
  }
  > div {
    padding: 20px;
    border: 1px solid #ccc;
  }
}
.content {
  flex: 1;
  margin: 20px;
  border: 1px solid #ccc;
  // 让页面可以滚动
  overflow: auto;
  &-items {
    padding: 20px;
    border: 1px solid #ccc;
  }
}
</style>