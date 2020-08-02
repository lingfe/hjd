package com.yyf.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.yyf.model.Tab_shopinfo;

/**
 * 
  * 文件名：IshopinfoService.java
  * 描述： 商品信息操作接口
  * 修改人： lingfe
  * 修改时间：2017年12月19日 下午4:20:31
  * 修改内容：
 */
public interface IshopinfoService {
	
	/**
	 * 
	 * 根据经销商id条件查询商品信息
	 * @author lingfe
	 * @created 2017年12月20日 下午3:10:16  
	 * @param id条件
	 * @return list集合
	 */
	List<Tab_shopinfo> getJxsList(String distributorId);
	
	/**
	 * 
	 * 根据id修改商品信息
	 * @author lingfe     
	 * @created 2017年12月21日 上午10:49:57  
	 * @param 实体
	 * @return 结果
	 */
	int setUpdate(Tab_shopinfo tab);
	
	/**
	 * 
	 * 根据id删除商品信息
	 * @author lingfe    
	 * @created 2017年12月20日 下午4:11:17  
	 * @param id
	 * @return 
	 */
	int setDelete(String id);
	
	/**
	 * 
	 * 获取全部商品信息
	 * @author lingfe
	 * @created 2017年12月20日 下午3:10:16  
	 * @return list集合
	 */
	List<Tab_shopinfo> getList();
	
	/**
	 * 
	 * 根据参数查询获取商品信息
	 * @author lingfe
	 * @created 2017年12月20日 下午3:10:16  
	 * @param 实体
	 * @return list集合
	 */
	Tab_shopinfo getListWhere(Tab_shopinfo tab);
	
	/**
	 * 
	 * 保存商品信息
	 * @author lingfe     
	 * @created 2017年12月19日 下午4:21:28  
	 * @return
	 */
	int save(Tab_shopinfo tab);
	
	/**
	 * 
	 * 根据状态查询记录行
	 * @author lingfe     
	 * @created 2017年12月18日 上午11:26:09  
	 * @return
	 */
	int statusQueryCount();
	
	/**
	 * 
	 * 查询商品信息,分页查询
	 * @author lijie    
	 * @created 2017年5月28日 上午9:09:36 
	 * @param pageIndex 当前页
	 * @param pageNum 页容量
	 */
	List<Tab_shopinfo> statusQueryPaging(int state,int pageIndex,int pageNum);
	
	/**
	 * 
	 * 将商品修改未经销商的商品，并修改状态
	 * @author lingfe     
	 * @created 2017年12月23日 下午2:56:36  
	 * @param 实体
	 * @return 结果
	 */
	int setStateUpdate(Tab_shopinfo tab);
	
}
