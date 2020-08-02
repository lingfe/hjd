package com.yyf.service;

import java.util.List;

import com.yyf.model.Tab_feedback;

/**
 * 
  * 文件名：IfeedbackService.java
  * 描述： 投诉建议操作接口
  * 修改人： lingfe
  * 修改时间：2017年12月23日 上午11:17:09
  * 修改内容：
 */
public interface IfeedbackService {

	/**
	 * 
	 * 保存投诉建议
	 * @author lingfe     
	 * @created 2017年12月23日 上午11:06:53  
	 * @param tab 实体
	 * @return 结果
	 */
	int save(Tab_feedback tab);
	
	/**
	 * 
	 * 获取所有投诉建议数据
	 * @author lingfe
	 * @created 2017年12月23日 上午11:08:19  
	 * @return 结果
	 */
	List<Tab_feedback> getList();
	
	/**
	 * 根据id删除投诉建议
	 * @author lingfe     
	 * @created 2017年12月23日 上午11:14:56  
	 * @param id
	 * @return 结果
	 */
	int setDelete(String id);
}
