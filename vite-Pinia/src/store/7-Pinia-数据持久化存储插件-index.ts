import { defineStore } from 'pinia'
import { Names } from './store-name'

type User = {
  name: string,
  age: number
}

const Login = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: '飞机',
        age: 999
      })
    }, 1)
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
  actions: {
    async setUser () {
      const result = await Login()
      this.user = result
      // this.setName('大飞机')
    },
    setName (name: string) {
      this.name = name
    }
  }
})

//base
export const useBaseStore = defineStore(Names.BASE, {
  state: () => {
    return {
      baseCurrent: 1,
      name: '小飞机'
    }
  },
  actions: {
    async setBaseCurrent () {
      // const result = await Login()
      this.baseCurrent++
      // this.setName('大飞机')
    },
    setName (name: string) {
      this.name = name
    }
  }
})