<template>
  <div>
    <p>Test-user: {{ Test.user }}</p>
    <hr />
    <p>Base-name: {{ Base.baseCurrent }}</p>
    <hr />
    <!-- <p>getters:{{Test.newName}}</p>
    <hr /> -->
    <button @click="change">change</button>
    <p>
      <button @click="changeu">changeu</button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useTestStore, useBaseStore } from './store'
const Test = useTestStore()
const Base = useBaseStore()


const change = () => {
  Test.setUser()
}

const changeu = () => {
  Base.setBaseCurrent()
}

</script>

<style lang="less" scoped> 

</style>
