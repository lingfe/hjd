package com.yyf.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.yyf.inter.InterJDBC;
import com.yyf.model.Tab_carouselfigure;

/**
 * 
  * 文件名：IcarouselfigureMapper.java
  * 描述：轮播图数据访问接口 
  * 修改人： lingfe
  * 修改时间：2017年12月18日 上午10:35:46
  * 修改内容：
 */
public interface IcarouselfigureMapper  extends InterJDBC<Tab_carouselfigure>  {
	
	/**
	 * 
	 * 根据id删除轮播图
	 * @author lingfe     
	 * @created 2017年12月21日 下午4:32:39  
	 * @param id 
	 * @return 结果
	 */
	@Delete("DELETE FROM carouselfigure WHERE id=#{id}")
	int setDelete(@Param("id") String id);
	
	/**
	 * 
	 * 保存轮播图
	 * @author lingfe     
	 * @created 2017年12月21日 下午4:17:49  
	 * @param tab
	 * @return
	 */
	@Insert("INSERT  INTO `carouselfigure`"
			+ "(`id`,`imgUrl`,`imgName`,`state`,"
			+ "`cdate`,`mdate`,`creator`,`uman`,`df`,`version`) "
			+ "VALUES "
			+ "(#{id},#{imgUrl},#{imgName},0,"
			+ "#{cdate},#{mdate},#{creator},#{uman},0,0)")
	int save(Tab_carouselfigure tab);
	
	/**
	 * 
	 * 查询轮播图数据，分页查询
	 * @author lijie    
	 * @created 2017年5月28日 上午9:09:36 
	 * @param pageIndex 当前页
	 * @param pageNum 页容量
	 */
	@Select("SELECT * FROM carouselfigure where state=0 ORDER BY mdate DESC  LIMIT #{pageIndex},#{pageNum}")
	List<Tab_carouselfigure> statusQueryPaging(@Param("pageIndex") int pageIndex,@Param("pageNum")int pageNum);
	
	/**
	 * 
	 * 根据状态查询记录行
	 * @author lingfe     
	 * @created 2017年12月18日 上午11:26:09  
	 * @return
	 */
	@Select("SELECT COUNT(*) FROM carouselfigure where state=0")
	int statusQueryCount();
}
