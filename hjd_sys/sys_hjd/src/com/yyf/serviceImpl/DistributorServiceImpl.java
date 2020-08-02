package com.yyf.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yyf.mapper.IdistributorMapper;
import com.yyf.model.Tab_distributor;
import com.yyf.service.IdistributorService;

/**
 * 
  * 文件名：DistributorServiceImpl.java
  * 描述：经销商操作接口的实现类 
  * 修改人： lingfe
  * 修改时间：2017年12月21日 下午2:26:05
  * 修改内容：
 */
@Service
public class DistributorServiceImpl implements IdistributorService {
	
	//自动装配
	@Autowired
	private IdistributorMapper idistributorMapper;

	@Override
	public int save(Tab_distributor tab) {
		return idistributorMapper.save(tab);
	}

	@Override
	public int setUpdate(Tab_distributor tab) {
		return idistributorMapper.setUpdate(tab);
	}

	@Override
	public Tab_distributor getInfo(String pwd) {
		return idistributorMapper.getInfo(pwd);
	}

	@Override
	public List<Tab_distributor> getList() {
		return idistributorMapper.getList();
	}

}
