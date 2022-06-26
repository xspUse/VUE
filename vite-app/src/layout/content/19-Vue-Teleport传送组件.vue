<template>
    <div style="background: red; position: relative;" class="content"> 
    <!-- 传送组件：隔绝父组件样式的影响，v-show无法对其生效，v-if可以 -->
      <Teleport to=".modal">
        <div class="loading">
          loading...
        </div>
      </Teleport>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineAsyncComponent } from 'vue'


</script>

<style lang="less" scoped> 
.loading {
  position: absolute;
  right: 10px;
  top: 10px;
  background: blue;
}
.content {
  flex: 1;
  margin: 20px;
  border: 1px solid #ccc;
  // 让页面可以滚动
  overflow: auto;
}
</style>