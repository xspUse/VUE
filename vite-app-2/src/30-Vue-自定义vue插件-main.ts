import { createApp } from 'vue'
import App from './App.vue'
import Loading from './components/loading'
const app = createApp(App)

// 声明文件
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $loading: {
      show:() => void,
      hide:() => void
    }
  }
}

app.use(Loading)

app.mount('#app')
