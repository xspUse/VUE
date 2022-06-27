import { ref } from 'vue'

const v = ref<string>('')

const flag = false

const arr = [1,2,3,4,5]

// 8.props传参
type Props = {
  title: string
}
// 9.ctx上下文
const renderDom = (props: Props, ctx: any) => {
  return (
    <div>
      {/* 1. v-model 写法 */}
      {/* <input v-model={v.value} type="text" />
      <div>{v.value}</div> */}

      {/* 2. v-show */}
      {/* <div v-show={flag}>惊雷</div>
      <div v-show={!flag}>飞鸿</div> */}

      {/* 3. v-if不能直接使用，使用js编程思想 三元运算 */}
      {/* { flag ? <div>惊雷</div> : <div>飞鸿</div> } */}

      {/* 4. v-for不能直接使用, 使用js编程 map */}
      {/* 5. v-bind直接写 data-index={v} */}
      {/* 6. v-on 使用驼峰方式写 onClick={clickTap} */}
      <div>{props.title}</div>
      {
        arr.map(v => {
          // return (<div onClick={clickTap} data-index={v}>${v}</div>)
          // 7. v-on的传参
          return (<div onClick={clickTap.bind(this, ctx)} data-index={v}>${v}</div>)
        })
      }
    </div>
  )
}

const clickTap = (ctx: any) => {
  // console.log('我被点了', v);
  ctx.emit('on-click', 123)
}

export default renderDom