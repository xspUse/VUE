<template>
    <div> 
      pinia: {{Test.current}}---{{Test.name}}
    </div>
</template>

<script setup lang="ts">
import { useTestStore } from './store'

const Test = useTestStore()
</script>

<style lang="less" scoped> 

</style>
