<template>
    <div class="content"> 
      <!-- 2.异步组件使用 -->
      <Suspense>
        <template #default>
          <A></A>
        </template>

        <template #fallback>
          <div>
            loading....
          </div>
        </template>
      </Suspense>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineAsyncComponent } from 'vue'
/**
 * 1.异步组件引入
 */
const A = defineAsyncComponent(() => import('../../components/A/index.vue'))

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