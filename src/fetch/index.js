import ajax from './ajax.js'
import send from './upload.js'
// import { aesEncrypt } from '../global/funs'

// 获取用户信息
export const submitUserInfo = params => ajax({url: 'admin/login', data: params})

// 获取管理员列表
export const getAdminList = params => ajax({url: 'admin/admin_list', data: params, method: 'GET'})

// 导入设备
export const importDevice = excel => send('/host/import_device', {excel})
