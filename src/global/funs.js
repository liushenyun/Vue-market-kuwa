import md5 from 'md5'
import GibberishAES from '../plugins/gibberish-aes'
import {
  MD5_KEY,
  PASS_KEY
} from './cons'

// aes加密
export const aesEncrypt = item => GibberishAES.aesEncrypt(item, PASS_KEY).trim()
  // aes解密
export const aesDecrypt = item => GibberishAES.aesDecrypt(item, PASS_KEY)
  // 仅允许微信登陆
export const weChatOnly = () => {
  if (!navigator.userAgent.includes('MicroMessenger')) {
    window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE&connect_redirect=1#wechat_redirect'
  }
}

// 获取 uid & token
let _getQueryArgs = () => {
  // let qs = 'uid=201&token=124524'
  let qs = location.search.length > 0 ? location.search.substring(1) : ''
  let args = {}
  let items = qs.length ? qs.split('&') : []
  let key = ''
  let value = ''
  let i = 0
  items.forEach(v => {
    i = v.indexOf('=')
    key = decodeURIComponent(v.substring(0, i))
    value = decodeURIComponent(v.substring(i + 1))
    key.length && (args[key] = value)
  })
  return args
}
let _now = () => {
  return parseInt(new Date().getTime() / 1000)
}
let _userInfo = null
export const getUserInfo = () => {
  _userInfo || (_userInfo = _getQueryArgs())
  return {
    rtime: _now(),
    ..._userInfo
  }
}

export const getSign = data => {
  let arr = []
  for (let kv of Object.entries(data)) {
    arr.push(kv.join('='))
  }
  return md5(arr.sort().join('&') + `&key=${MD5_KEY}`)
}

/**
 *
 *  @description 用于判断数组中所有元素是否都被选中
 * @param {Array} data
 * @example [{ name: '45', checked: false }, { name: '45', checked: false }]
 * @returns {Boolean}
 */
export const isAllChecked = data => {
  let _data = data;
  return _data.every((val) => {
    return val.checked;
  })
}
