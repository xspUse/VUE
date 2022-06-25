<template>
  <div>
    <!-- <input v-model="fistName" type="text">
    <input v-model="lastName" type="text">

    <div>{{name}}</div> -->
    <table border style="width: 800px;">
      <thead>
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th>单价</th>
          <th>操作</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td align="center">{{item.name}}</td>
          <td align="center"><button @click="addAndSub(item, false)">-</button>{{item.num}}<button @click="addAndSub(item, true)">+</button></td>
          <td align="center">{{item.price}}</td>
          <td align="center">
            <button @click="del(index)">删除</button>
          </td>
        </tr>
      </tbody>

      <tfoot>
        <td></td>
        <td></td>
        <td></td>
        <td align="center">总价：{{$total}}</td>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
// import { ref, computed } from 'vue'
// const fistName = ref('')
// const lastName = ref('')

// 写法1
// const name = computed(() => {
//   return fistName.value + '-----' + lastName.value
// })

// 写法2
// const name = computed({
//   get() {
//     return fistName.value + '-----' + lastName.value
//   },
//   set() {
//     fistName.value + '-----' + lastName.value
//   }
// })

/**
 * 购物车案例
 */
import { reactive, ref, computed } from 'vue';
type Shop = {
  name: string,
  num: number,
  price: number
}
let $total = ref(0)
const data = reactive<Shop[]>([
  {
    name: '裤子',
    num: 1,
    price: 100
  },
  {
    name: '裤子1',
    num: 4,
    price: 200
  },
  {
    name: '裤子2',
    num: 5,
    price: 300
  }
])
const addAndSub = (item: Shop, type: boolean): void => {
  if (item.num > 1 && !type){
    item.num--
  }
  if (item.num < 99 && type){
    item.num++
  }
}
const del = (index: number) => {
  data.splice(index, 1)
}
// 不用到处调用计算方法，依赖变了会自动改变
$total = computed<number>(() => {
  return data.reduce((prev,next)=> {
    return prev + (next.num * next.price)
  },0)
})
</script>

<style>
</style>
