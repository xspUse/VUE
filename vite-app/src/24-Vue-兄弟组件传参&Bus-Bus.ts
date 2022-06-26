
type BusClass = {
  emit: (name: string) => void,
  on: (name: string, callback: Function) => void
}
type PramsKey = string | number | symbol

type List = {
  [key:PramsKey]: Array<Function>
}

// implements接口继承
class Bus implements BusClass {
  list:List
  constructor () {
    this.list = {}
  }
  emit (name:string, ...args:Array<any>) {
    let evnentName: Array<Function> = this.list[name]
    evnentName.forEach(fn => {
      fn.apply(this, args)
    })
  }
  on (name: string, callback: Function) {
    let fn: Array<Function> = this.list[name] || []
    fn.push(callback)
    this.list[name] = fn
  }
}

export default new Bus()