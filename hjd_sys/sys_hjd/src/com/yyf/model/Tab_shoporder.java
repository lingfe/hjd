package com.yyf.model;

import java.util.Date;

/**
 * 
  * 文件名：Tab_shoporder.java
  * 描述：商品订单表 
  * 修改人： lingfe
  * 修改时间：2017年12月25日 下午5:28:35
  * 修改内容：
 */
public class Tab_shoporder {
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getDistributorId() {
		return distributorId;
	}
	public void setDistributorId(String distributorId) {
		this.distributorId = distributorId;
	}
	public String getDistributorName() {
		return distributorName;
	}
	public void setDistributorName(String distributorName) {
		this.distributorName = distributorName;
	}
	public String getPersonalId() {
		return personalId;
	}
	public void setPersonalId(String personalId) {
		this.personalId = personalId;
	}
	public String getShopInfoid() {
		return shopInfoid;
	}
	public void setShopInfoid(String shopInfoid) {
		this.shopInfoid = shopInfoid;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getDistributionTime() {
		return distributionTime;
	}
	public void setDistributionTime(String distributionTime) {
		this.distributionTime = distributionTime;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
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
	private String id;//	  `id` VARCHAR(64) NOT NULL COMMENT '商品订单表id标识',
	private String distributorId;//	  `distributorId` VARCHAR(64) DEFAULT NULL COMMENT '经销商id',
	private String distributorName;//	  `distributorName` VARCHAR(32) DEFAULT NULL COMMENT '经销商名称，商品店名',
	private String personalId;//	  `personalId` VARCHAR(64) DEFAULT NULL COMMENT '用户id',
	private String shopInfoid;//	  `shopInfoid` VARCHAR(64) DEFAULT NULL COMMENT '商品信息id',
	private String title;//	  `title` VARCHAR(64) DEFAULT NULL COMMENT '标题名称',
	private String imgUrl;//	  `imgUrl` VARCHAR(1024) DEFAULT NULL COMMENT '商品图片，最多一张',
	private float price;//	  `price` FLOAT DEFAULT NULL COMMENT '价格',
	private int number;//	  `number` INT(11) DEFAULT NULL COMMENT '数量',
	private String address;//	  `address` VARCHAR(1024) DEFAULT NULL COMMENT '收货地址',
	private String phone;//	  `phone` VARCHAR(32) DEFAULT NULL COMMENT '电话',
	private String distributionTime;//	  `distributionTime` VARCHAR(1024) DEFAULT NULL COMMENT '配送时间',
	private String remark;//	  `remark` VARCHAR(1024) DEFAULT NULL COMMENT '备注',
	private int state;//	  `state` INT(11) DEFAULT '0' COMMENT '状态,0=已提交，未发货,1=已发货,未确认,2=已完成,已确认,3=已取消',
	private Date cdate;//	  `cdate` DATETIME DEFAULT NULL COMMENT '创建时间',
	private Date mdate;//	  `mdate` DATETIME DEFAULT NULL COMMENT '最后修改时间',
	private String creator;//	  `creator` VARCHAR(64) DEFAULT 'admin' COMMENT '创建人',
	private String uman;//	  `uman` VARCHAR(64) DEFAULT 'admin' COMMENT '修改人',
	private int df;//	  `df` INT(11) DEFAULT '0' COMMENT '是否删除',
	private int version;//	  `version` INT(11) DEFAULT '0' COMMENT '数据版本',
	/**
	 * 消息
	 */
	public String msg;
}
