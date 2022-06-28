
import {onMounted} from 'vue'
// 自定义hooks将图片转换为base64
type Options = {
  el: string
}
export default function (options: Options): Promise<{baseUrl: string}> {
  return new Promise((resolve) => {
    onMounted(() => {
      let img:HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
      console.log(img, '=====>');
      // 加载之后再传入
      img.onload = () => {
        resolve({
          baseUrl: base64(img)
        })
      }
    })
  
    const base64 = (el:HTMLImageElement) => {
      const canvas = document.createElement('canvas')
      // 获取当前环境
      const ctx = canvas.getContext('2d')
      canvas.width = el.width
      canvas.height = el.height
      ctx?.drawImage(el,0,0,canvas.width,canvas.height)
      // 导出base64的图片, 此处图片类型写死为png
      return canvas.toDataURL('image/png')
    }
  })
}