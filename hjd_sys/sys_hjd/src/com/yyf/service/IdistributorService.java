package com.yyf.service;

import java.util.List;

import com.yyf.model.Tab_distributor;

/**
 * 
  * 文件名：IdistributorService.java
  * 描述：经销商操作接口 
  * 修改人： lingfe
  * 修改时间：2017年12月21日 下午2:23:56
  * 修改内容：
 */
public interface IdistributorService {
	/**
	 * 
	 * 添加经销商账号
	 * @author lingfe     
	 * @created 2017年12月21日 下午2:11:35  
	 * @param tab 实体
	 * @return 结果
	 */
	int save(Tab_distributor tab);
	
	/**
	 * 
	 * 根据id修改经销商账号
	 * @author lingfe    
	 * @created 2017年12月21日 下午2:16:05  
	 * @param tab 实体
	 * @return 结果
	 */
	int setUpdate(Tab_distributor tab);
	
	/**
	 * 
	 * 根据微信号或密码 查询经销商
	 * @author lingfe     
	 * @created 2017年12月21日 下午2:19:46  
	 * @param distributorName 经销商店名
	 * @return 结果
	 */
	Tab_distributor getInfo(String pwd);
	
	/**
	 * 获取所有经销商账号
	 * @author lingfe     
	 * @created 2017年12月21日 下午3:08:01  
	 * @return 结果
	 */
	List<Tab_distributor> getList();
}
