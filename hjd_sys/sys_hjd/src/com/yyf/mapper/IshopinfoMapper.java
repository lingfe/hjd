package com.yyf.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.yyf.inter.InterJDBC;
import com.yyf.model.Tab_shopinfo;

/**
 * 
  * 文件名：IshopinfoMapper.java
  * 描述： 商品信息数据访问接口
  * 修改人： lingfe
  * 修改时间：2017年12月19日 下午4:02:26
  * 修改内容：
 */
public interface IshopinfoMapper extends InterJDBC<Tab_shopinfo> {
	
	/**
	 * 
	 * 根据id删除商品信息
	 * @author lingfe    
	 * @created 2017年12月20日 下午4:11:17  
	 * @param id
	 * @return 
	 */
	@Delete("delete FROM shopinfo where id=#{id}")
	int setDelete(@Param("id") String id);
	
	/**
	 * 
	 * 查询商品信息,获取全部
	 * @author lingfe
	 * @created 2017年12月20日 下午3:10:16  
	 * @return list集合
	 */
	@Select("select * FROM shopinfo ")
	List<Tab_shopinfo> getList();
	
	/**
	 * 
	 * 查询商品信息,分页查询
	 * @author lijie    
	 * @created 2017年5月28日 上午9:09:36 
	 * @param pageIndex 当前页
	 * @param pageNum 页容量
	 */
	@Select("SELECT * FROM shopinfo where state=#{state} ORDER BY mdate DESC  LIMIT #{pageIndex},#{pageNum}")
	List<Tab_shopinfo> statusQueryPaging(@Param("state")int state,@Param("pageIndex") int pageIndex,@Param("pageNum")int pageNum);
	
	
	/**
	 * 
	 * 根据id条件查询商品信息
	 * @author lingfe
	 * @created 2017年12月20日 下午3:10:16  
	 * @param id条件
	 * @return list集合
	 */
	@Select("select * FROM shopinfo where id=#{id}")
	Tab_shopinfo getListWhereId(@Param("id") String id);
	
	/**
	 * 
	 * 根据经销商id条件查询商品信息
	 * @author lingfe
	 * @created 2017年12月20日 下午3:10:16  
	 * @param id条件
	 * @return list集合
	 */
	@Select("Select * FROM shopinfo where distributorId=#{distributorId}")
	List<Tab_shopinfo> getJxsList(@Param("distributorId")String distributorId);
	
	/**
	 * 
	 * 根据状态查询记录行
	 * @author lingfe     
	 * @created 2017年12月18日 上午11:26:09  
	 * @return
	 */
	@Select("SELECT COUNT(*) FROM shopinfo where state=0")
	int statusQueryCount();
	
	/**
	 * 
	 * 保存商品信息
	 * @author lingfe     
	 * @created 2017年12月19日 下午4:12:23  
	 * @param 实体
	 * @return
	 */
	@Insert("INSERT  INTO `shopinfo`"
			+ "(`id`,`distributorId`,`distributorName`,`title`,`imgUrl`,`price`,`infoImgUrl`,`remark`,"
			+ "`state`,`cdate`,`mdate`,`creator`,`uman`,`df`,`version`) "
			+ "VALUES "
			+ "(#{id},NULL,NULL,#{title},#{imgUrl},#{price},#{infoImgUrl},#{remark},"
			+ "1,#{cdate},#{mdate},#{creator},#{uman},0,0);")
	int save(Tab_shopinfo tab);
	
	/**
	 * 
	 * 将商品修改未经销商的商品，并修改状态
	 * @author lingfe     
	 * @created 2017年12月23日 下午2:56:36  
	 * @param 实体
	 * @return 结果
	 */
	@Update("UPDATE  shopinfo SET distributorId=#{distributorId},distributorName=#{distributorName},state=#{state} where id=#{id}")
	int setStateUpdate(Tab_shopinfo tab);
	
	/**
	 * 
	 * 根据id修改商品信息
	 * @author lingfe     
	 * @created 2017年12月21日 上午10:49:57  
	 * @param 实体
	 * @return 结果
	 */
	@Update("UPDATE  shopinfo SET title=#{title} , imgUrl=#{imgUrl}, price=#{price} ,infoImgUrl=#{infoImgUrl} , remark=#{remark} where id=#{id}")
	int setUpdate(Tab_shopinfo tab);
}
