import { defineStore } from 'pinia'
import { Names } from './store-name'

type User = {
  name: string,
  age: number
}

// let result = {
//   name: '飞机',
//   age: 999
// }

const Login = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: '飞机',
        age: 999
      })
    }, 2000)
  })
}

// 第一个参数是应用程序中的唯一ID
export const useTestStore = defineStore(Names.TEST, {
  state: () => {
    return {
      user: <User>{},
      name: '小飞机'
    }
  },
  // computed 修饰一些值
  getters: {
    newName ():string {
      return `$-${this.name}-${this.getUserAge}`
    },
    getUserAge ():number {
      return this.user.age
    }
  },
  // methods 同步 异步都可以做 提交state
  // actions中的方法可以互相调用
  actions: {
    // setUser () {
    //   this.user = result;
    // }

    async setUser () {
      const result = await Login()
      this.user = result
      this.setName('大飞机')
    },
    setName (name: string) {
      this.name = name
    }
  }
})
