package com.gxhy.base.monitor.model;

import java.util.Date;

import lombok.Data;

/**
 * 河流基础信息
 * @author yb
 *
 */
@Data
public class StRiverB{
	//河流编码
	private String rvCd;
	//河流名称
	private String rvNm;
	//所属水系
	private String hnnm;
	//所属流域
	private String bsnm;
	//河流岸别
	private String stbk;
	//河流长度
	private Double rvlt;
	//河流面积
	private Double draArea;
	//上级河流编码
	private String prvCd;
	//上级河流名称
	private String prvNm;
	//河源
	private String rvOn;
	//河源经度
	private Double rvOnLgtd;
	//河源纬度
	private Double rvOnLttd;
	//河口
	private String rvMh;
	//河口经度
	private Double rvMhLgtd;
	//河口纬度
	private Double rvMhLttd;
	//行政区
	private String addvcd;
	//行政区名称
	private String addvnm;
	//创建时间
	private Date crtTm;
	//更新时间
	private Date updTm;
	//操作人员
	private String OperUser;
	//备注
	private String dt;
	//对应预案文件地址
	private String prewAddes;
	
	//类别  1：河流，2：水库
	private String tp;
}
