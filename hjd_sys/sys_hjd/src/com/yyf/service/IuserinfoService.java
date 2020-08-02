package com.yyf.service;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.yyf.model.Tab_userinfo;

/**
 * 
  * 文件名：UserinfoService.java
  * 描述： 用户信息操作接口
  * 修改人： lingfe
  * 修改时间：2017年12月18日 下午2:13:10
  * 修改内容：
 */
public interface IuserinfoService {
	
	/**
	 * 
	 * 根据电话号码或微信号获取用户信息
	 * @author lingfe     
	 * @created 2017年12月18日 下午2:28:22  
	 * @param 用户id
	 * @return
	 */
	Tab_userinfo getWherePhoneOrWxh(String phone,String wechatNumber);
	
	
	/**
	 * 
	 * 保存用户
	 * @author lingfe     
	 * @created 2017年12月18日 下午2:03:29  
	 * @param 实体
	 * @return
	 */
	int save(Tab_userinfo tab);
	
	/**
	 * 
	 * 根据id获取用户信息
	 * @author lingfe     
	 * @created 2017年12月18日 下午2:28:22  
	 * @param 用户id
	 * @return
	 */
	Tab_userinfo getUserinfo(String openid);
}
