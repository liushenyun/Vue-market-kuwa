import { baseUrl } from '../config'

export default (url, params) => {
  let formData = new FormData()
  for (let [key, value] of Object.entries(params)) {
    formData.append(key, value)
  }
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('POST', baseUrl + url, true)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let obj = xhr.response
          typeof obj !== 'object' && (obj = JSON.parse(obj))
          obj['errcode'] === 0 ? resolve(obj) : reject(obj)
        } else {
          reject(xhr)
        }
      }
    }
    xhr.send(formData)
  })
}
