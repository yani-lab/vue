<template>
  <div>
    <el-row style="height:30px">
      <el-col style="font-size: 12px;line-height:30px;margin-left: 15px;" :span="10">咨询热线：400-668-6698服务时间：9:00 - 18:00</el-col>
      <el-col style="font-size: 20px;text-align: right;" :span="13">
          <template v-if="isLogin">
            <el-button type="text" size="small"  @click="logout">退出登录</el-button>
          </template>
          <template v-else>
            <el-button type="text" size="small"  @click="toRouter('/Login')">登录</el-button>
            <el-button type="text" size="small"  @click="toRouter('/Register')">注册</el-button>
          </template>
      </el-col>
    </el-row>
    <el-form style="background-color: rgb(255, 255, 255);" label-width="100px">
      <el-row>
        <el-menu style="text-align: center;" mode="horizontal" background-color="pink" router="true">
          <el-menu-item route="/Home" style="height: 86px; color: rgb(244, 237, 237); background-color: pink; font-size: 18px; text-align: center; margin-left: 662px; margin-top: 0px;" index="3">首页</el-menu-item>
          <el-menu-item route="/Investment"  style="height: 86px; color: rgb(244, 237, 237); background-color: pink; font-size: 18px; text-align: center;" index="4">我要投资</el-menu-item>
          <el-menu-item route="/Loan" style="height: 86px; color: rgb(244, 237, 237); background-color: pink; font-size: 18px; text-align: center;" index="5">我要借款</el-menu-item>
          <el-menu-item route="/PersonalCenterMain" style="height: 86px; color: rgb(244, 237, 237); background-color: pink; font-size: 18px; text-align: center;" index="6">个人中心</el-menu-item>
          <el-menu-item route="/Home" style="height: 86px; color: rgb(244, 237, 237); background-color: pink; font-size: 18px; text-align: center;" index="8">登录记录</el-menu-item>
        </el-menu>
      </el-row>
    </el-form>
  </div>
</template>

<script>
    import commonUtils from "../api/commonUtils";
    import {directive} from "../utils/directive"

    export default {
        name: "FrontTopNav",
        data(){
            return{
                name:'zs'
            }
        },
        methods:{
            itemClick (tab){
                let path = this.activeIndex;
                this.$router.push({ path: path });
            },
            //这是退出登录的方法
            logout (){
                //存储用户对象
                this.$store.commit('setUser',{
                    user:null
                });
                //清空jwt
                this.$store.commit('setJwt',{
                    jwt:null
                });
                //调用后台方法清空
                let url = this.axios.urls.MEMBERS_MEN_LOGOUT;
                commonUtils.doAjaxPost(url, {}, (data) => {
                })
            },
            toRouter(routerPath){
                commonUtils.toRouter(routerPath);
            }
        },
        computed:{
            //这是判断用户是否登录的计算属性
            isLogin:function(){
               return this.$store.getters.getUser != null;
            }
        },
        created() {
            commonUtils.init(this);
        }
    }
</script>

<style scoped>

</style>
