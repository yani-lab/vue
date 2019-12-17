/**
 * 对后台请求的地址的封装，URL格式如下：
 * 模块名_实体名_操作
 */
export default {
  'SERVER': 'http://localhost:8080', //服务器
  ///////////// 这是通用请求挂载处 start /////////////
  'VERIFICATION':'/base/verificationCode',  //获取验证码
  'USER_LOGIN':'/user/login',//登录


  ///////////// 资产模块请求配置  end /////////////

  'getFullPath': k => { //获得请求的完整地址，用于mockjs测试时使用
    return this.SERVER + this[k];

  }
}
