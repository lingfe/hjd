package com.yyf.model;

import java.util.Date;

/**
 * 
  * 文件名：Tab_feedback.java
  * 描述： 投诉建议表
  * 修改人： lingfe
  * 修改时间：2017年12月23日 上午11:02:16
  * 修改内容：
 */
public class Tab_feedback {
	
	private String id;//	id VARCHAR(64) NOT NULL COMMENT '投诉建议表id标识',
	private String personalId;//	personalId VARCHAR(64) NOT NULL COMMENT '用户id,投诉者id',
	private String content;//	content VARCHAR(1024) DEFAULT NULL COMMENT '内容',
	private String remark;//	 remark VARCHAR(1024) DEFAULT NULL COMMENT '备注',
	private int state;//	 	   `state` INT(11) DEFAULT '0' COMMENT '状态,0=正常',
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
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPersonalId() {
		return personalId;
	}
	public void setPersonalId(String personalId) {
		this.personalId = personalId;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
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
	@Override
	public String toString() {
		return "Tab_feedback [id=" + id + ", personalId=" + personalId + ", content=" + content + ", remark=" + remark
				+ ", state=" + state + ", cdate=" + cdate + ", mdate=" + mdate + ", creator=" + creator + ", uman="
				+ uman + ", df=" + df + ", version=" + version + "]";
	}
	
	
}
