package com.gxhy.hydro.model;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import lombok.Data;

/**
 * @author sby
 * @Date 2018年11月14日上午9:45:37
 * @CopyRight gxhy_hydro_service
 */
@Data
public class RiverModel {
	
	private String stcd;
	
	private String stnm;
	
	private Double z;
	
	private Double zt;
	//采集时间
	private Date tm;
	//设备编码
	private String devid;
    //流量
	private String q;
	//站址
	private String stlc;
	
	public String getTm(){
		DateFormat daf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		if(!"".equals(this.tm) && null != this.tm){
			String dateName = daf.format(this.tm);
			return dateName;
		}
		return "";
	}
	
}
