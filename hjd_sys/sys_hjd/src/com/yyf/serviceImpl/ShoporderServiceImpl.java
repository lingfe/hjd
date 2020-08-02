package com.yyf.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yyf.mapper.IshoporderMapper;
import com.yyf.model.Tab_shoporder;
import com.yyf.service.IshoporderService;

/**
 * 
  * 文件名：ShoporderServiceImpl.java
  * 描述： 商品订单操作接口的实现类
  * 修改人： lingfe
  * 修改时间：2017年12月25日 下午6:27:42
  * 修改内容：
 */
@Service
public class ShoporderServiceImpl implements IshoporderService {
	
	//自动装配
	@Autowired
	private IshoporderMapper ishoporderMapper;
	
	@Override
	public int save(Tab_shoporder tab) {
		return ishoporderMapper.save(tab);
	}

	@Override
	public int setState(int state, String id) {
		return ishoporderMapper.setState(state, id);
	}

	@Override
	public List<Tab_shoporder> getWhereDistributorIdList(String distributorId) {
		return ishoporderMapper.getWhereDistributorIdList(distributorId);
	}

	@Override
	public List<Tab_shoporder> getWherePersonalIdList(String personalId) {
		return ishoporderMapper.getWherePersonalIdList(personalId);
	}

	@Override
	public List<Tab_shoporder> getWhere(String distributorName, int state, String distributionTime) {
		return ishoporderMapper.getWhere(distributorName, state, distributionTime);
	}

}
