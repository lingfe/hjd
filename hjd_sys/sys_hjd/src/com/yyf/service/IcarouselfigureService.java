package com.yyf.service;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Param;

import com.yyf.model.Tab_carouselfigure;

/**
 * 
  * 文件名：IcarouselfigureService.java
  * 描述： 轮播图数据操作接口层
  * 修改人： lingfe
  * 修改时间：2017年12月18日 上午11:09:04
  * 修改内容：
 */
public interface IcarouselfigureService {
	
	/**
	 * 
	 * 根据id删除轮播图
	 * @author lingfe     
	 * @created 2017年12月21日 下午4:32:39  
	 * @param id 
	 * @return 结果
	 */
	int setDelete(String id);
	
	/**
	 * 
	 * 保存轮播图
	 * @author lingfe     
	 * @created 2017年12月21日 下午4:17:49  
	 * @param tab
	 * @return
	 */
	int save(Tab_carouselfigure tab);
	
	/**
	 * 
	 * 查询轮播图数据，分页查询
	 * @author lijie    
	 * @created 2017年5月28日 上午9:09:36 
	 * @param pageIndex 当前页
	 * @param pageNum 页容量
	 */
	List<Tab_carouselfigure> statusQueryPaging(int pageIndex,int pageNum);
	
	/**
	 * 
	 * 根据状态查询记录行
	 * @author lingfe     
	 * @created 2017年12月18日 上午11:26:09  
	 * @return
	 */
	public int statusQueryCount();
}
