<template>
    <div>
      <button @click="flag = !flag">change flag</button>
      <div>{{flag}}</div>
    </div>
</template>

<script setup lang="ts">
const flag = ref<boolean>(false)
</script>

<style lang="less">

</style>