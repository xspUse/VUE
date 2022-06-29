<template>
  <div>
    <p>actions-user: {{ Test.user }}</p>
    <hr />
    <p>actions-name: {{ Test.name }}</p>
    <hr />
    <p>getters:{{Test.newName}}</p>
    <hr />
    <button @click="change">change</button>
  </div>
</template>

<script setup lang="ts">
import { useTestStore } from './store'
const Test = useTestStore()

const change = () => {
  Test.setUser()
}

</script>

<style lang="less" scoped> 

</style>
