package com.yyf.model;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * 
  * 文件名：Tab_shopinfo.java
  * 描述：商品信息表 
  * 修改人： lingfe
  * 修改时间：2017年12月19日 下午4:05:06
  * 修改内容：
 */
public class Tab_shopinfo {

	@Override
	public String toString() {
		return "Tab_shopinfo [id=" + id + ", distributorId=" + distributorId + ", distributorName=" + distributorName
				+ ", title=" + title + ", imgUrl=" + imgUrl + ", price=" + price + ", infoImgUrl=" + infoImgUrl
				+ ", remark=" + remark + ", state=" + state + ", cdate=" + cdate + ", mdate=" + mdate + ", creator="
				+ creator + ", uman=" + uman + ", df=" + df + ", varsion=" + varsion + "]";
	}
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
	public String getInfoImgUrl() {
		return infoImgUrl;
	}
	public void setInfoImgUrl(String infoImgUrl) {
		this.infoImgUrl = infoImgUrl;
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
	public int getVarsion() {
		return varsion;
	}
	public void setVarsion(int varsion) {
		this.varsion = varsion;
	}
	private String id;//	  `id` VARCHAR(64) NOT NULL COMMENT '商品信息表id标识',
	private String distributorId;//	  `distributorId` VARCHAR(64) DEFAULT NULL COMMENT '经销商id',
	private String distributorName;//	  `distributorName` VARCHAR(32) DEFAULT NULL COMMENT '经销商名称，商品店名',
	private String title;//	  `title` VARCHAR(64) NOT NULL COMMENT '标题名称',
	private String imgUrl;//	  `imgUrl` VARCHAR(1024) DEFAULT NULL COMMENT '商品图片，最多三张',
	private float price;//`price` FLOAT DEFAULT NULL COMMENT '价格',
	private String infoImgUrl;//	  `infoImgUrl` VARCHAR(1024) DEFAULT NULL COMMENT '图片信息详细，一张',
	private String remark;//	  `remark` VARCHAR(1024) DEFAULT NULL COMMENT '商品备注',
	private int state;//	  `state` INT(11) DEFAULT '0' COMMENT '状态,0=显示,1=下架',
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date cdate;//	  `cdate` DATETIME DEFAULT NULL COMMENT '创建时间',
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date mdate;//	  `mdate` DATETIME DEFAULT NULL COMMENT '最后修改时间',
	private String creator;//	  `creator` VARCHAR(32) DEFAULT 'admin' COMMENT '创建人',
	private String uman;//	  `uman` VARCHAR(32) DEFAULT 'admin' COMMENT '修改人',
	private int df;//	  `df` INT(11) DEFAULT '0' COMMENT '是否删除',
	private int varsion;//	  `version` INT(11) DEFAULT '0' COMMENT '数据版本',
	/**
	 * 消息
	 */
	public String msg;
}
