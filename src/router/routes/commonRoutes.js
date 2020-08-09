/*
 * @Author: your name 路由配置
 * @Date: 2020-08-08 01:56:01
 * @LastEditTime: 2020-08-09 19:57:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pc-system\src\router\routes\commonRoutes.js
 */
export const routes = [{
    path:'/login',//登录
    name:'login',
    alias:'/',
    component:()=>import('@/pages/login/login')
},
{
    path:'/home',//登录
    component:()=>import('@/pages/home/home')
},
{
    path:'/exam',//登录
    component:()=>import('@/pages/exam/exam')
},
{
    path:'/examDetails',//登录
    component:()=>import('@/pages/examDetails/examDetails')
},
{
    path:'/history',//登录
    component:()=>import('@/pages/history/history')
},
{
    path:'/historyDetails',//登录
    component:()=>import('@/pages/historyDetails/historyDetails')
},
{
    path:'/404',//登录
    component:()=>import('@/pages/404/404')
},
]