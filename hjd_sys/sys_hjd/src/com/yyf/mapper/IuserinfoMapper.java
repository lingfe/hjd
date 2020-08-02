package com.yyf.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.yyf.inter.InterJDBC;
import com.yyf.model.Tab_userinfo;

/**
 * 
  * 文件名：IuserinfoMapper.java
  * 描述：用户信息数据访问接口 
  * 修改人： lingfe
  * 修改时间：2017年12月18日 下午1:59:18
  * 修改内容：
 */
public interface IuserinfoMapper extends InterJDBC<Tab_userinfo> {
	
	/**
	 * 
	 * 保存用户
	 * @author lingfe     
	 * @created 2017年12月18日 下午2:03:29  
	 * @param tab
	 * @return
	 */
	@Insert("INSERT  INTO `userinfo`"
			+"(`id`,`openid`,`username`,`wechatNumber`,`avatarUrl`,"
			+"`phone`,`provinceName`,`cityName`,`regionName`,`address`,`memo`,"
			+"`state`,`df`,`creator`,`uman`,`cdate`,`mdate`,`version`) "
			+ "VALUES "
			+"(#{id},#{openid},#{username},#{wechatNumber},#{avatarUrl},"
			+"#{phone},NULL,NULL,NULL,NULL,NULL,"
			+ "0,0,#{creator},#{uman},#{cdate},#{mdate},0);")
	int save(Tab_userinfo tab);
	
	/**
	 * 
	 * 根据id获取用户信息
	 * @author lingfe     
	 * @created 2017年12月18日 下午2:28:22  
	 * @param 用户id
	 * @return
	 */
	@Select("SELECT * FROM userinfo where openid=#{openid}")
	Tab_userinfo getUserinfo(@Param("openid")String openid);
	
	/**
	 * 
	 * 根据电话号码或微信号获取用户信息
	 * @author lingfe     
	 * @created 2017年12月18日 下午2:28:22  
	 * @param 用户id
	 * @return
	 */
	@Select("SELECT * FROM userinfo where phone=#{phone} or wechatNumber=#{wechatNumber} LIMIT 1")
	Tab_userinfo getWherePhoneOrWxh(@Param("phone")String phone,@Param("wechatNumber")String wechatNumber);
	
}
