import Vue from 'vue'
import qs from 'qs'
import Store from '../store'
import { baseUrl } from '../config'

/** 通用参数 **/
const _commonParams = {}

/**
 * 请求参数过滤
 * @param {Object} data  需要处理的参数对象
 * @param {Enum} type    ['noNull':去除空参数 | 'toQuery':转换为查询字符串]
 * @returns {Object, String}
 * @private
 */
const _formateReqData = (data, type) => {
  switch (type) {
    case 'noNull':
      Object.keys(data).forEach(k => {
        (data[k] === '' || data[k] === undefined) && delete data[k]
      })
      break
    case 'toQuery':
      let query = ''
      for (let [k, v] of Object.entries(data)) {
        query += `&${k}=${v}`
      }
      return `?${query.slice(1)}`
  }
}

/**
 * 返回数据处理
 * @param {Object} data
 * @param {Function} resolve
 * @param {Function} reject
 * @return {Promise}
 */
const _formateResData = (res, resolve, reject) => {
  switch (res['errcode']) {
    case 0: resolve(res.data); break // 操作成功
    case 401004: reject(0); break    // 账号不存在
    case 401005: reject(1); break    // 密码错误
    case 401006: reject(2); break    // 未登录
    default:                         // 其它错误
      let msg = res['errmsg'].replace(/<\/?p>/g, '')
      Vue.prototype.$toast({message: msg, position: 'bottom'})
  }
}

/** ajax函数的默认参数 **/
const _ajaxOptions = {
  url: '#',
  method: 'POST',
  async: true,
  timeout: 0,
  data: {},
  noNull: true,
  dataType: 'text',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
  onprogress: () => {},
  onuploadprogress: () => {}
}

/**
 * ajax函数
 * @param {Object}      参数设置，支持的参数如下
 *   url:                     url地址，默认"#"
 *   method:                  请求方法，仅支持GET,POST,默认POST
 *   async:                   是否异步，默认true
 *   timeout:                 请求时限，超时将在promise中调用reject函数
 *   data:                    发送的数据
 *   noNull:                  发送的数据参数不允许为空字符串和undefined 默认 true
 *   dataType:                接受的数据的类型，默认为text
 *   headers:                 一个对象，包含请求头信息
 *   onprogress:              处理onprogress的函数
 *   ouploadprogress:         处理.upload.onprogress的函数
 * @return {Promise}
 *   该函数注册xhr.onloadend回调函数，判断xhr.status是否属于 [200,300)&&304 ，
 *   如果属于，则promise引发resolve状态，允许拿到xhr对象
 *   如果不属于，或已经引发了ontimeout,onabort,则引发reject状态，允许拿到xhr对象
 *
 * {Object} reject:
 *     errorType:     错误类型
 *     abort_error:   xhr对象调用abort函数
 *     timeout_error: 请求超时
 *     onerror:       xhr对象触发了onerror事件
 *     send_error:    发送请求出现错误
 *     status_error:  响应状态不属于 [200,300)&&304
 */
export default optionsOverride => {
  optionsOverride.url = baseUrl + optionsOverride.url
  // 将传入的参数与默认设置合并
  let options = {}
  for (let k in _ajaxOptions) {
    options[k] = optionsOverride[k] || _ajaxOptions[k]
  }
  // 参数处理开始
  let data = options.data
  let url = options.url
  // 处理函数
  options.noNull && _formateReqData(data, 'noNull')
  options.method === 'GET' && (url += _formateReqData(data, 'toQuery'))
  options.method === 'POST' && Object.assign(data, _commonParams)
  // XMLHttpRequest开始
  let xhr = new XMLHttpRequest()
  return new Promise(function (resolve, reject) {
    xhr.open(options.method, url, options.async)
    xhr.timeout = options.timeout

    // 设置请求头
    for (var k in options.headers) {
      xhr.setRequestHeader(k, options.headers[k])
    }

    // 注册xhr对象事件
    xhr.onprogress = options.onprogress
    xhr.upload.onprogress = options.onuploadprogress
    xhr.responseType = options.dataType

    xhr.onabort = () => { reject(new Error({errorType: 'abort_error', xhr: xhr})) }
    xhr.ontimeout = () => { reject({errorType: 'timeout_error', xhr: xhr}) }
    xhr.onerror = () => { reject({errorType: 'onerror', xhr: xhr}) }
    xhr.onloadend = () => {
      setTimeout(() => { Store.dispatch('showLoading', false) }, 200)
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        let res = JSON.parse(xhr.responseText)
        _formateResData(res, resolve, reject)
      } else {
        reject({ errorType: 'status_error', xhr: xhr })
      }
    }

    try {
      xhr.send(qs.stringify(data))
    } catch (e) {
      reject({ errorType: 'send_error', error: e })
    }
  })
}
