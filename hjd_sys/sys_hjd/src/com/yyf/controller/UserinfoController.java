package com.yyf.controller;

import java.util.Date;
import java.util.UUID;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yyf.model.Tab_userinfo;
import com.yyf.service.IuserinfoService;

/**
 * 
  * 文件名：UserinfoController.java
  * 描述： 用户信息数据请求， 表示层
  * 修改人： lingfe
  * 修改时间：2017年12月18日 下午2:18:45
  * 修改内容：
 */
@Controller
@RequestMapping("/userinfo")
public class UserinfoController {
	
	//自动装配
	@Autowired
	private IuserinfoService iuserinfoService;
	
	/**
	 * 
	 * 根据电话号码或微信号获取用户信息
	 * @author lingfe     
	 * @created 2018年1月3日 下午4:10:57  
	 * @param user
	 * @return
	 */
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	@ResponseBody Tab_userinfo login(Tab_userinfo user,HttpSession session){
		
		Tab_userinfo info=iuserinfoService.getWherePhoneOrWxh(user.getOpenid(), user.getOpenid());
		//验证非空
		if(StringUtils.isEmpty(info)){
			user.msg="账号不存在!";
			
			return user;
		}else{
			session.setAttribute("userId", info.getId());
			//返回结果
			return info;
		}
		
	}
	
	/**
	 * 注册
	 * @author lingfe     
	 * @created 2018年1月3日 下午4:07:54  
	 * @param user
	 * @return
	 */
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	@ResponseBody Tab_userinfo register(Tab_userinfo user){
		
		Tab_userinfo info=iuserinfoService.getWherePhoneOrWxh(user.getOpenid(), user.getOpenid());
		//验证非空
		if(StringUtils.isEmpty(info)){
			//设置参数
			user.setId(UUID.randomUUID().toString());
			user.setCdate(new Date());
			user.setMdate(user.getCdate());
			user.setCreator(user.getId());
			user.setUman(user.getId());
			user.setPhone(user.getOpenid());
			user.setAvatarUrl("https://static.daho.club/static/upload/hjd.png");
			
			//执行保存
			int tt=iuserinfoService.save(user);
			//重新获取
			info = iuserinfoService.getUserinfo(user.getOpenid());
			return info;
		}else{
			info.msg="该账号已存在!";
			//返回结果
			return info;
		}
	}
	
	/**
	 * 
	 * 根据id获取用户信息
	 * @author lingfe     
	 * @created 2017年12月18日 下午2:28:22  
	 * @param 用户id
	 * @return
	 */
	@RequestMapping(value = "/save", method = RequestMethod.GET)
	@ResponseBody Tab_userinfo save(Tab_userinfo user){
		//根据openid获取数据
		Tab_userinfo info = iuserinfoService.getUserinfo(user.getOpenid());
		
		//验证非空
		if(StringUtils.isEmpty(info)){
			//设置参数
			user.setId(UUID.randomUUID().toString());
			user.setCdate(new Date());
			user.setMdate(user.getCdate());
			user.setCreator(user.getId());
			user.setUman(user.getId());
			
			//执行保存
			int tt=iuserinfoService.save(user);
			//重新获取
			info = iuserinfoService.getUserinfo(user.getOpenid());
		}
		
		//返回结果
		return info;
	}
}
