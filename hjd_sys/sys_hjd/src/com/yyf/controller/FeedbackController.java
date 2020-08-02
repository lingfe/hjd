package com.yyf.controller;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yyf.model.Tab_feedback;
import com.yyf.service.IfeedbackService;

/**
 * 
  * 文件名：FeedbackController.java
  * 描述：投诉建议请求操作类 表示层 
  * 修改人： lingfe
  * 修改时间：2017年12月23日 上午11:20:59
  * 修改内容：
 */
@Controller
@RequestMapping("/feedback")
public class FeedbackController {

	//自动装配
	@Autowired
	private IfeedbackService ifeedbackService;
	
	/**
	 * 
	 * 根据参数删除投诉建议
	 * @author lingfe     
	 * @created 2017年12月23日 上午11:31:21  
	 * @param tab
	 * @return 结果
	 */
	@RequestMapping(value="/setDelete",method=RequestMethod.POST)
	@ResponseBody Tab_feedback setDelete(Tab_feedback tab){
		
		//验证非空
		if(!StringUtils.isEmpty(tab.getId())){
			ifeedbackService.setDelete(tab.getId());
			tab.msg="删除成功!";
			
			return tab;
		}
		tab.msg="参数有误,删除失败！";
		return tab;
	}
	
	/**
	 * 
	 * 获取投诉建议，all
	 * @author lingfe    
	 * @created 2017年12月23日 上午11:29:24  
	 * @return 结果
	 */
	@RequestMapping(value="/getList",method=RequestMethod.GET)
	@ResponseBody
	List<Tab_feedback> getList(){
		return ifeedbackService.getList();		
	}
	
	/**
	 * 
	 * 保存投诉建议
	 * @author lingfe     
	 * @created 2017年12月23日 上午11:27:49  
	 * @param tab 实体
	 * @return 结果
	 */
	@RequestMapping(value="/save",method=RequestMethod.POST)
	@ResponseBody Tab_feedback save(Tab_feedback tab){
		//验证
		if(StringUtils.isEmpty(tab.getContent())||tab.getContent() == null){
			tab.msg="内容不能为空哦！";
			return tab;
		}else{
			//设置参数
			tab.setId(UUID.randomUUID().toString());
			tab.setCdate(new Date());
			tab.setMdate(tab.getCdate());
			tab.setCreator(tab.getId());
			tab.setUman(tab.getId());
			//执行操作
			ifeedbackService.save(tab);
			tab.msg="保存成功!";
			
			return tab;
		}
	}
	
}
