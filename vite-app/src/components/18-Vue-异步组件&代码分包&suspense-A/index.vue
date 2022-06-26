<template>
    <div> 
      <div v-for="item in list">
        {{item.name}}
      </div>
    </div>
</template>

<script setup lang="ts">
import { axios } from './server'

const list = await axios('./data.json')

</script>

<style lang="less" scoped> 

</style>