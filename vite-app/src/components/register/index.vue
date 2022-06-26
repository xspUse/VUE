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
        <tr>
          <td>验证码</td>
          <td><input v-model="form.code" type="text"></td>
        </tr>
      </table>
      <button @click="submit">注册</button>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue';
const form = reactive({
  login: '',
  psd: '',
  code: ''
})
const submit = () => {
  console.log(form);
  
}
onActivated(() => {
  form.code = ''
})
</script>

<script lang="ts">
export default {
  name: 'Register'
}
</script>

<style lang="less" scoped> 

</style>