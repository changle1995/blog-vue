const DEV_URL = 'http://localhost:10080' + '/blog/'
const PRO_URL = 'http://localhost:8008' + '/blog/'

let baseUrl = process.env.NODE_ENV === 'production' ? PRO_URL : DEV_URL

export default {

  BASE_URL: baseUrl,  // 后台接口根url

  // 请求request中相关参数配置
  REQUEST: {
    // 头部所需参数的名称
    HEADER: {
      USER_TOKEN: 'user-token'
    }
  },

  // 请求response中相关参数配置
  RESPONSE: {
    CODE: 'code',
    MESSAGE: 'message',
    DATA: 'data',

    // 返回的code值对应的含义
    CODE_VALUE_MAP: {
      SUCCESS_CODE: '200', // 成功
      LOGIN_FAILURE_CODE: '401.1', // 登录失败,账号或密码错误
      UNAUTHORIZED_CODE: '401.2', // 未登录,当前无操作权限
      ACCESS_DENIED_CODE: '403' // 已登录,当前无操作权限
    }
  },

  // 存储在localStore数据的字段
  LOCAL_STORAGE: {
    USER: 'user',

    // user中包含的字段
    USER_VALUE: {
      USER_TOKEN: 'user-token',
      ID: 'id',
      USERNAME: 'username',
      AVATAR: 'avatar',
      DESCRIPTION: 'description',
      EMAIL: 'email',
      PHONE_NUMBER: 'phoneNumber',
      LAST_LOGIN: 'lastLogin'
    }
  }

}
