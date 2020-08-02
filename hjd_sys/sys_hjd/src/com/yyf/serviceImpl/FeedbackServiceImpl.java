package com.yyf.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yyf.mapper.IfeedbackMapper;
import com.yyf.model.Tab_feedback;
import com.yyf.service.IfeedbackService;

/**
 * 
  * 文件名：FeedbackServiceImpl.java
  * 描述：投诉建议操作接口实现类 
  * 修改人： 杨杰
  * 修改时间：2017年12月23日 上午11:18:54
  * 修改内容：
 */
@Service
public class FeedbackServiceImpl implements IfeedbackService {

	//自动装配
	@Autowired
	private IfeedbackMapper ifeedbackMapper;

	@Override
	public int save(Tab_feedback tab) {
		return ifeedbackMapper.save(tab);
	}

	@Override
	public List<Tab_feedback> getList() {
		return ifeedbackMapper.getList();
	}

	@Override
	public int setDelete(String id) {
		return ifeedbackMapper.setDelete(id);
	}
}
