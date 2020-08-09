<!--
 * @Author: your name 登录页
 * @Date: 2020-08-08 01:14:58
 * @LastEditTime: 2020-08-09 16:18:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pc-system\src\pages\login\login.vue
-->
<template>
    <el-container class="login">
        <!-- 头部 -->
        <el-header class="hidden-sm-and-down header">
            <el-image class="logo" :src="url" fit="contain" lazy></el-image>
        </el-header>
        <!-- 组要内容 -->
        <el-main class="content">
            <el-row >
                <el-col :sm="24" :md="12"  class="left">
                    <div class="grid-content bg-purple title">
                        <h1>
                            <p>靖凯开源</p>
                            <p>考试系统</p>
                        </h1>
                        <h2>www.ossjk.com</h2>
                    </div>
                </el-col>

                <el-col :sm="24" :md="12" class="right">
                    <div class="grid-content bg-purple login-module">
                        <login-module></login-module>
                    </div>
                </el-col>
              </el-row>
        </el-main>
    </el-container>
</template>
<script>
import loginModule from './components/loginModule'
export default {
    data(){
        // var validatePass = (rule, value, callback) => {
        // if (value === '') {
        //   callback(new Error('请输入密码'));
        // } else {
        //   if (this.ruleForm.checkPass !== '') {
        //     this.$refs.ruleForm.validateField('checkPass');
        //   }
        //   callback();
        // }
        // };
        return {
           url:require('@/assets/img/logo.png'),
           urlBg:require('@/assets/img/loginbg.jpg'),
        }
    },
    methods:{
        // submitForm(e){
        //     console.log(e)
        // }
    },
    components:{
        loginModule
    }
}
</script>
<style lang="scss" scoped>
.login{
    /* height: 100%; */
    min-height: 724px;
    width:100%;
    .header{
        .logo{
        height: 100%;
        }
    }
    .content{
        padding:0;
        height:100%;
        background:url('../../assets/img/loginbg.jpg') no-repeat;
        background-size: 100% 100%;
        padding:11% 0;
        .left{
            .title{
                color: #007dc9;
                letter-spacing: 2px;
                text-align: center;
                margin: 0 auto;
                h1{
                    p{font-size: 70px;}
                }
                h2 {
                font-size: 24px;
                }
            }
        }
        .right {//右侧
            .login-module {
                //登录模块
                background: hsla(0, 0%, 100%, 0.3);
                width: 320px;
                border-radius: 10px;
                padding: 20px 20px;
                margin: 0 auto;
            }
        }
    }
}
/* .login{
    width:100%;
    height: 100%;
    .logo{
        height:65px;
    }
    .content{
        height:100%;
        background: url('../../assets/img/loginbg.jpg') no-repeat;
        background-size: 100% 100%;
        padding:11% 0;
    }
} */
</style>