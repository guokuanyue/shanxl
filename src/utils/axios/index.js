import Axios from 'axios'
import Vue from 'vue'
//Axios 二次封装 满足不同需求的封装 Axios本身就是promise 直接rerurn 出去，链式调用即可
export function axios (url, data) {
  return Axios({
    url: `${Store.state.permission.constUrl}${url}`,
    method: 'post',
    data: data,
    headers: {
      token: Store.state.permission.token
    }
  }).then(res => {
    resolve(res)
  }).catch(err => {
    reject(err)
  })
}

