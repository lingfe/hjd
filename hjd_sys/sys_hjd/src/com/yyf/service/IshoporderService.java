package com.yyf.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.yyf.model.Tab_shoporder;

/**
 * 
  * 文件名：IshoporderService.java
  * 描述：商品订单操作接口 
  * 修改人： lingfe
  * 修改时间：2017年12月25日 下午6:25:38
  * 修改内容：
 */
public interface IshoporderService {
	/**
	 * 
	 * 保存订单
	 * @author lingfe     
	 * @created 2017年12月25日 下午5:36:46  
	 * @return 结果
	 */
	int save(Tab_shoporder tab);
	
	/**
	 * 
	 * 修改订单状态
	 * @author lingfe     
	 * @created 2017年12月25日 下午6:00:17  
	 * @param id
	 * @return
	 */
	int	setState(int state, String id);
	
	/**
	 * 
	 * 根据经销商id查询订单信息
	 * @author lingfe    
	 * @created 2017年12月25日 下午6:04:14  
	 * @param distributorId
	 * @return 结果
	 */
	@Select("Select * from shoporder where distributorId=#{distributorId}")
	List<Tab_shoporder> getWhereDistributorIdList(@Param("distributorId")String distributorId);
	
	/**
	 * 
	 * 根据用户id查询订单信息
	 * @author lingfe     
	 * @created 2017年12月25日 下午6:08:46  
	 * @param personalId
	 * @return 结果
	 */
	List<Tab_shoporder> getWherePersonalIdList(String personalId);
	
	/**
	 * 
	 * 根据店铺名，订单状态，配送时间查询订单信息
	 * @author lingfe     
	 * @created 2017年12月25日 下午6:15:43  
	 * @param distributorName
	 * @param state
	 * @param distributionTime
	 * @return 结果
	 */
	List<Tab_shoporder> getWhere( String distributorName,int state,String distributionTime);
}
