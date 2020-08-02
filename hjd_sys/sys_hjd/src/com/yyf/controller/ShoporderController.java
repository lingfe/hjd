package com.yyf.controller;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yyf.model.Tab_shoporder;
import com.yyf.service.IshoporderService;

/**
 * 
  * 文件名：ShoporderController.java
  * 描述：商品订单请求访问类 
  * 修改人： lingfe
  * 修改时间：2017年12月26日 上午10:26:33
  * 修改内容：
 */
@Controller
@RequestMapping("/shoporder")
public class ShoporderController {

	//自动装配
	@Autowired
	private IshoporderService ishoporderService;
	
	/**
	 * 
	 * 根据id修改订单状态
	 * @author lingfe    
	 * @created 2017年12月26日 上午10:47:44  
	 * @param tab 实体
	 * @return 结果
	 */
	@RequestMapping(value="/setState",method=RequestMethod.POST)
	@ResponseBody Tab_shoporder setState(Tab_shoporder tab){
		ishoporderService.setState(tab.getState(), tab.getId());
		return tab;
	}
	
	/**
	 * 
	 * 根据用户id查询订单信息
	 * @author lingfe     
	 * @created 2017年12月26日 上午10:43:18  
	 * @param personalId
	 * @return
	 */
	@RequestMapping(value="/getWherePersonalIdList",method=RequestMethod.POST)
	@ResponseBody List<Tab_shoporder> getWhere(@RequestParam(value="personalId",required=false)String personalId){
		List<Tab_shoporder> list=ishoporderService.getWherePersonalIdList(personalId);
		return list;
	}
	
	/**
	 * 
	 * 根据经销商id查询订单信息
	 * @author lingfe    
	 * @created 2017年12月26日 上午10:40:21  
	 * @param distributorId
	 * @return
	 */
	@RequestMapping(value="/getWhereDistributorIdList",method=RequestMethod.POST)
	@ResponseBody List<Tab_shoporder> getWhereDistributorIdList(@RequestParam(value="distributorId",required=false)String distributorId){
		
		List<Tab_shoporder> list=ishoporderService.getWhereDistributorIdList(distributorId);
		
		return list;
	}
	
	/**
	 * 
	 * 根据店铺名，订单状态，配送时间查询订单信息
	 * @author lingfe     
	 * @created 2017年12月26日 上午10:35:48  
	 * @param distributorName
	 * @param state
	 * @param distributionTime
	 * @return
	 */
	@RequestMapping(value="/getWhere",method=RequestMethod.POST)
	@ResponseBody List<Tab_shoporder> getWhere(@RequestParam(value="distributorName",required=false)String distributorName,
			@RequestParam(value="state",required=false)int state,
			@RequestParam(value="distributionTime",required=false)String distributionTime){
		
		List<Tab_shoporder>  list=ishoporderService.getWhere(distributorName, state, distributionTime);
		return list;
	}
	
	/**
	 * 
	 * 保存订单
	 * @author 杨杰     
	 * @created 2017年12月26日 上午10:31:47  
	 * @param tab
	 * @return
	 */
	@RequestMapping(value="/save",method=RequestMethod.POST)
	@ResponseBody Tab_shoporder save(Tab_shoporder tab){
		//验证非空
		if("null".equals(tab.getAddress())||"".equals(tab.getAddress().replaceAll(" ", ""))){
			tab.msg="收货地址不能为空!";
			return tab;
		}else if("null".equals(tab.getPhone())||"".equals(tab.getPhone().replaceAll(" ", ""))){
			tab.msg="联系电话不能为空!";
			return tab;
		}
		//设置参数
		tab.setId(UUID.randomUUID().toString());
		tab.setCdate(new Date());
		tab.setMdate(tab.getCdate());
		tab.setCreator(tab.getId());
		tab.setUman(tab.getId());
		//执行操作
		ishoporderService.save(tab);
		tab.msg="提交成功!";
		return tab;
	}
	
}
