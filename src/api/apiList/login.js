/*
 * @Author: your name 登录接口
 * @Date: 2020-08-09 14:52:18
 * @LastEditTime: 2020-08-09 14:58:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pc-system\src\api\apiList\login.js
 */
import { axiosPost } from '@/utils/request.js'
export function login(data,config){
    const url = 'pc/user/login'
    return axiosPost(url,data,config)
}