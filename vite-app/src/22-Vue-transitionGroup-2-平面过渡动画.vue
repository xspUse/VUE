<template>
    <div>
      <button @click="random">random</button>
      <TransitionGroup move-class="mmm" class="wraps" tag="div">
        <div class="items" v-for="item in list" :key="item.id">{{item.number}}</div>
      </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import _ from 'lodash'
let list = ref(Array.apply(null, {length: 81} as number[]).map((_,index) => {
  return {
    id: index,
    number: (index % 9) + 1
  }
}))
console.log(list.value);
const random = () => {
  list.value = _.shuffle(list.value)
}
</script>

<style lang="less">
.wraps {
  display: flex;
  flex-wrap: wrap;
  // 一行放9个,每个宽度25px+边框的2px
  width: calc((25px + 2px) * 9);
  .items {
    width: 25px;
    height: 25px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.mmm {
  transition: all 1s;
}
</style>
