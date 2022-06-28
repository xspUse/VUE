<template>
    <div class="bg"> 
      <el-input class="ipt" />
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped> 
.bg {
  background: black;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .ipt {
    width: 200px;
    // /deep/.el-input__inner{
    // vue3推荐使用 :deep()
    :deep(.el-input__inner){
      background: red;
    }
  }
}
</style>