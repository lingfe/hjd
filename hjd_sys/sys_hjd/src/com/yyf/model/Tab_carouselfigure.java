package com.yyf.model;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * 
  * 文件名：Tab_carouselfigure.java
  * 描述： 轮播图数据表
  * 修改人： lingfe
  * 修改时间：2017年12月18日 上午10:23:36
  * 修改内容：
 */
public class Tab_carouselfigure {
	
	private String id;//	 id VARCHAR(64) NOT NULL COMMENT '轮播图表id标识',
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public String getImgName() {
		return imgName;
	}
	public void setImgName(String imgName) {
		this.imgName = imgName;
	}
	public int getState() {
		return state;
	}
	public void setState(int state) {
		this.state = state;
	}
	public Date getCdate() {
		return cdate;
	}
	public void setCdate(Date cdate) {
		this.cdate = cdate;
	}
	public Date getMdate() {
		return mdate;
	}
	public void setMdate(Date mdate) {
		this.mdate = mdate;
	}
	public String getCreator() {
		return creator;
	}
	public void setCreator(String creator) {
		this.creator = creator;
	}
	public String getUman() {
		return uman;
	}
	public void setUman(String uman) {
		this.uman = uman;
	}
	public int getDf() {
		return df;
	}
	public void setDf(int df) {
		this.df = df;
	}
	public int getVersion() {
		return version;
	}
	public void setVersion(int version) {
		this.version = version;
	}
	private String imgUrl;//	 imgUrl VARCHAR(1024) NOT NULL COMMENT '图片地址',
	private String imgName;//	 imgName VARCHAR(64) DEFAULT NULL COMMENT '图片名称，可以为空',
	private int state;//	  `state` INT(11) DEFAULT '0' COMMENT '状态,0=显示,1=下架',
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date cdate;//  `cdate` DATETIME DEFAULT NULL COMMENT '创建时间',
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date mdate;//  `mdate` DATETIME DEFAULT NULL COMMENT '最后修改时间',
	private String creator;//	  `creator` VARCHAR(32) DEFAULT NULL COMMENT '创建人',
	private String uman;//  `uman` VARCHAR(32) DEFAULT NULL COMMENT '修改人',
	private int df;//	  `df` INT(11) DEFAULT '0' COMMENT '是否删除',
	private int version;//	  `version` INT(11) DEFAULT '0' COMMENT '数据版本',
	
	public String msg;//消息
	
}
