import { App, createVNode, render } from 'vue'
// 将Loading组件封装为插件
import Loading from './index.vue'

export default {
  install (app: App) {
    // 转成虚拟DOM
    const vnode = createVNode(Loading)
    // 转成真实DOM
    render(vnode, document.body)
    // 挂载到全局
    app.config.globalProperties.$loading = {
      show:vnode.component?.exposed?.show,
      hide:vnode.component?.exposed?.hide
    }

    // 使用
    // app.config.globalProperties.$loading.show()
  }
}