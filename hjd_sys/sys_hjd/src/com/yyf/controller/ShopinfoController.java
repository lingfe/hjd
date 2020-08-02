package com.yyf.controller;

import java.io.IOException;
import java.util.ArrayList;
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
import org.springframework.web.multipart.MultipartFile;

import com.yyf.controller.util.UploadUtils;
import com.yyf.model.FtpConfig;
import com.yyf.model.PageModel;
import com.yyf.model.Tab_shopinfo;
import com.yyf.service.IshopinfoService;
import com.yyf.util.FtpUtil;

/**
 * 
  * 文件名：ShopinfoController.java
  * 描述：商品信息请求访问，表示层 
  * 修改人： lingfe
  * 修改时间：2017年12月19日 下午4:25:14
  * 修改内容：
 */
@Controller
@RequestMapping("/shopinfo")
public class ShopinfoController {

	//自动装配
	@Autowired
	private IshopinfoService ishopinfoService;
	
	/**
	 * 
	 * 将商品修改未经销商的商品，并修改状态
	 * @author lingfe     
	 * @created 2017年12月23日 下午2:56:36  
	 * @param 实体
	 * @return 结果
	 */
	@RequestMapping(value="/setStateUpdate",method=RequestMethod.POST)
	@ResponseBody
	Tab_shopinfo setStateUpdate(Tab_shopinfo tab){
		if(tab.getId() == null){
			tab.msg="参数有误";
			return tab;
		}else{
			if(tab.getState() == 1){
				tab.setDistributorId(null);
				tab.setDistributorName(null);
			}
			//执行修改
			ishopinfoService.setStateUpdate(tab);
			tab.msg="修改成功!";
			return tab;
		}
	}
	
	/**
	 * 
	 * 根据id修改商品信息
	 * @author lingfe     
	 * @created 2017年12月21日 上午10:49:57  
	 * @param 实体
	 * @return 结果
	 */
	@RequestMapping(value="/setUpdate",method=RequestMethod.POST)
    @ResponseBody Tab_shopinfo setUpdate(Tab_shopinfo tab){
    	//判断非空
		if(!StringUtils.isEmpty(tab.getId())){
			//执行修改
			ishopinfoService.setUpdate(tab);
			return tab;
		}
		
		return null;
    }
	
	/**
	 * 
	 * 根据参数id获取商品信息
	 * @author lingfe     
	 * @created 2017年12月20日 下午4:47:18  
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/getInfo",method=RequestMethod.POST)
    @ResponseBody Tab_shopinfo getInfo(Tab_shopinfo tab){
		//判断
		if(!StringUtils.isEmpty(tab.getId())){
			return ishopinfoService.getListWhere(tab);
		}
		return null;
	}
	
	
	/**
	 * 
	 * 根据id删除商品信息
	 * @author lingfe     
	 * @created 2017年12月20日 下午4:17:36  
	 * @param id
	 * @return 结果
	 */
	@RequestMapping(value="/setDelete",produces = "application/json; charset=utf-8",method=RequestMethod.POST)
	@ResponseBody String setDelete(@RequestParam(value="id",required=false) String id){
		
		//判断
		if(StringUtils.isEmpty(id)){
			return "失败!id 为空!";
		}
		//执行删除
		ishopinfoService.setDelete(id);
		
		return "删除成功!";
	}
	
	/**
	 * 
	 * 获取商品信息 
	 * @author lingfe
	 * @created 2017年12月20日 下午3:27:26  
	 * @param 实体参数
	 * @return
	 */
	@RequestMapping(value="/getList",method=RequestMethod.POST)
	@ResponseBody PageModel<Tab_shopinfo> statusQueryPaging(
			@RequestParam(value="distributorId",required=false)String distributorId,
			@RequestParam(value="state",required=false) Integer state,
			@RequestParam(value="pageIndex", required=false)Integer pageIndex,
			@RequestParam(value="pageNum", required=false)Integer pageNum){
		// 分页模型
		PageModel<Tab_shopinfo> page = new PageModel<Tab_shopinfo>();
		// 设置分页数值
		page.setNumCount(ishopinfoService.statusQueryCount());
		
		//验证非空
		if(state == null){
			state=1;
		}
		if(state == 0 && distributorId !=null){
			//获取经销商操作的商品信息
			page.setList(ishopinfoService.getJxsList(distributorId));
			return page;
		}
		
		if(pageIndex !=null){
			page.setPageIndex(pageIndex);
		}
		if(pageNum !=null){
			page.setPageNum(pageNum);
		}
		

		// 得到分页数据,默认
		List<Tab_shopinfo> statusQuery = ishopinfoService.statusQueryPaging(state,((page.getPageIndex() - 1) * page.getPageNum()), page.getPageNum());
		
		// 设置到page
		page.setList(statusQuery);

		return page;
	}
	
    
    /**
     * 
     * 文件上传
     * @author lingfe   
     * @created 2017年12月19日 下午5:26:53  
     * @param files
     * @return
     * @throws IOException
     */
    @RequestMapping("/uploadFiles")  
    @ResponseBody  
	public List<String> uploadFiles(@RequestParam("file")MultipartFile[] files) throws IOException {  
	  
	        List<String> photoList = new ArrayList<String>();  
	        
	        FtpConfig ftpConfig=new FtpConfig(); 
	        
	        //循环上传多个图片  
 	        for(MultipartFile file:files){  
	  
  	            String oldName = file.getOriginalFilename();  
 	            String picNewName = UploadUtils.generateRandonFileName(oldName);//通过工具类产生新图片名称，防止重名  
	  
	            String picSavePath = UploadUtils.getYiJieDate();//通过工具类把图片目录分级  
	  
	            photoList.add(picSavePath+"/"+picNewName);//设置图片的url--》就是存储到数据库的字符串url  
	            
	            System.out.println(ftpConfig.toString());
	            
                FtpUtil.pictureUploadByConfig(ftpConfig,picNewName,picSavePath,file.getInputStream());//上传到图片服务器的操作  
	        }  
	  
	        return photoList;
	 } 
	
	/**
	 * 
	 * 请求保存商品信息
	 * @author lingfe  
	 * @created 2017年12月19日 下午4:27:08  
	 * @param 实体类
	 * @return
	 */
	@RequestMapping(value="/save",method=RequestMethod.POST)
	@ResponseBody Tab_shopinfo save(Tab_shopinfo tab){
		//验证是否为空
		if(!StringUtils.isEmpty(tab)){
			//设置参数
			tab.setId(UUID.randomUUID().toString());
			tab.setCdate(new Date());
			tab.setMdate(tab.getCdate());
			tab.setCreator(tab.getId());
			tab.setUman(tab.getId());
			//保存
			int tt=ishopinfoService.save(tab);
			
			//返回
			return tab;
		}
		return null;
	}
}
