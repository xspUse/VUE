<template>
    <div> 
      <header class="header">
          <!-- 2.具名插槽：name="header" -->
        <slot name="header"></slot>
      </header>
      <main class="main">
        <div v-for="(item, index) in data">
          <!-- 1.匿名插槽只能有一个 2.作用域插槽，通过:index、:data将相关数据传递给父组件 -->
          <slot :index="index" :data="item"></slot>
        </div>
      </main>
      <footer class="footer">
        <slot name="footer"></slot>
      </footer>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

type Names = {
  name: string,
  age: number
}

const data = reactive<Names[]>([
  {
    name: 'ddddd',
    age: 201
  },{
    name: 'eee',
    age: 202
  },{
    name: 'fff',
    age: 203
  },{
    name: 'ggg',
    age: 204
  }
])

</script>

<style lang="less" scoped> 
.header {
  height: 200px;
  background: red;
  color: #fff;
}
.main {
  height: 300px;
  background: green;
  color: #fff;
}
.footer {
  height: 200px;
  background: blue;
  color: #fff;
}
</style>