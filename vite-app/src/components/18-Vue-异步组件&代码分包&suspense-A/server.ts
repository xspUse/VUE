type NameList = {
  name: string
}
// 一个简单的axios接口
export const axios = (url: string): Promise<NameList[]> => {
  return new Promise((resolve) => {
    let xhr:XMLHttpRequest = new XMLHttpRequest()

    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // 延时返回数据
        setTimeout(() => {
          // 转换成JSON格式，否则为字符串
          resolve( JSON.parse(xhr.responseText))
        }, 2000)
      }
    }

    xhr.send(null)
  })
}