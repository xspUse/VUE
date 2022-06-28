import { createApp } from 'vue'
import App from './App.vue'
// element-plus引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// Antd引入 
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
const app = createApp(App)

// app.use(ElementPlus)

app.use(Antd)
app.mount('#app')
