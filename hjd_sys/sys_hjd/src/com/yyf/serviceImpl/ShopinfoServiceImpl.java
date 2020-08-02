package com.yyf.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.yyf.mapper.IshopinfoMapper;
import com.yyf.model.Tab_shopinfo;
import com.yyf.service.IshopinfoService;

/**
 * 
  * 文件名：ShopinfoServiceImpl.java
  * 描述： 商品信息接口操作实现类
  * 修改人： lingfe
  * 修改时间：2017年12月19日 下午4:23:24
  * 修改内容：
 */
@Service
public class ShopinfoServiceImpl implements IshopinfoService {
	
	//自动装配
	@Autowired
	private IshopinfoMapper ishopinfoMapper;

	@Override
	public int save(Tab_shopinfo tab) {
		return ishopinfoMapper.save(tab);
	}

	@Override
	public List<Tab_shopinfo> getList() {
		return ishopinfoMapper.getList();
	}

	@Override
	public Tab_shopinfo getListWhere(Tab_shopinfo tab) {
		//验证参数
		if(!StringUtils.isEmpty(tab.getId())){
			return ishopinfoMapper.getListWhereId(tab.getId());
		}
		return null;
	}

	@Override
	public List<Tab_shopinfo> statusQueryPaging(int state,int pageIndex, int pageNum) {
		return ishopinfoMapper.statusQueryPaging(state,pageIndex, pageNum);
	}

	@Override
	public int statusQueryCount() {
		return ishopinfoMapper.statusQueryCount();
	}

	@Override
	public int setDelete(String id) {
		return ishopinfoMapper.setDelete(id);
	}

	@Override
	public int setUpdate(Tab_shopinfo tab) {
		return ishopinfoMapper.setUpdate(tab);
	}

	@Override
	public int setStateUpdate(Tab_shopinfo tab) {
		return ishopinfoMapper.setStateUpdate(tab);
	}

	@Override
	public List<Tab_shopinfo> getJxsList(String distributorId) {
		return ishopinfoMapper.getJxsList(distributorId);
	}
}
