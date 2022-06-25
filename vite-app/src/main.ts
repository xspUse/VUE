import { createApp } from 'vue'
import App from './App.vue'
// 全局导入重置默认样式
import './assets/css/reset.less'

// 全局注册组件
import Card from './components/card/index.vue'
createApp(App).component('Card', Card).mount('#app')
