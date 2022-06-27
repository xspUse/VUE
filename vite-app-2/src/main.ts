import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

const Mit = mitt()

const app = createApp(App)

// 扩展globalProperties的声明
// TypeScript注册
// 由于必须要拓展 ComponentCustomProperties 类型才能获得类型提示
declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit
  }
}

// 全局挂载
app.config.globalProperties.$Bus = Mit

app.mount('#app')
