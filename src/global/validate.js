import Vue from 'vue'

const _rules = {
  isNonEmpty: {
    validate: v => v !== '',
    instructions: '不能为空'
  },
  isNumber: {
    validate: v => !isNaN(v),
    instructions: '必须为数字'
  },
  isFrom6To20: {
    validate: v => /^\w{6,20}$/.test(v),
    instructions: '长度在6位到20位以内'
  },
  isAlphaNum: {
    validate: v => /^[a-z0-9]$/i.test(v),
    instructions: '必须为字母或数字'
  },
  isMobile: {
    validate: v => /^181\d{8}$/.test(v),
    instructions: '格式不正确'
  }
}

// [ label:String(), rules:String(rule[(&rule)*]) ]
const _config = {
  // username: ['用户名', 'isNonEmpty'],
  password: ['密码', 'isNonEmpty&isFrom6To20'],
  age: ['年龄', 'isNonEmpty&isNumber'],
  mobile: ['手机号', 'isMobile']
}

export const validate = data => {
  let item
  let itemConfig
  let checker
  let checkers
  let rule // 规则
  let pass // 是否通过验证 函数返回
  let messages = [] // 存储错误提示
  for (item in data) {
    if (data.hasOwnProperty(item)) {
      itemConfig = _config[item]
      // 忽略没有定义验证规则的字段
      if (!itemConfig) continue
      // 提取字段定义的验证规则
      checkers = itemConfig[1].split('&')
      // 循环验证
      for (checker of checkers) {
        // 提取规则
        rule = _rules[checker]
        // 当规则不存在或是输入规则有误
        if (!rule) throw Error(`wrong validate rule: ${checker}`)
        // 启动验证函数，验证不通过则添加错误信息
        rule.validate(data[item]) || messages.push(itemConfig[0] + rule.instructions)
      }
    }
  }
  pass = messages.length === 0
  pass || Vue.prototype.$toast({
    message: messages.join('，'),
    position: 'bottom'
  })
  return pass
}
