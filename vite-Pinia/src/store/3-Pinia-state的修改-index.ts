import { defineStore } from 'pinia'
import { Names } from './store-name'

// 第一个参数是应用程序中的唯一ID
export const useTestStore = defineStore(Names.TEST, {
  state: () => {
    return {
      current: 1000,
      name: '小满'
    }
  },
  // computed 修饰一些值
  getters: {

  },
  // methods 同步 异步都可以做 提交state
  actions: {
    setCurrent (num: number) {
      this.current = num
    }
  }
})
