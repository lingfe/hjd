package com.yyf.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yyf.mapper.IcarouselfigureMapper;
import com.yyf.model.Tab_carouselfigure;
import com.yyf.service.IcarouselfigureService;

/**
 * 
  * 文件名：CarouselfigureServiceImpl.java
  * 描述：轮播图数据操作接口实现层 
  * 修改人： lingfe
  * 修改时间：2017年12月18日 上午11:13:16
  * 修改内容：
 */
@Service
public class CarouselfigureServiceImpl implements IcarouselfigureService {

	//自动装配
	@Autowired
	private IcarouselfigureMapper iCarouselfigureMapper;
	
	@Override
	public List<Tab_carouselfigure> statusQueryPaging(int pageIndex, int pageNum) {
		return iCarouselfigureMapper.statusQueryPaging(pageIndex, pageNum);
	}
	
	@Override
	public int statusQueryCount() {
		return iCarouselfigureMapper.statusQueryCount();
	}

	@Override
	public int save(Tab_carouselfigure tab) {
		return iCarouselfigureMapper.save(tab);
	}

	@Override
	public int setDelete(String id) {
		return iCarouselfigureMapper.setDelete(id);
	}


}
