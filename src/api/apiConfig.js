/*
 * @Author: your name axios配置
 * @Date: 2020-08-09 11:25:57
 * @LastEditTime: 2020-08-09 15:38:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pc-system\src\api\apiConfig.js
 */
import axios from 'axios'
var httpRequest = axios.create({
    baseURL: 'https://s2.ossjk.com/',
    timeout: 10000,
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
    // headers: {'X-Custom-Header': 'foobar'}
});
export default httpRequest