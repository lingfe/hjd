package com.yyf.model;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * 
  * 文件名：Tab_distributor.java
  * 描述： 经销商表
  * 修改人： lingfe
  * 修改时间：2017年12月21日 下午2:07:20
  * 修改内容：
 */
public class Tab_distributor {
	
	public String msg; //消息

	private String id;//	  `id` VARCHAR(64) NOT NULL COMMENT '经销商id标识',
	private String distributorName;//	  `distributorName` VARCHAR(32) DEFAULT NULL COMMENT '经销商名称，商店名称',
	private String pwd;//		  `pwd` VARCHAR(32) DEFAULT NULL COMMENT '经销商登录密码,微信号，或者openid',
	private int state;//	  `state` INT(11) DEFAULT '0' COMMENT '状态,0=正常',
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date cdate;//	  `cdate` DATETIME DEFAULT NULL COMMENT '创建时间',
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date mdate;//	  `mdate` DATETIME DEFAULT NULL COMMENT '最后修改时间',
	private String creator;//	  `creator` VARCHAR(64) DEFAULT 'admin' COMMENT '创建人',
	private String uman;//	  `uman` VARCHAR(64) DEFAULT 'admin' COMMENT '修改人',
	private int df;//	  `df` INT(11) DEFAULT '0' COMMENT '是否删除',
	private int version;//	  `version` INT(11) DEFAULT '0' COMMENT '数据版本',
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getDistributorName() {
		return distributorName;
	}
	public void setDistributorName(String distributorName) {
		this.distributorName = distributorName;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
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
	@Override
	public String toString() {
		return "Tab_distributor [id=" + id + ", distributorName=" + distributorName + ", pwd=" + pwd + ", state="
				+ state + ", cdate=" + cdate + ", mdate=" + mdate + ", creator=" + creator + ", uman=" + uman + ", df="
				+ df + ", version=" + version + "]";
	}
	
}
