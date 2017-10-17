import {
  weChatOnly
} from '../global/funs.js'
let apiUrl = require('../../apiurl')

let baseUrl = ''
let env = process.env.NODE_ENV

switch (env) {
  case 'development':
    baseUrl = '/test/'
    break
  case 'testproduction':
    baseUrl = apiUrl
    break
  case 'production':
    weChatOnly()
    baseUrl = apiUrl
    break
}

export {
  baseUrl
}
