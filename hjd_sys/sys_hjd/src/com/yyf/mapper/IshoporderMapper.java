package com.yyf.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.yyf.model.Tab_shoporder;

/**
 * 
  * 文件名：IshoporderMapper.java
  * 描述：商品订单数据访问接口 
  * 修改人： lingfe
  * 修改时间：2017年12月25日 下午5:35:55
  * 修改内容：
 */
public interface IshoporderMapper {

	/**
	 * 
	 * 保存订单
	 * @author lingfe     
	 * @created 2017年12月25日 下午5:36:46  
	 * @return 结果
	 */
	@Insert("INSERT  INTO `shoporder`"
			+ "(`id`,`distributorId`,`distributorName`,`personalId`,`shopInfoid`,"
			+ "`title`,`imgUrl`,`price`,`number`,`address`,`phone`,`distributionTime`,`remark`,"
			+ "`state`,`cdate`,`mdate`,`creator`,`uman`,`df`,`version`) "
			+ "VALUES "
			+ "(#{id},#{distributorId},#{distributorName},#{personalId},#{shopInfoid},"
			+ "#{title},#{imgUrl},#{price},#{number},#{address},#{phone},#{distributionTime},#{remark},"
			+ "0,#{cdate},#{mdate},#{creator},#{uman},0,0)")
	int save(Tab_shoporder tab);
	
	/**
	 * 
	 * 修改订单状态
	 * @author lingfe     
	 * @created 2017年12月25日 下午6:00:17  
	 * @param id
	 * @return
	 */
	@Update("Update shoporder set state=#{state} where id=#{id}")
	int	setState(@Param("state")int state,@Param("id") String id);
	
	/**
	 * 
	 * 根据经销商id查询订单信息
	 * @author lingfe    
	 * @created 2017年12月25日 下午6:04:14  
	 * @param distributorId
	 * @return 结果
	 */
	@Select("Select * from shoporder where distributorId=#{distributorId} ORDER BY mdate DESC")
	List<Tab_shoporder> getWhereDistributorIdList(@Param("distributorId")String distributorId);
	
	/**
	 * 
	 * 根据用户id查询订单信息
	 * @author lingfe     
	 * @created 2017年12月25日 下午6:08:46  
	 * @param personalId
	 * @return 结果
	 */
	@Select("Select * from shoporder where personalId=#{personalId} ORDER BY mdate DESC")
	List<Tab_shoporder> getWherePersonalIdList(@Param("personalId")String personalId);
	
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
	@Select("Select * from shoporder where distributorName=#{distributorName} or state=#{state} or distributionTime=#{distributionTime} ORDER BY mdate DESC")
	List<Tab_shoporder> getWhere(@Param("distributorName") String distributorName,
			@Param("state")int state,
			@Param("distributionTime")String distributionTime);
}
