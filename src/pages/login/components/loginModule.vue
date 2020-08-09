<!--
 * @Author: your name 登录模板
 * @Date: 2020-08-09 00:56:27
 * @LastEditTime: 2020-08-09 19:50:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pc-system\src\pages\login\components\loginModule.vue
-->
<template>
    <div class="loginModule">
        <h2>登录</h2>
        <el-form :model="loginForm" :rules="rules" ref="loginForm"  label-width="60px">
            <el-form-item label="账号" prop="lname">
                <el-input v-model="loginForm.lname"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="pwd">
                <el-input v-model="loginForm.pwd"></el-input>
            </el-form-item>
            
            <el-form-item class="submit_item">
                <el-button class="submit_btn" type="primary" @click="onSubmit('loginForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import * as api from '@/api/apiList/login.js'
export default {
    data(){
        return{
            loginForm:{
               lname:'',//账号
               pwd:'',//密码
            },
            rules:{
               lname:[
                    { required: true, message: '请输入账号', trigger: 'blur' },
                ],
               pwd:[
                   { required: true, message: '请输入密码', trigger: 'blur' },
                ]
            }
        }
    },
    methods:{
        async API_login({lname,pwd}){//登录接口
            let result = {
                lname,//账号
                pwd//密码
            }
            return await api.login(result)
        },
        async onSubmit(formName){//提交表单
            this.$refs[formName].validate(async (valid)=>{
                if(valid){
                    //如果验证通过
                    let res = await this.API_login(this.loginForm)
                    console.log(res)
                    if(res.data.statusCode === "200"){//登录成功
                        this.$message({
                            message: res.data.message,
                            type: 'success'
                        });
                        this.$router.push('/home')
                    }else{//登录失败
                        this.$message.error(res.data.message);
                    }
                }
            })
        },
    },
    // async created(){
    //     let res = await this.API_login('13800138000','88888888')
    //     console.log(res)
    // }
}
</script>
<style lang="scss" scoped>
.loginModule{
    /* height:200px;
    width: 200px; */
    h2{
        text-align:center;
        font-size:24px;
        margin-bottom:20px;
    }
    .submit_item{
        text-align: center;
        .submit_btn{
            margin-left: -50px;;
        }
    }
}
</style>