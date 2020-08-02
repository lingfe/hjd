package com.yyf.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.yyf.model.Tab_distributor;

/**
 * 
  * 文件名：IdistributorMapper.java
  * 描述：经销商数据访问接口 
  * 修改人： lingfe
  * 修改时间：2017年12月21日 下午2:05:39
  * 修改内容：
 */
public interface IdistributorMapper {
	
	/**
	 * 
	 * 添加经销商账号
	 * @author lingfe     
	 * @created 2017年12月21日 下午2:11:35  
	 * @param tab 实体
	 * @return 结果
	 */
	@Insert("INSERT  INTO `distributor`"
			+ "(`id`,`distributorName`,`pwd`,`state`,"
			+ "`cdate`,`mdate`,`creator`,`uman`,`df`,`version`) "
			+ "VALUES "
			+ "(#{id},#{distributorName},#{pwd},0,"
			+ "#{cdate},#{mdate},#{creator},#{uman},0,0)")
	int save(Tab_distributor tab);
	
	/**
	 * 
	 * 根据id修改经销商账号
	 * @author lingfe    
	 * @created 2017年12月21日 下午2:16:05  
	 * @param tab 实体
	 * @return 结果
	 */
	@Update("UPDATE  distributor SET distributorName=#{distributorName} , pwd=#{pwd} where id=#{id}")
	int setUpdate(Tab_distributor tab);
	
	/**
	 * 
	 * 根据微信号或密码 查询经销商
	 * @author lingfe     
	 * @created 2017年12月21日 下午2:19:46  
	 * @param distributorName 经销商店名
	 * @return 结果
	 */
	@Select("Select * from distributor where pwd=#{pwd}")
	Tab_distributor getInfo(@Param("pwd") String pwd);
	
	/**
	 * 获取所有经销商账号
	 * @author lingfe     
	 * @created 2017年12月21日 下午3:08:01  
	 * @return 结果
	 */
	@Select("Select * from distributor ORDER BY mdate DESC")
	List<Tab_distributor> getList();
}
