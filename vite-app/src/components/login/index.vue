<template>
    <div> 
      <table>
        <tr>
          <td>账号</td>
          <td><input v-model="form.login" type="text"></td>
        </tr>
        <tr>
          <td>密码</td>
          <td><input v-model="form.psd" type="password"></td>
        </tr>
      </table>
      <button @click="submit">登录</button>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue';
const form = reactive({
  login: '',
  psd: ''
})
const submit = () => {
  console.log(form);
  
}

/**
 * 使用keep-alive包裹后才会进行 onActivated， onDeactivated
 */
onActivated(() => {
  console.log('login onActivated');
  
})

onDeactivated(() => {
  console.log('login onDeactivated');
  
})

onMounted(() => {
  console.log('login onMounted');
  
})
onUnmounted(() => {
  console.log('login onUnmounted');
  
})
</script>

<script lang="ts">
export default {
  name: 'Login'
}
</script>

<style lang="less" scoped> 

</style>