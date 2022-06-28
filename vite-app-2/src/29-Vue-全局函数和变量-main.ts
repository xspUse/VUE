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


type Filter = {
  format: <T>(str: T) => string
}
// 声明要扩充@vue/runtime-core包的声明.
// 这里扩充"ComponentCustomProperties"接口，因为他是vue3中实例的属性的类型
declare module '@vue/runtime-core' {
  // ComponentCustomProperties 名字固定
  export interface ComponentCustomProperties {
    $filters: Filter,
    $env: string
  }
}
// 定义完之后，使用处还是爆红，重启编译器

/**
 * 1.定义全局函数
 */
app.config.globalProperties.$filters = {
  format <T>(str: T): string {
    return `真·${str}`
  }
}
/***
 * 2.定义全局变量
 */
app.config.globalProperties.$env = 'dev'

// 全局挂载
app.config.globalProperties.$Bus = Mit

app.mount('#app')
