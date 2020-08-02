package com.yyf.model;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * 
  * 文件名：Tab_userinfo.java
  * 描述： 用户信息表
  * 修改人： lingfe
  * 修改时间：2017年12月18日 下午1:53:09
  * 修改内容：
 */
public class Tab_userinfo {
	
	private String id;//	  `id` VARCHAR(64) CHARACTER SET utf8 NOT NULL DEFAULT '用户信息表标识',
	private String openid;//	  openid VARCHAR(64) DEFAULT NULL COMMENT '与微信小程序生成的微信用户id',
	private String username;//	  `username` VARCHAR(32) CHARACTER SET utf8 DEFAULT NULL COMMENT '用户名',
	private String wechatNumber;//	  `wechatNumber` VARCHAR(32) CHARACTER SET utf8 DEFAULT NULL COMMENT '微信账号',
	private String avatarUrl;//	  `avatarUrl` VARCHAR(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '用户头像',
	private String phone;//	  `phone` VARCHAR(32) CHARACTER SET utf8 DEFAULT NULL COMMENT '电话',
	private String provinceName;//	  `provinceName` VARCHAR(64) CHARACTER SET utf8 DEFAULT NULL COMMENT '省',
	private String cityName;//	  `cityName` VARCHAR(64) CHARACTER SET utf8 DEFAULT NULL COMMENT '市',
	private String regionName;//	  `regionName` VARCHAR(64) CHARACTER SET utf8 DEFAULT NULL COMMENT '区',
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getOpenid() {
		return openid;
	}
	public void setOpenid(String openid) {
		this.openid = openid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getWechatNumber() {
		return wechatNumber;
	}
	public void setWechatNumber(String wechatNumber) {
		this.wechatNumber = wechatNumber;
	}
	public String getAvatarUrl() {
		return avatarUrl;
	}
	public void setAvatarUrl(String avatarUrl) {
		this.avatarUrl = avatarUrl;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getProvinceName() {
		return provinceName;
	}
	public void setProvinceName(String provinceName) {
		this.provinceName = provinceName;
	}
	public String getCityName() {
		return cityName;
	}
	public void setCityName(String cityName) {
		this.cityName = cityName;
	}
	public String getRegionName() {
		return regionName;
	}
	public void setRegionName(String regionName) {
		this.regionName = regionName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getMemo() {
		return memo;
	}
	public void setMemo(String memo) {
		this.memo = memo;
	}
	public int getState() {
		return state;
	}
	public void setState(int state) {
		this.state = state;
	}
	public int getDf() {
		return df;
	}
	public void setDf(int df) {
		this.df = df;
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
	public int getVersion() {
		return version;
	}
	public void setVersion(int version) {
		this.version = version;
	}
	private String address;//	  `address` VARCHAR(256) CHARACTER SET utf8 DEFAULT NULL COMMENT '详细地址',
	private String memo;//	  `memo` VARCHAR(64) CHARACTER SET utf8 DEFAULT NULL COMMENT '备注',
	private int state;//	  `state` INT(11) DEFAULT 0 COMMENT '账号状态,0=普通用户,1=管理员',
	private int df;//	  `df` INT(11) DEFAULT '0' COMMENT '是否删除',
	private String creator;//	  `creator` VARCHAR(32) CHARACTER SET utf8 DEFAULT NULL COMMENT '创建人',
	private String uman;//	  `uman` VARCHAR(32) CHARACTER SET utf8 DEFAULT NULL COMMENT '修改人',
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date cdate;//	  `cdate` DATETIME DEFAULT NULL COMMENT '创建时间',
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date mdate;//	  `mdate` DATETIME DEFAULT NULL COMMENT '最后修改时间',
	private int version;//	  `version` INT(11) DEFAULT '0' COMMENT '数据版本',
	/*
	 * 消息
	 */
	public String msg;
}
