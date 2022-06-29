import { createApp, toRaw } from 'vue'
import App from './App.vue'
import { createPinia, PiniaPluginContext } from 'pinia'

// pinia插件 数据本地持久化存储
type Options = {
  key?:string
}

const __piniaKey__:string = 'xiaoman'

// 存值
const setStorage = (key:string, value:any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

// 取值
const getStorage = (key:string) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
} 

const piniaPlugin = (options: Options) => {
  // 函数珂里化
  return (context: PiniaPluginContext) => {
    const {store} = context
    const data = getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`)
    store.$subscribe(() => {
      // 存值
      setStorage(`${options?.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state))
    })
    return {
      ...data
    }
  }
}

const store = createPinia()

store.use(piniaPlugin({
  key: 'pinia'
}))

let app = createApp(App)

app.use(store)

app.mount('#app')
