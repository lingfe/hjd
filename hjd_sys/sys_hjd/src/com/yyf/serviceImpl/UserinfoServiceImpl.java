package com.yyf.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yyf.mapper.IuserinfoMapper;
import com.yyf.model.Tab_userinfo;
import com.yyf.service.IuserinfoService;

/**
 * 
  * 文件名：UserinfoServiceImpl.java
  * 描述：用户信息接口实现层 
  * 修改人： 杨杰
  * 修改时间：2017年12月18日 下午2:15:27
  * 修改内容：
 */
@Service
public class UserinfoServiceImpl implements IuserinfoService {
	
	//自动装配
	@Autowired
	private IuserinfoMapper iuserinfoMapper;

	@Override
	public int save(Tab_userinfo tab) {
		return iuserinfoMapper.save(tab);
	}

	@Override
	public Tab_userinfo getUserinfo(String openid) {
		return iuserinfoMapper.getUserinfo(openid);
	}

	@Override
	public Tab_userinfo getWherePhoneOrWxh(String phone, String wechatNumber) {
		return iuserinfoMapper.getWherePhoneOrWxh(phone, wechatNumber);
	}

}
