package com.gxhy.base.monitor.model;

import org.apache.commons.lang3.StringUtils;

import com.gxhy.utils.BasicSiteUtil;

public class PoolModel {
	
     private String  damcd;//山塘编码
     
     private String  damname;//山塘名称
     
     private double  xhst;//总库容
     
     private String  hnnm;//河流水系
     
     private String  stlc;//所在地
     
     private String lttd;//纬度
     
     private String lgtd;//经度
     
     private double  drna;//集雨面积
     
     private String signer;//功能
     
     private String sttp;
     
     private String sttpNm;
     
     private String userNm;

 	
	public String getDamcd() {
		return damcd;
	}

	public void setDamcd(String damcd) {
		this.damcd = damcd;
	}

	public String getDamname() {
		return damname;
	}

	public void setDamname(String damname) {
		this.damname = damname;
	}

	public double getXhst() {
		return xhst;
	}

	public void setXhst(double xhst) {
		this.xhst = xhst;
	}

	public String getHnnm() {
		return hnnm;
	}

	public void setHnnm(String hnnm) {
		this.hnnm = hnnm;
	}

	public String getStlc() {
		return stlc;
	}

	public void setStlc(String stlc) {
		this.stlc = stlc;
	}

	public String getLttd() {
		return lttd;
	}

	public void setLttd(String lttd) {
		this.lttd = lttd;
	}

	public String getLgtd() {
		return lgtd;
	}

	public void setLgtd(String lgtd) {
		this.lgtd = lgtd;
	}

	public double getDrna() {
		return drna;
	}

	public void setDrna(double drna) {
		this.drna = drna;
	}

	public String getSigner() {
		return signer;
	}

	public void setSigner(String signer) {
		this.signer = signer;
	}

	public String getUserNm() {
		return userNm;
	}

	public void setUserNm(String userNm) {
		this.userNm = userNm;
	}

	public String getSttp() {
		return sttp;
	}

	public void setSttp(String sttp) {
		this.sttp = sttp;
	}

	public String getSttpNm() {
		if(StringUtils.isNotBlank(sttp)){
			return BasicSiteUtil.getSttpNm(sttp);
		}else{
			return null;
		}
		
	}

	public void setSttpNm(String sttpNm) {
		this.sttpNm = sttpNm;
	}
     

}
