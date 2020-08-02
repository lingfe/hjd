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

import com.yyf.model.FtpConfig;
import com.yyf.model.PageModel;
import com.yyf.model.Tab_carouselfigure;
import com.yyf.service.IcarouselfigureService;

/**
 * 
  * 文件名：CarouselfigureController.java
  * 描述： 轮播图数据请求，表示层
  * 修改人： lingfe
  * 修改时间：2017年12月18日 上午11:17:39
  * 修改内容：
 */
@Controller
@RequestMapping("/carouselfigure")
public class CarouselfigureController {

	//自动装配
	@Autowired
	private IcarouselfigureService icarouselfigureService;
	
	/**
	 * 
	 * 根据参数删除轮播图
	 * @author lingfe    
	 * @created 2017年12月21日 下午4:36:43  
	 * @param tab 实体
	 * @return 结果
	 */
	@RequestMapping(value="/setDelete",method=RequestMethod.POST)
	@ResponseBody
	Tab_carouselfigure setDelete(Tab_carouselfigure tab){
		//执行删除
		icarouselfigureService.setDelete(tab.getId());
		tab.msg="删除成功!";
		return tab;
	}
	
	/**
	 * 
	 * 保存轮播图信息
	 * @author lingfe     
	 * @created 2017年12月21日 下午4:22:58  
	 * @param tab 实体
	 * @return 结果
	 */
	@RequestMapping(value="/save",method=RequestMethod.POST)
	@ResponseBody
	Tab_carouselfigure save(Tab_carouselfigure tab){
		
		//设置参数
		tab.setId(UUID.randomUUID().toString());
		tab.setCdate(new Date());
		tab.setMdate(tab.getCdate());
		tab.setCreator(tab.getId());
		tab.setUman(tab.getId());
		tab.setImgUrl(FtpConfig.getImgUrl+tab.getImgUrl());
		
		//执行保存
		icarouselfigureService.save(tab);
		tab.msg="保存成功!";
		
		return tab;
	}
	
	/**
	 * 
	 * 查询轮播图数据，分页查询
	 * @author lijie    
	 * @created 2017年5月28日 上午9:09:36 
	 * @param pageIndex 当前页
	 * @param pageNum 页容量
	 */
	@RequestMapping(value = "/pageList", method = RequestMethod.POST)
	@ResponseBody PageModel<Tab_carouselfigure> statusQueryPaging(@RequestParam(value="pageIndex", required=false)Integer pageIndex,
			@RequestParam(value="pageNum", required=false)Integer pageNum){
		// 分页模型
		PageModel<Tab_carouselfigure> page = new PageModel<Tab_carouselfigure>();
		// 设置分页数值
		page.setNumCount(icarouselfigureService.statusQueryCount());
		
		//验证非空
		if(pageIndex !=null){
			page.setPageIndex(pageIndex);
		}
		if(pageNum !=null){
			page.setPageNum(pageNum);
		}

		// 得到分页数据,默认
		List<Tab_carouselfigure> statusQuery = icarouselfigureService.statusQueryPaging(((page.getPageIndex() - 1) * page.getPageNum()), page.getPageNum());
		
		// 设置到page
		page.setList(statusQuery);

		return page;
		
	}

}
