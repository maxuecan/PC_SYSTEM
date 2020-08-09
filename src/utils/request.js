/*
 * @Author: your name 请求类型
 * @Date: 2020-08-09 14:43:07
 * @LastEditTime: 2020-08-09 15:55:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pc-system\src\utils\request.js
 */
import httpRequest from '@/api/apiConfig.js'
import Qs from 'qs'
//get封装
export function axiosGet(url,config){
    let res = httpRequest.get(url,config)
    return res
    // return httpRequest.get(url,config)
}
//post封装
export async function axiosPost(url,data,config){
    // 第一种写法
    let res = await httpRequest.post(url,Qs.stringify(data),config)
    // console.log(res)
    return res
    
    // 第二种写法
    // try{
    //     let res = await httpRequest.post(url,Qs.stringify(data),config)
    //     return {res:res.data}
    // }catch(err){
    //     return {err}
    // }

    // 第三种写法
    // let res = httpRequest.post(url,Qs.stringify(data),config)
    // console.log({res})
    // return res
    // return httpRequest.post(url,Qs.stringify(data),config)
}