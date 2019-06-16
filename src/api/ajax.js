/*
 ajax请求
 返回值promise对象 (promise此时是response.data)
 */

import axios from 'axios'
export default function ajax(url, data={}, type='GET'){
  return new Promise((resolve, reject) => {
    let promise
    //GET方法拼接带参url地址字符串
    if (type='GET'){
      let dataStr
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if(dataStr !== ''){
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
    }else{
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}
