/*
 * @Author: your name
 * @Date: 2020-08-08 00:52:03
 * @LastEditTime: 2020-08-08 15:11:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pc-system\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'

import router from '@/router/index.js'//路由
import '@/plugins/element.js'//element-ui插件
import '@/style/reset.scss'//样式
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
