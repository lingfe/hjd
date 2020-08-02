package com.yyf.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.yyf.model.Tab_feedback;

/**
 * 
  * 文件名：IfeedbackMapper.java
  * 描述： 投诉建议表数据访问接口
  * 修改人： 杨杰
  * 修改时间：2017年12月23日 上午11:06:00
  * 修改内容：
 */
public interface IfeedbackMapper {

	/**
	 * 
	 * 保存投诉建议
	 * @author lingfe     
	 * @created 2017年12月23日 上午11:06:53  
	 * @param tab 实体
	 * @return 结果
	 */
	@Insert("INSERT  INTO `feedback`"
			+ "(`id`,`personalId`,`content`,`remark`,"
			+ "`state`,`cdate`,`mdate`,`creator`,`uman`,`df`,`version`) "
			+ "VALUES (#{id},#{personalId},#{content},#{remark},"
			+ "0,#{cdate},#{mdate},#{creator},#{uman},0,0)")
	int save(Tab_feedback tab);
	
	/**
	 * 
	 * 获取所有投诉建议数据
	 * @author lingfe
	 * @created 2017年12月23日 上午11:08:19  
	 * @return 结果
	 */
	@Select("Select * from feedback")
	List<Tab_feedback> getList();
	
	/**
	 * 根据id删除投诉建议
	 * @author lingfe     
	 * @created 2017年12月23日 上午11:14:56  
	 * @param id
	 * @return 结果
	 */
	@Delete("Delete from feedback where id=#{id}")
	int setDelete(@Param("id")String id);
}
