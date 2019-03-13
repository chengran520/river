package com.gxhy.hydro.model;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import lombok.Data;

/**
 * @author zhy
 * @Date 2018年7月19日上午9:45:37
 * @CopyRight gxhy_hydro_service
 */
@Data
public class PptnModel {
	//站点编码
	private String stcd;
	//站点名称
	private String stnm;
	//上传时间
	private Date pptntm;
	//站址
	private String stlc;
	//站点类型
	private String sttp;
	//河流名称
	private String rvnm;
	// 水系名称
	private String hnnm;
	// 流域名称
	private String bsnm;
	// 行政区划码
	private String addvcd;
	//行政区名称
	private String addvnm;
	// 报汛等级
	private String frgrd;
	// 信息管理单位
	private String admauth;
	//小时雨量
	private Double drp;
	// 经度
	private Double lgtd;
	// 纬度
	private Double lttd;
	//设备编码
	private String devid;
	
	public String getPptntm(){
		DateFormat daf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		if(!"".equals(this.pptntm) && null != this.pptntm){
			String dateName = daf.format(this.pptntm);
			return dateName;
		}
		return "";
	}
}
