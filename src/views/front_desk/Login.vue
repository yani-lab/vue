<template>
  <el-main>
    <el-card class="box-card box-login">
      <div class="clearfix" slot="header">
        <span>用户登录</span>
        <div style="float: right; padding: 3px 0">还没账号?请
          <el-link type="primary" href="#/Register">注册</el-link>
        </div>
      </div>
      <el-form label-width="100px" style="width:40%;height: 300px;" >
        <el-form-item label="用户名" label-width="60px">
          <el-input v-model="name" placeholder="请输入用户名">
          </el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="60px">
          <el-input show-password v-model="password" placeholder="请输入密码">
          </el-input>
        </el-form-item>
        <el-form-item label="验证码" label-width="60px">
          <el-row>
            <el-col :span="16">
              <el-input  type="text" v-model="verificationCode" placeholder="请输入验证码" autocomplete="off"></el-input>
            </el-col>
            <el-col :span="8">
              <img id="img" :src="this.verificationCodeSrc" width="116px" height="40px" @click="changeVerificationCode" >

            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label-width="60px">
          <el-button @click="doSubmit" style="width:100%;background: rgb(255, 120, 0);color: rgb(255, 255, 255);">立即登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-main>

</template>





<script>
    import commonUtils from "../../api/commonUtils";

    export default {
        name: 'Login',
        data: function() {
            return {
                name: null,
                password: null,
                verificationCode:null,
                verificationCodeSrc:'',
				yzm:null
            }
        },
        methods: {

            doSubmit: function() {
                let params = {
                    userName: this.name,
                    userPwd: this.password,
                };
<<<<<<< HEAD
// 				if(this.verificationCode.toLowerCase()==this.yzm.toLowerCase()){
// 					let url = this.axios.urls.USER_LOGIN;
// 					this.axios.post(url, params).then(resp => {
// 					    if(resp.data.code == 1) {
// 					        //提示登录成功
// 					        this.$message({
// 					            message: "登录成功",
// 					            type: 'success'
// 					        });
// 					        //存储用户对象
// 					        this.$store.commit('setUser',{
// 					            user:resp.data.data
// 					        });
// 					        //登录成功就直接跳入到首页吧
// 					        this.$router.push({
// 					            path:'/Investment'
// 					        })
// 					    }else{
// 					        this.$message({
// 					            message: resp.data.msg,
// 					            type: 'error'
// 					        });
// 					    }
// 					}).catch(resp => {
// 					    this.$message({
// 					        message: resp.data.msg,
// 					        type: 'error'
// 					    });
// 					});
// 				}
// 				else{
// 					alert('验证码错误，请重新输入');
// 					this.verificationCode='';
// 					this.changeVerificationCode();
// 				}
//             },
//             //更新验证码
//             changeVerificationCode(){
//                 let url = this.axios.urls.VERIFICATION;
//                 this.axios.get(url, {}).then(resp => {
// 					console.log(resp.data.data.path);
// 					this.yzm=resp.data.data.yzm;
// 					this.verificationCodeSrc=resp.data.data.path;
//                 }).catch(resp => {
//                     console.log(resp);
//                 });
//             }
//
//         },
//         created() {
//           //是否是
//             //初始化验证码
//             this.changeVerificationCode();
//             //初始化工具类
//             commonUtils.init(this);
=======
				if(this.verificationCode.toLowerCase()==this.yzm.toLowerCase()){
					let url = this.axios.urls.USER_LOGIN;
					this.axios.post(url, params).then(resp => {
					    if(resp.data.code == 1) {
					        //提示登录成功
					        this.$message({
					            message: "登录成功",
					            type: 'success'
					        });
					        //存储用户对象
					        this.$store.commit('setUser',
							{user:resp.data.data.user}
							);
							 this.$store.commit('setUserinfo',{
							    userinfo:resp.data.data.userinfo
							});
							 this.$store.commit('setAccount',{
							    account:resp.data.data.account
							});
					        //登录成功就直接跳入到首页吧
					        this.$router.push({
					            path:'/Investment'
					        })
					    }else{
					        this.$message({
					            message: resp.data.msg,
					            type: 'error'
					        });
					    }
					}).catch(resp => {
					    this.$message({
					        message: resp.data.msg,
					        type: 'error'
					    });
					});
				}
				else{
					alert('验证码错误，请重新输入');
					this.verificationCode='';
					this.changeVerificationCode();
				}
            },
            //更新验证码
            changeVerificationCode(){
                let url = this.axios.urls.VERIFICATION;
                this.axios.get(url, {}).then(resp => {
					console.log(resp.data.data.path);
					this.yzm=resp.data.data.yzm;
					this.verificationCodeSrc=resp.data.data.path;
                }).catch(resp => {
                    console.log(resp);
                });
            }
			
        },
        created() {
            //初始化验证码
            this.changeVerificationCode();
            //初始化工具类
            commonUtils.init(this);
>>>>>>> 81616682e577bf95d6a1b098bc8cbcdda2c75ee0
        }
}
    }
</script>


<style scoped>

</style>
