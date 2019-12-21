<template>
	<div>
		<div>
			 <el-main>
			  <el-row :gutter="9">
			    <el-col :span="12" style="inline" v-for="p in producttable">
			      <el-card header="贷款">
			        <i style="color: rgb(250, 212, 0);">{{p.proName}}</i>
			        <div style="margin-top: 9px;">
			          <span style="color: rgb(0, 206, 209); ">贷款条件:</span>
			          <ul>
			            <li>基本资料填写</li>
			            <li>身份认证通过 </li>
			            <li>资料认证完善</li>
									<li>年龄:{{p.scope}}</li>
									<li>借款金额:{{p.money}}</li>
									<li>所收利息:每月{{p.interest}}</li>
									<li>所需信用额度:{{p.lineofcredit}}</li>
			          </ul>
			        </div>
			        <p align="center" style="margin-top: 60px;">
			          <el-button round icon="el-icon-thumb" style="color: rgb(255, 255, 255); background-color: rgb(1, 170, 237);"   @click="toLoanApplication(p.proName,p)" plain>申 请 贷 款</el-button>
			        </p>
			      </el-card>
			    </el-col>
			  </el-row>
			</el-main>
			</div>
		</div>
</template>

<script>
    import commonUtils from "../../../api/commonUtils";
    export default {
        name: "Loan",
				data:function(){
				    return{
				        //文件上传的参数
				        producttable: [],
								producttableList:{
									proId:0,
									proName:'',
									money:'',
									interest:'',
									time:'',
									require:'',
									scope:'',
									lineofcredit:'',
								},
								user:this.$store.getters.getUser,
				    }
				},
        methods:{
            //这是跳转到对应的表单申请页面
            toLoanApplication(toRouter,p){
							if(toRouter=='车易贷'){
								this.$router.push({
									path:'/CarLoan',
									/* 通过路由传递参数过去 */
									query:{
										producttable:p
									}
								});
								}
								else if(toRouter=='房易贷'){
										this.$router.push({
										path:'/HousingLoan',
										/* 通过路由传递参数过去 */
										query:{
											producttable:p
										}
									});
									}
									else{
										this.$router.push({
											path:'/CreditLoan',
											/* 通过路由传递参数过去 */
											query:{
												producttable:p
											}
										});
									}
            },
							doSearch: function() {
							let url = this.axios.urls.SELECT_PRODUCTTABLE;
							this.axios.post(url).then(resp => {
							 console.log(this.user);
								this.producttable = resp.data.data;
							}).catch(resp => {
								console.log(resp);
							})
						
						},
        },
        created() {
            commonUtils.init(this);
						this.doSearch();
        }

    }
</script>

<style scoped>

</style>
