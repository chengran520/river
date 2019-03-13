package com.gxhy.base.basic.model;

import com.gxhy.base.imp.IsNeeded;

import lombok.Data;

@Data
public class ChannelModel {
    
	@IsNeeded
	private String code;//渠道编码
	
	@IsNeeded
	private String name;//渠道名称
	
	@IsNeeded
	private String idName; //渠道所属灌区名称
	
	@IsNeeded
	private String idType; //渠道所属灌区类型
	
	@IsNeeded
	private String LOC; //位置
	
	@IsNeeded
	private String bdtm; //建成时间
	
	@IsNeeded
	private String adag; //管理单位
	
	@IsNeeded
	private String type; //功能类型
	
	@IsNeeded
	private String func; //功能
	
	@IsNeeded
	private double acfl; //实际流量
	
	@IsNeeded
	private String chle; //渠道长度
	
	@IsNeeded
	private double ecia; //现有控灌面积
	
	@IsNeeded
	private double bepo; //受益人口
	
	@IsNeeded
	private String prname;//上级渠道名称	     
	
	@IsNeeded
	private String flth;//渠道流经行政区划
	
	@IsNeeded
	private String eLoc;//渠末位置
		
	@IsNeeded
	private String prname1;//渠道水源名称
		
	@IsNeeded
	private String wqle;//渠道现状水质类别
	
	@IsNeeded
	private String wrus;//水质是否按渠道功能达标
	
	@IsNeeded
	private long count;//入渠排污口数量
	
	@IsNeeded
	private double  flow;//设计流量
	
	@IsNeeded
	private double  dpyn;//年输水量
	
	@IsNeeded
	private long dpyt;//年输水时间
	
	@IsNeeded
	private double  chleLi;//渠道衬砌长度
	
	@IsNeeded
	private long mbnu;//主要建筑物处数
	
	@IsNeeded
	private double dcia;//渠道长度
	
	@IsNeeded
	private String wrcd;//是否完成管理范围划定
	
	@IsNeeded
	private String wrco;//是否已确权颁证
	
	@IsNeeded
	private String hnnm;//所在流域
	
	@IsNeeded
	private String grad;//主管部门级别
	
	@IsNeeded
	private String pac;//行政区划
	
	@IsNeeded
	private String level;//渠道等级
	
	@IsNeeded
	private String sid;//唯一标识
	
	@IsNeeded
	private String hasNew;//是否规模以上
	
	@IsNeeded
	private String noleader;//是否设置有渠道长
	
	@IsNeeded
	private double long1;//起点经度
	
	@IsNeeded
	private double lat;//起点纬度
	
	@IsNeeded
	private double eLong;//终点经度
	
	@IsNeeded
	private double eLat;//终点纬度
	
	@IsNeeded
	private String startDate;//使用年限
	
	@IsNeeded
	private String clas;//渠道分类
	
	@IsNeeded
	private String  note;//备注
	
	@IsNeeded
	private String village;//所在乡村
	
}
