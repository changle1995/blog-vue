const DEV_URL = 'http://localhost:10080' + '/blog/'
const PRO_URL = location.protocol + '//' + location.host + '/blog/'

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
      SUCCESS_CODE: '200' // 成功
    }
  },

  // 存储在localStore数据的字段
  LOCAL_STORAGE: {
    USER: 'user',

    // user中包含的字段
    USER_VALUE: {
      USER_TOKEN: 'user-token',
      USERNAME: 'username',
      ROUTES: 'routes',

      // routes中包含的字段
      ROUTES_VALUE: {
        NAME: 'name',
        PROPERTY_NAME: 'propertyName',
        PROPERTY_VALUE: 'propertyValue',
        LEVEL: 'level',
        PARENT_NAME: 'parentName'
      }
    }
  }

}
