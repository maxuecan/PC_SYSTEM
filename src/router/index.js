/*
 * @Author: your name 路由唯一出口
 * @Date: 2020-08-08 01:48:28
 * @LastEditTime: 2020-08-08 01:55:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pc-system\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes/commonRoutes.js'
Vue.use(VueRouter)
export default new VueRouter({
    routes
})