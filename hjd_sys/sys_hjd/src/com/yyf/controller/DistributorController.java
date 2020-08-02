package com.yyf.controller;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yyf.model.Tab_distributor;
import com.yyf.service.IdistributorService;

/**
 * 
  * 文件名：DistributorController.java
  * 描述：经销商数据请求类 
  * 修改人： lingfe
  * 修改时间：2017年12月21日 下午2:28:30
  * 修改内容：
 */
@Controller
@RequestMapping("/distributor")
public class DistributorController {

	//自动装配
	@Autowired
	private IdistributorService idistributorService;
	
	/**
	 * 
	 * 根据id或pwd查询账号信息
	 * @author lingfe
	 * @created 2017年12月21日 下午3:17:48  
	 * @param id
	 * @param pwd
	 * @return
	 */
	@RequestMapping(value="/getInfo",method=RequestMethod.POST)
	@ResponseBody
    Tab_distributor	getInfo(@RequestParam(value="id",required=false)String id,
    		@RequestParam(value="pwd",required=false)String pwd){
		Tab_distributor tab=new Tab_distributor();
		
		if("null".equals(pwd)||"".equals(pwd.replaceAll(" ", ""))){
			//提示
			tab.msg="请输入微信号!";
			return tab;
		}else{
			//根据pwd查询
			tab=idistributorService.getInfo(pwd);
			if(tab == null){
				tab=new Tab_distributor();
				tab.msg="该微信号不是经销商!";
				return tab;
			}
			
			return tab;
		}
	}
	
	/**
	 * 
	 * 获取所有经销商账号
	 * @author lingfe     
	 * @created 2017年12月21日 下午3:12:05  
	 * @return 结果
	 */
	@RequestMapping(value="/getList",method=RequestMethod.POST)
	@ResponseBody
	List<Tab_distributor> getList(){
		return idistributorService.getList();
	}
	
	
	/**
	 * 
	 * 请求执行保存或修改操作
	 * @author lingfe     
	 * @created 2017年12月21日 下午2:44:38  
	 * @param tab 实体
	 * @return 结果
	 */
	@RequestMapping(value="/saveOrUpdate",method=RequestMethod.POST)
	@ResponseBody Tab_distributor saveOrUpdate(Tab_distributor tab){
		
		//验证是否为空
		if("null".equals(tab.getDistributorName())||"".equals(tab.getDistributorName().replaceAll(" ", ""))){
			tab.msg="名称不能为空!";
			return tab;
		}else if("null".equals(tab.getPwd())||"".equals(tab.getPwd().replaceAll(" ", ""))){
			tab.msg="微信号不能为空!";
			return tab; 
		}else{	
			//验证id，并执行操作
			return this.isBter(tab);
		}

	}
	//验证id，并执行操作
	private Tab_distributor isBter(Tab_distributor tab){
		//验证
		if(!StringUtils.isEmpty(tab.getId())){
			//执行修改
			idistributorService.setUpdate(tab);
			tab.msg= "修改成功!";
			return tab;
		}else{
			//根据微信号获取经销商
			Tab_distributor tor=idistributorService.getInfo(tab.getPwd());
			//验证是否重复
			if(!StringUtils.isEmpty(tor)){
				tab.msg="微信号已存在!";
				return tab;
			}else{
				//设置参数
				tab.setId(UUID.randomUUID().toString());
				tab.setCdate(new Date());
				tab.setMdate(tab.getCdate());
				tab.setCreator(tab.getId());
				tab.setUman(tab.getId());
				
				//执行保存
				idistributorService.save(tab);
				tab.msg= "保存成功!";
				
				return tab;
			}
		}
	}
}
