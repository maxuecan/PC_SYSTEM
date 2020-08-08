/*
 * @Author: your name
 * @Date: 2020-08-08 00:52:03
 * @LastEditTime: 2020-08-08 02:04:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \pc-system\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'

import router from '@/router/index.js'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
