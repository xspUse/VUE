<template>
    <div class="content"> 
      <Dialog>
        <!-- 2.具名插槽 #header -->
        <template #header>
          <div>
            上面，太刺激了！
          </div>
        </template>
        <!-- 1.匿名插槽 default  3.作用域插槽，父通过{data, index}获取子传递的参数  -->
        <template #default="{data, index}">
          <div>
            {{data.name}}---{{data.age}}----{{index}}
          </div>
        </template>
        <!-- 具名插槽 v-slot:footer -->
        <template v-slot:footer>
          <div>
            低部，太刺激了！
          </div>
        </template>
      </Dialog>

      <Dialog>
        <!-- 4.动态插槽 #[name] -->
        <template #[name]>
          <div>动态插槽</div>
        </template>
      </Dialog>
    </div>
</template>

<script setup lang="ts">
import Dialog from '../../components/dialog/index.vue'
import { reactive, ref, markRaw } from 'vue'
// 动态插槽
// const name = ref('header')
const name = ref('default')
</script>

<style lang="less" scoped> 
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